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
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#6B4A87]/30 via-[#B9A6D1]/20 to-[#E8A9C2]/20 blur-2xl animate-pulse" />
          
          {/* Official 3D Isometric Trevyk Logo */}
          <div className="relative z-10 transform -rotate-2 hover:rotate-0 transition-transform duration-500">
            <TrevykLogo layout="vertical" size="xl" theme="dark" showTagline={true} />
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
          {/* Brighter lighting so cubes read clearly on dark plum bg */}
          <ambientLight intensity={1.15} color="#E7E1F0" />
          
          <directionalLight
            position={[-4, 5, -3]}
            intensity={1.8}
            color="#E8A9C2"
          />

          <directionalLight
            position={[4, 6, 5]}
            intensity={2.6}
            color="#F8F6FB"
          />

          <pointLight
            position={[0, -3, 2]}
            intensity={1.1}
            color="#B9A6D1"
          />

          <pointLight
            position={[2, 3, 4]}
            intensity={0.9}
            color="#C4B0E0"
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
