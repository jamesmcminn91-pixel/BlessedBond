import SiteShell from './components/SiteShell'

export const metadata = {
  title: 'Blessed Bond',
  description: 'A Christian dating app focused on faith, intention, and genuine profiles.',
  metadataBase: new URL('https://blessedbond.app'),
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={styles.body}>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  )
}

const styles = {
  body: {
    margin: 0,
    fontFamily: 'Inter, system-ui, sans-serif',
    background: 'linear-gradient(180deg, #f7f4ef 0%, #fff 100%)',
    color: '#1f2937',
  },
}