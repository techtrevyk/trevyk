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

type ScopeLabel =
  | "Ready to scope"
  | "Feasibility-led"
  | "Educational"
  | "Included in delivery";

const BUILD_CARDS: {
  title: string;
  description: string;
  bullets: string[];
  icon: typeof MessageSquare;
  href: string;
  scope: ScopeLabel;
}[] = [
  {
    title: "AI Chatbots & Assistants",
    description:
      "Grounded assistants or tool-calling agents that cut repeat questions and handoffs.",
    bullets: [
      "Clear chatbot vs agent chooser",
      "Grounded on your approved data",
      "Role-based access and escalation",
    ],
    icon: MessageSquare,
    href: "/work/ai-agent-vs-chatbot",
    scope: "Ready to scope",
  },
  {
    title: "RAG & Knowledge Systems",
    description:
      "Private knowledge bases with citationsso staff get answers from your docs, not guesswork.",
    bullets: [
      "Document search and Q&A",
      "Citations and source tracking",
      "RAG-first before fine-tuning",
    ],
    icon: FileStack,
    href: "/work/rag-knowledge-assistants",
    scope: "Ready to scope",
  },
  {
    title: "Workflow Automation",
    description:
      "Automate repetitive processes with AI-assisted steps and human approval where it matters.",
    bullets: [
      "Process automation",
      "Approval flows and notifications",
      "Integration with your existing tools",
    ],
    icon: Workflow,
    href: "/work/ai-agents",
    scope: "Ready to scope",
  },
  {
    title: "Generative AI & LLM Apps",
    description:
      "Production GenAI on LLM APIsorchestration, embeddings when needed, evals and cost control.",
    bullets: [
      "LangChain-style or lean custom pipelines",
      "Provider APIs with secrets handled properly",
      "Eval sets and token monitoring",
    ],
    icon: Plug,
    href: "/work/generative-ai-llm-apps",
    scope: "Ready to scope",
  },
  {
    title: "ML & Data Systems",
    description:
      "Problem framing, features from your operations data, and practical scoring you can runscoped after we see the labels and refresh path.",
    bullets: [
      "Classification and regression-style workflows",
      "Feature pipelines and holdout evaluation",
      "Human override when stakes are high",
    ],
    icon: BarChart3,
    href: "/work/ml-data-systems",
    scope: "Feasibility-led",
  },
  {
    title: "AI Security & Governance",
    description:
      "Access control, audit habits, and monitoring baked into every AI engagement as part of delivery.",
    bullets: [
      "Least-privilege access patterns",
      "Safe refusal and escalation paths",
      "Monitoring notes for your ops team",
    ],
    icon: ShieldCheck,
    href: "/contact",
    scope: "Included in delivery",
  },
];

function scopeTone(scope: ScopeLabel): string {
  if (scope === "Ready to scope")
    return "border-[#7dcea0]/40 bg-[#1a2e24]/85 text-[#a8e6c1]";
  if (scope === "Feasibility-led")
    return "border-[#E8A9C2]/40 bg-[#2A1830]/90 text-[#E8A9C2]";
  if (scope === "Educational")
    return "border-[#B9A6D1]/40 bg-[#1E1024]/90 text-[#D8CCE6]";
  return "border-[#B9A6D1]/35 bg-[#1E1024]/80 text-[#C4B4D8]";
}

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
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden
      >
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
            Practical systems that automate work, surface answers from your
            docs, and support growtheach card shows delivery readiness.
          </p>
        </div>

        <ul className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-6">
          {BUILD_CARDS.map(
            ({ title, description, bullets, icon: Icon, href, scope }) => (
              <li key={title}>
                <article className="group flex h-full flex-col rounded-2xl border border-[#B9A6D1]/28 bg-[#1E1024]/75 p-5 shadow-[0_16px_40px_rgba(0,0,0,0.32)] backdrop-blur-sm sm:p-6">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#E8A9C2]/32 bg-[#2A1830]/90 text-[#E8A9C2]">
                      <Icon
                        className="h-[1.2rem] w-[1.2rem]"
                        strokeWidth={1.65}
                        aria-hidden
                      />
                    </div>
                    <span
                      className={`inline-flex shrink-0 rounded-full border px-2.5 py-1 font-mono-accent text-[10px] uppercase tracking-[0.12em] ${scopeTone(scope)}`}
                    >
                      {scope}
                    </span>
                  </div>

                  <h3 className="mt-4 font-heading text-lg font-semibold leading-snug text-[#F8F6FB]">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#D8CCE6]">
                    {description}
                  </p>

                  <ul className="mt-4 space-y-2 border-t border-[#B9A6D1]/18 pt-4">
                    {bullets.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-[#C4B4D8]"
                      >
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

        <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-[#B9A6D1]">
          Compare guides (agent vs chatbot, RAG vs fine-tuning) are educational
          decision aids. Delivery always starts from your workflow and an agreed
          evaluation set.
        </p>
      </div>
    </section>
  );
}
