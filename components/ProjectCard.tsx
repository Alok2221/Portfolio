'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useLanguage } from '@/app/LanguageProvider'

export type Project = {
  id?: string
  title: string
  description: string
  technologies: readonly string[]
  image: string
  github: string
  live: string | null
  features: readonly string[]
}

type ProjectCardProps = {
  project: Project
  description?: string
  index?: number
}

export function ProjectCard({ project, description, index = 0 }: ProjectCardProps) {
  const { t } = useLanguage()
  const [expanded, setExpanded] = useState(false)
  const fullDescription = description ?? project.description

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-lg dark:border-slate-700 dark:bg-slate-800/50"
    >
      <div className="relative aspect-video w-full overflow-hidden bg-slate-100 dark:bg-slate-700">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
          {project.title}
        </h3>
        <div
          className="relative mt-2 overflow-hidden transition-[max-height] duration-300 ease-out"
          style={{
            maxHeight: expanded ? '70vh' : '4.5rem',
          }}
          onMouseEnter={() => setExpanded(true)}
          onMouseLeave={() => setExpanded(false)}
        >
          <p
            className={`cursor-default text-slate-600 dark:text-slate-400 ${expanded ? 'max-h-[70vh] overflow-y-auto pr-1' : ''}`}
            onClick={() => setExpanded((e) => !e)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                setExpanded((e) => !e)
              }
            }}
            aria-expanded={expanded}
          >
            {fullDescription}
          </p>
        </div>
        {!expanded && (
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-500">
            {t('projects.hoverToExpand')}
          </p>
        )}
        <div className="mt-3 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded bg-slate-200 px-2 py-0.5 text-xs font-medium text-slate-700 dark:bg-slate-600 dark:text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-4 flex gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-slate-800 px-4 py-2 text-sm font-medium text-white hover:bg-slate-700 dark:bg-slate-700 dark:hover:bg-slate-600 transition-colors"
          >
            {t('projects.github')}
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:border-primary-500 hover:text-primary-600 dark:border-slate-600 dark:text-slate-300 dark:hover:border-primary-500 dark:hover:text-primary-400 transition-colors"
            >
              {t('projects.liveDemo')}
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}
