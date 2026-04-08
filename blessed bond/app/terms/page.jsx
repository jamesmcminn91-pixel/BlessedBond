export default function TermsPage() {
  return (
    <main style={styles.page}>
      <article style={styles.card}>
        <p style={styles.kicker}>Blessed Bond</p>
        <h1 style={styles.title}>Terms of Service</h1>
        <p style={styles.text}>This is a starter terms page for launch. Replace with proper legal review before going live.</p>

        <Section title="Eligibility">
          <p style={styles.text}>Users must be old enough to legally use the service in their region and must provide accurate information.</p>
        </Section>

        <Section title="Subscriptions">
          <p style={styles.text}>Premium features and add-ons are billed through Stripe. Cancellation terms and billing cycles should be clearly displayed in-app.</p>
        </Section>

        <Section title="Community rules">
          <p style={styles.text}>No harassment, spam, impersonation, or abusive conduct. We may remove accounts that violate community standards.</p>
        </Section>
      </article>
    </main>
  )
}

function Section({ title, children }) {
  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>{title}</h2>
      {children}
    </section>
  )
}

const styles = {
  page: { maxWidth: 900, margin: '0 auto', padding: '48px 24px 80px' },
  card: { background: '#fff', borderRadius: 24, padding: 28, border: '1px solid #e5e7eb', boxShadow: '0 12px 40px rgba(0,0,0,0.06)' },
  kicker: { textTransform: 'uppercase', letterSpacing: '0.18em', fontSize: 12, color: '#b45309', fontWeight: 700 },
  title: { fontSize: 44, margin: '8px 0 12px' },
  text: { color: '#374151', lineHeight: 1.8 },
  section: { marginTop: 24 },
  heading: { marginBottom: 8 },
}