import { useState, useEffect, useRef, useCallback } from 'react';
import FlashCard from './FlashCard.jsx';
import { shuffled } from '../data/words.js';
import { WORDS } from '../data/words.js';

const SESSION_SECONDS = 5 * 60; // 5 minutes

function timerColor(t) {
  if (t > 60) return 'var(--timer-ok)';
  if (t > 30) return 'var(--timer-warn)';
  return 'var(--timer-crit)';
}

/**
 * Session
 * Props:
 *   onComplete – fn(score) – called when session ends
 */
export default function Session({ onComplete }) {
  const [words, setWords]         = useState(() => shuffled(WORDS));
  const [idx, setIdx]             = useState(0);
  const [input, setInput]         = useState('');
  const [flipped, setFlipped]     = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);
  const [timeLeft, setTimeLeft]   = useState(SESSION_SECONDS);
  const [score, setScore]         = useState({ correct: 0, total: 0 });

  const inputRef  = useRef(null);
  const scoreRef  = useRef({ correct: 0, total: 0 });  // kept in sync for closure-safe access

  // Sync scoreRef with score state
  useEffect(() => { scoreRef.current = score; }, [score]);

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
      // Advance to next card
      setIdx(i => (i + 1) % words.length);
      if (idx + 1 >= words.length) setWords(shuffled(WORDS)); // re-shuffle when exhausted
      setInput('');
      setFlipped(false);
      setIsCorrect(null);
      return;
    }

    if (!input.trim()) return;

    const correct = input.trim().toLowerCase() === words[idx].en.toLowerCase();
    setIsCorrect(correct);
    setScore(s => {
      const next = { correct: s.correct + (correct ? 1 : 0), total: s.total + 1 };
      scoreRef.current = next;
      return next;
    });
    setFlipped(true);
  }, [flipped, input, idx, words]);

  const handleKey = (e) => {
    if (e.key === 'Enter') handleCheck();
  };

  const pct   = (timeLeft / SESSION_SECONDS) * 100;
  const color = timerColor(timeLeft);
  const fmt   = (s) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;

  return (
    <div>
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
      />

      {/* Input */}
      <input
        ref={inputRef}
        className="input-field"
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        onKeyDown={handleKey}
        placeholder="Type the English word…"
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
