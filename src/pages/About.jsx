import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import { SITE } from '../data/site'
import { useLang } from '../i18n/LanguageContext'

export default function About() {
  const { t } = useLang()

  useEffect(() => {
    document.title = 'About — mashio project'
  }, [])

  const a = t.about

  return (
    <>
      <PageHeader title={a.title} intro={a.intro} />

      <article className="mx-auto max-w-2xl px-5 py-16 sm:px-8 md:py-20">
        <section>
          <h2 className="text-2xl sm:text-3xl">{a.startedHeading}</h2>
          <div className="mt-5 space-y-5 leading-relaxed text-ink/90">
            <p>{a.p1}</p>
            <p>{a.p2}</p>
            <p>{a.p3}</p>
          </div>
        </section>

        <blockquote className="my-12 border-l-2 border-brown/30 pl-6">
          <p className="font-serif text-xl italic leading-relaxed text-espresso sm:text-2xl">{a.quote}</p>
        </blockquote>

        <section>
          <h2 className="text-2xl sm:text-3xl">{a.doHeading}</h2>
          <p className="mt-5 leading-relaxed text-ink/90">{a.doBody}</p>
        </section>
      </article>

      {/* Values */}
      <section className="border-y border-brown/10 bg-tan/40">
        <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8">
          <div className="grid gap-8 sm:grid-cols-3">
            {a.values.map((v) => (
              <div key={v.title} className="text-center sm:text-left">
                <h3 className="font-serif text-xl text-ink">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brown">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo placeholders */}
      <section className="mx-auto max-w-5xl px-5 py-16 sm:px-8">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {a.photoLabels.map((label, i) => (
            <div
              key={label}
              className={`flex items-center justify-center rounded-2xl border border-brown/15 bg-tan text-center text-xs text-brown/70 ${
                i === 0 ? 'col-span-2 aspect-[2/1] sm:col-span-1 sm:aspect-[3/4]' : 'aspect-[3/4]'
              }`}
            >
              {label} — {a.photoSoon}
            </div>
          ))}
        </div>
      </section>

      {/* Where to find us */}
      <section className="border-t border-brown/10 bg-espresso text-paper">
        <div className="mx-auto max-w-2xl px-5 py-16 text-center sm:px-8">
          <h2 className="text-3xl text-paper sm:text-4xl">{a.findHeading}</h2>
          <p className="mx-auto mt-5 max-w-lg leading-relaxed text-paper/75">{a.findBody}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={SITE.instagram.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-paper px-7 py-3 text-sm font-medium tracking-wide text-espresso transition-colors hover:bg-tan"
            >
              {a.followCta} {SITE.instagram.handle}
            </a>
            <Link
              to="/menu"
              className="inline-flex items-center justify-center rounded-full border border-paper/30 px-7 py-3 text-sm font-medium tracking-wide text-paper transition-colors hover:bg-paper/10"
            >
              {a.viewMenu}
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
