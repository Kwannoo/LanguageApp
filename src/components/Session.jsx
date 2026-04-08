import { useState, useEffect, useRef, useCallback } from 'react';
import FlashCard from './FlashCard.jsx';
import { loadSRS, saveSRS, updateSRS, splitByLearningStage, computeProgress, MASTERED_STREAK } from '../utils/srs.js';
import { playCorrect, vibrateWrong } from '../utils/feedback.js';

function timerColor() {
  return 'var(--timer-ok)';
}

/** Resolve a random direction for "mix" mode based on language */
function randomDir(language) {
  if (language === 'ja') return ['ja-en', 'en-ja'][Math.random() < 0.5 ? 0 : 1];
  if (language === 'es') return ['es-en', 'en-es'][Math.random() < 0.5 ? 0 : 1];
  return ['nl-en', 'en-nl'][Math.random() < 0.5 ? 0 : 1];
}

/** Is the direction "target language → EN"? */
function isForward(dir) {
  return dir === 'nl-en' || dir === 'ja-en' || dir === 'es-en';
}

/**
 * Build the list of accepted answers for the current card + direction.
 * For Japanese EN→JP: accepts kanji, kana reading, and romaji.
 */
// Strip parenthetical hints like "you (formal)" → "you" so users don't have to type them
function stripParens(s) {
  return s.replace(/\s*\([^)]*\)\s*/g, ' ').replace(/\s+/g, ' ').trim();
}

function getAccepted(word, dir) {
  if (isForward(dir)) {
    // User types English — also accept without "to " prefix for verbs
    const raw = word.en.split('/').map(a => a.trim().toLowerCase());
    const stripped = raw.map(stripParens).filter(Boolean);
    const all = [...raw, ...stripped];
    const extra = all.filter(a => a.startsWith('to ')).map(a => a.slice(3));
    return [...new Set([...all, ...extra])];
  }
  // User types the target language
  const answers = word.word.split('/').map(a => a.trim().toLowerCase());
  const stripped = answers.map(stripParens).filter(Boolean);
  const all = [...answers, ...stripped];
  // For Japanese, also accept reading and romaji
  if (word.reading) all.push(word.reading.toLowerCase());
  if (word.romaji)  all.push(word.romaji.toLowerCase());
  return [...new Set(all)];
}

// In-session learning queue tuning
const ACTIVE_SET_SIZE     = 8;   // max distinct words being learned at once
const GRADUATE_THRESHOLD  = 2;   // consecutive correct in-session to graduate
const WRONG_REINSERT_GAP  = 3;   // how many cards later a wrong word reappears
const RIGHT_REINSERT_GAP  = 6;   // how many cards later a right-but-not-graduated word reappears
const IN_PROGRESS_CAP     = 200; // hard cap on lifetime in-progress words across the wordlist

// Target composition of the active set: 5 in-progress, 2 new, 1 mastered review.
// Buckets are filled in priority order (in-progress first), and any unmet
// target falls through to the next bucket so the queue never runs short.
const TARGET_IN_PROGRESS = 5;
const TARGET_NEW         = 2;
const TARGET_MASTERED    = 1;

export default function Session({ onComplete, goalMinutes = 5, words: wordList = [], direction = 'nl-en', language = 'nl', voice = 'male', showSynonyms = false, theme = 'system' }) {
  const SESSION_SECONDS = goalMinutes * 60;
  const [srsData, setSrsData]     = useState(loadSRS);
  const prevMasteredRef           = useRef(computeProgress(wordList, loadSRS()).mastered);
  // Learning queue: front of queueRef.current is always the current card.
  // bucketsRef holds three priority-sorted refill pools (in-progress / new /
  // mastered). The active queue is built and topped up by drawing from
  // whichever bucket is most under-represented vs. its target ratio.
  // learningRef tracks in-session consecutive-correct counts per word key.
  const queueRef    = useRef([]);
  const bucketsRef  = useRef({ inProgress: [], unseen: [], mastered: [] });
  const allowNewRef = useRef(true); // false when lifetime in-progress >= cap
  const learningRef = useRef({});
  const [currentWord, setCurrentWord] = useState(null);
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
  const checkButtonRef = useRef(null);
  const scoreRef = useRef({ correct: 0, total: 0 });
  const sessionWordsRef = useRef([]);
  const newLearnedRef  = useRef(new Set()); // words that were unseen and got answered correctly
  const srsDataRef     = useRef(srsData);   // mirrors srsData state for timer closure
  const srsSnapshotRef = useRef(loadSRS()); // SRS state at session start, for mastery diff
  const onCompleteRef  = useRef(onComplete); // stable handle so the timer effect never re-runs due to parent re-renders
  const doneRef        = useRef(false);      // guards against onComplete firing twice (timer + quit, or StrictMode)
  useEffect(() => { onCompleteRef.current = onComplete; }, [onComplete]);

  // Centralised finish — single source of truth for ending the session.
  // Guarantees onComplete is called exactly once whether triggered by the
  // timer running out or the user quitting early.
  const finishSession = useCallback((completed) => {
    if (doneRef.current) return;
    doneRef.current = true;
    clearInterval(timerIdRef.current);
    timerIdRef.current = null;
    const srs = srsDataRef.current;
    const { mastered, inProgress } = computeProgress(wordList, srs);
    const before = srsSnapshotRef.current;
    const gained = [];
    const lost   = [];
    for (const w of wordList) {
      const wasMastered = (before[w.word]?.streak ?? 0) >= MASTERED_STREAK;
      const isMastered  = (srs[w.word]?.streak    ?? 0) >= MASTERED_STREAK;
      if (!wasMastered && isMastered) gained.push(w);
      if (wasMastered && !isMastered) lost.push(w);
    }
    onCompleteRef.current({
      ...scoreRef.current,
      sessionWords: sessionWordsRef.current,
      completed,
      newLearned: newLearnedRef.current.size,
      mastered,
      inProgress,
      prevMastered: prevMasteredRef.current,
      masteredGained: gained,
      masteredLost: lost,
    });
  }, [wordList]);

  const [paused, setPaused] = useState(false);
  const timerIdRef = useRef(null);
  const [keyboardOpen, setKeyboardOpen] = useState(false);
  const [showQuitConfirm, setShowQuitConfirm] = useState(false);
  const keyboardOpenRef = useRef(false);

  useEffect(() => { scoreRef.current = score; }, [score]);
  useEffect(() => { srsDataRef.current = srsData; }, [srsData]);

  // ── Bucket helpers ────────────────────────────────────────────────────────
  // Count how many words from each bucket currently sit in the active queue.
  // We tag every word object on its way into the queue with `__bucket` so we
  // can read this back without re-querying SRS state mid-session.
  const countByBucket = useCallback(() => {
    const counts = { inProgress: 0, unseen: 0, mastered: 0 };
    for (const w of queueRef.current) {
      const b = w.__bucket;
      if (b && counts[b] !== undefined) counts[b]++;
    }
    return counts;
  }, []);

  // Pull one word from the bucket that is most under its target ratio.
  // Buckets with no remaining words are skipped; "unseen" is also skipped
  // when the lifetime in-progress cap has been reached.
  const drawNextWord = useCallback(() => {
    const buckets = bucketsRef.current;
    const counts = countByBucket();
    const targets = {
      inProgress: TARGET_IN_PROGRESS,
      unseen:     allowNewRef.current ? TARGET_NEW : 0,
      mastered:   TARGET_MASTERED,
    };
    // Build a priority list of bucket names ordered by how far each is below
    // its target (largest deficit first). Ties: in-progress > unseen > mastered.
    const order = ['inProgress', 'unseen', 'mastered'];
    order.sort((a, b) => {
      const da = targets[a] - counts[a];
      const db = targets[b] - counts[b];
      if (db !== da) return db - da;
      return order.indexOf(a) - order.indexOf(b); // stable preference
    });
    for (const name of order) {
      if (targets[name] <= 0) continue;
      const pool = buckets[name];
      if (pool.length === 0) continue;
      const word = pool.shift();
      word.__bucket = name;
      return word;
    }
    // Every targeted bucket is empty — fall back to any non-empty bucket so
    // the session never stalls (e.g. tiny wordlists or near the end).
    for (const name of order) {
      const pool = buckets[name];
      if (pool.length === 0) continue;
      const word = pool.shift();
      word.__bucket = name;
      return word;
    }
    return null;
  }, [countByBucket]);

  // Initialise the learning queue once at session start.
  useEffect(() => {
    const srs = loadSRS();
    // Cap check: if the user already has >= 200 in-progress words across the
    // wordlist, stop introducing fresh ones until some get mastered.
    const { inProgress } = computeProgress(wordList, srs);
    allowNewRef.current = inProgress < IN_PROGRESS_CAP;

    bucketsRef.current = splitByLearningStage(wordList, srs);
    learningRef.current = {};
    queueRef.current = [];

    // Fill the active set by repeatedly drawing the next best word.
    for (let i = 0; i < ACTIVE_SET_SIZE; i++) {
      const w = drawNextWord();
      if (!w) break;
      queueRef.current.push(w);
    }
    setCurrentWord(queueRef.current[0] ?? null);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Pop the current card from the front, decide where (if anywhere) to
  // re-insert it, and reveal the new front of the queue.
  const advanceQueue = useCallback((wasCorrect) => {
    const q = queueRef.current;
    const word = q.shift();
    if (!word) { setCurrentWord(null); return; }
    const key = word.word;
    const prev = learningRef.current[key] ?? 0;

    if (wasCorrect) {
      const next = prev + 1;
      if (next >= GRADUATE_THRESHOLD) {
        // Graduated this session — re-evaluate the cap (a freshly mastered
        // word lowers the lifetime in-progress count) and pull a new word
        // from the bucket most under target.
        delete learningRef.current[key];
        const { inProgress } = computeProgress(wordList, srsDataRef.current);
        allowNewRef.current = inProgress < IN_PROGRESS_CAP;
        const replacement = drawNextWord();
        if (replacement) q.push(replacement);
      } else {
        learningRef.current[key] = next;
        const pos = Math.min(RIGHT_REINSERT_GAP, q.length);
        q.splice(pos, 0, word);
      }
    } else {
      // Wrong (or skipped) — reset progress and bring the word back soon,
      // but not immediately, so the user has to actually recall it.
      learningRef.current[key] = 0;
      const pos = Math.min(WRONG_REINSERT_GAP, q.length);
      q.splice(pos, 0, word);
    }

    // If queue is empty AND every bucket is drained (tiny wordlist), recycle.
    const buckets = bucketsRef.current;
    const bucketsEmpty = buckets.inProgress.length === 0 && buckets.unseen.length === 0 && buckets.mastered.length === 0;
    if (q.length === 0 && bucketsEmpty) {
      const split = splitByLearningStage(wordList, srsDataRef.current);
      bucketsRef.current = split;
      learningRef.current = {};
      for (let i = 0; i < ACTIVE_SET_SIZE; i++) {
        const w = drawNextWord();
        if (!w) break;
        q.push(w);
      }
    }

    setCurrentWord(queueRef.current[0] ?? null);
  }, [wordList, drawNextWord]);

  // Minimise space below the button so the keyboard auto-scroll doesn't push the card off-screen
  useEffect(() => {
    const root = document.getElementById('root');
    if (!root) return;
    const prev = { minHeight: root.style.minHeight, paddingBottom: root.style.paddingBottom };
    root.style.minHeight = 'auto';
    root.style.paddingBottom = '0';
    return () => {
      root.style.minHeight = prev.minHeight;
      root.style.paddingBottom = prev.paddingBottom;
    };
  }, []);

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

  // After the keyboard animation settles, scroll so the Check answer button
  // sits just above the keyboard — keeping the card visible at the top.
  useEffect(() => {
    const vv = window.visualViewport;
    if (!vv) return;
    const handler = () => {
      const isOpen = vv.height < window.innerHeight * 0.75;
      if (isOpen === keyboardOpenRef.current) return; // ignore mid-animation resize ticks
      keyboardOpenRef.current = isOpen;
      setKeyboardOpen(isOpen);
      if (isOpen) {
        setTimeout(() => {
          const keyboardHeight = window.innerHeight - window.visualViewport.height;
          const btn = checkButtonRef.current;
          if (btn) {
            const buttonBottom = btn.getBoundingClientRect().bottom + window.scrollY;
            const visibleBottom = window.innerHeight - keyboardHeight;
            const gap = 12;
            window.scrollTo(0, Math.max(0, buttonBottom - visibleBottom + gap));
          }
        }, 300);
      } else {
        window.scrollTo(0, 0);
      }
    };
    vv.addEventListener('resize', handler);
    return () => vv.removeEventListener('resize', handler);
  }, []);

  // Timer loop. Decouples from onComplete (via refs) so parent re-renders
  // never reset the interval. Uses a done-guard so we can't fire onComplete
  // twice if the timer and the quit button race each other.
  useEffect(() => {
    if (paused || doneRef.current) {
      clearInterval(timerIdRef.current);
      timerIdRef.current = null;
      return;
    }
    timerIdRef.current = setInterval(() => {
      setTimeLeft(t => {
        if (t <= 1) {
          clearInterval(timerIdRef.current);
          timerIdRef.current = null;
          // Defer to next tick so we don't call a setter from inside a
          // state updater (which would be unsafe in StrictMode).
          queueMicrotask(() => finishSession(true));
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(timerIdRef.current);
  }, [paused, finishSession]);

  useEffect(() => { inputRef.current?.focus(); }, [currentWord]);

  const handleCheck = useCallback(() => {
    if (flipped) {
      // Move to the next card via the learning queue.
      setInstant(true);
      setFlipped(false);
      setInput('');
      setIsCorrect(null);
      if (direction === 'mix') setCardDir(randomDir(language));
      advanceQueue(isCorrect === true);
      return;
    }

    if (!currentWord) return;

    if (!input.trim()) {
      // Treat empty submit as a skip
      setIsCorrect(false);
      setScore(s => { const next = { correct: s.correct, total: s.total + 1 }; scoreRef.current = next; return next; });
      sessionWordsRef.current.push({ word: currentWord, correct: false, direction: cardDir, userAnswer: '(skipped)' });
      const skippedSRS = updateSRS(srsData, currentWord.word, false);
      setSrsData(skippedSRS);
      saveSRS(skippedSRS);
      setFlipped(true);
      return;
    }

    const typed = input.trim().toLowerCase();
    const accepted = getAccepted(currentWord, cardDir);
    const correct = accepted.includes(typed);
    if (correct) playCorrect(); else vibrateWrong();
    setIsCorrect(correct);
    setScore(s => {
      const next = { correct: s.correct + (correct ? 1 : 0), total: s.total + 1 };
      scoreRef.current = next;
      return next;
    });

    // Track new words learned (first time seen + correct)
    if (correct && !srsData[currentWord.word]) {
      newLearnedRef.current.add(currentWord.word);
    }

    // Track this word for review
    sessionWordsRef.current.push({
      word: currentWord,
      correct,
      direction: cardDir,
      userAnswer: typed
    });

    const updated = updateSRS(srsData, currentWord.word, correct);
    setSrsData(updated);
    saveSRS(updated);

    setFlipped(true);
  }, [flipped, input, currentWord, srsData, cardDir, direction, language, isCorrect, advanceQueue]);

  const handleSkip = useCallback(() => {
    if (flipped || !currentWord) return;
    setIsCorrect(false);
    setScore(s => {
      const next = { correct: s.correct, total: s.total + 1 };
      scoreRef.current = next;
      return next;
    });
    sessionWordsRef.current.push({
      word: currentWord,
      correct: false,
      direction: cardDir,
      userAnswer: '(skipped)',
    });
    const updated = updateSRS(srsData, currentWord.word, false);
    setSrsData(updated);
    saveSRS(updated);
    setFlipped(true);
  }, [flipped, srsData, currentWord, cardDir]);

  useEffect(() => {
    const handler = (e) => { if (e.key === 'Enter') handleCheck(); };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [handleCheck]);

  if (!currentWord) {
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
      : language === 'es'
        ? 'Type the Spanish word…'
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
          <img src={theme === 'light' || (theme === 'system' && !window.matchMedia('(prefers-color-scheme: dark)').matches) ? '/transparent-black-logo.png' : '/transparent-white-logo.png'} alt="Vocardably" style={{ width: 48 }} />
          <p style={{ margin: 0, fontSize: 16, color: 'var(--hint)', fontStyle: 'italic', lineHeight: 1.4 }}>
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
        word={currentWord}
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
        <button ref={checkButtonRef} className="btn-primary" onClick={handleCheck} style={{ flex: 1 }}>
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
            <button className="btn-ghost" onClick={() => setShowQuitConfirm(false)} style={{ flex: 1, fontSize: 15 }}>
              Keep going
            </button>
            <button
              className="btn-primary"
              style={{ flex: 1, background: 'var(--danger-fg)', fontSize: 15 }}
              onClick={() => finishSession(false)}
            >
              End session
            </button>
          </div>
        </div>
      </>)}
    </div>
  );
}
