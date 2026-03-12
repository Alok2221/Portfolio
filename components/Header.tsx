'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ThemeToggle } from '@/components/ThemeToggle'
import { LanguageToggle } from '@/components/LanguageToggle'
import { useLanguage } from '@/app/LanguageProvider'

const navHrefs = [
  { href: '#hero', key: 'home' as const },
  { href: '#projekty', key: 'projects' as const },
  { href: '#umiejetnosci', key: 'skills' as const },
  { href: '#doswiadczenie', key: 'experience' as const },
  { href: '#kontakt', key: 'contact' as const },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const { t } = useLanguage()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-900/80">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="text-lg font-semibold text-primary-600 dark:text-primary-400"
        >
          Portfolio
        </Link>

        <ul className="hidden items-center gap-6 md:flex">
          {navHrefs.map(({ href, key }) => (
            <li key={href}>
              <a
                href={href}
                className="text-slate-600 hover:text-primary-600 dark:text-slate-300 dark:hover:text-primary-400 transition-colors"
              >
                {t(`nav.${key}`)}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />
          <button
            type="button"
            className="rounded-lg p-2 text-slate-600 hover:bg-slate-200 dark:text-slate-300 dark:hover:bg-slate-700 md:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label={t('a11y.menu')}
            aria-expanded={open}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900 md:hidden">
          <ul className="flex flex-col gap-1 px-4 py-3">
            {navHrefs.map(({ href, key }) => (
              <li key={href}>
                <a
                  href={href}
                  className="block rounded-lg px-3 py-2 text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                  onClick={() => setOpen(false)}
                >
                  {t(`nav.${key}`)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
