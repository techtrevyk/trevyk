import { Link } from "react-router-dom";
import { testimonialsSection } from "../../../content/home";
import { SectionLabel } from "../ui/SectionLabel";
import { PageContainer } from "../ui/PageContainer";

type TestimonialsProps = {
  /** Transparent section over sticky solar video (footer stage). */
  overSolar?: boolean;
};

/**
 * Honest empty state until a real client approves a quote in writing.
 * Do not ship fabricated names, countries, or “real review” claims.
 */
export function Testimonials({ overSolar = false }: TestimonialsProps) {
  const { label, title, subtitle, commitments, cta, stories, slotTemplate } =
    testimonialsSection;
  const hasStories = stories.length > 0;

  return (
    <section
      id="case-study-slot"
      className={`relative border-t py-24 md:py-32 ${
        overSolar
          ? "border-plum-lavender/20 bg-transparent"
          : "z-10 border-border bg-background"
      }`}
    >
      <PageContainer>
        <SectionLabel>{label}</SectionLabel>
        <h2 className="font-display mt-5 max-w-3xl text-3xl font-semibold text-plum-neutral md:text-4xl">
          {title}
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-plum-lavender md:text-base">
          {subtitle}
        </p>

        {hasStories ? (
          <ul className="mt-14 grid gap-6 md:grid-cols-2">
            {stories.map((story) => (
              <li
                key={`${story.organization}-${story.city}`}
                className="rounded-3xl border border-plum-lavender/20 bg-plum-primary/15 p-6 md:p-8"
              >
                <p className="font-mono text-[10px] uppercase tracking-widest text-plum-lavender">
                  Case study · consent on file
                </p>
                <h3 className="mt-3 font-display text-xl font-semibold text-plum-neutral">
                  {story.organization}
                </h3>
                <p className="mt-1 text-sm text-plum-lavender">
                  {story.city} · {story.personRole}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-plum-lavender">
                  {story.shipped}
                </p>
                <p className="mt-3 text-sm font-medium text-plum-neutral">
                  {story.outcome}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <div className="mt-14 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-10">
            <ul className="space-y-4 rounded-3xl border border-plum-lavender/20 bg-plum-primary/15 p-6 md:p-8">
              {commitments.map((line) => (
                <li
                  key={line}
                  className="flex items-start gap-3 text-sm leading-relaxed text-plum-lavender"
                >
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-plum-accent"
                    aria-hidden
                  />
                  <span>{line}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col justify-between rounded-3xl border border-dashed border-plum-lavender/35 bg-plum-primary/10 p-6 md:p-8">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-plum-lavender">
                  Case-study slot — empty on purpose
                </p>
                <p className="mt-4 text-sm leading-relaxed text-plum-lavender">
                  {slotTemplate}
                </p>
                <div className="mt-6 space-y-3" aria-hidden>
                  <div className="h-3 w-1/3 rounded bg-plum-primary/40" />
                  <div className="h-3 w-1/2 rounded bg-plum-primary/40" />
                  <div className="h-16 rounded-xl border border-plum-lavender/15 bg-plum-primary/25" />
                </div>
              </div>
              <Link
                to={cta.href}
                className="mt-8 inline-flex w-fit text-sm font-medium text-plum-neutral underline-offset-4 hover:underline"
              >
                {cta.label}
              </Link>
            </div>
          </div>
        )}
      </PageContainer>
    </section>
  );
}
