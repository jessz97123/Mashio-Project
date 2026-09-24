# mashio project — website

Marketing website for **mashio project**, a Korean-inspired craft drinks & desserts pop-up in
Honolulu. Small-batch matcha, hojicha, and coffee made by hand — popping up at **Fishcake**
(307C Kamani St, Kakaʻako) every Friday & Saturday, 10am–4pm.

🔗 **Live site:** https://mashio-project.netlify.app
📷 **Instagram:** [@mashioproject](https://www.instagram.com/mashioproject/)

---

## What's in it

A calm, image-forward, mobile-first site with 7 pages:

| Page | What it does |
|------|--------------|
| **Home** | Hero, craft specials, story teaser, map, Instagram prompt |
| **About** | Founder story, values, where to find us |
| **Menu** | The real Canva menu (flat images) + tap-to-zoom |
| **Events** | Upcoming pop-ups + latest Instagram posts |
| **Gift Card** | Blurb + how-it-works |
| **Photos** | Curated photo gallery with lightbox |
| **Contact** | Details, Google map, inquiry form |

**Features:** trilingual (English / 简体中文 / 한국어) with a top-right switcher, embedded Google
Map, printable "scan for menu" QR code, and a share-preview card for link unfurls.

## Tech stack

- **Vite** + **React 19** + **React Router**
- **Tailwind CSS v4** (CSS-based theme in `src/index.css`)
- Fonts: Playfair Display (headings) + Inter (body)
- Hosted on **Netlify** (auto-deploys from `main`)

## Run it locally

Needs [Node.js](https://nodejs.org) 20+ installed.

```bash
npm install      # first time only
npm run dev      # start dev server → http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Project layout

```
public/            # images, drink photos, menu images, QR codes, favicon
src/
  pages/           # Home, About, Menu, Events, GiftCard, Photos, Contact
  components/       # Navbar, Footer, MapEmbed, DrinkCard, LanguageSwitcher, …
  data/            # site info, menu, events, photos (the stuff you edit)
  i18n/            # translations (EN / 中文 / 한국어)
  index.css        # design tokens + Tailwind
```

## Common edits

- **Menu changed?** Re-export from Canva → overwrite `public/menu/menu-page-1..3.png`, and update
  text in `src/data/menu.js` + `src/i18n/translations.js`.
- **New photos?** Drop optimized images in `public/photos/` and list them in `src/data/photos.js`.
- **Events?** Edit `src/data/events.js`.
- **Turn on Instagram feed / contact form / gift card?** Add the IDs in `src/config.js`.

> 🛠️ Deeper build notes, design rules, and how each integration is wired live in
> [`CLAUDE.md`](./CLAUDE.md).
