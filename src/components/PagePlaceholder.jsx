import { useEffect } from 'react'
import { Link } from 'react-router-dom'

// Temporary stub for pages we'll build after Home is approved.
export default function PagePlaceholder({ title, blurb }) {
  useEffect(() => {
    document.title = `${title} — mashio project`
  }, [title])

  return (
    <section className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-5 py-24 text-center sm:px-8">
      <p className="eyebrow">mashio project</p>
      <h1 className="mt-4 text-4xl sm:text-5xl">{title}</h1>
      <p className="mt-5 max-w-md text-brown">{blurb}</p>
      <p className="mt-8 text-sm text-brown/70">Coming soon — we’re building this page next.</p>
      <Link to="/" className="btn-secondary mt-8">
        ← Back home
      </Link>
    </section>
  )
}
