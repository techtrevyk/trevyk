import {
  ArrowUpRight,
  BarChart3,
  Check,
  MessageSquare,
  FileStack,
  Plug,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import { Link } from "react-router-dom";
import { soundEngine } from "../../utils/audioEngine";

const BUILD_CARDS = [
  {
    title: "AI Chatbots & Assistants",
    description:
      "Intelligent chatbots trained on your data to handle customer queries, internal support and everyday tasks.",
    bullets: [
      "Trained on your own data",
      "Web and internal tools integration",
      "Role-based access and security",
    ],
    icon: MessageSquare,
    href: "/work/ai-agents",
  },
  {
    title: "RAG & Knowledge Systems",
    description:
      "Private knowledge bases that let teams search documents and get cited answers from approved sources.",
    bullets: [
      "Document search and Q&A",
      "Internal knowledge base",
      "Citations and source tracking",
    ],
    icon: FileStack,
    href: "/work/rag-knowledge-assistants",
  },
  {
    title: "Workflow Automation",
    description:
      "Automate repetitive processes with AI-assisted steps, notifications and human approval where it matters.",
    bullets: [
      "Process automation",
      "Approval flows and notifications",
      "Integration with your existing tools",
    ],
    icon: Workflow,
    href: "/work/ai-agents",
  },
  {
    title: "AI Integrations",
    description:
      "Connect AI capabilities to CRMs, ERPs, support tools and custom APIs—built around how you already work.",
    bullets: [
      "API development and integration",
      "Connect with third-party tools",
      "Customised for your workflow",
    ],
    icon: Plug,
    href: "/contact",
  },
  {
    title: "Data Analysis & Insights",
    description:
      "Turn operational data into dashboards, summaries and forecasts your team can act on.",
    bullets: [
      "Data processing and analysis",
      "Custom dashboards and reports",
      "Predictive insights",
    ],
    icon: BarChart3,
    href: "/contact",
  },
  {
    title: "AI Security & Governance",
    description:
      "Policies, access control and monitoring so AI stays safe, auditable and aligned with your compliance needs.",
    bullets: [
      "Data privacy and access control",
      "Safe and ethical AI practices",
      "Monitoring and compliance support",
    ],
    icon: ShieldCheck,
    href: "/contact",
  },
] as const;

function WhatWeBuildKicker() {
  return (
    <div className="flex items-center justify-center gap-4">
      <span
        className="h-px w-[min(5rem,12vw)] bg-gradient-to-r from-transparent to-[#B9A6D1]/50"
        aria-hidden
      />
      <p className="font-mono-accent text-[11px] uppercase tracking-[0.22em] text-[#E8A9C2] sm:text-xs">
        What we build
      </p>
      <span
        className="h-px w-[min(5rem,12vw)] bg-gradient-to-l from-transparent to-[#B9A6D1]/50"
        aria-hidden
      />
    </div>
  );
}

export function AiWhatWeBuildSection() {
  return (
    <section
      id="ai-services"
      aria-labelledby="ai-what-we-build-heading"
      className="relative scroll-mt-28 border-t border-[#6B4A87]/30 bg-[#120a14] py-14 sm:scroll-mt-32 sm:py-16 lg:py-20"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div
          className="absolute -left-[20%] top-[8%] h-[55%] w-[45%] opacity-40"
          style={{
            background:
              "radial-gradient(ellipse 70% 70% at 50% 50%, rgba(133,88,165,0.45) 0%, transparent 68%)",
          }}
        />
        <div
          className="absolute -right-[18%] top-[12%] h-[50%] w-[42%] opacity-35"
          style={{
            background:
              "radial-gradient(ellipse 65% 65% at 50% 50%, rgba(107,74,135,0.4) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-45"
          style={{
            background:
              "radial-gradient(ellipse 90% 45% at 50% 0%, rgba(107,74,135,0.22) 0%, transparent 55%)",
          }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <WhatWeBuildKicker />

          <h2
            id="ai-what-we-build-heading"
            className="mt-5 font-heading text-[clamp(1.75rem,4vw,2.65rem)] font-bold leading-[1.12] tracking-tight text-[#F8F6FB]"
          >
            AI solutions designed for{" "}
            <span className="bg-gradient-to-r from-[#C4A8E8] via-[#E8A9C2] to-[#F8F6FB] bg-clip-text text-transparent">
              real business needs.
            </span>
          </h2>

          <p className="mt-4 text-base leading-relaxed text-[#C4B4D8] sm:text-[17px]">
            We build practical AI systems that help businesses automate work,
            make better decisions and get more value from their data.
          </p>
        </div>

        <ul className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-6">
          {BUILD_CARDS.map(
            ({ title, description, bullets, icon: Icon, href }) => (
              <li key={title}>
                <article className="group flex h-full flex-col rounded-2xl border border-[#B9A6D1]/28 bg-[#1E1024]/75 p-5 shadow-[0_16px_40px_rgba(0,0,0,0.32)] backdrop-blur-sm sm:p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#E8A9C2]/32 bg-[#2A1830]/90 text-[#E8A9C2]">
                    <Icon className="h-[1.2rem] w-[1.2rem]" strokeWidth={1.65} aria-hidden />
                  </div>

                  <h3 className="mt-4 font-heading text-lg font-semibold leading-snug text-[#F8F6FB]">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#D8CCE6]">
                    {description}
                  </p>

                  <ul className="mt-4 space-y-2 border-t border-[#B9A6D1]/18 pt-4">
                    {bullets.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-[#C4B4D8]">
                        <Check
                          className="mt-0.5 h-4 w-4 shrink-0 text-[#E8A9C2]"
                          strokeWidth={2.25}
                          aria-hidden
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to={href}
                    onClick={() => soundEngine.playClick("soft")}
                    className="mt-5 inline-flex w-fit items-center gap-2 font-heading text-sm font-semibold text-[#F8F6FB] transition hover:text-[#E8A9C2]"
                  >
                    Learn more
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#B9A6D1]/40 bg-[#1E1024]/80 transition group-hover:border-[#E8A9C2]/50">
                      <ArrowUpRight className="h-4 w-4" aria-hidden />
                    </span>
                  </Link>
                </article>
              </li>
            ),
          )}
        </ul>
      </div>
    </section>
  );
}
