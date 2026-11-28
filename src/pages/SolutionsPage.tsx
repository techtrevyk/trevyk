import React from "react";
import { SolutionsHeroSection } from "../components/solutions/SolutionsHeroSection";
import { SolutionsHubSection } from "../components/solutions/SolutionsHubSection";

export const SolutionsPage: React.FC = () => {
  return (
    <div className="relative overflow-hidden">
      <SolutionsHeroSection />
      <SolutionsHubSection />
    </div>
  );
};
