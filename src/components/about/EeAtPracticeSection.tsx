import {
  ArrowUpRight,
  Building2,
  MapPin,
  MessageCircle,
  Target,
} from "lucide-react";
import { Link } from "react-router-dom";
import { ViewportSection } from "../ViewportSection";
import { soundEngine } from "../../utils/audioEngine";

const PRACTICE_FACTS = [
  {
    title: "HQ in Noida  reach worldwide",
    description:
      "Our practice is headquartered in Noida, India. We work with clients across North and South India and remotely worldwidetimezone-aware delivery, not “only Noida projects.” Local website searches still have a dedicated Noida guide.",
    icon: MapPin,
    href: "/work/remote-software-ai-team",
    cta: "Remote team guide",
  },
  {
    title: "Product we ship: Kiduart",
    description:
      "Kiduart School ERP is our flagship product for Indian schools. Product demos and module detail live on kiduart.com; Trevyk handles custom software and AI beside that product lane.",
    icon: Building2,
    href: "/our-products",
    cta: "Kiduart on trevyk.in",
  },
  {
    title: "How to reach a person",
    description:
      "Email contact@trevyk.com or WhatsApp +91 88106 64797. We reply within one business day. Prefer the contact form so scope and city land with the request.",
    icon: MessageCircle,
    href: "/contact",
    cta: "Contact form",
  },
] as const;

export function EeAtPracticeSection() {
  return (
    <ViewportSection
      id="practice-trust"
      aria-labelledby="practice-trust-heading"
      className="trevyk-viewport-section--center"
      innerClassName="flex flex-col justify-center py-10 sm:py-12"
    >
      <div className="inline-flex w-fit max-w-full self-start items-center gap-2 rounded-full border border-[#B9A6D1]/40 bg-[#1E1024]/90 px-4 py-1.5 font-mono-accent text-[11px] uppercase tracking-[0.2em] text-[#E8A9C2] sm:text-xs">
        <Target className="h-4 w-4" aria-hidden />
        <span>05 / Practice &amp; trust</span>
      </div>

      <p className="mt-5 font-mono-accent text-[11px] uppercase tracking-[0.22em] text-[#E8A9C2] sm:text-xs">
        Experience you can verify
      </p>

      <h2
        id="practice-trust-heading"
        className="mt-3 max-w-3xl font-heading text-[clamp(1.85rem,4.5vw,2.85rem)] font-bold leading-[1.1] tracking-tight text-[#F8F6FB]"
      >
        Real location. Real product.{" "}
        <span className="bg-gradient-to-r from-[#E8A9C2] via-[#F0B8CE] to-[#B9A6D1] bg-clip-text text-transparent">
          Real contact path.
        </span>
      </h2>

      <p className="mt-5 max-w-3xl text-base leading-relaxed text-[#E7E1F0] sm:text-[17px]">
        Search and answer systems reward entities they can check. We publish
        where we work, what we ship, and how to reach uswith verified
        remote-first delivery and transparent product status.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
        {PRACTICE_FACTS.map((fact) => {
          const Icon = fact.icon;
          return (
            <article
              key={fact.title}
              className="flex flex-col rounded-2xl border border-[#B9A6D1]/35 bg-[#1E1024]/90 p-5 sm:p-6"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#E8A9C2]/45 bg-[#2A1830]">
                <Icon className="h-5 w-5 text-[#E8A9C2]" aria-hidden />
              </span>
              <h3 className="mt-4 font-heading text-lg font-semibold text-[#F8F6FB]">
                {fact.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-[#D8CCE6]">
                {fact.description}
              </p>
              <Link
                to={fact.href}
                onClick={() => soundEngine.playClick("soft")}
                className="mt-5 inline-flex w-fit items-center gap-1.5 font-heading text-xs font-medium text-[#E8A9C2] transition hover:text-[#F8F6FB] sm:text-[13px]"
              >
                {fact.cta}
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
              </Link>
            </article>
          );
        })}
      </div>
    </ViewportSection>
  );
}
