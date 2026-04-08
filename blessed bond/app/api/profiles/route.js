import { prisma } from '../../../lib/db'

export async function GET() {
  const profiles = await prisma.profile.findMany({ orderBy: { createdAt: 'desc' } })
  return Response.json({ profiles })
}

export async function POST(request) {
  const body = await request.json()
  const user = await prisma.user.upsert({
    where: { email: body.email },
    update: {
      name: body.firstName || body.name || null,
      age: body.age ? Number(body.age) : null,
      city: body.city || null,
      country: body.country || null,
      gender: body.gender?.toUpperCase() || null,
      seeking: body.seeking || null,
      denomination: body.denomination || null,
      intent: body.intent || null,
      church: body.church || null,
      bio: body.bio || null,
      faith: body.faith || null,
      partner: body.partner || null,
    },
    create: {
      email: body.email || `${body.firstName?.toLowerCase() || 'user'}@example.com`,
      passwordHash: body.passwordHash || 'pending',
      name: body.firstName || body.name || null,
      age: body.age ? Number(body.age) : null,
      city: body.city || null,
      country: body.country || null,
      gender: body.gender?.toUpperCase() || null,
      seeking: body.seeking || null,
      denomination: body.denomination || null,
      intent: body.intent || null,
      church: body.church || null,
      bio: body.bio || null,
      faith: body.faith || null,
      partner: body.partner || null,
    },
  })

  const profile = await prisma.profile.upsert({
    where: { userId: user.id },
    update: {
      name: body.firstName || body.name || '',
      age: Number(body.age || 0),
      city: body.city || '',
      country: body.country || null,
      gender: body.gender?.toUpperCase() || 'OTHER',
      seeking: body.seeking || '',
      denomination: body.denomination || '',
      intent: body.intent || '',
      church: body.church || null,
      bio: body.bio || '',
      faith: body.faith || '',
      partner: body.partner || '',
    },
    create: {
      userId: user.id,
      name: body.firstName || body.name || '',
      age: Number(body.age || 0),
      city: body.city || '',
      country: body.country || null,
      gender: body.gender?.toUpperCase() || 'OTHER',
      seeking: body.seeking || '',
      denomination: body.denomination || '',
      intent: body.intent || '',
      church: body.church || null,
      bio: body.bio || '',
      faith: body.faith || '',
      partner: body.partner || '',
    },
  })

  return Response.json({ profile }, { status: 201 })
}