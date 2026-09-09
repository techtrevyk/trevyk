import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Layers, 
  ArrowRight, 
  Shield, 
  Zap, 
  Cpu, 
  Maximize2,
  ExternalLink
} from 'lucide-react';
import { SiteSettings } from '../../types';
import { soundEngine } from '../../utils/audioEngine';

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
    { name: 'Edge Ingress', color: '#E8A9C2', index: 0, tag: 'L7 / DDoS Scrubbing' },
    { name: 'API Gateway', color: '#BEABD6', index: 1, tag: 'mTLS / JWT Zero-Trust' },
    { name: 'Distributed Services', color: '#8B5CAD', index: 2, tag: 'gRPC / Kafka Cluster' },
    { name: 'ERP Core Engine', color: '#5A3875', index: 3, tag: 'Domain Rules & IoT' },
    { name: 'Data Lake & SQL', color: '#E0D8EC', index: 4, tag: 'ClickHouse / Aurora' },
  ];

  return (
    <section
      id="technology-teaser"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-[#FFFFFF] rounded-3xl border border-[#8B5CAD]/30 my-8 shadow-2xl overflow-hidden"
    >
      {/* Background Accent Glow */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-[#8B5CAD]/20 to-[#E8A9C2]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        {/* Left Column: Heading & System Philosophy */}
        <div className="lg:col-span-6 flex flex-col items-start">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#F7F4FA] border border-[#8B5CAD]/40 text-[#8B5CAD] font-mono-accent text-xs mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>02 // THE 5-CUBE ARCHITECTURE</span>
          </div>

          <h2 className="font-heading font-bold text-2xl sm:text-4xl text-[#241428] leading-tight">
            Modular By Design. Resilient By Architecture.
          </h2>

          <p className="mt-4 text-[#5C4A6E] text-sm sm:text-base leading-relaxed">
            Our software stack mirrors the physical world: independent modular blocks with decoupled failure domains. When any tier experiences peak surge or maintenance, the rest of the cluster operates uninterrupted.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              to="/technology"
              onClick={() => soundEngine.playClick('soft')}
              className="inline-flex items-center space-x-2 px-5 py-3 rounded-full bg-gradient-to-r from-[#8B5CAD] to-[#E8A9C2] text-[#241428] font-heading text-xs sm:text-sm font-semibold hover:opacity-95 transition-opacity shadow-md"
            >
              <span>Explore 3D Technology Deep Dive</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <button
              onClick={() => {
                soundEngine.playClick('hero');
                onOpenArchitectureModal(null);
              }}
              className="inline-flex items-center space-x-2 px-5 py-3 rounded-full bg-[#F7F4FA] border border-[#8B5CAD]/40 text-[#5C4A6E] hover:text-[#241428] hover:border-[#E8A9C2] font-heading text-xs sm:text-sm font-medium transition-all"
            >
              <Maximize2 className="w-3.5 h-3.5 text-[#E8A9C2]" />
              <span>Launch Interactive Inspector</span>
            </button>
          </div>
        </div>

        {/* Right Column: 5 Interactive Tier Selector Cards */}
        <div className="lg:col-span-6 space-y-2.5">
          <div className="text-xs font-mono-accent text-[#5C4A6E] mb-2 flex items-center justify-between">
            <span>ISOMETRIC COMPONENT TIERS</span>
            <span className="text-[10px] text-[#E8A9C2]">HOVER TO FOCUS 3D BLOCK</span>
          </div>

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
                  soundEngine.playClick('soft');
                  onOpenArchitectureModal(cube.index);
                }}
                className={`p-3.5 sm:p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                  isHovered
                    ? 'bg-[#F7F4FA] border-[#E8A9C2] shadow-[0_0_20px_rgba(232,169,194,0.15)] translate-x-1'
                    : 'bg-[#FFFFFF]/60 border-[#8B5CAD]/30 hover:border-[#8B5CAD] hover:bg-[#F7F4FA]/80'
                }`}
              >
                <div className="flex items-center space-x-3.5">
                  <div
                    className="w-3 h-3 rounded-full shrink-0 transition-transform duration-300"
                    style={{
                      backgroundColor: cube.color,
                      transform: isHovered ? 'scale(1.4)' : 'scale(1)',
                      boxShadow: isHovered ? `0 0 10px ${cube.color}` : 'none',
                    }}
                  />
                  <div>
                    <div className="font-heading font-semibold text-xs sm:text-sm text-[#241428]">
                      {cube.name}
                    </div>
                    <div className="text-[10px] sm:text-[11px] font-mono-accent text-[#5C4A6E]">
                      {cube.tag}
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2 text-[11px] font-mono-accent text-[#8B5CAD]">
                  <span className="hidden sm:inline">Tier 0{cube.index + 1}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
