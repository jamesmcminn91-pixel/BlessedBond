import { plans } from '../../data/subscriptions'

export default function ActionPanel() {
  return (
    <section style={styles.card}>
      <p style={styles.kicker}>Premium</p>
      <h2 style={styles.title}>Unlock search, unlimited likes, and more</h2>
      <div style={styles.columns}>
        <PlanCard title="Premium" price={plans.premium.monthly} plan="premium" items={plans.premium.benefits} />
        <PlanCard title="Who liked you" price={plans.likesYou.monthly} plan="whoLikedYou" items={plans.likesYou.benefits} />
      </div>
      <p style={styles.note}>This keeps the app affordable while giving power users better discovery tools.</p>
    </section>
  )
}

function PlanCard({ title, price, plan, items }) {
  return (
    <article style={styles.plan}>
      <h3 style={styles.planTitle}>{title}</h3>
      <p style={styles.price}>{price}</p>
      <ul style={styles.list}>
        {items.map((item) => <li key={item}>{item}</li>)}
      </ul>
      <button onClick={() => checkout(plan)} style={styles.button}>Choose plan</button>
    </article>
  )
}

async function checkout(plan) {
  const res = await fetch('/api/stripe/create-checkout-session', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ plan }),
  })
  const data = await res.json()
  if (data.checkoutUrl) window.location.href = data.checkoutUrl
}

const styles = {
  card: { background: '#fff', borderRadius: 24, padding: 28, border: '1px solid #e5e7eb', boxShadow: '0 12px 40px rgba(0,0,0,0.06)' },
  kicker: { textTransform: 'uppercase', letterSpacing: '0.18em', fontSize: 12, color: '#b45309', fontWeight: 700 },
  title: { margin: '8px 0 20px', fontSize: 28 },
  columns: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 },
  plan: { border: '1px solid #e5e7eb', borderRadius: 20, padding: 20, background: '#fafafa' },
  planTitle: { margin: 0 },
  price: { fontSize: 28, fontWeight: 800, margin: '8px 0 4px' },
  list: { paddingLeft: 18, lineHeight: 1.8, color: '#374151' },
  button: { background: '#7c2d12', color: '#fff', border: 'none', padding: '12px 16px', borderRadius: 999, fontWeight: 700 },
  note: { marginTop: 16, color: '#6b7280' },
}