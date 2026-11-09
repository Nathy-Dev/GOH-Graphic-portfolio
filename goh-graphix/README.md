
# GOH Graphix — Creative Portfolio & Training Academy


A sleek, modern, minimal yet bold portfolio website for **GOH Graphix** — a creative design studio and training academy founded by **Samuel Hilary** in Port Harcourt, Nigeria.


## 🚀 Built With

- **Framework**: Next.js (App Router, React 19)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Typography**: Syne (Display) + Inter (Body)
- **Deployment**: Vercel


---


## 🎨 Brand Identity

- **Primary Blue**: `#1E4FC2`
- **Accent Orange**: `#F28C28`
- **Dark Ink**: `#111827`
- **Warm Paper**: `#F7F6F2`
- **Logo Mark**: Standalone circular mark featuring the signature pen nib and letter "G"

## Local Development

Use Node.js 20.9 or newer. From this project directory:

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`. To check and run a production build:

```bash
npm run lint
npm run typecheck
npm run build
npm start
```

## Project Structure

- `app/globals.css` defines the Tailwind v4 theme, typography, reusable components, and reduced-motion styles.
- `components/sections/` contains the homepage sections, including the academy and FAQ.
- `components/portfolio/` contains category filters, project cards, and the keyboard-accessible project dialog.
- `lib/data.ts` contains portfolio projects, services, testimonials, and studio statistics.
- `lib/site.ts` is the shared source for contact details, navigation, and service options.

## Contact Workflow

The enquiry form validates the visitor’s details and prepares a WhatsApp message or an email draft. It does **not** send messages from the website or claim that a message has been delivered. Visitors review and send the message in their chosen app; their form values remain available. A message preview and clipboard fallback are included.

Service and training links preselect the corresponding enquiry option. Without JavaScript, navigation, original artwork links, and direct WhatsApp/email/phone links remain available.

No backend, database, or email-provider credentials are required for this workflow. Direct website delivery would require a separately configured mail service and server-side endpoint.

## Site URL

Set `NEXT_PUBLIC_SITE_URL` in `.env.local` or your hosting environment to your public origin, for example `https://your-domain.example`. It controls canonical and social-sharing URLs. Restart the development server or rebuild after changing it. The default is `https://goh-graphix.vercel.app`.

## Artwork and Icons

Original portfolio artwork lives in `public/works/`. Optimised WebP previews live in `public/previews/`; the originals are not overwritten.

```bash
npm run assets
```

This uses Sharp to regenerate the project previews, hero artwork, transparent logo mark, favicon, and Apple icon. Crop definitions live in `process-assets.cjs`; update them when source artwork changes. Social brand icons use the local SVG components in `components/ui/Icons.tsx`, rather than unavailable Lucide brand exports.


## ⚡ Deployment on Vercel

### Option 1: Vercel CLI

```bash
npm i -g vercel
cd goh-graphix
vercel
```

### Option 2: Deploy via GitHub

1. Push this folder to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit — GOH Graphix portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/goh-graphix.git
   git push -u origin main
   ```
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your repository
4. Click **Deploy**
