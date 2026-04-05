import { useState } from 'react';
import Avatar from './Avatar.jsx';
import StatsCard from './StatsCard.jsx';
import { computeProgress } from '../utils/srs.js';
import { supabase } from '../lib/supabase.js';

const LANGUAGE_OPTIONS = [
  { value: 'nl', label: '🇳🇱 Dutch', flag: '🇳🇱' },
  { value: 'ja', label: '🇯🇵 Japanese', flag: '🇯🇵' },
  { value: 'es', label: '🇪🇸 Spanish', flag: '🇪🇸' },
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
  es: [
    { value: 'es-en', label: 'ES → EN' },
    { value: 'en-es', label: 'EN → ES' },
    { value: 'mix',   label: 'Mix' },
  ],
};

const FREEZE_PRICE = 50;

export default function HomeScreen({ streak, todayDone, username, avatar, words, srsData, online, onStart, onHistory, onLogout, goalMinutes, onGoalChange, language, onLanguageChange, direction, onDirectionChange, onFriends, onWords, onEditAvatar, showSynonyms, onSynonymsChange, discoverable, onDiscoverableChange, streakFreezes = 0, referralCode = '', email = '', coins = 0, onBuyFreeze, title = '' }) {
  const [menuOpen, setMenuOpen]       = useState(false);
  const [menuClosing, setMenuClosing] = useState(false);
  const [showStatsCard, setShowStatsCard] = useState(false);
  const [showCoinInfo, setShowCoinInfo]   = useState(false);
  const [showFreezeShop, setShowFreezeShop] = useState(false);
  const [showHowItWorks, setShowHowItWorks] = useState(false);
  const directionOptions = DIRECTION_MAP[language] || DIRECTION_MAP.nl;

  const closeMenu = () => {
    setMenuClosing(true);
    setTimeout(() => { setMenuOpen(false); setMenuClosing(false); }, 250);
  };

  return (
    <div className="text-center" style={{ position: 'relative' }}>
      {/* Info button + coin indicator (with username) — top left */}
      <div style={{ position: 'absolute', top: 0, left: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
        <button
          onClick={() => setShowHowItWorks(true)}
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            width: 28, height: 28,
            background: 'var(--surface)',
            border: '2px solid var(--border)',
            borderRadius: '50%',
            cursor: 'pointer',
            fontFamily: 'var(--font-sans)',
            fontWeight: 700,
            fontSize: 14,
            color: 'var(--muted)',
          }}
        >
          i
        </button>
        <button
          onClick={() => setShowCoinInfo(true)}
          style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2,
            background: 'var(--surface)',
            border: '2px solid var(--border)',
            borderRadius: 'var(--radius-sm)',
            padding: '6px 10px',
            cursor: 'pointer',
            fontFamily: 'var(--font-sans)',
          }}
        >
          {username && (
            <span style={{ fontWeight: 700, fontSize: 11, color: 'var(--muted)', letterSpacing: '0.08em' }}>
              {username.toUpperCase()}
            </span>
          )}
          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <img src="/avatar/vocacoin.png" alt="" style={{ width: 20, height: 20 }} />
            <span style={{ fontWeight: 700, fontSize: 14, color: 'var(--amber)' }}>{coins}</span>
          </div>
        </button>
      </div>

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
      {menuOpen && <div className={menuClosing ? 'settings-panel-out' : 'settings-panel'} style={{
        position: 'fixed',
        top: 0, right: 0,
        width: '280px',
        height: '100%',
        background: 'var(--surface)',
        borderLeft: '2px solid var(--border)',
        boxShadow: '-4px 0 20px rgba(0,0,0,0.1)',
        zIndex: 100,
        padding: '1.5rem',
        overflowY: 'auto',
        textAlign: 'left',
      }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
          <p style={{ fontWeight: 800, fontSize: '1.1rem', color: 'var(--text)', margin: 0 }}>Settings</p>
          <button
            onClick={closeMenu}
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
            {title && (
              <p style={{ fontSize: 14, color: 'var(--amber)', fontWeight: 800, margin: 0 }}>
                {title}
              </p>
            )}
            <button
              onClick={() => { closeMenu(); onEditAvatar(); }}
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

        {/* Synonyms */}
        <div style={{ marginBottom: '1.25rem' }}>
          <p style={{ fontSize: 14, color: 'var(--hint)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
            Synonyms
          </p>
          <div style={{ display: 'flex', gap: '0.4rem' }}>
            {['on', 'off'].map(v => (
              <button
                key={v}
                className={`goal-pill${(v === 'on') === showSynonyms ? ' active' : ''}`}
                onClick={() => onSynonymsChange(v === 'on')}
                style={{ flex: 1, textTransform: 'capitalize' }}
              >
                {v}
              </button>
            ))}
          </div>
          <p style={{ fontSize: 12, color: 'var(--hint)', marginTop: 6 }}>
            Show extra synonyms on the card back
          </p>
        </div>

        {/* Privacy */}
        <div style={{ marginBottom: '1.25rem' }}>
          <p style={{ fontSize: 14, color: 'var(--hint)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
            Privacy
          </p>
          <div style={{ display: 'flex', gap: '0.4rem' }}>
            {['on', 'off'].map(v => (
              <button
                key={v}
                className={`goal-pill${(v === 'on') === discoverable ? ' active' : ''}`}
                onClick={() => onDiscoverableChange(v === 'on')}
                style={{ flex: 1, textTransform: 'capitalize' }}
              >
                {v === 'on' ? 'Discoverable' : 'Hidden'}
              </button>
            ))}
          </div>
          <p style={{ fontSize: 12, color: 'var(--hint)', marginTop: 6 }}>
            When hidden, others cannot find you by searching
          </p>
        </div>

        {/* Streak Freezes */}
        <div style={{ marginBottom: '1.25rem' }}>
          <p style={{ fontSize: 14, color: 'var(--hint)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
            Streak Freezes
          </p>
          <button
            onClick={() => setShowFreezeShop(true)}
            style={{
              width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              background: 'var(--bg)', border: '1px solid var(--border)',
              borderRadius: 'var(--radius-sm)', padding: '12px 14px',
              cursor: 'pointer', fontFamily: 'var(--font-sans)',
            }}
          >
            <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--text)' }}>
              🧊 {streakFreezes} freeze{streakFreezes !== 1 ? 's' : ''}
            </span>
            <span style={{ fontSize: 12, color: 'var(--amber)', fontWeight: 600 }}>Buy more →</span>
          </button>
          <p style={{ fontSize: 12, color: 'var(--hint)', marginTop: 6 }}>
            Freezes protect your streak when you miss a day
          </p>
        </div>

        {/* Account */}
        <div style={{ marginBottom: '1.25rem' }}>
          <p style={{ fontSize: 14, color: 'var(--hint)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
            Account
          </p>
          <div style={{
            background: 'var(--bg)', border: '1px solid var(--border)',
            borderRadius: 'var(--radius-sm)', padding: '12px 14px',
          }}>
            <p style={{ fontSize: 12, color: 'var(--hint)', marginBottom: 2 }}>Email</p>
            <p style={{ fontSize: 14, fontWeight: 600, color: 'var(--text)', wordBreak: 'break-all' }}>{email}</p>
          </div>
          <button
            onClick={async () => {
              const { error } = await supabase.auth.resetPasswordForEmail(email, {
                redirectTo: window.location.origin,
              });
              if (error) alert('Failed to send reset email: ' + error.message);
              else alert('Password reset email sent! Check your inbox (and spam folder).');
            }}
            style={{
              marginTop: '0.5rem', width: '100%',
              background: 'none', border: '1px solid var(--border)',
              borderRadius: 'var(--radius-sm)', padding: '8px 14px',
              fontSize: 13, fontWeight: 600, color: 'var(--text)',
              cursor: 'pointer', fontFamily: 'var(--font-sans)',
            }}
          >
            Change password
          </button>
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
      </div>}

      {/* Backdrop */}
      {menuOpen && (
        <div
          className={menuClosing ? 'settings-backdrop-out' : 'settings-backdrop'}
          onClick={closeMenu}
          style={{
            position: 'fixed', inset: 0,
            background: 'rgba(0,0,0,0.3)',
            zIndex: 99,
          }}
        />
      )}

      {/* Logo + App title */}
      <div style={{ marginBottom: '1.5rem' }}>
        <img src="/transparent-white-logo.png" alt="Vocardably" style={{ width: 220, marginBottom: 8 }} />
        <h1 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '2.25rem',
          fontWeight: 800,
          color: 'var(--text)',
          marginBottom: 4,
        }}>
          Vocardably
        </h1>
        {title && <p style={{ fontSize: 14, color: 'var(--amber)', fontWeight: 800, marginTop: 2 }}>{title}</p>}
        {!title && <p className="text-muted">Learn 3,000 words. Understand everything.</p>}
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
      {(() => {
        const { mastered, inProgress } = words.length > 0 ? computeProgress(words, srsData) : { mastered: 0, inProgress: 0 };
        return (<>
          <div className="stats-row">
            <div className="stat-card">
              <p className="label">Streak</p>
              <p className="number" style={{ color: streak > 0 ? 'var(--amber)' : 'var(--text)' }}>
                🔥 {streak}
              </p>
            </div>
            <div className="stat-card">
              <p className="label">In Progress</p>
              <p className="number" style={{ color: 'var(--amber)' }}>
                📚 {inProgress}
              </p>
            </div>
            <div className="stat-card">
              <p className="label">Mastered</p>
              <p className="number" style={{ color: 'var(--success-fg)' }}>
                🎓 {mastered}
              </p>
            </div>
          </div>
        </>);
      })()}

      {/* Today's status */}
      {todayDone && (
        <p className="done-pill">✓ Today's session done — streak secured!</p>
      )}

      {/* CTA button */}
      <button className="btn-primary" onClick={() => { closeMenu(); onStart(); }} style={{ marginBottom: '0.75rem' }}>
        {todayDone ? 'Practice more' : "Start today's session"}
      </button>
      <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', marginTop: '0.5rem', marginBottom: '0.75rem' }}>
        <button className="btn-ghost" onClick={() => { closeMenu(); onHistory(); }}>History</button>
        <button className="btn-ghost" onClick={() => { closeMenu(); onWords(); }}>Words</button>
        <button className="btn-ghost" onClick={() => { closeMenu(); onFriends(); }}>Friends</button>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
        <button className="btn-ghost" style={{ width: '100%' }} onClick={() => setShowStatsCard(true)}>
          📊 Share my stats
        </button>
        {referralCode && (
          <button
            className="btn-ghost"
            style={{ width: '100%' }}
            onClick={() => {
              const url = `${window.location.origin}?ref=${referralCode}`;
              if (navigator.share) {
                navigator.share({ title: 'Join Vocardably!', text: 'Learn languages with me on Vocardably!', url });
              } else {
                navigator.clipboard.writeText(url);
                alert('Invite link copied!');
              }
            }}
          >
            🧊 Invite a friend — you both earn a freeze!
          </button>
        )}
      </div>

      {/* Stats card modal */}
      {showStatsCard && (
        <StatsCard
          username={username}
          streak={streak}
          words={words}
          srsData={srsData}
          language={language}
          onClose={() => setShowStatsCard(false)}
        />
      )}

      {/* Coin info popup */}
      {showCoinInfo && (<>
        <div
          onClick={() => setShowCoinInfo(false)}
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
          textAlign: 'left',
          animation: 'popupIn 0.25s ease forwards',
        }}>
          <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
            <img src="/avatar/vocacoin.png" alt="" style={{ width: 40, height: 40 }} />
            <p style={{ fontWeight: 800, fontSize: '1.2rem', color: 'var(--text)', marginTop: 6 }}>VocaCoins</p>
          </div>
          <div className="how-it-works" style={{ marginBottom: '1rem' }}>
            <p>① Answer words correctly to earn coins</p>
            <p>② Each correct answer = 1 coin</p>
            <p>③ Finish the full session to collect your coins</p>
            <p>④ Quitting early means no coins earned</p>
            <p>⑤ Spend coins to unlock hats & accessories</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <button className="btn-primary" onClick={() => setShowCoinInfo(false)} style={{ width: '100%' }}>
              Got it!
            </button>
          </div>
        </div>
      </>)}

      {/* How it works popup */}
      {showHowItWorks && (<>
        <div
          onClick={() => setShowHowItWorks(false)}
          style={{
            position: 'fixed', inset: 0,
            background: 'rgba(0,0,0,0.5)',
            zIndex: 200,
            animation: 'popupBgIn 0.2s ease forwards',
          }}
        />
        <div style={{
          position: 'fixed', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'var(--surface)',
          border: '2px solid var(--border)',
          borderRadius: 16,
          padding: '1.75rem 1.5rem',
          width: 'min(340px, 90vw)',
          zIndex: 201,
          animation: 'popupIn 0.25s ease forwards',
        }}>
          <p style={{ fontWeight: 800, fontSize: '1.15rem', marginBottom: '1rem', textAlign: 'center' }}>How Vocardably works</p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.25rem' }}>
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
              <span style={{ fontSize: '1.2rem' }}>🃏</span>
              <p style={{ fontSize: 14, color: 'var(--text)', lineHeight: 1.5 }}>
                A word from your chosen language appears on the card. Type the correct translation to move on.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
              <span style={{ fontSize: '1.2rem' }}>⭐</span>
              <p style={{ fontSize: 14, color: 'var(--text)', lineHeight: 1.5 }}>
                A word is <strong>mastered</strong> when you get it right the very first time you ever see it, or when you answer it correctly 5 times in a row.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
              <span style={{ fontSize: '1.2rem' }}>🔥</span>
              <p style={{ fontSize: 14, color: 'var(--text)', lineHeight: 1.5 }}>
                Keep your daily streak alive by completing at least one session every day. Even 5 minutes a day adds up fast!
              </p>
            </div>
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
              <span style={{ fontSize: '1.2rem' }}>💡</span>
              <p style={{ fontSize: 14, color: 'var(--text)', lineHeight: 1.5 }}>
                Consistency beats intensity — a short daily session is more effective than cramming once a week. You've got this!
              </p>
            </div>
          </div>

          <button className="btn-primary" onClick={() => setShowHowItWorks(false)} style={{ width: '100%' }}>
            Let's go!
          </button>
        </div>
      </>)}

      {/* Freeze shop popup */}
      {showFreezeShop && (<>
        <div
          onClick={() => setShowFreezeShop(false)}
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
          <p style={{ fontSize: '2.5rem', marginBottom: '0.25rem' }}>🧊</p>
          <p style={{ fontWeight: 800, fontSize: '1.2rem', color: 'var(--text)', marginBottom: 4 }}>
            Streak Freezes
          </p>
          <p style={{ fontSize: 13, color: 'var(--muted)', marginBottom: '1rem' }}>
            You have <strong style={{ color: 'var(--text)' }}>{streakFreezes}</strong> freeze{streakFreezes !== 1 ? 's' : ''} (max 3)
          </p>

          {streakFreezes >= 3 ? (
            <div style={{
              background: 'var(--bg)', border: '1px solid var(--border)',
              borderRadius: 'var(--radius-sm)', padding: '12px 14px',
              marginBottom: '1rem',
            }}>
              <p style={{ fontSize: 13, color: 'var(--hint)', fontWeight: 600 }}>
                You already have the maximum amount of freezes!
              </p>
            </div>
          ) : (
            <button
              className="btn-primary"
              style={{ width: '100%', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}
              onClick={() => {
                if (coins < FREEZE_PRICE) return;
                onBuyFreeze();
                setShowFreezeShop(false);
              }}
              disabled={coins < FREEZE_PRICE}
            >
              <span>Buy 1 freeze</span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 3 }}>
                <img src="/avatar/vocacoin.png" alt="" style={{ width: 16, height: 16 }} />
                {FREEZE_PRICE}
              </span>
            </button>
          )}

          {coins < FREEZE_PRICE && streakFreezes < 3 && (
            <p style={{ fontSize: 12, color: 'var(--danger-fg)', marginBottom: '0.75rem' }}>
              Not enough coins ({coins}/{FREEZE_PRICE})
            </p>
          )}

          <p style={{ fontSize: 12, color: 'var(--hint)', marginBottom: '1rem' }}>
            Your balance: <strong style={{ color: 'var(--amber)' }}>{coins}</strong> coins
          </p>

          <button className="btn-ghost" onClick={() => setShowFreezeShop(false)} style={{ width: '100%' }}>
            Close
          </button>
        </div>
      </>)}
    </div>
  );
}
