import { supabase } from '../lib/supabase.js';

/** Generate a short random referral code */
export function generateCode() {
  return Math.random().toString(36).slice(2, 8).toUpperCase();
}

/** Ensure the user has a referral code; generate + save one if missing */
export async function ensureReferralCode(userId, existingCode) {
  if (existingCode) return existingCode;
  const code = generateCode();
  await supabase.from('profiles').update({ referral_code: code }).eq('id', userId);
  return code;
}

/** Look up who owns a referral code */
export async function resolveReferralCode(code) {
  if (!code) return null;
  const { data } = await supabase
    .from('profiles')
    .select('id, username')
    .eq('referral_code', code.toUpperCase())
    .maybeSingle();
  return data ?? null;
}

/** Award one streak freeze to a user (max 3) */
export async function awardStreakFreeze(userId) {
  const { data } = await supabase
    .from('profiles')
    .select('streak_freezes')
    .eq('id', userId)
    .single();
  const current = data?.streak_freezes ?? 0;
  if (current >= 3) return;
  await supabase.from('profiles').update({ streak_freezes: current + 1 }).eq('id', userId);
}

/** Read ?ref= param from the current URL */
export function getReferralFromUrl() {
  return new URLSearchParams(window.location.search).get('ref') ?? null;
}

/** Build a sharable invite URL for the given code */
export function buildInviteUrl(code) {
  return `${window.location.origin}?ref=${code}`;
}
