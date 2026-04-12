import { useState } from 'react';
import Avatar from './Avatar.jsx';
import { AVATAR_OPTIONS, BG_COLORS, DEFAULT_AVATAR, TITLE_OPTIONS } from '../data/avatarConfig.js';

const CATEGORIES = [
  { key: 'face',        label: 'Face' },
  { key: 'eyes',        label: 'Eyes' },
  { key: 'mouth',       label: 'Mouth' },
  { key: 'hair',        label: 'Hair' },
  { key: 'hats',        label: 'Hats' },
  { key: 'accessories', label: 'Acc.' },
  { key: 'glasses',     label: 'Glasses' },
  { key: 'bg',          label: 'BG' },
  { key: 'title',       label: 'Title' },
];

/**
 * AvatarEditor
 * Props:
 *   avatar      – current avatar config
 *   onSave      – fn(newConfig)
 *   onBack      – fn()
 *   coins       – number (user's coin balance)
 *   unlockedItems – string[] (list of unlocked item ids)
 *   onBuyItem   – fn(itemId, price) – called when user buys an item
 */
export default function AvatarEditor({ avatar, onSave, coins = 0, unlockedItems = [], onBuyItem, title = '', onTitleChange }) {
  const [draft, setDraft] = useState({ ...DEFAULT_AVATAR, ...avatar });
  const [draftTitle, setDraftTitle] = useState(title);
  const [tab, setTab]     = useState('face');
  const [buyPopup, setBuyPopup] = useState(null);    // { opt, canAfford }
  const [popupClosing, setPopupClosing] = useState(false);
  const [purchased, setPurchased] = useState(null);   // opt that was just bought (for success popup)
  const [successClosing, setSuccessClosing] = useState(false);

  const update = (key, value) => setDraft(prev => ({ ...prev, [key]: value }));

  const isLocked = (opt) => {
    if (!opt.price) return false;
    return !unlockedItems.includes(opt.id);
  };

  const closePopup = () => {
    setPopupClosing(true);
    setTimeout(() => { setBuyPopup(null); setPopupClosing(false); }, 200);
  };

  const closeSuccess = () => {
    setSuccessClosing(true);
    setTimeout(() => { setPurchased(null); setSuccessClosing(false); }, 200);
  };

  const handleOptionClick = (opt) => {
    if (isLocked(opt)) {
      setBuyPopup({ opt, category: tab, canAfford: coins >= opt.price });
      return;
    }
    update(tab, opt.id);
  };

  const handleConfirmBuy = () => {
    if (!buyPopup) return;
    const { opt, _titleId } = buyPopup;
    onBuyItem(opt.id, opt.price);
    if (_titleId !== undefined) {
      setDraftTitle(_titleId);
    } else {
      update(tab, opt.id);
    }
    setBuyPopup(null);
    setPopupClosing(false);
    setPurchased(opt);
  };

  return (
    <div>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
        <button className="btn-ghost" onClick={() => { onTitleChange(draftTitle); onSave(draft); }} style={{ padding: '6px 14px', fontSize: 13 }}>← Back</button>
        <h2 style={{ fontWeight: 800, fontSize: '1.2rem', color: 'var(--text)' }}>Edit Avatar</h2>
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 4 }}>
          <img src="/avatar/vocacoin.png" alt="" style={{ width: 20, height: 20 }} />
          <span style={{ fontWeight: 700, fontSize: 14, color: 'var(--amber)' }}>{coins}</span>
        </div>
      </div>

      {/* Live preview */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '1.5rem' }}>
        <Avatar config={draft} size={160} />
        {draftTitle && (
          <p style={{ fontSize: 15, color: 'var(--amber)', fontWeight: 800, marginTop: 8 }}>
            {draftTitle}
          </p>
        )}
      </div>

      {/* Category tabs */}
      <div style={{ display: 'flex', gap: '0.4rem', justifyContent: 'center', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
        {CATEGORIES.map(c => (
          <button
            key={c.key}
            className={`goal-pill${tab === c.key ? ' active' : ''}`}
            onClick={() => setTab(c.key)}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* Options grid */}
      {tab === 'title' ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
          {TITLE_OPTIONS.map(t => {
            const locked = t.price > 0 && !unlockedItems.includes('title:' + t.id);
            const canAfford = coins >= t.price;
            const selected = draftTitle === t.id;
            return (
              <button
                key={t.id}
                onClick={() => {
                  if (locked) {
                    setBuyPopup({ opt: { ...t, id: 'title:' + t.id }, category: 'title', canAfford, _titleId: t.id });
                    return;
                  }
                  setDraftTitle(t.id);
                }}
                style={{
                  padding: '10px 14px',
                  borderRadius: 'var(--radius-sm)',
                  border: selected ? '2px solid var(--amber)' : '2px solid var(--border)',
                  background: selected ? 'var(--amber-light)' : 'var(--surface)',
                  cursor: locked && !canAfford ? 'not-allowed' : 'pointer',
                  fontFamily: 'var(--font-sans)',
                  fontSize: 14, fontWeight: 600, color: 'var(--text)',
                  textAlign: 'left',
                  transition: 'border-color 0.15s, background 0.15s',
                  opacity: locked && !canAfford ? 0.5 : 1,
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                }}
              >
                <span style={{ color: locked ? 'var(--muted)' : 'var(--text)' }}>{t.label}</span>
                {locked && (
                  <span style={{
                    display: 'flex', alignItems: 'center', gap: 3,
                    fontSize: 12, fontWeight: 700,
                    color: canAfford ? 'var(--amber)' : 'var(--muted)',
                  }}>
                    <img src="/avatar/vocacoin.png" alt="" style={{ width: 14, height: 14 }} />
                    {t.price}
                  </span>
                )}
              </button>
            );
          })}
          <p style={{ fontSize: 12, color: 'var(--hint)', marginTop: 4 }}>
            Shown under your name on your profile
          </p>
        </div>
      ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))',
          gap: '0.75rem',
          marginBottom: '1.5rem',
        }}>
          {tab === 'bg' ? (
            BG_COLORS.map(color => (
              <button
                key={color}
                onClick={() => update('bg', color)}
                style={{
                  width: '100%',
                  aspectRatio: '1',
                  borderRadius: 'var(--radius-sm)',
                  background: color,
                  border: draft.bg === color ? '3px solid var(--text)' : '2px solid var(--border)',
                  cursor: 'pointer',
                  transition: 'border-color 0.15s',
                }}
              />
            ))
          ) : (
            AVATAR_OPTIONS[tab]?.map(opt => {
              const locked = isLocked(opt);
              const canAfford = coins >= (opt.price || 0);
              return (
                <button
                  key={opt.id}
                  onClick={() => handleOptionClick(opt)}
                  style={{
                    background: 'var(--surface)',
                    border: draft[tab] === opt.id ? '3px solid var(--amber)' : '2px solid var(--border)',
                    borderRadius: 'var(--radius-sm)',
                    padding: '0.5rem',
                    cursor: locked && !canAfford ? 'not-allowed' : 'pointer',
                    transition: 'border-color 0.15s',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.35rem',
                    position: 'relative',
                    opacity: locked && !canAfford ? 0.5 : 1,
                  }}
                >
                  <img
                    src={opt.src}
                    alt={opt.label}
                    style={{
                      width: '100%',
                      aspectRatio: '1',
                      objectFit: 'contain',
                      filter: locked ? 'brightness(0.4)' : 'none',
                    }}
                    draggable={false}
                  />
                  <span style={{ fontSize: 11, fontWeight: 600, color: 'var(--muted)' }}>{opt.label}</span>
                  {locked && (
                    <span style={{
                      position: 'absolute',
                      top: 4, right: 4,
                      display: 'flex', alignItems: 'center', gap: 2,
                      fontSize: 10, fontWeight: 700,
                      color: canAfford ? 'var(--amber)' : 'var(--muted)',
                      background: 'var(--bg)',
                      borderRadius: 4,
                      padding: '1px 5px',
                    }}>
                      <img src="/avatar/vocacoin.png" alt="" style={{ width: 12, height: 12 }} />
                      {opt.price}
                    </span>
                  )}
                </button>
              );
            })
          )}
        </div>
      )}

      {/* ── Buy confirmation popup ── */}
      {buyPopup && (
        <>
          <div
            onClick={closePopup}
            style={{
              position: 'fixed', inset: 0,
              background: 'rgba(0,0,0,0.5)',
              zIndex: 200,
              animation: `${popupClosing ? 'popupBgOut' : 'popupBgIn'} 0.2s ease forwards`,
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
            animation: `${popupClosing ? 'popupOut' : 'popupIn'} 0.25s ease forwards`,
          }}>
            {/* Preview */}
            {buyPopup.category !== 'title' && (
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
                <Avatar config={{ ...draft, [buyPopup.category]: buyPopup.opt.id }} size={110} />
              </div>
            )}

            <p style={{ fontWeight: 800, fontSize: '1.1rem', color: 'var(--text)', marginBottom: 4 }}>
              {buyPopup.category === 'title' ? `Unlock title "${buyPopup.opt.label}"` : buyPopup.opt.label}
            </p>

            {/* Price tag */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              background: 'var(--amber-light)',
              border: '1.5px solid var(--amber)',
              borderRadius: 20,
              padding: '6px 14px',
              marginBottom: '1rem',
            }}>
              <img src="/avatar/vocacoin.png" alt="" style={{ width: 22, height: 22 }} />
              <span style={{ fontWeight: 800, fontSize: 16, color: 'var(--amber)' }}>{buyPopup.opt.price}</span>
            </div>

            {/* Balance info */}
            <p style={{ fontSize: 13, color: 'var(--muted)', marginBottom: '1.25rem' }}>
              Your balance: <strong style={{ color: buyPopup.canAfford ? 'var(--text)' : 'var(--danger-fg)' }}>{coins}</strong> coins
              {buyPopup.canAfford && (
                <span style={{ color: 'var(--hint)' }}> → {coins - buyPopup.opt.price} after purchase</span>
              )}
            </p>

            {buyPopup.canAfford ? (
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button className="btn-ghost" onClick={closePopup} style={{ flex: 1 }}>
                  Cancel
                </button>
                <button className="btn-primary" onClick={handleConfirmBuy} style={{ flex: 1 }}>
                  Buy
                </button>
              </div>
            ) : (
              <>
                <p style={{ fontSize: 13, color: 'var(--danger-fg)', fontWeight: 600, marginBottom: '0.75rem' }}>
                  Not enough coins! You need {buyPopup.opt.price - coins} more.
                </p>
                <button className="btn-ghost" onClick={closePopup} style={{ width: '100%' }}>
                  Close
                </button>
              </>
            )}
          </div>
        </>
      )}

      {/* ── Success popup ── */}
      {purchased && (
        <>
          <div
            onClick={closeSuccess}
            style={{
              position: 'fixed', inset: 0,
              background: 'rgba(0,0,0,0.5)',
              zIndex: 200,
              animation: `${successClosing ? 'popupBgOut' : 'popupBgIn'} 0.2s ease forwards`,
            }}
          />
          <div style={{
            position: 'fixed',
            top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 201,
            width: 'min(300px, 85vw)',
            background: 'var(--surface)',
            border: '2px solid var(--success-fg)',
            borderRadius: 16,
            padding: '1.75rem 1.5rem',
            textAlign: 'center',
            animation: `${successClosing ? 'popupOut' : 'popupIn'} 0.25s ease forwards`,
          }}>
            <p style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>
              {String.fromCodePoint(0x1F389)}
            </p>
            <p style={{ fontWeight: 800, fontSize: '1.2rem', color: 'var(--text)', marginBottom: 4 }}>
              Item unlocked!
            </p>
            <p style={{ fontSize: 14, color: 'var(--muted)', marginBottom: '1rem' }}>
              <strong>{purchased.label}</strong> is now yours.
            </p>
            {purchased.src && (
              <div style={{
                width: 80, height: 80, margin: '0 auto 1.25rem',
                background: 'var(--bg)',
                borderRadius: 12,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                border: '2px solid var(--success-fg)',
              }}>
                <img src={purchased.src} alt={purchased.label} style={{ width: 60, height: 60, objectFit: 'contain' }} />
              </div>
            )}
            <button className="btn-primary" onClick={closeSuccess} style={{ width: '100%' }}>
              Awesome!
            </button>
          </div>
        </>
      )}
    </div>
  );
}
