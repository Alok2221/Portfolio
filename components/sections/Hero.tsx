'use client'

import Image from 'next/image'
import { heroTechTags, cvUrlEn, cvUrlPl } from '@/lib/data'
import { AnimatedSection } from '@/components/AnimatedSection'
import { useLanguage } from '@/app/LanguageProvider'

export function Hero() {
  const { t } = useLanguage()

  return (
    <AnimatedSection id="hero" className="py-16 md:py-24">
      <div className="flex flex-col items-center gap-8 text-center md:flex-row md:items-start md:text-left">
        <div className="flex-1">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
            {t('hero.greeting')}{' '}
            <span className="text-primary-600 dark:text-primary-400">
              {t('hero.name')}
            </span>
          </h1>
          <p className="mt-4 text-xl text-slate-600 dark:text-slate-300">
            {t('hero.subtitle')}
          </p>
          <p className="mt-3 max-w-2xl whitespace-pre-line text-slate-600 dark:text-slate-400">
            {t('hero.about')}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {heroTechTags.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-700 dark:bg-primary-900/40 dark:text-primary-300"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
            <a
              href="#projekty"
              className="rounded-lg bg-primary-600 px-6 py-3 font-medium text-white hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 transition-colors"
            >
              {t('hero.viewProjects')}
            </a>
            <a
              href={cvUrlEn}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border-2 border-slate-300 px-4 py-3 font-medium text-slate-700 hover:border-primary-500 hover:text-primary-600 dark:border-slate-600 dark:text-slate-300 dark:hover:border-primary-500 dark:hover:text-primary-400 transition-colors"
            >
              {t('hero.downloadCvEn')}
            </a>
            <a
              href={cvUrlPl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border-2 border-slate-300 px-4 py-3 font-medium text-slate-700 hover:border-primary-500 hover:text-primary-600 dark:border-slate-600 dark:text-slate-300 dark:hover:border-primary-500 dark:hover:text-primary-400 transition-colors"
            >
              {t('hero.downloadCvPl')}
            </a>
          </div>
        </div>
        <div className="relative h-48 w-48 shrink-0 overflow-hidden rounded-full border-4 border-primary-200 bg-slate-200 dark:border-primary-800 dark:bg-slate-700 md:h-64 md:w-64">
          <Image
            src="/images/avatar.jpg"
            alt={t('hero.profileAlt')}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 192px, 256px"
            priority
            unoptimized
          />
        </div>
      </div>
    </AnimatedSection>
  )
}
