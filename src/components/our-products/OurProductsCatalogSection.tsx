import type { ReactNode } from "react";
import { useState } from "react";
import {
  ArrowUpRight,
  Box,
  Globe,
  GraduationCap,
  Lock,
  Star,
} from "lucide-react";
import { Link } from "react-router-dom";
import { soundEngine } from "../../utils/audioEngine";

const KIDUART_LOGO = "/images/kiduart/kiduart.png";

/** One third of the catalog grid width (matches row of three). */
const CARD_WIDTH_LG =
  "lg:w-[calc((min(100%,80rem)-3rem)/3)] lg:max-w-[calc((80rem-3rem)/3)]";

function KiduartLogoMark() {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return <GraduationCap className="h-6 w-6 text-[#6B4A87]" strokeWidth={1.65} aria-hidden />;
  }
  return (
    <img
      src={KIDUART_LOGO}
      alt=""
      className="h-9 w-9 object-contain"
      onError={() => setFailed(true)}
    />
  );
}

const TAGS = {
  kiduart: ["Admissions", "Attendance", "Fees", "Exams", "Communication"],
  customSoftware: ["Web Applications", "Internal Tools", "Business Workflows"],
  aglCreatives: ["Design • Print • Pack", "Product catalogue", "Quote & contact flows"],
} as const;

function TagPill({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-[#B9A6D1]/32 bg-[#2A1830]/75 px-2.5 py-1 font-mono-accent text-[10px] text-[#D8CCE6] sm:text-[11px]">
      {children}
    </span>
  );
}

function SkeletonBlock({ className }: { className?: string }) {
  return (
    <div
      className={`animate-pulse rounded-md bg-[#B9A6D1]/16 ${className ?? ""}`}
      aria-hidden
    />
  );
}

function ConfidentialSkeletonBody() {
  return (
    <div className="mt-3 space-y-2" aria-hidden>
      <SkeletonBlock className="h-2.5 w-full" />
      <SkeletonBlock className="h-2.5 w-[94%]" />
      <SkeletonBlock className="h-2.5 w-[80%]" />
    </div>
  );
}

function ProductCta({
  cta,
}: {
  cta: { label: string; href: string; external?: boolean; primary?: boolean };
}) {
  const inner = (
    <>
      <span>{cta.label}</span>
      {cta.primary ? (
        <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden />
      ) : (
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#B9A6D1]/40 bg-[#1E1024]/80 transition group-hover:border-[#E8A9C2]/45">
          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
        </span>
      )}
    </>
  );

  const className = cta.primary
    ? "group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#E8A9C2] to-[#d892ad] px-5 py-3 font-heading text-sm font-semibold text-[#1E1024] shadow-[0_8px_26px_rgba(232,169,194,0.35)] transition hover:brightness-105"
    : "group inline-flex w-full items-center justify-between gap-3 rounded-full border border-[#B9A6D1]/38 bg-[#1E1024]/50 px-5 py-2.5 font-heading text-sm font-semibold text-[#F8F6FB] transition hover:border-[#E8A9C2]/50 hover:text-[#E8A9C2]";

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

type ProductCardProps = {
  featured?: boolean;
  /** Shown on the highlighted badge when `featured` is true (default: Featured product). */
  featuredLabel?: string;
  /** Pink product wash on card (KIDUART featured). */
  featuredPinkWash?: boolean;
  /** Dark plum top pill when not `featured` (e.g. Under development). */
  cardBadge?: string;
  confidential?: boolean;
  icon?: ReactNode;
  title: string;
  subtitle?: string;
  description?: ReactNode;
  tags?: readonly string[];
  visualSrc: string;
  cta: { label: string; href: string; external?: boolean; primary?: boolean };
};

function productVisualQuadrant(visualSrc: string): string {
  return visualSrc.replace(/\.jpg$/i, "-quadrant.png");
}

/** Full-card veil over art — text readable, illustration still visible (esp. right). */
function productArtReadabilityScrim(
  featuredPinkWash?: boolean,
  featured?: boolean,
): string {
  if (featuredPinkWash) {
    return [
      "linear-gradient(to right, rgba(42,24,56,0.58) 0%, rgba(36,20,40,0.38) 40%, rgba(36,20,40,0.18) 66%, rgba(36,20,40,0.11) 100%)",
      "linear-gradient(to top, rgba(36,20,40,0.32) 0%, rgba(36,20,40,0.12) 42%, transparent 62%)",
    ].join(", ");
  }
  if (featured) {
    return [
      "linear-gradient(to right, rgba(30,16,36,0.68) 0%, rgba(36,20,40,0.48) 34%, rgba(36,20,40,0.26) 58%, rgba(36,20,40,0.14) 100%)",
      "linear-gradient(to top, rgba(30,16,36,0.38) 0%, rgba(30,16,36,0.16) 38%, transparent 56%)",
    ].join(", ");
  }
  return [
    "linear-gradient(to right, rgba(30,16,36,0.6) 0%, rgba(30,16,36,0.38) 38%, rgba(30,16,36,0.18) 64%, rgba(30,16,36,0.12) 100%)",
    "linear-gradient(to top, rgba(30,16,36,0.32) 0%, rgba(30,16,36,0.14) 40%, transparent 58%)",
  ].join(", ");
}

const PRODUCT_CARD_TEXT_SHADOW =
  "0 1px 2px rgba(30,16,36,0.92), 0 0 18px rgba(30,16,36,0.55)";

/** 2×2 grid: art fills top-right quadrant (50%×50%), may sit behind copy. */
function ProductCardBackground({
  visualSrc,
  featured,
  featuredPinkWash,
  confidential,
}: {
  visualSrc: string;
  featured?: boolean;
  featuredPinkWash?: boolean;
  confidential?: boolean;
}) {
  return (
    <>
      <div
        className={`pointer-events-none absolute inset-0 ${
          featuredPinkWash
            ? "bg-gradient-to-br from-[#2a1838] via-[#321e3c] to-[#241428]"
            : featured
              ? "bg-[#241428]"
              : "bg-[#1E1024]"
        }`}
        aria-hidden
      />
      {featuredPinkWash ? (
        <div
          className="pointer-events-none absolute inset-0 z-0"
          aria-hidden
            style={{
              background: [
                "linear-gradient(145deg, rgba(133,88,165,0.45) 0%, rgba(232,169,194,0.32) 45%, rgba(216,146,173,0.28) 100%)",
                "radial-gradient(ellipse 90% 80% at 72% 28%, rgba(232,169,194,0.38) 0%, rgba(107,74,135,0.25) 55%, transparent 78%)",
              ].join(", "),
            }}
        />
      ) : null}
      {/* Pink wash behind art (top-right quadrant only) */}
      <div
        className="pointer-events-none absolute right-0 top-0 z-[1] h-3/4 w-3/4 overflow-hidden"
        aria-hidden
      >
        {featuredPinkWash ? (
          <div
            className="absolute inset-0"
          />
        ) : null}
        <img
          src={productVisualQuadrant(visualSrc)}
          alt=""
          className={`relative z-[1] h-full w-full object-cover object-right-top ${
            confidential ? "scale-[1.05] opacity-80 blur-[5px]" : ""
          }`}
          loading="lazy"
          decoding="async"
        />
      </div>
      {featuredPinkWash ? (
        <>
          <div
            className="pointer-events-none absolute -right-10 top-0 z-0 h-40 w-40 rounded-full bg-[#E8A9C2]/22 blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute bottom-[18%] right-[8%] z-0 h-44 w-52 rounded-full bg-[#8558A5]/28 blur-3xl"
            aria-hidden
          />
        </>
      ) : featured ? (
        <>
          <div
            className="pointer-events-none absolute -right-10 -top-10 h-64 w-64 rounded-full bg-[#8558A5]/55 blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute bottom-0 left-0 h-48 w-72 rounded-full bg-[#E8A9C2]/22 blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#6B4A87]/38 via-[#241428]/10 to-[#E8A9C2]/16"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 shadow-[inset_0_0_80px_rgba(232,169,194,0.08)]"
            aria-hidden
          />
        </>
      ) : null}
      {!confidential ? (
        <div
          className="pointer-events-none absolute inset-0 z-[3]"
          aria-hidden
          style={{
            background: productArtReadabilityScrim(featuredPinkWash, featured),
          }}
        />
      ) : null}
    </>
  );
}

function ProductCard({
  featured,
  featuredLabel = "Featured product",
  featuredPinkWash,
  cardBadge,
  confidential,
  icon,
  title,
  subtitle,
  description,
  tags,
  visualSrc,
  cta,
}: ProductCardProps) {
  return (
    <article
      className={`group relative flex min-h-[21rem] flex-col overflow-hidden rounded-2xl border sm:min-h-[22.5rem] ${
        featured && featuredPinkWash
          ? "border-[#E8A9C2]/75 shadow-[0_0_0_1px_rgba(232,169,194,0.32),0_0_40px_rgba(232,169,194,0.26),0_0_88px_rgba(133,88,165,0.42),0_24px_52px_rgba(0,0,0,0.45)] ring-1 ring-[#E8A9C2]/28"
          : featured
            ? "border-[#E8A9C2]/70 shadow-[0_0_0_1px_rgba(232,169,194,0.35),0_0_48px_rgba(232,169,194,0.28),0_0_96px_rgba(107,74,135,0.72),0_0_140px_rgba(232,169,194,0.14),0_24px_52px_rgba(0,0,0,0.45)] ring-1 ring-[#E8A9C2]/25"
            : "border-[#B9A6D1]/26 shadow-[0_18px_44px_rgba(0,0,0,0.34)]"
      }`}
    >
      <ProductCardBackground
        visualSrc={visualSrc}
        featured={featured}
        featuredPinkWash={featuredPinkWash}
        confidential={confidential}
      />

      <div
        className={`relative flex min-h-[inherit] flex-1 flex-col p-5 sm:p-6 ${
          confidential ? "z-10" : "z-20"
        }`}
      >
        <div className="max-w-[88%] pr-1 sm:max-w-[82%]">
          {featured ? (
            <div className="mb-3 inline-flex w-fit items-center gap-1.5 rounded-full bg-gradient-to-r from-[#E8A9C2] to-[#d892ad] px-2.5 py-1 font-mono-accent text-[9px] uppercase tracking-[0.12em] text-[#1E1024] shadow-[0_6px_20px_rgba(232,169,194,0.38)] sm:text-[10px]">
              <Star className="h-3 w-3 fill-[#1E1024]" aria-hidden />
              {featuredLabel}
            </div>
          ) : cardBadge ? (
            <div className="mb-3 inline-flex w-fit items-center gap-1.5 rounded-full border border-[#B9A6D1]/32 bg-[#2A1830] px-2.5 py-1 font-mono-accent text-[9px] uppercase tracking-[0.12em] text-[#D8CCE6] sm:text-[10px]">
              {cardBadge}
            </div>
          ) : null}

          <div className="flex items-start gap-3">
            {icon ? (
              <div
                className={`flex shrink-0 items-center justify-center overflow-hidden rounded-xl border ${
                  featured
                    ? "h-14 w-14 border-[#F8F6FB]/25 bg-[#F8F6FB]/95"
                    : "h-11 w-11 border-[#B9A6D1]/35 bg-[#2A1830]/90 text-[#E8A9C2]"
                }`}
              >
                {icon}
              </div>
            ) : null}
            <div className="min-w-0 pt-0.5">
              <h3
                className="font-heading text-base font-bold leading-tight text-white sm:text-lg"
                style={{ textShadow: PRODUCT_CARD_TEXT_SHADOW }}
              >
                {title}
              </h3>
              {subtitle ? (
                <p
                  className="mt-0.5 text-xs text-white sm:text-sm"
                  style={{ textShadow: PRODUCT_CARD_TEXT_SHADOW }}
                >
                  {subtitle}
                </p>
              ) : null}
            </div>
          </div>

          {confidential ? (
            <ConfidentialSkeletonBody />
          ) : (
            <p
              className="mt-3 text-[13px] leading-relaxed text-white sm:text-sm"
              style={{ textShadow: PRODUCT_CARD_TEXT_SHADOW }}
            >
              {description}
            </p>
          )}
        </div>

        <div className="mt-auto w-full pt-5 sm:pt-6">
          {!confidential && tags?.length ? (
            <div className="flex w-full flex-wrap gap-1.5">
              {tags.map((tag) => (
                <TagPill key={tag}>{tag}</TagPill>
              ))}
            </div>
          ) : null}
          {confidential ? (
            <div className="mt-0 flex w-full flex-wrap gap-2" aria-hidden>
              <SkeletonBlock className="h-6 w-[6.5rem] rounded-full" />
              <SkeletonBlock className="h-6 w-[7.25rem] rounded-full" />
              <SkeletonBlock className="h-6 w-[5.75rem] rounded-full" />
            </div>
          ) : null}
          <div className={tags?.length || confidential ? "mt-3.5 w-full" : "w-full"}>
            <ProductCta cta={cta} />
          </div>
        </div>
      </div>

      {confidential ? (
        <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center bg-[#1a0f18]/48 p-5 backdrop-blur-[3px] sm:p-6">
          <div className="w-full max-w-[15rem] rounded-2xl border border-[#B9A6D1]/38 bg-[#1E1024]/82 px-5 py-6 text-center shadow-[0_16px_40px_rgba(0,0,0,0.5)] backdrop-blur-md sm:max-w-[16rem] sm:py-7">
            <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-lg border border-[#B9A6D1]/35 bg-[#2A1830]/90 text-[#E8A9C2]">
              <Lock className="h-[1.125rem] w-[1.125rem]" strokeWidth={1.65} aria-hidden />
            </div>
            <p className="mt-3 font-heading text-xs font-semibold leading-snug text-[#F8F6FB] sm:text-[13px]">
              Project details are confidential
            </p>
          </div>
        </div>
      ) : null}
    </article>
  );
}

export function OurProductsCatalogSection() {
  return (
    <section
      id="products-overview"
      aria-labelledby="our-products-catalog-heading"
      className="relative scroll-mt-28 border-t border-[#6B4A87]/30 py-14 sm:scroll-mt-32 sm:py-16 lg:py-20"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(107,74,135,0.26) 0%, transparent 60%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#B9A6D1]/40 bg-[#1E1024]/90 px-4 py-1.5 font-mono-accent text-[11px] uppercase tracking-[0.2em] text-[#E8A9C2] sm:text-xs">
            <span
              className="h-2 w-2 shrink-0 rounded-full bg-[#E8A9C2] shadow-[0_0_10px_rgba(232,169,194,0.85)]"
              aria-hidden
            />
            Our products
          </div>

          <h2
            id="our-products-catalog-heading"
            className="mt-5 font-heading text-[clamp(1.75rem,4vw,2.65rem)] font-bold leading-[1.12] tracking-tight text-[#F8F6FB]"
          >
            Products that create{" "}
            <span className="bg-gradient-to-r from-[#F8F6FB] via-[#D4C4DC] to-[#E8A9C2] bg-clip-text text-transparent">
              real impact.
            </span>
          </h2>

          <p className="mt-4 text-base leading-relaxed text-[#C4B4D8] sm:text-[17px]">
            We build focused products and solutions for schools, businesses and
            organisations — designed to solve real-world problems and add
            long-term value.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 lg:grid-cols-3 lg:gap-6">
          <ProductCard
            featured
            featuredPinkWash
            title="KIDUART"
            subtitle="School ERP"
            icon={<KiduartLogoMark />}
            description="A complete school management platform to streamline admissions, fees, attendance, exams, communication and more — all in one place."
            tags={TAGS.kiduart}
            visualSrc="/images/our-products/kiduart-card-visual.jpg"
            cta={{
              label: "Explore KIDUART",
              href: "https://kiduart.com",
              external: true,
              primary: true,
            }}
          />

          <ProductCard
            cardBadge="Under development"
            icon={<Box className="h-5 w-5" strokeWidth={1.65} aria-hidden />}
            title="Custom Software Development"
            description="Tailored software solutions built around your unique workflows and business needs. From internal tools to complex web applications."
            tags={TAGS.customSoftware}
            visualSrc="/images/our-products/card-custom-software.jpg"
            cta={{ label: "View product", href: "/work/web-applications" }}
          />

          <ProductCard
            featured
            featuredLabel="Client project"
            icon={<Globe className="h-5 w-5" strokeWidth={1.65} aria-hidden />}
            title="AGL Creatives"
            subtitle="Web development · Client site"
            description="A packaging and print brand site for design, commercial printing, and fulfilment — product formats, capabilities, quotes, and contact in one clear journey."
            tags={TAGS.aglCreatives}
            visualSrc="/images/our-products/card-web-development.jpg"
            cta={{
              label: "Explore AGL Creatives",
              href: "https://www.aglcreatives.in/",
              external: true,
              primary: true,
            }}
          />
        </div>

        <div className="mt-5 flex flex-col gap-5 lg:mt-6 lg:flex-row lg:justify-center lg:gap-6">
          <div className={`w-full ${CARD_WIDTH_LG}`}>
            <ProductCard
              confidential
              icon={<Lock className="h-5 w-5" strokeWidth={1.65} aria-hidden />}
              title="Confidential Project"
              visualSrc="/images/our-products/confidential-card-visual-1.jpg"
              cta={{ label: "View project", href: "/contact" }}
            />
          </div>
          <div className={`w-full ${CARD_WIDTH_LG}`}>
            <ProductCard
              confidential
              icon={<Lock className="h-5 w-5" strokeWidth={1.65} aria-hidden />}
              title="Confidential Project"
              visualSrc="/images/our-products/confidential-card-visual-2.jpg"
              cta={{ label: "View project", href: "/contact" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
