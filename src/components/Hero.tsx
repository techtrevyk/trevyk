import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Cpu, ChevronDown, Zap } from "lucide-react";
import { CanvasContainer } from "./3d/CanvasContainer";
import { MagneticButton } from "./MagneticButton";
import { SiteSettings } from "../types";
import { soundEngine } from "../utils/audioEngine";

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
    setTimeout(() => setShowEasterEggToast(false), 4500);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden pt-28 pb-12 sm:pb-16 bg-[#2A1830]"
    >
      <AnimatePresence>
        {showEasterEggToast && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-50 px-5 py-2.5 rounded-2xl bg-[#1E1024]/95 border border-[#E8A9C2] shadow-[0_0_30px_rgba(232,169,194,0.4)] backdrop-blur-xl flex items-center space-x-3 text-xs font-mono-accent text-[#F8F6FB]"
          >
            <div className="w-6 h-6 rounded-lg bg-[#E8A9C2] text-[#241428] flex items-center justify-center font-bold">
              <Zap className="w-3.5 h-3.5" />
            </div>
            <div>
              <span className="text-[#E8A9C2] font-bold block">EASTER EGG UNLOCKED</span>
              <span className="text-xs text-[#B9A6D1]">Modular Resonance Synchronized</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] rounded-full bg-gradient-to-tr from-[#6B4A87]/28 via-[#B9A6D1]/10 to-[#E8A9C2]/12 blur-3xl opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1E1024]/70 via-[#2A1830]/85 to-[#1E1024]" />
        <div className="absolute inset-0 bg-noise opacity-25" />
        {/* Premium corner frame marks */}
        <div className="absolute top-24 left-4 sm:left-8 w-10 h-10 border-l border-t border-[#E8A9C2]/35" />
        <div className="absolute top-24 right-4 sm:right-8 w-10 h-10 border-r border-t border-[#B9A6D1]/30" />
        <div className="absolute bottom-10 left-4 sm:left-8 w-10 h-10 border-l border-b border-[#B9A6D1]/25" />
        <div className="absolute bottom-10 right-4 sm:right-8 w-10 h-10 border-r border-b border-[#E8A9C2]/25" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-[#1E1024]/90 border border-[#B9A6D1]/40 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[#E8A9C2] shadow-[0_0_10px_rgba(232,169,194,0.8)]" />
              <span className="font-mono-accent text-xs tracking-wider text-[#E8A9C2] font-semibold uppercase">
                Turning Vision Into Progress
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-heading font-bold text-3xl sm:text-5xl lg:text-6xl text-[#F8F6FB] tracking-tight leading-[1.12]"
            >
              Software engineered for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F8F6FB] via-[#B9A6D1] to-[#E8A9C2]">
                clarity and scale
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-6 text-base sm:text-lg text-[#B9A6D1] max-w-2xl font-normal leading-relaxed"
            >
              Trevyk Technologies designs and delivers digital products and
              custom platforms — from institutional systems to tailored
              enterprise builds — with architecture you can trust and ownership
              you can keep.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-5 flex items-center space-x-2.5 text-xs font-mono-accent text-[#E7E1F0]/90 bg-[#1E1024]/80 px-4 py-2.5 rounded-lg border border-[#6B4A87]/35 border-l-[3px] border-l-[#E8A9C2]"
            >
              <span>
                Modular systems. Measurable delivery. Built in India for teams
                that expect craft.
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mt-8 flex flex-wrap items-center gap-4 sm:gap-5"
            >
              <MagneticButton
                id="hero-primary-cta"
                variant="primary"
                onClick={() => {
                  soundEngine.playClick("hero");
                  onOpenArchitectureModal();
                }}
                cursorLabel="INSPECT"
                reducedMotion={settings.reducedMotion}
              >
                <span>Explore our architecture</span>
                <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
              </MagneticButton>

              <button
                id="toggle-disassemble-btn"
                onClick={handleDisassembleToggle}
                className="inline-flex items-center space-x-2 px-5 py-3 rounded-full text-xs sm:text-sm font-medium text-[#E7E1F0] bg-[#1E1024] border border-[#B9A6D1]/45 hover:border-[#E8A9C2]/70 hover:text-[#F8F6FB] transition-all interactive-target"
                data-cursor-label={disassembled ? "ASSEMBLE" : "EXPLODE"}
              >
                <Cpu className="w-4 h-4 text-[#E8A9C2]" />
                <span>
                  {disassembled ? "Reassemble Core Blocks" : "Disassemble 3D Cluster"}
                </span>
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-10 sm:mt-12 pt-6 border-t border-[#6B4A87]/35 w-full grid grid-cols-3 gap-4"
            >
              <div>
                <div className="font-mono-accent font-bold text-lg sm:text-2xl text-[#F8F6FB]">
                  Products
                </div>
                <div className="text-[11px] sm:text-xs text-[#B9A6D1] mt-0.5">
                  Platforms that ship
                </div>
              </div>
              <div>
                <div className="font-mono-accent font-bold text-lg sm:text-2xl text-[#F8F6FB]">
                  Engineering
                </div>
                <div className="text-[11px] sm:text-xs text-[#B9A6D1] mt-0.5">
                  Scoped custom builds
                </div>
              </div>
              <div>
                <div className="font-mono-accent font-bold text-lg sm:text-2xl text-[#F8F6FB]">
                  Noida
                </div>
                <div className="text-[11px] sm:text-xs text-[#B9A6D1] mt-0.5">
                  India headquarters
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-5 relative w-full h-[380px] sm:h-[480px] lg:h-[560px] flex items-center justify-center">
            {/* Orbit ring — premium focal frame around 3D */}
            <div className="absolute inset-[12%] rounded-full border border-[#B9A6D1]/20 pointer-events-none" />
            <div className="absolute inset-[18%] rounded-full border border-dashed border-[#E8A9C2]/15 pointer-events-none animate-[spin_48s_linear_infinite]" />
            <div className="absolute top-2 right-2 z-20 hidden sm:flex items-center space-x-2 bg-[#1E1024]/85 backdrop-blur-md px-3 py-1 rounded-full border border-[#B9A6D1]/40 text-[10px] font-mono-accent text-[#B9A6D1]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E8A9C2] animate-ping" />
              <span>INTERACTIVE CORE</span>
            </div>

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

            {hoveredCube !== null && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 bg-[#1E1024]/95 backdrop-blur-md border border-[#E8A9C2]/55 px-4 py-2 rounded-xl text-center shadow-lg"
              >
                <span className="text-xs font-mono-accent text-[#E8A9C2] block uppercase tracking-wider">
                  Module in focus
                </span>
                <span className="text-sm font-heading font-semibold text-[#F8F6FB]">
                  {hoveredCube === 0 && "Edge Ingress & CDN Gateway"}
                  {hoveredCube === 1 && "API Gateway & Event Stream"}
                  {hoveredCube === 2 && "Distributed Services Cluster"}
                  {hoveredCube === 3 && "Domain Application Core"}
                  {hoveredCube === 4 && "Resilient Data Layer"}
                </span>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      <div className="relative z-10 w-full flex flex-col items-center justify-center mt-6 text-center">
        <div className="flex items-center space-x-2 text-xs font-mono-accent uppercase tracking-widest text-[#B9A6D1]/80">
          <span>Scroll to continue</span>
        </div>
        <motion.div
          animate={{ y: [0, 8, 0], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="mt-2 flex flex-col items-center"
        >
          <div className="w-[1px] h-8 bg-gradient-to-b from-[#E8A9C2] via-[#6B4A87] to-transparent" />
          <ChevronDown className="w-4 h-4 text-[#E8A9C2] -mt-1" />
        </motion.div>
      </div>
    </section>
  );
};
