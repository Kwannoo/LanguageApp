import { useState } from 'react';
import Avatar from './Avatar.jsx';
import { AVATAR_OPTIONS, BG_COLORS, DEFAULT_AVATAR } from '../data/avatarConfig.js';

const CATEGORIES = [
  { key: 'face',  label: 'Face' },
  { key: 'eyes',  label: 'Eyes' },
  { key: 'mouth', label: 'Mouth' },
  { key: 'hair',  label: 'Hair' },
  { key: 'bg',    label: 'Background' },
];

/**
 * AvatarEditor
 * Props:
 *   avatar   – current avatar config
 *   onSave   – fn(newConfig)
 *   onBack   – fn()
 */
export default function AvatarEditor({ avatar, onSave, onBack }) {
  const [draft, setDraft] = useState({ ...DEFAULT_AVATAR, ...avatar });
  const [tab, setTab]     = useState('face');

  const update = (key, value) => setDraft(prev => ({ ...prev, [key]: value }));

  return (
    <div>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
        <button className="btn-ghost" onClick={onBack} style={{ padding: '6px 14px', fontSize: 13 }}>← Back</button>
        <h2 style={{ fontWeight: 800, fontSize: '1.2rem', color: 'var(--text)' }}>Edit Avatar</h2>
      </div>

      {/* Live preview */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
        <Avatar config={draft} size={160} />
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
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))',
        gap: '0.75rem',
        marginBottom: '1.5rem',
      }}>
        {tab === 'bg' ? (
          /* Color swatches */
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
          /* Image options */
          AVATAR_OPTIONS[tab]?.map(opt => (
            <button
              key={opt.id}
              onClick={() => update(tab, opt.id)}
              style={{
                background: 'var(--surface)',
                border: draft[tab] === opt.id ? '3px solid var(--amber)' : '2px solid var(--border)',
                borderRadius: 'var(--radius-sm)',
                padding: '0.5rem',
                cursor: 'pointer',
                transition: 'border-color 0.15s',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.35rem',
              }}
            >
              <img
                src={opt.src}
                alt={opt.label}
                style={{ width: '100%', aspectRatio: '1', objectFit: 'contain' }}
                draggable={false}
              />
              <span style={{ fontSize: 11, fontWeight: 600, color: 'var(--muted)' }}>{opt.label}</span>
            </button>
          ))
        )}
      </div>

      {/* Save */}
      <button className="btn-primary" onClick={() => onSave(draft)}>
        Save avatar
      </button>
    </div>
  );
}
