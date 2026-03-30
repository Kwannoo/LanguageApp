import { DEFAULT_AVATAR, LAYER_ORDER, getOptionSrc } from '../data/avatarConfig.js';

/**
 * Avatar – renders a layered character from a config object.
 * Props:
 *   config – { face, eyes, mouth, hair, hats, accessories, bg } (falls back to defaults)
 *   size   – number (px), default 96
 */
export default function Avatar({ config, size = 96 }) {
  const c = { ...DEFAULT_AVATAR, ...config };

  const layers = LAYER_ORDER
    .map(cat => getOptionSrc(cat, c[cat]))
    .filter(Boolean);

  return (
    <div
      className="avatar"
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        background: c.bg,
        position: 'relative',
        overflow: 'hidden',
        flexShrink: 0,
      }}
    >
      {layers.map((src, i) => (
        <img
          key={i}
          src={src}
          alt=""
          draggable={false}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            pointerEvents: 'none',
          }}
        />
      ))}
    </div>
  );
}
