# Sreya Sudheesh.M — Portfolio

A responsive developer portfolio built with Next.js 15, TypeScript, Tailwind CSS, Framer Motion, and Lucide icons. Next.js 15 is used instead of the originally requested Next.js 14 because current security advisories affect the available Next.js 14 release line.

## Requirements

- Node.js 18.18 or newer
- npm

## Local development

```bash
npm install
Copy-Item .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The site works without mail configuration; the contact form will report that email delivery is unavailable until the Resend variables are set.

## Contact email setup

The contact form submits to `POST /api/contact`. The server validates the name, email, and message, then sends the message to `sreyasudheesh14@gmail.com` through the Resend API.

1. Create a Resend account and verify a sender domain/address.
2. Set `RESEND_API_KEY` and `CONTACT_FROM_EMAIL` in `.env.local`. `CONTACT_FROM_EMAIL` must be a sender address verified with Resend.
3. Keep these values private. `.env.local` is ignored by Git; never commit production secrets.

See `.env.example` for the required variable names.

## Build and checks

```bash
npm run lint
npm run build
```

## Deploy to Vercel

1. Import this repository into [Vercel](https://vercel.com/new).
2. Set `RESEND_API_KEY` and `CONTACT_FROM_EMAIL` in the project's Environment Variables for the environments you use.
3. Deploy. Vercel detects the Next.js app and uses the standard build command.
4. Submit the contact form on the deployed site to verify the configured sender and delivery.

The portfolio itself can be deployed without mail credentials, but contact submissions return a clear service-unavailable message until both variables are configured.

## Updating portfolio content

- Edit skills in `data/skills.ts`.
- Edit project entries in `data/projects.ts`. Missing repository/demo links are intentionally omitted rather than guessed.
- Update the currently-learning list in `data/learning.ts`.
- Personal profile and social links are in the page components and `app/layout.tsx` metadata.
