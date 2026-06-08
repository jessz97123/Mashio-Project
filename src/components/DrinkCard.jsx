import { useState } from 'react'

// A single drink card: real product image on a light card, italic name, description, price.
// HARD RULE: only real provided images. If the image fails to load, we show a
// neutral tan placeholder — never an AI/stock substitute.
export default function DrinkCard({ name, description, price, image }) {
  const [failed, setFailed] = useState(false)

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-brown/10 bg-white shadow-sm transition-shadow hover:shadow-md">
      <div className="flex aspect-[4/5] items-center justify-center bg-white p-4">
        {image && !failed ? (
          <img
            src={image}
            alt={name}
            loading="lazy"
            onError={() => setFailed(true)}
            className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center rounded-xl bg-tan text-center text-xs text-brown/70">
            photo coming soon
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col border-t border-brown/10 px-5 py-4">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-serif text-lg italic text-ink">{name}</h3>
          {price && <span className="shrink-0 text-sm font-medium text-espresso">{price}</span>}
        </div>
        {description && (
          <p className="mt-1.5 text-sm leading-relaxed text-brown">{description}</p>
        )}
      </div>
    </article>
  )
}
