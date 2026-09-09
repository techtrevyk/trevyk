import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TrevykLogo } from './TrevykLogo';

interface PreloaderProps {
  onComplete: () => void;
  reducedMotion?: boolean;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete, reducedMotion = false }) => {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('LOADING');
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    if (reducedMotion) {
      const timer = setTimeout(() => onComplete(), 400);
      return () => clearTimeout(timer);
    }

    let currentProgress = 0;
    const interval = setInterval(() => {
      const step = currentProgress < 40 ? 4 : currentProgress < 75 ? 3 : 5;
      currentProgress = Math.min(currentProgress + step, 100);
      setProgress(currentProgress);

      if (currentProgress < 40) {
        setStatusText('PREPARING');
      } else if (currentProgress < 75) {
        setStatusText('LOADING BRAND');
      } else {
        setStatusText('READY');
      }

      if (currentProgress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsLeaving(true);
          setTimeout(() => onComplete(), 500);
        }, 250);
      }
    }, 35);

    return () => clearInterval(interval);
  }, [onComplete, reducedMotion]);

  if (reducedMotion) {
    return (
      <div
        id="preloader-reduced"
        className="fixed inset-0 z-50 bg-[#F7F4FA] flex items-center justify-center text-[#241428]"
      >
        <TrevykLogo layout="horizontal" size="lg" showTagline={true} />
      </div>
    );
  }

  return (
    <AnimatePresence>
      <motion.div
        id="preloader-overlay"
        initial={{ opacity: 1 }}
        animate={{ opacity: isLeaving ? 0 : 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-0 z-[999] bg-[#F7F4FA] flex flex-col items-center justify-center overflow-hidden select-none"
      >
        <div className="absolute w-[520px] h-[520px] rounded-full bg-gradient-to-tr from-[#B9A6D1]/35 via-[#E8A9C2]/15 to-transparent blur-3xl pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 8, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 px-6"
        >
          <TrevykLogo layout="horizontal" size="xl" showTagline={false} />
        </motion.div>

        <div className="relative z-10 flex flex-col items-center mt-8">
          <p className="text-[11px] sm:text-xs text-[#5C4A6E] font-sans text-center max-w-xs">
            Turning Vision Into Progress.
          </p>

          <div className="mt-5 flex items-center space-x-3 text-xs tracking-wider text-[#5C4A6E]">
            <span className="font-mono-accent font-semibold text-sm text-[#241428]">
              {String(progress).padStart(2, '0')}%
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#6B4A87] animate-ping" />
            <span className="font-mono-accent uppercase tracking-widest text-[10px] sm:text-[11px] opacity-80">
              {statusText}
            </span>
          </div>

          <div className="w-56 h-[2px] bg-[#EDE8F3] mt-3 rounded-full overflow-hidden border border-[#6B4A87]/15">
            <motion.div
              className="h-full bg-gradient-to-r from-[#6B4A87] via-[#B9A6D1] to-[#E8A9C2]"
              style={{ width: `${progress}%` }}
              transition={{ ease: 'linear' }}
            />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
