import { useState } from 'react';
import { AVATAR_OPTIONS, TITLE_OPTIONS } from '../data/avatarConfig.js';

/**
 * ShopScreen
 * Browse every purchasable item in one place. Shows owned items alongside
 * items still available to buy so users can see the full catalogue.
 *
 * Props:
 *   coins          – number
 *   unlockedItems  – string[] of unlocked ids (titles use 'title:' prefix)
 *   streakFreezes  – number (current freeze count)
 *   onBuyItem      – fn(itemId, price) for avatar/title items
 *   onBuyFreeze    – fn() buys one freeze for 50 coins (max 3)
 *   onBack         – fn()
 */
export default function ShopScreen({
  coins = 0,
  unlockedItems = [],
  streakFreezes = 0,
  onBuyItem,
  onBuyFreeze,
  onBack,
}) {
  const [tab, setTab] = useState('all'); // all | hats | accessories | titles | freezes
  const [confirm, setConfirm] = useState(null); // { item, onConfirm }

  const hats = AVATAR_OPTIONS.hats
    .filter(o => o.price)
    .map(o => ({
      id: o.id,
      label: o.label,
      price: o.price,
      kind: 'hats',
      src: o.src,
      owned: unlockedItems.includes(o.id),
    }));

  const accessories = AVATAR_OPTIONS.accessories
    .filter(o => o.price)
    .map(o => ({
      id: o.id,
      label: o.label,
      price: o.price,
      kind: 'accessories',
      src: o.src,
      owned: unlockedItems.includes(o.id),
    }));

  const glasses = AVATAR_OPTIONS.glasses
    .filter(o => o.price)
    .map(o => ({
      id: o.id,
      label: o.label,
      price: o.price,
      kind: 'glasses',
      src: o.src,
      owned: unlockedItems.includes(o.id),
    }));

  const hair = AVATAR_OPTIONS.hair
    .filter(o => o.price)
    .map(o => ({
      id: o.id,
      label: o.label,
      price: o.price,
      kind: 'hair',
      src: o.src,
      owned: unlockedItems.includes(o.id),
    }));

  const titles = TITLE_OPTIONS
    .filter(t => t.price)
    .map(t => ({
      id: 'title:' + t.id,
      label: t.label,
      price: t.price,
      kind: 'titles',
      owned: unlockedItems.includes('title:' + t.id),
    }));

  const sections = [];
  if (tab === 'all' || tab === 'freezes') {
    sections.push({ key: 'freezes', label: 'Streak Freezes', special: 'freeze' });
  }
  if (tab === 'all' || tab === 'hats') {
    sections.push({ key: 'hats', label: 'Hats', items: hats });
  }
  if (tab === 'all' || tab === 'accessories') {
    sections.push({ key: 'accessories', label: 'Accessories', items: accessories });
  }
  if (tab === 'all' || tab === 'glasses') {
    sections.push({ key: 'glasses', label: 'Glasses', items: glasses });
  }
  if (tab === 'all' || tab === 'hair') {
    sections.push({ key: 'hair', label: 'Hair', items: hair });
  }
  if (tab === 'all' || tab === 'titles') {
    sections.push({ key: 'titles', label: 'Titles', items: titles });
  }

  const tabs = [
    { key: 'all',         label: 'All' },
    { key: 'freezes',     label: 'Freezes' },
    { key: 'hats',        label: 'Hats' },
    { key: 'accessories', label: 'Acc.' },
    { key: 'glasses',     label: 'Glasses' },
    { key: 'hair',        label: 'Hair' },
    { key: 'titles',      label: 'Titles' },
  ];

  const handleBuy = (item) => {
    setConfirm({
      item,
      onConfirm: () => {
        onBuyItem(item.id, item.price);
        setConfirm(null);
      },
    });
  };

  const FREEZE_PRICE = 50;
  const FREEZE_MAX = 3;
  const handleBuyFreeze = () => {
    setConfirm({
      item: { label: 'Streak Freeze', price: FREEZE_PRICE, kind: 'freezes' },
      onConfirm: () => {
        onBuyFreeze();
        setConfirm(null);
      },
    });
  };

  return (
    <div>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
        <button className="btn-ghost" onClick={onBack} style={{ padding: '6px 14px', fontSize: 13 }}>← Back</button>
        <h2 style={{ fontWeight: 800, fontSize: '1.2rem', color: 'var(--text)' }}>Shop</h2>
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 4 }}>
          <img src="/avatar/vocacoin.png" alt="" style={{ width: 20, height: 20 }} />
          <span style={{ fontWeight: 700, fontSize: 14, color: 'var(--amber)' }}>{coins}</span>
        </div>
      </div>

      {/* Tabs */}
      <div className="goal-picker" style={{ marginBottom: '1rem', flexWrap: 'wrap' }}>
        {tabs.map(t => (
          <button
            key={t.key}
            className={`goal-pill${tab === t.key ? ' active' : ''}`}
            onClick={() => setTab(t.key)}
            style={{ fontSize: '0.85rem' }}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Sections */}
      {sections.map(section => (
        <div key={section.key} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: 14, fontWeight: 700, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: '0.5rem' }}>
            {section.label}
          </h3>

          {section.special === 'freeze' ? (
            <div style={{
              padding: '1rem',
              background: 'var(--card)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-md)',
              display: 'flex', alignItems: 'center', gap: '0.75rem',
            }}>
              <div style={{ fontSize: '2rem' }}>❄️</div>
              <div style={{ flex: 1 }}>
                <p style={{ fontWeight: 700, fontSize: 14, color: 'var(--text)' }}>Streak Freeze</p>
                <p style={{ fontSize: 12, color: 'var(--muted)' }}>
                  Owned {streakFreezes}/{FREEZE_MAX} — saves your streak if you miss a day.
                </p>
              </div>
              {streakFreezes >= FREEZE_MAX ? (
                <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--success-fg)' }}>MAX</span>
              ) : (
                <button
                  className="btn-primary"
                  onClick={handleBuyFreeze}
                  disabled={coins < FREEZE_PRICE}
                  style={{ padding: '6px 12px', fontSize: 13, opacity: coins < FREEZE_PRICE ? 0.5 : 1 }}
                >
                  <img src="/avatar/vocacoin.png" alt="" style={{ width: 14, height: 14, verticalAlign: 'middle', marginRight: 4 }} />
                  {FREEZE_PRICE}
                </button>
              )}
            </div>
          ) : section.items.length === 0 ? (
            <p style={{ fontSize: 13, color: 'var(--muted)' }}>Nothing here yet.</p>
          ) : (
            <div style={{
              display: 'grid',
              gridTemplateColumns: section.key === 'titles' ? '1fr' : 'repeat(auto-fill, minmax(110px, 1fr))',
              gap: '0.6rem',
            }}>
              {section.items.map(item => (
                <ShopCard
                  key={item.id}
                  item={item}
                  canAfford={coins >= item.price}
                  onBuy={() => handleBuy(item)}
                />
              ))}
            </div>
          )}
        </div>
      ))}

      {/* Confirm popup */}
      {confirm && (
        <>
          <div
            onClick={() => setConfirm(null)}
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
            <p style={{ fontWeight: 800, fontSize: '1.1rem', color: 'var(--text)', marginBottom: 4 }}>
              {confirm.item.label}
            </p>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              background: 'var(--amber-light)',
              border: '1.5px solid var(--amber)',
              borderRadius: 20,
              padding: '6px 14px',
              marginBottom: '1rem',
            }}>
              <img src="/avatar/vocacoin.png" alt="" style={{ width: 22, height: 22 }} />
              <span style={{ fontWeight: 800, fontSize: 16, color: 'var(--amber)' }}>{confirm.item.price}</span>
            </div>
            <p style={{ fontSize: 13, color: 'var(--muted)', marginBottom: '1.25rem' }}>
              Your balance: <strong style={{ color: coins >= confirm.item.price ? 'var(--text)' : 'var(--danger-fg)' }}>{coins}</strong> coins
              {coins >= confirm.item.price && (
                <span style={{ color: 'var(--hint)' }}> → {coins - confirm.item.price} after purchase</span>
              )}
            </p>
            {coins >= confirm.item.price ? (
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button className="btn-ghost" onClick={() => setConfirm(null)} style={{ flex: 1 }}>Cancel</button>
                <button className="btn-primary" onClick={confirm.onConfirm} style={{ flex: 1 }}>Buy</button>
              </div>
            ) : (
              <>
                <p style={{ fontSize: 13, color: 'var(--danger-fg)', fontWeight: 600, marginBottom: '0.75rem' }}>
                  Not enough coins! You need {confirm.item.price - coins} more.
                </p>
                <button className="btn-ghost" onClick={() => setConfirm(null)} style={{ width: '100%' }}>Close</button>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
}

function ShopCard({ item, canAfford, onBuy }) {
  const isTitle = item.kind === 'titles';
  return (
    <div style={{
      padding: isTitle ? '0.75rem 1rem' : '0.5rem',
      background: 'var(--card)',
      border: `2px solid ${item.owned ? 'var(--success-fg)' : 'var(--border)'}`,
      borderRadius: 'var(--radius-sm)',
      display: 'flex',
      flexDirection: isTitle ? 'row' : 'column',
      alignItems: 'center',
      gap: isTitle ? '0.75rem' : '0.4rem',
      textAlign: 'center',
    }}>
      {!isTitle && (
        <div style={{
          width: 64, height: 64,
          background: 'var(--surface)',
          borderRadius: 'var(--radius-sm)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <img src={item.src} alt={item.label} style={{ width: 56, height: 56, objectFit: 'contain' }} />
        </div>
      )}
      <p style={{ fontSize: 13, fontWeight: 700, color: 'var(--text)', flex: isTitle ? 1 : undefined, textAlign: isTitle ? 'left' : 'center' }}>
        {item.label}
      </p>
      {item.owned ? (
        <span style={{
          fontSize: 11, fontWeight: 700,
          color: 'var(--success-fg)',
          background: 'color-mix(in srgb, var(--success-fg) 12%, transparent)',
          padding: '3px 8px', borderRadius: 6,
        }}>
          ✓ Owned
        </span>
      ) : (
        <button
          onClick={onBuy}
          disabled={!canAfford}
          style={{
            display: 'flex', alignItems: 'center', gap: 3,
            padding: '4px 10px', borderRadius: 6,
            fontSize: 12, fontWeight: 700,
            border: 'none',
            background: canAfford ? 'var(--amber)' : 'var(--surface)',
            color: canAfford ? '#fff' : 'var(--muted)',
            cursor: canAfford ? 'pointer' : 'not-allowed',
          }}
        >
          <img src="/avatar/vocacoin.png" alt="" style={{ width: 12, height: 12 }} />
          {item.price}
        </button>
      )}
    </div>
  );
}
