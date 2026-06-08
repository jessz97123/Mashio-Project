import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { SITE } from '../data/site'
import { CRAFT_SPECIALS } from '../data/menu'
import DrinkCard from '../components/DrinkCard'
import MapEmbed from '../components/MapEmbed'
import { useLang } from '../i18n/LanguageContext'

export default function Home() {
  const { t } = useLang()

  useEffect(() => {
    document.title = 'mashio project — korean-inspired craft drinks & desserts'
  }, [])

  // Featured specials: real images + prices from data, descriptions from translations
  const featured = CRAFT_SPECIALS.items.slice(0, 4).map((d, i) => ({
    ...d,
    description: t.menu.craftItems[i],
  }))

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 sm:px-8 md:grid-cols-2 md:gap-12 md:py-24">
          <div className="text-center md:text-left">
            <img
              src="/mashio-logo-full.svg"
              alt="mashio project"
              className="mx-auto h-40 w-auto md:mx-0 md:h-48"
              width="194"
              height="250"
            />
            <h1 className="mt-7 font-serif text-3xl leading-tight sm:text-4xl">{t.home.tagline}</h1>
            <p className="mt-4 text-brown">{t.home.status}</p>

            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row md:items-start md:justify-start">
              <Link to="/menu" className="btn-primary w-full sm:w-auto">{t.home.viewMenu}</Link>
              <a href={SITE.instagram.url} target="_blank" rel="noreferrer" className="btn-secondary w-full sm:w-auto">
                {t.home.followIg}
              </a>
            </div>
            <p className="mt-4 text-xs text-brown/70">{t.home.igNote}</p>
          </div>

          <div className="relative">
            <div className="mx-auto flex aspect-square w-full max-w-md items-center justify-center rounded-[2rem] bg-tan p-8">
              <img
                src="/drinks/the-einspanner.png"
                alt={t.home.featuredCaption}
                className="h-full w-auto object-contain drop-shadow-sm"
              />
            </div>
            <p className="mt-3 text-center font-serif text-sm italic text-brown">{t.home.featuredCaption}</p>
          </div>
        </div>
      </section>

      {/* Featured specials */}
      <section className="border-t border-brown/10 bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-20">
          <div className="flex flex-col items-center text-center">
            <p className="eyebrow">{t.home.recsEyebrow}</p>
            <h2 className="mt-3 text-3xl sm:text-4xl">{t.home.craftHeading}</h2>
            <p className="mt-3 max-w-md text-brown">{t.home.craftFootnote}</p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((drink) => (
              <DrinkCard key={drink.name} {...drink} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link to="/menu" className="btn-secondary">{t.home.seeFullMenu}</Link>
          </div>
        </div>
      </section>

      {/* Brand teaser */}
      <section className="border-t border-brown/10 bg-tan/50">
        <div className="mx-auto max-w-3xl px-5 py-16 text-center sm:px-8 md:py-24">
          <p className="eyebrow">{t.home.storyEyebrow}</p>
          <p className="mt-5 font-serif text-2xl leading-relaxed text-ink sm:text-3xl">{t.home.storyQuote}</p>
          <Link to="/about" className="btn-secondary mt-8">{t.home.readStory}</Link>
        </div>
      </section>

      {/* Find us */}
      <section className="border-t border-brown/10">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 md:grid-cols-2 md:items-center md:py-20">
          <div>
            <p className="eyebrow">{t.home.findEyebrow}</p>
            <h2 className="mt-3 text-3xl sm:text-4xl">{t.home.findHeading}</h2>
            <p className="mt-4 text-brown">
              {SITE.location.street}
              <br />
              {SITE.location.cityState}
            </p>
            <p className="mt-4 text-brown">{t.hours}</p>
            <div className="mt-6 rounded-xl border border-brown/15 bg-tan/60 px-5 py-4 text-sm text-espresso">
              {t.home.scheduleLead}{' '}
              <a href={SITE.instagram.url} target="_blank" rel="noreferrer" className="font-medium underline underline-offset-2 hover:text-ink">
                Instagram
              </a>{' '}
              {t.home.scheduleTail}
            </div>
            <a href={SITE.mapLink} target="_blank" rel="noreferrer" className="btn-secondary mt-6">
              {t.home.getDirections}
            </a>
          </div>

          <MapEmbed />
        </div>
      </section>

      {/* Instagram prompt */}
      <section className="border-t border-brown/10 bg-espresso text-paper">
        <div className="mx-auto max-w-3xl px-5 py-16 text-center sm:px-8">
          <p className="eyebrow !text-paper/50">{t.home.followEyebrow}</p>
          <h2 className="mt-3 text-3xl text-paper sm:text-4xl">{t.home.followHeading}</h2>
          <p className="mx-auto mt-4 max-w-md text-paper/70">{t.home.followSub}</p>
          <a
            href={SITE.instagram.url}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-paper px-7 py-3 text-sm font-medium tracking-wide text-espresso transition-colors hover:bg-tan"
          >
            {t.home.followCta} {SITE.instagram.handle}
          </a>
        </div>
      </section>
    </>
  )
}
