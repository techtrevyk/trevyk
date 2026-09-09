import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Layers, 
  ShieldCheck, 
  Cpu, 
  Database, 
  Server, 
  Zap, 
  Lock, 
  Globe2, 
  Terminal, 
  GitBranch,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Filter,
  Code2,
  Flame,
  Binary,
  Workflow
} from 'lucide-react';
import { SiteSettings, TechCategory, TechCapabilityItem } from '../types';
import { ARCHITECTURE_CUBES } from '../data/architecture';
import { CAPABILITIES_DATA } from '../data/capabilities';
import { BrandGradientDivider } from '../components/BrandGradientBar';
import { soundEngine } from '../utils/audioEngine';
import { Link } from 'react-router-dom';

interface TechnologyPageProps {
  settings: SiteSettings;
  onOpenArchitectureModal: (cubeIndex?: number | null) => void;
  hoveredCube: number | null;
  onCubeHover: (index: number | null) => void;
}

export const TechnologyPage: React.FC<TechnologyPageProps> = ({
  settings,
  onOpenArchitectureModal,
  hoveredCube,
  onCubeHover,
}) => {
  const [selectedCube, setSelectedCube] = useState<number>(0);
  const [activeCategory, setActiveCategory] = useState<TechCategory>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filterTabs: { id: TechCategory; label: string; count?: number }[] = [
    { id: 'all', label: 'All Stack' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'cloud', label: 'Cloud & DevOps' },
    { id: 'testing', label: 'Quality & Testing' },
    { id: 'ai', label: 'Data & AI' },
    { id: 'databases', label: 'Databases' },
  ];

  const filteredCapabilities = CAPABILITIES_DATA.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.usageNote.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tag.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const activeCubeData = ARCHITECTURE_CUBES[selectedCube] || ARCHITECTURE_CUBES[0];

  return (
    <div id="technology-page" className="w-full min-h-screen pt-28 sm:pt-36 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#FFFFFF] border border-[#6B4A87]/40 text-[#6B4A87] font-mono-accent text-xs mb-4">
            <Terminal className="w-3.5 h-3.5" />
            <span>ENGINEERING SPECIFICATION & CAPABILITY ATLAS</span>
          </div>

          <h1 className="font-heading font-bold text-3xl sm:text-5xl lg:text-6xl text-[#241428] leading-tight">
            The Trevyk Capability Atlas & Architecture
          </h1>

          <p className="mt-5 text-[#5C4A6E] text-base sm:text-lg leading-relaxed">
            A precise technical taxonomy of our production stack. We select proven, high-concurrency technologies to construct modular, fault-tolerant software systems with measurable performance SLAs.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* SECTION 1: THE CAPABILITY ATLAS (FILTERABLE FLIP GRID)                   */}
        {/* ========================================================================= */}
        <div className="mt-14">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-[#6B4A87]/30">
            
            {/* Filter Tabs with FLIP-style Layout Transitions */}
            <div className="flex flex-wrap gap-2">
              {filterTabs.map((tab) => {
                const isActive = activeCategory === tab.id;
                const count = tab.id === 'all' 
                  ? CAPABILITIES_DATA.length 
                  : CAPABILITIES_DATA.filter(c => c.category === tab.id).length;

                return (
                  <button
                    key={tab.id}
                    onClick={() => {
                      soundEngine.playClick('soft');
                      setActiveCategory(tab.id);
                    }}
                    className={`relative px-4 py-2 rounded-full text-xs font-mono-accent transition-all flex items-center space-x-1.5 ${
                      isActive
                        ? 'text-[#241428] font-bold bg-[#E8A9C2] shadow-[0_0_15px_rgba(232,169,194,0.35)]'
                        : 'bg-[#FFFFFF] text-[#5C4A6E]/70 hover:text-[#241428] border border-[#6B4A87]/35 hover:border-[#6B4A87]'
                    }`}
                  >
                    <span>{tab.label}</span>
                    <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      isActive ? 'bg-[#FFFFFF] text-[#E8A9C2]' : 'bg-[#F7F4FA] text-[#5C4A6E]'
                    }`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Quick Search Filter */}
            <div className="relative w-full md:w-64">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Filter by tech or protocol..."
                className="w-full bg-[#FFFFFF] border border-[#6B4A87]/40 focus:border-[#E8A9C2] rounded-xl px-3.5 py-2 text-xs font-mono-accent text-[#241428] placeholder-[#5C4A6E]/50 outline-none transition-colors"
              />
            </div>
          </div>

          {/* FLIP-Animated Capability Card Grid */}
          <motion.div 
            layout
            className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
          >
            <AnimatePresence>
              {filteredCapabilities.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  className="p-5 rounded-2xl bg-[#FFFFFF]/90 border border-[#6B4A87]/30 hover:border-[#E8A9C2]/60 hover:bg-[#F5F1F8] transition-all flex flex-col justify-between group shadow-lg"
                >
                  <div>
                    {/* Header Row: Tech Category & Badge */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-mono-accent px-2 py-0.5 rounded bg-[#F7F4FA] text-[#E8A9C2] border border-[#6B4A87]/35 uppercase">
                        {item.category}
                      </span>
                      <span className="text-[10px] font-mono-accent text-[#5C4A6E]">
                        {item.tag}
                      </span>
                    </div>

                    {/* Tech Name */}
                    <h3 className="font-heading font-bold text-base sm:text-lg text-[#241428] group-hover:text-[#E8A9C2] transition-colors flex items-center space-x-2">
                      <span
                        className="w-2.5 h-2.5 rounded-full inline-block shrink-0"
                        style={{ backgroundColor: item.color }}
                      />
                      <span>{item.name}</span>
                    </h3>

                    {/* One-Line Usage Note on How Trevyk Uses It */}
                    <p className="mt-2 text-xs text-[#5C4A6E]/80 leading-relaxed font-sans">
                      {item.usageNote}
                    </p>
                  </div>

                  {/* Footer Tag */}
                  <div className="mt-4 pt-3 border-t border-[#6B4A87]/20 flex items-center justify-between text-[11px] font-mono-accent text-[#5C4A6E]">
                    <span>{item.badge}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#E8A9C2] opacity-70 group-hover:opacity-100 transition-opacity" />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredCapabilities.length === 0 && (
            <div className="text-center py-16 bg-[#FFFFFF]/50 rounded-2xl border border-[#6B4A87]/30 mt-6">
              <p className="text-sm font-mono-accent text-[#5C4A6E]">
                No technologies found matching "{searchQuery}".
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('all');
                }}
                className="mt-3 text-xs font-mono-accent text-[#6B4A87] hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>

        <BrandGradientDivider className="mt-20" />

        {/* ========================================================================= */}
        {/* SECTION 2: THE 5-CUBE ARCHITECTURE INSPECTOR (PERSISTENT 3D INTEGRATION)  */}
        {/* ========================================================================= */}
        <div className="mt-16">
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#FFFFFF] border border-[#6B4A87]/40 text-[#6B4A87] font-mono-accent text-xs mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>ISOMETRIC 5-LAYER TIERS</span>
            </div>
            <h2 className="font-heading font-bold text-2xl sm:text-4xl text-[#241428]">
              Modular Architectural Tiers & Telemetry
            </h2>
            <p className="mt-2 text-sm text-[#5C4A6E]">
              Hover and inspect each architectural layer. The persistent 3D Core Block highlights the selected tier in real time.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: 5 Layer Selector Buttons */}
            <div className="lg:col-span-5 space-y-3">
              {ARCHITECTURE_CUBES.map((cube, index) => {
                const isSelected = selectedCube === index;
                return (
                  <button
                    key={cube.id}
                    onClick={() => {
                      soundEngine.playClick('soft');
                      setSelectedCube(index);
                    }}
                    onMouseEnter={() => {
                      soundEngine.playHover();
                      onCubeHover(index);
                    }}
                    onMouseLeave={() => onCubeHover(null)}
                    className={`w-full p-4 rounded-2xl border text-left transition-all flex items-center justify-between group ${
                      isSelected
                        ? 'bg-[#FFFFFF] border-[#E8A9C2] shadow-[0_0_20px_rgba(232,169,194,0.2)]'
                        : 'bg-[#FFFFFF]/80 border-[#6B4A87]/30 hover:border-[#6B4A87] hover:bg-[#F7F4FA]'
                    }`}
                  >
                    <div className="flex items-center space-x-3.5">
                      <div
                        className="w-3.5 h-3.5 rounded-full transition-transform group-hover:scale-125"
                        style={{ backgroundColor: cube.color }}
                      />
                      <div>
                        <div className="text-[10px] font-mono-accent text-[#5C4A6E]">
                          LAYER 0{index + 1}
                        </div>
                        <div className="font-heading font-bold text-sm sm:text-base text-[#241428] group-hover:text-[#E8A9C2] transition-colors">
                          {cube.name}
                        </div>
                      </div>
                    </div>

                    <span className="text-[10px] font-mono-accent px-2 py-0.5 rounded bg-[#F7F4FA] text-[#5C4A6E] border border-[#6B4A87]/30">
                      {cube.role}
                    </span>
                  </button>
                );
              })}

              <div className="pt-2">
                <button
                  onClick={() => onOpenArchitectureModal(selectedCube)}
                  className="w-full py-3 rounded-xl bg-[#F7F4FA] border border-[#6B4A87]/50 text-[#E8A9C2] hover:bg-[#EDE8F3] text-xs font-mono-accent flex items-center justify-center space-x-2 transition-colors"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Open Full Architecture Blueprint Modal</span>
                </button>
              </div>
            </div>

            {/* Right Column: Layer Specs & Responsibilities */}
            <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-[#FFFFFF]/95 border border-[#6B4A87]/40 shadow-2xl space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-[#6B4A87]/30">
                <div className="flex items-center space-x-3">
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: activeCubeData.color }}
                  />
                  <div>
                    <span className="text-xs font-mono-accent text-[#5C4A6E]">ACTIVE ARCHITECTURE SPEC</span>
                    <h3 className="font-heading font-bold text-2xl text-[#241428]">
                      {activeCubeData.name}
                    </h3>
                  </div>
                </div>

                <span className="text-xs font-mono-accent text-[#6B4A87] bg-[#F7F4FA] px-3 py-1 rounded-full border border-[#6B4A87]/40">
                  Cube 0{selectedCube + 1}
                </span>
              </div>

              <p className="text-sm text-[#5C4A6E]/85 leading-relaxed">
                {activeCubeData.description}
              </p>

              {/* Protocol & SLA Specs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#6B4A87]/30">
                  <div className="text-[10px] font-mono-accent text-[#5C4A6E] uppercase">TECH SPEC & PROTOCOLS</div>
                  <div className="mt-1 text-xs text-[#241428] font-mono-accent">
                    {activeCubeData.specs?.protocol || 'gRPC / HTTP3 / WireGuard'}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#6B4A87]/30">
                  <div className="text-[10px] font-mono-accent text-[#5C4A6E] uppercase">LATENCY & TARGET SLA</div>
                  <div className="mt-1 text-xs text-emerald-400 font-mono-accent">
                    {activeCubeData.specs?.latency || '< 2.4ms P99 Latency'}
                  </div>
                </div>
              </div>

              {/* Core Responsibilities */}
              <div className="space-y-2.5">
                <div className="text-xs font-mono-accent text-[#5C4A6E] uppercase tracking-wider">
                  CORE SYSTEM RESPONSIBILITIES
                </div>
                {activeCubeData.responsibilities?.map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-xs text-[#5C4A6E]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#E8A9C2] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack */}
              <div>
                <div className="text-xs font-mono-accent text-[#5C4A6E] uppercase tracking-wider mb-2">
                  TECHNOLOGY STACK
                </div>
                <div className="flex flex-wrap gap-2">
                  {activeCubeData.techStack?.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono-accent bg-[#F7F4FA] text-[#E8A9C2] border border-[#6B4A87]/40"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>

        <BrandGradientDivider className="mt-20" />

        {/* ========================================================================= */}
        {/* SECTION 3: ENTERPRISE SECURITY & COMPLIANCE PILLARS                       */}
        {/* ========================================================================= */}
        <div className="mt-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-[#241428]">
              Security &amp; privacy we actually ship
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#5C4A6E]">
              Honest product controls — not borrowed certification badges. Anything not yet audited stays unpublished.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#6B4A87]/30 text-center space-y-2">
              <div className="w-10 h-10 mx-auto rounded-xl bg-[#F7F4FA] border border-[#6B4A87]/40 flex items-center justify-center text-[#6B4A87]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="font-heading font-bold text-sm text-[#241428]">Role-based access</div>
              <div className="text-[11px] text-[#5C4A6E]">Each school role sees only its own work in Kiduart.</div>
            </div>

            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#6B4A87]/30 text-center space-y-2">
              <div className="w-10 h-10 mx-auto rounded-xl bg-[#F7F4FA] border border-[#6B4A87]/40 flex items-center justify-center text-[#6B4A87]">
                <Lock className="w-5 h-5" />
              </div>
              <div className="font-heading font-bold text-sm text-[#241428]">Encrypted storage</div>
              <div className="text-[11px] text-[#5C4A6E]">Student and fee records protected at rest and in transit.</div>
            </div>

            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#6B4A87]/30 text-center space-y-2">
              <div className="w-10 h-10 mx-auto rounded-xl bg-[#F7F4FA] border border-[#6B4A87]/40 flex items-center justify-center text-[#6B4A87]">
                <Globe2 className="w-5 h-5" />
              </div>
              <div className="font-heading font-bold text-sm text-[#241428]">Data export</div>
              <div className="text-[11px] text-[#5C4A6E]">School data leaves with the school — CSV, Excel, or PDF on request.</div>
            </div>

            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#6B4A87]/30 text-center space-y-2">
              <div className="w-10 h-10 mx-auto rounded-xl bg-[#F7F4FA] border border-[#6B4A87]/40 flex items-center justify-center text-[#6B4A87]">
                <Server className="w-5 h-5" />
              </div>
              <div className="font-heading font-bold text-sm text-[#241428]">Audit logging</div>
              <div className="text-[11px] text-[#5C4A6E]">Sensitive changes leave a trail — who changed what, and when.</div>
            </div>
          </div>
        </div>

        {/* CTA Footer Block */}
        <div className="mt-16 text-center p-8 rounded-3xl bg-[#FFFFFF] border border-[#6B4A87]/35 max-w-3xl mx-auto">
          <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#241428]">
            Need a Customized Tech Stack Recommendation?
          </h3>
          <p className="text-xs sm:text-sm text-[#5C4A6E] mt-2 max-w-xl mx-auto">
            Book an architecture blueprint session with our senior engineering team to evaluate tradeoffs for your specific scale and traffic patterns.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <Link
              to="/contact"
              onClick={() => soundEngine.playClick('hero')}
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#6B4A87] to-[#E8A9C2] text-[#241428] font-heading text-xs font-semibold hover:opacity-95 transition-opacity"
            >
              <span>Schedule Architecture Blueprint Call</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};
