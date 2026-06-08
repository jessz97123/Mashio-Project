import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLang } from '../i18n/LanguageContext'

export default function NotFound() {
  const { t } = useLang()
  const n = t.notFound

  useEffect(() => {
    document.title = 'Page not found — mashio project'
  }, [])

  return (
    <section className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-5 py-24 text-center sm:px-8">
      <p className="eyebrow">{n.code}</p>
      <h1 className="mt-4 text-4xl sm:text-5xl">{n.heading}</h1>
      <p className="mt-5 text-brown">{n.body}</p>
      <Link to="/" className="btn-primary mt-8">{n.home}</Link>
    </section>
  )
}
