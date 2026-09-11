import React, { useState, useEffect, useRef, useCallback } from 'react';
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { SiteSettings } from './types';
import { Preloader } from './components/Preloader';
import { Cursor } from './components/Cursor';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BrandGradientBar } from './components/BrandGradientBar';
import { Global3DCanvas } from './components/3d/Global3DCanvas';
import { ArchitectureModal } from './components/ArchitectureModal';
import { GeminiChatbot } from './components/GeminiChatbot';
import { SEOManager } from './components/SEOManager';
import { Analytics } from './components/Analytics';
import { Breadcrumbs } from './components/Breadcrumbs';
import { PageTransition } from './components/PageTransition';
import { RouteLoader } from './components/RouteLoader';

// Multi-Page Views
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { TechnologyPage } from './pages/TechnologyPage';
import { KiduartPage } from './pages/KiduartPage';
import { ProcessPage } from './pages/ProcessPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { trackChatOpen } from './utils/analytics';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Helper to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
}

function MainAppContent() {
  const [loading, setLoading] = useState(true);
  const [settings, setSettings] = useState<SiteSettings>({
    reducedMotion: false,
    highQuality3D: true,
    soundEnabled: false,
  });

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [chatInitialPrompt, setChatInitialPrompt] = useState<string | undefined>(undefined);
  const [selectedCubeIndex, setSelectedCubeIndex] = useState<number | null>(null);
  const [hoveredCube, setHoveredCube] = useState<number | null>(null);

  const location = useLocation();
  const lenisRef = useRef<Lenis | null>(null);

  const openChatWithPrompt = (prompt?: string) => {
    setChatInitialPrompt(prompt);
    setChatOpen(true);
    trackChatOpen();
  };

  const handleOpenArchitectureModal = (cubeIndex?: number | null) => {
    setSelectedCubeIndex(cubeIndex !== undefined ? cubeIndex : null);
    setModalOpen(true);
  };

  // Check system prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setSettings((prev) => ({ ...prev, reducedMotion: true }));
    }

    const handleChange = (e: MediaQueryListEvent) => {
      setSettings((prev) => ({ ...prev, reducedMotion: e.matches }));
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Initialize Lenis smooth scroll and connect with GSAP ScrollTrigger
  useEffect(() => {
    if (settings.reducedMotion) {
      if (lenisRef.current) {
        lenisRef.current.destroy();
        lenisRef.current = null;
      }
      return;
    }

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.95,
    });

    lenisRef.current = lenis;

    // Connect Lenis with ScrollTrigger
    lenis.on('scroll', (e: { scroll: number; limit: number; progress: number }) => {
      ScrollTrigger.update();
      setScrollProgress(e.progress || 0);
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    const animId = requestAnimationFrame(raf);

    // Native scroll fallback listener
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress(window.scrollY / totalScroll);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('scroll', handleScroll);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [settings.reducedMotion, location.pathname]);

  // Pause page smooth-scroll while chatbot is open so the chat panel can scroll
  useEffect(() => {
    const lenis = lenisRef.current;
    if (!lenis) return;
    if (chatOpen) {
      lenis.stop();
    } else {
      lenis.start();
    }
  }, [chatOpen]);

  const handlePreloaderComplete = useCallback(() => {
    setLoading(false);
  }, []);

  // Normalized mouse coordinates (-1 to 1) for 3D parallax
  const handleMouseMove = useCallback((e: MouseEvent) => {
    const x = (e.clientX / window.innerWidth) * 2 - 1;
    const y = -(e.clientY / window.innerHeight) * 2 + 1;
    setMousePos({ x, y });
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  const updateSettings = (newSettings: Partial<SiteSettings>) => {
    setSettings((prev) => ({ ...prev, ...newSettings }));
  };

  return (
    <div id="trevyk-app" className="relative min-h-screen bg-[#2A1830] text-[#F8F6FB] overflow-x-hidden">
      <ScrollToTop />
      <SEOManager />
      <Analytics />

      {/* 1. Global Recurring Brand Device: Pinned Top Gradient Bar (4-5px) */}
      <BrandGradientBar height={5} pinnedTop={true} shimmer={true} />

      {/* 2. Global Custom Cursor */}
      <Cursor reducedMotion={settings.reducedMotion} />

      {/* 3. Cinematic Preloader with real loading & shattering wipe */}
      {loading && (
        <Preloader
          onComplete={handlePreloaderComplete}
          reducedMotion={settings.reducedMotion}
        />
      )}

      {/* 4. Global Persistent 3D WebGL Canvas (Persists across route changes) */}
      <Global3DCanvas
        scrollProgress={scrollProgress}
        mousePos={mousePos}
        settings={settings}
        hoveredCube={hoveredCube}
        onCubeHover={setHoveredCube}
        currentPath={location.pathname}
      />

      <RouteLoader reducedMotion={settings.reducedMotion} />

      {/* 5. Persistent Multi-Page Navigation */}
      <Navbar
        settings={settings}
        onUpdateSettings={updateSettings}
        onOpenArchitectureModal={() => handleOpenArchitectureModal(null)}
        onOpenGeminiChat={() => openChatWithPrompt()}
      />

      {/* 6. Multi-Page Routes with Smooth Transition Animations */}
      <main id="main-content" className="relative z-10">
        <Breadcrumbs />
        <AnimatePresence mode="wait">
          <PageTransition
            key={location.pathname}
            pathname={location.pathname}
            reducedMotion={settings.reducedMotion}
          >
            <Routes location={location}>
              <Route
                path="/"
                element={
                  <HomePage
                    settings={settings}
                    scrollProgress={scrollProgress}
                    mousePos={mousePos}
                    onOpenArchitectureModal={handleOpenArchitectureModal}
                    hoveredCube={hoveredCube}
                    onCubeHover={setHoveredCube}
                    onOpenGeminiChat={() => openChatWithPrompt()}
                  />
                }
              />
              <Route
                path="/services"
                element={
                  <ServicesPage
                    settings={settings}
                    onOpenArchitectureModal={() => handleOpenArchitectureModal(null)}
                  />
                }
              />
              <Route
                path="/technology"
                element={
                  <TechnologyPage
                    settings={settings}
                    onOpenArchitectureModal={handleOpenArchitectureModal}
                    hoveredCube={hoveredCube}
                    onCubeHover={setHoveredCube}
                  />
                }
              />
              <Route
                path="/kiduart"
                element={<KiduartPage settings={settings} />}
              />
              <Route
                path="/process"
                element={<ProcessPage settings={settings} />}
              />
              <Route
                path="/about"
                element={
                  <AboutPage
                    settings={settings}
                    onOpenArchitectureModal={() => handleOpenArchitectureModal(null)}
                  />
                }
              />
              <Route
                path="/contact"
                element={<ContactPage settings={settings} />}
              />
              {/* Fallback route */}
              <Route
                path="*"
                element={
                  <HomePage
                    settings={settings}
                    scrollProgress={scrollProgress}
                    mousePos={mousePos}
                    onOpenArchitectureModal={handleOpenArchitectureModal}
                    hoveredCube={hoveredCube}
                    onCubeHover={setHoveredCube}
                    onOpenGeminiChat={() => openChatWithPrompt()}
                  />
                }
              />
            </Routes>
          </PageTransition>
        </AnimatePresence>
      </main>

      {/* 7. Persistent Multi-Page Footer */}
      <Footer onOpenArchitectureModal={() => handleOpenArchitectureModal(null)} />

      {/* 8. Interactive 3D Architecture Modal */}
      <ArchitectureModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialCubeIndex={selectedCubeIndex}
        onSelectCube={(index) => {
          setSelectedCubeIndex(index);
          setHoveredCube(index);
        }}
      />

      {/* 9. Trevyk AI Assistant */}
      <GeminiChatbot
        isOpen={chatOpen}
        onClose={() => {
          setChatOpen(false);
          setChatInitialPrompt(undefined);
        }}
        onOpen={() => {
          setChatOpen(true);
          trackChatOpen();
        }}
        initialPrompt={chatInitialPrompt}
      />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <MainAppContent />
    </BrowserRouter>
  );
}
