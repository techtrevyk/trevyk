import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  Sparkles, 
  Layers, 
  Shield, 
  Cpu, 
  Server, 
  ChevronDown, 
  Database,
  CheckCircle,
  ExternalLink,
  Zap
} from 'lucide-react';
import { CanvasContainer } from './3d/CanvasContainer';
import { MagneticButton } from './MagneticButton';
import { SiteSettings } from '../types';
import { soundEngine } from '../utils/audioEngine';

interface HeroProps {
  settings: SiteSettings;
  scrollProgress: number;
  mousePos: { x: number; y: number };
  onOpenArchitectureModal: () => void;
  hoveredCube: number | null;
  onCubeHover: (index: number | null) => void;
  onEasterEggDiscovered?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  settings,
  scrollProgress,
  mousePos,
  onOpenArchitectureModal,
  hoveredCube,
  onCubeHover,
  onEasterEggDiscovered,
}) => {
  const [disassembled, setDisassembled] = useState(false);
  const [showEasterEggToast, setShowEasterEggToast] = useState(false);

  const handleDisassembleToggle = () => {
    const nextState = !disassembled;
    setDisassembled(nextState);
    soundEngine.playDisassemble(nextState);
  };

  const handleEasterEggTriggered = () => {
    setShowEasterEggToast(true);
    onEasterEggDiscovered?.();
    setTimeout(() => {
      setShowEasterEggToast(false);
    }, 4500);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden pt-28 pb-12 sm:pb-16 bg-[#F7F4FA]"
    >
      {/* Easter Egg Toast Notification (Delight Item #28) */}
      <AnimatePresence>
        {showEasterEggToast && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-50 px-5 py-2.5 rounded-2xl bg-[#FFFFFF]/95 border border-[#E8A9C2] shadow-[0_0_30px_rgba(232,169,194,0.4)] backdrop-blur-xl flex items-center space-x-3 text-xs font-mono-accent text-[#241428]"
          >
            <div className="w-6 h-6 rounded-lg bg-[#E8A9C2] text-[#241428] flex items-center justify-center font-bold">
              <Zap className="w-3.5 h-3.5" />
            </div>
            <div>
              <span className="text-[#E8A9C2] font-bold block">EASTER EGG UNLOCKED</span>
              <span className="text-xs text-[#5C4A6E]">Modular Resonance Synchronized (3D Burst Mode)</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 1. Ambient Gradient Mesh & Noise Texture (Calm, stable background) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft radial glow behind 3D object - static and calm */}
        <div className="absolute top-1/4 right-1/4 w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] rounded-full bg-gradient-to-tr from-[#6B4A87]/25 via-[#B9A6D1]/10 to-[#E8A9C2]/15 blur-3xl opacity-60" />
        
        {/* Deep plum ambient gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FFFFFF]/60 via-[#F7F4FA]/80 to-[#FFFFFF]" />
        
        {/* Geometric ambient grid lines */}
        <div className="absolute inset-0 bg-noise opacity-30" />

        {/* Diagonal soft gradient sweep */}
        <div className="absolute -top-[40%] -left-[20%] w-[120%] h-[120%] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#6B4A87]/15 via-transparent to-transparent rotate-12 pointer-events-none" />
      </div>

      {/* Main Viewport Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Hero Copy & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Brand Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-[#FFFFFF]/90 border border-[#6B4A87]/40 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[#E8A9C2]" />
              <span className="font-mono-accent text-xs tracking-wider text-[#6B4A87] font-semibold uppercase">
                Turning Vision Into Progress
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-heading font-bold text-3xl sm:text-5xl lg:text-6xl text-[#241428] tracking-tight leading-[1.12]"
            >
              Modular Architecture for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#241428] via-[#B9A6D1] to-[#E8A9C2]">
                Resilient Software Systems
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-6 text-base sm:text-lg text-[#5C4A6E]/85 max-w-2xl font-normal leading-relaxed"
            >
              Trevyk delivers custom cloud-scale IT engineering and enterprise-grade software products — including our flagship multi-tenant Kiduart School ERP — engineered from robust, independent building blocks.
            </motion.p>

            {/* Brand Philosophy Quote / Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-5 flex items-center space-x-2.5 text-xs font-mono-accent text-[#5C4A6E] bg-[#FFFFFF]/70 px-4 py-2 rounded-lg border-l-2 border-[#E8A9C2]"
            >
              <span>Parent company of Kiduart — IT products and services for B2B and B2C.</span>
            </motion.div>

            {/* Action Buttons with Magnetic CTA (wow #5) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mt-8 flex flex-wrap items-center gap-4 sm:gap-5"
            >
              {/* Primary Magnetic CTA */}
              <MagneticButton
                id="hero-primary-cta"
                variant="primary"
                onClick={() => {
                  soundEngine.playClick('hero');
                  onOpenArchitectureModal();
                }}
                cursorLabel="INSPECT"
                reducedMotion={settings.reducedMotion}
              >
                <span>Inspect System Architecture</span>
                <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
              </MagneticButton>

              {/* Secondary Disassemble 3D Toggle */}
              <button
                id="toggle-disassemble-btn"
                onClick={handleDisassembleToggle}
                className="inline-flex items-center space-x-2 px-5 py-3 rounded-full text-xs sm:text-sm font-medium text-[#5C4A6E] bg-[#FFFFFF]/70 border border-[#6B4A87]/40 hover:border-[#E8A9C2]/60 hover:text-[#241428] transition-all interactive-target"
                data-cursor-label={disassembled ? 'ASSEMBLE' : 'EXPLODE'}
              >
                <Cpu className="w-4 h-4 text-[#E8A9C2]" />
                <span>{disassembled ? 'Reassemble Core Blocks' : 'Disassemble 3D Cluster'}</span>
              </button>
            </motion.div>

            {/* Architectural Trust Metrics Ticker */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-10 sm:mt-12 pt-6 border-t border-[#6B4A87]/30 w-full grid grid-cols-3 gap-4"
            >
              <div>
                <div className="font-mono-accent font-bold text-lg sm:text-2xl text-[#241428]">
                  B2B<span className="text-[#6B4A87]">+</span>B2C
                </div>
                <div className="text-[11px] sm:text-xs text-[#5C4A6E] mt-0.5">
                  Products &amp; services
                </div>
              </div>

              <div>
                <div className="font-mono-accent font-bold text-lg sm:text-2xl text-[#241428]">
                  Kiduart
                </div>
                <div className="text-[11px] sm:text-xs text-[#5C4A6E] mt-0.5">
                  Flagship school ERP
                </div>
              </div>

              <div>
                <div className="font-mono-accent font-bold text-lg sm:text-2xl text-[#241428]">
                  India
                </div>
                <div className="text-[11px] sm:text-xs text-[#5C4A6E] mt-0.5">
                  Built &amp; supported here
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: 3D Core Block Hero Companion (wow #7, #8, #10, #28) */}
          <div className="lg:col-span-5 relative w-full h-[380px] sm:h-[480px] lg:h-[560px] flex items-center justify-center">
            
            {/* Interactive hint badge */}
            <div className="absolute top-2 right-2 z-20 hidden sm:flex items-center space-x-2 bg-[#FFFFFF]/80 backdrop-blur-md px-3 py-1 rounded-full border border-[#6B4A87]/40 text-[10px] font-mono-accent text-[#5C4A6E]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E8A9C2] animate-ping" />
              <span>CLICK TO DISCOVER RESONANCE (OR TILT)</span>
            </div>

            {/* 3D Canvas Centerpiece */}
            <CanvasContainer
              scrollProgress={scrollProgress}
              mousePos={mousePos}
              disassembled={disassembled}
              hoveredCube={hoveredCube}
              onCubeHover={onCubeHover}
              onEasterEggTrigger={handleEasterEggTriggered}
              reducedMotion={settings.reducedMotion}
              forceFallback={!settings.highQuality3D}
            />

            {/* Cube Layer Quick Inspector Indicator */}
            {hoveredCube !== null && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 bg-[#FFFFFF]/90 backdrop-blur-md border border-[#E8A9C2]/60 px-4 py-2 rounded-xl text-center shadow-lg"
              >
                <span className="text-xs font-mono-accent text-[#6B4A87] block uppercase tracking-wider">
                  Hovered Module Block
                </span>
                <span className="text-sm font-heading font-semibold text-[#241428]">
                  {hoveredCube === 0 && 'Edge Ingress & CDN Gateway'}
                  {hoveredCube === 1 && 'API Gateway & Event Stream'}
                  {hoveredCube === 2 && 'Distributed Services Cluster'}
                  {hoveredCube === 3 && 'Kiduart Modular ERP Core'}
                  {hoveredCube === 4 && 'Resilient Multi-Region Data Store'}
                </span>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Connective-Tissue Scroll Indicator Hand-Off (wow connective-tissue rule) */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center mt-6 text-center">
        <div className="flex items-center space-x-2 text-xs font-mono-accent uppercase tracking-widest text-[#5C4A6E]/80">
          <span>Scroll to Explore Architecture Pipeline</span>
        </div>
        
        {/* Animated Connective Particle Trail Line */}
        <motion.div
          animate={{ y: [0, 8, 0], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="mt-2 flex flex-col items-center"
        >
          <div className="w-[1px] h-8 bg-gradient-to-b from-[#E8A9C2] via-[#6B4A87] to-transparent" />
          <ChevronDown className="w-4 h-4 text-[#E8A9C2] -mt-1" />
        </motion.div>
      </div>
    </section>
  );
};

