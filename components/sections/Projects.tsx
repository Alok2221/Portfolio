'use client'

import { projects } from '@/lib/data'
import { ProjectCard } from '@/components/ProjectCard'
import { AnimatedSection } from '@/components/AnimatedSection'
import { useLanguage } from '@/app/LanguageProvider'

export function Projects() {
  const { t } = useLanguage()

  return (
    <AnimatedSection id="projekty" className="py-20" delay={0.1}>
      <h2 className="mb-4 text-center text-sm font-semibold tracking-[0.25em] text-slate-500 dark:text-slate-400">
        {t('projects.title')}
      </h2>
      <p className="mx-auto mb-12 max-w-3xl text-center text-3xl font-semibold text-slate-900 dark:text-white">
        Portfolio projects selected to show the breadth of my backend and full‑stack experience.
      </p>
      <div className="space-y-10">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            description={
              project.id
                ? t(`projects.descriptions.${project.id}`)
                : undefined
            }
            index={index}
          />
        ))}
      </div>
    </AnimatedSection>
  )
}
