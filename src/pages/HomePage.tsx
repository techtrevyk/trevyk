import React from "react";
import { SiteSettings } from "../types";
import { Hero } from "../components/Hero";
import { ServicesTeaser } from "../components/home/ServicesTeaser";
import { TechnologyTeaser } from "../components/home/TechnologyTeaser";
import { KiduartTeaser } from "../components/home/KiduartTeaser";
import { ProcessTeaser } from "../components/home/ProcessTeaser";
import { AboutTeaser } from "../components/home/AboutTeaser";
import { ContactTeaser } from "../components/home/ContactTeaser";
import { ProofStrip } from "../components/home/ProofStrip";
import { SectionBridge } from "../components/SectionBridge";
import { PageAtmosphere } from "../components/PageAtmosphere";

interface HomePageProps {
  settings: SiteSettings;
  scrollProgress: number;
  mousePos: { x: number; y: number };
  onOpenArchitectureModal: (index?: number | null) => void;
  hoveredCube: number | null;
  onCubeHover: (index: number | null) => void;
  onOpenGeminiChat?: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  settings,
  scrollProgress,
  mousePos,
  onOpenArchitectureModal,
  hoveredCube,
  onCubeHover,
  onOpenGeminiChat,
}) => {
  const quiet = settings.reducedMotion;

  return (
    <div id="home-page" className="relative w-full">
      <PageAtmosphere
        variant="home"
        bands={[
          { top: "18%", height: "10%", tone: "pink" },
          { top: "48%", height: "10%", tone: "ink" },
          { top: "72%", height: "10%", tone: "lilac" },
        ]}
      />

      <Hero
        settings={settings}
        scrollProgress={scrollProgress}
        mousePos={mousePos}
        onOpenArchitectureModal={() => onOpenArchitectureModal(null)}
        hoveredCube={hoveredCube}
        onCubeHover={onCubeHover}
      />

      <SectionBridge
        label="Capabilities"
        compact
        stream={false}
        reducedMotion={quiet}
        tone="pink"
      />

      <ServicesTeaser settings={settings} />

      <SectionBridge
        label="Architecture"
        compact
        stream={false}
        reducedMotion={quiet}
        tone="dark"
      />

      <TechnologyTeaser
        settings={settings}
        onOpenArchitectureModal={onOpenArchitectureModal}
        hoveredCube={hoveredCube}
        onCubeHover={onCubeHover}
      />

      <SectionBridge
        label="Flagship product"
        compact
        stream={false}
        reducedMotion={quiet}
        tone="lilac"
      />

      <KiduartTeaser settings={settings} />

      <SectionBridge
        label="Delivery"
        compact
        stream={false}
        reducedMotion={quiet}
        tone="dark"
      />

      <ProcessTeaser settings={settings} />

      <SectionBridge
        label="Company"
        compact
        stream={false}
        reducedMotion={quiet}
        tone="pink"
      />

      <AboutTeaser settings={settings} />

      <ProofStrip settings={settings} />

      <SectionBridge
        label="Engage"
        compact
        stream={false}
        reducedMotion={quiet}
        tone="lilac"
      />

      <ContactTeaser settings={settings} onOpenGeminiChat={onOpenGeminiChat} />
    </div>
  );
};
