'use client'

import { techKnowledge } from '@/lib/data'
import { AnimatedSection } from '@/components/AnimatedSection'
import { useLanguage } from '@/app/LanguageProvider'

const BULLET_SECTIONS = [
  'frameworksBackend',
  'frontendAngular',
  'databases',
  'tests',
  'devops',
  'methodologies',
] as const

export function Skills() {
  const { t } = useLanguage()

  return (
    <AnimatedSection id="umiejetnosci" className="py-20" delay={0.1}>
      <h2 className="mb-4 text-center text-sm font-semibold tracking-[0.25em] text-slate-500 dark:text-slate-400">
        {t('skills.title')}
      </h2>
      <p className="mx-auto mb-12 max-w-3xl text-center text-3xl font-semibold text-slate-900 dark:text-white">
        A structured overview of the technologies and practices I use every day.
      </p>

      {/* Tabela: znajomość technologii */}
      <section className="mb-12">
        <h3 className="mb-4 text-lg font-semibold uppercase tracking-[0.16em] text-slate-700 dark:text-slate-200">
          {t('skills.techTitle')}
        </h3>
        <div className="overflow-x-auto rounded-2xl bg-white/5 p-2 ring-1 ring-white/10 backdrop-blur-sm dark:bg-white/5 dark:ring-white/5">
          <table className="w-full min-w-[600px] text-left text-sm">
            <thead>
                <tr className="border-b border-slate-200/30 bg-white/5 dark:border-slate-700/60 dark:bg-slate-900/40">
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-white">
                  {t('skills.techColumns.technology')}
                </th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-white">
                  {t('skills.techColumns.level')}
                </th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-white">
                  {t('skills.techColumns.scope')}
                </th>
              </tr>
            </thead>
            <tbody>
              {techKnowledge.map((row) => (
                <tr key={row.id} className="border-b border-slate-100/20 dark:border-slate-700/50">
                  <td className="px-4 py-3 font-medium text-slate-800 dark:text-slate-200">
                    {t(`skills.tech.${row.id}.name`)}
                  </td>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-400">
                    {t(`skills.levels.${row.level}`)}
                  </td>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-400">
                    {t(`skills.tech.${row.id}.scope`)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Sekcje z listami (frameworki, frontend, bazy, testy, devops, metodyki) */}
      {BULLET_SECTIONS.map((sectionKey) => {
        const bullets = t(`skills.bullets.${sectionKey}`)
          .split('\n')
          .filter(Boolean)
        return (
          <section key={sectionKey} className="mb-10">
            <h3 className="mb-3 text-lg font-semibold text-primary-600 dark:text-primary-400">
              {t(`skills.sections.${sectionKey}`)}
            </h3>
            <ul className="list-inside list-disc space-y-1 text-slate-600 dark:text-slate-400">
              {bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
          </section>
        )
      })}

      {/* Soft skills */}
      <section>
        <h3 className="mb-3 text-lg font-semibold text-primary-600 dark:text-primary-400">
          {t('skills.sections.softSkills')}
        </h3>
        <ul className="list-inside list-disc space-y-1 text-slate-600 dark:text-slate-400">
          {t('skills.bullets.softSkills')
            .split('\n')
            .filter(Boolean)
            .map((bullet, i) => (
              <li key={i}>{bullet}</li>
            ))}
        </ul>
      </section>
    </AnimatedSection>
  )
}
