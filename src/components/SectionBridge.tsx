import React, { useId } from "react";
import { motion } from "motion/react";
import { BrandGradientDivider } from "./BrandGradientBar";

interface SectionBridgeProps {
  /** Short mono label for the divider (e.g. Stack, Journey) */
  label?: string;
  /** Show animated energy stream between sections */
  stream?: boolean;
  reducedMotion?: boolean;
  className?: string;
  /** Visual tone — soft for dark pages, lilac for light rhythm */
  tone?: "dark" | "lilac";
}

/**
 * Section connector used across inner pages — labeled brand divider
 * plus optional animated connective stream (home-parity).
 */
export const SectionBridge: React.FC<SectionBridgeProps> = ({
  label,
  stream = true,
  reducedMotion = false,
  className = "",
  tone = "dark",
}) => {
  const uid = useId().replace(/:/g, "");
  const gradId = `bridgeGrad-${uid}`;
  const glowId = `bridgeGlow-${uid}`;

  return (
    <div className={`relative ${className}`}>
      {stream ? (
        <div
          className="relative w-full h-24 sm:h-32 flex items-center justify-center overflow-hidden pointer-events-none select-none"
          aria-hidden
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className={`w-[28rem] h-16 blur-2xl rounded-full ${
                tone === "lilac"
                  ? "bg-gradient-to-r from-[#6B4A87]/15 via-[#E8A9C2]/25 to-[#B9A6D1]/15"
                  : "bg-gradient-to-r from-[#6B4A87]/20 via-[#B9A6D1]/28 to-[#E8A9C2]/20"
              }`}
            />
          </div>

          <svg
            viewBox="0 0 1000 160"
            preserveAspectRatio="none"
            className="w-full h-full"
          >
            <defs>
              <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#6B4A87" stopOpacity="0.25" />
                <stop offset="35%" stopColor="#B9A6D1" stopOpacity="0.85" />
                <stop offset="70%" stopColor="#E8A9C2" stopOpacity="1" />
                <stop offset="100%" stopColor="#6B4A87" stopOpacity="0.3" />
              </linearGradient>
              <filter id={glowId} x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3.5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>
            <path
              d="M 40,40 C 260,40 220,120 500,120 C 780,120 740,40 960,40"
              fill="none"
              stroke="#6B4A87"
              strokeWidth="1.25"
              strokeDasharray="3 7"
              opacity="0.35"
            />
            <motion.path
              d="M 40,40 C 260,40 220,120 500,120 C 780,120 740,40 960,40"
              fill="none"
              stroke={`url(#${gradId})`}
              strokeWidth="2.5"
              filter={`url(#${glowId})`}
              strokeDasharray="18 160"
              animate={{
                strokeDashoffset: reducedMotion ? 0 : [0, -360],
              }}
              transition={{
                duration: 4.2,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            <circle cx="500" cy="120" r="3.5" fill="#E8A9C2">
              {!reducedMotion && (
                <animate
                  attributeName="r"
                  values="3;5.5;3"
                  dur="2.2s"
                  repeatCount="indefinite"
                />
              )}
            </circle>
          </svg>

          {!reducedMotion && (
            <motion.div
              animate={{ x: [-100, 100], y: [6, -8, 6], rotate: [0, 160] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-2.5 h-2.5 border border-[#E8A9C2] bg-[#E8A9C2]/35 rotate-45 shadow-[0_0_10px_#E8A9C2]"
            />
          )}
        </div>
      ) : null}

      <BrandGradientDivider label={label} />
    </div>
  );
};
