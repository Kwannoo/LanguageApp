import { WORDS } from '../data/words.js';

/**
 * HomeScreen
 * Props:
 *   streak    – number  – current day streak
 *   todayDone – boolean – whether today's session is already complete
 *   onStart   – fn      – called when user clicks Start
 */
export default function HomeScreen({ streak, todayDone, onStart }) {
  return (
    <div className="text-center">
      {/* App title */}
      <div style={{ marginBottom: '1.75rem' }}>
        <h1 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '2.25rem',
          fontWeight: 400,
          color: 'var(--text)',
          marginBottom: 4,
        }}>
          Taalkaarten
        </h1>
        <p className="text-muted">Dutch · English · 5 minutes a day</p>
      </div>

      {/* Stats */}
      <div className="stats-row">
        <div className="stat-card">
          <p className="label">Streak</p>
          <p className="number" style={{ color: streak > 0 ? 'var(--amber)' : 'var(--text)' }}>
            🔥 {streak}
          </p>
        </div>
        <div className="stat-card">
          <p className="label">Words</p>
          <p className="number">{WORDS.length}</p>
        </div>
        <div className="stat-card">
          <p className="label">Session</p>
          <p className="number">5 min</p>
        </div>
      </div>

      {/* Today's status */}
      {todayDone && (
        <p className="done-pill">✓ Today's session done — streak secured!</p>
      )}

      {/* CTA button */}
      <button className="btn-primary" onClick={onStart} style={{ marginBottom: '1.5rem' }}>
        {todayDone ? 'Practice more' : "Start today's session"}
      </button>

      {/* How it works */}
      <div className="how-it-works">
        <p>① A Dutch word appears on the card</p>
        <p>② Type the English translation and press Enter</p>
        <p>③ The card flips to reveal the correct answer</p>
        <p>④ Work 5 minutes every day to build your streak</p>
      </div>
    </div>
  );
}
