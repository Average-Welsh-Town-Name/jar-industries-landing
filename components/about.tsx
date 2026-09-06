import { FlaskConical, GitBranch, Terminal } from 'lucide-react'

const principles = [
  {
    icon: Terminal,
    title: 'Built from scratch',
    body: 'No heavyweight engines. Rendering, input, and audio are written by hand so every frame is understood.',
  },
  {
    icon: FlaskConical,
    title: 'Mechanics first',
    body: 'Every game starts as a prototype that tests one idea. If the loop is fun in a grey box, it gets art.',
  },
  {
    icon: GitBranch,
    title: 'Open source by default',
    body: 'Source lives on GitHub from commit one. Fork it, read it, or ship your own build.',
  },
]

export function About() {
  return (
    <section id="about" className="scroll-mt-16 border-b border-border">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
        <div className="flex flex-col gap-4">
          <p className="font-mono text-xs uppercase tracking-widest text-primary">Studio ethos</p>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Small studio. Fast iterations. Public code.
          </h2>
          <p className="text-pretty leading-relaxed text-muted-foreground">
            JAR Industries is an independent studio building indie games from the ground up. We prototype quickly,
            stress-test game mechanics in the open, and deploy everything as open-source projects to GitHub — so the
            games are playable the moment they compile, and the code is readable the moment they ship.
          </p>
        </div>

        <ul className="flex flex-col divide-y divide-border rounded-lg border border-border bg-card">
          {principles.map(({ icon: Icon, title, body }) => (
            <li key={title} className="group flex gap-4 p-5 transition-colors hover:bg-accent/50">
              <span className="mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-md border border-border bg-background text-muted-foreground transition-colors group-hover:border-primary/40 group-hover:text-primary">
                <Icon className="size-4" aria-hidden="true" />
              </span>
              <div className="flex flex-col gap-1">
                <h3 className="font-medium">{title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
