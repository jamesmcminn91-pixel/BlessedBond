'use client'

import { useEffect, useState } from 'react'

export default function AdminPage() {
  const [testimonies, setTestimonies] = useState([])
  const [form, setForm] = useState({ names: '', story: '', result: '' })
  const [authorized, setAuthorized] = useState(false)
  const [login, setLogin] = useState({ email: 'admin@blessedbond.app', password: 'change-me-now' })

  useEffect(() => {
    fetch('/api/testimonies').then((res) => res.json()).then((data) => setTestimonies(data.testimonies || []))
  }, [])

  async function loginAdmin() {
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(login),
    })
    setAuthorized(res.ok)
  }

  async function logoutAdmin() {
    await fetch('/api/auth/logout', { method: 'POST' })
    setAuthorized(false)
  }

  async function addTestimony() {
    const res = await fetch('/api/testimonies', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
    const data = await res.json()
    setTestimonies((prev) => [data.testimony, ...prev])
    setForm({ names: '', story: '', result: '' })
  }

  return (
    <main style={styles.page}>
      <section style={styles.card}>
        <p style={styles.kicker}>Blessed Bond</p>
        <h1 style={styles.title}>Testimony admin</h1>
        <p style={styles.text}>Publish new successful match stories from here.</p>

        {!authorized ? (
          <div style={styles.form}>
            <input placeholder="Email" value={login.email} onChange={(e) => setLogin({ ...login, email: e.target.value })} style={styles.input} />
            <input placeholder="Password" type="password" value={login.password} onChange={(e) => setLogin({ ...login, password: e.target.value })} style={styles.input} />
            <button onClick={loginAdmin} style={styles.button}>Sign in</button>
          </div>
        ) : (
          <>
            <button onClick={logoutAdmin} style={{ ...styles.button, background: '#374151', marginBottom: 16 }}>Sign out</button>
            <div style={styles.form}>
              <input placeholder="Names" value={form.names} onChange={(e) => setForm({ ...form, names: e.target.value })} style={styles.input} />
              <input placeholder="Result" value={form.result} onChange={(e) => setForm({ ...form, result: e.target.value })} style={styles.input} />
              <textarea placeholder="Story" value={form.story} onChange={(e) => setForm({ ...form, story: e.target.value })} style={{ ...styles.input, minHeight: 140 }} />
              <button onClick={addTestimony} style={styles.button}>Add testimony</button>
            </div>
          </>
        )}
      </section>

      <section style={{ ...styles.card, marginTop: 20 }}>
        <h2 style={styles.heading}>Current testimonies</h2>
        <div style={styles.list}>
          {testimonies.map((item) => (
            <article key={item.id} style={styles.item}>
              <h3 style={styles.itemTitle}>{item.names}</h3>
              <p style={styles.text}>{item.story}</p>
              <span style={styles.badge}>{item.result}</span>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

const styles = {
  page: { maxWidth: 1000, margin: '0 auto', padding: '48px 24px 80px' },
  card: { background: '#fff', borderRadius: 24, padding: 28, border: '1px solid #e5e7eb', boxShadow: '0 12px 40px rgba(0,0,0,0.06)' },
  kicker: { textTransform: 'uppercase', letterSpacing: '0.18em', fontSize: 12, color: '#b45309', fontWeight: 700 },
  title: { fontSize: 44, margin: '8px 0 12px' },
  text: { color: '#374151', lineHeight: 1.8 },
  heading: { marginTop: 0 },
  form: { display: 'grid', gap: 12, marginTop: 16 },
  input: { border: '1px solid #d1d5db', borderRadius: 14, padding: '14px 16px', fontSize: 16, fontFamily: 'inherit' },
  button: { background: '#7c2d12', color: '#fff', border: 'none', padding: '14px 18px', borderRadius: 999, fontWeight: 700, width: 'fit-content' },
  list: { display: 'grid', gap: 14 },
  item: { border: '1px solid #e5e7eb', borderRadius: 20, padding: 18, background: '#fafafa' },
  itemTitle: { marginTop: 0 },
  badge: { display: 'inline-block', marginTop: 8, background: '#fef3c7', color: '#92400e', padding: '6px 10px', borderRadius: 999, fontWeight: 700, fontSize: 12 },
}