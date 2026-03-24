/**
 * HistoryScreen
 * Props:
 *   history – [{ date, correct, total }] – newest first, max 30
 *   onBack  – fn – go back to home
 */
export default function HistoryScreen({ history, onBack }) {
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.75rem' }}>
        <button className="btn-ghost" onClick={onBack} style={{ padding: '8px 14px' }}>← Back</button>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontWeight: 400, fontSize: '1.5rem' }}>
          Session History
        </h2>
      </div>

      {history.length === 0 ? (
        <p className="text-muted text-center" style={{ marginTop: '3rem' }}>
          No sessions yet — complete your first session to see history.
        </p>
      ) : (
        <div className="history-list">
          {history.map((entry, i) => {
            const pct = entry.total > 0 ? Math.round((entry.correct / entry.total) * 100) : 0;
            const d = new Date(entry.date);
            const dateStr = d.toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' });
            const timeStr = d.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' });
            const pctColor = pct >= 80 ? 'var(--success-fg)' : pct >= 50 ? 'var(--amber)' : 'var(--danger-fg)';
            return (
              <div key={i} className="history-row">
                <div>
                  <p className="history-date">{dateStr}</p>
                  <p className="history-time">{timeStr}</p>
                </div>
                <div className="history-score">
                  <span className="history-pct" style={{ color: pctColor }}>{pct}%</span>
                  <span className="history-detail">{entry.correct}/{entry.total}</span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
