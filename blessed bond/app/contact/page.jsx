export default function ContactPage() {
  return (
    <main style={styles.page}>
      <article style={styles.card}>
        <p style={styles.kicker}>Blessed Bond</p>
        <h1 style={styles.title}>Contact</h1>
        <p style={styles.text}>For support, press, partnerships, or billing questions, email:</p>
        <a href="mailto:jamesmcminn91@gmail.com" style={styles.email}>jamesmcminn91@gmail.com</a>
      </article>
    </main>
  )
}

const styles = {
  page: { maxWidth: 900, margin: '0 auto', padding: '48px 24px 80px' },
  card: { background: '#fff', borderRadius: 24, padding: 28, border: '1px solid #e5e7eb', boxShadow: '0 12px 40px rgba(0,0,0,0.06)' },
  kicker: { textTransform: 'uppercase', letterSpacing: '0.18em', fontSize: 12, color: '#b45309', fontWeight: 700 },
  title: { fontSize: 44, margin: '8px 0 12px' },
  text: { color: '#374151', lineHeight: 1.8 },
  email: { display: 'inline-block', marginTop: 12, fontSize: 20, fontWeight: 800, color: '#7c2d12' },
}