import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  GraduationCap, 
  ArrowRight, 
  CheckCircle2, 
  Calendar, 
  CreditCard, 
  Users, 
  MapPin, 
  Sparkles,
  ExternalLink,
  ShieldAlert,
  Activity
} from 'lucide-react';
import { SiteSettings } from '../../types';
import { soundEngine } from '../../utils/audioEngine';

interface KiduartTeaserProps {
  settings: SiteSettings;
}

export const KiduartTeaser: React.FC<KiduartTeaserProps> = ({ settings }) => {
  return (
    <section
      id="kiduart-teaser"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#E7E1F0] text-[#241428] transition-colors duration-500 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end justify-between mb-12">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#D4C3E3] border border-[#6B4A87]/30 text-[#6B4A87] font-mono-accent text-xs mb-4">
              <GraduationCap className="w-3.5 h-3.5 text-[#6B4A87]" />
              <span>03 // FLAGSHIP SAAS PRODUCT</span>
            </div>

            <h2 className="font-heading font-bold text-3xl sm:text-5xl text-[#241428] leading-tight tracking-tight">
              Kiduart — school ERP from Trevyk
            </h2>

            <p className="mt-4 text-[#5A3875] text-base sm:text-lg max-w-3xl leading-relaxed">
              Our flagship product for Indian schools: admissions, student records, attendance, exams, fees, and parent communication in one system. Built by Trevyk — full product details at{' '}
              <a href="https://kiduart.com" target="_blank" rel="noopener noreferrer" className="text-[#6B4A87] font-semibold underline underline-offset-2">
                kiduart.com
              </a>
              .
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-3">
            <Link
              to="/kiduart"
              onClick={() => soundEngine.playClick('soft')}
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-[#6B4A87] text-white font-heading text-xs sm:text-sm font-semibold hover:bg-[#5A3875] transition-all shadow-md group"
            >
              <span>Discover Kiduart Platform</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href="https://kiduart.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 text-xs font-mono-accent text-[#6B4A87] hover:text-[#6B4A87] transition-colors px-2 py-1"
            >
              <span>Visit kiduart.com</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Real Product UI Mockup & Metrics Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Feature Column: 4 Core Modules */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3.5">
            {[
              {
                title: 'Automated Timetable Generation',
                desc: 'Conflict-free algorithmic scheduling for teachers, labs, and elective periods.',
                icon: Calendar,
              },
              {
                title: 'Zero-Reconciliation Fee Gateway',
                desc: 'Instant UPI & card settlements with auto-generated GST compliance receipts.',
                icon: CreditCard,
              },
              {
                title: 'Student 360 & Biometric Telemetry',
                desc: 'Real-time RFID/facial gate attendance with automated parent SMS alerts.',
                icon: Users,
              },
              {
                title: 'Live GPS School Bus Fleet Tracking',
                desc: 'Geofenced transit updates with estimated time of arrival notifications.',
                icon: MapPin,
              },
            ].map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  className="p-4 sm:p-5 rounded-2xl bg-white/80 border border-[#B9A6D1]/50 shadow-sm hover:shadow-md transition-shadow flex items-start space-x-4"
                >
                  <div className="p-2.5 rounded-xl bg-[#E7E1F0] text-[#6B4A87] shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-sm text-[#241428]">
                      {feature.title}
                    </h3>
                    <p className="text-xs text-[#5A3875] mt-1 leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Styled Real Product UI Dashboard Graphic */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl sm:rounded-3xl bg-[#FFFFFF] p-3 sm:p-5 border border-[#6B4A87]/30 shadow-2xl overflow-hidden relative group">
              
              {/* Window Frame Bar */}
              <div className="flex items-center justify-between pb-3 border-b border-[#6B4A87]/30 mb-3 text-xs font-mono-accent text-[#5C4A6E]">
                <div className="flex items-center space-x-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#E8A9C2]" />
                  <div className="w-3 h-3 rounded-full bg-[#C89B6C]" />
                  <div className="w-3 h-3 rounded-full bg-[#6B4A87]" />
                  <span className="ml-2 text-[11px] text-[#5C4A6E]/70">kiduart.com/portal/dashboard</span>
                </div>
                <div className="flex items-center space-x-2 text-[10px] text-[#E8A9C2]">
                  <span className="w-2 h-2 rounded-full bg-[#E8A9C2] animate-pulse" />
                  <span>CAMPUS LIVE TELEMETRY</span>
                </div>
              </div>

              {/* Realistic Dashboard Image with Custom Overlay Panels */}
              <div className="relative rounded-xl overflow-hidden bg-[#F7F4FA]">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
                  alt="Kiduart School ERP Management Dashboard"
                  referrerPolicy="no-referrer"
                  className="w-full h-64 sm:h-80 object-cover object-left-top opacity-70 group-hover:scale-105 transition-transform duration-700"
                />

                {/* Overlaid Live KPI Chips */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#FFFFFF] via-transparent to-transparent p-4 sm:p-6 flex flex-col justify-end">
                  <div className="grid grid-cols-3 gap-2.5 sm:gap-3 bg-[#FFFFFF]/90 backdrop-blur-md p-3 sm:p-4 rounded-xl border border-[#6B4A87]/40">
                    <div>
                      <div className="text-[10px] font-mono-accent text-[#5C4A6E]">ATTENDANCE</div>
                      <div className="font-mono-accent font-bold text-sm sm:text-base text-[#E8A9C2]">98.6%</div>
                      <div className="text-[9px] text-[#5C4A6E]/60">2,410 Present Today</div>
                    </div>

                    <div>
                      <div className="text-[10px] font-mono-accent text-[#5C4A6E]">FEES COLLECTED</div>
                      <div className="font-mono-accent font-bold text-sm sm:text-base text-[#241428]">$148.2K</div>
                      <div className="text-[9px] text-[#5C4A6E]/60">Auto-Reconciled</div>
                    </div>

                    <div>
                      <div className="text-[10px] font-mono-accent text-[#5C4A6E]">FLEET TRANSIT</div>
                      <div className="font-mono-accent font-bold text-sm sm:text-base text-[#5C4A6E]">24 / 24</div>
                      <div className="text-[9px] text-[#5C4A6E]/60">On Route (GPS Live)</div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
