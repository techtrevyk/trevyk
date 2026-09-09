import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  Layers, 
  GraduationCap, 
  Cpu, 
  Sparkles, 
  EyeOff, 
  Eye,
  Volume2,
  VolumeX,
  MessageSquareCode,
  ShieldCheck,
  GitMerge,
  MessageSquareQuote,
  Mail,
  ChevronRight,
  Info
} from 'lucide-react';
import { MagneticButton } from './MagneticButton';
import { TrevykLogo } from './TrevykLogo';
import { SiteSettings } from '../types';
import { soundEngine } from '../utils/audioEngine';

interface NavbarProps {
  settings: SiteSettings;
  onUpdateSettings: (settings: Partial<SiteSettings>) => void;
  onOpenArchitectureModal: () => void;
  onOpenGeminiChat?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  settings,
  onUpdateSettings,
  onOpenArchitectureModal,
  onOpenGeminiChat,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is active
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Close mobile menu automatically on window resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileMenuOpen]);

  // Handle ESC key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const handleToggleSound = () => {
    const nextSound = !settings.soundEnabled;
    soundEngine.setEnabled(nextSound);
    onUpdateSettings({ soundEnabled: nextSound });
  };

  // Multi-page navigation link configuration
  const navLinks = [
    { label: 'Home', path: '/', icon: Sparkles },
    { label: 'Services', path: '/services', icon: Cpu },
    { label: 'Technology', path: '/technology', badge: 'Core', icon: Layers },
    { label: 'Kiduart ERP', path: '/kiduart', badge: 'Flagship', icon: GraduationCap },
    { label: 'Process', path: '/process', icon: GitMerge },
    { label: 'About', path: '/about', icon: Info },
    { label: 'Contact', path: '/contact', icon: Mail },
  ];

  return (
    <>
      <header
        id="main-navigation"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#FFFFFF]/95 backdrop-blur-lg border-b border-[#6B4A87]/25 py-3 shadow-[0_8px_24px_rgba(107,74,135,0.08)]'
            : 'bg-[#F7F4FA]/80 backdrop-blur-md py-4 sm:py-5 lg:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Official Trevyk 3D Isometric Logo & Wordmark */}
          <NavLink
            id="brand-logo-link"
            to="/"
            onClick={() => {
              soundEngine.playClick('hero');
              if (mobileMenuOpen) setMobileMenuOpen(false);
            }}
            className="group flex items-center interactive-target focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8A9C2] rounded-xl p-1"
            data-cursor-label="TREVYK"
            aria-label="Trevyk Technologies Home"
          >
            <TrevykLogo size="sm" showTagline={false} />
          </NavLink>

          {/* Desktop Nav Links (Visible on Large Screens >= 1024px) */}
          <nav 
            className="hidden lg:flex items-center space-x-1 xl:space-x-1.5 bg-[#FFFFFF]/85 backdrop-blur-md px-3.5 xl:px-4 py-1.5 rounded-full border border-[#6B4A87]/40 shadow-inner"
            aria-label="Main Desktop Navigation"
          >
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <NavLink
                  key={link.label}
                  to={link.path}
                  onClick={() => soundEngine.playClick('soft')}
                  onMouseEnter={() => soundEngine.playHover()}
                  className={`relative px-2.5 xl:px-3.5 py-1.5 rounded-full text-xs xl:text-[13px] font-medium transition-all flex items-center space-x-1.5 group shrink-0 ${
                    isActive
                      ? 'text-[#241428] bg-[#E8E2F0] border border-[#E8A9C2]/40 shadow-[0_0_12px_rgba(232,169,194,0.2)]'
                      : 'text-[#5C4A6E]/80 hover:text-[#241428] hover:bg-[#EDE8F3]/60'
                  }`}
                  data-cursor-label={link.label.toUpperCase()}
                >
                  <span>{link.label}</span>
                  {link.badge && (
                    <span className={`text-[9px] xl:text-[10px] uppercase font-mono-accent px-1.5 py-0.2 rounded border ${
                      isActive
                        ? 'bg-[#E8A9C2] text-[#241428] font-bold border-[#E8A9C2]'
                        : 'bg-[#6B4A87]/40 text-[#E8A9C2] border-[#6B4A87]/50'
                    }`}>
                      {link.badge}
                    </span>
                  )}
                  {isActive && (
                    <motion.div
                      layoutId="active-nav-pill"
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#E8A9C2]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </NavLink>
              );
            })}
          </nav>

          {/* Desktop Right Header Actions (Audio, Motion, Blueprint CTA, Gemini Chat) */}
          <div className="hidden lg:flex items-center space-x-2 xl:space-x-3">
            {/* AI Assistant Quick Trigger */}
            {onOpenGeminiChat && (
              <button
                onClick={() => {
                  soundEngine.playClick('soft');
                  onOpenGeminiChat();
                }}
                title="Open Trevyk AI Assistant"
                className="px-2.5 py-1.5 rounded-full bg-[#FFFFFF]/80 border border-[#6B4A87]/40 text-xs font-mono-accent text-[#6B4A87] hover:bg-[#EDE8F3] hover:border-[#E8A9C2]/50 flex items-center space-x-1.5 transition-all"
                data-cursor-label="GEMINI"
              >
                <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                <span>AI</span>
              </button>
            )}

            {/* Audio Toggle */}
            <button
              id="sound-toggle-btn"
              onClick={handleToggleSound}
              title={settings.soundEnabled ? 'Mute Audio Sound FX' : 'Enable Interactive Sound FX'}
              aria-label={settings.soundEnabled ? 'Mute Audio Sound FX' : 'Enable Interactive Sound FX'}
              className={`p-2 rounded-full border transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8A9C2] ${
                settings.soundEnabled
                  ? 'bg-[#E8A9C2]/20 border-[#E8A9C2] text-[#E8A9C2] shadow-[0_0_10px_rgba(232,169,194,0.3)]'
                  : 'bg-[#FFFFFF]/80 border-[#6B4A87]/40 text-[#5C4A6E] hover:text-[#E8A9C2]'
              }`}
              data-cursor-label={settings.soundEnabled ? 'MUTE' : 'UNMUTE'}
            >
              {settings.soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>

            {/* Motion Preference Toggle */}
            <button
              id="motion-toggle-btn"
              onClick={() => {
                soundEngine.playClick('soft');
                onUpdateSettings({ reducedMotion: !settings.reducedMotion });
              }}
              title={settings.reducedMotion ? 'Enable 3D Motion' : 'Reduce Motion'}
              aria-label={settings.reducedMotion ? 'Enable 3D Motion' : 'Reduce Motion'}
              className="p-2 rounded-full bg-[#FFFFFF]/80 border border-[#6B4A87]/40 text-[#5C4A6E] hover:text-[#E8A9C2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8A9C2] transition-colors"
              data-cursor-label="MOTION"
            >
              {settings.reducedMotion ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>

            {/* Architecture Modal CTA */}
            <MagneticButton
              id="nav-consult-btn"
              variant="primary"
              onClick={() => {
                soundEngine.playClick('hero');
                onOpenArchitectureModal();
              }}
              className="!py-2 !px-3.5 !text-xs whitespace-nowrap"
              cursorLabel="INSPECT"
              reducedMotion={settings.reducedMotion}
            >
              <Layers className="w-3.5 h-3.5 mr-1 text-[#E8A9C2]" />
              <span>Inspect Core</span>
            </MagneticButton>
          </div>

          {/* Mobile / Tablet Header Controls (< 1024px) */}
          <div className="flex items-center space-x-2 lg:hidden">
            {/* Quick AI Assistant Button on Mobile */}
            {onOpenGeminiChat && (
              <button
                id="mobile-ai-chat-quick-btn"
                onClick={() => {
                  soundEngine.playClick('soft');
                  onOpenGeminiChat();
                }}
                title="Open AI Assistant"
                aria-label="Open Trevyk AI Assistant"
                className="p-2 sm:px-3 sm:py-1.5 rounded-xl bg-[#F7F4FA] border border-[#E8A9C2]/40 text-[#E8A9C2] hover:bg-[#EDE8F3] text-xs font-mono-accent flex items-center space-x-1.5 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8A9C2]"
              >
                <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                <span className="hidden sm:inline">AI Chat</span>
              </button>
            )}

            {/* Mobile Sound FX Toggle */}
            <button
              id="mobile-sound-toggle-btn"
              onClick={handleToggleSound}
              aria-label={settings.soundEnabled ? 'Mute Audio' : 'Enable Audio'}
              className={`p-2 rounded-xl border transition-all ${
                settings.soundEnabled
                  ? 'bg-[#E8A9C2]/20 border-[#E8A9C2] text-[#E8A9C2]'
                  : 'bg-[#FFFFFF]/80 border-[#6B4A87]/40 text-[#5C4A6E]'
              }`}
            >
              {settings.soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>

            {/* Mobile Hamburger / Close Button */}
            <button
              id="mobile-menu-toggle"
              onClick={() => {
                soundEngine.playClick('soft');
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-drawer"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              className="p-2.5 rounded-xl bg-[#FFFFFF]/90 border border-[#6B4A87]/50 text-[#241428] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8A9C2] active:scale-95 transition-transform"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#E8A9C2]" /> : <Menu className="w-5 h-5 text-[#5C4A6E]" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-30 lg:hidden flex flex-col">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-white/45 backdrop-blur-md"
              aria-hidden="true"
            />

            {/* Sliding Drawer Sheet */}
            <motion.div
              id="mobile-navigation-drawer"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="relative w-full bg-[#FFFFFF] border-b border-[#6B4A87]/40 shadow-2xl pt-20 pb-8 px-4 sm:px-6 max-h-[92vh] overflow-y-auto"
            >
              {/* Brand Tagline in Drawer Header */}
              <div className="mb-4 pb-3 border-b border-[#6B4A87]/30 flex items-center justify-between">
                <span className="text-[11px] font-mono-accent uppercase tracking-wider text-[#5C4A6E]">
                  Turning Vision Into Progress.
                </span>
                <span className="text-[10px] font-mono-accent text-[#6B4A87] bg-[#F7F4FA] px-2 py-0.5 rounded border border-[#6B4A87]/40">
                  v3.0 Multi-Page
                </span>
              </div>

              {/* Navigation Links Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {navLinks.map((link, idx) => {
                  const Icon = link.icon;
                  const isActive = location.pathname === link.path;
                  return (
                    <motion.div
                      key={link.label}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.03 }}
                    >
                      <NavLink
                        to={link.path}
                        onClick={() => {
                          soundEngine.playClick('soft');
                          setMobileMenuOpen(false);
                        }}
                        className={`flex items-center justify-between p-3 rounded-xl border text-sm font-medium transition-all group ${
                          isActive
                            ? 'bg-[#E8E2F0] border-[#E8A9C2] text-[#241428] shadow-[0_0_15px_rgba(232,169,194,0.25)]'
                            : 'bg-[#FFFFFF]/60 hover:bg-[#F7F4FA] border-[#6B4A87]/30 text-[#5C4A6E]'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          {Icon && (
                            <div className={`w-7 h-7 rounded-lg flex items-center justify-center transition-transform ${
                              isActive ? 'bg-[#E8A9C2] text-[#241428]' : 'bg-[#F7F4FA] text-[#E8A9C2] border border-[#6B4A87]/40'
                            }`}>
                              <Icon className="w-3.5 h-3.5" />
                            </div>
                          )}
                          <span>{link.label}</span>
                          {link.badge && (
                            <span className="text-[9px] uppercase font-mono-accent px-1.5 py-0.5 rounded bg-[#6B4A87]/50 text-[#E8A9C2]">
                              {link.badge}
                            </span>
                          )}
                        </div>
                        <ChevronRight className="w-4 h-4 text-[#5C4A6E] group-hover:text-[#E8A9C2] group-hover:translate-x-0.5 transition-all" />
                      </NavLink>
                    </motion.div>
                  );
                })}
              </div>

              {/* Settings & Interactive Toggles */}
              <div className="mt-5 pt-4 border-t border-[#6B4A87]/30 space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <button
                    onClick={() => {
                      soundEngine.playClick('soft');
                      onUpdateSettings({ reducedMotion: !settings.reducedMotion });
                    }}
                    className="flex items-center justify-between text-xs text-[#5C4A6E] p-3 rounded-xl bg-[#FFFFFF]/80 border border-[#6B4A87]/30"
                  >
                    <span className="text-[#5C4A6E]">3D Motion Engine:</span>
                    <span className="text-[#E8A9C2] font-semibold">
                      {settings.reducedMotion ? 'Reduced' : 'Cinematic 3D'}
                    </span>
                  </button>

                  <button
                    onClick={handleToggleSound}
                    className="flex items-center justify-between text-xs text-[#5C4A6E] p-3 rounded-xl bg-[#FFFFFF]/80 border border-[#6B4A87]/30"
                  >
                    <span className="text-[#5C4A6E]">Sound FX:</span>
                    <span className="text-[#E8A9C2] font-semibold">
                      {settings.soundEnabled ? 'Enabled' : 'Muted'}
                    </span>
                  </button>
                </div>

                {/* Primary Action Button in Drawer */}
                <button
                  onClick={() => {
                    soundEngine.playClick('hero');
                    setMobileMenuOpen(false);
                    onOpenArchitectureModal();
                  }}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#6B4A87] via-[#85539F] to-[#E8A9C2] text-[#241428] font-heading font-semibold text-sm flex items-center justify-center space-x-2 shadow-[0_10px_25px_rgba(107,74,135,0.4)] active:scale-[0.99] transition-transform"
                >
                  <Cpu className="w-4 h-4 text-[#241428]" />
                  <span>Inspect System Architecture</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
