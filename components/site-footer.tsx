export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy text-beige">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-12 px-[8vw] py-[8vh] md:grid-cols-[1.5fr_1fr] md:px-8">
        {/* About blurb */}
        <section className="flex flex-col gap-5">
          <div className="flex items-center gap-3">
            <img
              src="/jar-mark.png"
              alt="JAR Industries jelly jar logo"
              className="size-10 object-contain"
            />
            <span className="font-serif text-2xl tracking-tight">JAR Industries</span>
          </div>
          <h2 className="font-serif text-xl text-beige/90">About the studio</h2>
          <p className="max-w-prose leading-relaxed text-beige/70">
            {
              '[Placeholder] JAR Industries is an independent game studio building experimental web and indie games from scratch. We prototype fast, test wild mechanics, and ship our projects out into the world. This blurb is placeholder copy \u2014 update it with the studio\u2019s real story, mission, and voice.'
            }
          </p>
        </section>

        {/* Links */}
        <nav aria-label="Footer" className="flex flex-col gap-3">
          <h2 className="font-serif text-xl text-beige/90">Elsewhere</h2>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit text-beige/70 transition-colors hover:text-beige"
          >
            GitHub
          </a>
          <a
            href="https://itch.io"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit text-beige/70 transition-colors hover:text-beige"
          >
            itch.io
          </a>
        </nav>
      </div>

      <div className="border-t border-beige/15">
        <div className="mx-auto max-w-[1600px] px-[8vw] py-6 md:px-8">
          <p className="text-sm text-beige/60">
            {`\u00A9 ${year} JAR Industries. All rights reserved.`}
          </p>
        </div>
      </div>
    </footer>
  )
}
