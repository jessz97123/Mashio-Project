import { useEffect } from 'react'
import PageHeader from '../components/PageHeader'
import { SITE } from '../data/site'

const STEPS = [
  {
    n: '1',
    title: 'Choose an amount',
    body: 'Pick a value that suits — enough for an einspanner or a whole round for friends.',
  },
  {
    n: '2',
    title: 'We send it over',
    body: 'A digital gift card arrives by email, ready to forward to whoever you’re treating.',
  },
  {
    n: '3',
    title: 'Redeem at the pop-up',
    body: 'Show the card at Fishcake on any Friday or Saturday and enjoy.',
  },
]

export default function GiftCard() {
  useEffect(() => {
    document.title = 'Gift Card — mashio project'
  }, [])

  return (
    <>
      <PageHeader title="gift card" intro="Give the gift of matcha 🍵" />

      <section className="mx-auto max-w-2xl px-5 py-16 text-center sm:px-8">
        <p className="text-lg leading-relaxed text-ink/90">
          A mashio project gift card is a little jar of Honolulu’s coziest cafe — handmade
          matcha, hojicha, coffee, and rotating desserts, made fresh at the pop-up.
        </p>

        {/* Buy CTA — link-out (Square/Giftly) to be wired up. Disabled until the
            hosted gift-card URL is provided. */}
        <div className="mt-10">
          <button
            type="button"
            disabled
            className="inline-flex cursor-not-allowed items-center justify-center rounded-full bg-espresso/40 px-8 py-3.5 text-sm font-medium tracking-wide text-paper"
            title="Coming soon — gift cards launch shortly"
          >
            Buy a gift card — coming soon
          </button>
          <p className="mt-3 text-sm text-brown">
            Gift cards are launching soon. In the meantime, message us on{' '}
            <a
              href={SITE.instagram.url}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-2 hover:text-ink"
            >
              Instagram
            </a>{' '}
            or email{' '}
            <a
              href={`mailto:${SITE.email}`}
              className="font-medium underline underline-offset-2 hover:text-ink"
            >
              {SITE.email}
            </a>{' '}
            to arrange one.
          </p>
        </div>
      </section>

      {/* How redemption works */}
      <section className="border-t border-brown/10 bg-tan/40">
        <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8">
          <h2 className="text-center text-2xl sm:text-3xl">How it works</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {STEPS.map((s) => (
              <div key={s.n} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-espresso font-serif text-lg text-paper">
                  {s.n}
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
