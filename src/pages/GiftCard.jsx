import { useEffect } from 'react'
import PageHeader from '../components/PageHeader'
import { SITE } from '../data/site'
import { useLang } from '../i18n/LanguageContext'

export default function GiftCard() {
  const { t } = useLang()

  useEffect(() => {
    document.title = 'Gift Card — mashio project'
  }, [])

  const g = t.giftcard

  return (
    <>
      <PageHeader title={g.title} intro={g.intro} />

      <section className="mx-auto max-w-2xl px-5 py-16 text-center sm:px-8">
        <p className="text-lg leading-relaxed text-ink/90">{g.blurb}</p>

        <div className="mt-10">
          <button
            type="button"
            disabled
            className="inline-flex cursor-not-allowed items-center justify-center rounded-full bg-espresso/40 px-8 py-3.5 text-sm font-medium tracking-wide text-paper"
          >
            {g.buy}
          </button>
          <p className="mt-3 text-sm text-brown">
            {g.soonLead}{' '}
            <a href={SITE.instagram.url} target="_blank" rel="noreferrer" className="font-medium underline underline-offset-2 hover:text-ink">
              Instagram
            </a>{' '}
            {g.soonMid}{' '}
            <a href={`mailto:${SITE.email}`} className="font-medium underline underline-offset-2 hover:text-ink">
              {SITE.email}
            </a>{' '}
            {g.soonTail}
          </p>
        </div>
      </section>

      <section className="border-t border-brown/10 bg-tan/40">
        <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8">
          <h2 className="text-center text-2xl sm:text-3xl">{g.howHeading}</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {g.steps.map((s, i) => (
              <div key={i} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-espresso font-serif text-lg text-paper">
                  {i + 1}
                </div>
                <h3 className="mt-4 font-serif text-xl text-ink">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brown">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
