import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import {
  CRAFT_SPECIALS,
  MENU_SECTIONS,
  MENU_ROTATES_NOTE,
  ALLERGEN_NOTE,
} from '../data/menu'

// Flat menu images exported from the Canva design
// "Copy of Mashio Project June 2026 Menu" (DAHLv9dJJpM).
// Displayed in the order: Today's Specials (p3) → Coffee/Tea/Dessert (p2) → Craft Specials (p1).
const MENU_PAGES = [
  {
    src: '/menu/menu-page-3.png',
    alt: 'mashio project today’s specials — Matcha / Hojicha Einspanner and Midnight Matcha, both $10.50',
  },
  {
    src: '/menu/menu-page-2.png',
    alt: 'mashio project menu — Coffee, Tea, Keiki, and Dessert with prices',
  },
  {
    src: '/menu/menu-page-1.png',
    alt: 'mashio project craft specials — six signature iced drinks, all $9.50',
  },
]

export default function Menu() {
  const [zoomed, setZoomed] = useState(null)

  useEffect(() => {
    document.title = 'Menu — mashio project'
  }, [])

  // Close the zoom overlay on Escape
  useEffect(() => {
    if (!zoomed) return
    const onKey = (e) => e.key === 'Escape' && setZoomed(null)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [zoomed])

  return (
    <>
      <PageHeader
        title="menu"
        intro="All made by hand, to order. Oat milk is our default — no upcharge, no asterisk."
      />

      {/* Rotates note */}
      <div className="mx-auto max-w-2xl px-5 pt-12 sm:px-8">
        <p className="rounded-xl border border-brown/15 bg-tan/60 px-5 py-3 text-center text-sm text-espresso">
          {MENU_ROTATES_NOTE}
        </p>
      </div>

      {/* Flat menu images (tap to zoom) */}
      <section className="mx-auto max-w-2xl space-y-8 px-5 py-12 sm:px-8">
        {MENU_PAGES.map((page) => (
          <button
            key={page.src}
            type="button"
            onClick={() => setZoomed(page)}
            className="block w-full overflow-hidden rounded-2xl border border-brown/15 bg-white shadow-sm transition-shadow hover:shadow-md focus:outline-none focus:ring-2 focus:ring-espresso"
            aria-label={`${page.alt} — tap to enlarge`}
          >
            <img src={page.src} alt={page.alt} loading="lazy" className="w-full" />
          </button>
        ))}
        <p className="text-center text-xs text-brown/70">Tap any page to enlarge.</p>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-3xl px-5 pb-16 text-center sm:px-8">
        <p className="text-brown">Prices &amp; flavors rotate with the season.</p>
        <Link to="/contact" className="btn-secondary mt-6">
          Catering or collabs? Get in touch
        </Link>
      </section>

      {/* Screen-reader-only text version for SEO + accessibility (matches the images) */}
      <div className="sr-only">
        <h2>{CRAFT_SPECIALS.heading}</h2>
        <p>{CRAFT_SPECIALS.note}</p>
        <ul>
          {CRAFT_SPECIALS.items.map((d) => (
            <li key={d.name}>
              {d.name} — {d.description} — {d.price}
            </li>
          ))}
        </ul>
        <p>{CRAFT_SPECIALS.footnote}</p>

        {MENU_SECTIONS.map((section) => (
          <div key={section.heading}>
            <h2>
              {section.heading}
              {section.note ? ` (${section.note})` : ''}
            </h2>
            <ul>
              {section.items.map((item) => (
                <li key={item.name}>
                  {item.name}
                  {item.description ? ` — ${item.description}` : ''}
                  {item.price ? ` — ${item.price}` : ''}
                </li>
              ))}
            </ul>
          </div>
        ))}
        <p>{ALLERGEN_NOTE}</p>
      </div>

      {/* Zoom overlay */}
      {zoomed && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/80 p-4 backdrop-blur-sm"
          onClick={() => setZoomed(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged menu page"
        >
          <img
            src={zoomed.src}
            alt={zoomed.alt}
            className="max-h-[90vh] max-w-full rounded-lg object-contain shadow-2xl"
          />
          <button
            type="button"
            onClick={() => setZoomed(null)}
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-paper/90 text-xl text-ink shadow-md hover:bg-paper"
            aria-label="Close"
          >
            ✕
          </button>
        </div>
      )}
    </>
  )
}
