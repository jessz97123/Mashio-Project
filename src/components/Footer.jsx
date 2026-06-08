import { Link } from 'react-router-dom'
import { NAV_LINKS, SITE } from '../data/site'

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-brown/15 bg-espresso text-paper">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <p className="font-serif text-2xl lowercase">mashio project</p>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-paper/70">
              {SITE.tagline}
            </p>
          </div>

          {/* Visit */}
          <div className="text-sm leading-relaxed text-paper/80">
            <p className="eyebrow !text-paper/50">Find us</p>
            <p className="mt-3 text-paper">{SITE.location.venue}</p>
            <p>{SITE.location.street}</p>
            <p>{SITE.location.cityState}</p>
            <p className="mt-3 text-paper/60">{SITE.hours}</p>
            <p className="mt-1 text-paper/50">Schedule shifts — check Instagram for this week.</p>
          </div>

          {/* Connect */}
          <div className="text-sm leading-relaxed">
            <p className="eyebrow !text-paper/50">Say hi</p>
            <a
              href={SITE.instagram.url}
              target="_blank"
              rel="noreferrer"
              className="mt-3 block text-paper/80 transition-colors hover:text-paper"
            >
              Instagram {SITE.instagram.handle}
            </a>
            <a
              href={`mailto:${SITE.email}`}
              className="mt-1 block text-paper/80 transition-colors hover:text-paper"
            >
              {SITE.email}
            </a>

            {/* Quick links */}
            <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-1 text-paper/60">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="transition-colors hover:text-paper">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-paper/15 pt-6 text-xs text-paper/45">
          © {2026} mashio project · {SITE.location.venue} · {SITE.location.street}
        </div>
      </div>
    </footer>
  )
}
