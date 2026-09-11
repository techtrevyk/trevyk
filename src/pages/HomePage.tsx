import React from "react";
import { SiteSettings } from "../types";
import { Hero } from "../components/Hero";
import { ServicesTeaser } from "../components/home/ServicesTeaser";
import { TechnologyTeaser } from "../components/home/TechnologyTeaser";
import { KiduartTeaser } from "../components/home/KiduartTeaser";
import { ProcessTeaser } from "../components/home/ProcessTeaser";
import { AboutTeaser } from "../components/home/AboutTeaser";
import { ContactTeaser } from "../components/home/ContactTeaser";
import { SectionBridge } from "../components/SectionBridge";
import { ProductProcessTransition } from "../components/ProductProcessTransition";
import { ProcessStatsTransition } from "../components/ProcessStatsTransition";
import { TestimonialsCtaTransition } from "../components/TestimonialsCtaTransition";
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
          { top: "18%", height: "12%", tone: "pink" },
          { top: "42%", height: "14%", tone: "ink" },
          { top: "68%", height: "12%", tone: "lilac" },
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
        reducedMotion={quiet}
        tone="pink"
      />

      <ServicesTeaser settings={settings} />

      <SectionBridge
        label="Architecture"
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
        reducedMotion={quiet}
        tone="lilac"
      />

      <KiduartTeaser settings={settings} />

      <ProductProcessTransition
        scrollProgress={scrollProgress}
        reducedMotion={quiet}
      />

      <ProcessTeaser settings={settings} />

      <ProcessStatsTransition
        scrollProgress={scrollProgress}
        reducedMotion={quiet}
      />

      <AboutTeaser settings={settings} />

      <TestimonialsCtaTransition
        scrollProgress={scrollProgress}
        reducedMotion={quiet}
      />

      <ContactTeaser settings={settings} onOpenGeminiChat={onOpenGeminiChat} />
    </div>
  );
};
