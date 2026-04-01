import { useState, useMemo } from 'react';
import { WORDS } from '../data/words.js';
import { WORDS_JA } from '../data/wordsJa.js';
import { loadSRS, getWordLevel } from '../utils/srs.js';

const FILTERS = ['All', 'New', 'Learning', 'Good', 'Mastered'];
const LANGUAGES = ['All', 'Dutch', 'Japanese'];

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
  const [language, setLanguage] = useState('All');
  const [search, setSearch] = useState('');
  const srs = useMemo(() => loadSRS(), []);

  const words = useMemo(() => {
    let allWords = [];

    // Add Dutch words
    if (language === 'All' || language === 'Dutch') {
      allWords = allWords.concat(
        WORDS.map(w => {
          const entry = srs[w.nl];
          const level = getWordLevel(entry);
          return { ...w, entry, level, lang: 'Dutch', displayWord: w.nl, displayMeaning: w.en };
        })
      );
    }

    // Add Japanese words
    if (language === 'All' || language === 'Japanese') {
      allWords = allWords.concat(
        WORDS_JA.map(w => {
          const entry = srs[w.word];
          const level = getWordLevel(entry);
          return { ...w, entry, level, lang: 'Japanese', displayWord: w.word, displayMeaning: w.en };
        })
      );
    }

    return allWords.filter(w => {
      if (filter !== 'All' && w.level !== filter) return false;
      if (search) {
        const q = search.toLowerCase();
        const searchInWord = w.displayWord.toLowerCase().includes(q);
        const searchInMeaning = w.displayMeaning.toLowerCase().includes(q);
        const searchInRomaji = w.romaji && w.romaji.toLowerCase().includes(q);
        return searchInWord || searchInMeaning || searchInRomaji;
      }
      return true;
    });
  }, [srs, filter, search, language]);

  const counts = useMemo(() => {
    const c = { All: 0, New: 0, Learning: 0, Good: 0, Mastered: 0 };

    // Count Dutch words
    if (language === 'All' || language === 'Dutch') {
      c.All += WORDS.length;
      for (const w of WORDS) {
        c[getWordLevel(srs[w.nl])]++;
      }
    }

    // Count Japanese words
    if (language === 'All' || language === 'Japanese') {
      c.All += WORDS_JA.length;
      for (const w of WORDS_JA) {
        c[getWordLevel(srs[w.word])]++;
      }
    }

    return c;
  }, [srs, language]);

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

      {/* Language selector */}
      <div style={{ marginBottom: '0.75rem' }}>
        <p style={{ fontSize: 12, fontWeight: 600, color: 'var(--muted)', marginBottom: '0.4rem', textTransform: 'uppercase' }}>Language</p>
        <div className="goal-picker" style={{ marginBottom: '0.75rem' }}>
          {LANGUAGES.map(lang => (
            <button
              key={lang}
              className={`goal-pill${language === lang ? ' active' : ''}`}
              onClick={() => {
                setLanguage(lang);
                setFilter('All');
              }}
              style={{ fontSize: '0.9rem' }}
            >
              {lang}
            </button>
          ))}
        </div>
      </div>

      {/* Search */}
      <input
        className="input-field"
        type="text"
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder={language === 'Japanese' ? 'Search kanji, romaji, or meaning…' : 'Search words…'}
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
        {words.map((w, idx) => (
          <div key={`${w.lang}-${w.displayWord}-${idx}`} style={{
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
                  background: w.lang === 'Dutch' ? '#ec4899' : '#3b82f6',
                  color: 'white',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>
                  {w.lang === 'Dutch' ? 'NL' : 'JA'}
                </span>
                <span style={{ fontWeight: 600, color: 'var(--text)' }}>{w.displayWord}</span>
                {w.lang === 'Japanese' && w.romaji && (
                  <span style={{ fontSize: 12, color: 'var(--muted)', fontStyle: 'italic' }}>({w.romaji})</span>
                )}
              </div>
              <span style={{ color: 'var(--hint)', margin: '0 0.4rem' }}>→</span>
              <span style={{ color: 'var(--muted)' }}>{w.displayMeaning}</span>
            </div>
            <span style={{
              fontSize: 11,
              fontWeight: 600,
              padding: '2px 8px',
              borderRadius: 6,
              color: getLevelColor(w.level),
              background: getLevelColor(w.level) + '18',
              flexShrink: 0,
              marginLeft: '0.5rem'
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
