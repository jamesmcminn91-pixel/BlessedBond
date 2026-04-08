'use client'

import { useEffect, useMemo, useState } from 'react'

const premiumEnabled = true

export default function DiscoverPage() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])

  useEffect(() => {
    let alive = true
    fetch(`/api/search?q=${encodeURIComponent(query)}&premium=${premiumEnabled}`)
      .then((res) => res.json())
      .then((data) => alive && setResults(data.results))
    return () => { alive = false }
  }, [query])

  const visibleProfiles = useMemo(() => results, [results])

  return (
    <main style={styles.page}>
      <header style={styles.header}>
        <div>
          <p style={styles.kicker}>Blessed Bond</p>
          <h1 style={styles.title}>Discover singles by faith, intent, and location.</h1>
          <p style={styles.subtitle}>Open a profile first, read their story, and then decide whether to connect.</p>
        </div>
        <div style={styles.filters}>
          <Filter>Nearby</Filter>
          <Filter>Marriage-minded</Filter>
          <Filter>Age 25–35</Filter>
          {premiumEnabled ? (
            <>
              <Filter>Country</Filter>
              <Filter>Denomination</Filter>
              <Filter>Belief</Filter>
            </>
          ) : (
            <Filter locked>Premium search</Filter>
          )}
        </div>
      </header>

      <div style={styles.searchBar}>
        <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder={premiumEnabled ? 'Search city, country, denomination, or belief...' : 'Upgrade to search by area or belief'} style={styles.searchInput} />
        <button style={styles.searchButton}>{premiumEnabled ? 'Search' : 'Upgrade'}</button>
      </div>

      <div style={styles.grid}>
        {visibleProfiles.map((profile) => (
          <article key={profile.id} style={styles.card}>
            <div style={styles.topRow}>
              <h2 style={styles.name}>{profile.name}, {profile.age}</h2>
              <span style={styles.badge}>{profile.intent}</span>
            </div>
            <p style={styles.muted}>{profile.distance} • {profile.denomination}</p>
            <p style={styles.meta}><strong>Faith life:</strong> {profile.faith}</p>
            <p style={styles.bio}>{profile.bio}</p>
            <a href={`/profile/${profile.id}`} style={styles.button}>Open profile</a>
          </article>
        ))}
      </div>
    </main>
  )
}

function Filter({ children, locked }) {
  return <span style={{ ...styles.filter, ...(locked ? styles.locked : {}) }}>{children}</span>
}

const styles = {
  page: { maxWidth: 1200, margin: '0 auto', padding: '24px 24px 80px' },
  header: { display: 'grid', gap: 20, marginBottom: 28 },
  kicker: { textTransform: 'uppercase', letterSpacing: '0.18em', fontSize: 12, color: '#b45309', fontWeight: 700 },
  title: { fontSize: 44, margin: '8px 0 10px' },
  subtitle: { color: '#4b5563', fontSize: 18, lineHeight: 1.6, maxWidth: 760 },
  filters: { display: 'flex', flexWrap: 'wrap', gap: 10 },
  filter: { padding: '10px 14px', borderRadius: 999, background: '#fff', border: '1px solid #e5e7eb', fontWeight: 600 },
  locked: { opacity: 0.55 },
  searchBar: { display: 'flex', gap: 12, marginBottom: 24, flexWrap: 'wrap' },
  searchInput: { flex: 1, minWidth: 280, border: '1px solid #d1d5db', borderRadius: 16, padding: '14px 16px', fontSize: 16 },
  searchButton: { background: '#7c2d12', color: '#fff', border: 'none', padding: '14px 18px', borderRadius: 999, fontWeight: 700 },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 },
  card: { background: '#fff', borderRadius: 20, padding: 20, border: '1px solid #e5e7eb', boxShadow: '0 8px 24px rgba(0,0,0,0.04)' },
  topRow: { display: 'flex', justifyContent: 'space-between', gap: 12, alignItems: 'start' },
  name: { margin: 0, fontSize: 24 },
  badge: { background: '#fef3c7', color: '#92400e', padding: '6px 10px', borderRadius: 999, fontSize: 12, fontWeight: 700, whiteSpace: 'nowrap' },
  muted: { color: '#6b7280' },
  meta: { color: '#374151' },
  bio: { color: '#1f2937', lineHeight: 1.6 },
  button: { marginTop: 10, display: 'inline-block', background: '#7c2d12', color: '#fff', textDecoration: 'none', padding: '12px 16px', borderRadius: 999, fontWeight: 700 },
}