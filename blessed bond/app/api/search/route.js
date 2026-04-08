import { prisma } from '../../../lib/db'

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const q = (searchParams.get('q') || '').trim()
  const premium = searchParams.get('premium') === 'true'

  const profiles = await prisma.profile.findMany({
    orderBy: { createdAt: 'desc' },
    include: { user: true },
  })

  const query = q.toLowerCase()
  const results = profiles.filter((profile) => {
    if (!query) return true

    const fields = premium
      ? [
          profile.name,
          profile.city,
          profile.country,
          profile.denomination,
          profile.intent,
          profile.church ?? '',
          profile.faith,
          profile.seeking,
          profile.gender,
          profile.bio,
        ]
      : [profile.name, profile.city, profile.denomination, profile.intent]

    return fields.some((field) => String(field).toLowerCase().includes(query))
  })

  return Response.json({ premium, results })
}