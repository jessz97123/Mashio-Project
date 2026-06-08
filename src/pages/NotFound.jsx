import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  useEffect(() => {
    document.title = 'Page not found — mashio project'
  }, [])

  return (
    <section className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-5 py-24 text-center sm:px-8">
      <p className="eyebrow">404</p>
      <h1 className="mt-4 text-4xl sm:text-5xl">This page wandered off</h1>
      <p className="mt-5 text-brown">
        It may have rotated out with this week’s menu. Let’s get you back.
      </p>
      <Link to="/" className="btn-primary mt-8">
        Back home
      </Link>
    </section>
  )
}
