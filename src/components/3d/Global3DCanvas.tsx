import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { PersistentCoreBlock } from './PersistentCoreBlock';
import { SiteSettings } from '../../types';
import { TrevykLogo } from '../TrevykLogo';

interface Global3DCanvasProps {
  scrollProgress: number;
  mousePos: { x: number; y: number };
  settings: SiteSettings;
  hoveredCube?: number | null;
  onCubeHover?: (index: number | null) => void;
  currentPath?: string;
}

export const Global3DCanvas: React.FC<Global3DCanvasProps> = ({
  scrollProgress,
  mousePos,
  settings,
  hoveredCube,
  onCubeHover,
  currentPath = '/',
}) => {
  const [hasWebGL, setHasWebGL] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check WebGL availability
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      setHasWebGL(Boolean(gl));
    } catch {
      setHasWebGL(false);
    }

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Determine if currently in a light section or page
  const isLightSection = 
    (currentPath.includes('process') && scrollProgress < 0.8) ||
    (currentPath === '/' && ((scrollProgress >= 0.14 && scrollProgress <= 0.32) || (scrollProgress >= 0.68 && scrollProgress <= 0.82)));

  if (!hasWebGL || !settings.highQuality3D) {
    // Elegant fallback: persistent animated isometric logo emblem
    return (
      <div 
        id="global-3d-fallback"
        className="fixed inset-0 pointer-events-none z-0 flex items-center justify-center overflow-hidden transition-opacity duration-700"
        style={{ opacity: 0.85 }}
      >
        <div 
          className="transition-all duration-700 ease-out"
          style={{
            transform: `translate(${
              scrollProgress < 0.15 
                ? (isMobile ? '0px, -60px' : '220px, 0px') 
                : scrollProgress < 0.35 
                ? '320px, -180px' 
                : scrollProgress < 0.60 
                ? '-300px, 40px' 
                : scrollProgress < 0.85 
                ? '280px, 60px' 
                : '0px, 120px'
            }) scale(${scrollProgress < 0.15 ? 1.1 : scrollProgress > 0.9 ? 1.15 : 0.75})`,
          }}
        >
          <TrevykLogo layout="icon-only" size="xl" />
        </div>
      </div>
    );
  }

  return (
    <div
      id="global-persistent-3d-container"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      <Canvas
        camera={{ position: [0, 0, 5.8], fov: isMobile ? 48 : 42 }}
        dpr={isMobile ? [1, 1.5] : [1, 1.75]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
          stencil: false,
          depth: true,
        }}
        className="w-full h-full"
      >
        <Suspense fallback={null}>
          {/* Section-Aware Lighting Rig */}
          <ambientLight intensity={isLightSection ? 1.3 : 0.8} color={isLightSection ? '#241428' : '#D1C4E9'} />
          
          {/* Key Spotlight */}
          <spotLight
            position={[5, 7, 6]}
            angle={0.45}
            penumbra={0.9}
            intensity={isLightSection ? 2.5 : 2.0}
            color="#E8A9C2"
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-bias={-0.0001}
          />

          {/* Secondary Fill Rim Light */}
          <directionalLight
            position={[-4, -3, -2]}
            intensity={isLightSection ? 1.1 : 0.85}
            color="#6B4A87"
          />

          {/* Top Soft Lavender Accent Light */}
          <pointLight
            position={[0, 4, 3]}
            intensity={0.9}
            color="#B9A6D1"
          />

          {/* Persistent Core Block 3D Mesh */}
          <PersistentCoreBlock
            scrollProgress={scrollProgress}
            mousePos={mousePos}
            hoveredCube={hoveredCube}
            onCubeHover={onCubeHover}
            reducedMotion={settings.reducedMotion}
            isMobile={isMobile}
            currentPath={currentPath}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};
