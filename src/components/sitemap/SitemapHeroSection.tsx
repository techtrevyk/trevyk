export function SitemapHeroSection() {
  return (
    <section
      id="sitemap-hero"
      aria-labelledby="sitemap-hero-heading"
      className="relative border-b border-[#6B4A87]/25 bg-[#120a14] pt-28 sm:pt-32 lg:pt-36"
    >
      <div className="mx-auto w-full max-w-7xl px-4 pb-12 sm:px-6 sm:pb-14 lg:px-8 lg:pb-16">
        <div className="flex items-center gap-4">
          <p className="font-mono-accent text-[11px] uppercase tracking-[0.22em] text-[#E8A9C2] sm:text-xs">
            Index
          </p>
          <span
            className="h-px max-w-[8rem] flex-1 bg-gradient-to-r from-[#B9A6D1]/55 to-transparent"
            aria-hidden
          />
        </div>

        <h1
          id="sitemap-hero-heading"
          className="mt-4 font-heading text-[clamp(2.25rem,5.5vw,3.75rem)] font-bold leading-[1.08] tracking-tight text-[#F8F6FB]"
        >
          Site{" "}
          <span className="bg-gradient-to-r from-[#C4A8E8] via-[#E8A9C2] to-[#F8F6FB] bg-clip-text text-transparent">
            map
          </span>
        </h1>

        <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#C4B4D8] sm:text-[17px]">
          Explore all public pages on trevyk.in. Each page is linked below so you
          can quickly find the information you&apos;re looking for. Crawlers also
          use the XML file at{" "}
          <a
            href="/sitemap.xml"
            className="text-[#E8A9C2] underline underline-offset-2 hover:text-[#F8F6FB]"
          >
            /sitemap.xml
          </a>
          .
        </p>
      </div>
    </section>
  );
}
