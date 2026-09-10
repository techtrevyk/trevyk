import React from "react";
import { SiteSettings } from "../types";
import { Hero } from "../components/Hero";
import { ServicesTeaser } from "../components/home/ServicesTeaser";
import { TechnologyTeaser } from "../components/home/TechnologyTeaser";
import { KiduartTeaser } from "../components/home/KiduartTeaser";
import { ProcessTeaser } from "../components/home/ProcessTeaser";
import { AboutTeaser } from "../components/home/AboutTeaser";
import { ContactTeaser } from "../components/home/ContactTeaser";
import { BrandGradientDivider } from "../components/BrandGradientBar";
import { ConnectiveStream } from "../components/ConnectiveStream";

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
  return (
    <div id="home-page" className="relative w-full">
      {/* Continuous atmospheric wash — keeps sections in one color story */}
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-40"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 20% 10%, rgba(107,74,135,0.18), transparent 50%), radial-gradient(ellipse 60% 40% at 90% 60%, rgba(232,169,194,0.08), transparent 55%)",
        }}
      />

      <Hero
        settings={settings}
        scrollProgress={scrollProgress}
        mousePos={mousePos}
        onOpenArchitectureModal={() => onOpenArchitectureModal(null)}
        hoveredCube={hoveredCube}
        onCubeHover={onCubeHover}
      />

      <ConnectiveStream
        scrollProgress={scrollProgress}
        reducedMotion={settings.reducedMotion}
      />

      <ServicesTeaser settings={settings} />

      <BrandGradientDivider label="Architecture" />

      <TechnologyTeaser
        settings={settings}
        onOpenArchitectureModal={onOpenArchitectureModal}
        hoveredCube={hoveredCube}
        onCubeHover={onCubeHover}
      />

      <ConnectiveStream
        scrollProgress={scrollProgress}
        reducedMotion={settings.reducedMotion}
      />

      <KiduartTeaser settings={settings} />

      <BrandGradientDivider label="Delivery" />

      <ProcessTeaser settings={settings} />

      <BrandGradientDivider label="Company" />

      <AboutTeaser settings={settings} />

      <ConnectiveStream
        scrollProgress={scrollProgress}
        reducedMotion={settings.reducedMotion}
      />

      <ContactTeaser settings={settings} onOpenGeminiChat={onOpenGeminiChat} />
    </div>
  );
};
