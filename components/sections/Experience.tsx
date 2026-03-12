'use client'

import { experience } from '@/lib/data'
import { AnimatedSection } from '@/components/AnimatedSection'
import { useLanguage } from '@/app/LanguageProvider'

export function Experience() {
  const { t } = useLanguage()

  return (
    <AnimatedSection id="doswiadczenie" className="py-16" delay={0.1}>
      <h2 className="mb-10 text-3xl font-bold text-slate-900 dark:text-white">
        {t('experience.title')}
      </h2>
      <div className="space-y-10">
        {experience.map((item) => {
          const bullets = t(`experience.bullets.${item.bulletsKey}`)
            .split('\n')
            .filter(Boolean)
          return (
            <div
              key={item.companyKey}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800/50"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-xl font-semibold text-primary-600 dark:text-primary-400">
                  {t(`experience.role.${item.roleKey}`)} · {t(`experience.company.${item.companyKey}`)}
                </h3>
                <span className="text-sm text-slate-500 dark:text-slate-400">
                  {t(`experience.dateRange.${item.dateRangeKey}`)}
                </span>
              </div>
              <ul className="mt-4 list-inside list-disc space-y-1 text-slate-600 dark:text-slate-400">
                {bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    </AnimatedSection>
  )
}
