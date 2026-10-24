import type { LucideIcon } from "lucide-react";
import { useState } from "react";
import {
  ArrowUpRight,
  Building2,
  Check,
  FileText,
  Lightbulb,
  Lock,
  Mail,
  MessageSquare,
  Phone,
  User,
} from "lucide-react";
import { soundEngine } from "../../utils/audioEngine";
import { trackContactSubmit } from "../../utils/analytics";

const STEPS = [
  {
    icon: MessageSquare,
    title: "Understand your needs",
    detail: "We learn about your goals and challenges",
  },
  {
    icon: Lightbulb,
    title: "Explore possibilities",
    detail: "We suggest the right approach for your use case",
  },
  {
    icon: FileText,
    title: "Plan the next steps",
    detail: "We outline solutions, timeline and way forward",
  },
] as const;

const MESSAGE_MAX = 500;

function DiscussKicker() {
  return (
    <div className="flex items-center gap-4">
      <p className="font-mono-accent text-[11px] uppercase tracking-[0.22em] text-[#E8A9C2] sm:text-xs">
        Discuss an AI project
      </p>
      <span
        className="h-px max-w-[8rem] flex-1 bg-gradient-to-r from-[#B9A6D1]/55 to-transparent"
        aria-hidden
      />
    </div>
  );
}

function IconField({
  icon: Icon,
  placeholder,
  value,
  onChange,
  type = "text",
  required,
}: {
  icon: LucideIcon;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="relative min-w-0">
      <Icon
        className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#B9A6D1]/65"
        aria-hidden
      />
      <input
        type={type}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-[#B9A6D1]/32 bg-[#2A1830]/75 py-2.5 pl-9 pr-3 text-sm text-[#F8F6FB] placeholder-[#B9A6D1]/55 focus:border-[#E8A9C2]/55 focus:outline-none"
      />
    </div>
  );
}

export function AiDiscussProjectSection() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    soundEngine.playClick("hero");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "services",
          name: formData.name,
          email: formData.email,
          organization: formData.company,
          phone: formData.phone,
          scope: `[AI Project Discussion]\n${formData.message}`,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(
          data.error || "Could not send your message. Please try again.",
        );
      }
      trackContactSubmit("services");
      setSubmitted(true);
    } catch (err: unknown) {
      setSubmitError(
        err instanceof Error
          ? err.message
          : "Could not send your message. Please email contact@trevyk.com.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="discuss-ai-project"
      aria-labelledby="discuss-ai-project-heading"
      className="relative border-t border-[#6B4A87]/30 bg-[#120a14] py-14 sm:py-16 lg:py-20"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 55% 40% at 78% 22%, rgba(133,88,165,0.28) 0%, transparent 55%)",
        }}
      />

      <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:items-start lg:gap-12 lg:px-8">
        <div className="lg:col-span-5 xl:col-span-5">
          <DiscussKicker />

          <h2
            id="discuss-ai-project-heading"
            className="mt-5 font-heading text-[clamp(1.75rem,3.5vw,2.55rem)] font-bold leading-[1.12] tracking-tight text-[#F8F6FB]"
          >
            Turn your AI idea{" "}
            <span className="bg-gradient-to-r from-[#C4A8E8] via-[#E8A9C2] to-[#F8F6FB] bg-clip-text text-transparent">
              into a working solution.
            </span>
          </h2>

          <p className="mt-4 max-w-md text-base leading-relaxed text-[#C4B4D8] sm:text-[17px]">
            Share your requirements and we&apos;ll discuss how AI can solve your
            business challenges.
          </p>

          <ul className="mt-10 space-y-6">
            {STEPS.map(({ icon: Icon, title, detail }) => (
              <li key={title} className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#E8A9C2]/30 bg-[#55356a]/80 text-[#F8F6FB] shadow-[0_0_18px_rgba(107,74,135,0.35)]">
                  <Icon className="h-[1.1rem] w-[1.1rem]" strokeWidth={1.65} aria-hidden />
                </div>
                <div>
                  <p className="font-heading text-sm font-semibold text-[#F8F6FB] sm:text-base">
                    {title}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-[#B9A6D1]">
                    {detail}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative lg:col-span-7 xl:col-span-7">
          <div
            className="pointer-events-none absolute -right-2 -top-4 hidden opacity-90 sm:block lg:-right-4 lg:-top-6"
            aria-hidden
          >
            <div className="relative h-24 w-24">
              <div className="absolute inset-0 rounded-2xl bg-[#E8A9C2]/15 blur-2xl" />
              <div className="relative flex h-full w-full items-center justify-center rounded-2xl border border-[#E8A9C2]/25 bg-[#2A1830]/60 shadow-[0_0_40px_rgba(232,169,194,0.25)] backdrop-blur-sm">
                <MessageSquare
                  className="h-10 w-10 text-[#E8A9C2]"
                  strokeWidth={1.35}
                />
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-[#B9A6D1]/28 shadow-[0_16px_48px_rgba(0,0,0,0.32)]">
            <div
              className="pointer-events-none absolute inset-0 trevyk-contact-form-card-bg"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-0 trevyk-contact-form-card__blob-tr"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-0 bg-[#1a0f18]/30"
              aria-hidden
            />

            <div className="relative z-10 p-5 sm:p-7 lg:p-8">
              <h3 className="font-heading text-xl font-semibold text-[#F8F6FB] sm:text-2xl">
                Let&apos;s build something useful.
              </h3>
              <p className="mt-1.5 text-sm text-[#B9A6D1]">
                Fill out a few details and we&apos;ll get back to you.
              </p>

              {submitted ? (
                <div className="py-10 text-center sm:text-left">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-[#E8A9C2]/35 bg-[#341C3C] text-[#E8A9C2]">
                    <Check className="h-7 w-7" aria-hidden />
                  </div>
                  <p className="mt-4 font-heading text-lg font-semibold text-[#F8F6FB]">
                    Message sent
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-[#B9A6D1]">
                    Thank you{formData.name ? `, ${formData.name}` : ""}. We will
                    reply within one business day.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      soundEngine.playClick("soft");
                      setSubmitted(false);
                    }}
                    className="mt-6 rounded-xl border border-[#B9A6D1]/35 bg-[#2A1830] px-5 py-2.5 font-mono-accent text-xs text-[#E8A9C2] hover:border-[#E8A9C2]"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <IconField
                      icon={User}
                      placeholder="Your Name"
                      required
                      value={formData.name}
                      onChange={(v) => setFormData({ ...formData, name: v })}
                    />
                    <IconField
                      icon={Mail}
                      type="email"
                      placeholder="Business Email"
                      required
                      value={formData.email}
                      onChange={(v) => setFormData({ ...formData, email: v })}
                    />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <IconField
                      icon={Building2}
                      placeholder="Company Name"
                      required
                      value={formData.company}
                      onChange={(v) => setFormData({ ...formData, company: v })}
                    />
                    <IconField
                      icon={Phone}
                      type="tel"
                      placeholder="Phone Number (Optional)"
                      value={formData.phone}
                      onChange={(v) => setFormData({ ...formData, phone: v })}
                    />
                  </div>

                  <div className="relative">
                    <FileText
                      className="pointer-events-none absolute left-3 top-3.5 h-4 w-4 text-[#B9A6D1]/65"
                      aria-hidden
                    />
                    <textarea
                      required
                      rows={4}
                      maxLength={MESSAGE_MAX}
                      placeholder="Tell us about your project or requirements"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full resize-none rounded-xl border border-[#B9A6D1]/32 bg-[#2A1830]/75 py-3 pl-9 pr-3 text-sm text-[#F8F6FB] placeholder-[#B9A6D1]/55 focus:border-[#E8A9C2]/55 focus:outline-none"
                    />
                  </div>

                  <div className="flex flex-col gap-4 pt-1 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#E8A9C2] to-[#d892ad] px-6 py-3 font-heading text-sm font-semibold text-[#1E1024] shadow-[0_10px_28px_rgba(232,169,194,0.28)] transition hover:brightness-105 disabled:opacity-50"
                    >
                      {isSubmitting ? "Sending…" : "Start a Conversation"}
                      <ArrowUpRight className="h-4 w-4" aria-hidden />
                    </button>
                    <p className="flex items-center gap-2 text-xs text-[#B9A6D1]">
                      <Lock className="h-3.5 w-3.5 shrink-0 text-[#E8A9C2]/80" aria-hidden />
                      Your information is kept confidential.
                    </p>
                  </div>

                  {submitError ? (
                    <p className="text-xs leading-relaxed text-red-300">
                      {submitError}
                    </p>
                  ) : null}
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
