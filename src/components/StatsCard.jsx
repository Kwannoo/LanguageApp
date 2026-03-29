import { useEffect, useRef, useState } from 'react';
import { computeProgress } from '../utils/srs.js';

/**
 * Renders a shareable stats card to a canvas and provides a share/download button.
 */
export default function StatsCard({ username, streak, words, srsData, language, onClose }) {
  const canvasRef = useRef(null);
  const [ready, setReady] = useState(false);

  const { learned, total } = computeProgress(words, srsData);
  const langLabel = language === 'ja' ? 'Japanese' : 'Dutch';

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const W = 600, H = 340;
    canvas.width = W;
    canvas.height = H;

    // Background gradient
    const grad = ctx.createLinearGradient(0, 0, W, H);
    grad.addColorStop(0, '#0D1B2A');
    grad.addColorStop(1, '#1A3A5C');
    ctx.fillStyle = grad;
    ctx.roundRect(0, 0, W, H, 24);
    ctx.fill();

    // Accent stripe
    ctx.fillStyle = '#1CB0F6';
    ctx.fillRect(0, 0, 6, H);

    // App name
    ctx.fillStyle = '#1CB0F6';
    ctx.font = 'bold 20px system-ui, sans-serif';
    ctx.fillText('Vocably', 36, 46);

    // Username
    ctx.fillStyle = '#E8F4FF';
    ctx.font = 'bold 32px system-ui, sans-serif';
    ctx.fillText(`@${username}`, 36, 100);

    // Divider
    ctx.strokeStyle = '#2A4A6A';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(36, 118);
    ctx.lineTo(W - 36, 118);
    ctx.stroke();

    // Stats
    const stats = [
      { label: 'Streak', value: `🔥 ${streak} days` },
      { label: `${langLabel} words learned`, value: `📚 ${learned} / ${total}` },
      { label: 'Progress', value: `${total > 0 ? Math.round((learned / total) * 100) : 0}%` },
    ];

    stats.forEach((s, i) => {
      const x = 36 + i * 190;
      ctx.fillStyle = '#7AA8C8';
      ctx.font = '13px system-ui, sans-serif';
      ctx.fillText(s.label, x, 158);
      ctx.fillStyle = '#E8F4FF';
      ctx.font = 'bold 22px system-ui, sans-serif';
      ctx.fillText(s.value, x, 192);
    });

    // Progress bar
    const barX = 36, barY = 230, barW = W - 72, barH = 12;
    ctx.fillStyle = '#2A4A6A';
    ctx.roundRect(barX, barY, barW, barH, 6);
    ctx.fill();
    const pct = total > 0 ? learned / total : 0;
    if (pct > 0) {
      ctx.fillStyle = '#1CB0F6';
      ctx.roundRect(barX, barY, barW * pct, barH, 6);
      ctx.fill();
    }

    // Tagline
    ctx.fillStyle = '#3A6080';
    ctx.font = '14px system-ui, sans-serif';
    ctx.fillText('Learn 3,000 words. Understand everything.', 36, 285);

    // URL
    ctx.fillStyle = '#1CB0F6';
    ctx.font = '13px system-ui, sans-serif';
    ctx.fillText(window.location.origin, 36, 315);

    setReady(true);
  }, [username, streak, learned, total, langLabel]);

  const handleShare = async () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.toBlob(async (blob) => {
      const file = new File([blob], 'vocably-stats.png', { type: 'image/png' });
      if (navigator.canShare?.({ files: [file] })) {
        await navigator.share({ files: [file], title: `${username}'s Vocably stats` });
      } else {
        // Fallback: download
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = 'vocably-stats.png';
        a.click();
      }
    }, 'image/png');
  };

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 200,
      background: 'rgba(0,0,0,0.6)',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      padding: '1rem',
    }}>
      <div style={{
        background: 'var(--surface)', borderRadius: 'var(--radius-lg)',
        padding: '1.25rem', width: '100%', maxWidth: 480,
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
          <p style={{ fontWeight: 700, color: 'var(--text)' }}>Your stats card</p>
          <button onClick={onClose} style={{ background: 'none', border: 'none', fontSize: 18, cursor: 'pointer', color: 'var(--muted)' }}>✕</button>
        </div>

        {/* Canvas preview */}
        <canvas
          ref={canvasRef}
          style={{ width: '100%', borderRadius: 12, display: 'block', marginBottom: '0.75rem' }}
        />

        <button className="btn-primary" onClick={handleShare} disabled={!ready}>
          {navigator.share ? 'Share stats' : 'Download image'}
        </button>
      </div>
    </div>
  );
}
