import React from "react";
import { AiApproachSection } from "../components/ai/AiApproachSection";
import { AiDiscussProjectSection } from "../components/ai/AiDiscussProjectSection";
import { AiHeroSection } from "../components/ai/AiHeroSection";
import { AiUseCasesSection } from "../components/ai/AiUseCasesSection";
import { AiWhatWeBuildSection } from "../components/ai/AiWhatWeBuildSection";

export const AiPage: React.FC = () => {
  return (
    <div className="relative overflow-hidden">
      <AiHeroSection />
      <AiWhatWeBuildSection />
      <AiUseCasesSection />
      <AiApproachSection />
      <AiDiscussProjectSection />
    </div>
  );
};
