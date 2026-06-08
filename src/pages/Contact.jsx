import { useEffect, useState } from 'react'
import PageHeader from '../components/PageHeader'
import MapEmbed from '../components/MapEmbed'
import { SITE } from '../data/site'

const INQUIRY_TYPES = ['Catering', 'Collab / partnership', 'Private event', 'Just saying hi']

export default function Contact() {
  useEffect(() => {
    document.title = 'Contact — mashio project'
  }, [])

  const [form, setForm] = useState({
    name: '',
    email: '',
    type: INQUIRY_TYPES[0],
    message: '',
  })

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }))

  // No backend yet: compose a prefilled email to mashioproject@gmail.com.
  // Swap this for a Formspree/Getform POST when an endpoint is ready.
  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = `[${form.type}] inquiry from ${form.name || 'the website'}`
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Type: ${form.type}`,
      '',
      form.message,
    ].join('\n')
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`
  }

  const inputClass =
    'w-full rounded-xl border border-brown/25 bg-white px-4 py-3 text-sm text-ink placeholder:text-brown/50 focus:border-espresso focus:outline-none focus:ring-1 focus:ring-espresso'

  return (
    <>
      <PageHeader
        title="contact"
        intro="Catering, collabs, private events, or just want to say hi — we’d love to hear from you."
      />

      <div className="mx-auto grid max-w-5xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-2 md:py-20">
        {/* Left: details + map */}
        <div>
          <h2 className="text-2xl sm:text-3xl">Say hi</h2>

          <dl className="mt-6 space-y-5 text-sm">
            <div>
              <dt className="eyebrow">Email</dt>
              <dd className="mt-1">
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-base text-espresso underline underline-offset-2 hover:text-ink"
                >
                  {SITE.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="eyebrow">Instagram</dt>
              <dd className="mt-1">
                <a
                  href={SITE.instagram.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-base text-espresso underline underline-offset-2 hover:text-ink"
                >
                  {SITE.instagram.handle}
                </a>
              </dd>
            </div>
            <div>
              <dt className="eyebrow">Find us</dt>
              <dd className="mt-1 text-base text-ink">
                {SITE.location.venue} · {SITE.location.street}
                <br />
                {SITE.location.cityState}
              </dd>
            </div>
            <div>
              <dt className="eyebrow">Hours</dt>
              <dd className="mt-1 text-base text-ink">{SITE.hours}</dd>
              <dd className="mt-1 text-sm text-brown">
                Schedule shifts — check Instagram for this week.
              </dd>
            </div>
          </dl>

          <div className="mt-8">
            <MapEmbed className="h-64 w-full" />
          </div>
        </div>

        {/* Right: inquiry form */}
        <div>
          <h2 className="text-2xl sm:text-3xl">Send a note</h2>
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm text-ink">
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={form.name}
                onChange={update('name')}
                className={inputClass}
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm text-ink">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={update('email')}
                className={inputClass}
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="type" className="mb-1.5 block text-sm text-ink">
                Type of inquiry
              </label>
              <select
                id="type"
                value={form.type}
                onChange={update('type')}
                className={inputClass}
              >
                {INQUIRY_TYPES.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm text-ink">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={form.message}
                onChange={update('message')}
                className={`${inputClass} resize-y`}
                placeholder="Tell us a little about what you have in mind…"
              />
            </div>
            <button type="submit" className="btn-primary w-full">
              Send message
            </button>
            <p className="text-center text-xs text-brown/70">
              This opens your email app with the message ready to send to {SITE.email}.
            </p>
          </form>
        </div>
      </div>
    </>
  )
}
