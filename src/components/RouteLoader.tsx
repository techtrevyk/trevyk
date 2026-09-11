import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import { TrevykLogo } from "./TrevykLogo";

interface RouteLoaderProps {
  reducedMotion?: boolean;
}

/**
 * Brief brand-core veil on route change  represents the layered T/core
 * without spinning up extra WebGL during navigation.
 */
export const RouteLoader: React.FC<RouteLoaderProps> = ({
  reducedMotion = false,
}) => {
  const { pathname } = useLocation();
  const [show, setShow] = useState(false);
  const [first, setFirst] = useState(true);

  useEffect(() => {
    if (first) {
      setFirst(false);
      return;
    }
    if (reducedMotion) return;

    setShow(true);
    const t = window.setTimeout(() => setShow(false), 680);
    return () => window.clearTimeout(t);
  }, [pathname, reducedMotion, first]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key={pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }}
          className="fixed inset-0 z-[80] pointer-events-none flex items-center justify-center bg-[#160A1C]/72 backdrop-blur-[2px]"
          aria-hidden
        >
          <div className="relative flex flex-col items-center gap-4">
            <div className="relative w-20 h-20">
              {[
                { x: -14, y: -18, c: "#E8A9C2" },
                { x: 14, y: -18, c: "#C4B0E0" },
                { x: 0, y: -2, c: "#8B6BA8" },
                { x: 0, y: 14, c: "#6B4A87" },
                { x: 0, y: 28, c: "#B9A6D1" },
              ].map((cube, i) => (
                <motion.div
                  key={i}
                  className="absolute left-1/2 top-1/2 w-7 h-7 -ml-3.5 -mt-3.5 rounded-[4px] border border-white/15"
                  style={{
                    background: `linear-gradient(145deg, ${cube.c}, #2A1830)`,
                    transform: `translate(${cube.x}px, ${cube.y}px)`,
                  }}
                  animate={{
                    opacity: [0.55, 1, 0.55],
                    scale: [0.92, 1.05, 0.92],
                  }}
                  transition={{
                    duration: 0.7,
                    delay: i * 0.04,
                    repeat: Infinity,
                  }}
                />
              ))}
            </div>
            <TrevykLogo layout="icon-only" size="md" theme="dark" />
            <span className="font-mono-accent text-[10px] tracking-[0.3em] text-[#E8A9C2] uppercase">
              Switching context
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
