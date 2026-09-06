import Image from 'next/image'
import { Code2, Play } from 'lucide-react'
import type { Game, GameStatus } from '@/lib/games'
import { cn } from '@/lib/utils'

const statusStyles: Record<GameStatus, string> = {
  'Playable Web Build': 'border-signal/40 bg-signal/10 text-signal',
  'In Development': 'border-primary/40 bg-primary/10 text-primary',
  Prototype: 'border-border bg-background/80 text-muted-foreground',
}

export function GameCard({ game }: { game: Game }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_20px_50px_-20px_var(--primary)]">
      <div className="relative aspect-video overflow-hidden border-b border-border bg-background">
        <Image
          src={game.image}
          alt={`${game.title} gameplay screenshot`}
          fill
          sizes="(min-width: 1024px) 384px, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span
          className={cn(
            'absolute left-3 top-3 rounded-full border px-2.5 py-1 font-mono text-[11px] font-medium backdrop-blur-sm',
            statusStyles[game.status],
          )}
        >
          {game.status}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-5">
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold tracking-tight">{game.title}</h3>
          <p className="text-pretty text-sm leading-relaxed text-muted-foreground">{game.description}</p>
        </div>

        <ul className="flex flex-wrap gap-1.5" aria-label="Technologies">
          {game.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-sm border border-border bg-background px-2 py-0.5 font-mono text-xs text-muted-foreground"
            >
              {tag}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex items-center justify-between gap-3 pt-2">
          <a
            href={game.playUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 flex-1 items-center justify-center gap-2 rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-[0_0_20px_-4px_var(--primary)] active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card focus-visible:outline-none sm:flex-none"
          >
            <Play className="size-3.5 fill-current" aria-hidden="true" />
            Play Now
            <span className="sr-only">: {game.title} (opens in new tab)</span>
          </a>
          <a
            href={game.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md px-2 py-1.5 text-sm text-muted-foreground transition-colors hover:text-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
          >
            <Code2 className="size-4" aria-hidden="true" />
            Source Code
            <span className="sr-only"> for {game.title}</span>
          </a>
        </div>
      </div>
    </article>
  )
}
