import { useEffect } from 'react'
import { SITE } from '../data/site'
import { CONFIG } from '../config'

// Loads the Behold widget script once (only when a feed is configured).
function useBeholdScript(enabled) {
  useEffect(() => {
    if (!enabled) return
    const SRC = 'https://w.behold.so/widget.js'
    if (document.querySelector(`script[src="${SRC}"]`)) return
    const script = document.createElement('script')
    script.src = SRC
    script.type = 'module'
    document.head.appendChild(script)
  }, [enabled])
}

// Fallback shown until a Behold feed ID is added in src/config.js:
// neutral tiles that link to Instagram (no stock/AI imagery).
function PlaceholderStrip() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {Array.from({ length: 4 }).map((_, i) => (
        <a
          key={i}
          href={SITE.instagram.url}
          target="_blank"
          rel="noreferrer"
          className="group flex aspect-square items-center justify-center rounded-xl border border-brown/15 bg-tan transition-colors hover:bg-tan/70"
          aria-label={`Open ${SITE.instagram.handle} on Instagram`}
        >
          <img
            src="/mashio-badge.svg"
            alt=""
            className="h-10 w-10 opacity-40 transition-opacity group-hover:opacity-60"
          />
        </a>
      ))}
    </div>
  )
}

export default function InstagramFeed() {
  const feedId = CONFIG.beholdFeedId?.trim()
  const enabled = Boolean(feedId)
  useBeholdScript(enabled)

  if (!enabled) return <PlaceholderStrip />

  // Behold custom element renders the live grid of recent @mashioproject posts.
  return <behold-widget feed-id={feedId} />
}
