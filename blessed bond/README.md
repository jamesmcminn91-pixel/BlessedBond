# Blessed Bond

Christian dating app MVP.

## Setup

1. Copy `.env.example` to `.env.local`
2. Set `DATABASE_URL`
3. Run:
   - `npm install`
   - `npm run db:generate`
   - `npm run db:push`
   - `npm run db:seed`
   - `npm run dev`

## Plans

- Premium: $5/month
  - area/country search
  - denomination/belief filters
  - unlimited likes
  - unlimited messages
- Who liked you: £1/month

## Vercel deployment

- Deploy from GitHub to Vercel
- Use a production Postgres database
- Add environment variables in Vercel
- Run Prisma generate/push after deployment
- Use the live URL for Stripe verification