import type { LucideIcon } from "lucide-react";
import { useCallback, useLayoutEffect, useRef, useState } from "react";
import {
  BarChart3,
  Code2,
  Lightbulb,
  Search,
  Sparkles,
  TrendingUp,
} from "lucide-react";

const STEPS: {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  /** Pushes card down (staircase left → right). */
  staggerPt: string;
  /** Lifts dot up from bottom rail (ascending graph). */
  dotLift: string;
}[] = [
  {
    number: "01",
    title: "Understand",
    description:
      "We learn about your business, goals, data and challenges to identify the right opportunities for AI.",
    icon: Search,
    staggerPt: "lg:pt-24",
    dotLift: "lg:pb-0",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We define the solution approach, choose the right technologies and design a system that fits your workflow.",
    icon: Lightbulb,
    staggerPt: "lg:pt-16",
    dotLift: "lg:pb-7",
  },
  {
    number: "03",
    title: "Build",
    description:
      "We develop and integrate the solution with your existing tools, data and systems.",
    icon: Code2,
    staggerPt: "lg:pt-10",
    dotLift: "lg:pb-14",
  },
  {
    number: "04",
    title: "Test & Refine",
    description:
      "We test, validate and fine-tune the solution to ensure accuracy, reliability and real business value.",
    icon: Sparkles,
    staggerPt: "lg:pt-4",
    dotLift: "lg:pb-[4.5rem]",
  },
  {
    number: "05",
    title: "Deploy & Support",
    description:
      "We deploy the solution and provide ongoing support, monitoring and improvements as your needs evolve.",
    icon: BarChart3,
    staggerPt: "lg:pt-0",
    dotLift: "lg:pb-[7rem]",
  },
];

function catmullRomPath(
  points: { x: number; y: number }[],
  tension = 0.42,
): string {
  if (points.length < 2) return "";
  const first = points[0];
  let d = `M ${first.x.toFixed(2)} ${first.y.toFixed(2)}`;
  for (let i = 0; i < points.length - 1; i += 1) {
    const p0 = points[i - 1] ?? points[i];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = points[i + 2] ?? p2;
    const cp1x = p1.x + (p2.x - p0.x) * tension;
    const cp1y = p1.y + (p2.y - p0.y) * tension;
    const cp2x = p2.x - (p3.x - p1.x) * tension;
    const cp2y = p2.y - (p3.y - p1.y) * tension;
    d += ` C ${cp1x.toFixed(2)} ${cp1y.toFixed(2)}, ${cp2x.toFixed(2)} ${cp2y.toFixed(2)}, ${p2.x.toFixed(2)} ${p2.y.toFixed(2)}`;
  }
  return d;
}

/** Smooth wave through dot centers; extra handles for a soft climb left → right. */
function approachConnectorPath(dots: { x: number; y: number }[]): string {
  if (dots.length < 2) return "";

  const first = dots[0];
  const second = dots[1];
  const last = dots[dots.length - 1];
  const beforeLast = dots[dots.length - 2];

  const start = {
    x: first.x - 48,
    y: first.y + (first.y - second.y) * 0.12 + 6,
  };
  const end = {
    x: last.x + 48,
    y: last.y + (last.y - beforeLast.y) * 0.12 - 4,
  };

  return catmullRomPath([start, ...dots, end], 0.62);
}

function ApproachKicker() {
  return (
    <div className="flex items-center justify-center gap-4">
      <span
        className="h-px w-[min(5rem,12vw)] bg-gradient-to-r from-transparent to-[#B9A6D1]/50"
        aria-hidden
      />
      <p className="font-mono-accent text-[11px] uppercase tracking-[0.22em] text-[#E8A9C2] sm:text-xs">
        How we approach AI
      </p>
      <span
        className="h-px w-[min(5rem,12vw)] bg-gradient-to-l from-transparent to-[#B9A6D1]/50"
        aria-hidden
      />
    </div>
  );
}

function StepCard({
  number,
  title,
  description,
  icon: Icon,
}: Omit<(typeof STEPS)[number], "staggerPt" | "dotLift">) {
  return (
    <article className="flex min-h-[15.5rem] w-full flex-col rounded-2xl border border-[#B9A6D1]/28 bg-[#1E1024]/40 p-4 shadow-[0_12px_32px_rgba(0,0,0,0.35)] backdrop-blur-md sm:min-h-[16.5rem] sm:p-5">
      <div className="flex items-center gap-2">
        <span className="font-mono-accent text-[11px] font-medium tracking-[0.12em] text-[#E8A9C2] sm:text-xs">
          {number}
        </span>
        <span className="h-px w-8 bg-[#B9A6D1]/45" aria-hidden />
      </div>

      <h3 className="mt-3 font-heading text-base font-semibold leading-snug text-[#F8F6FB] sm:text-lg">
        {title}
      </h3>

      <p className="mt-2 flex-1 text-[13px] leading-relaxed text-[#C4B4D8] sm:text-sm">
        {description}
      </p>

      <div className="mt-4 flex justify-center sm:mt-5">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#E8A9C2]/35 bg-[#55356a]/90 text-[#F8F6FB] shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_0_22px_rgba(107,74,135,0.55)]">
          <Icon className="h-[1.25rem] w-[1.25rem]" strokeWidth={1.65} aria-hidden />
        </div>
      </div>
    </article>
  );
}

function ApproachPathSvg({ pathD }: { pathD: string }) {
  const strokeProps = {
    d: pathD,
    fill: "none" as const,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  return (
    <svg
      className="pointer-events-none absolute inset-0 z-[1] h-full w-full overflow-visible"
      aria-hidden
    >
      <defs>
        <linearGradient id="ai-approach-path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#6B4A87" stopOpacity="0.55" />
          <stop offset="28%" stopColor="#C49AE0" stopOpacity="0.95" />
          <stop offset="52%" stopColor="#E8A9C2" stopOpacity="1" />
          <stop offset="78%" stopColor="#D892AD" stopOpacity="0.92" />
          <stop offset="100%" stopColor="#8558A5" stopOpacity="0.7" />
        </linearGradient>
        <filter
          id="ai-approach-path-glow-wide"
          x="-30%"
          y="-30%"
          width="160%"
          height="160%"
        >
          <feGaussianBlur stdDeviation="9" result="blur" />
        </filter>
        <filter
          id="ai-approach-path-glow-mid"
          x="-25%"
          y="-25%"
          width="150%"
          height="150%"
        >
          <feGaussianBlur stdDeviation="4.5" result="blur" />
        </filter>
      </defs>

      {/* Outer neon bloom */}
      <path
        {...strokeProps}
        stroke="#E8A9C2"
        strokeWidth="14"
        opacity="0.22"
        filter="url(#ai-approach-path-glow-wide)"
      />
      <path
        {...strokeProps}
        stroke="#C49AE0"
        strokeWidth="7"
        opacity="0.38"
        filter="url(#ai-approach-path-glow-mid)"
      />
      {/* Core ribbon */}
      <path
        {...strokeProps}
        stroke="url(#ai-approach-path-gradient)"
        strokeWidth="3"
      />
      <path {...strokeProps} stroke="#F8F6FB" strokeWidth="1.15" opacity="0.55" />
    </svg>
  );
}

function AiApproachTimelineDesktop() {
  const railRef = useRef<HTMLDivElement>(null);
  const dotRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [pathD, setPathD] = useState("");

  const updatePath = useCallback(() => {
    const rail = railRef.current;
    if (!rail) return;

    const railRect = rail.getBoundingClientRect();
    const points = STEPS.map((_, index) => {
      const el = dotRefs.current[index];
      if (!el) return null;
      const dotRect = el.getBoundingClientRect();
      return {
        x: dotRect.left + dotRect.width / 2 - railRect.left,
        y: dotRect.top + dotRect.height / 2 - railRect.top,
      };
    });

    if (points.some((p) => p === null)) return;
    setPathD(approachConnectorPath(points as { x: number; y: number }[]));
  }, []);

  useLayoutEffect(() => {
    updatePath();
    const raf = window.requestAnimationFrame(() => updatePath());
    const rail = railRef.current;
    if (!rail) {
      window.cancelAnimationFrame(raf);
      return undefined;
    }

    const observer = new ResizeObserver(() => updatePath());
    observer.observe(rail);
    window.addEventListener("resize", updatePath);

    return () => {
      window.cancelAnimationFrame(raf);
      observer.disconnect();
      window.removeEventListener("resize", updatePath);
    };
  }, [updatePath]);

  return (
    <div ref={railRef} className="relative mt-12 lg:mt-14">
      {pathD ? <ApproachPathSvg pathD={pathD} /> : null}

      <ol className="relative z-[2] grid grid-cols-5 gap-3 xl:gap-4">
        {STEPS.map((step, index) => (
          <li
            key={step.number}
            className="flex min-h-[29rem] flex-col items-center"
          >
            <div className={`w-full ${step.staggerPt}`}>
              <StepCard
                number={step.number}
                title={step.title}
                description={step.description}
                icon={step.icon}
              />
            </div>

            <div
              className={`mt-3 flex w-full flex-1 flex-col items-center justify-end ${step.dotLift}`}
            >
              <div
                className="w-px min-h-[2.75rem] flex-1 border-l border-dashed border-[#E8A9C2]/40"
                aria-hidden
              />
              <div
                ref={(el) => {
                  dotRefs.current[index] = el;
                }}
                className="relative z-[3] h-2.5 w-2.5 shrink-0 rounded-full bg-[#F8F6FB] shadow-[0_0_10px_#E8A9C2,0_0_22px_rgba(232,169,194,0.95),0_0_36px_rgba(133,88,165,0.55)] ring-2 ring-[#E8A9C2]/85"
              />
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function AiApproachSection() {
  return (
    <section
      id="ai-approach"
      aria-labelledby="ai-approach-heading"
      className="relative overflow-hidden border-t border-[#6B4A87]/30 bg-[#120a14] py-14 sm:py-16 lg:py-20"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div
          className="absolute inset-0 opacity-50"
          style={{
            background:
              "radial-gradient(ellipse 70% 45% at 50% 100%, rgba(107,74,135,0.35) 0%, transparent 55%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-[45%] opacity-40"
          style={{
            background:
              "linear-gradient(to top, rgba(42,24,56,0.55) 0%, transparent 100%)",
          }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <ApproachKicker />

          <h2
            id="ai-approach-heading"
            className="mt-5 font-heading text-[clamp(1.75rem,4vw,2.65rem)] font-bold leading-[1.12] tracking-tight text-[#F8F6FB]"
          >
            A practical and{" "}
            <span className="bg-gradient-to-r from-[#C4A8E8] via-[#E8A9C2] to-[#F8F6FB] bg-clip-text text-transparent">
              structured approach.
            </span>
          </h2>

          <p className="mt-4 text-base leading-relaxed text-[#C4B4D8] sm:text-[17px]">
            We follow a clear and collaborative process to design, build and
            deploy AI solutions that fit your business goals.
          </p>
        </div>

        <div className="hidden lg:block">
          <AiApproachTimelineDesktop />
        </div>

        {/* Mobile / tablet: stacked */}
        <ol className="relative mt-10 space-y-5 lg:hidden">
          {STEPS.map((step) => (
            <li key={step.number}>
              <StepCard
                number={step.number}
                title={step.title}
                description={step.description}
                icon={step.icon}
              />
            </li>
          ))}
        </ol>

        <div className="mt-8 flex justify-center lg:mt-6 lg:justify-end">
          <div className="flex w-full max-w-xl flex-col gap-4 rounded-2xl border border-[#B9A6D1]/28 bg-[#1E1024]/45 p-5 backdrop-blur-md sm:flex-row sm:items-center sm:p-6 lg:max-w-2xl">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#E8A9C2]/32 bg-[#55356a]/85 text-[#F8F6FB] shadow-[0_0_18px_rgba(107,74,135,0.4)]">
              <TrendingUp className="h-[1.25rem] w-[1.25rem]" strokeWidth={1.65} aria-hidden />
            </div>
            <div>
              <p className="font-mono-accent text-[10px] uppercase tracking-[0.18em] text-[#E8A9C2] sm:text-[11px]">
                Our focus
              </p>
              <p className="mt-1 font-heading text-base font-semibold text-[#F8F6FB] sm:text-lg">
                Practical solutions. Measurable outcomes.
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[#C4B4D8]">
                We build AI systems that solve real problems and create
                meaningful impact for your business.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
