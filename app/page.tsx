import { ArrowUpRight } from 'lucide-react'
import { Logo } from '@/components/logo'

export default function Page() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center gap-8 px-6 text-center">
      <div className="flex items-center gap-3">
        <Logo />
        <span className="font-mono text-sm tracking-widest text-muted-foreground">
          JAR INDUSTRIES
        </span>
      </div>

      <h1 className="text-balance font-sans text-4xl font-semibold tracking-tight sm:text-5xl">
        Hegemony
      </h1>

      <a
        href="https://hegemony.jar.industries"
        className="group inline-flex items-center gap-2 rounded-md border border-border bg-card px-6 py-3 font-mono text-sm text-foreground transition-colors hover:border-primary hover:text-primary"
      >
        Play Now
        <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </a>
    </main>
  )
}
