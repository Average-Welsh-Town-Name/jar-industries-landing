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
      <div className="mx-auto flex min-h-dvh max-w-[1600px] flex-col gap-10 px-[6vw] py-[8vh] md:flex-row md:items-center md:gap-12 md:px-8">
        <div className="md:w-[60%]">
          <img
            src={game.hero || '/placeholder.svg'}
            alt={`${game.title} screenshot`}
            className="aspect-[4/3] w-full rounded-sm object-cover shadow-xl ring-1 ring-navy/10"
          />
        </div>

        <div className="flex flex-col gap-6 md:w-[40%]">
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
