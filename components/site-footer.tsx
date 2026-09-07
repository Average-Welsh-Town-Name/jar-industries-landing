export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy text-beige">
      <div className="mx-auto max-w-[1600px] px-[8vw] py-[8vh] md:px-8">
        {/* About blurb */}
        <section className="flex flex-col gap-5">
          <p className="max-w-prose leading-relaxed text-beige/70">
            {
              'This is the place where I put all my games and other miscellaneous things. Don\u2019t expect updates, but new things may pop up from time to time.'
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
