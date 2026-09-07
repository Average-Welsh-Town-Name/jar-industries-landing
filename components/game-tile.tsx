import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import type { Game } from '@/lib/games'

export function GameTile({ game }: { game: Game }) {
  return (
    <Link
      href={`/games/${game.slug}`}
      className="group flex flex-col overflow-hidden rounded-sm bg-white shadow-sm ring-1 ring-navy/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-navy/25"
    >
      <div className="aspect-[4/3] w-full overflow-hidden bg-black">
        <img
          src={game.image || '/placeholder.svg'}
          alt={`${game.title} cover art`}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex items-start justify-between gap-2 px-5 pt-4 pb-6">
        <h2 className="font-serif text-xl text-navy sm:text-2xl">{game.title}</h2>
        <ArrowUpRight className="mt-1 size-5 shrink-0 text-navy/30 transition-colors group-hover:text-navy" />
      </div>
    </Link>
  )
}
