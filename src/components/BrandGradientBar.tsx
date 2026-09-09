import React from 'react';

interface BrandGradientBarProps {
  /** Height in pixels (default 4px) */
  height?: number | string;
  /** Whether this is the pinned top viewport bar */
  pinnedTop?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** Optional subtle shimmer effect */
  shimmer?: boolean;
}

/**
 * Trevyk Brand Gradient Furniture Device
 * Sweeps left to right: Deep Plum (#F7F4FA) → Royal Purple (#8B5CAD) → Dusty Rose (#C89B6C / #A87088) → Blush Pink (#E8A9C2)
 */
export const BrandGradientBar: React.FC<BrandGradientBarProps> = ({
  height = 5,
  pinnedTop = true,
  className = '',
  shimmer = true,
}) => {
  const barStyle: React.CSSProperties = {
    height: typeof height === 'number' ? `${height}px` : height,
    background: 'linear-gradient(90deg, #F7F4FA 0%, #8B5CAD 18%, #8B5CAD 45%, #9E6B8E 68%, #C89B6C 82%, #E8A9C2 100%)',
  };

  if (pinnedTop) {
    return (
      <div
        id="trevyk-persistent-gradient-topbar"
        className={`fixed top-0 left-0 right-0 z-50 pointer-events-none shadow-[0_1px_12px_rgba(232,169,194,0.35)] ${className}`}
        style={barStyle}
        aria-hidden="true"
      >
        {shimmer && (
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent animate-[shimmer_4s_infinite_linear] opacity-60 pointer-events-none" />
        )}
      </div>
    );
  }

  return (
    <div
      className={`w-full relative overflow-hidden rounded-full shadow-[0_1px_8px_rgba(139,92,173,0.25)] ${className}`}
      style={barStyle}
      aria-hidden="true"
    >
      {shimmer && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shimmer_4s_infinite_linear] opacity-40 pointer-events-none" />
      )}
    </div>
  );
};

/**
 * Reusable Divider Strip echoing the brand gradient
 */
export const BrandGradientDivider: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`py-6 flex items-center justify-center ${className}`}>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className="h-[2px] w-full rounded-full opacity-65"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, #8B5CAD 15%, #8B5CAD 35%, #C89B6C 65%, #E8A9C2 85%, transparent 100%)'
          }}
        />
      </div>
    </div>
  );
};
