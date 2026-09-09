import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowUp, 
  ShieldCheck, 
  Server, 
  Lock, 
  Globe2, 
  Github, 
  Linkedin, 
  Twitter, 
  Sparkles,
  Layers,
  GraduationCap,
  Cpu,
  GitMerge,
  Info,
  Mail
} from 'lucide-react';
import { MagneticButton } from './MagneticButton';
import { TrevykLogo } from './TrevykLogo';
import { BrandGradientDivider } from './BrandGradientBar';

interface FooterProps {
  onOpenArchitectureModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenArchitectureModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navSolutions: Array<{
    label: string;
    path: string;
    badge?: string;
    external?: boolean;
  }> = [
    { label: 'Kiduart School ERP', path: '/kiduart', badge: 'Flagship' },
    { label: 'Kiduart official site', path: 'https://kiduart.com', external: true },
    { label: 'Cloud Architecture & DevOps', path: '/services' },
    { label: 'Custom Software (B2B)', path: '/services' },
    { label: 'Modular Core Technology', path: '/technology', badge: 'Core' },
    { label: 'Book Consultation', path: '/contact' },
  ];

  const navCompany = [
    { label: 'About Trevyk', path: '/about' },
    { label: '5-Stage Engineering Process', path: '/process' },
    { label: 'IT Services Overview', path: '/services' },
    { label: 'System Architecture', path: '/technology' },
    { label: 'Inspect 3D Core', action: onOpenArchitectureModal },
    { label: 'Book Consultation', path: '/contact' },
  ];

  const navCompliance = [
    { label: 'Built for Indian school operations', badge: 'Product' },
    { label: 'Role-based access in Kiduart', badge: 'Security' },
    { label: 'School data export on request', badge: 'Privacy' },
    { label: 'No invented adoption stats', badge: 'Honest' },
  ];

  return (
    <footer
      id="footer"
      className="relative w-full bg-[#FFFFFF] text-[#241428] border-t border-[#8B5CAD]/35 overflow-hidden select-none"
    >
      {/* Brand recurring gradient divider strip */}
      <div 
        className="w-full h-[3px]"
        style={{
          background: 'linear-gradient(90deg, #F7F4FA 0%, #8B5CAD 40%, #C89B6C 75%, #E8A9C2 100%)'
        }}
      />

      {/* Subtle Ambient Radial Lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[250px] bg-gradient-to-t from-[#8B5CAD]/15 to-transparent blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-12">
        
        {/* Top Grid: Brand Identity & Nav Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 sm:gap-12 pb-16 border-b border-[#8B5CAD]/25">
          
          {/* Col 1: Brand & Tagline (4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
            <div>
              {/* Official brand mark */}
              <Link
                to="/"
                className="inline-flex items-center group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8A9C2] rounded-xl"
                aria-label="Trevyk Technologies Home"
              >
                <TrevykLogo size="md" showTagline={false} />
              </Link>

              <p className="mt-4 text-xs sm:text-sm text-[#241428] font-medium leading-relaxed font-sans max-w-sm">
                Turning Vision Into Progress.
              </p>
              <p className="mt-1 text-xs text-[#5C4A6E] leading-relaxed font-sans max-w-sm">
                Parent company of{' '}
                <a
                  href="https://kiduart.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8B5CAD] font-semibold underline underline-offset-2 hover:text-[#E8A9C2]"
                >
                  Kiduart
                </a>
                — school ERP and IT products for B2B and B2C.
              </p>
            </div>

            <a
              href="https://kiduart.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2.5 px-3.5 py-2 rounded-xl bg-white border border-[#8B5CAD]/25 text-xs font-mono-accent text-[#5C4A6E] self-start hover:border-[#8B5CAD]/50 transition-colors"
            >
              <GraduationCap className="w-3.5 h-3.5 text-[#8B5CAD]" />
              <span>Visit kiduart.com</span>
            </a>
          </div>

          {/* Col 2: Solutions & ERP (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <div className="text-xs font-mono-accent uppercase tracking-widest text-[#8B5CAD] font-semibold">
              SOLUTIONS & PRODUCTS
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm font-sans">
              {navSolutions.map((link, idx) => (
                <li key={idx}>
                  {'external' in link && link.external ? (
                    <a
                      href={link.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#5C4A6E]/70 hover:text-[#E8A9C2] transition-colors inline-flex items-center space-x-1.5"
                    >
                      <span>{link.label}</span>
                    </a>
                  ) : (
                    <Link
                      to={link.path}
                      className="text-[#5C4A6E]/70 hover:text-[#E8A9C2] transition-colors inline-flex items-center space-x-1.5"
                    >
                      <span>{link.label}</span>
                      {'badge' in link && link.badge && (
                        <span className="text-[9px] font-mono-accent px-1.5 py-0.2 rounded bg-[#E8A9C2]/20 border border-[#E8A9C2]/40 text-[#8B5CAD]">
                          {link.badge}
                        </span>
                      )}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Company & Architecture (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="text-xs font-mono-accent uppercase tracking-widest text-[#8B5CAD] font-semibold">
              COMPANY
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm font-sans">
              {navCompany.map((link, idx) => (
                <li key={idx}>
                  {link.path ? (
                    <Link
                      to={link.path}
                      className="text-[#5C4A6E]/70 hover:text-[#E8A9C2] transition-colors"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <button
                      onClick={link.action}
                      className="text-[#5C4A6E]/70 hover:text-[#E8A9C2] transition-colors text-left"
                    >
                      {link.label}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Compliance & Trust (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <div className="text-xs font-mono-accent uppercase tracking-widest text-[#8B5CAD] font-semibold">
              HOW WE WORK
            </div>
            <ul className="space-y-2 text-xs font-mono-accent">
              {navCompliance.map((item, idx) => (
                <li key={idx} className="flex items-center justify-between py-1 border-b border-[#8B5CAD]/15 text-[#5C4A6E]">
                  <span className="truncate">{item.label}</span>
                  <span className="text-[10px] text-[#8B5CAD] bg-[#E7E1F0] px-1.5 py-0.5 rounded border border-[#8B5CAD]/20">
                    {item.badge}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright, Socials, and Back-to-Top Button */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-accent text-[#5C4A6E]/80">
          
          <div className="flex items-center space-x-4">
            <span>© {new Date().getFullYear()} Trevyk Technologies Pvt. Ltd. All rights reserved.</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Trevyk GitHub"
              className="w-8 h-8 rounded-lg bg-[#F7F4FA] border border-[#8B5CAD]/30 flex items-center justify-center text-[#5C4A6E] hover:text-[#241428] hover:border-[#E8A9C2] transition-all"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Trevyk LinkedIn"
              className="w-8 h-8 rounded-lg bg-[#F7F4FA] border border-[#8B5CAD]/30 flex items-center justify-center text-[#5C4A6E] hover:text-[#241428] hover:border-[#E8A9C2] transition-all"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Trevyk Twitter/X"
              className="w-8 h-8 rounded-lg bg-[#F7F4FA] border border-[#8B5CAD]/30 flex items-center justify-center text-[#5C4A6E] hover:text-[#241428] hover:border-[#E8A9C2] transition-all"
            >
              <Twitter className="w-4 h-4" />
            </a>
          </div>

          {/* Magnetic Back-to-Top Button */}
          <MagneticButton
            onClick={scrollToTop}
            magneticStrength={0.2}
            variant="custom"
            className="px-3.5 py-2 rounded-xl bg-[#F7F4FA] border border-[#8B5CAD]/40 text-[#241428] hover:border-[#E8A9C2] hover:bg-[#EDE8F3] transition-all flex items-center space-x-1.5 cursor-pointer interactive-target text-xs font-mono-accent"
            cursorLabel="TOP"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#E8A9C2]" />
          </MagneticButton>

        </div>

      </div>
    </footer>
  );
};
