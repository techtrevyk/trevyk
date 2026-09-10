import React from "react";
import { motion } from "motion/react";

interface PageTransitionProps {
  pathname: string;
  reducedMotion?: boolean;
  children: React.ReactNode;
}

/**
 * Route-level enter/exit choreography — soft lift + brand sheen on enter.
 * Reduced-motion collapses to a short opacity crossfade.
 */
export const PageTransition: React.FC<PageTransitionProps> = ({
  pathname,
  reducedMotion = false,
  children,
}) => {
  if (reducedMotion) {
    return (
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.15 }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      key={pathname}
      className="relative"
      initial={{ opacity: 0, y: 18, filter: "blur(4px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      exit={{ opacity: 0, y: -14, filter: "blur(3px)" }}
      transition={{
        duration: 0.48,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {/* One-shot brand sheen on route enter */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 z-20 h-40 overflow-hidden"
        initial={{ opacity: 0.55 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.05 }}
      >
        <motion.div
          className="absolute inset-y-0 w-1/2"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(232,169,194,0.18), rgba(185,166,209,0.12), transparent)",
          }}
          initial={{ x: "-40%" }}
          animate={{ x: "160%" }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        />
      </motion.div>
      {children}
    </motion.div>
  );
};
