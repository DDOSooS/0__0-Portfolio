import type { Metadata } from 'next'
import ProjectCard from '@/components/ProjectCard'
import StatusBadge from '@/components/StatusBadge'
import Tag from '@/components/Tag'
import { projects } from '@/data/projects'

export const metadata: Metadata = {
  title: 'Projects — Abdessalam Gherghouch',
}

export default function ProjectsPage() {
  const detailed = projects.filter((p) => p.longDescription)
  const grid = projects.filter((p) => !p.longDescription)

  return (
    <div className="max-w-3xl mx-auto px-6 md:px-8">
      {/* Header */}
      <section className="pt-20 pb-4">
        <p className="font-mono text-xs text-subtle uppercase tracking-wider mb-3">
          // projects
        </p>
        <h1 className="font-sans text-2xl font-semibold text-primary mb-2">
          Things I&apos;ve built.
        </h1>
        <p className="font-sans text-sm text-secondary leading-relaxed">
          Systems programming, web infrastructure, and AI tools — roughly in the order I
          learned to think.
        </p>
        <div className="border-t border-border mt-6" />
      </section>

      {/* Featured — full detail */}
      <section className="py-12 space-y-8">
        {detailed.map((p) => (
          <div key={p.name} className="border border-border bg-surface p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                {p.type && (
                  <p className="font-mono text-xs text-subtle uppercase tracking-wider mb-2">
                    {p.type}
                  </p>
                )}
                <h2 className="font-sans text-xl font-semibold text-primary">{p.name}</h2>
              </div>
              <div className="shrink-0 pt-1">
                <StatusBadge status={p.status} />
              </div>
            </div>
            <div className="border-t border-border my-5" />
            <div className="space-y-3 font-sans text-sm text-secondary leading-relaxed mb-5">
              {p.longDescription!.split('\n\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 mb-5">
              {p.stack.map((s) => (
                <Tag key={s} label={s} />
              ))}
            </div>
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-subtle hover:text-accent transition-colors duration-150"
            >
              View on GitHub →
            </a>
          </div>
        ))}
      </section>

      {/* All projects grid */}
      <section className="pb-20">
        <div className="mt-12 pt-8 border-t border-border mb-6">
          <p className="font-mono text-xs text-subtle uppercase tracking-wider">
            // all projects
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {grid.map((p) => (
            <ProjectCard key={p.name} project={p} />
          ))}
        </div>
      </section>
    </div>
  )
}
