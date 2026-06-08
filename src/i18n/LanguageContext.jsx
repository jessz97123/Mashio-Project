import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { T, LANGS } from './translations'

const STORAGE_KEY = 'mashio-lang'
const LanguageContext = createContext(null)

// Deep-merge so any key missing in a language falls back to English.
function deepMerge(base, over) {
  if (Array.isArray(base)) return over ?? base
  if (typeof base !== 'object' || base === null) return over ?? base
  const out = { ...base }
  for (const k of Object.keys(base)) {
    out[k] = over && k in over ? deepMerge(base[k], over[k]) : base[k]
  }
  return out
}

function getInitialLang() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved && LANGS.some((l) => l.code === saved)) return saved
    const nav = (navigator.language || 'en').toLowerCase()
    if (nav.startsWith('zh')) return 'zh'
    if (nav.startsWith('ko')) return 'ko'
  } catch {
    /* ignore */
  }
  return 'en'
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(getInitialLang)

  const setLang = (code) => {
    setLangState(code)
    try {
      localStorage.setItem(STORAGE_KEY, code)
    } catch {
      /* ignore */
    }
  }

  useEffect(() => {
    document.documentElement.lang = lang === 'zh' ? 'zh-Hans' : lang
  }, [lang])

  const t = useMemo(() => deepMerge(T.en, T[lang]), [lang])

  const value = useMemo(() => ({ lang, setLang, t, langs: LANGS }), [lang, t])
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLang() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLang must be used within LanguageProvider')
  return ctx
}
