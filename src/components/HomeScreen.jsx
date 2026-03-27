import { useState } from 'react';
import Avatar from './Avatar.jsx';
import { computeProgress } from '../utils/srs.js';

const LANGUAGE_OPTIONS = [
  { value: 'nl', label: '🇳🇱 Dutch', flag: '🇳🇱' },
  { value: 'ja', label: '🇯🇵 Japanese', flag: '🇯🇵' },
];
const DIRECTION_MAP = {
  nl: [
    { value: 'nl-en', label: 'NL → EN' },
    { value: 'en-nl', label: 'EN → NL' },
    { value: 'mix',   label: 'Mix' },
  ],
  ja: [
    { value: 'ja-en', label: 'JP → EN' },
    { value: 'en-ja', label: 'EN → JP' },
    { value: 'mix',   label: 'Mix' },
  ],
};

export default function HomeScreen({ streak, todayDone, username, avatar, words, srsData, online, onStart, onHistory, onLogout, goalMinutes, onGoalChange, language, onLanguageChange, direction, onDirectionChange, onFriends, onWords, onEditAvatar, voice, onVoiceChange }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const directionOptions = DIRECTION_MAP[language] || DIRECTION_MAP.nl;

  return (
    <div className="text-center" style={{ position: 'relative' }}>
      {/* Menu button — top right */}
      <button
        onClick={() => setMenuOpen(true)}
        style={{
          position: 'absolute', top: 0, right: 0,
          background: 'var(--surface)',
          border: '2px solid var(--border)',
          borderRadius: 'var(--radius-sm)',
          padding: '6px 10px',
          cursor: 'pointer',
          fontSize: 18,
          lineHeight: 1,
          color: 'var(--text)',
          zIndex: 10,
        }}
        title="Settings"
      >
        ☰
      </button>

      {/* ── Settings slide panel ── */}
      <div style={{
        position: 'fixed',
        top: 0, right: 0,
        width: '280px',
        height: '100%',
        background: 'var(--surface)',
        borderLeft: '2px solid var(--border)',
        boxShadow: '-4px 0 20px rgba(0,0,0,0.1)',
        transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.25s ease',
        zIndex: 100,
        padding: '1.5rem',
        overflowY: 'auto',
        textAlign: 'left',
      }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
          <p style={{ fontWeight: 800, fontSize: '1.1rem', color: 'var(--text)', margin: 0 }}>Settings</p>
          <button
            onClick={() => setMenuOpen(false)}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              fontSize: 20, color: 'var(--muted)', fontFamily: 'var(--font-sans)',
              padding: '4px 8px', lineHeight: 1,
            }}
          >
            ✕
          </button>
        </div>

        {/* Avatar */}
        <div style={{ marginBottom: '1.25rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
            <Avatar config={avatar} size={100} />
            <button
              onClick={() => { setMenuOpen(false); onEditAvatar(); }}
              className="btn-ghost"
              style={{ width: '100%', textAlign: 'center' }}
            >
              Edit avatar
            </button>
          </div>
        </div>

        {/* Language */}
        <div style={{ marginBottom: '1.25rem' }}>
          <p style={{ fontSize: 14, color: 'var(--hint)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
            Language
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {LANGUAGE_OPTIONS.map(l => (
              <button
                key={l.value}
                onClick={() => onLanguageChange(l.value)}
                style={{
                  display: 'flex', alignItems: 'center', gap: '0.75rem',
                  padding: '10px 14px',
                  borderRadius: 'var(--radius-sm)',
                  border: language === l.value ? '2px solid var(--amber)' : '2px solid var(--border)',
                  background: language === l.value ? 'var(--amber-light)' : 'var(--surface)',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-sans)',
                  fontSize: 14, fontWeight: 600, color: 'var(--text)',
                  transition: 'border-color 0.15s, background 0.15s',
                }}
              >
                <span style={{ fontSize: 22 }}>{l.flag}</span>
                {l.label.split(' ')[1]}
              </button>
            ))}
          </div>
        </div>

        {/* Direction */}
        <div style={{ marginBottom: '1.25rem' }}>
          <p style={{ fontSize: 14, color: 'var(--hint)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
            Direction
          </p>
          <div style={{ display: 'flex', gap: '0.4rem' }}>
            {directionOptions.map(d => (
              <button
                key={d.value}
                className={`goal-pill${direction === d.value ? ' active' : ''}`}
                onClick={() => onDirectionChange(d.value)}
                style={{ flex: 1 }}
              >
                {d.label}
              </button>
            ))}
          </div>
        </div>

        {/* Session goal — slider */}
        <div style={{ marginBottom: '1.25rem' }}>
          <p style={{ fontSize: 14, color: 'var(--hint)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
            Session goal
          </p>
          <div style={{
            background: 'var(--bg)', border: '1px solid var(--border)',
            borderRadius: 'var(--radius-sm)', padding: '12px 14px',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
              <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--text)' }}>{goalMinutes} min</span>
            </div>
            <input
              type="range"
              min={1} max={15} step={1}
              value={goalMinutes}
              onChange={e => onGoalChange(parseInt(e.target.value, 10))}
              style={{ width: '100%', accentColor: 'var(--amber)' }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 14, color: 'var(--hint)' }}>
              <span>1 min</span>
              <span>15 min</span>
            </div>
          </div>
        </div>

        {/* Voice */}
        <div style={{ marginBottom: '1.25rem' }}>
          <p style={{ fontSize: 14, color: 'var(--hint)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
            Voice
          </p>
          <div style={{ display: 'flex', gap: '0.4rem' }}>
            {['male', 'female'].map(v => (
              <button
                key={v}
                className={`goal-pill${voice === v ? ' active' : ''}`}
                onClick={() => onVoiceChange(v)}
                style={{ flex: 1, textTransform: 'capitalize' }}
              >
                {v}
              </button>
            ))}
          </div>
        </div>

        {/* Sign out */}
        <div style={{ marginTop: '1rem', borderTop: '1px solid var(--border)', paddingTop: '1rem' }}>
          <button
            onClick={onLogout}
            style={{
              background: 'none', border: 'none', fontSize: 13,
              color: 'var(--danger-fg)', cursor: 'pointer', fontFamily: 'var(--font-sans)',
              fontWeight: 600,
            }}
          >
            Sign out
          </button>
        </div>
      </div>

      {/* Backdrop */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          style={{
            position: 'fixed', inset: 0,
            background: 'rgba(0,0,0,0.3)',
            zIndex: 99,
          }}
        />
      )}

      {/* Logo + App title */}
      <div style={{ marginBottom: '1.5rem' }}>
        <img src="/transparent-white-logo.png" alt="Vocably" style={{ width: 220, marginBottom: 8 }} />
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
          <p className="text-muted">Welcome back, <strong style={{ color: 'var(--text)' }}>{username}</strong>!</p>
        ) : (
          <p className="text-muted">Learn 3,000 words. Understand everything.</p>
        )}
      </div>

      {/* Offline indicator */}
      {!online && (
        <p style={{
          fontSize: 11, padding: '4px 12px', borderRadius: 99,
          background: 'var(--danger-bg)', color: 'var(--danger-fg)',
          display: 'inline-block', marginBottom: '0.75rem',
        }}>
          Offline — progress will sync when reconnected
        </p>
      )}

      {/* Stats */}
      <div className="stats-row">
        <div className="stat-card">
          <p className="label">Streak</p>
          <p className="number" style={{ color: streak > 0 ? 'var(--amber)' : 'var(--text)' }}>
            🔥 {streak}
          </p>
        </div>
      </div>

      {/* Progress */}
      {words.length > 0 && (() => {
        const { total, learned, inProgress } = computeProgress(words, srsData);
        const pct = Math.round((learned / total) * 100);
        const inPct = Math.round((inProgress / total) * 100);
        return (
          <div style={{ marginBottom: '1.25rem' }}>
            <div style={{
              background: 'var(--surface)', border: '1px solid var(--border)',
              borderRadius: 'var(--radius-md)', padding: '0.9rem 1.25rem',
            }}>
              <p style={{ fontSize: 14, fontWeight: 600, marginBottom: 8 }}>
                {learned} / {total} words learned
              </p>
              <div style={{
                height: 10, borderRadius: 5,
                background: 'var(--border)', overflow: 'hidden',
                display: 'flex',
              }}>
                <div style={{ width: `${pct}%`, background: 'var(--success-fg)', transition: 'width 0.3s' }} />
                <div style={{ width: `${inPct}%`, background: 'var(--amber)', transition: 'width 0.3s' }} />
              </div>
              <p style={{ fontSize: 14, color: 'var(--hint)', marginTop: 6 }}>
                {inProgress} in progress · {total - learned - inProgress} unseen
              </p>
            </div>
          </div>
        );
      })()}

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
        <p>① A {language === 'ja' ? 'Japanese' : 'Dutch'} word appears on the card</p>
        <p>② Type the translation and press Enter</p>
        <p>③ The card flips to reveal the correct answer</p>
        <p>④ Practice every day to build your streak</p>
      </div>
    </div>
  );
}
