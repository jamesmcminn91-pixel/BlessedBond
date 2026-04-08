export default function MatchesPage() {
  return (
    <main style={styles.page}>
      <section style={styles.card}>
        <p style={styles.kicker}>Blessed Bond</p>
        <h1 style={styles.title}>Your matches</h1>
        <p style={styles.subtitle}>When two people like each other, the match unlocks chat.</p>

        <div style={styles.matchGrid}>
          <MatchCard name="Maya" note="You both value church community and marriage-minded dating." />
          <MatchCard name="Sarah" note="You both want a relationship rooted in prayer and purpose." />
        </div>
      </section>

      <section style={{ ...styles.card, marginTop: 20 }}>
        <h2 style={styles.heading}>Chat preview</h2>
        <div style={styles.chatBox}>
          <p><strong>Maya:</strong> Hey, I liked your answer about prayer in daily life.</p>
          <p><strong>You:</strong> That means a lot. I’d love to hear how your church community has shaped you.</p>
        </div>
      </section>
    </main>
  )
}

function MatchCard({ name, note }) {
  return (
    <article style={styles.matchCard}>
      <h3 style={styles.matchName}>{name}</h3>
      <p style={styles.note}>{note}</p>
      <button style={styles.button}>Open chat</button>
    </article>
  )
}

const styles = {
  page: { maxWidth: 1000, margin: '0 auto', padding: '24px 24px 80px' },
  card: { background: '#fff', borderRadius: 24, padding: 28, border: '1px solid #e5e7eb', boxShadow: '0 12px 40px rgba(0,0,0,0.06)' },
  kicker: { textTransform: 'uppercase', letterSpacing: '0.18em', fontSize: 12, color: '#b45309', fontWeight: 700 },
  title: { fontSize: 44, margin: '8px 0 10px' },
  subtitle: { color: '#6b7280', fontSize: 18 },
  heading: { marginTop: 0 },
  matchGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16, marginTop: 20 },
  matchCard: { background: '#fafafa', border: '1px solid #e5e7eb', borderRadius: 20, padding: 18 },
  matchName: { margin: '0 0 8px' },
  note: { color: '#374151', lineHeight: 1.6 },
  button: { background: '#7c2d12', color: '#fff', border: 'none', padding: '12px 16px', borderRadius: 999, fontWeight: 700 },
  chatBox: { background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: 18, padding: 18, lineHeight: 1.8 },
}