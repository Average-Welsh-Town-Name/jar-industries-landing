export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy text-beige">
      <div className="mx-auto max-w-[1600px] px-[8vw] py-[8vh] md:px-8">
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
          <p className="max-w-prose leading-relaxed text-beige/70">
            {
              'Industry is the act of building something from nothing. At JAR Industries, we take curious ideas and turn them into games. We prototype freely, try things that might not work, and ship the ones that do. Some become worlds. Some become lessons. Will the next one be yours to play?'
            }
          </p>
        </section>
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
