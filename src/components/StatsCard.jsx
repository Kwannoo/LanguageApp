import { useEffect, useRef, useState } from 'react';
import { computeProgress } from '../utils/srs.js';

export default function StatsCard({ username, streak, words, srsData, onClose }) {
  const canvasRef = useRef(null);
  const [ready, setReady] = useState(false);

  const { mastered, inProgress } = computeProgress(words, srsData);
  const appUrl = window.location.origin;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const logo = new Image();
    logo.src = '/transparent-white-logo.png';
    logo.onload = () => draw(logo);
    // If logo fails to load, draw without it
    logo.onerror = () => draw(null);

    function draw(logoImg) {
      const ctx = canvas.getContext('2d');
      const W = 600, H = 320;
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

      // Logo (top right)
      if (logoImg) {
        const logoH = 100;
        const logoW = (logoImg.naturalWidth / logoImg.naturalHeight) * logoH;
        ctx.drawImage(logoImg, W - 26 - logoW, 15, logoW, logoH);
      }

      // App name
      ctx.fillStyle = '#1CB0F6';
      ctx.font = 'bold 20px system-ui, sans-serif';
      ctx.fillText('Vocardably', 36, 46);

      // Username
      ctx.fillStyle = '#E8F4FF';
      ctx.font = 'bold 30px system-ui, sans-serif';
      ctx.fillText(`@${username}`, 36, 96);

      // Divider
      ctx.strokeStyle = '#2A4A6A';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(36, 114);
      ctx.lineTo(W - 36, 114);
      ctx.stroke();

      // Stats
      const stats = [
        { label: 'Streak', value: `🔥 ${streak}` },
        { label: 'In Progress', value: `📚 ${inProgress}` },
        { label: 'Mastered', value: `🎓 ${mastered}` },
      ];
      stats.forEach((s, i) => {
        const x = 36 + i * 185;
        ctx.fillStyle = '#7AA8C8';
        ctx.font = '13px system-ui, sans-serif';
        ctx.fillText(s.label, x, 152);
        ctx.fillStyle = '#E8F4FF';
        ctx.font = 'bold 24px system-ui, sans-serif';
        ctx.fillText(s.value, x, 184);
      });

      // CTA box
      const ctaY = 210;
      ctx.fillStyle = 'rgba(28, 176, 246, 0.12)';
      ctx.roundRect(36, ctaY, W - 72, 52, 10);
      ctx.fill();
      ctx.strokeStyle = 'rgba(28, 176, 246, 0.3)';
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.fillStyle = '#E8F4FF';
      ctx.font = 'bold 15px system-ui, sans-serif';
      ctx.fillText('Join me and learn a new language for free! 🚀', 36 + 16, ctaY + 22);
      ctx.fillStyle = '#1CB0F6';
      ctx.font = '13px system-ui, sans-serif';
      ctx.fillText(appUrl, 36 + 16, ctaY + 40);

      // Tagline
      ctx.fillStyle = '#3A6080';
      ctx.font = '13px system-ui, sans-serif';
      ctx.fillText('Small steps every day. Big results over time.', 36, 292);

      setReady(true);
    }
  }, [username, streak, mastered, inProgress, appUrl]);

  const handleShare = async () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.toBlob(async (blob) => {
      const file = new File([blob], 'vocardably-stats.png', { type: 'image/png' });
      const shareText = `I'm learning a new language on Vocardably! 🔥 ${streak} day streak, 🎓 ${mastered} words mastered. Join me for free 👉`;
      if (navigator.canShare?.({ files: [file] })) {
        await navigator.share({
          files: [file],
          title: `${username}'s Vocardably stats`,
          text: shareText,
          url: appUrl,
        });
      } else {
        // Fallback: download image + copy link
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = 'vocardably-stats.png';
        a.click();
        await navigator.clipboard?.writeText(`${shareText} ${appUrl}`).catch(() => {});
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
