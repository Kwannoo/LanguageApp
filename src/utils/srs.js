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
//
// Mastery requires MASTERED_STREAK consecutive correct answers — but there is
// a fast-track: if you nail a brand-new word correctly on both of your first
// two attempts (no wrong answers in between), the word jumps straight to
// mastered. This rewards words you clearly already know without demanding
// five reps, while still catching lucky guesses (one wrong = back to normal).
export function updateSRS(srsData, wordNl, isCorrect) {
  const entry = srsData[wordNl] || { interval: 1, streak: 0, correct: 0, attempts: 0 };
  const prevStreak = entry.streak ?? 0;
  const prevCorrect = entry.correct ?? 0;
  const prevAttempts = entry.attempts ?? 0;

  // Fast-track: second correct answer in a row on a never-missed new word.
  const fastTrack = isCorrect && prevAttempts === 1 && prevStreak === 1;
  const newStreak = isCorrect
    ? (fastTrack ? MASTERED_STREAK : prevStreak + 1)
    : 0;
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

/**
 * Split a wordlist into three learning buckets and sort each by priority.
 *   - inProgress : has an SRS entry but streak < MASTERED_STREAK
 *                  (sorted: overdue first, then by earliest nextDue)
 *   - unseen     : no SRS entry yet (shuffled)
 *   - mastered   : streak >= MASTERED_STREAK (shuffled, used for spaced review)
 */
export function splitByLearningStage(words, srsData) {
  const today = new Date().toISOString().split('T')[0];
  const inProgress = [];
  const unseen = [];
  const mastered = [];
  for (const w of words) {
    const entry = srsData[w.word];
    if (!entry) { unseen.push(w); continue; }
    if ((entry.streak ?? 0) >= MASTERED_STREAK) { mastered.push(w); continue; }
    inProgress.push(w);
  }
  // In-progress: overdue words first, then by earliest nextDue date.
  inProgress.sort((a, b) => {
    const ad = srsData[a.word]?.nextDue ?? '9999-99-99';
    const bd = srsData[b.word]?.nextDue ?? '9999-99-99';
    const aOverdue = ad <= today;
    const bOverdue = bd <= today;
    if (aOverdue !== bOverdue) return aOverdue ? -1 : 1;
    return ad.localeCompare(bd);
  });
  return {
    inProgress,
    unseen: shuffle(unseen),
    mastered: shuffle(mastered),
  };
}

// Unseen words (no SRS entry) and overdue words come first — both groups shuffled.
// Not-yet-due words fill the rest so the session never runs dry.
export function sortByPriority(words, srsData) {
  const today = new Date().toISOString().split('T')[0];
  const due = [];
  const notDue = [];

  for (const w of words) {
    const entry = srsData[w.word];
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
    const entry = srsData[w.word];
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
