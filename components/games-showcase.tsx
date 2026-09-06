import { games } from '@/lib/games'
import { GameCard } from '@/components/game-card'

export function GamesShowcase() {
  return (
    <section id="games" className="scroll-mt-16 border-b border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-20 sm:px-6 md:py-28">
        <div className="flex flex-col gap-3">
          <p className="font-mono text-xs uppercase tracking-widest text-primary">Featured games</p>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Playable in your browser. No install, no launcher.
          </h2>
          <p className="max-w-2xl text-pretty leading-relaxed text-muted-foreground">
            Every project ships as a web build first. Open a link, hit play, and read the source if you want to see
            how it works.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {games.map((game) => (
            <GameCard key={game.slug} game={game} />
          ))}
        </div>
      </div>
    </section>
  )
}
