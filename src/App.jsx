import { useState, useEffect, useCallback } from 'react';
import HomeScreen    from './components/HomeScreen.jsx';
import Session       from './components/Session.jsx';
import Complete      from './components/Complete.jsx';
import HistoryScreen from './components/HistoryScreen.jsx';

/**
 * Streak helpers using localStorage.
 * Format stored: { streak: number, lastDate: string (toDateString) }
 */
const STORAGE_KEY = 'taalkaarten_streak';
const HISTORY_KEY = 'taalkaarten_history';

function loadStreakData() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : { streak: 0, lastDate: null };
  } catch {
    return { streak: 0, lastDate: null };
  }
}

function computeNewStreak(current, lastDate) {
  const today     = new Date().toDateString();
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  if (lastDate === today)                         return current;           // already done today
  if (lastDate === yesterday.toDateString())      return current + 1;      // consecutive day
  return 1;                                                                  // streak broken
}

function saveStreakData(streak, date) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ streak, lastDate: date }));
  } catch { /* storage quota exceeded – silently ignore */ }
}

function loadHistory() {
  try {
    const raw = localStorage.getItem(HISTORY_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveHistory(history) {
  try {
    localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
  } catch {}
}

export default function App() {
  const [screen, setScreen]       = useState('home');   // 'home' | 'session' | 'complete' | 'history'
  const [streak, setStreak]       = useState(0);
  const [lastDate, setLastDate]   = useState(null);
  const [todayDone, setTodayDone] = useState(false);
  const [lastScore, setLastScore] = useState({ correct: 0, total: 0 });
  const [history, setHistory]     = useState([]);

  // Load persisted data on mount
  useEffect(() => {
    const { streak: s, lastDate: d } = loadStreakData();
    setStreak(s);
    setLastDate(d);
    setTodayDone(d === new Date().toDateString());
    setHistory(loadHistory());
  }, []);

  const handleSessionComplete = useCallback((score) => {
    setLastScore(score);

    // Append to history (newest first, max 30 entries)
    const entry = { date: new Date().toISOString(), correct: score.correct, total: score.total };
    setHistory(prev => {
      const next = [entry, ...prev].slice(0, 30);
      saveHistory(next);
      return next;
    });

    // Update streak if first session today
    if (!todayDone) {
      const today     = new Date().toDateString();
      const newStreak = computeNewStreak(streak, lastDate);
      setStreak(newStreak);
      setLastDate(today);
      setTodayDone(true);
      saveStreakData(newStreak, today);
    }

    setScreen('complete');
  }, [streak, lastDate, todayDone]);

  return (
    <>
      {screen === 'home' && (
        <HomeScreen
          streak={streak}
          todayDone={todayDone}
          onStart={() => setScreen('session')}
          onHistory={() => setScreen('history')}
        />
      )}

      {screen === 'session' && (
        <Session onComplete={handleSessionComplete} />
      )}

      {screen === 'complete' && (
        <Complete
          score={lastScore}
          streak={streak}
          onHome={() => setScreen('home')}
          onRetry={() => setScreen('session')}
        />
      )}

      {screen === 'history' && (
        <HistoryScreen
          history={history}
          onBack={() => setScreen('home')}
        />
      )}
    </>
  );
}
