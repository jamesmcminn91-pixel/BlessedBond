import { useEffect, useState } from 'react'
import { testimonies } from '../../data/testimonies'

export default function MarketingPage() {
  const [matchedCouples, setMatchedCouples] = useState(128)

  useEffect(() => {
    fetch('/api/stats').then((res) => res.json()).then((data) => {
      if (typeof data.matchedCouples === 'number') setMatchedCouples(data.matchedCouples)
    })
  }, [])

  return (
    <main style={styles.page}>
      <div style={styles.topBar}>
        <div style={styles.brand}>Blessed Bond</div>
        <div style={styles.topLinks}>
          <a href="/">App</a>
          <a href="/contact">Contact</a>
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
        </div>
      </div>
      <section style={styles.hero}>
        <p style={styles.kicker}>Blessed Bond</p>
        <h1 style={styles.title}>Faith-first Christian dating for people looking for something real.</h1>
        <p style={styles.subtitle}>
          Blessed Bond helps Christian singles meet with intention, read profiles before matching, and connect around shared faith, values, and purpose.
        </p>
        <div style={styles.actions}>
          <a href="/profile" style={styles.primary}>Create your profile</a>
          <a href="/discover" style={styles.secondary}>Explore the app</a>
        </div>
      </section>

      <section style={styles.counterCard}>
        <div>
          <div style={styles.counterLabel}>Matched couples</div>
          <div style={styles.counterNumber}>{matchedCouples}</div>
        </div>
        <p style={styles.counterText}>Live community count shown on the website to highlight success stories and real momentum.</p>
      </section>

      <section style={styles.grid}>
        <Card title="Intentional matching" text="Profiles are built around faith, goals, and values so people can connect with more purpose." />
        <Card title="Premium search" text="Upgrade to search by area, country, denomination, or belief, plus unlimited likes and messages." />
        <Card title="Affordable pricing" text="Premium is $5/month, with an optional £1/month add-on to see who liked you." />
        <Card title="Safety and moderation" text="Reporting, blocking, and verification-friendly design help keep the community healthier." />
      </section>

      <section style={styles.testimonySection}>
        <div style={styles.sectionHeader}>
          <h2 style={styles.sectionTitle}>Testimonies & successful match stories</h2>
          <a href="/admin" style={styles.adminLink}>Manage stories</a>
        </div>
        <div style={styles.testimonyGrid}>
          {testimonies.map((item) => (
            <article key={item.id} style={styles.testimonyCard}>
              <h3 style={styles.cardTitle}>{item.names}</h3>
              <p style={styles.testimonyStory}>{item.story}</p>
              <span style={styles.result}>{item.result}</span>
            </article>
          ))}
        </div>
      </section>

      <section style={styles.footerCard}>
        <h2 style={styles.sectionTitle}>For partnerships, support, or app updates</h2>
        <p style={styles.footerText}>Contact: jamesmcminn91@gmail.com</p>
        <p style={styles.footerText}>This site can be used as your Stripe business website and product landing page.</p>
        <div style={styles.footerLinks}>
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
          <a href="/contact">Contact</a>
        </div>
      </section>
    </main>
  )
}

function Card({ title, text }) {
  return (
    <article style={styles.card}>
      <h3 style={styles.cardTitle}>{title}</h3>
      <p style={styles.cardText}>{text}</p>
    </article>
  )
}

const styles = {
  page: { maxWidth: 1100, margin: '0 auto', padding: '28px 24px 80px' },
  topBar: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, padding: '12px 0 24px', flexWrap: 'wrap' },
  brand: { fontWeight: 900, fontSize: 20, letterSpacing: '-0.02em' },
  topLinks: { display: 'flex', gap: 16, flexWrap: 'wrap', color: '#6b7280' },
  hero: { padding: '28px 0 24px' },
  kicker: { textTransform: 'uppercase', letterSpacing: '0.18em', fontSize: 12, color: '#b45309', fontWeight: 700 },
  title: { fontSize: 62, lineHeight: 1.02, margin: '8px 0 16px', maxWidth: 820, letterSpacing: '-0.03em' },
  subtitle: { fontSize: 20, lineHeight: 1.7, color: '#4b5563', maxWidth: 780 },
  actions: { display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 22 },
  primary: { background: '#7c2d12', color: '#fff', textDecoration: 'none', padding: '14px 18px', borderRadius: 999, fontWeight: 700 },
  secondary: { background: '#fff', color: '#7c2d12', textDecoration: 'none', padding: '14px 18px', borderRadius: 999, fontWeight: 700, border: '1px solid #fcd34d' },
  counterCard: { marginTop: 24, background: 'linear-gradient(135deg, #7c2d12, #f59e0b)', color: '#fff', borderRadius: 24, padding: 24, display: 'flex', justifyContent: 'space-between', gap: 20, alignItems: 'center', flexWrap: 'wrap' },
  counterLabel: { textTransform: 'uppercase', letterSpacing: '0.18em', fontSize: 12, opacity: 0.9 },
  counterNumber: { fontSize: 54, fontWeight: 900, lineHeight: 1 },
  counterText: { maxWidth: 480, lineHeight: 1.7, margin: 0, opacity: 0.95 },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16, marginTop: 28 },
  card: { background: '#fff', border: '1px solid #e5e7eb', borderRadius: 20, padding: 22, boxShadow: '0 8px 24px rgba(0,0,0,0.04)' },
  cardTitle: { marginTop: 0, marginBottom: 8 },
  cardText: { margin: 0, color: '#4b5563', lineHeight: 1.6 },
  testimonySection: { marginTop: 40 },
  sectionHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, flexWrap: 'wrap' },
  adminLink: { color: '#7c2d12', fontWeight: 700, textDecoration: 'none' },
  sectionTitle: { marginTop: 0, marginBottom: 16, fontSize: 28 },
  testimonyGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 16 },
  testimonyCard: { background: '#fff', border: '1px solid #e5e7eb', borderRadius: 20, padding: 22, boxShadow: '0 8px 24px rgba(0,0,0,0.04)' },
  testimonyStory: { color: '#374151', lineHeight: 1.7 },
  result: { display: 'inline-block', marginTop: 8, background: '#fef3c7', color: '#92400e', padding: '6px 10px', borderRadius: 999, fontWeight: 700, fontSize: 12 },
  footerCard: { background: '#fff', border: '1px solid #e5e7eb', borderRadius: 24, padding: 24, marginTop: 24, boxShadow: '0 8px 24px rgba(0,0,0,0.04)' },
  footerText: { color: '#4b5563' },
  footerLinks: { display: 'flex', gap: 16, flexWrap: 'wrap', marginTop: 12 },
}