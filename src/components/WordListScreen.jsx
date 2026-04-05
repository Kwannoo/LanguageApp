import { useState, useMemo } from 'react';
import { loadSRS, getWordLevel } from '../utils/srs.js';

const FILTERS = ['All', 'New', 'Learning', 'Good', 'Mastered'];

const LANG_BADGE = {
  nl: { label: 'NL', color: '#ec4899' },
  ja: { label: 'JA', color: '#3b82f6' },
  es: { label: 'ES', color: '#f59e0b' },
};

function getLevelColor(level) {
  switch (level) {
    case 'Mastered': return '#22c55e';
    case 'Good':     return '#3b82f6';
    case 'Learning': return '#f59e0b';
    default:         return 'var(--hint)';
  }
}

export default function WordListScreen({ onBack, words: wordsProp = [], language = 'nl', srsData: srsDataProp }) {
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');
  const srs = useMemo(() => srsDataProp || loadSRS(), [srsDataProp]);

  const words = useMemo(() => {
    return wordsProp
      .map(w => {
        const entry = srs[w.word];
        const level = getWordLevel(entry);
        return { ...w, entry, level };
      })
      .filter(w => {
        if (filter !== 'All' && w.level !== filter) return false;
        if (search) {
          const q = search.toLowerCase();
          return (
            w.word?.toLowerCase().includes(q) ||
            w.en?.toLowerCase().includes(q) ||
            w.romaji?.toLowerCase().includes(q)
          );
        }
        return true;
      });
  }, [wordsProp, srs, filter, search]);

  const counts = useMemo(() => {
    const c = { All: wordsProp.length, New: 0, Learning: 0, Good: 0, Mastered: 0 };
    for (const w of wordsProp) c[getWordLevel(srs[w.word])]++;
    return c;
  }, [wordsProp, srs]);

  const badge = LANG_BADGE[language] || { label: language.toUpperCase(), color: 'var(--muted)' };
  const searchPlaceholder = language === 'ja' ? 'Search kanji, romaji, or meaning…' : 'Search words…';

  return (
    <div>
      <button className="btn-ghost" onClick={onBack} style={{ marginBottom: '0.75rem' }}>
        ← Back
      </button>

      <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.25rem' }}>
        Word Library
      </h2>
      <p style={{ fontSize: 13, color: 'var(--hint)', marginBottom: '1rem' }}>
        {counts.Mastered} mastered · {counts.Good} good · {counts.Learning} learning · {counts.New} new
      </p>

      {/* Search */}
      <input
        className="input-field"
        type="text"
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder={searchPlaceholder}
        style={{ marginBottom: '0.75rem' }}
      />

      {/* Filter pills */}
      <div className="goal-picker" style={{ marginBottom: '1rem' }}>
        {FILTERS.map(f => (
          <button
            key={f}
            className={`goal-pill${filter === f ? ' active' : ''}`}
            onClick={() => setFilter(f)}
          >
            {f} ({counts[f] ?? 0})
          </button>
        ))}
      </div>

      {/* Word list */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {words.map((w, idx) => (
          <div key={`${w.word}-${idx}`} style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            background: 'var(--card)',
            borderRadius: 10,
            padding: '0.7rem 1rem',
          }}>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.3rem' }}>
                <span style={{
                  fontSize: 10,
                  fontWeight: 700,
                  padding: '2px 6px',
                  borderRadius: 4,
                  background: badge.color,
                  color: 'white',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                }}>
                  {badge.label}
                </span>
                <span style={{ fontWeight: 600, color: 'var(--text)' }}>{w.word}</span>
                {language === 'ja' && w.romaji && (
                  <span style={{ fontSize: 12, color: 'var(--muted)', fontStyle: 'italic' }}>({w.romaji})</span>
                )}
              </div>
              <span style={{ color: 'var(--hint)', margin: '0 0.4rem' }}>→</span>
              <span style={{ color: 'var(--muted)' }}>{w.en}</span>
            </div>
            <span style={{
              fontSize: 11,
              fontWeight: 600,
              padding: '2px 8px',
              borderRadius: 6,
              color: getLevelColor(w.level),
              background: getLevelColor(w.level) + '18',
              flexShrink: 0,
              marginLeft: '0.5rem',
            }}>
              {w.level}
            </span>
          </div>
        ))}
        {words.length === 0 && (
          <p style={{ textAlign: 'center', color: 'var(--hint)', padding: '2rem 0' }}>
            No words match your search.
          </p>
        )}
      </div>
    </div>
  );
}
