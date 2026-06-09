type Status = 'LIVE' | 'WIP' | 'ARCHIVED' | 'COMPLETED'

const dot: Record<Status, string> = {
  LIVE:      'bg-accent',
  WIP:       'bg-[#EF9F27]',
  ARCHIVED:  'bg-muted',
  COMPLETED: 'bg-[#6B6B6B]',
}

const label: Record<Status, string> = {
  LIVE:      'text-accent',
  WIP:       'text-[#EF9F27]',
  ARCHIVED:  'text-subtle',
  COMPLETED: 'text-subtle',
}

export default function StatusBadge({ status }: { status: Status }) {
  return (
    <span className={`flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider ${label[status]}`}>
      <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${dot[status]}`} />
      {status}
    </span>
  )
}
