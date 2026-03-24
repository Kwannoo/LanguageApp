import { useState, useMemo } from 'react';
import { WORDS } from '../data/words.js';
import { loadSRS } from '../utils/srs.js';

const FILTERS = ['All', 'New', 'Learning', 'Good', 'Mastered'];

function getLevel(interval) {
  if (!interval) return 'New';
  if (interval <= 2)  return 'Learning';
  if (interval <= 16) return 'Good';
  return 'Mastered';
}

function getLevelColor(level) {
  switch (level) {
    case 'Mastered': return '#22c55e';
    case 'Good':     return '#3b82f6';
    case 'Learning': return '#f59e0b';
    default:         return 'var(--hint)';
  }
}

export default function WordListScreen({ onBack }) {
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');
  const srs = useMemo(() => loadSRS(), []);

  const words = useMemo(() => {
    return WORDS.map(w => {
      const entry = srs[w.nl];
      const interval = entry?.interval ?? 0;
      const level = getLevel(interval);
      return { ...w, interval, level };
    }).filter(w => {
      if (filter !== 'All' && w.level !== filter) return false;
      if (search) {
        const q = search.toLowerCase();
        return w.nl.toLowerCase().includes(q) || w.en.toLowerCase().includes(q);
      }
      return true;
    });
  }, [srs, filter, search]);

  const counts = useMemo(() => {
    const c = { All: WORDS.length, New: 0, Learning: 0, Good: 0, Mastered: 0 };
    for (const w of WORDS) {
      c[getLevel(srs[w.nl]?.interval ?? 0)]++;
    }
    return c;
  }, [srs]);

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
        placeholder="Search words…"
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
            {f} ({counts[f]})
          </button>
        ))}
      </div>

      {/* Word list */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {words.map(w => (
          <div key={w.nl} style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: 'var(--card)',
            borderRadius: 10,
            padding: '0.7rem 1rem',
          }}>
            <div style={{ flex: 1 }}>
              <span style={{ fontWeight: 600, color: 'var(--text)' }}>{w.nl}</span>
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
