/**
 * Complete
 * Props:
 *   score   – { correct, total }
 *   streak  – number
 *   onHome  – fn – go back to home
 *   onRetry – fn – start another session
 */
export default function Complete({ score, streak, onHome, onRetry }) {
  const pct = score.total > 0 ? Math.round((score.correct / score.total) * 100) : 0;
  const emoji = pct >= 80 ? '🌟' : pct >= 50 ? '👍' : '💪';

  return (
    <div className="text-center">
      <p style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>{emoji}</p>

      <h2 style={{
        fontFamily: 'var(--font-serif)',
        fontSize: '1.85rem',
        fontWeight: 400,
        marginBottom: 6,
      }}>
        Session complete!
      </h2>
      <p className="text-muted" style={{ marginBottom: '1.75rem' }}>
        Come back tomorrow to keep your streak alive.
      </p>

      {/* Result stats */}
      <div className="stats-row">
        <div className="stat-card">
          <p className="label">Correct</p>
          <p className="number" style={{ color: 'var(--success-fg)' }}>{score.correct}</p>
        </div>
        <div className="stat-card">
          <p className="label">Accuracy</p>
          <p className="number">{pct}%</p>
        </div>
        <div className="stat-card">
          <p className="label">Streak</p>
          <p className="number" style={{ color: 'var(--amber)' }}>🔥 {streak}</p>
        </div>
      </div>

      <button className="btn-primary" onClick={onRetry} style={{ marginBottom: '0.75rem' }}>
        Practice more
      </button>
      <br />
      <button className="btn-ghost" onClick={onHome} style={{ marginTop: '0.5rem' }}>
        Back to home
      </button>
    </div>
  );
}
