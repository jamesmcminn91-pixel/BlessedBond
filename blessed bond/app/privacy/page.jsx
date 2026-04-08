export default function PrivacyPage() {
  return (
    <main style={styles.page}>
      <article style={styles.card}>
        <p style={styles.kicker}>Blessed Bond</p>
        <h1 style={styles.title}>Privacy Policy</h1>
        <p style={styles.text}>This is a starter privacy policy for the Blessed Bond marketing site and app. Replace this with legal counsel review before launch.</p>

        <Section title="What we collect">
          <p style={styles.text}>Account details, profile information, usage data, and payment-related metadata from Stripe if you choose a subscription.</p>
        </Section>

        <Section title="How we use data">
          <p style={styles.text}>We use data to provide the app, show matches, enable messaging, improve safety, and manage subscriptions.</p>
        </Section>

        <Section title="Your choices">
          <p style={styles.text}>You can edit or delete your profile, manage privacy settings, and unsubscribe from marketing communications where applicable.</p>
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