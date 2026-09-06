import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { GamesShowcase } from '@/components/games-showcase'
import { About } from '@/components/about'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <GamesShowcase />
        <About />
      </main>
      <SiteFooter />
    </>
  )
}
