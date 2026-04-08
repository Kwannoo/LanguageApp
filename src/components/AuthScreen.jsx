import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase.js';
import { resolveReferralCode, awardStreakFreeze, getReferralFromUrl } from '../utils/referral.js';

function isDarkTheme() {
  const attr = document.documentElement.getAttribute('data-theme');
  if (attr === 'dark') return true;
  if (attr === 'light') return false;
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

export default function AuthScreen() {
  const pendingRef = getReferralFromUrl();
  const [mode, setMode]         = useState('login'); // 'login' | 'signup' | 'forgot'
  const [dark, setDark]         = useState(isDarkTheme);

  // Keep logo in sync if the user's OS theme changes while on the login screen
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = () => setDark(isDarkTheme());
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);
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

    if (mode === 'forgot') {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: window.location.origin,
      });
      if (error) setError(error.message);
      else setMessage('Reset link sent! Check your inbox (and spam folder).');
      setLoading(false);
      return;
    }

    if (mode === 'login') {
      let loginEmail = email.trim();
      // If the user typed a username (no @), look up their email via RPC
      // (regular profiles SELECT is blocked by RLS for unauthenticated users)
      if (!loginEmail.includes('@')) {
        const { data: resolvedEmail, error: rpcError } = await supabase
          .rpc('get_email_by_username', { lookup_username: loginEmail });
        if (rpcError || !resolvedEmail) {
          setError('No account found with that username.');
          setLoading(false);
          return;
        }
        loginEmail = resolvedEmail;
      }
      const { error } = await supabase.auth.signInWithPassword({ email: loginEmail, password });
      if (error) setError(error.message);
    } else {
      if (username.trim().length < 3 || username.trim().length > 20) {
        setError('Username must be between 3 and 20 characters.');
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

      // Store username BEFORE signUp so it's available when onAuthStateChange fires
      localStorage.setItem('taalkaarten_pending_username', username.trim());
      // Also store in user metadata so it survives across devices/browsers (localStorage may be unavailable)
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: { data: { username: username.trim() } },
      });
      if (error) {
        localStorage.removeItem('taalkaarten_pending_username');
        if (error.message.toLowerCase().includes('email') && error.message.toLowerCase().includes('send')) {
          setError('Could not send verification email right now — please try again in a few minutes.');
        } else {
          setError(error.message);
        }
      } else if (data.user) {
        await supabase.from('profiles').upsert({ id: data.user.id, username: username.trim(), email: email.trim() }, { onConflict: 'id' });
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
        setMode('verify');
      }
    }

    setLoading(false);
  };


  return (
    <div className="text-center">
      {/* App logo */}
      <div style={{ marginBottom: '2rem' }}>
        <img
          src={dark ? '/transparent-white-logo.png' : '/transparent-black-logo.png'}
          alt="Vocardably"
          style={{ height: 160, width: 'auto', marginBottom: 8 }}
        />
        <p className="text-muted">Learn languages, one card at a time.</p>
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

      {/* Verify email screen */}
      {mode === 'verify' && (
        <div style={{
          background: 'var(--surface)',
          border: '2px solid var(--border)',
          borderRadius: 'var(--radius-lg)',
          padding: '1.75rem',
          textAlign: 'center',
        }}>
          <p style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>📬</p>
          <h2 style={{ fontWeight: 800, fontSize: '1.2rem', color: 'var(--text)', marginBottom: '0.5rem' }}>
            Check your email
          </h2>
          <p style={{ fontSize: 14, color: 'var(--muted)', marginBottom: '0.5rem' }}>
            We sent a verification link to
          </p>
          <p style={{ fontSize: 14, fontWeight: 700, color: 'var(--text)', marginBottom: '1rem', wordBreak: 'break-all' }}>
            {email}
          </p>
          <p style={{ fontSize: 13, color: 'var(--muted)', marginBottom: '1.5rem' }}>
            Click the link in the email to verify your account before signing in. Check your spam folder if you don't see it.
          </p>
          <button
            className="btn-ghost"
            style={{ width: '100%' }}
            onClick={() => { setMode('login'); setError(''); setMessage(''); }}
          >
            Back to sign in
          </button>
        </div>
      )}

      {/* Auth card */}
      {mode !== 'verify' && <div style={{
        background: 'var(--surface)',
        border: '2px solid var(--border)',
        borderRadius: 'var(--radius-lg)',
        padding: '1.75rem',
        textAlign: 'left',
      }}>
        <h2 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '1.25rem', textAlign: 'center', color: 'var(--text)' }}>
          {mode === 'login' ? 'Welcome back to Vocardably!' : mode === 'signup' ? 'Create account' : 'Forgot password'}
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
                maxLength={20}
                autoComplete="username"
              />
            </>
          )}
          <label style={{ fontSize: 12, fontWeight: 600, color: 'var(--muted)', display: 'block', marginBottom: 6 }}>
            {mode === 'login' ? 'Email or username' : 'Email'}
          </label>
          <input
            className="input-field"
            type={mode === 'login' ? 'text' : 'email'}
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder={mode === 'login' ? 'you@example.com or your_username' : 'you@example.com'}
            required
            autoComplete={mode === 'login' ? 'username' : 'email'}
          />

          {mode !== 'forgot' && (
            <>
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
            </>
          )}

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

          {mode === 'forgot' && (
            <p style={{ fontSize: 13, color: 'var(--muted)', marginBottom: '1rem' }}>
              Enter your email and we'll send you a link to reset your password.
            </p>
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
            {loading ? '…' : mode === 'login' ? 'Sign in' : mode === 'signup' ? 'Create account' : 'Send reset link'}
          </button>
        </form>

        {mode === 'login' && (
          <p style={{ textAlign: 'center', marginTop: '0.75rem', fontSize: 13 }}>
            <button
              onClick={() => { setMode('forgot'); setError(''); setMessage(''); }}
              style={{
                background: 'none', border: 'none', color: 'var(--muted)',
                fontWeight: 600, cursor: 'pointer', fontFamily: 'var(--font-sans)',
                fontSize: 13, padding: 0,
              }}
            >
              Forgot password?
            </button>
          </p>
        )}

        <p style={{ textAlign: 'center', marginTop: '0.75rem', fontSize: 13, color: 'var(--muted)' }}>
          {mode === 'forgot' ? 'Remember your password? ' : mode === 'login' ? "Don't have an account? " : 'Already have an account? '}
          <button
            onClick={() => { setMode(mode === 'signup' ? 'login' : mode === 'login' ? 'signup' : 'login'); setError(''); setMessage(''); }}
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
            {mode === 'forgot' ? 'Sign in' : mode === 'login' ? 'Sign up' : 'Sign in'}
          </button>
        </p>
      </div>}
    </div>
  );
}
