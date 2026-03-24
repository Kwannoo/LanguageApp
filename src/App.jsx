import { useState, useEffect, useCallback } from 'react';
import HomeScreen    from './components/HomeScreen.jsx';
import Session       from './components/Session.jsx';
import Complete      from './components/Complete.jsx';
import HistoryScreen from './components/HistoryScreen.jsx';
import FriendsScreen from './components/FriendsScreen.jsx';
import AuthScreen      from './components/AuthScreen.jsx';
import WordListScreen  from './components/WordListScreen.jsx';
import { supabase }  from './lib/supabase.js';
import { loadSRS, saveSRS } from './utils/srs.js';

function computeNewStreak(current, lastDate) {
  const today     = new Date().toDateString();
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  if (lastDate === today)                    return current;
  if (lastDate === yesterday.toDateString()) return current + 1;
  return 1;
}

// Supabase stores dates as "YYYY-MM-DD"; convert to toDateString() for comparison
function parseDate(dateStr) {
  if (!dateStr) return null;
  return new Date(dateStr + 'T12:00:00').toDateString();
}

export default function App() {
  const [screen, setScreen]         = useState('home');
  const [user, setUser]             = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [streak, setStreak]         = useState(0);
  const [lastDate, setLastDate]     = useState(null);
  const [todayDone, setTodayDone]   = useState(false);
  const [lastScore, setLastScore]   = useState({ correct: 0, total: 0 });
  const [history, setHistory]       = useState([]);
  const [username, setUsername]     = useState('');
  const [goalMinutes, setGoalMinutes] = useState(
    () => parseInt(localStorage.getItem('taalkaarten_goal') ?? '5', 10)
  );

  const handleGoalChange = (m) => {
    setGoalMinutes(m);
    localStorage.setItem('taalkaarten_goal', m);
  };

  const loadUserData = useCallback(async (userId) => {
    // Load profile (streak + SRS)
    const { data: profile } = await supabase
      .from('profiles')
      .select('streak, last_session_date, srs_data, username')
      .eq('id', userId)
      .single();

    if (profile) {
      setUsername(profile.username ?? '');
      setStreak(profile.streak ?? 0);
      const d = parseDate(profile.last_session_date);
      setLastDate(d);
      setTodayDone(d === new Date().toDateString());
      if (profile.srs_data) saveSRS(profile.srs_data); // hydrate localStorage for Session
    }

    // Load session history (newest first, max 30)
    const { data: rows } = await supabase
      .from('session_history')
      .select('played_at, correct, total')
      .eq('user_id', userId)
      .order('played_at', { ascending: false })
      .limit(30);

    if (rows) {
      setHistory(rows.map(r => ({ date: r.played_at, correct: r.correct, total: r.total })));
    }
  }, []);

  useEffect(() => {
    // Check for an existing session on mount
    supabase.auth.getSession().then(({ data: { session } }) => {
      const u = session?.user ?? null;
      setUser(u);
      if (u) loadUserData(u.id).finally(() => setAuthLoading(false));
      else   setAuthLoading(false);
    });

    // Listen for login / logout
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      const u = session?.user ?? null;
      setUser(u);
      if (u) {
        loadUserData(u.id);
      } else {
        // Reset all state on logout
        setStreak(0);
        setLastDate(null);
        setTodayDone(false);
        setHistory([]);
        setUsername('');
        setScreen('home');
      }
    });

    return () => subscription.unsubscribe();
  }, [loadUserData]);

  const handleSessionComplete = useCallback((score) => {
    setLastScore(score);

    // Add to local history immediately (optimistic)
    const entry = { date: new Date().toISOString(), correct: score.correct, total: score.total };
    setHistory(prev => [entry, ...prev].slice(0, 30));

    // Compute new streak
    let finalStreak = streak;
    if (!todayDone) {
      const today = new Date().toDateString();
      finalStreak = computeNewStreak(streak, lastDate);
      setStreak(finalStreak);
      setLastDate(today);
      setTodayDone(true);
    }

    setScreen('complete');

    // Sync to Supabase in the background — UI is already updated above
    if (user) {
      const todayISO   = new Date().toISOString().split('T')[0];
      const currentSRS = loadSRS(); // grab latest SRS from localStorage (updated by Session)

      supabase.from('profiles')
        .update({ streak: finalStreak, last_session_date: todayISO, srs_data: currentSRS })
        .eq('id', user.id)
        .then(({ error }) => { if (error) console.error('Profile sync failed:', error); });

      supabase.from('session_history')
        .insert({ user_id: user.id, correct: score.correct, total: score.total })
        .then(({ error }) => { if (error) console.error('History sync failed:', error); });
    }
  }, [streak, lastDate, todayDone, user]);

  // Brief loading screen while we check the auth session
  if (authLoading) {
    return (
      <div style={{ textAlign: 'center', paddingTop: '4rem', color: 'var(--muted)', fontWeight: 600 }}>
        Loading…
      </div>
    );
  }

  if (!user) return <AuthScreen />;

  return (
    <>
      {screen === 'home' && (
        <HomeScreen
          streak={streak}
          todayDone={todayDone}
          username={username}
          onStart={() => setScreen('session')}
          onHistory={() => setScreen('history')}
          onFriends={() => setScreen('friends')}
          onWords={() => setScreen('words')}
          onLogout={() => supabase.auth.signOut()}
          goalMinutes={goalMinutes}
          onGoalChange={handleGoalChange}
        />
      )}

      {screen === 'session' && (
        <Session onComplete={handleSessionComplete} goalMinutes={goalMinutes} />
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

      {screen === 'words' && (
        <WordListScreen onBack={() => setScreen('home')} />
      )}

      {screen === 'friends' && (
        <FriendsScreen
          user={user}
          onBack={() => setScreen('home')}
        />
      )}
    </>
  );
}
