import Link from 'next/link'
import ProjectCard from '@/components/ProjectCard'
import ScrollReveal from '@/components/ScrollReveal'
import LaptopTypewriter from '@/components/LaptopTypewriter'
import { projects } from '@/data/projects'

export default function Home() {
  const featured = projects.filter((p) => p.featured)

  return (
    <>
      {/* Hero — max-w-5xl for 2-col breathing room */}
      <section className="
        flex flex-col gap-9 px-6 py-12
        md:grid md:grid-cols-2 md:items-center md:gap-12 md:px-8 md:py-0
        md:min-h-[calc(100vh-3.5rem)]
        max-w-5xl mx-auto w-full
      ">
        {/* Left: text */}
        <div className="flex flex-col">
          <p className="font-mono text-xs text-subtle uppercase tracking-wider mb-6">
            // name
          </p>
          <h1 className="font-mono text-5xl md:text-6xl font-bold tracking-tight text-white mb-4">
            Abdessalam Gherghouch
          </h1>
          <p className="font-sans text-lg font-medium text-secondary">
            Software Engineer · 1337
          </p>
          <p className="font-sans text-base italic text-subtle mt-4 mb-8">
            &quot;What if it works?&quot;
          </p>
          <div className="flex items-center gap-4 flex-wrap">
            <Link
              href="/projects"
              className="border border-primary text-primary font-mono text-sm px-5 py-2 bg-transparent hover:bg-primary hover:text-bg transition-colors duration-150"
            >
              View Projects
            </Link>
            <Link
              href="/blog"
              className="font-mono text-sm text-subtle hover:text-primary hover:underline underline-offset-4 transition-colors duration-150"
            >
              Read my writing →
            </Link>
          </div>
        </div>

        {/* Right: laptop — stacked on mobile, side-by-side on md+ */}
        <div className="flex justify-center items-center">
          <LaptopTypewriter />
        </div>
      </section>

      {/* Content sections — back to max-w-3xl */}
      <div className="max-w-3xl mx-auto px-6 md:px-8">

        {/* About */}
        <ScrollReveal>
          <section className="py-16">
            <p className="font-mono text-xs text-subtle uppercase tracking-wider mb-3">
              // about
            </p>
            <h2 className="font-sans text-2xl font-semibold text-primary mb-1">
              I build things to find out if they work.
            </h2>
            <div className="border-t border-border mt-4 mb-6" />
            <div className="space-y-4 font-sans text-base text-secondary leading-relaxed">
              <p>
                I&apos;m a software engineer trained at 1337 — part of the 42 network — where
                you learn by building, breaking, and starting over. My background runs from
                low-level systems in C and C++ to web infrastructure and, now, applied AI.
              </p>
              <p>
                Right now I&apos;m focused on tools that make thinking and research faster.
                myWikiCLI implements Andrej Karpathy&apos;s second brain concept as a
                command-line tool. My AI Strategy Research Assistant turns a single business
                question into a multi-agent research process that outputs a structured report
                with citations — because consultants shouldn&apos;t spend 60% of their time
                gathering information.
              </p>
              <p>I write on Medium about what I&apos;m building and why.</p>
            </div>
            <div className="flex items-center gap-4 mt-6">
              <Link
                href="https://github.com/DDOSooS"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-subtle hover:text-accent transition-colors duration-150"
              >
                GitHub
              </Link>
              <span className="text-muted font-mono text-xs">·</span>
              <Link
                href="https://www.linkedin.com/in/abdessalam-gherghouch-51084b23a/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-subtle hover:text-accent transition-colors duration-150"
              >
                LinkedIn
              </Link>
              <span className="text-muted font-mono text-xs">·</span>
              <Link
                href="https://medium.com/@DDo__oS"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-subtle hover:text-accent transition-colors duration-150"
              >
                Medium
              </Link>
            </div>
          </section>
        </ScrollReveal>

        {/* Selected Projects */}
        <ScrollReveal>
          <section className="py-16">
            <p className="font-mono text-xs text-subtle uppercase tracking-wider mb-3">
              // projects
            </p>
            <h2 className="font-sans text-2xl font-semibold text-primary mb-1">
              Selected work.
            </h2>
            <div className="border-t border-border mt-4 mb-6" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {featured.map((p) => (
                <ProjectCard key={p.name} project={p} />
              ))}
            </div>
            <div className="mt-8 flex justify-end">
              <Link
                href="/projects"
                className="font-mono text-xs text-subtle hover:text-primary transition-colors duration-150"
              >
                View all projects →
              </Link>
            </div>
          </section>
        </ScrollReveal>

        {/* Contact */}
        <ScrollReveal>
          <section className="py-16">
            <p className="font-mono text-xs text-subtle uppercase tracking-wider mb-3">
              // contact
            </p>
            <h2 className="font-sans text-2xl font-semibold text-primary mb-1">
              Let&apos;s talk.
            </h2>
            <div className="border-t border-border mt-4 mb-6" />
            <p className="font-sans text-base text-secondary leading-relaxed mb-6">
              I&apos;m open to conversations about interesting problems, collaborations, or
              roles where building is the job.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:abde.gherofficiel@gmail.com"
                className="font-mono text-sm text-subtle hover:text-accent transition-colors duration-150 w-fit"
              >
                abde.gherofficiel@gmail.com
              </a>
              <Link
                href="https://www.linkedin.com/in/abdessalam-gherghouch-51084b23a/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm text-subtle hover:text-accent transition-colors duration-150 w-fit"
              >
                Reach out on LinkedIn →
              </Link>
            </div>
          </section>
        </ScrollReveal>

      </div>
    </>
  )
}
