import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-3.5rem)] flex items-center justify-center px-6">
      <div className="text-center">
        <p className="font-mono text-xs text-subtle uppercase tracking-wider mb-3">
          // 404
        </p>
        <h1 className="font-sans text-2xl font-semibold text-primary mb-6">
          Nothing here.
        </h1>
        <Link
          href="/"
          className="font-mono text-sm text-subtle hover:text-primary transition-colors duration-150"
        >
          ← Back home
        </Link>
      </div>
    </div>
  )
}
