import React from "react";
import { PortfolioHeroSection } from "../components/portfolio/PortfolioHeroSection";
import { PortfolioProjectsSection } from "../components/portfolio/PortfolioProjectsSection";

export const PortfolioPage: React.FC = () => {
  return (
    <div className="relative overflow-hidden">
      <PortfolioHeroSection />
      <PortfolioProjectsSection />
    </div>
  );
};
