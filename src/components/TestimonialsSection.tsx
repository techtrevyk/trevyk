import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronLeft, 
  ChevronRight, 
  MessageSquareQuote, 
  Sparkles, 
  ShieldCheck, 
  GraduationCap, 
  Layers 
} from 'lucide-react';
import { TestimonialCard, TestimonialItem } from './TestimonialCard';
import { AmbientParticles } from './AmbientParticles';
import { SiteSettings } from '../types';

interface TestimonialsSectionProps {
  settings: SiteSettings;
  scrollProgress: number;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  settings,
  scrollProgress,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filterType, setFilterType] = useState<'all' | 'erp' | 'enterprise'>('all');

  const testimonials: TestimonialItem[] = [
    {
      id: 't1',
      name: 'Dr. Rajeshwari Sengupta',
      role: 'Dean of Academics & Campus Operations',
      organization: 'Delhi Public School Network (NCR)',
      type: 'school',
      quote:
        'Migrating 4,200 students across 3 campuses onto Kiduart School ERP (kiduart.com) took under 48 hours. Our automated fee reconciliation went from days of spreadsheet chaos to 100% real-time accuracy with zero parent grievances.',
      highlightMetric: {
        label: 'Fee Reconciliation Speed',
        value: 'Real-Time (< 1 sec)',
      },
      verifiedStatus: 'Verified K-12 Campus',
      rating: 5,
      initials: 'RS',
      accentColor: '#E8A9C2',
    },
    {
      id: 't2',
      name: 'Vikramaditya Singhania',
      role: 'Chief Technology Officer',
      organization: 'Edvance Learning Group (Pan-India)',
      type: 'network',
      quote:
        'Trevyk’s architectural rigor is unmatched. Their distributed micro-services effortlessly absorbed our 8:00 AM turnstile attendance rush of 180,000 students without a millisecond of latency spike.',
      highlightMetric: {
        label: 'Morning Ingress Concurrency',
        value: '180K Simultaneous Taps',
      },
      verifiedStatus: 'Verified Multi-Campus Group',
      rating: 5,
      initials: 'VS',
      accentColor: '#B9A6D1',
    },
    {
      id: 't3',
      name: 'Anandita Iyer',
      role: 'Head of Digital Transformation',
      organization: 'Greenfield Global IB Academy',
      type: 'school',
      quote:
        'The zero setup cost policy felt too good to be true until day one. No hidden fees, no opaque training invoices, and a parent mobile app with 4.9★ rating that parents genuinely love using every morning.',
      highlightMetric: {
        label: 'Setup Fee Overhead',
        value: '$0 Upfront Licensing',
      },
      verifiedStatus: 'Verified IB World School',
      rating: 5,
      initials: 'AI',
      accentColor: '#6B4A87',
    },
    {
      id: 't4',
      name: 'Marcus Vance',
      role: 'VP of Platform Engineering',
      organization: 'Strata Cloud Logistics',
      type: 'enterprise',
      quote:
        'Trevyk built our core event streaming pipeline using Kafka and Go micro-engines. Their 5-phase engineering lifecycle and threat modeling caught critical compliance bottlenecks before we ever touched production.',
      highlightMetric: {
        label: 'Production Uptime SLA',
        value: '99.995% Sustained',
      },
      verifiedStatus: 'Verified Enterprise Client',
      rating: 5,
      initials: 'MV',
      accentColor: '#E8A9C2',
    },
  ];

  const filteredTestimonials = testimonials.filter((item) => {
    if (filterType === 'erp') return item.type === 'school' || item.type === 'network';
    if (filterType === 'enterprise') return item.type === 'enterprise';
    return true;
  });

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredTestimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredTestimonials.length) % filteredTestimonials.length);
  };

  return (
    <section
      id="testimonials"
      className="relative w-full py-28 sm:py-36 bg-gradient-to-b from-[#F7F4FA] via-[#F5F1F8] to-[#FFFFFF] text-[#241428] overflow-hidden"
    >
      {/* Ambient Floating Particles Background (wow #23) */}
      <AmbientParticles
        count={settings.reducedMotion ? 0 : 25}
        reducedMotion={settings.reducedMotion}
        colorScheme="pink"
      />

      {/* Atmospheric Lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/3 w-[700px] h-[500px] bg-gradient-to-tr from-[#6B4A87]/20 via-[#F7F4FA]/40 to-transparent blur-[140px]" />
        <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-gradient-to-tl from-[#E8A9C2]/15 via-transparent to-transparent blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 sm:mb-18 pb-8 border-b border-[#6B4A87]/30">
          <div>
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#FFFFFF] border border-[#E8A9C2]/40 text-[#6B4A87] font-mono-accent text-xs mb-4 shadow-[0_4px_20px_rgba(232,169,194,0.15)]">
              <MessageSquareQuote className="w-3.5 h-3.5" />
              <span>TESTIMONIALS & CLIENT VOICES</span>
            </div>

            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#241428] tracking-tight">
              Validated By Leading Campuses &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8A9C2] via-[#B9A6D1] to-[#241428]">
                High-Growth Tech Teams
              </span>
            </h2>
          </div>

          {/* Carousel Navigation Buttons */}
          <div className="flex items-center space-x-3 self-start md:self-end">
            <button
              onClick={prevSlide}
              aria-label="Previous Testimonial"
              className="w-11 h-11 rounded-xl bg-[#FFFFFF] border border-[#6B4A87]/40 text-[#5C4A6E] hover:text-[#241428] hover:border-[#E8A9C2]/60 hover:bg-[#F7F4FA] transition-all flex items-center justify-center interactive-target shadow-md"
              data-cursor-label="PREV"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={nextSlide}
              aria-label="Next Testimonial"
              className="w-11 h-11 rounded-xl bg-[#FFFFFF] border border-[#6B4A87]/40 text-[#5C4A6E] hover:text-[#241428] hover:border-[#E8A9C2]/60 hover:bg-[#F7F4FA] transition-all flex items-center justify-center interactive-target shadow-md"
              data-cursor-label="NEXT"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Display: Desktop Grid + Responsive Track */}
        <div className="hidden lg:grid grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((item) => (
            <TestimonialCard
              key={item.id}
              testimonial={item}
              reducedMotion={settings.reducedMotion}
            />
          ))}
        </div>

        {/* Mobile / Tablet Horizontal Carousel */}
        <div className="lg:hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={filteredTestimonials[currentIndex]?.id || 'empty'}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              {filteredTestimonials[currentIndex] && (
                <TestimonialCard
                  testimonial={filteredTestimonials[currentIndex]}
                  reducedMotion={settings.reducedMotion}
                />
              )}
            </motion.div>
          </AnimatePresence>

          {/* Dots Indicator for Mobile */}
          <div className="flex items-center justify-center space-x-2 mt-6">
            {filteredTestimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all ${
                  idx === currentIndex ? 'w-8 bg-[#E8A9C2]' : 'w-2 bg-[#6B4A87]/40'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Bottom Reassurance Banner */}
        <div className="mt-14 p-6 sm:p-7 rounded-2xl bg-[#FFFFFF]/70 border border-[#6B4A87]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="font-heading font-bold text-sm sm:text-base text-[#241428]">
                100% Institutional Reference Guarantee
              </div>
              <div className="text-xs text-[#5C4A6E]/75">
                Connect directly with peer campus deans and engineering leaders running Trevyk today.
              </div>
            </div>
          </div>

          <button
            onClick={() => {
              const archEl = document.getElementById('architecture');
              if (archEl) archEl.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-xs font-mono-accent text-[#6B4A87] hover:text-[#241428] px-4 py-2 rounded-xl bg-[#F7F4FA] border border-[#E8A9C2]/40 hover:bg-[#EDE8F3] transition-all whitespace-nowrap"
          >
            Request Verifiable References →
          </button>
        </div>

      </div>
    </section>
  );
};
