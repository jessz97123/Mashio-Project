import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import { SITE } from '../data/site'

const VALUES = [
  {
    title: 'Made by hand',
    body: 'Every drink is made to order — dialed in, shaken, and poured one at a time.',
  },
  {
    title: 'Fresh, never frozen',
    body: 'Real fruit, fresh every time. No frozen shortcuts, no syrupy stand-ins.',
  },
  {
    title: 'Oat milk as default',
    body: 'Poured as the default — no upcharge, no asterisk. Just the way we like it.',
  },
]

export default function About() {
  useEffect(() => {
    document.title = 'About — mashio project'
  }, [])

  return (
    <>
      <PageHeader
        title="about mashio project"
        intro="korean-inspired craft drinks & desserts in Honolulu — small-batch matcha, hojicha, and coffee made by hand, with desserts that rotate with the season."
      />

      <article className="mx-auto max-w-2xl px-5 py-16 sm:px-8 md:py-20">
        {/* How it started */}
        <section>
          <h2 className="text-2xl sm:text-3xl">how it started</h2>
          <div className="mt-5 space-y-5 leading-relaxed text-ink/90">
            <p>
              Two years ago, a layoff from a six-figure consulting job turned into the best
              detour of my life. Burned out on the corporate grind, I booked a one-way ticket
              to Seoul to be with my girlfriend Kelly and do some soul-searching. What I found
              was a cafe culture that completely rewired me — a new beautiful, thoughtfully made
              cafe to discover on every corner, every single day.
            </p>
            <p>
              Back on Oahu, we went hunting for that same feeling and couldn’t find it anywhere
              on the island. So I started making it myself — dialing in beans, testing recipes,
              chasing the perfect shot at home. When friends started saying “this is so good,
              I’d pay for this,” mashio project was born.
            </p>
            <p>
              Today it’s my way of sharing everything that time in Korea gave me — one handmade
              drink at a time.
            </p>
          </div>
        </section>

        {/* Pull quote */}
        <blockquote className="my-12 border-l-2 border-brown/30 pl-6">
          <p className="font-serif text-xl italic leading-relaxed text-espresso sm:text-2xl">
            “We think the good stuff is worth the extra step.”
          </p>
        </blockquote>

        {/* How we do it */}
        <section>
          <h2 className="text-2xl sm:text-3xl">how we do it</h2>
          <p className="mt-5 leading-relaxed text-ink/90">
            Every drink is made to order with fruit that’s fresh, never frozen, and oat milk
            poured as the default — no upcharge, no asterisk. Strong-but-balanced matcha. Salted
            vanilla cream we whip ourselves. Little things that add up.
          </p>
        </section>
      </article>

      {/* Values */}
      <section className="border-y border-brown/10 bg-tan/40">
        <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8">
          <div className="grid gap-8 sm:grid-cols-3">
            {VALUES.map((v) => (
              <div key={v.title} className="text-center sm:text-left">
                <h3 className="font-serif text-xl text-ink">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brown">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo placeholders — neutral, awaiting real hi-res photos (never stock/AI) */}
      <section className="mx-auto max-w-5xl px-5 py-16 sm:px-8">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {['the space', 'hands at work', 'the team'].map((label, i) => (
            <div
              key={label}
              className={`flex items-center justify-center rounded-2xl border border-brown/15 bg-tan text-center text-xs text-brown/70 ${
                i === 0 ? 'col-span-2 aspect-[2/1] sm:col-span-1 sm:aspect-[3/4]' : 'aspect-[3/4]'
              }`}
            >
              {label} — photo coming soon
            </div>
          ))}
        </div>
      </section>

      {/* Where to find us */}
      <section className="border-t border-brown/10 bg-espresso text-paper">
        <div className="mx-auto max-w-2xl px-5 py-16 text-center sm:px-8">
          <h2 className="text-3xl text-paper sm:text-4xl">where to find us</h2>
          <p className="mx-auto mt-5 max-w-lg leading-relaxed text-paper/75">
            We pop up at {SITE.location.venue} in {SITE.location.area} every Friday &amp;
            Saturday, with the occasional festival, secret pop-up, and seasonal special in the
            mix. This summer marks our first year. Come say hi, and follow along on Instagram
            for where we’ll be next. 🤎
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={SITE.instagram.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-paper px-7 py-3 text-sm font-medium tracking-wide text-espresso transition-colors hover:bg-tan"
            >
              Follow {SITE.instagram.handle}
            </a>
            <Link
              to="/menu"
              className="inline-flex items-center justify-center rounded-full border border-paper/30 px-7 py-3 text-sm font-medium tracking-wide text-paper transition-colors hover:bg-paper/10"
            >
              View the menu
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
