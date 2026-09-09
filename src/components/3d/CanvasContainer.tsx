import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { CoreBlock } from './CoreBlock';
import { TrevykLogo } from '../TrevykLogo';

interface CanvasContainerProps {
  scrollProgress?: number;
  mousePos?: { x: number; y: number };
  disassembled?: boolean;
  hoveredCube?: number | null;
  onCubeHover?: (index: number | null) => void;
  onEasterEggTrigger?: () => void;
  reducedMotion?: boolean;
  forceFallback?: boolean;
}

export const CanvasContainer: React.FC<CanvasContainerProps> = ({
  scrollProgress = 0,
  mousePos = { x: 0, y: 0 },
  disassembled = false,
  hoveredCube = null,
  onCubeHover,
  onEasterEggTrigger,
  reducedMotion = false,
  forceFallback = false,
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [webglSupported, setWebglSupported] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Test WebGL support safely
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) setWebglSupported(false);
    } catch {
      setWebglSupported(false);
    }

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // If WebGL is not available or forced fallback on low-end
  if (!webglSupported || forceFallback) {
    return (
      <div 
        id="core-block-fallback" 
        className="w-full h-full flex items-center justify-center select-none"
      >
        <div className="relative flex flex-col items-center justify-center">
          {/* Ambient Glow */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#8B5CAD]/30 via-[#BEABD6]/20 to-[#E8A9C2]/20 blur-2xl animate-pulse" />
          
          {/* Official 3D Isometric Trevyk Logo */}
          <div className="relative z-10 transform -rotate-2 hover:rotate-0 transition-transform duration-500">
            <TrevykLogo layout="vertical" size="xl" showTagline={true} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      id="three-canvas-wrapper" 
      className="w-full h-full relative cursor-grab active:cursor-grabbing select-none"
    >
      <Canvas
        camera={{
          position: [0, 0, 5.8],
          fov: isMobile ? 50 : 42,
          near: 0.1,
          far: 100,
        }}
        dpr={Math.min(window.devicePixelRatio, 2)}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
      >
        <Suspense fallback={null}>
          {/* Lighting */}
          <ambientLight intensity={0.8} color="#5C4A6E" />
          
          {/* Warm Rim Light (Blush Pink highlight) */}
          <directionalLight
            position={[-4, 5, -3]}
            intensity={1.6}
            color="#E8A9C2"
          />

          {/* Key Light (Royal purple / soft lavender front) */}
          <directionalLight
            position={[4, 6, 5]}
            intensity={2.2}
            color="#241428"
            castShadow
          />

          {/* Fill Light (Deep Aubergine undertone) */}
          <pointLight
            position={[0, -3, 2]}
            intensity={0.8}
            color="#BEABD6"
          />

          {/* The 3D Core Block Model */}
          <CoreBlock
            scrollProgress={scrollProgress}
            mousePos={mousePos}
            disassembled={disassembled}
            hoveredCube={hoveredCube}
            onCubeHover={onCubeHover}
            onEasterEggTrigger={onEasterEggTrigger}
            reducedMotion={reducedMotion}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};
