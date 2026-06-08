import { useLang } from '../i18n/LanguageContext'

// Compact EN / 中文 / 한국어 toggle for the top-right of the nav.
export default function LanguageSwitcher({ className = '' }) {
  const { lang, setLang, langs, t } = useLang()

  return (
    <div
      className={`flex items-center gap-0.5 rounded-full border border-brown/25 p-0.5 ${className}`}
      role="group"
      aria-label={t.nav.language}
    >
      {langs.map((l) => {
        const active = l.code === lang
        return (
          <button
            key={l.code}
            type="button"
            onClick={() => setLang(l.code)}
            aria-pressed={active}
            title={l.name}
            className={[
              'rounded-full px-2.5 py-1 text-xs font-medium tracking-wide transition-colors',
              active ? 'bg-espresso text-paper' : 'text-brown hover:text-ink',
            ].join(' ')}
          >
            {l.label}
          </button>
        )
      })}
    </div>
  )
}
