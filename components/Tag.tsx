export default function Tag({ label }: { label: string }) {
  return (
    <span className="font-mono text-xs text-subtle border border-border px-2 py-0.5">
      {label}
    </span>
  )
}
