import React from "react";
import { SitemapEssentialsSection } from "../components/sitemap/SitemapEssentialsSection";
import { SitemapHeroSection } from "../components/sitemap/SitemapHeroSection";
import { SitemapServiceGuidesSection } from "../components/sitemap/SitemapServiceGuidesSection";

export const SitemapPage: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-[#120a14]">
      <SitemapHeroSection />
      <SitemapEssentialsSection />
      <SitemapServiceGuidesSection />
    </div>
  );
};
