import { profiles } from '../data/profiles'
import ActionPanel from './components/ActionPanel'

export default function Home() {
  return (
    <main style={styles.page}>
      <section style={styles.hero}>
        <div>
          <p style={styles.kicker}>Blessed Bond</p>
          <h1 style={styles.title}>Christian dating built around character, not just photos.</h1>
          <p style={styles.subtitle}>
            Browse profiles only after opening them, read bios and faith goals first, then choose whether to connect.
          </p>
          <div style={styles.actions}>
            <a href="/marketing" style={styles.primaryLink}>Public website</a>
            <a href="/profile" style={styles.secondaryLink}>Create profile</a>
          </div>
        </div>

        <div style={styles.heroCard}>
          <h2 style={styles.cardTitle}>MVP flow</h2>
          <ul style={styles.list}>
            <li>Sign up and build a faith-centered profile</li>
            <li>Browse nearby singles by age, intent, and denomination</li>
            <li>Open full profile before liking or passing</li>
            <li>Match only when both people are interested</li>
            <li>Chat securely after a mutual match</li>
          </ul>
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Example profiles</h2>
        <div style={styles.grid}>
          {profiles.map((profile) => (
            <article key={profile.id} style={styles.profileCard}>
              <div style={styles.profileHeader}>
                <div>
                  <h3 style={styles.profileName}>{profile.name}, {profile.age}</h3>
                  <p style={styles.muted}>{profile.distance}</p>
                </div>
                <span style={styles.badge}>{profile.intent}</span>
              </div>
              <p style={styles.meta}><strong>Denomination:</strong> {profile.denomination}</p>
              <p style={styles.meta}><strong>Faith life:</strong> {profile.faith}</p>
              <p style={styles.bio}>{profile.bio}</p>
            </article>
          ))}
        </div>
      </section>

      <section style={styles.section}>
        <ActionPanel />
      </section>
    </main>
  )
}

const styles = {
  page: { maxWidth: 1200, margin: '0 auto', padding: '24px 24px 80px' },
  hero: { display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 24, alignItems: 'start' },
  kicker: { textTransform: 'uppercase', letterSpacing: '0.18em', fontSize: 12, color: '#b45309', fontWeight: 700 },
  title: { fontSize: 56, lineHeight: 1.05, margin: '8px 0 16px', maxWidth: 760 },
  subtitle: { fontSize: 18, lineHeight: 1.6, color: '#4b5563', maxWidth: 760 },
  actions: { display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 22 },
  primaryLink: { background: '#7c2d12', color: '#fff', textDecoration: 'none', padding: '14px 18px', borderRadius: 999, fontWeight: 700 },
  secondaryLink: { background: '#fff', color: '#7c2d12', textDecoration: 'none', padding: '14px 18px', borderRadius: 999, fontWeight: 700, border: '1px solid #fcd34d' },
  heroCard: { background: '#fff', borderRadius: 24, padding: 24, boxShadow: '0 12px 40px rgba(15, 23, 42, 0.08)', border: '1px solid #ede9fe' },
  cardTitle: { marginTop: 0 },
  list: { paddingLeft: 20, lineHeight: 1.8, color: '#374151' },
  section: { marginTop: 56 },
  sectionTitle: { fontSize: 28, marginBottom: 20 },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 },
  profileCard: { background: '#fff', borderRadius: 20, padding: 20, border: '1px solid #e5e7eb', boxShadow: '0 8px 24px rgba(0,0,0,0.04)' },
  profileHeader: { display: 'flex', justifyContent: 'space-between', gap: 16, alignItems: 'start' },
  profileName: { margin: 0, fontSize: 22 },
  muted: { margin: '4px 0 0', color: '#6b7280' },
  badge: { background: '#ede9fe', color: '#6d28d9', padding: '6px 10px', borderRadius: 999, fontSize: 12, fontWeight: 700, whiteSpace: 'nowrap' },
  meta: { margin: '14px 0 0', color: '#374151' },
  bio: { margin: '14px 0 0', lineHeight: 1.6, color: '#1f2937' },
}