-- Vocardably — secure coins / streak / shop migration
-- Run this once in the Supabase SQL editor.
-- Idempotent: safe to re-run.

-- =============================================================
-- 1. shop_items table — canonical prices, source of truth
-- =============================================================
CREATE TABLE IF NOT EXISTS shop_items (
  id    text PRIMARY KEY,
  price int  NOT NULL CHECK (price >= 0 AND price <= 5000)
);

ALTER TABLE shop_items ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "shop_items readable by all" ON shop_items;
CREATE POLICY "shop_items readable by all" ON shop_items
  FOR SELECT USING (true);

-- Seed / refresh prices (mirrors avatarConfig.js)
INSERT INTO shop_items (id, price) VALUES
  ('hatpartyhat',                300),
  ('hatstrawhat',                300),
  ('hatdurag',                   300),
  ('hatchic',                    300),
  ('accessorybowtie',            500),
  ('accessorypeacepale',         500),
  ('accessorypeaceyellow',       500),
  ('accessorypeaceblack',        500),
  ('accessoryshine',             500),
  ('glassesround',               300),
  ('glassesroundsun',            300),
  ('glassessquare',              300),
  ('glassessquaresun',           300),
  ('hairguyblonde',              100),
  ('hairguybrown',               100),
  ('hairgirlblonde',             100),
  ('hairgirlbrown',              100),
  ('haircurllongblonde',         100),
  ('haircurllongbrown',          100),
  ('hairbobblonde',              100),
  ('hairbobbrown',               100),
  ('hairmiddlepartblonde',       100),
  ('hairmiddlepartbrown',        100),
  ('title:Word Wizard',          250),
  ('title:Vocab Rookie',         250),
  ('title:Polyglot in Training', 250),
  ('title:King Vocab',           250),
  ('title:Goon',                 250),
  ('title:The Strongest One',    250),
  ('title:Fish',                 250),
  ('title:Girlie',               250),
  ('title:Bestie',               250),
  ('title:Word Pirate',          250)
ON CONFLICT (id) DO UPDATE SET price = EXCLUDED.price;


-- =============================================================
-- 2. Trigger to block direct writes to protected profile columns
--    SECURITY DEFINER RPCs bypass it via a transaction-local flag.
-- =============================================================
CREATE OR REPLACE FUNCTION enforce_profile_protection()
RETURNS trigger
LANGUAGE plpgsql
AS $$
BEGIN
  IF current_setting('app.bypass_profile_protection', true) = 'on' THEN
    RETURN NEW;
  END IF;

  IF NEW.coins             IS DISTINCT FROM OLD.coins             THEN RAISE EXCEPTION 'Direct updates to coins are not allowed';             END IF;
  IF NEW.streak            IS DISTINCT FROM OLD.streak            THEN RAISE EXCEPTION 'Direct updates to streak are not allowed';            END IF;
  IF NEW.streak_freezes    IS DISTINCT FROM OLD.streak_freezes    THEN RAISE EXCEPTION 'Direct updates to streak_freezes are not allowed';    END IF;
  IF NEW.last_session_date IS DISTINCT FROM OLD.last_session_date THEN RAISE EXCEPTION 'Direct updates to last_session_date are not allowed'; END IF;
  IF NEW.unlocked_items    IS DISTINCT FROM OLD.unlocked_items    THEN RAISE EXCEPTION 'Direct updates to unlocked_items are not allowed';    END IF;

  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS profile_protection ON profiles;
CREATE TRIGGER profile_protection
  BEFORE UPDATE ON profiles
  FOR EACH ROW
  EXECUTE FUNCTION enforce_profile_protection();


-- =============================================================
-- 3. complete_session(p_correct, p_total, p_completed)
--    Server-side coin / streak / history calculation.
-- =============================================================
CREATE OR REPLACE FUNCTION complete_session(
  p_correct   int,
  p_total     int,
  p_completed boolean
)
RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_user           uuid := auth.uid();
  v_profile        profiles%ROWTYPE;
  v_today          date := (now() AT TIME ZONE 'UTC')::date;
  v_yesterday      date := v_today - 1;
  v_earned_coins   int  := 0;
  v_new_streak     int;
  v_new_freezes    int;
  v_today_count    int;
  v_hour_count     int;
  v_was_today      boolean;
BEGIN
  IF v_user IS NULL THEN
    RAISE EXCEPTION 'Not authenticated';
  END IF;

  -- Input validation
  IF p_correct IS NULL OR p_total IS NULL OR p_completed IS NULL THEN
    RAISE EXCEPTION 'Missing inputs';
  END IF;
  IF p_correct < 0 OR p_correct > 200 THEN
    RAISE EXCEPTION 'correct out of range (0..200)';
  END IF;
  IF p_total < 0 OR p_total > 200 THEN
    RAISE EXCEPTION 'total out of range (0..200)';
  END IF;
  IF p_correct > p_total THEN
    RAISE EXCEPTION 'correct cannot exceed total';
  END IF;

  -- Rate limiting (cap session spam)
  SELECT count(*) INTO v_today_count
    FROM session_history
    WHERE user_id = v_user AND played_at >= now() - interval '24 hours';
  IF v_today_count >= 20 THEN
    RAISE EXCEPTION 'Daily session limit reached';
  END IF;

  SELECT count(*) INTO v_hour_count
    FROM session_history
    WHERE user_id = v_user AND played_at >= now() - interval '1 hour';
  IF v_hour_count >= 10 THEN
    RAISE EXCEPTION 'Hourly session limit reached';
  END IF;

  -- Lock the profile row
  SELECT * INTO v_profile FROM profiles WHERE id = v_user FOR UPDATE;
  IF NOT FOUND THEN
    RAISE EXCEPTION 'Profile not found';
  END IF;

  v_new_streak  := COALESCE(v_profile.streak, 0);
  v_new_freezes := COALESCE(v_profile.streak_freezes, 0);
  v_was_today   := (v_profile.last_session_date = v_today);

  -- Streak logic
  IF v_profile.last_session_date IS NULL THEN
    v_new_streak := 1;
  ELSIF v_profile.last_session_date = v_today THEN
    -- already counted today
    NULL;
  ELSIF v_profile.last_session_date = v_yesterday THEN
    v_new_streak := v_new_streak + 1;
  ELSE
    -- missed at least one day
    IF v_new_freezes > 0 THEN
      v_new_freezes := v_new_freezes - 1;
      -- streak preserved
    ELSE
      v_new_streak := 1;
    END IF;
  END IF;

  -- Coins (only when fully completed AND first session of the day)
  IF p_completed AND NOT v_was_today THEN
    v_earned_coins := LEAST(p_correct, 200);
  END IF;

  -- Bypass protection trigger inside this trusted function
  PERFORM set_config('app.bypass_profile_protection', 'on', true);

  UPDATE profiles SET
    streak            = v_new_streak,
    streak_freezes    = v_new_freezes,
    last_session_date = v_today,
    coins             = COALESCE(coins, 0) + v_earned_coins
  WHERE id = v_user;

  PERFORM set_config('app.bypass_profile_protection', 'off', true);

  INSERT INTO session_history (user_id, correct, total)
    VALUES (v_user, p_correct, p_total);

  RETURN jsonb_build_object(
    'streak',            v_new_streak,
    'streak_freezes',    v_new_freezes,
    'last_session_date', v_today,
    'earned_coins',      v_earned_coins,
    'coins',             COALESCE(v_profile.coins, 0) + v_earned_coins
  );
END;
$$;

GRANT EXECUTE ON FUNCTION complete_session(int, int, boolean) TO authenticated;


-- =============================================================
-- 4. buy_item(p_item_id) — looks up canonical price, deducts coins
-- =============================================================
CREATE OR REPLACE FUNCTION buy_item(p_item_id text)
RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_user      uuid := auth.uid();
  v_profile   profiles%ROWTYPE;
  v_price     int;
  v_unlocked  text[];
  v_new_coins int;
BEGIN
  IF v_user IS NULL THEN
    RAISE EXCEPTION 'Not authenticated';
  END IF;
  IF p_item_id IS NULL OR length(p_item_id) = 0 THEN
    RAISE EXCEPTION 'Missing item id';
  END IF;

  SELECT price INTO v_price FROM shop_items WHERE id = p_item_id;
  IF v_price IS NULL THEN
    RAISE EXCEPTION 'Unknown item';
  END IF;

  SELECT * INTO v_profile FROM profiles WHERE id = v_user FOR UPDATE;
  IF NOT FOUND THEN
    RAISE EXCEPTION 'Profile not found';
  END IF;

  IF p_item_id = ANY(COALESCE(v_profile.unlocked_items, ARRAY[]::text[])) THEN
    RAISE EXCEPTION 'Already owned';
  END IF;

  IF COALESCE(v_profile.coins, 0) < v_price THEN
    RAISE EXCEPTION 'Not enough coins';
  END IF;

  v_new_coins := v_profile.coins - v_price;
  v_unlocked  := array_append(COALESCE(v_profile.unlocked_items, ARRAY[]::text[]), p_item_id);

  PERFORM set_config('app.bypass_profile_protection', 'on', true);

  UPDATE profiles
    SET coins = v_new_coins,
        unlocked_items = v_unlocked
    WHERE id = v_user;

  PERFORM set_config('app.bypass_profile_protection', 'off', true);

  RETURN jsonb_build_object('coins', v_new_coins, 'unlocked_items', v_unlocked);
END;
$$;

GRANT EXECUTE ON FUNCTION buy_item(text) TO authenticated;


-- =============================================================
-- 5. buy_streak_freeze() — fixed price 50, max 3 owned
-- =============================================================
CREATE OR REPLACE FUNCTION buy_streak_freeze()
RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_user        uuid := auth.uid();
  v_profile     profiles%ROWTYPE;
  v_new_coins   int;
  v_new_freezes int;
  C_PRICE       constant int := 50;
  C_MAX_FREEZES constant int := 3;
BEGIN
  IF v_user IS NULL THEN
    RAISE EXCEPTION 'Not authenticated';
  END IF;

  SELECT * INTO v_profile FROM profiles WHERE id = v_user FOR UPDATE;
  IF NOT FOUND THEN
    RAISE EXCEPTION 'Profile not found';
  END IF;

  IF COALESCE(v_profile.streak_freezes, 0) >= C_MAX_FREEZES THEN
    RAISE EXCEPTION 'Already at max freezes';
  END IF;
  IF COALESCE(v_profile.coins, 0) < C_PRICE THEN
    RAISE EXCEPTION 'Not enough coins';
  END IF;

  v_new_coins   := v_profile.coins - C_PRICE;
  v_new_freezes := COALESCE(v_profile.streak_freezes, 0) + 1;

  PERFORM set_config('app.bypass_profile_protection', 'on', true);

  UPDATE profiles
    SET coins = v_new_coins,
        streak_freezes = v_new_freezes
    WHERE id = v_user;

  PERFORM set_config('app.bypass_profile_protection', 'off', true);

  RETURN jsonb_build_object('coins', v_new_coins, 'streak_freezes', v_new_freezes);
END;
$$;

GRANT EXECUTE ON FUNCTION buy_streak_freeze() TO authenticated;
