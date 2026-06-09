import Link from 'next/link'
import Tag from './Tag'
import StatusBadge from './StatusBadge'
import type { Project } from '@/data/projects'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="relative border border-border bg-surface p-5 hover:border-muted transition-colors duration-150">
      <div className="absolute top-5 right-5">
        <StatusBadge status={project.status} />
      </div>
      <h3 className="font-sans text-lg font-medium text-primary mb-2 pr-24">
        {project.name}
      </h3>
      <p className="font-sans text-sm text-secondary leading-relaxed mb-4">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.stack.map((s) => (
          <Tag key={s} label={s} />
        ))}
      </div>
      <Link
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="font-mono text-xs text-subtle hover:text-accent transition-colors duration-150 block mt-1"
      >
        View on GitHub →
      </Link>
    </div>
  )
}
