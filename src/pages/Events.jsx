import { useEffect } from 'react'
import PageHeader from '../components/PageHeader'
import InstagramFeed from '../components/InstagramFeed'
import { SITE } from '../data/site'
import { UPCOMING_EVENTS } from '../data/events'

function EventCard({ event }) {
  return (
    <article className="flex flex-col rounded-2xl border border-brown/15 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-2 text-sm text-espresso">
        <span className="font-medium">{event.date}</span>
        {event.time && event.time !== '—' && (
          <>
            <span className="text-brown/40">·</span>
            <span className="text-brown">{event.time}</span>
          </>
        )}
      </div>
      <h3 className="mt-2 font-serif text-2xl text-ink">{event.title}</h3>
      <p className="mt-1 text-sm text-brown">{event.location}</p>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-ink/90">{event.blurb}</p>
      {event.link && (
        <a
          href={event.link}
          target="_blank"
          rel="noreferrer"
          className="mt-5 text-sm font-medium text-espresso underline underline-offset-4 hover:text-ink"
        >
          Details on Instagram →
        </a>
      )}
    </article>
  )
}

export default function Events() {
  useEffect(() => {
    document.title = 'Events — mashio project'
  }, [])

  const hasEvents = UPCOMING_EVENTS.length > 0

  return (
    <>
      <PageHeader
        title="events"
        intro="Pop-up schedule, festivals, secret pop-ups, and seasonal specials. Instagram has the live updates."
      />

      {/* Upcoming events */}
      {hasEvents && (
        <section className="mx-auto max-w-5xl px-5 py-16 sm:px-8">
          <h2 className="text-2xl sm:text-3xl">Upcoming</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {UPCOMING_EVENTS.map((event) => (
              <EventCard key={event.title} event={event} />
            ))}
          </div>
        </section>
      )}

      {/* Latest from Instagram */}
      <section
        className={`mx-auto max-w-5xl px-5 pb-16 sm:px-8 ${hasEvents ? '' : 'pt-16'}`}
      >
        <div className="flex flex-col items-center text-center">
          <p className="eyebrow">stay in the loop</p>
          <h2 className="mt-3 text-2xl sm:text-3xl">Latest from Instagram</h2>
          <p className="mt-3 max-w-md text-brown">
            New specials, pop-up locations, and seasonal desserts land here first.
          </p>
        </div>

        <div className="mt-8">
          <InstagramFeed />
        </div>

        <div className="mt-8 text-center">
          <a
            href={SITE.instagram.url}
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
          >
            Follow {SITE.instagram.handle}
          </a>
        </div>
      </section>
    </>
  )
}
