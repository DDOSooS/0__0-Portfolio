import Link from 'next/link'
import LogoCanvas from './LogoCanvas'

export default function Nav() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-bg/80 backdrop-blur-sm border-b border-[#2A2A2A] h-14 flex items-center">
      <div className="max-w-5xl mx-auto w-full px-6 md:px-8 flex items-center justify-between">
        <Link href="/" className="flex items-center opacity-90 hover:opacity-100 transition-opacity duration-150" aria-label="Home">
          <LogoCanvas size={52} />
        </Link>
        <div className="flex items-center gap-4 md:gap-7">
          <Link
            href="/projects"
            className="font-mono text-[11px] md:text-[12px] text-subtle hover:text-primary transition-colors duration-150"
          >
            Projects
          </Link>
          <Link
            href="/blog"
            className="font-mono text-[11px] md:text-[12px] text-subtle hover:text-primary transition-colors duration-150"
          >
            Blog
          </Link>
          <Link
            href="https://github.com/DDOSooS"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[11px] md:text-[12px] text-white hover:text-accent transition-colors duration-150"
          >
            GitHub ↗
          </Link>
        </div>
      </div>
    </nav>
  )
}
