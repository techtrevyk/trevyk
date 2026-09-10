import React from "react";

export type AtmosphereVariant =
  | "services"
  | "technology"
  | "kiduart"
  | "process"
  | "about"
  | "contact";

interface PageAtmosphereProps {
  variant: AtmosphereVariant;
  /** Optional mid-page light lilac band for rhythm (absolute %, of page height) */
  lightBand?: { top: string; height: string };
}

const VARIANT_GLOWS: Record<
  AtmosphereVariant,
  { left: string; right: string; bottom?: string; wash: string }
> = {
  services: {
    left: "radial-gradient(ellipse 55% 45% at 12% 18%, rgba(107,74,135,0.34), transparent 60%)",
    right:
      "radial-gradient(ellipse 42% 38% at 88% 22%, rgba(232,169,194,0.14), transparent 55%)",
    bottom:
      "radial-gradient(ellipse 50% 35% at 50% 95%, rgba(185,166,209,0.12), transparent 60%)",
    wash: "linear-gradient(180deg, #1E1024 0%, #2A1830 32%, #241428 72%, #2A1830 100%)",
  },
  technology: {
    left: "radial-gradient(ellipse 50% 42% at 8% 20%, rgba(107,74,135,0.36), transparent 58%)",
    right:
      "radial-gradient(ellipse 48% 40% at 92% 28%, rgba(196,176,224,0.16), transparent 55%)",
    bottom:
      "radial-gradient(ellipse 40% 30% at 70% 88%, rgba(232,169,194,0.1), transparent 55%)",
    wash: "linear-gradient(180deg, #1A0D20 0%, #2A1830 38%, #1E1024 70%, #2A1830 100%)",
  },
  kiduart: {
    left: "radial-gradient(ellipse 52% 40% at 10% 16%, rgba(107,74,135,0.3), transparent 58%)",
    right:
      "radial-gradient(ellipse 45% 36% at 90% 20%, rgba(232,169,194,0.16), transparent 55%)",
    bottom:
      "radial-gradient(ellipse 60% 40% at 40% 100%, rgba(231,225,240,0.08), transparent 55%)",
    wash: "linear-gradient(180deg, #1E1024 0%, #2A1830 30%, #2A1830 100%)",
  },
  process: {
    left: "radial-gradient(ellipse 48% 40% at 14% 22%, rgba(107,74,135,0.32), transparent 58%)",
    right:
      "radial-gradient(ellipse 40% 34% at 86% 18%, rgba(185,166,209,0.14), transparent 55%)",
    bottom:
      "radial-gradient(ellipse 45% 32% at 55% 92%, rgba(232,169,194,0.1), transparent 55%)",
    wash: "linear-gradient(180deg, #1E1024 0%, #241428 40%, #2A1830 100%)",
  },
  about: {
    left: "radial-gradient(ellipse 55% 42% at 12% 14%, rgba(107,74,135,0.34), transparent 58%)",
    right:
      "radial-gradient(ellipse 44% 36% at 90% 24%, rgba(232,169,194,0.12), transparent 55%)",
    bottom:
      "radial-gradient(ellipse 50% 30% at 30% 90%, rgba(185,166,209,0.1), transparent 55%)",
    wash: "linear-gradient(180deg, #1A0D20 0%, #2A1830 36%, #2A1830 100%)",
  },
  contact: {
    left: "radial-gradient(ellipse 50% 40% at 10% 18%, rgba(107,74,135,0.3), transparent 58%)",
    right:
      "radial-gradient(ellipse 42% 34% at 88% 16%, rgba(232,169,194,0.14), transparent 55%)",
    bottom:
      "radial-gradient(ellipse 55% 36% at 60% 95%, rgba(107,74,135,0.18), transparent 55%)",
    wash: "linear-gradient(180deg, #1E1024 0%, #2A1830 42%, #241428 100%)",
  },
};

/**
 * Shared page-depth atmosphere — breaks flat single-color pages with
 * layered washes, mesh, floating orbs, and optional light lilac bands.
 */
export const PageAtmosphere: React.FC<PageAtmosphereProps> = ({
  variant,
  lightBand,
}) => {
  const g = VARIANT_GLOWS[variant];

  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      <div
        className="absolute inset-0"
        style={{ background: g.wash }}
      />
      <div className="absolute inset-0" style={{ background: g.left }} />
      <div className="absolute inset-0" style={{ background: g.right }} />
      {g.bottom ? (
        <div className="absolute inset-0" style={{ background: g.bottom }} />
      ) : null}

      {/* Soft mesh grid — fades on the right so 3D companion stays clear */}
      <div
        className="absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage:
            "linear-gradient(#B9A6D1 1px, transparent 1px), linear-gradient(90deg, #B9A6D1 1px, transparent 1px)",
          backgroundSize: "52px 52px",
          maskImage:
            "linear-gradient(90deg, black 0%, black 52%, transparent 92%)",
        }}
      />

      {/* Diagonal sheen — breaks flat color */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          background:
            "linear-gradient(125deg, transparent 35%, rgba(231,225,240,0.35) 48%, transparent 62%)",
        }}
      />

      {/* Floating depth orbs */}
      <div className="absolute top-[18%] left-[6%] w-40 h-40 rounded-full bg-[#6B4A87]/20 blur-3xl" />
      <div className="absolute top-[42%] right-[8%] w-56 h-56 rounded-full bg-[#E8A9C2]/12 blur-3xl" />
      <div className="absolute bottom-[12%] left-[28%] w-48 h-48 rounded-full bg-[#B9A6D1]/10 blur-3xl" />

      {/* Optional light lilac band for mid-page rhythm */}
      {lightBand ? (
        <div
          className="absolute left-0 right-0"
          style={{
            top: lightBand.top,
            height: lightBand.height,
            background:
              "linear-gradient(180deg, transparent 0%, rgba(231,225,240,0.09) 25%, rgba(231,225,240,0.14) 50%, rgba(231,225,240,0.09) 75%, transparent 100%)",
          }}
        />
      ) : null}

      {/* Corner frames — continuity with home hero */}
      <div className="absolute top-24 left-4 sm:left-8 w-8 h-8 border-l border-t border-[#E8A9C2]/30" />
      <div className="absolute top-24 right-4 sm:right-10 w-8 h-8 border-r border-t border-[#B9A6D1]/25" />
      <div className="absolute bottom-10 left-4 sm:left-8 w-8 h-8 border-l border-b border-[#B9A6D1]/20" />
      <div className="absolute bottom-10 right-4 sm:right-10 w-8 h-8 border-r border-b border-[#E8A9C2]/20" />
    </div>
  );
};
