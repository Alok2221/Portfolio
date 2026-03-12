'use client'

import { experience } from '@/lib/data'
import { AnimatedSection } from '@/components/AnimatedSection'
import { useLanguage } from '@/app/LanguageProvider'

export function Experience() {
  const { t } = useLanguage()

  return (
    <AnimatedSection id="doswiadczenie" className="py-20" delay={0.1}>
      {/* Education section */}
      <section className="mb-16">
        <h2 className="mb-4 text-center text-sm font-semibold tracking-[0.25em] text-slate-500 dark:text-slate-400">
          {t('education.title')}
        </h2>
        <div className="mx-auto max-w-3xl rounded-2xl bg-white/5 p-6 shadow-sm ring-1 ring-white/10 backdrop-blur-sm dark:bg-white/5 dark:ring-white/5">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">
                {t('education.schoolKUL')}
              </p>
              <p className="mt-1 text-base font-semibold text-slate-900 dark:text-slate-50">
                {t('education.degreeKUL')}
              </p>
            </div>
            <span className="text-sm text-slate-500 dark:text-slate-400">
              {t('education.periodKUL')}
            </span>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
            {t('education.detailsKUL')}
          </p>
        </div>
      </section>

      {/* Work experience section */}
      <h2 className="mb-4 text-center text-sm font-semibold tracking-[0.25em] text-slate-500 dark:text-slate-400">
        {t('experience.title')}
      </h2>
      <p className="mx-auto mb-12 max-w-3xl text-center text-3xl font-semibold text-slate-900 dark:text-white">
        {t('experience.subtitle')}
      </p>
      <div className="space-y-10">
        {experience.map((item) => {
          const bullets = t(`experience.bullets.${item.bulletsKey}`)
            .split('\n')
            .filter(Boolean)
          return (
            <div
              key={item.companyKey}
              className="rounded-2xl bg-white/5 p-6 shadow-sm ring-1 ring-white/10 backdrop-blur-sm dark:bg-white/5 dark:ring-white/5"
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
