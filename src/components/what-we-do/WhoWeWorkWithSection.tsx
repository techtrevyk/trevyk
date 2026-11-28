import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { INDUSTRY_SOLUTIONS } from "../../data/industries";
import { soundEngine } from "../../utils/audioEngine";

/** Compact industry strip for What we do — not on the home hero. */
export function WhoWeWorkWithSection() {
  return (
    <section
      id="who-we-work-with"
      aria-labelledby="who-we-work-with-heading"
      className="relative scroll-mt-28 border-t border-[#6B4A87]/30 bg-[#160a1c] py-14 sm:py-16 lg:py-20"
    >
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <p className="font-mono-accent text-[11px] uppercase tracking-[0.28em] text-[#E8A9C2]">
              Who we work with
            </p>
            <h2
              id="who-we-work-with-heading"
              className="mt-3 font-heading text-2xl font-bold leading-tight text-[#F8F6FB] sm:text-3xl"
            >
              Sector paths when you want a sharper brief
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[#C4B4D8] sm:text-base">
              Interior studios, beauty & wellness, manufacturing, and agencies—each
              has a dedicated page. Your business still leads; these just speed
              up the first conversation.
            </p>
          </div>
          <Link
            to="/solutions"
            onClick={() => soundEngine.playClick("soft")}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-[#B9A6D1]/45 bg-[#1E1024]/50 px-5 py-2.5 font-heading text-sm font-semibold text-[#F8F6FB] transition hover:border-[#E8A9C2]/55 hover:text-[#E8A9C2]"
          >
            All industry solutions
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>

        <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {INDUSTRY_SOLUTIONS.map((industry) => (
            <li key={industry.slug}>
              <Link
                to={industry.href}
                onClick={() => soundEngine.playClick("soft")}
                className="group flex h-full flex-col rounded-xl border border-[#B9A6D1]/25 bg-[#1E1024]/60 px-4 py-4 transition hover:border-[#E8A9C2]/45"
              >
                <span className="font-heading text-sm font-semibold text-[#F8F6FB] group-hover:text-[#E8A9C2]">
                  {industry.shortName}
                </span>
                <span className="mt-1 text-xs leading-snug text-[#B9A6D1]">
                  {industry.outcomes[0]}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
