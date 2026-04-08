import { prisma } from '../../../lib/db'

export async function GET() {
  const matchedCouples = await prisma.match.count()
  return Response.json({ matchedCouples })
}