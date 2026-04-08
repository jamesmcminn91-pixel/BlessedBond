import bcrypt from 'bcryptjs'
import { prisma } from './db'

const SESSION_COOKIE = 'bb_admin'

export async function verifyAdmin(email, password) {
  const user = await prisma.user.findUnique({ where: { email } })
  if (!user) return null
  const ok = await bcrypt.compare(password, user.passwordHash)
  if (!ok) return null
  return user
}

export function getAdminCookie(userId) {
  return `${SESSION_COOKIE}=${userId}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${60 * 60 * 24 * 7}`
}

export function clearAdminCookie() {
  return `${SESSION_COOKIE}=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0`
}

export async function getAdminFromRequest(request) {
  const cookie = request.headers.get('cookie') || ''
  const match = cookie.match(/bb_admin=([^;]+)/)
  if (!match) return null
  const user = await prisma.user.findUnique({ where: { id: match[1] } })
  return user
}