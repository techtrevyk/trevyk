import React from "react";
import { Link } from "react-router-dom";
import { Layers, ArrowRight, Maximize2, ShieldCheck } from "lucide-react";
import { SiteSettings } from "../../types";
import { soundEngine } from "../../utils/audioEngine";
import { ScrollReveal } from "../ScrollReveal";
import { WowAccent } from "../WowAccent";

interface TechnologyTeaserProps {
  settings: SiteSettings;
  onOpenArchitectureModal: (cubeIndex?: number | null) => void;
  hoveredCube: number | null;
  onCubeHover: (cubeIndex: number | null) => void;
}

export const TechnologyTeaser: React.FC<TechnologyTeaserProps> = ({
  settings,
  onOpenArchitectureModal,
  hoveredCube,
  onCubeHover,
}) => {
  const cubes = [
    {
      name: "Edge Ingress",
      color: "#E8A9C2",
      index: 0,
      tag: "Traffic & protection",
    },
    {
      name: "API Gateway",
      color: "#C4B0E0",
      index: 1,
      tag: "Access & identity",
    },
    {
      name: "Application Services",
      color: "#8B6BA8",
      index: 2,
      tag: "Business logic",
    },
    {
      name: "Domain Core",
      color: "#6B4A87",
      index: 3,
      tag: "Product workflows",
    },
    {
      name: "Data Layer",
      color: "#B9A6D1",
      index: 4,
      tag: "Storage & recovery",
    },
  ];

  return (
    <section
      id="technology-teaser"
      className="relative py-14 sm:py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto relative rounded-3xl border border-[#B9A6D1]/40 bg-[#1E1024]/95 overflow-hidden px-5 sm:px-10 py-10 sm:py-14">
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <ScrollReveal
            className="lg:col-span-5 flex flex-col items-start"
            reducedMotion={settings.reducedMotion}
          >
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#2A1830] border border-[#B9A6D1]/45 text-[#E8A9C2] font-mono-accent text-xs mb-4">
              <span className="font-semibold text-[#F8F6FB]/50">02</span>
              <Layers className="w-3.5 h-3.5" />
              <span>ARCHITECTURE</span>
            </div>

            <h2 className="font-heading font-bold text-2xl sm:text-4xl text-[#F8F6FB] leading-tight">
              The same stack behind product and custom work.
            </h2>

            <p className="mt-4 text-[#B9A6D1] text-sm sm:text-base leading-relaxed">
              Independent layers with explicit boundaries change one domain
              without cascading risk across the platform.
            </p>

            <div className="mt-5 flex items-start gap-2.5 text-xs text-[#E7E1F0] bg-[#2A1830]/80 border border-[#6B4A87]/40 rounded-xl px-3.5 py-3">
              <ShieldCheck className="w-4 h-4 text-[#E8A9C2] shrink-0 mt-0.5" />
              <span>
                Hover a tier to light the layer stack, then open the inspector.
              </span>
            </div>

            <WowAccent
              kind="layers"
              focus={hoveredCube}
              reducedMotion={settings.reducedMotion}
              className="mt-6 w-full max-w-xs"
              caption="Layer stack"
            />

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Link
                to="/technology"
                onClick={() => soundEngine.playClick("soft")}
                className="inline-flex items-center space-x-2 px-5 py-3 rounded-full bg-gradient-to-r from-[#6B4A87] to-[#8558A5] text-white font-heading text-xs sm:text-sm font-semibold"
              >
                <span>Technology deep dive</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <button
                type="button"
                onClick={() => {
                  soundEngine.playClick("hero");
                  onOpenArchitectureModal(null);
                }}
                className="inline-flex items-center space-x-2 px-5 py-3 rounded-full bg-[#2A1830] border border-[#B9A6D1]/45 text-[#E7E1F0] font-heading text-xs sm:text-sm"
              >
                <Maximize2 className="w-3.5 h-3.5 text-[#E8A9C2]" />
                <span>Open inspector</span>
              </button>
            </div>
          </ScrollReveal>

          <ScrollReveal
            className="lg:col-span-7 space-y-2.5"
            variant="right"
            reducedMotion={settings.reducedMotion}
          >
            {cubes.map((cube) => {
              const isHovered = hoveredCube === cube.index;
              return (
                <div
                  key={cube.name}
                  onMouseEnter={() => {
                    soundEngine.playHover();
                    onCubeHover(cube.index);
                  }}
                  onMouseLeave={() => onCubeHover(null)}
                  onClick={() => {
                    soundEngine.playClick("soft");
                    onOpenArchitectureModal(cube.index);
                  }}
                  className={`p-3.5 sm:p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                    isHovered
                      ? "bg-[#2A1830] border-[#E8A9C2] translate-x-1"
                      : "bg-[#24132B] border-[#B9A6D1]/35 hover:border-[#E8A9C2]/55"
                  }`}
                >
                  <div className="flex items-center space-x-3.5">
                    <div
                      className="w-3 h-3 rounded-full shrink-0"
                      style={{ backgroundColor: cube.color }}
                    />
                    <div>
                      <div className="font-heading font-semibold text-xs sm:text-sm text-[#F8F6FB]">
                        {cube.name}
                      </div>
                      <div className="text-[10px] font-mono-accent text-[#B9A6D1]">
                        {cube.tag}
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-[#E8A9C2]" />
                </div>
              );
            })}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
