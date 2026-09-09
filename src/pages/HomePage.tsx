import React from 'react';
import { SiteSettings } from '../types';
import { Hero } from '../components/Hero';
import { ServicesTeaser } from '../components/home/ServicesTeaser';
import { TechnologyTeaser } from '../components/home/TechnologyTeaser';
import { KiduartTeaser } from '../components/home/KiduartTeaser';
import { ProcessTeaser } from '../components/home/ProcessTeaser';
import { AboutTeaser } from '../components/home/AboutTeaser';
import { ContactTeaser } from '../components/home/ContactTeaser';
import { BrandGradientDivider } from '../components/BrandGradientBar';

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
    <div id="home-page" className="w-full">
      {/* 1. Hero Viewport (Single active animated focal element: 3D Core Block) */}
      <Hero
        settings={settings}
        scrollProgress={scrollProgress}
        mousePos={mousePos}
        onOpenArchitectureModal={() => onOpenArchitectureModal(null)}
        hoveredCube={hoveredCube}
        onCubeHover={onCubeHover}
      />

      <BrandGradientDivider />

      {/* 2. Services Teaser (Compact preview with real datacenter graphic) */}
      <ServicesTeaser settings={settings} />

      <BrandGradientDivider />

      {/* 3. Technology (5-Cube Core Architecture) Teaser */}
      <TechnologyTeaser
        settings={settings}
        onOpenArchitectureModal={onOpenArchitectureModal}
        hoveredCube={hoveredCube}
        onCubeHover={onCubeHover}
      />

      <BrandGradientDivider />

      {/* 4. Flagship Product (Kiduart School ERP) Teaser — Light Section with Real UI Mockup */}
      <KiduartTeaser settings={settings} />

      <BrandGradientDivider />

      {/* 5. Delivery Process Teaser */}
      <ProcessTeaser settings={settings} />

      <BrandGradientDivider />

      {/* 6. About Trevyk & Team Leadership Teaser with Real Studio Photography */}
      <AboutTeaser settings={settings} />

      <BrandGradientDivider />

      {/* 7. Contact & Architecture Blueprint Consultation Teaser */}
      <ContactTeaser
        settings={settings}
        onOpenGeminiChat={onOpenGeminiChat}
      />
    </div>
  );
};
