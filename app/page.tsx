import { TypingTitle } from '@/components/typing-title'
import { GameTile } from '@/components/game-tile'
import { games } from '@/lib/games'

export default function Page() {
  return (
    <>
      {/* Navy "pull-away" band that the beige foreground scrolls over */}
      <header className="fixed inset-x-0 top-0 z-0 flex h-[20vh] items-end justify-center bg-navy pb-[2.5vh]">
        <TypingTitle />
      </header>

      {/* Beige foreground covering 80% of the page */}
      <main className="relative z-10 mt-[20vh] min-h-[80vh] bg-beige pt-[10vh] pb-[14vh]">
        <div className="grid grid-cols-1 gap-10 px-[8vw] sm:grid-cols-2 md:grid-cols-3 md:gap-[5vw] md:px-[15vw]">
          {games.map((game) => (
            <GameTile key={game.slug} game={game} />
          ))}
        </div>
      </main>
    </>
  )
}
