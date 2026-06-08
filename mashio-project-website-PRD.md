# mashio Project — Website PRD

*A product requirements doc for building the site in Lovable. Everything marked **[CONFIRM]** or **[NEEDS INPUT]** is something to verify or supply before/during the build.*

---

## 1. Project summary

- **What:** A brand + info website for **mashio project**, a Korean-inspired craft drinks & desserts pop-up in Honolulu.
- **How it operates today:** Pop-up at **Fishcake** (307C Kamani St, Kaka'ako) **every Friday & Saturday, 10am–4pm**. Schedule occasionally shifts (special events, secret pop-ups, service intermissions), so Instagram is the live source of truth.
- **Why a site:** Give people one polished place to see the menu, understand the brand, buy a gift card, browse photos, find the pop-up, and get in touch for catering/collabs. Instagram stays the day-to-day channel; the site is the evergreen home.
- **Build tool:** Lovable (React + Tailwind). Output is a responsive, **mobile-first** marketing site (most visitors arrive from an IG link on their phone).
- **Structural reference:** [sohnsf.com](https://www.sohnsf.com/) — clean, image-forward, lots of whitespace, simple top nav.

## 2. Target users

- Honolulu locals & visitors hunting for matcha / coffee / dessert.
- Existing IG followers who want menu + this week's location/hours.
- Gift card buyers.
- Catering / collab / event inquiries.

## 3. Brand snapshot

| | |
|---|---|
| Name | **mashio project** (styled lowercase) |
| Tagline | korean-inspired craft drinks & desserts |
| Personality | handmade, playful, minimal, warm — hand-drawn ink feel |
| Age | ~1 year old (first anniversary June 2026) |
| Instagram | [@mashioproject](https://www.instagram.com/mashioproject/) (primary channel; weekly schedule lives here) |
| Email | mashioproject@gmail.com |
| Home base | Fishcake, 307C Kamani St, Honolulu, HI 96813 |
| Hours | Every Friday & Saturday, 10am–4pm **[CONFIRM ongoing]** |

## 4. Design direction (the vibe)

- **North star:** Take SOHN's structural calm (whitespace, big photos, minimal nav) but express it through mashio's **hand-drawn, black-ink-on-warm-paper** identity. The logo (hand-drawn coffee cup, marker lettering) sets the entire tone.
- **Logo:** provided as PNG + .ai (vector). Use the .ai/vector for crisp scaling; logo works as the hero mark and the favicon.
- **Color tokens — neutral palette (browns / blacks / white):** keep it mostly neutral and let the drink photos supply all the color. No bright accent hues.
  - Ink / primary text: `#1A1512` (warm near-black)
  - Espresso (headings, buttons, accents): `#3E2C23`; deeper `#2A1E18`
  - Coffee / mid-brown (secondary text, borders, captions): `#6B5446`
  - Paper / background: `#FAF7F0` (warm off-white)
  - Soft tan (cards, dessert-box accent, section bands): `#EFE7DC`
  - White: `#FFFFFF`
- **Type** (the brand mixes styles — match what's already in use):
  - The Canva menu uses an **elegant light serif** (centered titles, italic descriptions) for the standing menu, and a **bold espresso-brown sans** for the "Today's Specials" sheet. The logo is hand-drawn.
  - Suggested site type: an elegant serif for headings to echo the menu (e.g. Playfair Display / EB Garamond), a clean humanist sans for body (e.g. Inter), and the hand-drawn logo as the signature mark. Reserve marker/hand-drawn lettering for small accents only, so it doesn't fight the serif.
- **Motifs:** hand-drawn doodles (cups, fruit, squiggles) as small accents; generous whitespace; oversized food photography.
- **Mobile-first** layout; tap targets sized for phones.

## 5. Site map

```
Home
├─ About
├─ Menu
├─ Events
├─ Gift Card
├─ Photos
└─ Contact
```
Global sticky **top nav** (logo left, links right; hamburger on mobile) + **footer** on every page.

## 6. Page-by-page spec

### Home
- **Hero:** logo + a strong food/drink photo, tagline ("korean-inspired craft drinks & desserts"), and a one-line status: *"Open every Friday & Saturday · Fishcake, Kaka'ako."*
- **Primary CTA:** View Menu. **Secondary CTA:** Follow on Instagram (for the weekly schedule).
- **"Find us" block:** Fishcake, 307C Kamani St + embedded map + the honest note: *"Our schedule sometimes changes — check Instagram for this week."*
- **Featured specials strip:** 3–4 rotating craft specials with photos (pull from the Menu list).
- **Brand teaser:** 2–3 sentences → link to About.
- **Photo strip / IG feed.**
- **Footer.**
- *(Optional, SOHN has one: an email signup. See Open Decisions.)*

### About
- Origin & story of mashio project — **done** (founder's layoff → Seoul with Kelly → cafe-culture inspiration → home experiments → launch). Final copy below; only the photos are still outstanding.
- Values worth featuring (already on-brand): *made by hand*, *fresh, never frozen fruits*, *oat milk as the default*.
- A few photos (space, hands-at-work, the team).
- Close with a "find us / follow" prompt.

**Draft copy (mashio voice — ready to paste into Lovable):**

> **about mashio project**
>
> mashio project is a korean-inspired craft drinks & desserts pop-up in Honolulu — small-batch matcha, hojicha, and coffee made by hand, with desserts like basque cheesecake and tiramisu in flavors that rotate with the season.
>
> **how it started**
>
> Two years ago, a layoff from a six-figure consulting job turned into the best detour of my life. Burned out on the corporate grind, I booked a one-way ticket to Seoul to be with my girlfriend Kelly and do some soul-searching. What I found was a cafe culture that completely rewired me — a new beautiful, thoughtfully made cafe to discover on every corner, every single day.
>
> Back on Oahu, we went hunting for that same feeling and couldn't find it anywhere on the island. So I started making it myself — dialing in beans, testing recipes, chasing the perfect shot at home. When friends started saying "this is so good, I'd pay for this," mashio project was born.
>
> Today it's my way of sharing everything that time in Korea gave me — one handmade drink at a time.
>
> **how we do it**
>
> We think the good stuff is worth the extra step. Every drink is made to order with fruit that's fresh, never frozen, and oat milk poured as the default — no upcharge, no asterisk. Strong-but-balanced matcha. Salted vanilla cream we whip ourselves. Little things that add up.
>
> **where to find us**
>
> We pop up at fishcake in Kaka'ako every Friday & Saturday, with the occasional festival, secret pop-up, and seasonal special in the mix. This summer marks our first year — a whole year of berries, einspanners, and the best regulars we could ask for. Come say hi, and follow along on Instagram for where we'll be next. 🤎

### Menu
**Goal: use mashio's own visuals — never AI-generated or stock images.** The drink images on the menu are mashio's real illustrated product shots. Whichever layout you choose, the photos must come from the menu (provided as cropped files in `/mashio-drinks/`), not generated or substituted by the builder.

Two ways to do the Menu page:

- **Option A — Display the menu pages as images (exact match):** show the 3 exported menu PNGs in order — (1) Craft Specials, (2) Coffee / Tea / Dessert / Keiki, (3) Today's Specials — each full-width and responsive, tap-to-zoom on mobile. Pixel-identical to Canva; update later by swapping the image. Add a visually-hidden text version (§7) for SEO/accessibility.
- **Option B — Card layout (like the Lovable preview), using the REAL photos:** a responsive grid of cards, each = drink photo + italic name + description + price. **Use the provided drink photos** (`mandarin-espresso-spritz.png`, `the-einspanner.png`, `sweet-and-dirty.png`, `berry-matcha.png`, `sunrise-crush.png`, `matcha-crush.png`). Place them on white/very-light cards (the files have a white background). **Do not let the builder insert AI or stock drink photos** — if it can't find an image, leave a placeholder rather than generating one.
  - Note: these crops are modest resolution (pulled from the menu export, ~340×456). Fine at card size; if your friend has the original drink images, those would be sharper — drop them in to replace.
- Persistent note near the menu: *"Menu rotates — ask about today's specials."*
- Keep the allergen line (it's inside the menu image; include it in the text/card version too).

### Events
- **Purpose:** the "what's happening now" page — pop-up schedule changes, festivals, secret pop-ups, anniversary moments, seasonal specials. This is where mashio's Instagram energy lives on the site.
- **Live IG strip — "Latest from Instagram":** auto-display the **4 most recent @mashioproject posts** in a row/grid, each linking out to the post. This is the "first 4 from their IG home page" you wanted. Use an Instagram feed embed (see §8) so it stays current with zero manual upkeep.
  - Heads-up: mashio's grid sometimes surfaces **Fishcake collab posts** (e.g. the Strawberry Sunset Festival flyers are posted on @fishcakehawaii and tagged in). A standard embed pulls only @mashioproject's own posts, so collab event flyers may not appear automatically — fine for v1, but note it if you want those included.
- **Curated "Upcoming" cards (optional, recommended):** a few hand-entered event cards above the feed for anything with a firm date, so visitors get clean details even if they don't click through to IG. Card fields: title, date/time, location, short blurb, optional image, "details on Instagram" link. Real current examples to model the cards on:
  - *Strawberry Sunset Festival* — Thu June 4, 6:00–8:30 PM, Fishcake (307C Kamani St). Exclusive strawberry menu; free admission.
  - *Secret Pop-Up* — Sun June 14 (TBA).
  - *Service Intermission* — starting June 26.
  - *1-Year Anniversary* — June 2026.
- **Fallback:** if no upcoming events are entered, the page gracefully shows just the live IG strip + a "follow us for the latest" prompt.

### Gift Card
- See §8 for the two implementation paths. **Recommend the link-out approach for v1.**
- Page content: short blurb ("Give the gift of matcha 🍵"), the buy button/redirect, and how redemption works.

### Photos
- Responsive masonry/grid gallery with lightbox on click.
- Source images from Instagram or a dedicated shoot. **[NEEDS INPUT: hi-res photos]**

### Contact
- Email: **mashioproject@gmail.com** (clearly shown, mailto link).
- Instagram link.
- Location + hours + embedded Google Map.
- **Inquiry form** for catering / collabs / events (name, email, type of inquiry, message). Requires a backend — see §8.

## 7. Menu content (pulled from your Canva menu — **[CONFIRM prices/flavors, they rotate]**)

**Craft Specials** — *our recommendations · all iced · 16oz · $9.50*
- **The Einspanner** — iced oat latte with salted vanilla cream top
- **Sunrise Crush** — ginger, turmeric & calamansi with a bubbly mandarin base
- **Berry Matcha** — silky strawberry matcha oat latte
- **Matcha Crush** — bubbly matcha with pineapple-mint base
- **Mandarin Espresso Spritz** — bubbly espresso with freshly squeezed citrus
- **Sweet & Dirty** — creamy, nutty strawberry hojicha oat latte
- *Made by hand from fresh, never frozen fruits.*

**Coffee**
- Americano — $7
- Oat Latte — $8

**Tea**
- Matcha Oat Latte — $8
- Hojicha Oat Latte — $8
- Cold-Brewed Osmanthus Oolong — $6

**Einspanner** — *$10.50*
- Matcha or Hojicha Einspanner — iced tea oat latte with salted vanilla (matcha) cream top
- Midnight Matcha — iced espresso oat latte topped with salted vanilla matcha cream top

**Dessert** *(flavors rotate — ask about today's specials)*
- Tiramisu — espresso & earl grey ($10) / matcha ($11)
- Basque Cheesecake — earl grey & black sesame ($9) / matcha ($10)
- *Allergen note: all desserts contain dairy; made in a home kitchen not routinely inspected by the Dept. of Health.*

**Keiki (kids)**
- Strawberry Milk — $8.50

> Note: the price-to-item pairing for desserts is my best read of the menu file — please double-check before publishing.

## 8. Functionality & integrations

### Gift cards — pick one
- **Option A — Link-out (recommended for v1, simplest):** Use **Square Gift Cards** (free e-gift cards if mashio uses Square POS) or a service like Giftly. The site's "Gift Card" button just opens that hosted page. No payment code on your site, nothing sensitive to maintain. Fastest path live.
- **Option B — Native checkout (more work):** Lovable + **Stripe** integration to sell digital gift cards directly on-site. More control, but you're now managing payments, fulfillment, and redemption logic. Only do this if Square/hosted options don't fit.
- **Decision needed:** Which POS does mashio use today? That usually dictates the easiest gift-card path. **[NEEDS INPUT]**

### Contact / inquiry form
- A form needs somewhere to send submissions. Two easy routes:
  - **Formspree / Getform** — drop-in form endpoint, emails you each submission. Zero backend. Good for v1.
  - **Lovable + Supabase** — store submissions in a table and/or email via an edge function. More flexible if you later want a dashboard.
- *Do not* wire up auto-forwarding rules or anything that touches the email account itself; just collect + send.

### Instagram feed
- Used in two places: the **Events page** ("Latest from Instagram" — the 4 most recent posts) and optionally a strip on the **Home** page.
- Options: a lightweight embed widget (**Behold**, EmbedSocial, LightWidget, or SnapWidget) configured to pull the **most recent N posts** from @mashioproject and auto-update — so the Events page always reflects the current IG home page without manual work. Set the post limit to 4 for the Events strip.
- Alternative: a hand-curated static gallery you update occasionally (simpler, but manual).
- Note: embeds pull a profile's own posts; Fishcake collab posts that appear in mashio's grid won't necessarily come through.

### Map
- Embed a Google Map pointing at Fishcake (307C Kamani St, Honolulu, HI 96813).

### Nice-to-haves (optional)
- Basic analytics (Plausible / GA4).
- Email newsletter signup (Mailchimp/Beehiiv) if you want the SOHN-style "join the list" block.

## 9. Tech notes for Lovable

- React + Tailwind; responsive, **mobile-first**.
- Use **Supabase** (Lovable's native backend) if the contact form or any data storage is in scope.
- SEO basics: page titles, meta descriptions, Open Graph image (use the logo or a hero photo), so IG/text-message link previews look good.
- Accessibility: real text for the menu (not an image), alt text on photos, sufficient contrast on the cream background.
- Performance: compress the food photos — they'll be the heaviest assets.

## 10. Assets checklist (gather these for the build)

- [x] Logo — PNG + .ai (have)
- [x] Drink photos — **done** (6 craft-specials cropped from the menu, in `/mashio-drinks/`); higher-res originals from your friend would be sharper if available
- [ ] Other hi-res photos: the Fishcake space, hands/process, team **[NEEDS INPUT]**
- [x] About / founder story copy — **done** (drafted in §6)
- [ ] Menu images — **done** (3 PNGs exported); confirm prices/flavors since they rotate **[CONFIRM]**
- [ ] Gift card platform + account (which POS?) **[NEEDS INPUT]**
- [ ] Domain name (e.g. mashioproject.com?) **[NEEDS INPUT]**
- [ ] Any press / features to showcase (SOHN does a press row) — optional

## 11. Open decisions (for you)

1. **Gift card:** link-out (Square/Giftly) vs native Stripe checkout?
2. **Contact:** full inquiry form (needs Formspree/Supabase) or just a prominent email link for v1?
3. **Schedule:** auto-pull the IG feed, or a simple "Fri & Sat at Fishcake — check IG" static block?
4. **Newsletter:** include a signup block or skip it?
5. **Scope of v1:** ship a clean brand+menu site first and add gift-card commerce later, or do it all at once?

## 12. Copy-paste Lovable kickoff prompt

> Build a mobile-first marketing website for **mashio project**, a Korean-inspired craft drinks & desserts pop-up in Honolulu. The aesthetic is handmade and minimal: black ink on a warm cream background (`#FAF7F0`), generous whitespace, oversized food photography, and a hand-drawn/marker display font for headings (clean humanist sans for body). It should feel calm and image-forward like sohnsf.com, but with a playful hand-drawn personality set by the logo (a sketched coffee cup).
>
> Pages: **Home, About, Menu, Events, Gift Card, Photos, Contact**, with a sticky top nav (logo left, links right; hamburger on mobile) and a footer with the Instagram link, email, and Fishcake address on every page.
>
> **Home:** hero with the logo, the tagline "korean-inspired craft drinks & desserts," and a status line "Open every Friday & Saturday · Fishcake, Kaka'ako"; a primary "View Menu" button and a secondary "Follow on Instagram" button; a "Find us" section with an embedded Google Map for 307C Kamani St, Honolulu HI 96813 and a note that the schedule changes so check Instagram; a featured-specials strip; a short about teaser; and a photo strip.
>
> **Menu:** build a responsive grid of cards — each card has a drink photo, the italic drink name, its description, and price. Use ONLY the real drink photos provided in the project (mandarin-espresso-spritz, the-einspanner, sweet-and-dirty, berry-matcha, sunrise-crush, matcha-crush); never generate or use AI/stock images — if an image is missing, leave a neutral placeholder. Below the cards, list the Coffee, Tea, Einspanner, Dessert, and Keiki sections as text with prices, plus a note that the menu rotates and the dairy/home-kitchen allergen line.
>
> **Events:** a "what's happening now" page with an optional row of curated upcoming-event cards (title, date/time, location, blurb, link) at the top, followed by a "Latest from Instagram" strip that displays the 4 most recent @mashioproject posts, each linking to Instagram. If no events are entered, show just the Instagram strip and a "follow us for the latest" prompt.
>
> **Contact:** show the email mashioproject@gmail.com, an Instagram link, hours, address, an embedded map, and a simple inquiry form (name, email, inquiry type, message).
>
> **Gift Card** and **Photos** pages as placeholders I'll wire up next. Use placeholder images where I haven't supplied photos yet. Keep the code clean and componentized.

*(Paste the menu from §7 in when Lovable asks for menu content.)*
