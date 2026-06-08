import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { NAV_LINKS } from '../data/site'
import { useLang } from '../i18n/LanguageContext'
import LanguageSwitcher from './LanguageSwitcher'

// route path -> translation key in t.nav
const NAV_KEY = {
  '/': 'home', '/about': 'about', '/menu': 'menu', '/events': 'events',
  '/gift-card': 'giftCard', '/photos': 'photos', '/contact': 'contact',
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const { t } = useLang()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  return (
    <header className="sticky top-0 z-50 border-b border-brown/15 bg-paper/85 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 sm:px-8">
        {/* Logo / wordmark */}
        <Link to="/" className="flex items-center gap-2.5" aria-label="mashio project — home">
          <img src="/mashio-logo.svg" alt="" className="h-9 w-auto" width="187" height="148" />
          <span className="font-serif text-lg lowercase tracking-tight text-ink">
            mashio project
          </span>
        </Link>

        {/* Desktop links + language switcher (top-right) */}
        <div className="hidden items-center gap-6 lg:flex">
          <ul className="flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    [
                      'text-sm tracking-wide transition-colors hover:text-ink',
                      isActive ? 'text-ink' : 'text-brown',
                    ].join(' ')
                  }
                >
                  {t.nav[NAV_KEY[link.to]]}
                </NavLink>
              </li>
            ))}
          </ul>
          <LanguageSwitcher />
        </div>

        {/* Mobile: compact switcher + hamburger */}
        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitcher />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full text-espresso"
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={open}
          >
            <span className="relative block h-4 w-5">
              <span className={`absolute left-0 block h-0.5 w-5 bg-current transition-all duration-300 ${open ? 'top-1.5 rotate-45' : 'top-0'}`} />
              <span className={`absolute left-0 top-1.5 block h-0.5 w-5 bg-current transition-all duration-300 ${open ? 'opacity-0' : 'opacity-100'}`} />
              <span className={`absolute left-0 block h-0.5 w-5 bg-current transition-all duration-300 ${open ? 'top-1.5 -rotate-45' : 'top-3'}`} />
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`overflow-hidden border-t border-brown/10 bg-paper transition-[max-height] duration-300 ease-out lg:hidden ${
          open ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <ul className="flex flex-col px-5 py-2 sm:px-8">
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  [
                    'block py-3 text-base tracking-wide transition-colors',
                    isActive ? 'text-ink' : 'text-brown hover:text-ink',
                  ].join(' ')
                }
              >
                {t.nav[NAV_KEY[link.to]]}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
