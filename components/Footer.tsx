import Link from 'next/link'

const links = [
  { label: 'GitHub',   href: 'https://github.com/DDOSooS' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/abdessalam-gherghouch-51084b23a/' },
  { label: 'Medium',   href: 'https://medium.com/' },
  { label: 'Twitter',  href: 'https://twitter.com/DDo__oS' },
]

export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-3xl mx-auto px-6 md:px-8 flex items-center justify-between">
        <span className="font-mono text-xs text-subtle">AG · 2026</span>
        <div className="flex items-center gap-4">
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-subtle hover:text-primary transition-colors duration-150"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
