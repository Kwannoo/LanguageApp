/**
 * HomeScreen
 * Props:
 *   streak    – number  – current day streak
 *   todayDone – boolean – whether today's session is already complete
 *   onStart   – fn      – called when user clicks Start
 */
const GOAL_OPTIONS = [5, 10, 15];

export default function HomeScreen({ streak, todayDone, username, onStart, onHistory, onLogout, goalMinutes, onGoalChange, onFriends, onWords }) {
  return (
    <div className="text-center">
      {/* Logo + App title */}
      <div style={{ marginBottom: '1.5rem' }}>
        <img src="/transparent-white-logo.png" alt="Vocably" style={{ width: 140, marginBottom: 8 }} />
        <h1 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '2.25rem',
          fontWeight: 800,
          color: 'var(--text)',
          marginBottom: 4,
        }}>
          Vocably
        </h1>
        {username ? (
          <p className="text-muted">Welcome back, <strong style={{ color: 'var(--text)' }}>{username}</strong>! 👋</p>
        ) : (
          <p className="text-muted">Learn 3,000 words. Understand everything.</p>
        )}
      </div>

      {/* Stats */}
      <div className="stats-row">
        <div className="stat-card">
          <p className="label">Streak</p>
          <p className="number" style={{ color: streak > 0 ? 'var(--amber)' : 'var(--text)' }}>
            🔥 {streak}
          </p>
        </div>
      </div>

      {/* Goal picker */}
      <div style={{ marginBottom: '1rem' }}>
        <p style={{ fontSize: 11, color: 'var(--hint)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
          Session goal
        </p>
        <div className="goal-picker">
          {GOAL_OPTIONS.map(m => (
            <button
              key={m}
              className={`goal-pill${goalMinutes === m ? ' active' : ''}`}
              onClick={() => onGoalChange(m)}
            >
              {m} min
            </button>
          ))}
        </div>
      </div>

      {/* Today's status */}
      {todayDone && (
        <p className="done-pill">✓ Today's session done — streak secured!</p>
      )}

      {/* CTA button */}
      <button className="btn-primary" onClick={onStart} style={{ marginBottom: '0.75rem' }}>
        {todayDone ? 'Practice more' : "Start today's session"}
      </button>
      <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', marginTop: '0.5rem', marginBottom: '1.5rem' }}>
        <button className="btn-ghost" onClick={onHistory}>History</button>
        <button className="btn-ghost" onClick={onWords}>Words</button>
        <button className="btn-ghost" onClick={onFriends}>Friends</button>
      </div>

      {/* How it works */}
      <div className="how-it-works">
        <p>① A Dutch word appears on the card</p>
        <p>② Type the English translation and press Enter</p>
        <p>③ The card flips to reveal the correct answer</p>
        <p>④ Work 5 minutes every day to build your streak</p>
      </div>

      {/* Logout */}
      <div style={{ marginTop: '1.5rem' }}>
        <button
          onClick={onLogout}
          style={{ background: 'none', border: 'none', fontSize: 12, color: 'var(--hint)', cursor: 'pointer', fontFamily: 'var(--font-sans)' }}
        >
          Sign out
        </button>
      </div>
    </div>
  );
}
