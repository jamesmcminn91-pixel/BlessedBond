export default function LaunchPage() {
  return (
    <main style={styles.page}>
      <section style={styles.card}>
        <p style={styles.kicker}>Blessed Bond</p>
        <h1 style={styles.title}>Launch-ready website for Stripe verification</h1>
        <p style={styles.text}>
          This page gives Stripe a live business website with product details, pricing, contact info, and policy links.
        </p>

        <div style={styles.grid}>
          <Box title="Product" text="Blessed Bond is a Christian dating app built around faith, values, and intentional matching." />
          <Box title="Pricing" text="Premium is $5/month and the optional 'Who liked you' add-on is £1/month." />
          <Box title="Support" text="Email: jamesmcminn91@gmail.com" />
          <Box title="Legal" text="Privacy and terms pages are live and linked from the public site." />
        </div>
      </section>

      <section style={{ ...styles.card, marginTop: 20 }}>
        <h2 style={styles.heading}>Deploy checklist</h2>
        <ol style={styles.list}>
          <li>Deploy this app to Vercel from GitHub.</li>
          <li>Create a hosted Postgres database and copy its connection string.</li>
          <li>Add environment variables in Vercel.</li>
          <li>Use the live URL when creating your Stripe account.</li>
          <li>After Stripe approves, add your live secret key to environment variables.</li>
          <li>Replace placeholder checkout URLs with real Stripe Checkout Sessions.</li>
        </ol>
      </section>

      <section style={{ ...styles.card, marginTop: 20 }}>
        <h2 style={styles.heading}>Recommended production stack</h2>
        <ul style={styles.list}>
          <li>Frontend: Next.js on Vercel</li>
          <li>Database: Postgres (Supabase, Neon, or Vercel Postgres)</li>
          <li>Auth: NextAuth or custom session cookie</li>
          <li>Payments: Stripe Checkout + webhooks</li>
        </ul>
      </section>
    </main>
  )
}

function Box({ title, text }) {
  return (
    <article style={styles.box}>
      <h3 style={styles.boxTitle}>{title}</h3>
      <p style={styles.boxText}>{text}</p>
    </article>
  )
}

const styles = {
  page: { maxWidth: 1100, margin: '0 auto', padding: '48px 24px 80px' },
  card: { background: '#fff', borderRadius: 24, padding: 28, border: '1px solid #e5e7eb', boxShadow: '0 12px 40px rgba(0,0,0,0.06)' },
  kicker: { textTransform: 'uppercase', letterSpacing: '0.18em', fontSize: 12, color: '#b45309', fontWeight: 700 },
  title: { fontSize: 44, margin: '8px 0 12px' },
  text: { color: '#374151', lineHeight: 1.8 },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16, marginTop: 20 },
  box: { background: '#fafafa', border: '1px solid #e5e7eb', borderRadius: 20, padding: 20 },
  boxTitle: { marginTop: 0, marginBottom: 8 },
  boxText: { margin: 0, color: '#4b5563', lineHeight: 1.6 },
  heading: { marginTop: 0 },
  list: { color: '#374151', lineHeight: 1.8 },
}