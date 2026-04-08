export default function SiteShell({ children }) {
  return (
    <div style={styles.shell}>
      <header style={styles.header}>
        <div style={styles.brandGroup}>
          <div style={styles.brandMark}>BB</div>
          <div>
            <div style={styles.brand}>Blessed Bond</div>
            <div style={styles.tagline}>Faith-first Christian dating</div>
          </div>
        </div>
        <nav style={styles.nav}>
          <a href="/">App</a>
          <a href="/discover">Discover</a>
          <a href="/profile">Create Profile</a>
          <a href="/matches">Matches</a>
          <a href="/marketing">Website</a>
          <a href="/launch">Launch</a>
        </nav>
      </header>
      {children}
      <footer style={styles.footer}>
        <a href="/marketing">Website</a>
        <a href="/launch">Launch</a>
        <a href="/privacy">Privacy</a>
        <a href="/terms">Terms</a>
        <a href="/contact">Contact</a>
      </footer>
    </div>
  )
}

const styles = {
  shell: { minHeight: '100vh' },
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 20, padding: '20px 24px', maxWidth: 1200, margin: '0 auto' },
  brandGroup: { display: 'flex', alignItems: 'center', gap: 12 },
  brandMark: { width: 42, height: 42, borderRadius: 14, display: 'grid', placeItems: 'center', background: 'linear-gradient(135deg, #7c2d12, #f59e0b)', color: '#fff', fontWeight: 800 },
  brand: { fontWeight: 800, fontSize: 18 },
  tagline: { fontSize: 13, color: '#6b7280' },
  nav: { display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center' },
  footer: { maxWidth: 1200, margin: '24px auto 0', padding: '20px 24px 40px', display: 'flex', gap: 16, flexWrap: 'wrap', borderTop: '1px solid #eee', color: '#6b7280' },
}