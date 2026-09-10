import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TrevykLogo } from './TrevykLogo';

interface PreloaderProps {
  onComplete: () => void;
  reducedMotion?: boolean;
}

/**
 * Preloader must not restart when parent re-renders (e.g. mouse move updating App state).
 * onComplete is read via ref so the progress interval stays stable until 100%.
 */
export const Preloader: React.FC<PreloaderProps> = ({ onComplete, reducedMotion = false }) => {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('LOADING');
  const [isLeaving, setIsLeaving] = useState(false);
  const onCompleteRef = useRef(onComplete);
  const finishedRef = useRef(false);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    if (reducedMotion) {
      const timer = setTimeout(() => {
        if (!finishedRef.current) {
          finishedRef.current = true;
          onCompleteRef.current();
        }
      }, 400);
      return () => clearTimeout(timer);
    }

    let currentProgress = 0;
    let leaveTimer: ReturnType<typeof setTimeout> | undefined;
    let completeTimer: ReturnType<typeof setTimeout> | undefined;

    const interval = setInterval(() => {
      if (finishedRef.current) return;

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
        leaveTimer = setTimeout(() => {
          setIsLeaving(true);
          completeTimer = setTimeout(() => {
            if (!finishedRef.current) {
              finishedRef.current = true;
              onCompleteRef.current();
            }
          }, 500);
        }, 250);
      }
    }, 35);

    return () => {
      clearInterval(interval);
      if (leaveTimer) clearTimeout(leaveTimer);
      if (completeTimer) clearTimeout(completeTimer);
    };
    // Intentionally mount-once for the progress run (reducedMotion only restarts)
  }, [reducedMotion]);

  if (reducedMotion) {
    return (
      <div
        id="preloader-reduced"
        className="fixed inset-0 z-50 bg-[#2A1830] flex items-center justify-center text-[#F8F6FB]"
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
        className="fixed inset-0 z-[999] bg-[#2A1830] flex flex-col items-center justify-center overflow-hidden select-none pointer-events-none"
        aria-busy="true"
        aria-live="polite"
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
          <p className="text-[11px] sm:text-xs text-[#B9A6D1] font-sans text-center max-w-xs">
            Turning Vision Into Progress.
          </p>

          <div className="mt-5 flex items-center space-x-3 text-xs tracking-wider text-[#B9A6D1]">
            <span className="font-mono-accent font-semibold text-sm text-[#F8F6FB]">
              {String(progress).padStart(2, '0')}%
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#6B4A87] animate-ping" />
            <span className="font-mono-accent uppercase tracking-widest text-[10px] sm:text-[11px] opacity-80">
              {statusText}
            </span>
          </div>

          <div className="w-56 h-[2px] bg-[#1E1024] mt-3 rounded-full overflow-hidden border border-[#6B4A87]/15">
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
