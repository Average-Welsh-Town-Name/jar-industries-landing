import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { games } from '@/lib/games'

export function generateStaticParams() {
  return games.map((game) => ({ slug: game.slug }))
}

export default async function GamePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const game = games.find((g) => g.slug === slug)
  if (!game) notFound()

  return (
    <main className="min-h-dvh bg-beige text-navy">
      <div className="mx-auto flex min-h-dvh max-w-6xl flex-col gap-10 px-[8vw] py-[8vh] md:flex-row md:items-center md:gap-14 md:px-10">
        <div className="md:w-1/2">
          <img
            src={game.image || '/placeholder.svg'}
            alt={`${game.title} cover art`}
            className="w-full rounded-sm object-cover shadow-xl ring-1 ring-navy/10"
          />
        </div>

        <div className="flex flex-col gap-6 md:w-1/2">
          <Link
            href="/"
            className="inline-flex w-fit items-center gap-2 font-mono text-xs uppercase tracking-widest text-navy/50 transition-colors hover:text-navy"
          >
            <ArrowLeft className="size-4" />
            All games
          </Link>

          <h1 className="font-serif text-4xl leading-tight text-navy md:text-5xl">{game.title}</h1>

          <p className="max-w-prose text-pretty leading-relaxed text-navy/75">
            {game.description}
          </p>

          <a
            href={game.playUrl}
            className="group inline-flex w-fit items-center gap-2 rounded-sm bg-navy px-6 py-3 font-mono text-sm text-beige transition-colors hover:bg-navy/85"
          >
            Play Now
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </main>
  )
}
