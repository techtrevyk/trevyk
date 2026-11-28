import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { INDUSTRY_SOLUTIONS, SOLUTIONS_HUB } from "../../data/industries";
import { soundEngine } from "../../utils/audioEngine";

export function SolutionsHubSection() {
  return (
    <section
      id="solutions-industries"
      aria-labelledby="solutions-hub-heading"
      className="relative scroll-mt-24 border-t border-[#B9A6D1]/10 bg-background py-16 sm:py-20 lg:py-24"
    >
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(107,74,135,0.22) 0%, transparent 60%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono-accent text-[11px] uppercase tracking-[0.28em] text-[#E8A9C2]">
            {SOLUTIONS_HUB.eyebrow}
          </p>
          <h2
            id="solutions-hub-heading"
            className="mt-3 font-heading text-3xl font-bold leading-tight text-[#F8F6FB] sm:text-4xl"
          >
            {SOLUTIONS_HUB.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#C4B4D8] sm:text-[17px]">
            {SOLUTIONS_HUB.lead}
          </p>
        </div>

        <ul className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-2 lg:gap-6">
          {INDUSTRY_SOLUTIONS.map((industry) => (
            <li key={industry.slug}>
              <article className="group flex h-full flex-col rounded-2xl border border-[#B9A6D1]/28 bg-[#1E1024]/55 p-6 shadow-[0_16px_40px_rgba(0,0,0,0.28)] sm:p-7">
                <p className="font-mono-accent text-[10px] uppercase tracking-[0.18em] text-[#E8A9C2]">
                  Industry
                </p>
                <h3 className="mt-2 font-heading text-xl font-bold text-[#F8F6FB] sm:text-2xl">
                  {industry.name}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-[#D8CCE6] sm:text-[15px]">
                  {industry.blurb}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {industry.outcomes.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-[#B9A6D1]/28 bg-[#2A1830]/70 px-2.5 py-1 font-mono-accent text-[10px] text-[#D8CCE6] sm:text-[11px]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  to={industry.href}
                  onClick={() => soundEngine.playClick("soft")}
                  className="mt-6 inline-flex w-fit items-center gap-2 font-heading text-sm font-semibold text-[#F8F6FB] transition hover:text-[#E8A9C2]"
                >
                  Explore this path
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#B9A6D1]/40 bg-[#1E1024]/80 transition group-hover:border-[#E8A9C2]/50">
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </span>
                </Link>
              </article>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex flex-col items-center gap-4 text-center">
          <p className="max-w-lg text-sm leading-relaxed text-[#B9A6D1]">
            Different sector? We still start from your business problem—tell us
            the workflow and we map the stack.
          </p>
          <Link
            to="/contact"
            onClick={() => soundEngine.playClick("soft")}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#E8A9C2] to-[#d892ad] px-6 py-3 font-heading text-sm font-semibold text-[#1E1024] shadow-[0_8px_24px_rgba(232,169,194,0.32)] transition hover:brightness-105"
          >
            Discuss your project
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
