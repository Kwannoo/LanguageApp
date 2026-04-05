import { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';

/**
 * Complete
 * Props:
 *   score   – { correct, total, sessionWords }
 *   streak  – number
 *   language – 'nl' or 'ja'
 *   onHome  – fn – go back to home
 *   onRetry – fn – start another session
 */
export default function Complete({ score, language = 'nl', onHome, onRetry }) {
  const [tab, setTab] = useState('summary');
  const [reviewFilter, setReviewFilter] = useState('all');
  const emoji = score.completed ? '🌟' : '💪';
  const sessionWords = score.sessionWords || [];

  useEffect(() => {
    if (score.completed && score.total > 0) {
      confetti({ particleCount: 120, spread: 80, origin: { y: 0.55 } });
    }
  }, []);

  function getPrompt(item) {
    const { word, direction } = item;
    if (direction === 'ja-en') return `${word.word || word.reading} (${word.romaji})`;
    if (direction === 'en-ja') return word.en;
    if (direction === 'en-nl' || direction === 'en-es') return word.en;
    return word.word;
  }

  function getCorrectAnswer(item) {
    const { word, direction } = item;
    if (direction === 'nl-en' || direction === 'ja-en' || direction === 'es-en') return word.en;
    if (direction === 'en-ja') return `${word.word || word.reading} (${word.romaji})`;
    return word.word;
  }

  // Group attempts by word+direction so repeated attempts on the same word are merged
  const groupedWords = (() => {
    const map = new Map();
    for (const item of sessionWords) {
      const key = `${item.direction}:${item.word.romaji || item.word.word}`;
      if (!map.has(key)) {
        map.set(key, { item, wrongAnswers: [], allCorrect: true });
      }
      const group = map.get(key);
      if (!item.correct) {
        group.wrongAnswers.push(item.userAnswer || '(skipped)');
        group.allCorrect = false;
      }
    }
    return [...map.values()];
  })();

  return (
    <div className="text-center">
      {/* Header */}
      <p style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>{emoji}</p>
      <h2 style={{
        fontFamily: 'var(--font-serif)',
        fontSize: '1.85rem',
        fontWeight: 400,
        marginBottom: 6,
      }}>
        Session complete!
      </h2>
      <p className="text-muted" style={{ marginBottom: '1rem' }}>
        Come back tomorrow to keep your streak alive.
      </p>

      {/* Tabs */}
      <div className="goal-picker" style={{ marginBottom: '1rem', justifyContent: 'center' }}>
        <button
          className={`goal-pill${tab === 'summary' ? ' active' : ''}`}
          onClick={() => setTab('summary')}
          style={{ fontSize: '0.9rem' }}
        >
          Summary
        </button>
        {sessionWords.length > 0 && (
          <button
            className={`goal-pill${tab === 'review' ? ' active' : ''}`}
            onClick={() => setTab('review')}
            style={{ fontSize: '0.9rem' }}
          >
            Review ({groupedWords.length})
          </button>
        )}
      </div>

      {/* Summary Tab */}
      {tab === 'summary' && (
        <>
          {/* Result stats */}
          {(() => {
            const masteredDelta = (score.mastered ?? 0) - (score.prevMastered ?? 0);
            const newLearned = score.newLearned ?? 0;
            return (
              <div className="stats-row">
                <div className="stat-card">
                  <p className="label">Correct</p>
                  <p className="number" style={{ color: 'var(--success-fg)' }}>{score.correct}</p>
                </div>
                <div className="stat-card">
                  <p className="label">📚 Learning</p>
                  <p className="number">
                    {score.inProgress ?? 0}
                    {newLearned > 0 && (
                      <span style={{ fontSize: '0.7em', color: 'var(--success-fg)', marginLeft: 4 }}>
                        +{newLearned}
                      </span>
                    )}
                  </p>
                </div>
                <div className="stat-card">
                  <p className="label">🎓 Mastered</p>
                  <p className="number" style={{ color: 'var(--success-fg)' }}>
                    {score.mastered ?? 0}
                    {masteredDelta !== 0 && (
                      <span style={{ fontSize: '0.7em', color: masteredDelta > 0 ? 'var(--success-fg)' : 'var(--danger-fg)', marginLeft: 4 }}>
                        {masteredDelta > 0 ? `+${masteredDelta}` : masteredDelta}
                      </span>
                    )}
                  </p>
                </div>
              </div>
            );
          })()}

          {/* Coins earned */}
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
            padding: '0.75rem 1rem', marginBottom: '1rem',
            background: score.earnedCoins > 0 ? 'var(--amber-light)' : 'var(--surface)',
            border: `1px solid ${score.earnedCoins > 0 ? 'var(--amber)' : 'var(--border)'}`,
            borderRadius: 'var(--radius-md)',
          }}>
            <img src="/avatar/vocacoin.png" alt="" style={{ width: 24, height: 24 }} />
            {score.earnedCoins > 0 ? (
              <span style={{ fontWeight: 700, fontSize: 15, color: 'var(--amber)' }}>
                +{score.earnedCoins} coins earned!
              </span>
            ) : (
              <span style={{ fontWeight: 600, fontSize: 13, color: 'var(--muted)' }}>
                No coins — finish the full session to earn coins!
              </span>
            )}
          </div>

          <button className="btn-primary" onClick={onRetry} style={{ marginBottom: '0.75rem' }}>
            Practice more
          </button>
          <br />
          <button className="btn-ghost" onClick={onHome} style={{ marginTop: '0.5rem' }}>
            Back to home
          </button>
        </>
      )}

      {/* Review Tab */}
      {tab === 'review' && sessionWords.length > 0 && (
        <>
          {/* Filter pills */}
          <div className="goal-picker" style={{ marginBottom: '0.75rem', justifyContent: 'center' }}>
            {['all', 'wrong', 'correct'].map((f) => (
              <button
                key={f}
                className={`goal-pill${reviewFilter === f ? ' active' : ''}`}
                onClick={() => setReviewFilter(f)}
                style={{ fontSize: '0.85rem' }}
              >
                {f === 'all' ? 'All' : f === 'wrong' ? 'Wrong' : 'Correct'}
              </button>
            ))}
          </div>

          <div style={{ textAlign: 'left', marginBottom: '1rem', maxHeight: '45vh', overflowY: 'auto', borderRadius: 8 }}>
            {groupedWords
              .filter(({ allCorrect }) =>
                reviewFilter === 'all' ? true :
                reviewFilter === 'wrong' ? !allCorrect :
                allCorrect
              )
              .map(({ item, wrongAnswers, allCorrect }, idx) => (
              <div
                key={idx}
                style={{
                  padding: '0.75rem 1rem',
                  background: 'var(--card)',
                  borderRadius: 8,
                  marginBottom: '0.5rem',
                  borderLeft: `4px solid ${allCorrect ? 'var(--success-fg)' : '#e74c3c'}`,
                }}
              >
                {/* Word + correct answer on one line */}
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.4rem', flexWrap: 'wrap' }}>
                  <span style={{ fontWeight: 600, color: 'var(--text)' }}>
                    {getPrompt(item)}
                  </span>
                  <span style={{ color: 'var(--muted)' }}>→</span>
                  <span style={{ color: 'var(--success-fg)', fontWeight: 600 }}>
                    {getCorrectAnswer(item)}
                  </span>
                </div>

                {/* Wrong attempts */}
                {wrongAnswers.length > 0 && (
                  <div style={{ marginTop: '0.35rem', display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {wrongAnswers.map((ans, i) => (
                      <span
                        key={i}
                        style={{
                          fontSize: 12,
                          color: '#e74c3c',
                          background: 'color-mix(in srgb, #e74c3c 10%, transparent)',
                          borderRadius: 4,
                          padding: '1px 6px',
                        }}
                      >
                        ✗ {ans}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <button className="btn-primary" onClick={onRetry} style={{ marginBottom: '0.75rem' }}>
            Practice more
          </button>
          <br />
          <button className="btn-ghost" onClick={onHome} style={{ marginTop: '0.5rem' }}>
            Back to home
          </button>
        </>
      )}
    </div>
  );
}
