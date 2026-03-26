const SRS_KEY = 'taalkaarten_srs';

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
// Correct: double the interval (capped at 60 days)
// Wrong:   reset interval to 1 day
export function updateSRS(srsData, wordNl, correct) {
  const entry = srsData[wordNl] || { interval: 1 };
  const newInterval = correct ? Math.min(entry.interval * 2, 60) : 1;
  const nextDue = new Date();
  nextDue.setDate(nextDue.getDate() + newInterval);
  return {
    ...srsData,
    [wordNl]: {
      interval: newInterval,
      nextDue: nextDue.toISOString().split('T')[0], // "YYYY-MM-DD"
    },
  };
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

/** Count learned / in-progress / unseen words */
export function computeProgress(words, srsData) {
  const total = words.length;
  let learned = 0;
  let inProgress = 0;
  for (const w of words) {
    const entry = srsData[w.nl];
    if (!entry) continue;
    if (entry.interval >= 8) learned++;
    else inProgress++;
  }
  return { total, learned, inProgress, unseen: total - learned - inProgress };
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
