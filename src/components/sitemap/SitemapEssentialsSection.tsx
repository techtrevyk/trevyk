import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { SITEMAP_ESSENTIALS } from "../../data/sitemapEssentials";
import { soundEngine } from "../../utils/audioEngine";

export function SitemapEssentialsSection() {
  return (
    <section
      id="sitemap-essentials"
      aria-labelledby="sitemap-essentials-heading"
      className="relative bg-[#120a14] py-12 sm:py-14 lg:py-16"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="flex items-center gap-4">
            <p className="font-mono-accent text-[11px] uppercase tracking-[0.22em] text-[#E8A9C2] sm:text-xs">
              Main pages
            </p>
            <span
              className="h-px max-w-[6rem] flex-1 bg-gradient-to-r from-[#B9A6D1]/55 to-transparent"
              aria-hidden
            />
          </div>

          <h2
            id="sitemap-essentials-heading"
            className="mt-4 font-heading text-[clamp(1.65rem,3.5vw,2.35rem)] font-bold leading-[1.12] text-[#F8F6FB]"
          >
            Explore the{" "}
            <span className="bg-gradient-to-r from-[#C4A8E8] via-[#E8A9C2] to-[#F8F6FB] bg-clip-text text-transparent">
              essentials.
            </span>
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-[#B9A6D1] sm:text-[15px]">
            Core pages that introduce Trevyk, our services, products, and how to
            get in touch.
          </p>
        </div>

        <ul className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {SITEMAP_ESSENTIALS.map((page, index) => {
              const Icon = page.icon;
              const num = String(index + 1).padStart(2, "0");
              return (
                <li key={page.path}>
                  <Link
                    to={page.path}
                    onClick={() => soundEngine.playClick("soft")}
                    className="group relative flex h-full min-h-[10.5rem] flex-col rounded-2xl border border-[#B9A6D1]/28 bg-[#160A1C]/55 p-4 transition hover:border-[#E8A9C2]/45 sm:min-h-[11rem] sm:p-5"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <span className="font-mono-accent text-[11px] tracking-[0.14em] text-[#B9A6D1]/90">
                        {num}
                      </span>
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#B9A6D1]/35 bg-[#1E1024]/70 text-[#F8F6FB] transition group-hover:border-[#E8A9C2]/50 group-hover:text-[#E8A9C2]">
                        <ArrowUpRight className="h-4 w-4" aria-hidden />
                      </span>
                    </div>

                    <div className="mt-4 flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#E8A9C2]/30 bg-[#55356a]/75 text-[#F8F6FB]">
                        <Icon className="h-[1.1rem] w-[1.1rem]" strokeWidth={1.65} aria-hidden />
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-heading text-base font-semibold leading-snug text-[#F8F6FB]">
                          {page.label}
                        </h3>
                        <p className="mt-1.5 text-[13px] leading-relaxed text-[#B9A6D1]">
                          {page.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                </li>
              );
            })}
        </ul>
      </div>
    </section>
  );
}
