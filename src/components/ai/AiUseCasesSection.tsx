import {
  ArrowUpRight,
  BarChart3,
  Code2,
  Database,
  FileStack,
  Headphones,
  Workflow,
} from "lucide-react";
import { Link } from "react-router-dom";
import { soundEngine } from "../../utils/audioEngine";

const USE_CASES = [
  {
    title: "Customer Support",
    description:
      "Deflect repeat questions with assistants grounded in your policies, products and past tickets—escalate when a human should take over.",
    tags: ["AI Assistants", "Knowledge Retrieval", "24/7 Support"],
    icon: Headphones,
    href: "/work/ai-agents",
  },
  {
    title: "Business Process Automation",
    description:
      "Streamline approvals, notifications and handoffs so teams spend less time chasing status and more time on decisions.",
    tags: ["Workflow Automation", "Approvals", "Task Management"],
    icon: Workflow,
    href: "/work/ai-agents",
  },
  {
    title: "AI-Enabled Applications",
    description:
      "Embed intelligence in the products you ship—search, copilots and smart forms that fit your UX and permissions model.",
    tags: ["Custom Applications", "AI Integrations", "Product Features"],
    icon: Code2,
    href: "/work/web-applications",
  },
  {
    title: "Document & Knowledge Management",
    description:
      "Make manuals, SOPs and internal wikis searchable with cited answers instead of folder archaeology.",
    tags: ["Document Intelligence", "RAG", "Internal Knowledge"],
    icon: FileStack,
    href: "/work/rag-knowledge-assistants",
  },
  {
    title: "Data & Decision Support",
    description:
      "Summarise operational data, surface anomalies and package insights leaders can act on—without another spreadsheet swamp.",
    tags: ["Data Analysis", "Custom Reports", "Predictive Insights"],
    icon: BarChart3,
    href: "/contact",
  },
  {
    title: "Integrations with Existing Tools",
    description:
      "Connect AI to CRMs, ERPs, helpdesks and bespoke APIs so automation lives where work already happens.",
    tags: ["API Integrations", "Third-Party Tools", "Custom Workflows"],
    icon: Database,
    href: "/contact",
  },
] as const;

function UseCasesKicker() {
  return (
    <div className="flex items-center justify-center gap-4">
      <span
        className="h-px w-[min(5rem,12vw)] bg-gradient-to-r from-transparent to-[#B9A6D1]/50"
        aria-hidden
      />
      <p className="font-mono-accent text-[11px] uppercase tracking-[0.22em] text-[#E8A9C2] sm:text-xs">
        Use cases
      </p>
      <span
        className="h-px w-[min(5rem,12vw)] bg-gradient-to-l from-transparent to-[#B9A6D1]/50"
        aria-hidden
      />
    </div>
  );
}

function TagPill({ children }: { children: string }) {
  return (
    <span className="rounded-full border border-[#B9A6D1]/28 bg-[#2A1830]/80 px-2.5 py-1 font-mono-accent text-[10px] text-[#D8CCE6] sm:text-[11px]">
      {children}
    </span>
  );
}

export function AiUseCasesSection() {
  return (
    <section
      id="ai-use-cases"
      aria-labelledby="ai-use-cases-heading"
      className="relative border-t border-[#6B4A87]/30 bg-[#1E1024] py-14 sm:py-16 lg:py-20"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div
          className="absolute -left-[15%] top-[20%] h-[45%] w-[40%] opacity-35"
          style={{
            background:
              "radial-gradient(ellipse 70% 70% at 50% 50%, rgba(133,88,165,0.4) 0%, transparent 68%)",
          }}
        />
        <div
          className="absolute -right-[12%] bottom-[10%] h-[42%] w-[38%] opacity-30"
          style={{
            background:
              "radial-gradient(ellipse 65% 65% at 50% 50%, rgba(107,74,135,0.38) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <UseCasesKicker />

          <h2
            id="ai-use-cases-heading"
            className="mt-5 font-heading text-[clamp(1.75rem,4vw,2.65rem)] font-bold leading-[1.12] tracking-tight text-[#F8F6FB]"
          >
            Where AI creates{" "}
            <span className="bg-gradient-to-r from-[#C4A8E8] via-[#E8A9C2] to-[#F8F6FB] bg-clip-text text-transparent">
              real value.
            </span>
          </h2>

          <p className="mt-4 text-base leading-relaxed text-[#C4B4D8] sm:text-[17px]">
            From repetitive tasks to complex business workflows, AI can help
            teams work smarter and make better use of their information.
          </p>
        </div>

        <ul className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:gap-6">
          {USE_CASES.map(({ title, description, tags, icon: Icon, href }) => (
            <li key={title}>
              <article className="group relative flex h-full flex-col rounded-2xl border border-[#B9A6D1]/28 bg-[#160A1C]/65 p-5 shadow-[0_14px_36px_rgba(0,0,0,0.28)] sm:p-6">
                <Link
                  to={href}
                  onClick={() => soundEngine.playClick("soft")}
                  className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-[#B9A6D1]/35 bg-[#1E1024]/70 text-[#F8F6FB] transition hover:border-[#E8A9C2]/50 hover:text-[#E8A9C2] sm:right-5 sm:top-5"
                  aria-label={`Learn more about ${title}`}
                >
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>

                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#E8A9C2]/30 bg-[#55356a]/85 text-[#F8F6FB] shadow-[0_0_16px_rgba(107,74,135,0.3)]">
                  <Icon className="h-[1.2rem] w-[1.2rem]" strokeWidth={1.65} aria-hidden />
                </div>

                <h3 className="mt-4 pr-10 font-heading text-lg font-semibold leading-snug text-[#F8F6FB] sm:text-xl">
                  {title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-[#D8CCE6]">
                  {description}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5 pt-1">
                  {tags.map((tag) => (
                    <TagPill key={tag}>{tag}</TagPill>
                  ))}
                </div>
              </article>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-col items-start justify-between gap-5 rounded-2xl border border-[#B9A6D1]/28 bg-[#160A1C]/70 p-5 sm:mt-12 sm:flex-row sm:items-center sm:p-6 lg:p-8">
          <div className="max-w-xl">
            <p className="font-heading text-lg font-semibold text-[#F8F6FB] sm:text-xl">
              Have a specific use case in mind?
            </p>
            <p className="mt-2 text-sm leading-relaxed text-[#C4B4D8] sm:text-[15px]">
              We can explore an AI solution around your workflow, data and
              business requirements.
            </p>
          </div>
          <Link
            to="/contact"
            onClick={() => soundEngine.playClick("soft")}
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-[#E8A9C2] to-[#d892ad] px-6 py-3 font-heading text-sm font-semibold text-[#1E1024] shadow-[0_8px_24px_rgba(232,169,194,0.32)] transition hover:brightness-105"
          >
            Discuss an AI Project
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
