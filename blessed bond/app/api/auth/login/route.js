import { getAdminCookie, verifyAdmin } from '../../../../lib/auth'

export async function POST(request) {
  const body = await request.json()
  const user = await verifyAdmin(body.email, body.password)

  if (!user) return Response.json({ error: 'Invalid credentials' }, { status: 401 })

  return new Response(JSON.stringify({ id: user.id, email: user.email, name: user.name }), {
    headers: {
      'Content-Type': 'application/json',
      'Set-Cookie': getAdminCookie(user.id),
    },
  })
}