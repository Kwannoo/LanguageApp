import { useState, useEffect, useRef, useCallback } from 'react';
import FlashCard from './FlashCard.jsx';
import { loadSRS, saveSRS, updateSRS, sortByPriority } from '../utils/srs.js';
import { playCorrect, vibrateWrong } from '../utils/feedback.js';

function timerColor() {
  return 'var(--timer-ok)';
}

/** Resolve a random direction for "mix" mode based on language */
function randomDir(language) {
  const pair = language === 'ja' ? ['ja-en', 'en-ja'] : ['nl-en', 'en-nl'];
  return pair[Math.random() < 0.5 ? 0 : 1];
}

/** Is the direction "target language → EN"? */
function isForward(dir) {
  return dir === 'nl-en' || dir === 'ja-en';
}

/**
 * Build the list of accepted answers for the current card + direction.
 * For Japanese EN→JP: accepts kanji, kana reading, and romaji.
 */
function getAccepted(word, dir) {
  if (isForward(dir)) {
    // User types English — also accept without "to " prefix for verbs
    const raw = word.en.split('/').map(a => a.trim().toLowerCase());
    const extra = raw.filter(a => a.startsWith('to ')).map(a => a.slice(3));
    return [...raw, ...extra];
  }
  // User types the target language
  const answers = word.nl.split('/').map(a => a.trim().toLowerCase());
  // For Japanese, also accept reading and romaji
  if (word.reading) answers.push(word.reading.toLowerCase());
  if (word.romaji)  answers.push(word.romaji.toLowerCase());
  return answers;
}

export default function Session({ onComplete, goalMinutes = 5, words: wordList = [], direction = 'nl-en', language = 'nl', voice = 'male', showSynonyms = false }) {
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
    direction === 'mix' ? randomDir(language) : direction
  );
  const inputRef = useRef(null);
  const scoreRef = useRef({ correct: 0, total: 0 });
  const sessionWordsRef = useRef([]);
  const [paused, setPaused] = useState(false);
  const timerIdRef = useRef(null);
  const [keyboardOpen, setKeyboardOpen] = useState(false);
  const [showQuitConfirm, setShowQuitConfirm] = useState(false);

  useEffect(() => { scoreRef.current = score; }, [score]);

  useEffect(() => {
    if (instant) {
      const raf = requestAnimationFrame(() => setInstant(false));
      return () => cancelAnimationFrame(raf);
    }
  }, [instant]);

  // Pause timer when user leaves the tab/app
  useEffect(() => {
    const handleVisibility = () => setPaused(document.hidden);
    document.addEventListener('visibilitychange', handleVisibility);
    return () => document.removeEventListener('visibilitychange', handleVisibility);
  }, []);

  // Detect keyboard open via Visual Viewport API and scroll input to bottom
  useEffect(() => {
    const vv = window.visualViewport;
    if (!vv) return;
    const handler = () => {
      const isOpen = vv.height < window.innerHeight * 0.75;
      setKeyboardOpen(isOpen);
      if (isOpen && inputRef.current) {
        setTimeout(() => {
          inputRef.current?.scrollIntoView({ block: 'end', behavior: 'smooth' });
        }, 50);
      }
    };
    vv.addEventListener('resize', handler);
    return () => vv.removeEventListener('resize', handler);
  }, []);

  useEffect(() => {
    if (paused) {
      clearInterval(timerIdRef.current);
      timerIdRef.current = null;
      return;
    }
    timerIdRef.current = setInterval(() => {
      setTimeLeft(t => {
        if (t <= 1) {
          clearInterval(timerIdRef.current);
          setTimeout(() => onComplete({ ...scoreRef.current, sessionWords: sessionWordsRef.current, completed: true }), 0);
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(timerIdRef.current);
  }, [onComplete, paused]);

  useEffect(() => { inputRef.current?.focus(); }, [idx]);

  const handleCheck = useCallback(() => {
    if (flipped) {
      const nextIdx = (idx + 1) % words.length;
      setInstant(true);
      setFlipped(false);
      setIdx(nextIdx);
      setInput('');
      setIsCorrect(null);
      if (direction === 'mix') setCardDir(randomDir(language));
      if (nextIdx === 0) setWords(sortByPriority(wordList, srsData));
      return;
    }

    if (!input.trim()) {
      // Treat empty submit as a skip
      setIsCorrect(false);
      setScore(s => { const next = { correct: s.correct, total: s.total + 1 }; scoreRef.current = next; return next; });
      sessionWordsRef.current.push({ word: words[idx], correct: false, direction: cardDir, userAnswer: '(skipped)' });
      const skippedSRS = updateSRS(srsData, words[idx].nl, false);
      setSrsData(skippedSRS);
      saveSRS(skippedSRS);
      setFlipped(true);
      return;
    }

    const typed = input.trim().toLowerCase();
    const accepted = getAccepted(words[idx], cardDir);
    const correct = accepted.includes(typed);
    if (correct) playCorrect(); else vibrateWrong();
    setIsCorrect(correct);
    setScore(s => {
      const next = { correct: s.correct + (correct ? 1 : 0), total: s.total + 1 };
      scoreRef.current = next;
      return next;
    });

    // Track this word for review
    sessionWordsRef.current.push({
      word: words[idx],
      correct,
      direction: cardDir,
      userAnswer: typed
    });

    const updated = updateSRS(srsData, words[idx].nl, correct);
    setSrsData(updated);
    saveSRS(updated);

    setFlipped(true);
  }, [flipped, input, idx, words, srsData, cardDir, direction, language, wordList]);

  const handleSkip = useCallback(() => {
    if (flipped) return;
    setIsCorrect(false);
    setScore(s => {
      const next = { correct: s.correct, total: s.total + 1 };
      scoreRef.current = next;
      return next;
    });
    sessionWordsRef.current.push({
      word: words[idx],
      correct: false,
      direction: cardDir,
      userAnswer: '(skipped)',
    });
    const updated = updateSRS(srsData, words[idx].nl, false);
    setSrsData(updated);
    saveSRS(updated);
    setFlipped(true);
  }, [flipped, srsData, words, idx, cardDir]);

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

  const placeholder = isForward(cardDir)
    ? 'Type the English word…'
    : language === 'ja'
      ? 'Type in romaji or Japanese…'
      : 'Type the Dutch word…';

  return (
    <div style={{ position: 'relative' }}>
      {/* Quit button — top right */}
      <button
        onClick={() => setShowQuitConfirm(true)}
        style={{
          position: 'absolute', top: 0, right: 0,
          background: 'var(--surface)',
          border: '2px solid var(--border)',
          borderRadius: 'var(--radius-sm)',
          width: 32, height: 32,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          cursor: 'pointer', fontSize: 16, color: 'var(--muted)',
          lineHeight: 1, fontFamily: 'var(--font-sans)',
          zIndex: 10,
        }}
      >
        ✕
      </button>

      {/* Logo + encouragement — hidden when keyboard is open */}
      {!keyboardOpen && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.25rem', paddingRight: 40 }}>
          <img src="/transparent-white-logo.png" alt="Vocardably" style={{ width: 48 }} />
          <p style={{ margin: 0, fontSize: 13, color: 'var(--hint)', fontStyle: 'italic', lineHeight: 1.4 }}>
            Every word brings you closer to fluency!
          </p>
        </div>
      )}

      {/* Timer bar */}
      <div className="timer-row">
        <div className="timer-track">
          <div
            className="timer-fill"
            style={{ width: `${pct}%`, background: color }}
          />
        </div>
        <span className="timer-text" style={{ color }}>{paused ? '⏸ ' : ''}{fmt(timeLeft)}</span>
        <span style={{ fontSize: 15, fontWeight: 600 }}>
          <span style={{ color: 'var(--success-fg, #2ecc71)' }}>{score.correct}</span>
          <span style={{ color: 'var(--muted)' }}> / {score.total}</span>
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
        language={language}
        voice={voice}
        showSynonyms={showSynonyms}
      />

      {/* Input */}
      <input
        ref={inputRef}
        className="input-field"
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder={placeholder}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        disabled={flipped}
      />

      <div style={{ display: 'flex', gap: '0.5rem' }}>
        {!flipped && (
          <button className="btn-ghost" onClick={handleSkip} style={{ flex: '0 0 auto', padding: '14px 18px' }}>
            Skip
          </button>
        )}
        <button className="btn-primary" onClick={handleCheck} style={{ flex: 1 }}>
          {flipped ? 'Next card →' : 'Check answer'}
        </button>
      </div>

      {/* Quit confirmation popup */}
      {showQuitConfirm && (<>
        <div
          onClick={() => setShowQuitConfirm(false)}
          style={{
            position: 'fixed', inset: 0,
            background: 'rgba(0,0,0,0.5)',
            zIndex: 200,
            animation: 'popupBgIn 0.2s ease forwards',
          }}
        />
        <div style={{
          position: 'fixed',
          top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 201,
          width: 'min(320px, 90vw)',
          background: 'var(--surface)',
          border: '2px solid var(--border)',
          borderRadius: 16,
          padding: '1.75rem 1.5rem',
          textAlign: 'center',
          animation: 'popupIn 0.25s ease forwards',
        }}>
          <p style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>⚠️</p>
          <p style={{ fontWeight: 800, fontSize: '1.1rem', color: 'var(--text)', marginBottom: '0.5rem' }}>
            End session early?
          </p>
          <p style={{ fontSize: 13, color: 'var(--muted)', marginBottom: '1.25rem' }}>
            You won't earn any coins for this session. Only completing the full session rewards you with coins!
          </p>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button className="btn-ghost" onClick={() => setShowQuitConfirm(false)} style={{ flex: 1 }}>
              Keep going
            </button>
            <button
              className="btn-primary"
              style={{ flex: 1, background: 'var(--danger-fg)' }}
              onClick={() => onComplete({ ...score, sessionWords: sessionWordsRef.current, completed: false })}
            >
              End session
            </button>
          </div>
        </div>
      </>)}
    </div>
  );
}
