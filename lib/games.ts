export type Game = {
  slug: string
  title: string
  description: string
  image: string
  playUrl: string
}

export const GITHUB_URL = 'https://github.com/jar-industries'

export const games: Game[] = [
  {
    slug: 'hegemony',
    title: 'Hegemony',
    description:
      'A grand-strategy game of borders, banners, and ambition. Command armies, hold territory, and outmaneuver rival powers for control of the map.',
    image: '/games/hegemony.png',
    playUrl: 'https://hegemony.jar.industries',
  },
  {
    slug: 'rex-run',
    title: 'Rex Run',
    description:
      'A fast retro endless runner. Leap the cacti, chase the high score, and see how far the rex can run before dusk catches up.',
    image: '/games/rex-run.png',
    playUrl: 'https://rex.jar.industries',
  },
]
