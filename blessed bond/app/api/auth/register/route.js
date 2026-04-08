import bcrypt from 'bcryptjs'
import { prisma } from '../../../../lib/db'

export async function POST(request) {
  const body = await request.json()
  const passwordHash = await bcrypt.hash(body.password, 10)

  const user = await prisma.user.create({
    data: {
      email: body.email,
      passwordHash,
      name: body.name || null,
    },
  })

  return Response.json({ id: user.id, email: user.email })
}