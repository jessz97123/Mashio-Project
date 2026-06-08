import { SITE } from '../data/site'

// Reusable map. Keyless Google embeds now refuse iframing (X-Frame-Options),
// so we use a keyless OpenStreetMap embed. "Get directions" still opens Google Maps.
export default function MapEmbed({ className = 'h-72 w-full md:h-80' }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-brown/15 shadow-sm">
      <iframe
        title={`Map to ${SITE.location.venue}, ${SITE.location.street}, ${SITE.location.cityState}`}
        src={SITE.mapEmbed}
        className={className}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  )
}
