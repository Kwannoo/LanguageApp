export default function PrivacyScreen({ onBack }) {
  return (
    <div>
      <button className="btn-ghost" onClick={onBack} style={{ marginBottom: '1rem' }}>
        ← Back
      </button>

      <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.25rem' }}>
        Privacy Policy
      </h2>
      <p style={{ fontSize: 12, color: 'var(--hint)', marginBottom: '1.5rem' }}>Last updated: April 2025</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', fontSize: 14, color: 'var(--text)', lineHeight: 1.7 }}>

        <section>
          <p style={{ fontWeight: 700, marginBottom: '0.4rem' }}>What we collect</p>
          <p style={{ color: 'var(--muted)' }}>
            When you create an account, we store your email address and a username you choose.
            As you use the app, we store your learning progress — which words you've practiced,
            your streak, session history, and app preferences like avatar and settings.
          </p>
        </section>

        <section>
          <p style={{ fontWeight: 700, marginBottom: '0.4rem' }}>Why we collect it</p>
          <p style={{ color: 'var(--muted)' }}>
            Your data is used solely to make the app work — to sync your progress across devices,
            maintain your streak, and show your stats. Nothing else.
          </p>
        </section>

        <section>
          <p style={{ fontWeight: 700, marginBottom: '0.4rem' }}>What we don't do</p>
          <p style={{ color: 'var(--muted)' }}>
            We do not sell your data. We do not share it with third parties. We do not use
            tracking cookies or run any advertising. We do not collect payment information.
          </p>
        </section>

        <section>
          <p style={{ fontWeight: 700, marginBottom: '0.4rem' }}>Data storage</p>
          <p style={{ color: 'var(--muted)' }}>
            Your data is stored securely via Supabase, hosted in the EU. Your learning progress
            is also cached locally on your device for offline use.
          </p>
        </section>

        <section>
          <p style={{ fontWeight: 700, marginBottom: '0.4rem' }}>Your rights</p>
          <p style={{ color: 'var(--muted)' }}>
            You can delete your account at any time from the settings menu. This permanently
            removes all your data from our servers. Under GDPR you also have the right to
            request a copy of your data.
          </p>
        </section>

        <section>
          <p style={{ fontWeight: 700, marginBottom: '0.4rem' }}>Contact</p>
          <p style={{ color: 'var(--muted)' }}>
            Questions? Reach out via the app's support channel or the contact details on the
            store listing.
          </p>
        </section>

      </div>
    </div>
  );
}
