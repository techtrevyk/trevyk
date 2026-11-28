import {
  ArrowUpRight,
  Briefcase,
  Globe2,
  Package,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import { ViewportSection } from "../ViewportSection";
import { soundEngine } from "../../utils/audioEngine";

/** Authentic milestones only  no invented team bios, dates, or client counts. */
const MILESTONES = [
  {
    title: "Kiduart live",
    detail:
      "School ERP product brand shipping on kiduart.comadmissions through parent updates for Indian schools.",
    href: "/our-products",
    cta: "Product overview",
    icon: Package,
  },
  {
    title: "Three verified projects",
    detail:
      "Portfolio publishes Kiduart (live), Sports Academy (under development), and AGL Creatives (client site)clear status on each card.",
    href: "/portfolio",
    cta: "See our work",
    icon: Briefcase,
  },
  {
    title: "Remote-first delivery",
    detail:
      "HQ in Noida with clients across India and worldwide. Timezone-aware scopes; no foreign office claims.",
    href: "/work/remote-software-ai-team",
    cta: "Remote team guide",
    icon: Globe2,
  },
  {
    title: "Practical AI lane",
    detail:
      "Agents, RAG, and GenAI apps labelled ready-to-scope vs educationalso buyers know what ships when.",
    href: "/ai",
    cta: "AI solutions",
    icon: Sparkles,
  },
] as const;

export function VerifiedMilestonesSection() {
  return (
    <ViewportSection
      id="verified-milestones"
      aria-labelledby="verified-milestones-heading"
      className="trevyk-viewport-section--center"
      innerClassName="flex flex-col justify-center py-10 sm:py-12"
    >
      <div className="inline-flex w-fit max-w-full self-start items-center gap-2 rounded-full border border-[#B9A6D1]/40 bg-[#1E1024]/90 px-4 py-1.5 font-mono-accent text-[11px] uppercase tracking-[0.2em] text-[#E8A9C2] sm:text-xs">
        <Sparkles className="h-4 w-4" aria-hidden />
        <span>Milestones you can check</span>
      </div>

      <h2
        id="verified-milestones-heading"
        className="mt-5 max-w-3xl font-heading text-[clamp(1.85rem,4.5vw,2.85rem)] font-bold leading-[1.1] tracking-tight text-[#F8F6FB]"
      >
        Progress you can{" "}
        <span className="bg-gradient-to-r from-[#E8A9C2] via-[#F0B8CE] to-[#B9A6D1] bg-clip-text text-transparent">
          verify.
        </span>
      </h2>

      <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#E7E1F0] sm:text-[17px]">
        Facts published on this site and kiduart.com. Team profiles and client
        stories appear only with written consent.
      </p>

      <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-5">
        {MILESTONES.map(({ title, detail, href, cta, icon: Icon }) => (
          <li key={title}>
            <article className="flex h-full flex-col rounded-2xl border border-[#B9A6D1]/30 bg-[#1E1024]/85 p-5 sm:p-6">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#E8A9C2]/40 bg-[#2A1830] text-[#E8A9C2]">
                <Icon className="h-5 w-5" strokeWidth={1.65} aria-hidden />
              </span>
              <h3 className="mt-4 font-heading text-lg font-semibold text-[#F8F6FB]">
                {title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-[#D8CCE6]">
                {detail}
              </p>
              <Link
                to={href}
                onClick={() => soundEngine.playClick("soft")}
                className="mt-5 inline-flex w-fit items-center gap-1.5 font-heading text-xs font-medium text-[#E8A9C2] transition hover:text-[#F8F6FB] sm:text-[13px]"
              >
                {cta}
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
              </Link>
            </article>
          </li>
        ))}
      </ul>
    </ViewportSection>
  );
}
