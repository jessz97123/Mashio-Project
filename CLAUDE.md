# mashio project — website

Marketing site for **mashio project**, a Korean-inspired craft drinks & desserts pop-up in
Honolulu. Pops up at **Fishcake** (307C Kamani St, Kakaʻako) every Friday & Saturday, 10am–4pm.
Instagram [@mashioproject](https://www.instagram.com/mashioproject/) is the live source of truth
for the weekly schedule; the site is the evergreen home. Full spec lives in
`mashio-project-website-PRD.md`.

## Stack
- **Vite + React 19 + React Router** (`react-router-dom`)
- **Tailwind CSS v4** via `@tailwindcss/vite` (config is CSS-based in `src/index.css` `@theme`)
- Mobile-first, responsive.
- Node is installed at `~/.local/node-v24.16.0-darwin-arm64/bin` (on PATH via `~/.zshrc`).

### Commands
```bash
npm run dev       # start dev server (http://localhost:5173)
npm run build     # production build
npm run preview   # preview the build
```
> If `node`/`npm` aren't found in a fresh shell: `export PATH="$HOME/.local/node-v24.16.0-darwin-arm64/bin:$PATH"`

## Design tokens (neutral palette ONLY — no bright accents)
Defined in `src/index.css` under `@theme`. Use the Tailwind utilities (e.g. `bg-paper`, `text-ink`).

| Token | Hex | Use |
|-------|-----|-----|
| `ink` | `#1A1512` | warm near-black, primary text |
| `espresso` | `#3E2C23` | headings, buttons, dark sections |
| `espresso-deep` | `#2A1E18` | button hover |
| `brown` | `#6B5446` | secondary text, borders, captions |
| `paper` | `#FAF7F0` | warm off-white background |
| `tan` | `#EFE7DC` | cards, section bands |
| white | `#FFFFFF` | drink cards |

- **Fonts:** headings = **Playfair Display** (serif, `font-serif`); body = **Inter** (sans,
  `font-sans`). Loaded via Google Fonts `<link>` in `index.html`.
- **Feel:** calm, image-forward, generous whitespace (reference: sohnsf.com). Let the drink
  images supply all the color.
- Reusable classes in `index.css`: `.btn-primary`, `.btn-secondary`, `.eyebrow`.

## Asset map (in `public/`)
- **Nav + hero logo:** `mashio-logo.svg` (icon mark), `mashio-logo-full.svg` (full lockup, used in hero).
- **Favicon / social avatar:** `mashio-badge.svg` (+ `mashio-badge.png`).
- **Drink images:** `public/drinks/*.png` — real transparent product shots, named after menu items.
  Available: `the-einspanner`, `sunrise-crush`, `berry-matcha`, `matcha-crush`,
  `mandarin-espresso-spritz`, `sweet-and-dirty`, `hojicha-einspanner`, `matcha-einspanner`,
  `matcha-hojicha-einspanner`, `midnight-matcha`. Match cards to images by filename.
- **Menu page images (LIVE):** `public/menu/menu-page-1.png` (Craft Specials),
  `menu-page-2.png` (Coffee/Tea/Keiki/Dessert), `menu-page-3.png` (Today's Specials) —
  exported high-res from Canva "Copy of Mashio Project June 2026 Menu" (DAHLv9dJJpM).
  The Menu page displays these flat, in order **3 → 2 → 1**. Re-export & overwrite to update.
- **Older full-menu exports** (root): `mashio-menu-1-craft-specials.png` etc. — superseded
  by `public/menu/` above.
- **IGNORE:** `Mashio Project Logo.png` (low-quality JPEG) and `mashio project_logo.ai`. Use the SVGs.

## Hard rules
1. **Never use AI-generated or stock photos.** If an image is missing, leave a neutral placeholder
   (tan block / "photo coming soon") — never generate or substitute one. `DrinkCard` already does
   this on image load failure.
2. **Use the provided files exactly** — do not regenerate, recolor, or replace any image.
3. **Neutral palette only.** No bright accent colors anywhere.
4. **Menu page:** responsive card grid (drink image + italic name + description + price) using ONLY
   provided drink images, then Coffee/Tea/Einspanner/Dessert/Keiki as text with prices, plus the
   "menu rotates" note and the dairy/home-kitchen allergen line.
5. Menu content in `src/data/menu.js` is synced from the authoritative Canva design
   **"Copy of Mashio Project June 2026 Menu"** (design ID `DAHLv9dJJpM`). Re-sync from there
   when the menu changes (the menu rotates seasonally).

## Pages & status
Sticky top nav + footer (IG @mashioproject, mashioproject@gmail.com, Fishcake · 307C Kamani St) on
every page.

| Page | Route | Status |
|------|-------|--------|
| Home | `/` | ✅ built |
| About | `/about` | ✅ built (full PRD §6 copy + values + photo placeholders) |
| Menu | `/menu` | ✅ built — flat Canva menu images (pages 3→2→1) with tap-to-zoom + sr-only text version |
| Events | `/events` | ✅ built (curated cards from `src/data/events.js` + IG strip placeholder) |
| Gift Card | `/gift-card` | ✅ built (blurb + coming-soon CTA + how-it-works) |
| Photos | `/photos` | ✅ built (neutral placeholder gallery; drop real photos into `PHOTOS` array) |
| Contact | `/contact` | ✅ built (details + map + mailto inquiry form) |

**All pages built.** Production build passes clean. Remaining work is wiring real integrations (see below).

## Integrations — config in `src/config.js`
One file holds the go-live IDs: `beholdFeedId`, `formspreeId`, `giftCardUrl`. Each feature
falls back gracefully when its value is blank, and turns on when filled. (The map URL lives
separately in `SITE.mapEmbed`.)

- **Map:** ✅ LIVE — Google Maps "Embed a map" URL (`/maps/embed?pb=…`, the iframe-allowed form;
  free, no API key) in `SITE.mapEmbed` (`src/data/site.js`), pinned to Fishcake. To update the pin,
  re-copy from Google Maps → Share → Embed a map. `src/components/MapEmbed.jsx` is shared by Home + Contact.
- **Instagram feed:** ✅ built — `src/components/InstagramFeed.jsx` loads the Behold widget when
  `CONFIG.beholdFeedId` is set; otherwise shows neutral placeholder tiles. Used on Events page.
- **Contact form:** posts via `mailto:` today. When `CONFIG.formspreeId` is set, switch
  `src/pages/Contact.jsx` `handleSubmit` to POST to Formspree. (Not yet wired to CONFIG.)
- **Gift Card:** "Buy" button disabled. When `CONFIG.giftCardUrl` is set, link the button to it.
  (Not yet wired to CONFIG.)
- **Photos:** ✅ LIVE — curated gallery of 9 real photos (`public/photos/mashio-photo-1..9.jpg`),
  listed in `PHOTOS` in `src/data/photos.js` in display order. `src/pages/Photos.jsx` renders a
  responsive grid + click-to-enlarge lightbox; empty array → neutral placeholder.
  Originals are in `Photo/` (untouched). Web copies were generated with Pillow
  (`ImageOps.exif_transpose` to bake orientation + strip the flag, resized to ~1680px, q80).
  iPhone JPEGs carry EXIF orientation — always exif_transpose, don't `sips -r`, or they render sideways.
  Pending: `Photo/IMG_7660.MOV` (24 MB) needs converting to web MP4 (no ffmpeg installed yet).
- **Events seed data** in `src/data/events.js` are PRD examples — confirm/replace with real dates.

## Project structure
```
src/
  main.jsx              # React + BrowserRouter entry
  App.jsx               # routes (all pages under Layout)
  index.css             # Tailwind import + @theme tokens + base styles
  components/
    Layout.jsx          # Navbar + Outlet + Footer + scroll-to-top
    Navbar.jsx          # sticky nav, hamburger on mobile
    Footer.jsx          # on every page
    DrinkCard.jsx       # image + italic name + desc + price (placeholder on load fail)
    PagePlaceholder.jsx # stub for unbuilt pages
  pages/                # Home, About, Menu, Events, GiftCard, Photos, Contact, NotFound
  data/
    site.js             # brand constants, nav links, map embed
    menu.js             # craft specials + menu sections + notes (from PRD §7)
```

## Data sources
- `src/data/site.js` — name, tagline, status line, IG, email, address, hours, Google Maps embed.
- `src/data/menu.js` — `CRAFT_SPECIALS` (with image paths), `MENU_SECTIONS`, `MENU_ROTATES_NOTE`,
  `ALLERGEN_NOTE`.

## Still needed from the client (PRD)
Hi-res lifestyle photos (space/hands/team), gift-card platform (which POS?), Instagram feed embed
choice (Behold/LightWidget) for Events, contact-form endpoint (Formspree/Supabase), domain.
