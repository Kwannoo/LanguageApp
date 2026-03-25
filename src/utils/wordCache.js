const KEY    = 'taalkaarten_words_v1';
const TTL_MS = 24 * 60 * 60 * 1000; // 24 hours

export function getCachedWords() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return null;
    const { words, ts } = JSON.parse(raw);
    if (Date.now() - ts > TTL_MS) return null;
    if (!Array.isArray(words) || !words.length) return null;
    return words;
  } catch { return null; }
}

export function setCachedWords(words) {
  try {
    localStorage.setItem(KEY, JSON.stringify({ words, ts: Date.now() }));
  } catch {}
}
