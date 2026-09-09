import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  Sparkles, 
  Maximize2,
  Cpu,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { ServiceItem } from '../../types';
import { soundEngine } from '../../utils/audioEngine';

interface ServiceCard3DProps {
  service: ServiceItem;
  index: number;
  isSelected: boolean;
  onSelect: (service: ServiceItem) => void;
  isExpandedInline: boolean;
  onToggleExpandInline: () => void;
}

// Custom Service Graphic Illustrations
const ServiceIllustration: React.FC<{ serviceId: string; color: string }> = ({ serviceId, color }) => {
  switch (serviceId) {
    case 'custom-software-development':
      return (
        <svg viewBox="0 0 120 120" className="w-16 h-16 shrink-0" fill="none">
          <rect x="15" y="15" width="90" height="90" rx="16" fill="#FFFFFF" stroke="#6B4A87" strokeWidth="1.5" />
          <polygon points="60,25 90,42 60,60 30,42" fill="#E8A9C2" fillOpacity="0.85" />
          <polygon points="30,42 60,60 60,95 30,77" fill="#6B4A87" />
          <polygon points="60,60 90,42 90,77 60,95" fill="#6B4A87" />
          <line x1="60" y1="25" x2="60" y2="60" stroke="#241428" strokeWidth="1" strokeDasharray="2 2" />
          <circle cx="60" cy="25" r="3" fill="#241428" />
          <circle cx="90" cy="42" r="3" fill="#E8A9C2" />
          <circle cx="30" cy="42" r="3" fill="#B9A6D1" />
          <circle cx="60" cy="95" r="3" fill="#6B4A87" />
        </svg>
      );
    case 'web-mobile-app-development':
      return (
        <svg viewBox="0 0 120 120" className="w-16 h-16 shrink-0" fill="none">
          <rect x="15" y="15" width="90" height="90" rx="16" fill="#FFFFFF" stroke="#B9A6D1" strokeWidth="1.5" />
          <rect x="25" y="30" width="45" height="60" rx="6" fill="#F7F4FA" stroke="#B9A6D1" strokeWidth="1.5" />
          <rect x="55" y="25" width="40" height="68" rx="8" fill="#FFFFFF" stroke="#E8A9C2" strokeWidth="1.5" />
          <circle cx="75" cy="85" r="3" fill="#E8A9C2" />
          <rect x="62" y="33" width="26" height="4" rx="2" fill="#6B4A87" />
          <rect x="62" y="42" width="20" height="4" rx="2" fill="#B9A6D1" />
          <rect x="30" y="38" width="16" height="3" rx="1.5" fill="#E8A9C2" />
          <rect x="30" y="46" width="30" height="3" rx="1.5" fill="#6B4A87" />
        </svg>
      );
    case 'cloud-devops':
      return (
        <svg viewBox="0 0 120 120" className="w-16 h-16 shrink-0" fill="none">
          <rect x="15" y="15" width="90" height="90" rx="16" fill="#FFFFFF" stroke="#6B4A87" strokeWidth="1.5" />
          <path d="M40 70 C30 70 25 60 32 50 C32 40 45 35 55 42 C62 32 80 32 85 45 C95 45 98 55 92 65 C92 70 85 70 80 70 Z" fill="#F7F4FA" stroke="#E8A9C2" strokeWidth="1.5" />
          <circle cx="60" cy="55" r="8" fill="#6B4A87" fillOpacity="0.5" stroke="#241428" strokeWidth="1" />
          <line x1="45" y1="75" x2="75" y2="75" stroke="#B9A6D1" strokeWidth="1.5" strokeDasharray="3 3" />
          <line x1="60" y1="70" x2="60" y2="85" stroke="#E8A9C2" strokeWidth="1.5" />
          <rect x="40" y="85" width="40" height="10" rx="3" fill="#6B4A87" />
        </svg>
      );
    case 'ai-ml-automation':
      return (
        <svg viewBox="0 0 120 120" className="w-16 h-16 shrink-0" fill="none">
          <rect x="15" y="15" width="90" height="90" rx="16" fill="#FFFFFF" stroke="#E8A9C2" strokeWidth="1.5" />
          <circle cx="60" cy="60" r="28" fill="#F7F4FA" stroke="#6B4A87" strokeWidth="1.5" />
          <circle cx="60" cy="60" r="14" fill="#E8A9C2" fillOpacity="0.4" stroke="#E8A9C2" strokeWidth="1.5" />
          <circle cx="60" cy="60" r="5" fill="#241428" />
          {/* Neural nodes */}
          <line x1="60" y1="32" x2="60" y2="46" stroke="#E8A9C2" strokeWidth="1.5" />
          <line x1="60" y1="74" x2="60" y2="88" stroke="#E8A9C2" strokeWidth="1.5" />
          <line x1="32" y1="60" x2="46" y2="60" stroke="#B9A6D1" strokeWidth="1.5" />
          <line x1="74" y1="60" x2="88" y2="60" stroke="#B9A6D1" strokeWidth="1.5" />
          <circle cx="60" cy="32" r="3.5" fill="#E8A9C2" />
          <circle cx="60" cy="88" r="3.5" fill="#E8A9C2" />
          <circle cx="32" cy="60" r="3.5" fill="#B9A6D1" />
          <circle cx="88" cy="60" r="3.5" fill="#B9A6D1" />
        </svg>
      );
    case 'erp-crm-solutions':
      return (
        <svg viewBox="0 0 120 120" className="w-16 h-16 shrink-0" fill="none">
          <rect x="15" y="15" width="90" height="90" rx="16" fill="#FFFFFF" stroke="#C89B6C" strokeWidth="1.5" />
          <polygon points="60,30 92,46 60,62 28,46" fill="#C89B6C" fillOpacity="0.85" />
          <path d="M40 52 L40 76 C40 85 80 85 80 76 L80 52" stroke="#241428" strokeWidth="1.5" fill="none" />
          <line x1="86" y1="46" x2="86" y2="78" stroke="#E8A9C2" strokeWidth="2" />
          <circle cx="86" cy="80" r="3" fill="#E8A9C2" />
          <circle cx="60" cy="46" r="4" fill="#FFFFFF" />
        </svg>
      );
    case 'ui-ux-design-systems':
      return (
        <svg viewBox="0 0 120 120" className="w-16 h-16 shrink-0" fill="none">
          <rect x="15" y="15" width="90" height="90" rx="16" fill="#FFFFFF" stroke="#E8A9C2" strokeWidth="1.5" />
          <path d="M60 30 C40 30 30 45 30 60 C30 75 42 85 54 85 C60 85 64 80 64 74 C64 68 69 64 75 64 L80 64 C88 64 94 56 94 48 C94 36 78 30 60 30 Z" fill="#F7F4FA" stroke="#E8A9C2" strokeWidth="1.5" />
          <circle cx="45" cy="48" r="4" fill="#E8A9C2" />
          <circle cx="60" cy="42" r="4" fill="#C89B6C" />
          <circle cx="75" cy="48" r="4" fill="#6B4A87" />
          <circle cx="50" cy="65" r="4" fill="#B9A6D1" />
        </svg>
      );
    case 'it-consulting-managed-services':
      return (
        <svg viewBox="0 0 120 120" className="w-16 h-16 shrink-0" fill="none">
          <rect x="15" y="15" width="90" height="90" rx="16" fill="#FFFFFF" stroke="#5A3875" strokeWidth="1.5" />
          <circle cx="60" cy="60" r="28" fill="#F7F4FA" stroke="#6B4A87" strokeWidth="1.5" />
          <polygon points="60,40 68,56 60,60 52,56" fill="#E8A9C2" />
          <polygon points="60,80 68,64 60,60 52,64" fill="#B9A6D1" />
          <circle cx="60" cy="60" r="4" fill="#241428" />
          <line x1="60" y1="26" x2="60" y2="34" stroke="#E8A9C2" strokeWidth="2" />
          <line x1="60" y1="86" x2="60" y2="94" stroke="#E8A9C2" strokeWidth="2" />
          <line x1="26" y1="60" x2="34" y2="60" stroke="#E8A9C2" strokeWidth="2" />
          <line x1="86" y1="60" x2="94" y2="60" stroke="#E8A9C2" strokeWidth="2" />
        </svg>
      );
    case 'cybersecurity-data-protection':
      return (
        <svg viewBox="0 0 120 120" className="w-16 h-16 shrink-0" fill="none">
          <rect x="15" y="15" width="90" height="90" rx="16" fill="#FFFFFF" stroke="#E0D8EC" strokeWidth="1.5" />
          <path d="M60 28 L85 38 L85 62 C85 78 72 90 60 95 C48 90 35 78 35 62 L35 38 Z" fill="#F7F4FA" stroke="#E8A9C2" strokeWidth="1.5" />
          <circle cx="60" cy="56" r="8" fill="#6B4A87" />
          <rect x="54" y="62" width="12" height="14" rx="2" fill="#E8A9C2" />
          <circle cx="60" cy="68" r="2" fill="#FFFFFF" />
        </svg>
      );
    default:
      return (
        <div className="w-16 h-16 rounded-2xl bg-[#FFFFFF] border border-[#6B4A87]/40 flex items-center justify-center text-[#E8A9C2]">
          <Layers className="w-8 h-8" />
        </div>
      );
  }
};

export const ServiceCard3D: React.FC<ServiceCard3DProps> = ({
  service,
  index,
  isSelected,
  onSelect,
  isExpandedInline,
  onToggleExpandInline,
}) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Damped 3D Card Tilt on Mouse Move
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Normalized [-1, 1]
    const normX = (x / rect.width) * 2 - 1;
    const normY = (y / rect.height) * 2 - 1;

    // Gentle maximum 6-degree tilt to keep visual calm
    setRotateX(-normY * 6);
    setRotateY(normX * 6);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    soundEngine.playHover();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out',
      }}
      className={`rounded-3xl border transition-colors flex flex-col justify-between relative overflow-hidden group ${
        isExpandedInline
          ? 'bg-[#FFFFFF] border-[#E8A9C2] shadow-[0_0_30px_rgba(232,169,194,0.18)]'
          : isSelected
          ? 'bg-[#FFFFFF] border-[#E8A9C2]/80'
          : 'bg-[#FFFFFF]/90 border-[#6B4A87]/35 hover:border-[#E8A9C2]/60 hover:bg-[#221228]'
      }`}
    >
      {/* Background Accent Gradient */}
      <div 
        className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#6B4A87]/15 to-transparent rounded-bl-full pointer-events-none transition-opacity group-hover:opacity-100 opacity-60" 
      />

      <div className="p-6 sm:p-7">
        
        {/* Top Header Row: Real Graphic Illustration + Service Badge */}
        <div className="flex items-start justify-between mb-5">
          <ServiceIllustration serviceId={service.id} color={service.color} />
          
          <div className="flex flex-col items-end">
            <span className="text-[10px] font-mono-accent text-[#6B4A87] bg-[#F7F4FA] px-2.5 py-1 rounded-full border border-[#6B4A87]/40">
              SERVICE {service.number}
            </span>
            <span className="text-[9px] font-mono-accent text-[#5C4A6E] mt-1">
              {service.badge || 'Enterprise Grade'}
            </span>
          </div>
        </div>

        {/* Service Title & Tagline */}
        <h3 className="font-heading font-bold text-xl text-[#241428] group-hover:text-[#E8A9C2] transition-colors leading-snug">
          {service.title}
        </h3>

        <p className="mt-2.5 text-xs sm:text-sm text-[#5C4A6E]/80 leading-relaxed">
          {service.tagline}
        </p>

        {/* Tech Stack Chips */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {service.tech.slice(0, 4).map((tech, idx) => (
            <span
              key={idx}
              className="px-2 py-0.5 rounded text-[10px] font-mono-accent bg-[#F7F4FA] text-[#5C4A6E] border border-[#6B4A87]/30"
            >
              {tech}
            </span>
          ))}
          {service.tech.length > 4 && (
            <span className="px-1.5 py-0.5 rounded text-[9px] font-mono-accent text-[#6B4A87] bg-[#F7F4FA]">
              +{service.tech.length - 4} more
            </span>
          )}
        </div>

        {/* Expandable Inline Drawer (On Click) */}
        {isExpandedInline && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 pt-5 border-t border-[#6B4A87]/30 space-y-4"
          >
            {/* What It Includes */}
            <div>
              <span className="text-[11px] font-mono-accent text-[#6B4A87] uppercase tracking-wider block mb-2 font-semibold">
                WHAT IT INCLUDES
              </span>
              <ul className="space-y-1.5 text-xs text-[#5C4A6E]/90">
                {service.includes?.map((inc, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#E8A9C2] shrink-0 mt-0.5" />
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What Kind of Problem / Client It Fits */}
            <div className="p-3.5 rounded-xl bg-[#FFFFFF] border border-[#6B4A87]/30">
              <span className="text-[10px] font-mono-accent text-[#5C4A6E] uppercase block mb-1">
                IDEAL CLIENT & ARCHITECTURAL FIT
              </span>
              <p className="text-xs text-[#5C4A6E]/85 leading-relaxed">
                {service.fitsFor}
              </p>
            </div>

            {/* Key Deliverables */}
            {service.deliverables && (
              <div>
                <span className="text-[10px] font-mono-accent text-[#5C4A6E] uppercase tracking-wider block mb-1.5">
                  CORE DELIVERABLES
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-[11px] font-mono-accent text-[#241428]">
                  {service.deliverables.map((del, dIdx) => (
                    <div key={dIdx} className="px-2.5 py-1 rounded bg-[#F7F4FA] border border-[#6B4A87]/30">
                      • {del}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        )}

      </div>

      {/* Card Action Footer Bar */}
      <div className="px-6 py-4 bg-[#1A0D1F] border-t border-[#6B4A87]/25 flex items-center justify-between">
        <div className="text-[11px] font-mono-accent text-[#5C4A6E]">
          {service.metrics.label}: <span className="text-[#E8A9C2] font-bold">{service.metrics.value}</span>
        </div>

        <div className="flex items-center space-x-2">
          {/* Toggle Inline Expand on Click */}
          <button
            onClick={() => {
              soundEngine.playClick('soft');
              onToggleExpandInline();
            }}
            className="px-3 py-1.5 rounded-lg text-xs font-mono-accent bg-[#F7F4FA] hover:bg-[#EDE8F3] text-[#E8A9C2] border border-[#6B4A87]/40 flex items-center space-x-1.5 transition-colors"
          >
            <span>{isExpandedInline ? 'Collapse' : 'Details'}</span>
            {isExpandedInline ? (
              <ChevronUp className="w-3.5 h-3.5" />
            ) : (
              <ChevronDown className="w-3.5 h-3.5" />
            )}
          </button>

          {/* Open Dedicated Deep Inspector Modal */}
          <button
            onClick={() => {
              soundEngine.playClick('hero');
              onSelect(service);
            }}
            title="Inspect Service Specification"
            className="p-1.5 rounded-lg text-[#5C4A6E] hover:text-[#241428] hover:bg-[#F7F4FA] transition-colors"
          >
            <Maximize2 className="w-4 h-4" />
          </button>
        </div>
      </div>

    </motion.div>
  );
};
