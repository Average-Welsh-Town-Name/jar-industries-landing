import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { GITHUB_URL, games } from '@/lib/games'

export function Hero() {
  const playable = games.filter((g) => g.status === 'Playable Web Build').length

  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" aria-hidden="true" />
      <div className="relative mx-auto flex max-w-6xl flex-col items-start gap-8 px-4 py-24 sm:px-6 md:py-32 lg:py-40">
        <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 font-mono text-xs text-muted-foreground">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-signal opacity-60" />
            <span className="relative inline-flex size-2 rounded-full bg-signal" />
          </span>
          {playable} web build{playable === 1 ? '' : 's'} live · all systems nominal
        </p>

        <h1 className="max-w-3xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Building the next generation of web &amp; indie games.
        </h1>

        <p className="max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          A showcase of experimental prototypes, retro arcades, and web games built by JAR Industries.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href="#games"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-[0_0_28px_-6px_var(--primary)] active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none"
          >
            Explore Games
            <ArrowDown className="size-4" aria-hidden="true" />
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex h-11 items-center justify-center gap-2 rounded-md border border-border bg-card px-6 text-sm font-medium transition-colors hover:border-primary/50 hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none"
          >
            View on GitHub
            <ArrowUpRight
              className="size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </section>
  )
}
