import { useEffect, useState } from 'react'
import PageHeader from '../components/PageHeader'
import { SITE } from '../data/site'
import { PHOTOS } from '../data/photos'
import { useLang } from '../i18n/LanguageContext'

const isVideo = (p) => p.type === 'video' || /\.(mp4|webm|mov)$/i.test(p.src)

export default function Photos() {
  const { t } = useLang()
  const [active, setActive] = useState(null)

  useEffect(() => {
    document.title = 'Photos — mashio project'
  }, [])

  useEffect(() => {
    if (!active) return
    const onKey = (e) => e.key === 'Escape' && setActive(null)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [active])

  const p = t.photos
  const hasPhotos = PHOTOS.length > 0

  return (
    <>
      <PageHeader title={p.title} intro={p.intro} />

      <section className="mx-auto max-w-5xl px-5 py-16 sm:px-8">
        {hasPhotos ? (
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {PHOTOS.map((photo, i) => (
              <button
                key={photo.src}
                type="button"
                onClick={() => setActive(photo)}
                className="group block aspect-square overflow-hidden rounded-xl border border-brown/10 bg-tan focus:outline-none focus:ring-2 focus:ring-espresso"
                aria-label={photo.alt || `photo ${i + 1}`}
              >
                {isVideo(photo) ? (
                  <video src={photo.src} muted loop playsInline className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                ) : (
                  <img src={photo.src} alt={photo.alt || ''} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                )}
              </button>
            ))}
          </div>
        ) : (
          <>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {Array.from({ length: 9 }).map((_, i) => (
                <div key={i} className="flex aspect-square items-center justify-center rounded-xl border border-brown/15 bg-tan">
                  <img src="/mashio-badge.svg" alt="" className="h-8 w-8 opacity-25" />
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <p className="text-brown">{p.soon}</p>
              <a href={SITE.instagram.url} target="_blank" rel="noreferrer" className="btn-primary mt-6">
                {p.seeMore} {SITE.instagram.handle}
              </a>
            </div>
          </>
        )}
      </section>

      {active && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/80 p-4 backdrop-blur-sm"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
          aria-label={active.alt || 'Enlarged photo'}
        >
          {isVideo(active) ? (
            <video src={active.src} controls autoPlay playsInline className="max-h-[90vh] max-w-full rounded-lg shadow-2xl" onClick={(e) => e.stopPropagation()} />
          ) : (
            <img src={active.src} alt={active.alt || ''} className="max-h-[90vh] max-w-full rounded-lg object-contain shadow-2xl" />
          )}
          <button
            type="button"
            onClick={() => setActive(null)}
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-paper/90 text-xl text-ink shadow-md hover:bg-paper"
            aria-label="Close"
          >
            ✕
          </button>
        </div>
      )}
    </>
  )
}
