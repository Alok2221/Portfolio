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
      className="group overflow-hidden rounded-2xl bg-white/5 shadow-sm ring-1 ring-white/10 backdrop-blur-sm transition-transform transition-shadow hover:-translate-y-1 hover:shadow-xl hover:ring-white/30 dark:bg-white/5 dark:ring-white/5"
    >
      <div className="relative aspect-video w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 960px"
          priority={index === 0}
        />
      </div>
      <div className="p-6 sm:p-7">
        <h3 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">
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
            className={`cursor-default text-sm leading-relaxed text-slate-700 dark:text-slate-300 ${expanded ? 'max-h-[70vh] overflow-y-auto pr-1' : ''}`}
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
          <p className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500">
            {t('projects.hoverToExpand')}
          </p>
        )}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-slate-900 px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white hover:bg-slate-700 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200 transition-colors"
          >
            {t('projects.github')}
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-slate-300 px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-800 hover:border-primary-500 hover:text-primary-600 dark:border-slate-600 dark:text-slate-200 dark:hover:border-primary-500 dark:hover:text-primary-300 transition-colors"
            >
              {t('projects.liveDemo')}
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}
