import { useState } from 'react';
import Avatar from './Avatar.jsx';

const GOAL_OPTIONS = [5, 10, 15];
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

export default function HomeScreen({ streak, todayDone, username, avatar, onStart, onHistory, onLogout, goalMinutes, onGoalChange, language, onLanguageChange, direction, onDirectionChange, onFriends, onWords, onEditAvatar }) {
  const [langOpen, setLangOpen] = useState(false);
  const directionOptions = DIRECTION_MAP[language] || DIRECTION_MAP.nl;
  const currentLang = LANGUAGE_OPTIONS.find(l => l.value === language) || LANGUAGE_OPTIONS[0];

  return (
    <div className="text-center" style={{ position: 'relative' }}>
      {/* Language button — top right */}
      <button
        onClick={() => setLangOpen(!langOpen)}
        style={{
          position: 'absolute', top: 0, right: 0,
          background: 'var(--surface)',
          border: '2px solid var(--border)',
          borderRadius: 'var(--radius-sm)',
          padding: '6px 12px',
          cursor: 'pointer',
          fontSize: 14,
          fontWeight: 600,
          fontFamily: 'var(--font-sans)',
          color: 'var(--text)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.35rem',
          zIndex: 10,
        }}
      >
        {currentLang.flag} <span style={{ fontSize: 11 }}>▼</span>
      </button>

      {/* Language slide panel */}
      <div style={{
        position: 'fixed',
        top: 0, right: 0,
        width: '260px',
        height: '100%',
        background: 'var(--surface)',
        borderLeft: '2px solid var(--border)',
        boxShadow: '-4px 0 20px rgba(0,0,0,0.1)',
        transform: langOpen ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.25s ease',
        zIndex: 100,
        padding: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem',
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
          <p style={{ fontWeight: 800, fontSize: '1rem', color: 'var(--text)', margin: 0 }}>Language</p>
          <button
            onClick={() => setLangOpen(false)}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              fontSize: 20, color: 'var(--muted)', fontFamily: 'var(--font-sans)',
              padding: '4px 8px', lineHeight: 1,
            }}
          >
            ✕
          </button>
        </div>
        {LANGUAGE_OPTIONS.map(l => (
          <button
            key={l.value}
            onClick={() => { onLanguageChange(l.value); setLangOpen(false); }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '12px 14px',
              borderRadius: 'var(--radius-sm)',
              border: language === l.value ? '2px solid var(--amber)' : '2px solid var(--border)',
              background: language === l.value ? 'var(--amber-light)' : 'var(--surface)',
              cursor: 'pointer',
              fontFamily: 'var(--font-sans)',
              fontSize: 14,
              fontWeight: 600,
              color: 'var(--text)',
              transition: 'border-color 0.15s, background 0.15s',
            }}
          >
            <span style={{ fontSize: 24 }}>{l.flag}</span>
            {l.label.split(' ')[1]}
          </button>
        ))}
      </div>

      {/* Backdrop */}
      {langOpen && (
        <div
          onClick={() => setLangOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.3)',
            zIndex: 99,
          }}
        />
      )}

      {/* Avatar + App title */}
      <div style={{ marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.75rem' }}>
          <button
            onClick={onEditAvatar}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, position: 'relative' }}
            title="Edit avatar"
          >
            <Avatar config={avatar} size={100} />
            <span style={{
              position: 'absolute', bottom: 0, right: 0,
              background: 'var(--amber)', color: 'white',
              borderRadius: '50%', width: 26, height: 26,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 13, fontWeight: 700,
              border: '2px solid var(--bg)',
            }}>✎</span>
          </button>
        </div>
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

      {/* Direction picker */}
      <div style={{ marginBottom: '1rem' }}>
        <p style={{ fontSize: 11, color: 'var(--hint)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
          Direction
        </p>
        <div className="goal-picker">
          {directionOptions.map(d => (
            <button
              key={d.value}
              className={`goal-pill${direction === d.value ? ' active' : ''}`}
              onClick={() => onDirectionChange(d.value)}
            >
              {d.label}
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
        <p>① A {language === 'ja' ? 'Japanese' : 'Dutch'} word appears on the card</p>
        <p>② Type the translation and press Enter</p>
        <p>③ The card flips to reveal the correct answer</p>
        <p>④ Practice every day to build your streak</p>
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
