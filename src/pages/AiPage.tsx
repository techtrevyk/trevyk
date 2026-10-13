import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Brain } from "lucide-react";
import { PageAtmosphere } from "../components/PageAtmosphere";
import { StudioFrame } from "../components/StudioFrame";

const TRACKS = [
  {
    href: "/work/ai-agents",
    kicker: "AI agents",
    title: "Custom AI agent development",
    blurb:
      "Scoped agents that call your tools, follow role rules, and escalate to a human. One workflow first.",
  },
  {
    href: "/work/rag-knowledge-assistants",
    kicker: "RAG",
    title: "Private knowledge assistants",
    blurb:
      "Retrieval over your documents and systems so answers cite approved sources instead of inventing them.",
  },
  {
    href: "/work/ai-for-schools",
    kicker: "Education",
    title: "AI for school operations",
    blurb:
      "Role-aware assistants beside products like Kiduart—without claiming student-data features that are not live.",
  },
] as const;

const HONEST = [
  {
    label: "Live on this site",
    detail:
      "A Gemini-powered assistant with role prompts for architecture and solutions questions. It does not read private school ERP records.",
  },
  {
    label: "Credible custom work",
    detail:
      "Agents, RAG, workflow automation, and integrations with your APIs, CRM, or WhatsApp when the engagement authorizes them.",
  },
  {
    label: "Not claimed as shipped",
    detail:
      "A full inside-Kiduart AI layer that answers from live student data. That surface is labelled separately when it ships.",
  },
] as const;

export const AiPage: React.FC = () => {
  return (
    <div className="relative min-h-screen overflow-hidden pb-28 pt-36 sm:pt-44">
      <PageAtmosphere
        variant="services"
        bands={[
          { top: "18%", height: "12%", tone: "ink" },
          { top: "70%", height: "14%", tone: "pink" },
        ]}
      />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="mb-5 inline-flex items-center space-x-2 rounded-full border border-[#B9A6D1]/40 bg-[#1E1024]/95 px-3.5 py-1.5 font-mono-accent text-xs text-[#E8A9C2]">
              <Brain className="h-3.5 w-3.5" />
              <span>AI SOLUTIONS</span>
            </div>
            <h1 className="font-heading text-4xl font-bold leading-tight text-[#F8F6FB] sm:text-6xl">
              AI that owns a workflow—not a slide deck
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#E7E1F0] sm:text-lg">
              Trevyk builds practical AI for Indian SMBs, startups, and schools:
              custom agents, RAG assistants, and automation beside systems you
              already run. We expand the existing AI &amp; Automation practice
              here—without inventing case studies or promising AI citations.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center rounded-full bg-[#E8A9C2] px-5 py-3 text-sm font-semibold text-[#241428]"
              >
                Scope an AI workflow
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center rounded-full border border-[#B9A6D1]/40 px-5 py-3 text-sm font-semibold text-[#F8F6FB]"
              >
                Full services catalogue
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5">
            <StudioFrame
              src="/images/studio-technology.jpg"
              alt="Painting of modular blocks suggesting a software system"
              caption="Start with one workflow, tool access, and a human handoff."
              kicker="Use-case first"
            />
          </div>
        </div>

        <section className="mt-16">
          <h2 className="font-heading text-2xl font-semibold text-[#F8F6FB]">
            Where to start
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#B9A6D1]">
            Three deeper guides. Each answers a different buyer question. We
            did not create separate pages for every SEO acronym.
          </p>
          <ul className="mt-6 grid gap-4 md:grid-cols-3">
            {TRACKS.map((track) => (
              <li key={track.href}>
                <Link
                  to={track.href}
                  className="flex h-full flex-col rounded-3xl border border-[#B9A6D1]/30 bg-[#1E1024]/75 p-5 hover:border-[#E8A9C2]"
                >
                  <span className="font-mono-accent text-[10px] uppercase tracking-[0.2em] text-[#E8A9C2]">
                    {track.kicker}
                  </span>
                  <span className="mt-2 font-heading text-xl font-semibold text-[#F8F6FB]">
                    {track.title}
                  </span>
                  <span className="mt-2 flex-1 text-sm leading-relaxed text-[#B9A6D1]">
                    {track.blurb}
                  </span>
                  <span className="mt-4 inline-flex items-center text-sm font-semibold text-[#E8A9C2]">
                    Read the guide
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-16 grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="font-heading text-2xl font-semibold text-[#F8F6FB]">
              What is live versus what we build
            </h2>
            <ul className="mt-5 space-y-4">
              {HONEST.map((item) => (
                <li
                  key={item.label}
                  className="rounded-2xl border border-[#B9A6D1]/25 bg-[#160A1C]/60 px-4 py-4"
                >
                  <p className="font-heading text-lg font-semibold text-[#F8F6FB]">
                    {item.label}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-[#B9A6D1]">
                    {item.detail}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <aside className="lg:col-span-5">
            <div className="rounded-3xl border border-[#B9A6D1]/30 bg-[#1E1024]/80 p-6">
              <h2 className="font-heading text-xl font-semibold text-[#F8F6FB]">
                Search visibility, honestly
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[#B9A6D1]">
                Labels like AEO, GEO, and AIO describe overlapping work with
                SEO: clear answers, crawlable pages, and accurate facts. Google
                treats optimizing for its generative features as still SEO. We
                improve structure and usefulness—we do not sell acronym packages
                or promise AI citations.
              </p>
              <Link
                to="/work/seo"
                className="mt-5 inline-flex items-center text-sm font-semibold text-[#E8A9C2]"
              >
                SEO guide (includes AI-answer notes)
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
              <Link
                to="/kiduart"
                className="mt-3 flex items-center text-sm font-semibold text-[#E8A9C2]"
              >
                Kiduart product overview
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </aside>
        </section>

        <section className="mt-16 max-w-3xl">
          <h2 className="font-heading text-2xl font-semibold text-[#F8F6FB]">
            How an engagement usually starts
          </h2>
          <ol className="mt-5 list-decimal space-y-3 pl-5 text-sm leading-relaxed text-[#E7E1F0]">
            <li>Name the workflow and the decision a human must keep.</li>
            <li>List data sources, permissions, and channels (web, WhatsApp, ERP).</li>
            <li>Ship a narrow prototype with eval questions and cost notes.</li>
            <li>Expand only after retrieval quality and handoff rules hold.</li>
          </ol>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center rounded-full bg-[#E8A9C2] px-5 py-3 text-sm font-semibold text-[#241428]"
          >
            Tell us the workflow
            <ArrowRight className="ml-1.5 h-4 w-4" />
          </Link>
        </section>
      </div>
    </div>
  );
};
