import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import { CRAFT_SPECIALS, MENU_SECTIONS, ALLERGEN_NOTE } from '../data/menu'
import { useLang } from '../i18n/LanguageContext'

const MENU_PAGES = [
  { src: '/menu/menu-page-3.png', alt: 'mashio project today’s specials — Matcha / Hojicha Einspanner and Midnight Matcha, both $10.50' },
  { src: '/menu/menu-page-2.png', alt: 'mashio project menu — Coffee, Tea, Keiki, and Dessert with prices' },
  { src: '/menu/menu-page-1.png', alt: 'mashio project craft specials — six signature iced drinks, all $9.50' },
]

export default function Menu() {
  const { lang, t } = useLang()
  const [zoomed, setZoomed] = useState(null)

  useEffect(() => {
    document.title = 'Menu — mashio project'
  }, [])

  useEffect(() => {
    if (!zoomed) return
    const onKey = (e) => e.key === 'Escape' && setZoomed(null)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [zoomed])

  const m = t.menu
  const showTranslated = lang !== 'en'

  return (
    <>
      <PageHeader title={m.title} intro={m.intro} />

      <div className="mx-auto max-w-2xl px-5 pt-12 sm:px-8">
        <p className="rounded-xl border border-brown/15 bg-tan/60 px-5 py-3 text-center text-sm text-espresso">
          {m.rotates}
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
            aria-label={`${page.alt} — ${m.tapToEnlarge}`}
          >
            <img src={page.src} alt={page.alt} loading="lazy" className="w-full" />
          </button>
        ))}
        <p className="text-center text-xs text-brown/70">{m.tapToEnlarge}</p>
      </section>

      {/* Translated text menu (shown for non-English visitors) */}
      {showTranslated && (
        <section className="border-t border-brown/10 bg-tan/30">
          <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl">{m.translatedHeading}</h2>
              <p className="mx-auto mt-3 max-w-md text-sm text-brown">{m.translatedNote}</p>
            </div>

            {/* Craft specials */}
            <div className="mt-12">
              <div className="flex items-baseline justify-between border-b border-brown/20 pb-2">
                <h3 className="font-serif text-2xl text-ink">{m.craftHeading}</h3>
                <span className="text-sm italic text-brown">{m.craftNote}</span>
              </div>
              <ul className="mt-4 space-y-3">
                {CRAFT_SPECIALS.items.map((item, i) => (
                  <li key={item.name} className="flex items-baseline justify-between gap-4">
                    <div>
                      <span className="text-ink">{item.name}</span>
                      <span className="block text-sm text-brown">{m.craftItems[i]}</span>
                    </div>
                    <span className="shrink-0 font-medium text-espresso">{item.price}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 font-serif text-sm italic text-brown">{m.craftFootnote}</p>
            </div>

            {/* Sections */}
            <div className="mt-12 space-y-12">
              {MENU_SECTIONS.map((section, si) => {
                const ts = m.sections[si]
                return (
                  <div key={section.heading}>
                    <div className="flex items-baseline justify-between border-b border-brown/20 pb-2">
                      <h3 className="font-serif text-2xl text-ink">{ts.heading}</h3>
                      {ts.note && <span className="text-sm italic text-brown">{ts.note}</span>}
                    </div>
                    <ul className="mt-4 space-y-3">
                      {section.items.map((item, ii) => {
                        const translated = ts.items[ii]
                        // Coffee/Tea/Keiki: translated string is the item NAME (price from data).
                        // Einspanner/Dessert: item has its own description -> translated string is the DESCRIPTION.
                        const hasDesc = Boolean(item.description)
                        return (
                          <li key={item.name} className="flex items-baseline justify-between gap-4">
                            <div>
                              <span className="text-ink">{hasDesc ? item.name : translated}</span>
                              {hasDesc && <span className="block text-sm text-brown">{translated}</span>}
                            </div>
                            {item.price && <span className="shrink-0 font-medium text-espresso">{item.price}</span>}
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                )
              })}
            </div>

            <p className="mt-12 border-t border-brown/15 pt-6 text-sm leading-relaxed text-brown">{m.allergen}</p>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="mx-auto max-w-3xl px-5 py-16 text-center sm:px-8">
        <p className="text-brown">{m.pricesNote}</p>
        <Link to="/contact" className="btn-secondary mt-6">{m.cateringCta}</Link>
      </section>

      {/* SEO/a11y English text version (always present, hidden) */}
      <div className="sr-only">
        <h2>{CRAFT_SPECIALS.heading}</h2>
        <ul>
          {CRAFT_SPECIALS.items.map((d) => (
            <li key={d.name}>{d.name} — {d.description} — {d.price}</li>
          ))}
        </ul>
        {MENU_SECTIONS.map((section) => (
          <div key={section.heading}>
            <h2>{section.heading}{section.note ? ` (${section.note})` : ''}</h2>
            <ul>
              {section.items.map((item) => (
                <li key={item.name}>
                  {item.name}{item.description ? ` — ${item.description}` : ''}{item.price ? ` — ${item.price}` : ''}
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
          <img src={zoomed.src} alt={zoomed.alt} className="max-h-[90vh] max-w-full rounded-lg object-contain shadow-2xl" />
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
