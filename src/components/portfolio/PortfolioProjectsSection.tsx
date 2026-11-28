import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import {
  PORTFOLIO_INTRO,
  PORTFOLIO_PROJECTS,
  type PortfolioProject,
  type PortfolioStatus,
} from "../../data/portfolio";
import { soundEngine } from "../../utils/audioEngine";

function statusTone(status: PortfolioStatus): string {
  if (status === "live") return "border-[#7dcea0]/45 bg-[#1a2e24]/90 text-[#a8e6c1]";
  if (status === "under-development")
    return "border-[#E8A9C2]/45 bg-[#2A1830]/95 text-[#E8A9C2]";
  return "border-[#B9A6D1]/45 bg-[#1E1024]/90 text-[#D8CCE6]";
}

function ProjectCta({
  cta,
  primary,
}: {
  cta: PortfolioProject["primaryCta"];
  primary?: boolean;
}) {
  const className = primary
    ? "group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#E8A9C2] to-[#d892ad] px-5 py-2.5 font-heading text-sm font-semibold text-[#1E1024] shadow-[0_8px_26px_rgba(232,169,194,0.28)] transition hover:brightness-105"
    : "group inline-flex items-center gap-2 rounded-full border border-[#B9A6D1]/38 bg-[#1E1024]/50 px-5 py-2.5 font-heading text-sm font-semibold text-[#F8F6FB] transition hover:border-[#E8A9C2]/50 hover:text-[#E8A9C2]";

  const inner = (
    <>
      <span>{cta.label}</span>
      <ArrowUpRight className="h-3.5 w-3.5 shrink-0" aria-hidden />
    </>
  );

  if (cta.external) {
    return (
      <a
        href={cta.href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => soundEngine.playClick("soft")}
        className={className}
      >
        {inner}
      </a>
    );
  }

  return (
    <Link
      to={cta.href}
      onClick={() => soundEngine.playClick("soft")}
      className={className}
    >
      {inner}
    </Link>
  );
}

function ProjectCard({ project }: { project: PortfolioProject }) {
  return (
    <article
      id={project.id}
      className="grid overflow-hidden rounded-2xl border border-[#B9A6D1]/28 bg-[#1E1024]/40 shadow-[0_16px_40px_rgba(0,0,0,0.28)] lg:grid-cols-12"
    >
      <div className="relative lg:col-span-5">
        <img
          src={project.visualSrc}
          alt={project.visualAlt}
          className="h-56 w-full object-cover sm:h-64 lg:h-full lg:min-h-[20rem]"
          loading="lazy"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1E1024]/85 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#1E1024]/55" />
        {project.visualNote ? (
          <p className="absolute bottom-3 left-3 right-3 rounded-lg border border-[#B9A6D1]/30 bg-[#1E1024]/88 px-3 py-2 font-mono-accent text-[10px] leading-snug text-[#D8CCE6] sm:text-[11px]">
            {project.visualNote}
          </p>
        ) : null}
      </div>

      <div className="flex flex-col justify-center px-5 py-6 sm:px-7 sm:py-8 lg:col-span-7 lg:px-9">
        <div className="flex flex-wrap items-center gap-2">
          <span
            className={`inline-flex rounded-full border px-2.5 py-1 font-mono-accent text-[10px] uppercase tracking-[0.14em] sm:text-[11px] ${statusTone(project.status)}`}
          >
            {project.statusLabel}
          </span>
          <span className="font-mono-accent text-[10px] uppercase tracking-[0.16em] text-[#B9A6D1] sm:text-[11px]">
            {project.classification}
          </span>
        </div>

        <h3 className="mt-3 font-heading text-xl font-bold leading-tight text-[#F8F6FB] sm:text-2xl">
          {project.name}
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-[#C4B4D8] sm:text-[15px]">
          <span className="font-semibold text-[#E8A9C2]">Problem. </span>
          {project.problem}
        </p>
        <p className="mt-2 text-sm leading-relaxed text-[#E7E1F0] sm:text-[15px]">
          <span className="font-semibold text-[#E8A9C2]">Solution. </span>
          {project.solution}
        </p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {project.features.map((feature) => (
            <li
              key={feature}
              className="rounded-full border border-[#B9A6D1]/28 bg-[#2A1830]/70 px-2.5 py-1 font-mono-accent text-[10px] text-[#D8CCE6] sm:text-[11px]"
            >
              {feature}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-3">
          <ProjectCta cta={project.primaryCta} primary />
          {project.secondaryCta ? (
            <ProjectCta cta={project.secondaryCta} />
          ) : null}
        </div>
      </div>
    </article>
  );
}

export function PortfolioProjectsSection() {
  return (
    <section
      id="portfolio-projects"
      aria-labelledby="portfolio-projects-heading"
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
            {PORTFOLIO_INTRO.eyebrow}
          </p>
          <h2
            id="portfolio-projects-heading"
            className="mt-3 font-heading text-3xl font-bold leading-tight text-[#F8F6FB] sm:text-4xl"
          >
            {PORTFOLIO_INTRO.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#C4B4D8] sm:text-[17px]">
            {PORTFOLIO_INTRO.lead}
          </p>
        </div>

        <div className="mt-10 space-y-6 sm:mt-12 sm:space-y-8">
          {PORTFOLIO_PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 text-center sm:mt-14">
          <p className="max-w-lg text-sm leading-relaxed text-[#B9A6D1]">
            Need something in this lane—or a different workflow? Tell us the
            business problem; we reply within one business day.
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
