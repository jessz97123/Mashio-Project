import { useEffect, useState } from 'react'
import PageHeader from '../components/PageHeader'
import MapEmbed from '../components/MapEmbed'
import { SITE } from '../data/site'
import { useLang } from '../i18n/LanguageContext'

export default function Contact() {
  const { t } = useLang()
  const c = t.contact

  useEffect(() => {
    document.title = 'Contact — mashio project'
  }, [])

  const [form, setForm] = useState({ name: '', email: '', type: '', message: '' })
  const types = c.inquiryTypes
  const selectedType = form.type || types[0]

  const update = (field) => (ev) => setForm((f) => ({ ...f, [field]: ev.target.value }))

  const handleSubmit = (ev) => {
    ev.preventDefault()
    const subject = `[${selectedType}] inquiry from ${form.name || 'the website'}`
    const body = [`Name: ${form.name}`, `Email: ${form.email}`, `Type: ${selectedType}`, '', form.message].join('\n')
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  const inputClass =
    'w-full rounded-xl border border-brown/25 bg-white px-4 py-3 text-sm text-ink placeholder:text-brown/50 focus:border-espresso focus:outline-none focus:ring-1 focus:ring-espresso'

  return (
    <>
      <PageHeader title={c.title} intro={c.intro} />

      <div className="mx-auto grid max-w-5xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-2 md:py-20">
        {/* Left: details + map */}
        <div>
          <h2 className="text-2xl sm:text-3xl">{c.sayHi}</h2>
          <dl className="mt-6 space-y-5 text-sm">
            <div>
              <dt className="eyebrow">{c.email}</dt>
              <dd className="mt-1">
                <a href={`mailto:${SITE.email}`} className="text-base text-espresso underline underline-offset-2 hover:text-ink">{SITE.email}</a>
              </dd>
            </div>
            <div>
              <dt className="eyebrow">{c.instagram}</dt>
              <dd className="mt-1">
                <a href={SITE.instagram.url} target="_blank" rel="noreferrer" className="text-base text-espresso underline underline-offset-2 hover:text-ink">{SITE.instagram.handle}</a>
              </dd>
            </div>
            <div>
              <dt className="eyebrow">{c.findUs}</dt>
              <dd className="mt-1 text-base text-ink">
                {SITE.location.venue} · {SITE.location.street}
                <br />
                {SITE.location.cityState}
              </dd>
            </div>
            <div>
              <dt className="eyebrow">{c.hours}</dt>
              <dd className="mt-1 text-base text-ink">{t.hours}</dd>
              <dd className="mt-1 text-sm text-brown">{c.scheduleNote}</dd>
            </div>
          </dl>

          <div className="mt-8">
            <MapEmbed className="h-64 w-full" />
          </div>
        </div>

        {/* Right: inquiry form */}
        <div>
          <h2 className="text-2xl sm:text-3xl">{c.sendNote}</h2>
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm text-ink">{c.name}</label>
              <input id="name" type="text" required value={form.name} onChange={update('name')} className={inputClass} placeholder={c.namePh} />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm text-ink">{c.emailLabel}</label>
              <input id="email" type="email" required value={form.email} onChange={update('email')} className={inputClass} placeholder={c.emailPh} />
            </div>
            <div>
              <label htmlFor="type" className="mb-1.5 block text-sm text-ink">{c.inquiryType}</label>
              <select id="type" value={selectedType} onChange={update('type')} className={inputClass}>
                {types.map((ty) => (
                  <option key={ty} value={ty}>{ty}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm text-ink">{c.message}</label>
              <textarea id="message" required rows={5} value={form.message} onChange={update('message')} className={`${inputClass} resize-y`} placeholder={c.messagePh} />
            </div>
            <button type="submit" className="btn-primary w-full">{c.send}</button>
            <p className="text-center text-xs text-brown/70">{c.mailtoNote} {SITE.email}.</p>
          </form>
        </div>
      </div>
    </>
  )
}
