import { ArrowUpRight, Briefcase, CheckCircle2, Construction } from "lucide-react";
import { Link } from "react-router-dom";
import { portfolioHeroBackdrop } from "../../config/media";
import { soundEngine } from "../../utils/audioEngine";

const HIGHLIGHTS = [
  { icon: CheckCircle2, line1: "Live product", line2: "Kiduart ERP" },
  { icon: Construction, line1: "In build", line2: "Sports academy" },
  { icon: Briefcase, line1: "Client site", line2: "AGL Creatives" },
] as const;

export function PortfolioHeroSection() {
  return (
    <section
      id="portfolio-hero"
      aria-labelledby="portfolio-hero-heading"
      className="relative min-h-[min(100dvh,820px)] w-full overflow-hidden pt-28 sm:pt-32 lg:pt-36"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <img
          src={portfolioHeroBackdrop.image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-[58%_42%] lg:object-[62%_45%]"
          fetchPriority="high"
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: `rgba(${portfolioHeroBackdrop.washRgb}, ${portfolioHeroBackdrop.washOpacity})`,
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: portfolioHeroBackdrop.vignetteLayers.join(", "),
          }}
        />
        <div className="trevyk-build-together-live-bg absolute inset-0 opacity-[0.18] mix-blend-soft-light" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[calc(min(100dvh,820px)-7rem)] w-full max-w-7xl flex-col justify-center px-4 pb-14 sm:px-6 lg:px-8">
        <div className="max-w-xl lg:max-w-[36rem]">
          <div className="inline-flex w-fit max-w-full items-center gap-2 rounded-full border border-[#B9A6D1]/40 bg-[#1E1024]/85 px-4 py-1.5 font-mono-accent text-[11px] uppercase tracking-[0.2em] text-[#E8A9C2] sm:text-xs">
            <span
              className="h-2 w-2 shrink-0 rounded-full bg-[#E8A9C2] shadow-[0_0_10px_rgba(232,169,194,0.85)]"
              aria-hidden
            />
            <span>Our work</span>
          </div>

          <h1
            id="portfolio-hero-heading"
            className="mt-5 font-heading text-[clamp(1.85rem,4.6vw,3rem)] font-bold leading-[1.1] tracking-tight text-[#F8F6FB]"
          >
            Work you can{" "}
            <span className="bg-gradient-to-r from-[#F8F6FB] via-[#D4C4DC] to-[#E8A9C2] bg-clip-text text-transparent">
              verify.
            </span>
          </h1>

          <p className="mt-5 text-base leading-relaxed text-[#E7E1F0] sm:text-[17px]">
            Three projects only—each with a clear status. Live product, product
            in build, and a client website.
          </p>

          <ul className="mt-10 grid max-w-xl grid-cols-3 gap-3 sm:gap-4">
            {HIGHLIGHTS.map(({ icon: Icon, line1, line2 }) => (
              <li key={line1} className="flex flex-col items-start gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#B9A6D1]/35 bg-[#1E1024]/80 text-[#E8A9C2]">
                  <Icon
                    className="h-[1.15rem] w-[1.15rem]"
                    strokeWidth={1.65}
                    aria-hidden
                  />
                </div>
                <p className="font-heading text-[11px] font-semibold leading-snug text-[#E8A9C2] sm:text-xs">
                  {line1}
                  <br />
                  <span className="text-[#F8F6FB]">{line2}</span>
                </p>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap items-center gap-5 sm:gap-6">
            <a
              href="#portfolio-projects"
              onClick={() => soundEngine.playClick("hero")}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#E8A9C2] to-[#d892ad] px-6 py-3 font-heading text-sm font-semibold text-[#1E1024] shadow-[0_8px_24px_rgba(232,169,194,0.32)] transition hover:brightness-105"
            >
              View projects
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </a>
            <Link
              to="/contact"
              onClick={() => soundEngine.playClick("soft")}
              className="font-heading text-sm font-semibold text-[#E8A9C2] underline-offset-4 transition hover:text-[#F8F6FB] hover:underline"
            >
              Discuss your project
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
