import React from 'react';
import { Link } from 'react-router-dom';
import {
  Layers,
  ArrowRight,
  Maximize2,
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
  onOpenArchitectureModal,
  hoveredCube,
  onCubeHover,
}) => {
  const cubes = [
    { name: 'Edge Ingress', color: '#E8A9C2', index: 0, tag: 'Traffic & protection' },
    { name: 'API Gateway', color: '#C4B0E0', index: 1, tag: 'Access & identity' },
    { name: 'Application Services', color: '#8B6BA8', index: 2, tag: 'Business logic' },
    { name: 'Domain Core', color: '#6B4A87', index: 3, tag: 'Product workflows' },
    { name: 'Data Layer', color: '#B9A6D1', index: 4, tag: 'Storage & recovery' },
  ];

  return (
    <section
      id="technology-teaser"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-[#1E1024] rounded-3xl border border-[#B9A6D1]/40 my-8 shadow-[0_24px_60px_rgba(0,0,0,0.38)] overflow-hidden"
    >
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-[#6B4A87]/25 to-[#E8A9C2]/10 rounded-full blur-3xl pointer-events-none" />
      {/* Distinctive element: floating tier counter */}
      <div className="absolute top-6 right-6 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#2A1830]/90 border border-[#E8A9C2]/35 font-mono-accent text-[10px] text-[#E8A9C2]">
        <span className="w-1.5 h-1.5 rounded-full bg-[#E8A9C2]" />
        5 ISOLATED TIERS
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6 flex flex-col items-start">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#2A1830] border border-[#B9A6D1]/45 text-[#E8A9C2] font-mono-accent text-xs mb-4">
            <span className="font-semibold text-[#F8F6FB]/50">02</span>
            <Layers className="w-3.5 h-3.5" />
            <span>ARCHITECTURE</span>
          </div>

          <h2 className="font-heading font-bold text-2xl sm:text-4xl text-[#F8F6FB] leading-tight">
            Modular by design. Resilient by default.
          </h2>

          <p className="mt-4 text-[#B9A6D1] text-sm sm:text-base leading-relaxed">
            We structure software as independent layers with clear boundaries —
            so a change in one domain does not cascade through the entire
            system. Explore the model interactively, then deep-dive on the
            technology page.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              to="/technology"
              onClick={() => soundEngine.playClick('soft')}
              className="inline-flex items-center space-x-2 px-5 py-3 rounded-full bg-gradient-to-r from-[#6B4A87] to-[#8558A5] text-white font-heading text-xs sm:text-sm font-semibold hover:opacity-95 transition-opacity shadow-md"
            >
              <span>Technology deep dive</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <button
              onClick={() => {
                soundEngine.playClick('hero');
                onOpenArchitectureModal(null);
              }}
              className="inline-flex items-center space-x-2 px-5 py-3 rounded-full bg-[#2A1830] border border-[#B9A6D1]/45 text-[#E7E1F0] hover:text-[#F8F6FB] hover:border-[#E8A9C2] font-heading text-xs sm:text-sm font-medium transition-all"
            >
              <Maximize2 className="w-3.5 h-3.5 text-[#E8A9C2]" />
              <span>Open inspector</span>
            </button>
          </div>
        </div>

        <div className="lg:col-span-6 space-y-2.5">
          <div className="text-xs font-mono-accent text-[#B9A6D1] mb-2 flex items-center justify-between">
            <span>SYSTEM LAYERS</span>
            <span className="text-[10px] text-[#E8A9C2]">HOVER TO FOCUS</span>
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
                    ? 'bg-[#2A1830] border-[#E8A9C2] shadow-[0_0_20px_rgba(232,169,194,0.2)] translate-x-1'
                    : 'bg-[#24132B] border-[#B9A6D1]/35 hover:border-[#E8A9C2]/55 hover:bg-[#2A1830]'
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
                    <div className="font-heading font-semibold text-xs sm:text-sm text-[#F8F6FB]">
                      {cube.name}
                    </div>
                    <div className="text-[10px] sm:text-[11px] font-mono-accent text-[#B9A6D1]">
                      {cube.tag}
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2 text-[11px] font-mono-accent text-[#E8A9C2]/80">
                  <span className="hidden sm:inline">0{cube.index + 1}</span>
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
