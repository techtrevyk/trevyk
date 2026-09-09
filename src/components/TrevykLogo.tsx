import React from 'react';

interface TrevykLogoProps {
  /** Size variant */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'card';
  /** Display layout */
  layout?: 'horizontal' | 'vertical' | 'icon-only' | 'card-banner';
  /** Kept for call-site compatibility; logo art is fixed brand colors on transparent PNG */
  theme?: 'dark' | 'light' | 'auto';
  /** Show the brand tagline under the mark */
  showTagline?: boolean;
  /** Custom className for the outer container */
  className?: string;
  /** Custom size in pixels for the icon alone */
  iconSize?: number;
}

const LOGO_SRC = '/trevyk-logo.png';
const ICON_SRC = '/trevyk-icon.png';

const HEIGHTS: Record<NonNullable<TrevykLogoProps['size']>, number> = {
  xs: 28,
  sm: 36,
  md: 44,
  lg: 64,
  xl: 96,
  card: 72,
};

/**
 * Official Trevyk Technologies logo (transparent PNG).
 * Horizontal lockup includes the cube mark + TREVYK TECHNOLOGIES wordmark.
 */
export const TrevykLogo: React.FC<TrevykLogoProps> = ({
  size = 'sm',
  layout = 'horizontal',
  showTagline = false,
  className = '',
  iconSize,
}) => {
  const iconH = iconSize ?? HEIGHTS[size];
  const logoH = iconSize ? Math.round(iconSize * 0.85) : HEIGHTS[size];

  if (layout === 'icon-only') {
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        <img
          src={ICON_SRC}
          alt="Trevyk Technologies"
          width={iconH}
          height={iconH}
          className="shrink-0 object-contain transition-transform duration-300 group-hover:scale-105"
          draggable={false}
          decoding="async"
          loading="eager"
          fetchPriority="high"
        />
      </div>
    );
  }

  if (layout === 'card-banner') {
    return (
      <div
        className={`p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-[#8B5CAD]/20 shadow-sm flex flex-col sm:flex-row items-center sm:items-center gap-5 sm:gap-8 ${className}`}
      >
        <img
          src={LOGO_SRC}
          alt="Trevyk Technologies"
          className="h-14 sm:h-16 w-auto max-w-full object-contain"
          draggable={false}
          decoding="async"
          loading="lazy"
        />
        {showTagline && (
          <p className="text-sm text-[#5C4A6E] font-medium leading-relaxed font-sans max-w-sm text-center sm:text-left">
            Turning Vision Into Progress.
          </p>
        )}
      </div>
    );
  }

  if (layout === 'vertical') {
    return (
      <div className={`flex flex-col items-center text-center ${className}`}>
        <img
          src={LOGO_SRC}
          alt="Trevyk Technologies"
          style={{ height: Math.round(logoH * 1.15), width: 'auto', maxWidth: '100%' }}
          className="object-contain"
          draggable={false}
          decoding="async"
          loading="lazy"
        />
        {showTagline && (
          <p className="mt-3 text-xs sm:text-sm max-w-xs font-medium leading-relaxed text-[#5C4A6E]">
            Turning Vision Into Progress.
          </p>
        )}
      </div>
    );
  }

  // Standard horizontal lockup (full brand mark)
  return (
    <div className={`inline-flex flex-col items-start group ${className}`}>
      <img
        src={LOGO_SRC}
        alt="Trevyk Technologies"
        style={{ height: logoH, width: 'auto', maxWidth: 'min(100%, 280px)' }}
        className="object-contain object-left transition-opacity duration-300 group-hover:opacity-90"
        draggable={false}
        decoding="async"
        loading="eager"
        fetchPriority="high"
      />
      {showTagline && (
        <span className="text-[10px] sm:text-[11px] font-sans font-medium leading-tight mt-1 text-[#5C4A6E] hidden sm:block">
          Turning Vision Into Progress.
        </span>
      )}
    </div>
  );
};
