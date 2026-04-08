export async function POST(request) {
  const body = await request.json().catch(() => ({}))
  const plan = body.plan || 'premium'

  const urls = {
    premium: 'https://buy.stripe.com/test_premium_blessedbond',
    whoLikedYou: 'https://buy.stripe.com/test_who_liked_you_blessedbond',
  }

  return Response.json({
    ok: true,
    plan,
    checkoutUrl: urls[plan] || urls.premium,
    note: 'Replace these test URLs with real Stripe Checkout links or server-generated sessions.',
  })
}