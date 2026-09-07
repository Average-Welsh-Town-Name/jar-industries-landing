export type Game = {
  slug: string
  title: string
  description: string
  image: string
  hero: string
  playUrl: string
}

export const GITHUB_URL = 'https://github.com/jar-industries'

export const games: Game[] = [
  {
    slug: 'hegemony',
    title: 'Hegemony',
    description:
      "Hegemonic is an adjective that is used to describe absolute dominance over a region, people, or domain. In this grand strategy game, you can solidify your hegemony over the nations of the world, rising to meet your grand ambitions, or serving as a stepping stone for someone else's.",
    image: '/games/hegemony-cover.png',
    hero: '/games/hegemony-hero.png',
    playUrl: 'https://hegemony.jar.industries',
  },
  {
    slug: 'rex-run',
    title: 'Rex Run',
    description:
      'Civilization has crumbled. The world is over. Yet a new life begins. Dinosaurs have overrun the lands, and as the last humans, it is your duty to escape. Can you outlive Henderson? Or shall you become his meal?',
    image: '/games/rex-run-cover.png',
    hero: '/games/rex-run-hero.png',
    playUrl: 'https://rexrun.jar.industries',
  },
  {
    slug: 'hockey-pong',
    title: 'Hockey Pong',
    description:
      'Pong is one of the most well known yet simple games in the world. But what if it were hockey?',
    image: '/games/hockey-pong-cover.png',
    hero: '/games/hockey-pong-hero.png',
    playUrl: 'https://hockeypong.jar.industries',
  },
]
