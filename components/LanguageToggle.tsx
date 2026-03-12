'use client'

import { useLanguage } from '@/app/LanguageProvider'

export function LanguageToggle() {
  const { locale, setLocale } = useLanguage()

  return (
    <div
      className="flex rounded-lg border border-slate-200 bg-slate-100 dark:border-slate-700 dark:bg-slate-800"
      role="group"
      aria-label="Language"
    >
      <button
        type="button"
        onClick={() => setLocale('en')}
        className={`rounded-l-md px-2.5 py-1.5 text-sm font-medium transition-colors ${
          locale === 'en'
            ? 'bg-primary-500 text-white dark:bg-primary-600'
            : 'text-slate-600 hover:bg-slate-200 dark:text-slate-400 dark:hover:bg-slate-700'
        }`}
        aria-pressed={locale === 'en'}
        aria-label="English"
      >
        ENG
      </button>
      <button
        type="button"
        onClick={() => setLocale('pl')}
        className={`rounded-r-md px-2.5 py-1.5 text-sm font-medium transition-colors ${
          locale === 'pl'
            ? 'bg-primary-500 text-white dark:bg-primary-600'
            : 'text-slate-600 hover:bg-slate-200 dark:text-slate-400 dark:hover:bg-slate-700'
        }`}
        aria-pressed={locale === 'pl'}
        aria-label="Polski"
      >
        PL
      </button>
    </div>
  )
}
