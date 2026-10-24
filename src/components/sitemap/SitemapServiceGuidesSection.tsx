import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { GUIDES } from "../../data/guides";
import { sitemapGuideHeroImage } from "../../data/sitemapGuideImages";
import { soundEngine } from "../../utils/audioEngine";

export function SitemapServiceGuidesSection() {
  return (
    <section
      id="sitemap-service-guides"
      aria-labelledby="sitemap-service-guides-heading"
      className="relative bg-[#120a14] pb-14 sm:pb-16 lg:pb-20"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="flex items-center gap-4">
            <p className="font-mono-accent text-[11px] uppercase tracking-[0.22em] text-[#E8A9C2] sm:text-xs">
              Guides
            </p>
            <span
              className="h-px max-w-[6rem] flex-1 bg-gradient-to-r from-[#B9A6D1]/55 to-transparent"
              aria-hidden
            />
          </div>

          <h2
            id="sitemap-service-guides-heading"
            className="mt-4 font-heading text-[clamp(1.65rem,3.5vw,2.35rem)] font-bold leading-[1.12] text-[#F8F6FB]"
          >
            Detailed pages by{" "}
            <span className="bg-gradient-to-r from-[#C4A8E8] via-[#E8A9C2] to-[#F8F6FB] bg-clip-text text-transparent">
              service.
            </span>
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-[#B9A6D1] sm:text-[15px]">
            Deeper guides for the services we want to be found for—each links to
            the live page on trevyk.in.
          </p>
        </div>

        <ul className="mt-8 space-y-4 sm:mt-10">
          {GUIDES.map((guide) => {
            const href = `/work/${guide.slug}`;
            return (
              <li key={guide.slug}>
                <Link
                  to={href}
                  onClick={() => soundEngine.playClick("soft")}
                  className="group flex flex-col gap-4 rounded-2xl border border-[#B9A6D1]/28 bg-[#160A1C]/55 p-4 transition hover:border-[#E8A9C2]/45 sm:flex-row sm:items-center sm:gap-5 sm:p-5"
                >
                  <img
                    src={sitemapGuideHeroImage(guide.slug)}
                    alt=""
                    width={960}
                    height={540}
                    className="aspect-[16/10] w-full shrink-0 rounded-xl border border-[#B9A6D1]/22 object-cover object-center sm:aspect-video sm:w-[9.5rem] lg:w-[11rem]"
                    loading="lazy"
                  />

                  <div className="min-w-0 flex-1">
                    <p className="font-mono-accent text-[10px] uppercase tracking-[0.16em] text-[#E8A9C2] sm:text-[11px]">
                      /work/{guide.slug}
                    </p>
                    <h3 className="mt-1 font-heading text-lg font-semibold leading-snug text-[#F8F6FB] sm:text-xl">
                      {guide.kicker}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#B9A6D1]">
                      {guide.description}
                    </p>
                  </div>

                  <span className="flex h-9 w-9 shrink-0 items-center justify-center self-start rounded-full border border-[#B9A6D1]/35 bg-[#1E1024]/70 text-[#F8F6FB] transition group-hover:border-[#E8A9C2]/50 group-hover:text-[#E8A9C2] sm:self-center">
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
