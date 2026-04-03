const SRS_KEY = 'taalkaarten_srs';

export const MASTERED_STREAK = 5;

export function loadSRS() {
  try {
    const raw = localStorage.getItem(SRS_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function saveSRS(data) {
  try {
    localStorage.setItem(SRS_KEY, JSON.stringify(data));
  } catch {}
}

// Returns updated SRS data object (does not mutate input)
// Tracks:
//   streak   – consecutive correct answers (resets on wrong)
//   correct  – total lifetime correct answers
//   attempts – total lifetime attempts
// Levels are forgiving at lower tiers (based on correct count),
// but mastery requires 5 consecutive correct (streak).
export function updateSRS(srsData, wordNl, isCorrect) {
  const entry = srsData[wordNl] || { interval: 1, streak: 0, correct: 0, attempts: 0 };
  const prevStreak = entry.streak ?? 0;
  const prevCorrect = entry.correct ?? 0;
  const prevAttempts = entry.attempts ?? 0;

  // First-time correct → immediately master the word
  const isFirstTime = !srsData[wordNl];
  const newStreak = isCorrect ? (isFirstTime ? MASTERED_STREAK : prevStreak + 1) : 0;
  const newCorrect = prevCorrect + (isCorrect ? 1 : 0);
  const newAttempts = prevAttempts + 1;
  const newInterval = isCorrect ? Math.min(entry.interval * 2, 60) : 1;

  const nextDue = new Date();
  nextDue.setDate(nextDue.getDate() + newInterval);

  return {
    ...srsData,
    [wordNl]: {
      interval: newInterval,
      nextDue: nextDue.toISOString().split('T')[0],
      streak: newStreak,
      correct: newCorrect,
      attempts: newAttempts,
    },
  };
}

/**
 * Determine a word's level from its SRS entry.
 *
 * - New:      never attempted
 * - Learning: at least 1 correct answer
 * - Good:     at least 3 correct answers
 * - Mastered: 5 consecutive correct (streak) — proves real knowledge, not luck
 */
export function getWordLevel(entry) {
  if (!entry) return 'New';
  const streak = entry.streak ?? 0;
  const correct = entry.correct ?? 0;
  if (streak >= MASTERED_STREAK) return 'Mastered';
  if (correct >= 3) return 'Good';
  if (correct >= 1) return 'Learning';
  return 'New';
}

// Unseen words (no SRS entry) and overdue words come first — both groups shuffled.
// Not-yet-due words fill the rest so the session never runs dry.
export function sortByPriority(words, srsData) {
  const today = new Date().toISOString().split('T')[0];
  const due = [];
  const notDue = [];

  for (const w of words) {
    const entry = srsData[w.nl];
    if (!entry || entry.nextDue <= today) due.push(w);
    else notDue.push(w);
  }

  return [...shuffle(due), ...shuffle(notDue)];
}

/** Count mastered / in-progress / unseen words */
export function computeProgress(words, srsData) {
  const total = words.length;
  let mastered = 0;
  let inProgress = 0;
  for (const w of words) {
    const entry = srsData[w.nl];
    if (!entry) continue;
    if ((entry.streak ?? 0) >= MASTERED_STREAK) mastered++;
    else inProgress++;
  }
  return { total, mastered, inProgress, unseen: total - mastered - inProgress };
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
