import {
  ArrowUpRight,
  Bot,
  GitBranch,
  Library,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";
import { soundEngine } from "../../utils/audioEngine";

const BRAIN_IMAGE = "/images/Glowing_Purple_Neural_Brain.png";

const HIGHLIGHTS = [
  {
    icon: Bot,
    title: "Custom AI agents",
    detail: "Tool-calling workflows with human approval on what matters.",
  },
  {
    icon: Library,
    title: "Private knowledge (RAG)",
    detail: "Answers cited from your docs—not generic web guesses.",
  },
  {
    icon: GitBranch,
    title: "Automation & integrations",
    detail: "Connect CRM, ERP, support desks, and internal APIs safely.",
  },
  {
    icon: ShieldCheck,
    title: "Built for production",
    detail: "Permissions, logging, evals, and cost controls from day one.",
  },
] as const;

/** Same animated background as Who we are → Let's build together. */
function AiHeroBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-y-0 left-1/2 -z-10 w-screen -translate-x-1/2 overflow-hidden"
      aria-hidden
    >
      <div className="trevyk-build-together-live-bg absolute inset-0" />
      <div className="trevyk-build-together-live-bg__glow absolute inset-0" />
      <div className="trevyk-build-together-live-bg__vignette absolute inset-0" />
    </div>
  );
}

export function AiHeroSection() {
  return (
    <section
      id="ai-hero"
      aria-labelledby="ai-hero-heading"
      className="relative min-h-[100dvh] min-h-[100svh] w-full overflow-hidden pt-28 sm:pt-32 lg:pt-36"
    >
      <AiHeroBackground />

      <div className="relative z-10 mx-auto flex min-h-[calc(100dvh-7rem)] min-h-[calc(100svh-7rem)] w-full max-w-[94rem] items-center px-4 pb-12 sm:px-6 lg:px-8">
        <div className="grid w-full grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-4 xl:gap-6">
          <div className="min-w-0 text-left lg:col-span-5">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#B9A6D1]/40 bg-[#1E1024]/90 px-4 py-1.5 font-mono-accent text-[11px] uppercase tracking-[0.2em] text-[#E8A9C2] sm:text-xs">
              <span
                className="h-2 w-2 shrink-0 rounded-full bg-[#E8A9C2] shadow-[0_0_10px_rgba(232,169,194,0.85)]"
                aria-hidden
              />
              AI solutions
            </div>

            <h1
              id="ai-hero-heading"
              className="mt-5 font-heading text-[clamp(1.65rem,3.2vw,2.65rem)] font-bold leading-[1.12] tracking-tight text-[#F8F6FB] xl:text-[2.75rem]"
            >
              Intelligent solutions for{" "}
              <span className="bg-gradient-to-r from-[#C4A8E8] via-[#E8A9C2] to-[#F8F6FB] bg-clip-text text-transparent">
                real business problems.
              </span>
            </h1>

            <p className="mt-4 text-[15px] leading-relaxed text-[#E7E1F0] sm:text-base lg:text-[15px] xl:text-[16px]">
              We build custom AI solutions — from intelligent agents and RAG
              assistants to workflow automation and AI integrations — that help
              businesses work smarter, move faster and achieve measurable
              results.
            </p>

            <p className="mt-3 text-sm leading-relaxed text-[#C4B4D8] lg:text-[13px] xl:text-sm">
              For teams drowning in repeat questions, manual handoffs, or
              documents nobody can search—without handing the keys to your data
              to a black box.
            </p>

            <ul className="mt-6 space-y-3.5 border-t border-[#B9A6D1]/22 pt-5">
              {HIGHLIGHTS.map(({ icon: Icon, title, detail }) => (
                <li key={title} className="flex gap-2.5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#E8A9C2]/30 bg-[#55356a]/75 text-[#F8F6FB] shadow-[0_0_14px_rgba(107,74,135,0.28)]">
                    <Icon className="h-[1rem] w-[1rem]" strokeWidth={1.65} aria-hidden />
                  </div>
                  <div className="min-w-0">
                    <p className="font-heading text-[13px] font-semibold leading-snug text-[#F8F6FB]">
                      {title}
                    </p>
                    <p className="mt-0.5 text-[12px] leading-snug text-[#B9A6D1] xl:text-[13px]">
                      {detail}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Link
                to="#ai-services"
                onClick={() => soundEngine.playClick("hero")}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#E8A9C2] to-[#d892ad] px-5 py-3 font-heading text-sm font-semibold text-[#1E1024] shadow-[0_8px_24px_rgba(232,169,194,0.32)] transition hover:brightness-105"
              >
                Explore AI Services
                <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden />
              </Link>
              <Link
                to="/process"
                onClick={() => soundEngine.playClick("soft")}
                className="group inline-flex items-center gap-2.5 font-heading text-sm font-semibold text-[#F8F6FB] transition hover:text-[#E8A9C2]"
              >
                Our Approach
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#B9A6D1]/45 bg-[#1E1024]/50 transition group-hover:border-[#E8A9C2]/55">
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </span>
              </Link>
            </div>
          </div>

          <div className="flex min-w-0 items-center justify-center lg:col-span-7 lg:justify-end lg:self-center">
            <img
              src={BRAIN_IMAGE}
              alt=""
              className="h-auto w-full max-w-[min(100%,24rem)] object-contain sm:max-w-[26rem] lg:max-h-[min(52vh,28rem)] lg:max-w-full lg:w-full xl:max-h-[min(56vh,30rem)]"
              fetchPriority="high"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
