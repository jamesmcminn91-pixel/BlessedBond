import bcrypt from 'bcryptjs'
import { prisma } from '../lib/db.js'
import { seedProfiles } from '../data/seedProfiles.js'

async function main() {
  const adminPasswordHash = await bcrypt.hash('change-me-now', 10)

  const admin = await prisma.user.upsert({
    where: { email: 'admin@blessedbond.app' },
    update: { passwordHash: adminPasswordHash },
    create: {
      email: 'admin@blessedbond.app',
      passwordHash: adminPasswordHash,
      name: 'Admin',
    },
  })

  for (const profile of seedProfiles) {
    const user = await prisma.user.upsert({
      where: { email: `${profile.id}@example.com` },
      update: {},
      create: {
        email: `${profile.id}@example.com`,
        passwordHash: 'seed-only',
        name: profile.name,
        age: profile.age,
        city: profile.city,
        country: profile.country,
        gender: profile.gender,
        seeking: profile.seeking,
        denomination: profile.denomination,
        intent: profile.intent,
        church: profile.church,
        bio: profile.bio,
        faith: profile.faith,
        partner: profile.prompts.join(' '),
      },
    })

    await prisma.profile.upsert({
      where: { userId: user.id },
      update: {
        name: profile.name,
        age: profile.age,
        city: profile.city,
        country: profile.country,
        gender: profile.gender,
        seeking: profile.seeking,
        denomination: profile.denomination,
        intent: profile.intent,
        church: profile.church,
        bio: profile.bio,
        faith: profile.faith,
        partner: profile.prompts.join(' '),
      },
      create: {
        userId: user.id,
        name: profile.name,
        age: profile.age,
        city: profile.city,
        country: profile.country,
        gender: profile.gender,
        seeking: profile.seeking,
        denomination: profile.denomination,
        intent: profile.intent,
        church: profile.church,
        bio: profile.bio,
        faith: profile.faith,
        partner: profile.prompts.join(' '),
      },
    })
  }

  const ids = await prisma.user.findMany({ select: { id: true, email: true } })
  const maya = ids.find((u) => u.email === 'maya@example.com')
  const daniel = ids.find((u) => u.email === 'daniel@example.com')
  const sarah = ids.find((u) => u.email === 'sarah@example.com')

  if (maya && daniel) {
    await prisma.match.upsert({
      where: { id: 'match-maya-daniel' },
      update: {},
      create: { id: 'match-maya-daniel', userAId: maya.id, userBId: daniel.id },
    })
  }

  if (maya && sarah) {
    await prisma.match.upsert({
      where: { id: 'match-maya-sarah' },
      update: {},
      create: { id: 'match-maya-sarah', userAId: maya.id, userBId: sarah.id },
    })
  }

  await prisma.$disconnect()
}

main().catch(async (error) => {
  console.error(error)
  await prisma.$disconnect()
  process.exit(1)
})