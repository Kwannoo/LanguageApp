import { useState, useEffect, useCallback } from 'react';
import PageTransition from './components/PageTransition.jsx';
import HomeScreen    from './components/HomeScreen.jsx';
import Session       from './components/Session.jsx';
import Complete      from './components/Complete.jsx';
import HistoryScreen from './components/HistoryScreen.jsx';
import FriendsScreen from './components/FriendsScreen.jsx';
import AuthScreen      from './components/AuthScreen.jsx';
import WordListScreen  from './components/WordListScreen.jsx';
import AvatarEditor    from './components/AvatarEditor.jsx';
import ShopScreen      from './components/ShopScreen.jsx';
import ResetPassword   from './components/ResetPassword.jsx';
import PrivacyScreen   from './components/PrivacyScreen.jsx';
import { supabase }  from './lib/supabase.js';
import { DEFAULT_AVATAR } from './data/avatarConfig.js';
import { loadSRS, saveSRS } from './utils/srs.js';
import { getCachedWords, setCachedWords } from './utils/wordCache.js';
import { useOnlineStatus } from './utils/onlineStatus.js';
import { enqueue, getQueue, clearQueue } from './utils/syncQueue.js';
import { ensureReferralCode } from './utils/referral.js';

function computeNewStreak(current, lastDate, freezes = 0) {
  const today     = new Date().toDateString();
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  if (lastDate === today)                    return { streak: current, usedFreeze: false };
  if (lastDate === yesterday.toDateString()) return { streak: current + 1, usedFreeze: false };
  // Missed a day — use a freeze if available
  if (freezes > 0) return { streak: current, usedFreeze: true };
  return { streak: 1, usedFreeze: false };
}

function parseDate(dateStr) {
  if (!dateStr) return null;
  return new Date(dateStr + 'T12:00:00').toDateString();
}

export default function App() {
  const online = useOnlineStatus();
  const [screen, setScreen]         = useState('home');
  const [user, setUser]             = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [streak, setStreak]         = useState(0);
  const [lastDate, setLastDate]     = useState(null);
  const [todayDone, setTodayDone]   = useState(false);
  const [lastScore, setLastScore]   = useState({ correct: 0, total: 0, sessionWords: [] });
  const [history, setHistory]       = useState([]);
  const [username, setUsername]     = useState('');
  const [goalMinutes, setGoalMinutes] = useState(
    () => parseInt(localStorage.getItem('taalkaarten_goal') ?? '5', 10)
  );
  const [words, setWords] = useState([]);
  const [language, setLanguage] = useState(
    () => localStorage.getItem('taalkaarten_language') ?? 'nl'
  );
  const [direction, setDirection] = useState(
    () => localStorage.getItem('taalkaarten_direction') ?? 'nl-en'
  );
  const [avatar, setAvatar] = useState(DEFAULT_AVATAR);
  const [srsData, setSrsData] = useState(loadSRS);
  const [showSynonyms, setShowSynonyms] = useState(
    () => localStorage.getItem('taalkaarten_synonyms') === 'true'
  );
  const [theme, setTheme] = useState(
    () => localStorage.getItem('taalkaarten_theme') ?? 'system'
  );

  useEffect(() => {
    if (theme === 'system') document.documentElement.removeAttribute('data-theme');
    else document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const handleSynonymsChange = (val) => {
    setShowSynonyms(val);
    localStorage.setItem('taalkaarten_synonyms', val);
  };

  const handleThemeChange = (val) => {
    setTheme(val);
    localStorage.setItem('taalkaarten_theme', val);
  };

  const handleUsernameChange = useCallback(async (newName) => {
    setUsername(newName);
    if (user) {
      await supabase.from('profiles').update({ username: newName }).eq('id', user.id);
    }
  }, [user]);

  const [discoverable, setDiscoverable]     = useState(true);
  const [referralCode, setReferralCode]     = useState('');
  const [streakFreezes, setStreakFreezes]   = useState(0);
  const [coins, setCoins]                   = useState(0);
  const [unlockedItems, setUnlockedItems]   = useState([]);
  const [title, setTitle]                   = useState('');

  const handleDiscoverableChange = async (val) => {
    setDiscoverable(val);
    if (user) {
      await supabase.from('profiles').update({ discoverable: val }).eq('id', user.id);
    }
  };

  const handleTitleChange = async (val) => {
    setTitle(val);
    if (user) {
      await supabase.from('profiles').update({ title: val }).eq('id', user.id);
    }
  };

  const handleGoalChange = (m) => {
    setGoalMinutes(m);
    localStorage.setItem('taalkaarten_goal', m);
  };

  const handleDirectionChange = (d) => {
    setDirection(d);
    localStorage.setItem('taalkaarten_direction', d);
  };

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    localStorage.setItem('taalkaarten_language', lang);
    const defaultDir = lang === 'nl' ? 'nl-en' : lang === 'es' ? 'es-en' : 'ja-en';
    setDirection(defaultDir);
    localStorage.setItem('taalkaarten_direction', defaultDir);
    loadWords(lang);
  };

  const loadWords = useCallback(async (lang) => {
    const l = lang ?? language;
    const cached = getCachedWords(l);
    if (cached) { setWords(cached); return; }
    const cols = l === 'ja'
      ? 'word, en, meaning, sentence, reading, romaji, synonyms'
      : 'word, en, meaning, sentence, synonyms';
    const PAGE = 1000;
    let all = [], from = 0, done = false;
    while (!done) {
      const { data, error } = await supabase
        .from('words')
        .select(cols)
        .eq('language', l)
        .range(from, from + PAGE - 1);
      if (error) { console.error('Failed to load words:', error.message); return; }
      if (data?.length) all = all.concat(data);
      if (!data || data.length < PAGE) done = true;
      else from += PAGE;
    }
    if (all.length) { setCachedWords(all, l); setWords(all); }
  }, [language]);

  const loadUserData = useCallback(async (userId) => {
    const { data: profile, error: profileError } = await supabase
      .from('profiles')
      .select('streak, last_session_date, srs_data, username, avatar, discoverable, referral_code, streak_freezes, coins, unlocked_items, title')
      .eq('id', userId)
      .maybeSingle();

    // If the query errored for any reason OTHER than "no row", bail out
    // without touching local state. Overwriting local data on a transient
    // network/RLS failure used to silently reset users' progress, which
    // looked like an account deletion.
    if (profileError) {
      console.error('Failed to load profile, keeping local state intact:', profileError);
      return;
    }

    if (profile) {
      const { data: { user: authUser } } = await supabase.auth.getUser();
      const metadataUsername = authUser?.user_metadata?.username;
      const pendingUsername = localStorage.getItem('taalkaarten_pending_username');
      const fallback = (authUser?.email?.split('@')[0] ?? 'user').replace(/[^a-zA-Z0-9_]/g, '_');
      // Priority: user_metadata (set at signup, survives across devices) > localStorage > existing DB value > email fallback
      const intendedUsername = metadataUsername || pendingUsername;
      const resolvedUsername = intendedUsername || profile.username || fallback;
      if (intendedUsername || !profile.username) {
        await supabase.from('profiles').update({ username: resolvedUsername }).eq('id', userId);
        localStorage.removeItem('taalkaarten_pending_username');
      }
      setUsername(resolvedUsername);
      setAvatar(profile.avatar ?? DEFAULT_AVATAR);
      setStreak(profile.streak ?? 0);
      setDiscoverable(profile.discoverable ?? true);
      setStreakFreezes(profile.streak_freezes ?? 0);
      setCoins(profile.coins ?? 0);
      setUnlockedItems(profile.unlocked_items ?? []);
      setTitle(profile.title ?? '');
      const code = await ensureReferralCode(userId, profile.referral_code);
      setReferralCode(code);
      const d = parseDate(profile.last_session_date);
      setLastDate(d);
      setTodayDone(d === new Date().toDateString());
      if (profile.srs_data) {
        saveSRS(profile.srs_data);
        setSrsData(profile.srs_data);
      } else {
        saveSRS({});
        setSrsData({});
      }
    } else {
      // Profile genuinely does not exist (maybeSingle returned null with no
      // error) — this is a brand-new account. Insert a fresh profile, but
      // preserve any existing local SRS data in case the user was working
      // offline before first sync.
      const { data: { user: authUser } } = await supabase.auth.getUser();
      const metadataUsername = authUser?.user_metadata?.username;
      const pendingUsername = localStorage.getItem('taalkaarten_pending_username');
      const fallbackName = metadataUsername || pendingUsername || (authUser?.email?.split('@')[0] ?? 'user').replace(/[^a-zA-Z0-9_]/g, '_');
      const localSRS = loadSRS();
      const newProfile = { id: userId, username: fallbackName, email: authUser?.email ?? '', avatar: DEFAULT_AVATAR, streak: 0, streak_freezes: 0, coins: 0, unlocked_items: [], discoverable: true, srs_data: localSRS };
      // insert (not upsert) so we crash loudly if a row somehow appeared
      // between the select and this write, instead of silently clobbering it.
      const { error: insertError } = await supabase.from('profiles').insert(newProfile);
      if (insertError) {
        console.error('Failed to create profile, keeping local state intact:', insertError);
        return;
      }
      localStorage.removeItem('taalkaarten_pending_username');
      setUsername(fallbackName);
      setAvatar(DEFAULT_AVATAR);
      setSrsData(localSRS);
      const code = await ensureReferralCode(userId, null);
      setReferralCode(code);
    }

    const { data: rows } = await supabase
      .from('session_history')
      .select('played_at, correct, total')
      .eq('user_id', userId)
      .order('played_at', { ascending: false })
      .limit(30);

    if (rows) {
      setHistory(rows.map(r => ({ date: r.played_at, correct: r.correct, total: r.total })));
    }
  }, []);

  useEffect(() => {
    // Check if this is a password recovery redirect (hash contains type=recovery)
    const hash = window.location.hash;
    const isRecovery = hash.includes('type=recovery');

    supabase.auth.getSession().then(({ data: { session } }) => {
      const u = session?.user ?? null;
      setUser(u);
      if (isRecovery && u) {
        setScreen('resetPassword');
        setAuthLoading(false);
      } else if (u) {
        Promise.all([loadUserData(u.id), loadWords()]).finally(() => setAuthLoading(false));
      } else {
        setAuthLoading(false);
      }
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      const u = session?.user ?? null;
      setUser(u);
      if (event === 'PASSWORD_RECOVERY') {
        setScreen('resetPassword');
        return;
      }
      if (u) {
        loadUserData(u.id);
        loadWords();
      } else {
        setStreak(0);
        setLastDate(null);
        setTodayDone(false);
        setHistory([]);
        setUsername('');
        setScreen('home');
      }
    });

    return () => subscription.unsubscribe();
  }, [loadUserData, loadWords]);

  // Flush sync queue when coming back online
  useEffect(() => {
    if (!online || !user) return;
    const queue = getQueue();
    if (!queue.length) return;

    (async () => {
      for (const item of queue) {
        if (item.type === 'profile') {
          await supabase.from('profiles').update(item.data).eq('id', user.id);
        } else if (item.type === 'history') {
          await supabase.from('session_history').insert(item.data);
        }
      }
      clearQueue();
    })();
  }, [online, user]);

  const handleDeleteAccount = useCallback(async () => {
    if (!user) return;
    await supabase.from('session_history').delete().eq('user_id', user.id);
    await supabase.from('profiles').delete().eq('id', user.id);
    await supabase.rpc('delete_own_account');
    localStorage.clear();
    await supabase.auth.signOut();
  }, [user]);

  const handleBuyFreeze = useCallback(async () => {
    if (coins < 50 || streakFreezes >= 3) return;
    const newCoins = coins - 50;
    const newFreezes = streakFreezes + 1;
    setCoins(newCoins);
    setStreakFreezes(newFreezes);
    if (user) {
      const { error } = await supabase.from('profiles').update({ coins: newCoins, streak_freezes: newFreezes }).eq('id', user.id);
      if (error) console.error('Buy freeze sync failed:', error);
    }
  }, [coins, streakFreezes, user]);

  const handleBuyItem = useCallback(async (itemId, price) => {
    const newCoins = Math.max(0, coins - price);
    const newUnlocked = [...unlockedItems, itemId];
    setCoins(newCoins);
    setUnlockedItems(newUnlocked);
    if (user) {
      const { error } = await supabase.from('profiles').update({ coins: newCoins, unlocked_items: newUnlocked }).eq('id', user.id);
      if (error) console.error('Buy item sync failed:', error);
    }
  }, [coins, unlockedItems, user]);

  const handleAvatarSave = useCallback(async (newAvatar) => {
    setAvatar(newAvatar);
    setScreen('home');
    if (user) {
      const { error } = await supabase.from('profiles').update({ avatar: newAvatar }).eq('id', user.id);
      if (error) console.error('Avatar sync failed:', error);
    }
  }, [user]);

  const handleSessionComplete = useCallback((score) => {
    setLastScore(score);

    const entry = { date: new Date().toISOString(), correct: score.correct, total: score.total };
    setHistory(prev => [entry, ...prev].slice(0, 30));

    let finalStreak = streak;
    let finalFreezes = streakFreezes;
    if (!todayDone) {
      const today = new Date().toDateString();
      const { streak: newStreak, usedFreeze } = computeNewStreak(streak, lastDate, streakFreezes);
      finalStreak = newStreak;
      if (usedFreeze) finalFreezes = Math.max(0, streakFreezes - 1);
      setStreak(finalStreak);
      setStreakFreezes(finalFreezes);
      setLastDate(today);
      setTodayDone(true);
    }

    // Award coins only if session was completed (not quit early)
    const earnedCoins = score.completed ? score.correct : 0;
    const finalCoins = coins + earnedCoins;
    setCoins(finalCoins);
    // Store earned coins in score for display on Complete screen
    score.earnedCoins = earnedCoins;

    // Refresh SRS data for progress display
    setSrsData(loadSRS());

    setScreen('complete');

    if (user) {
      const todayISO   = new Date().toISOString().split('T')[0];
      const currentSRS = loadSRS();

      const profileData = { streak: finalStreak, last_session_date: todayISO, srs_data: currentSRS, streak_freezes: finalFreezes, coins: finalCoins };
      const historyData = { user_id: user.id, correct: score.correct, total: score.total };

      if (online) {
        supabase.from('profiles').update(profileData).eq('id', user.id)
          .then(({ error }) => { if (error) console.error('Profile sync failed:', error); });
        supabase.from('session_history').insert(historyData)
          .then(({ error }) => { if (error) console.error('History sync failed:', error); });
      } else {
        enqueue({ type: 'profile', data: profileData });
        enqueue({ type: 'history', data: historyData });
      }
    }
  }, [streak, lastDate, todayDone, user, online, coins]);

  if (authLoading) {
    return (
      <div style={{ textAlign: 'center', paddingTop: '4rem', color: 'var(--muted)', fontWeight: 600 }}>
        Loading…
      </div>
    );
  }

  if (!user) return <AuthScreen onSignup={(freezes) => setStreakFreezes(f => f + freezes)} />;

  return (
    <PageTransition screenKey={screen} style="zoom">
      {screen === 'home' && (
        <HomeScreen
          streak={streak}
          todayDone={todayDone}
          username={username}
          avatar={avatar}
          words={words}
          srsData={srsData}
          online={online}
          onStart={() => setScreen('session')}
          onHistory={() => setScreen('history')}
          onFriends={() => setScreen('friends')}
          onShop={() => setScreen('shop')}
          onWords={() => setScreen('words')}
          onEditAvatar={() => setScreen('avatar')}
          onLogout={() => supabase.auth.signOut()}
          goalMinutes={goalMinutes}
          onGoalChange={handleGoalChange}
          language={language}
          onLanguageChange={handleLanguageChange}
          direction={direction}
          onDirectionChange={handleDirectionChange}
          showSynonyms={showSynonyms}
          onSynonymsChange={handleSynonymsChange}
          theme={theme}
          onThemeChange={handleThemeChange}
          discoverable={discoverable}
          onDiscoverableChange={handleDiscoverableChange}
          streakFreezes={streakFreezes}
          referralCode={referralCode}
          email={user?.email}
          coins={coins}
          onBuyFreeze={handleBuyFreeze}
          title={title}
          onPrivacy={() => setScreen('privacy')}
          onDeleteAccount={handleDeleteAccount}
          onUsernameChange={handleUsernameChange}
        />
      )}

      {screen === 'session' && (
        <Session onComplete={handleSessionComplete} goalMinutes={goalMinutes} words={words} direction={direction} language={language} showSynonyms={showSynonyms} theme={theme} />
      )}

      {screen === 'complete' && (
        <Complete
          score={lastScore}
          language={language}
          onHome={() => setScreen('home')}
          onRetry={() => setScreen('session')}
        />
      )}

      {screen === 'history' && (
        <HistoryScreen
          history={history}
          onBack={() => setScreen('home')}
        />
      )}

      {screen === 'words' && (
        <WordListScreen onBack={() => setScreen('home')} words={words} language={language} srsData={srsData} />
      )}

      {screen === 'avatar' && (
        <AvatarEditor
          avatar={avatar}
          onSave={handleAvatarSave}
          coins={coins}
          unlockedItems={unlockedItems}
          onBuyItem={handleBuyItem}
          title={title}
          onTitleChange={handleTitleChange}
        />
      )}

      {screen === 'shop' && (
        <ShopScreen
          coins={coins}
          unlockedItems={unlockedItems}
          streakFreezes={streakFreezes}
          onBuyItem={handleBuyItem}
          onBuyFreeze={handleBuyFreeze}
          onBack={() => setScreen('home')}
        />
      )}

      {screen === 'friends' && (
        <FriendsScreen
          user={user}
          referralCode={referralCode}
          onBack={() => setScreen('home')}
        />
      )}

      {screen === 'resetPassword' && (
        <ResetPassword onDone={() => setScreen('home')} />
      )}

      {screen === 'privacy' && (
        <PrivacyScreen onBack={() => setScreen('home')} />
      )}
    </PageTransition>
  );
}
