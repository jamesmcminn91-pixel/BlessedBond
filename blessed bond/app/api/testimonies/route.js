import { testimonies } from '../../../data/testimonies'

let store = globalThis.__blessedBondTestimonies ?? [...testimonies]
globalThis.__blessedBondTestimonies = store

export async function GET() {
  return Response.json({ testimonies: store })
}

export async function POST(request) {
  const body = await request.json()
  const item = {
    id: crypto.randomUUID(),
    names: body.names,
    story: body.story,
    result: body.result,
  }

  store = [item, ...store]
  globalThis.__blessedBondTestimonies = store

  return Response.json({ testimony: item }, { status: 201 })
}