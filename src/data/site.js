// Central place for brand constants + nav so every component stays in sync.

export const SITE = {
  name: 'mashio project',
  tagline: 'korean-inspired craft drinks & desserts',
  status: "Open every Friday & Saturday · Fishcake, Kaka'ako",
  instagram: {
    handle: '@mashioproject',
    url: 'https://www.instagram.com/mashioproject/',
  },
  email: 'mashioproject@gmail.com',
  location: {
    venue: 'Fishcake',
    street: '307C Kamani St',
    cityState: "Honolulu, HI 96813",
    area: "Kaka'ako",
  },
  hours: 'Every Friday & Saturday, 10am–4pm',
  // Map embed — Google Maps "Embed a map" share URL (the /maps/embed?pb= form,
  // which is the one Google allows to be iframed; free, no API key).
  // Re-copy from Google Maps → Share → Embed a map if the pin ever needs updating.
  mapEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3717.3606872579358!2d-157.85917312464653!3d21.296759678519745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c006d000ffc18b7%3A0x30e0c75c908c3de!2sMashio%20Project!5e0!3m2!1sen!2sus!4v1780959702769!5m2!1sen!2sus',
  mapLink:
    'https://www.google.com/maps/search/?api=1&query=Mashio+Project+307C+Kamani+St+Honolulu+HI+96813',
}

export const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Menu', to: '/menu' },
  { label: 'Events', to: '/events' },
  { label: 'Gift Card', to: '/gift-card' },
  { label: 'Photos', to: '/photos' },
  { label: 'Contact', to: '/contact' },
]
