import { cn } from '@/lib/utils'

export function Logo({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        'grid size-8 grid-cols-2 gap-0.5 rounded-md border border-border bg-card p-1.5',
        className,
      )}
    >
      <span className="rounded-[2px] bg-foreground" />
      <span className="rounded-[2px] bg-primary" />
      <span className="rounded-[2px] bg-muted-foreground/60" />
      <span className="rounded-[2px] bg-foreground" />
    </span>
  )
}
