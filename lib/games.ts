export type GameStatus = 'Playable Web Build' | 'Prototype' | 'In Development'

export type Game = {
  slug: string
  title: string
  description: string
  status: GameStatus
  tags: string[]
  image: string
  playUrl: string
  sourceUrl: string
}

export const GITHUB_URL = 'https://github.com/jar-industries'
export const ITCH_URL = 'https://jar-industries.itch.io'

export const games: Game[] = [
  {
    slug: 'orbital-drift',
    title: 'Orbital Drift',
    description:
      'Slingshot a tiny ship between gravity wells. One thruster, no brakes — plan your burns and ride momentum through 40 handcrafted orbits.',
    status: 'Playable Web Build',
    tags: ['HTML5 Canvas', 'JavaScript', 'Render.com'],
    image: '/games/orbital-drift.png',
    playUrl: 'https://orbital.jar.industries',
    sourceUrl: `${GITHUB_URL}/orbital-drift`,
  },
  {
    slug: 'cyber-vault',
    title: 'Cyber Vault',
    description:
      'A top-down heist puzzler. Route power through circuits, time laser grids, and crack the vault before the patrol loop resets.',
    status: 'In Development',
    tags: ['TypeScript', 'WebGL', 'Vite'],
    image: '/games/cyber-vault.png',
    playUrl: 'https://vault.jar.industries',
    sourceUrl: `${GITHUB_URL}/cyber-vault`,
  },
  {
    slug: 'retro-blaster',
    title: 'Retro Blaster',
    description:
      'Fixed-screen shoot-em-up with a twist: enemy waves are generated from your previous run. Pure 8-bit, 60fps, gamepad ready.',
    status: 'Prototype',
    tags: ['HTML5 Canvas', 'JavaScript', 'Web Audio'],
    image: '/games/retro-blaster.png',
    playUrl: 'https://blaster.jar.industries',
    sourceUrl: `${GITHUB_URL}/retro-blaster`,
  },
]

export const latestGame = games.find((g) => g.status === 'Playable Web Build') ?? games[0]
