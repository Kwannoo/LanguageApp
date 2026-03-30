import { useState } from 'react';
import { supabase } from '../lib/supabase.js';

export default function ResetPassword({ onDone }) {
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }
    if (password !== confirm) {
      setError('Passwords do not match.');
      return;
    }

    setLoading(true);
    const { error: err } = await supabase.auth.updateUser({ password });
    setLoading(false);

    if (err) {
      setError(err.message);
    } else {
      alert('Password updated successfully!');
      onDone();
    }
  };

  return (
    <div className="card text-center" style={{ maxWidth: 400, margin: '3rem auto', padding: '2rem' }}>
      <h2 style={{ fontWeight: 800, fontSize: '1.4rem', color: 'var(--text)', marginBottom: '0.5rem' }}>
        Reset your password
      </h2>
      <p className="text-muted" style={{ marginBottom: '1.5rem' }}>
        Enter your new password below.
      </p>

      <form onSubmit={handleSubmit}>
        <label style={{ fontSize: 12, fontWeight: 600, color: 'var(--muted)', display: 'block', marginBottom: 6, textAlign: 'left' }}>
          New password
        </label>
        <input
          className="input-field"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="••••••••"
          required
          minLength={6}
          autoComplete="new-password"
        />

        <label style={{ fontSize: 12, fontWeight: 600, color: 'var(--muted)', display: 'block', marginBottom: 6, textAlign: 'left' }}>
          Confirm new password
        </label>
        <input
          className="input-field"
          type="password"
          value={confirm}
          onChange={e => setConfirm(e.target.value)}
          placeholder="••••••••"
          required
          minLength={6}
          autoComplete="new-password"
        />

        {error && (
          <p style={{ color: '#e74c3c', fontSize: 13, marginBottom: '0.75rem' }}>{error}</p>
        )}

        <button className="btn-primary" type="submit" disabled={loading} style={{ width: '100%' }}>
          {loading ? 'Updating…' : 'Update password'}
        </button>
      </form>
    </div>
  );
}
