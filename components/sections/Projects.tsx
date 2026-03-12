'use client'

import { projects } from '@/lib/data'
import { ProjectCard } from '@/components/ProjectCard'
import { AnimatedSection } from '@/components/AnimatedSection'
import { useLanguage } from '@/app/LanguageProvider'

export function Projects() {
  const { t } = useLanguage()

  return (
    <AnimatedSection id="projekty" className="py-16" delay={0.1}>
      <h2 className="mb-10 text-3xl font-bold text-slate-900 dark:text-white">
        {t('projects.title')}
      </h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
