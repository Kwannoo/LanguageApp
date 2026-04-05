const KEY_PREFIX = 'taalkaarten_words_v3_';
const TTL_MS    = 24 * 60 * 60 * 1000; // 24 hours

export function getCachedWords(language = 'nl') {
  try {
    const raw = localStorage.getItem(KEY_PREFIX + language);
    if (!raw) return null;
    const { words, ts } = JSON.parse(raw);
    if (Date.now() - ts > TTL_MS) return null;
    if (!Array.isArray(words) || !words.length) return null;
    return words;
  } catch { return null; }
}

export function setCachedWords(words, language = 'nl') {
  try {
    localStorage.setItem(KEY_PREFIX + language, JSON.stringify({ words, ts: Date.now() }));
  } catch {}
}
