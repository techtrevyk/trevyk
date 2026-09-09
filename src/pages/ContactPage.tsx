import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Check, 
  Clock, 
  ShieldCheck, 
  Sparkles,
  Building2,
  GraduationCap,
  Cpu,
  Layers,
  CheckCircle2,
  Lock,
  ArrowRight,
  MessageSquare
} from 'lucide-react';
import { SiteSettings } from '../types';
import { BrandGradientDivider } from '../components/BrandGradientBar';
import { soundEngine } from '../utils/audioEngine';

interface ContactPageProps {
  settings: SiteSettings;
}

export const ContactPage: React.FC<ContactPageProps> = ({ settings }) => {
  const [formType, setFormType] = useState<'services' | 'kiduart'>('services');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    phone: '',
    scope: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    soundEngine.playClick('hero');
    
    // Simulate brief network submission with immediate feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div id="contact-page" className="w-full min-h-screen pt-28 sm:pt-36 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================================= */}
        {/* 1. HEADER HERO                                                            */}
        {/* ========================================================================= */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#FFFFFF] border border-[#6B4A87]/40 text-[#6B4A87] font-mono-accent text-xs mb-4">
            <Mail className="w-3.5 h-3.5" />
            <span>DIRECT TECHNICAL CONSULTATION & DEMOS</span>
          </div>

          <h1 className="font-heading font-bold text-3xl sm:text-5xl lg:text-6xl text-[#241428] leading-tight">
            Let’s Build Something Enduring Together
          </h1>

          <p className="mt-5 text-[#5C4A6E] text-base sm:text-lg leading-relaxed">
            Whether you are architecting a high-throughput microservices platform, migrating cloud infrastructure, or deploying Kiduart School ERP across educational campuses, our team is ready to evaluate your requirements.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* 2. CONTACT SPLIT: FORM & DIRECT CHANNELS                                  */}
        {/* ========================================================================= */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left: Contact Form (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-10 rounded-3xl bg-[#FFFFFF] border border-[#6B4A87]/40 shadow-2xl relative">
            {submitted ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center border border-emerald-500/40">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="font-heading font-bold text-2xl text-[#241428]">
                  Inquiry Dispatched Successfully
                </h3>
                <p className="text-sm text-[#5C4A6E] max-w-md mx-auto leading-relaxed">
                  Thank you, {formData.name || 'Partner'}. A senior technical architect from Trevyk Technologies has received your requirements and will reply within 24 business hours.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      soundEngine.playClick('soft');
                      setSubmitted(false);
                    }}
                    className="px-6 py-2.5 rounded-xl bg-[#F7F4FA] border border-[#6B4A87]/40 text-xs font-mono-accent text-[#6B4A87] hover:bg-[#EDE8F3] transition-colors"
                  >
                    Submit Another Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Inquiry Type Toggle */}
                <div>
                  <label className="block text-xs font-mono-accent text-[#5C4A6E] mb-2 uppercase">
                    I AM INTERESTED IN:
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        soundEngine.playClick('soft');
                        setFormType('services');
                      }}
                      className={`p-3 rounded-xl border text-xs font-mono-accent flex items-center justify-center space-x-2 transition-all ${
                        formType === 'services'
                          ? 'bg-[#E8A9C2] text-[#241428] font-bold border-[#E8A9C2] shadow-md'
                          : 'bg-[#FFFFFF] text-[#5C4A6E] border-[#6B4A87]/40 hover:border-[#6B4A87]'
                      }`}
                    >
                      <Cpu className="w-4 h-4" />
                      <span>Custom IT Services</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        soundEngine.playClick('soft');
                        setFormType('kiduart');
                      }}
                      className={`p-3 rounded-xl border text-xs font-mono-accent flex items-center justify-center space-x-2 transition-all ${
                        formType === 'kiduart'
                          ? 'bg-[#E8A9C2] text-[#241428] font-bold border-[#E8A9C2] shadow-md'
                          : 'bg-[#FFFFFF] text-[#5C4A6E] border-[#6B4A87]/40 hover:border-[#6B4A87]'
                      }`}
                    >
                      <GraduationCap className="w-4 h-4" />
                      <span>Kiduart School ERP</span>
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono-accent text-[#5C4A6E] mb-1">Your Full Name *</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Dr. Rajesh Verma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#FFFFFF] border border-[#6B4A87]/40 text-[#241428] placeholder-[#5C4A6E]/45 text-xs sm:text-sm focus:outline-none focus:border-[#E8A9C2]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono-accent text-[#5C4A6E] mb-1">Official Email *</label>
                    <input
                      required
                      type="email"
                      placeholder="rajesh@enterprise.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#FFFFFF] border border-[#6B4A87]/40 text-[#241428] placeholder-[#5C4A6E]/45 text-xs sm:text-sm focus:outline-none focus:border-[#E8A9C2]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono-accent text-[#5C4A6E] mb-1">Organization / School Name *</label>
                    <input
                      required
                      type="text"
                      placeholder="Company or Educational Trust"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#FFFFFF] border border-[#6B4A87]/40 text-[#241428] placeholder-[#5C4A6E]/45 text-xs sm:text-sm focus:outline-none focus:border-[#E8A9C2]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono-accent text-[#5C4A6E] mb-1">Contact Phone</label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#FFFFFF] border border-[#6B4A87]/40 text-[#241428] placeholder-[#5C4A6E]/45 text-xs sm:text-sm focus:outline-none focus:border-[#E8A9C2]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono-accent text-[#5C4A6E] mb-1">Project Scope & Key Needs *</label>
                  <textarea
                    required
                    rows={4}
                    placeholder={
                      formType === 'services'
                        ? 'Describe your architectural requirements, concurrency targets, tech stack, or cloud timeline...'
                        : 'Describe your campus strength, current software pain points, and key modules needed (fees, biometric, GPS)...'
                    }
                    value={formData.scope}
                    onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#FFFFFF] border border-[#6B4A87]/40 text-[#241428] text-xs sm:text-sm focus:outline-none focus:border-[#E8A9C2] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#6B4A87] to-[#E8A9C2] text-[#241428] font-heading font-semibold text-xs sm:text-sm shadow-xl hover:opacity-95 transition-opacity flex items-center justify-center space-x-2 disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Transmitting Inquiries...' : 'Submit Technical Request'}</span>
                </button>
              </form>
            )}
          </div>

          {/* Right: Direct Contacts & HQ (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 sm:p-8 rounded-3xl bg-[#FFFFFF] border border-[#6B4A87]/35 space-y-5">
              <h3 className="font-heading font-bold text-lg text-[#241428]">
                Direct Contacts & Support
              </h3>

              <div className="space-y-4 text-xs">
                <div className="flex items-start space-x-3 text-[#5C4A6E]">
                  <div className="w-8 h-8 rounded-lg bg-[#F7F4FA] border border-[#6B4A87]/40 flex items-center justify-center text-[#6B4A87] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[#5C4A6E] font-mono-accent text-[11px]">GENERAL INQUIRIES</div>
                    <a href="mailto:contact@trevyk.com" className="font-mono-accent text-[#6B4A87] hover:underline text-sm">
                      contact@trevyk.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3 text-[#5C4A6E]">
                  <div className="w-8 h-8 rounded-lg bg-[#F7F4FA] border border-[#6B4A87]/40 flex items-center justify-center text-[#6B4A87] shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[#5C4A6E] font-mono-accent text-[11px]">KIDUART / PRODUCT DESK</div>
                    <a href="tel:+919217534128" className="font-mono-accent text-[#241428] text-sm hover:text-[#6B4A87]">
                      +91 92175 34128
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3 text-[#5C4A6E]">
                  <div className="w-8 h-8 rounded-lg bg-[#F7F4FA] border border-[#6B4A87]/40 flex items-center justify-center text-[#6B4A87] shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[#5C4A6E] font-mono-accent text-[11px]">BASED IN INDIA</div>
                    <span className="text-[#5C4A6E] leading-relaxed block mt-0.5">
                      Noida, Uttar Pradesh — demos, rollout, and support with the same team that ships{' '}
                      <a
                        href="https://kiduart.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#6B4A87] font-semibold underline underline-offset-2"
                      >
                        Kiduart
                      </a>
                      .
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-[#FFFFFF] border border-[#6B4A87]/35 space-y-2">
              <div className="flex items-center space-x-2 text-xs font-mono-accent text-[#6B4A87]">
                <Clock className="w-4 h-4" />
                <span className="font-bold">We reply within one business day</span>
              </div>
              <p className="text-xs text-[#5C4A6E] leading-relaxed">
                Product questions go to the Kiduart team. Custom IT / B2B requests are reviewed by Trevyk — no invented SLAs, no queue theatre.
              </p>
            </div>

            {/* Core Block Settling Cue */}
            <div className="p-5 rounded-2xl bg-[#FFFFFF]/80 border border-[#6B4A87]/30 flex items-center space-x-3">
              <Layers className="w-5 h-5 text-[#E8A9C2] shrink-0" />
              <div className="text-xs text-[#5C4A6E]">
                <strong className="text-[#241428] block font-heading font-semibold">Architectural Journey Complete</strong>
                The 3D Core Block rests in full assembly. Let’s translate your institutional vision into code.
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
