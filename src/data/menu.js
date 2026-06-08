// Menu content synced from the authoritative Canva design
// "Copy of Mashio Project June 2026 Menu" (design ID DAHLv9dJJpM), June 2026.
// Each craft special's `image` maps to a real provided PNG in /public/drinks/.
// HARD RULE: only real provided drink images — never AI/stock. Missing => placeholder.

export const CRAFT_SPECIALS = {
  heading: 'Craft Specials',
  note: 'our recommendations · all iced · 16oz · $9.50',
  footnote: 'Made by hand from fresh, never frozen fruits.',
  items: [
    {
      name: 'The Einspanner',
      description: 'iced oat latte with salted vanilla cream top',
      price: '$9.50',
      image: '/drinks/the-einspanner.png',
    },
    {
      name: 'Sunrise Crush',
      description: 'ginger, turmeric & calamansi with bubbly mandarin base',
      price: '$9.50',
      image: '/drinks/sunrise-crush.png',
    },
    {
      name: 'Berry Matcha',
      description: 'silky strawberry matcha oat latte',
      price: '$9.50',
      image: '/drinks/berry-matcha.png',
    },
    {
      name: 'Matcha Crush',
      description: 'bubbly matcha with pineapple mint base',
      price: '$9.50',
      image: '/drinks/matcha-crush.png',
    },
    {
      name: 'Mandarin Espresso Spritz',
      description: 'bubbly espresso with freshly squeezed citrus',
      price: '$9.50',
      image: '/drinks/mandarin-espresso-spritz.png',
    },
    {
      name: 'Sweet & Dirty',
      description: 'creamy and nutty strawberry hojicha oat latte',
      price: '$9.50',
      image: '/drinks/sweet-and-dirty.png',
    },
  ],
}

// Text sections (listed below the card grid on the Menu page)
export const MENU_SECTIONS = [
  {
    heading: 'Coffee',
    items: [
      { name: 'Americano', price: '$7' },
      { name: 'Oat Latte', price: '$8' },
    ],
  },
  {
    heading: 'Tea',
    items: [
      { name: 'Matcha Oat Latte', price: '$8' },
      { name: 'Hojicha Oat Latte', price: '$8' },
      { name: 'Cold-Brewed Osmanthus Oolong', price: '$6' },
    ],
  },
  {
    heading: 'Einspanner',
    note: '$10.50',
    items: [
      {
        name: 'Matcha or Hojicha Einspanner',
        description: 'iced tea oat latte with salted vanilla matcha cream top',
      },
      {
        name: 'Midnight Matcha',
        description: 'iced espresso oat latte topped with salted vanilla matcha cream top',
      },
    ],
  },
  {
    heading: 'Dessert',
    note: 'ask about today’s special flavors',
    items: [
      { name: 'Tiramisu', description: 'espresso, earl gray ($10) / matcha ($11)' },
      { name: 'Basque Cheesecake', description: 'earl gray, black sesame ($9) / matcha ($10)' },
    ],
  },
  {
    heading: 'Keiki (kids)',
    items: [{ name: 'Strawberry Milk', price: '$8.50' }],
  },
]

export const MENU_ROTATES_NOTE = 'Menu rotates — ask about today’s specials.'
export const ALLERGEN_NOTE =
  'All desserts contain dairy and are made in a home kitchen not routinely inspected by the Department of Health.'
