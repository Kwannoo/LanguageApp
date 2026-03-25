import { useState, useEffect, useRef, useCallback } from 'react';
import FlashCard from './FlashCard.jsx';
import { loadSRS, saveSRS, updateSRS, sortByPriority } from '../utils/srs.js';

function timerColor(t, total) {
  if (t > total * 0.33) return 'var(--timer-ok)';
  if (t > total * 0.17) return 'var(--timer-warn)';
  return 'var(--timer-crit)';
}

/**
 * Session
 * Props:
 *   onComplete   – fn(score) – called when session ends
 *   goalMinutes  – number    – session duration in minutes
 */
export default function Session({ onComplete, goalMinutes = 5, words: wordList = [], direction = 'nl-en' }) {
  const SESSION_SECONDS = goalMinutes * 60;
  const [srsData, setSrsData]     = useState(loadSRS);
  const [words, setWords]         = useState(() => sortByPriority(wordList, loadSRS()));
  const [idx, setIdx]             = useState(0);
  const [input, setInput]         = useState('');
  const [flipped, setFlipped]     = useState(false);
  const [instant, setInstant]     = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);
  const [timeLeft, setTimeLeft]   = useState(SESSION_SECONDS);
  const [score, setScore]         = useState({ correct: 0, total: 0 });
  const [cardDir, setCardDir]     = useState(() =>
    direction === 'mix' ? (Math.random() < 0.5 ? 'nl-en' : 'en-nl') : direction
  );

  const inputRef = useRef(null);
  const scoreRef = useRef({ correct: 0, total: 0 }); // closure-safe score for timer callback

  // Sync scoreRef with score state
  useEffect(() => { scoreRef.current = score; }, [score]);

  // Clear instant after one frame so the next flip animates normally
  useEffect(() => {
    if (instant) {
      const raf = requestAnimationFrame(() => setInstant(false));
      return () => cancelAnimationFrame(raf);
    }
  }, [instant]);

  // Countdown timer
  useEffect(() => {
    const id = setInterval(() => {
      setTimeLeft(t => {
        if (t <= 1) {
          clearInterval(id);
          onComplete(scoreRef.current);
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [onComplete]);

  // Auto-focus input on mount and after each card advance
  useEffect(() => { inputRef.current?.focus(); }, [idx]);

  const handleCheck = useCallback(() => {
    if (flipped) {
      // Advance to next card — reset without animation
      const nextIdx = (idx + 1) % words.length;
      setInstant(true);
      setFlipped(false);
      setIdx(nextIdx);
      setInput('');
      setIsCorrect(null);
      if (direction === 'mix') setCardDir(Math.random() < 0.5 ? 'nl-en' : 'en-nl');
      // Re-sort when word list is exhausted so new/due words stay prioritized
      if (nextIdx === 0) setWords(sortByPriority(wordList, srsData));
      return;
    }

    if (!input.trim()) return;

    const answer = cardDir === 'nl-en' ? words[idx].en : words[idx].nl;
    const typed = input.trim().toLowerCase();
    const accepted = answer.split('/').map(a => a.trim().toLowerCase());
    const correct = accepted.includes(typed);
    setIsCorrect(correct);
    setScore(s => {
      const next = { correct: s.correct + (correct ? 1 : 0), total: s.total + 1 };
      scoreRef.current = next;
      return next;
    });

    // Update SRS for this word
    const updated = updateSRS(srsData, words[idx].nl, correct);
    setSrsData(updated);
    saveSRS(updated);

    setFlipped(true);
  }, [flipped, input, idx, words, srsData]);

  // Single global Enter handler — works for both checking and advancing
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Enter') handleCheck(); };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [handleCheck]);

  if (!words.length) {
    return (
      <div style={{ textAlign: 'center', paddingTop: '4rem', color: 'var(--muted)', fontWeight: 600 }}>
        Loading words…
      </div>
    );
  }

  const pct   = (timeLeft / SESSION_SECONDS) * 100;
  const color = timerColor(timeLeft, SESSION_SECONDS);
  const fmt   = (s) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;

  return (
    <div>
      {/* Logo + encouragement */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
        <img src="/transparent-white-logo.png" alt="Vocably" style={{ width: 64 }} />
        <p style={{ margin: 0, fontSize: 14, color: 'var(--hint)', fontStyle: 'italic', lineHeight: 1.4 }}>
          Every word brings you closer to fluency!
        </p>
      </div>

      {/* Timer bar */}
      <div className="timer-row">
        <div className="timer-track">
          <div
            className="timer-fill"
            style={{ width: `${pct}%`, background: color }}
          />
        </div>
        <span className="timer-text" style={{ color }}>{fmt(timeLeft)}</span>
        <span style={{ fontSize: 11, color: 'var(--hint)' }}>
          {score.correct}/{score.total}
        </span>
      </div>

      {/* Flash card */}
      <FlashCard
        word={words[idx]}
        flipped={flipped}
        isCorrect={isCorrect}
        userAnswer={input}
        instant={instant}
        direction={cardDir}
      />

      {/* Input */}
      <input
        ref={inputRef}
        className="input-field"
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder={cardDir === 'nl-en' ? 'Type the English word…' : 'Type the Dutch word…'}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        disabled={flipped}
      />

      <button className="btn-primary" onClick={handleCheck}>
        {flipped ? 'Next card →' : 'Check answer'}
      </button>

      <div style={{ textAlign: 'center', marginTop: '0.9rem' }}>
        <button
          style={{ background: 'none', border: 'none', fontSize: 12, color: 'var(--hint)', cursor: 'pointer', fontFamily: 'var(--font-sans)' }}
          onClick={() => onComplete(score)}
        >
          End session early
        </button>
      </div>
    </div>
  );
}
