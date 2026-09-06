import { Gamepad2 } from 'lucide-react'
import { GITHUB_URL, ITCH_URL, games } from '@/lib/games'
import { Logo } from '@/components/logo'
import { GithubIcon } from '@/components/icons/github-icon'

const services = [
  { name: 'jar.industries', ok: true },
  ...games.map((g) => ({ name: new URL(g.playUrl).hostname, ok: g.status !== 'In Development' })),
]

export function SiteFooter() {
  return (
    <footer className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-12 sm:px-6">
      <div className="flex flex-col justify-between gap-8 md:flex-row">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2.5">
            <Logo />
            <span className="font-semibold tracking-tight">JAR Industries</span>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
            Independent game studio. Experimental prototypes, retro arcades, and web games.
          </p>
          <div className="flex gap-2 pt-1">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="JAR Industries on GitHub"
              className="inline-flex size-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              <GithubIcon className="size-4" aria-hidden="true" />
            </a>
            <a
              href={ITCH_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="JAR Industries on itch.io"
              className="inline-flex size-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              <Gamepad2 className="size-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div id="devlogs" className="flex flex-col gap-3 scroll-mt-16">
          <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Status</h2>
          <ul className="flex flex-col gap-2">
            {services.map((s) => (
              <li key={s.name} className="flex items-center gap-2.5 font-mono text-sm">
                <span
                  className={s.ok ? 'size-2 rounded-full bg-signal' : 'size-2 rounded-full bg-muted-foreground/50'}
                  aria-hidden="true"
                />
                <span className="text-foreground/90">{s.name}</span>
                <span className="text-xs text-muted-foreground">{s.ok ? 'operational' : 'building'}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-col-reverse items-start justify-between gap-3 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center">
        <p>&copy; {new Date().getFullYear()} JAR Industries. All rights reserved.</p>
        <p className="font-mono text-xs">jar.industries</p>
      </div>
    </footer>
  )
}
