import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog — Abdessalam Gherghouch',
}

export default function BlogPage() {
  return (
    <div className="min-h-[calc(100vh-3.5rem)] flex items-center justify-center px-6">
      <div className="max-w-sm w-full">
        <p className="font-mono text-xs text-subtle uppercase tracking-wider mb-3">
          // blog
        </p>
        <h1 className="font-sans text-2xl font-semibold text-primary mb-4">
          Writing is thinking out loud.
        </h1>
        <p className="font-sans text-sm text-secondary leading-relaxed mb-6">
          I write about what I&apos;m building — the decisions, the dead ends, and
          occasionally the thing that actually worked.
        </p>
        <p className="font-sans text-sm italic text-subtle mb-8">&quot;What if it works?&quot;</p>
        <Link
          href="https://medium.com/@DDo__oS"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xs text-subtle hover:text-accent transition-colors duration-150 block mb-3"
        >
          Read current writing on Medium →
        </Link>
        <p className="font-mono text-xs text-subtle">New posts coming here soon.</p>
      </div>
    </div>
  )
}
