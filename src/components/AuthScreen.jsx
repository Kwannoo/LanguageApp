import { useState } from 'react';
import { supabase } from '../lib/supabase.js';
import { resolveReferralCode, awardStreakFreeze, getReferralFromUrl } from '../utils/referral.js';

export default function AuthScreen() {
  const pendingRef = getReferralFromUrl();
  const [mode, setMode]         = useState('login'); // 'login' | 'signup'
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError]       = useState('');
  const [message, setMessage]   = useState('');
  const [loading, setLoading]   = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');
    setLoading(true);

    if (mode === 'login') {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) setError(error.message);
    } else {
      if (username.trim().length < 3) {
        setError('Username must be at least 3 characters.');
        setLoading(false);
        return;
      }
      if (!/^[a-zA-Z0-9_]+$/.test(username)) {
        setError('Username can only contain letters, numbers, and underscores.');
        setLoading(false);
        return;
      }
      if (password !== confirmPassword) {
        setError('Passwords do not match.');
        setLoading(false);
        return;
      }

      // Check if username is taken
      const { data: existing } = await supabase
        .from('profiles')
        .select('id')
        .ilike('username', username.trim())
        .maybeSingle();
      if (existing) {
        setError('Username already taken.');
        setLoading(false);
        return;
      }

      const { data, error } = await supabase.auth.signUp({ email, password });
      if (error) {
        setError(error.message);
      } else if (data.user) {
        await supabase.from('profiles').update({ username: username.trim() }).eq('id', data.user.id);
        // If referred by someone, award a freeze to both
        if (pendingRef) {
          const referrer = await resolveReferralCode(pendingRef);
          if (referrer && referrer.id !== data.user.id) {
            await Promise.all([
              awardStreakFreeze(data.user.id),
              awardStreakFreeze(referrer.id),
            ]);
          }
        }
        setMessage('Account created! You are now signed in.');
      }
    }

    setLoading(false);
  };

  const switchMode = () => {
    setMode(m => m === 'login' ? 'signup' : 'login');
    setError('');
    setMessage('');
  };

  return (
    <div className="text-center">
      {/* App title */}
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '2.25rem',
          fontWeight: 800,
          color: 'var(--text)',
          marginBottom: 4,
        }}>
          Vocably
        </h1>
        <p className="text-muted">Learn 3,000 words. Understand everything.</p>
      </div>

      {/* Referral banner */}
      {pendingRef && (
        <div style={{
          background: 'var(--success-bg)', border: '1px solid var(--success-fg)',
          borderRadius: 'var(--radius-md)', padding: '0.75rem 1rem',
          marginBottom: '1rem', fontSize: 13, color: 'var(--success-fg)', fontWeight: 600,
        }}>
          🧊 You were invited! Sign up and both you and your friend get a streak freeze.
        </div>
      )}

      {/* Auth card */}
      <div style={{
        background: 'var(--surface)',
        border: '2px solid var(--border)',
        borderRadius: 'var(--radius-lg)',
        padding: '1.75rem',
        textAlign: 'left',
      }}>
        <h2 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '1.25rem', textAlign: 'center', color: 'var(--text)' }}>
          {mode === 'login' ? 'Welcome back' : 'Create account'}
        </h2>

        <form onSubmit={handleSubmit}>
          {mode === 'signup' && (
            <>
              <label style={{ fontSize: 12, fontWeight: 600, color: 'var(--muted)', display: 'block', marginBottom: 6 }}>
                Username
              </label>
              <input
                className="input-field"
                type="text"
                value={username}
                onChange={e => setUsername(e.target.value)}
                placeholder="your_username"
                required
                autoComplete="username"
              />
            </>
          )}
          <label style={{ fontSize: 12, fontWeight: 600, color: 'var(--muted)', display: 'block', marginBottom: 6 }}>
            Email
          </label>
          <input
            className="input-field"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
            autoComplete="email"
          />

          <label style={{ fontSize: 12, fontWeight: 600, color: 'var(--muted)', display: 'block', marginBottom: 6 }}>
            Password
          </label>
          <input
            className="input-field"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="••••••••"
            required
            minLength={6}
            autoComplete={mode === 'login' ? 'current-password' : 'new-password'}
          />

          {mode === 'signup' && (
            <>
              <label style={{ fontSize: 12, fontWeight: 600, color: 'var(--muted)', display: 'block', marginBottom: 6 }}>
                Confirm password
              </label>
              <input
                className="input-field"
                type="password"
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
                placeholder="••••••••"
                required
                minLength={6}
                autoComplete="new-password"
              />
            </>
          )}

          {error && (
            <p style={{ color: 'var(--danger-fg)', fontSize: 13, marginBottom: '0.75rem', fontWeight: 600 }}>
              {error}
            </p>
          )}
          {message && (
            <p style={{ color: 'var(--success-fg)', fontSize: 13, marginBottom: '0.75rem', fontWeight: 600 }}>
              {message}
            </p>
          )}

          <button className="btn-primary" type="submit" disabled={loading}>
            {loading ? '…' : mode === 'login' ? 'Sign in' : 'Create account'}
          </button>
        </form>

        <p style={{ textAlign: 'center', marginTop: '1.1rem', fontSize: 13, color: 'var(--muted)' }}>
          {mode === 'login' ? "Don't have an account? " : 'Already have an account? '}
          <button
            onClick={switchMode}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--amber)',
              fontWeight: 700,
              cursor: 'pointer',
              fontFamily: 'var(--font-sans)',
              fontSize: 13,
              padding: 0,
            }}
          >
            {mode === 'login' ? 'Sign up' : 'Sign in'}
          </button>
        </p>
      </div>
    </div>
  );
}
