import React, { useRef, useMemo, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { lerp } from '../../utils/math';
import { soundEngine } from '../../utils/audioEngine';

interface PersistentCoreBlockProps {
  scrollProgress: number;
  mousePos: { x: number; y: number };
  hoveredCube?: number | null;
  onCubeHover?: (index: number | null) => void;
  reducedMotion?: boolean;
  isMobile?: boolean;
  currentPath?: string;
}

// 5 cubes forming the Trevyk "Y" architecture formation matching the official logo
const CUBE_CONFIGS = [
  { id: 0, label: 'Edge Ingress', targetPos: [-0.85, 0.85, 0.15], color: '#E8A9C2', emissive: '#E8A9C2', accent: true },
  { id: 1, label: 'API Gateway', targetPos: [0.85, 0.85, -0.15], color: '#C4B0E0', emissive: '#B9A6D1', accent: false },
  { id: 2, label: 'Distributed Services', targetPos: [0, 0.15, 0], color: '#8B6BA8', emissive: '#6B4A87', accent: false },
  { id: 3, label: 'Modular ERP Core', targetPos: [0, -0.75, 0], color: '#6B4A87', emissive: '#6B4A87', accent: false },
  { id: 4, label: 'Resilient Data Store', targetPos: [0, -1.65, 0], color: '#B9A6D1', emissive: '#B9A6D1', accent: false },
];

// Exploded positions for modular inspection
const EXPLODED_POSITIONS = [
  [-2.2, 2.0, 1.1],
  [2.3, 1.9, -1.1],
  [0, 0.4, 1.6],
  [-1.3, -1.0, -1.4],
  [1.4, -2.2, 1.2],
];

export const PersistentCoreBlock: React.FC<PersistentCoreBlockProps> = ({
  scrollProgress = 0,
  mousePos = { x: 0, y: 0 },
  hoveredCube = null,
  onCubeHover,
  reducedMotion = false,
  isMobile = false,
  currentPath = '/',
}) => {
  const groupRef = useRef<THREE.Group>(null);
  const cubesRef = useRef<(THREE.Mesh | null)[]>([]);
  const shadowRef = useRef<THREE.Mesh>(null);

  // Smooth interpolated values for physics & scroll journey
  const currentPos = useRef({ x: isMobile ? 0 : 1.35, y: isMobile ? -0.2 : 0.05, z: 0 });
  const currentRotation = useRef({ x: 0.32, y: 0.55, z: 0 });
  const currentScale = useRef(isMobile ? 0.75 : 1.0);
  const currentFloat = useRef(0);
  const currentExplode = useRef(0);
  const routePulse = useRef(0);
  const prevPathRef = useRef(currentPath);

  // Trigger brief pulse animation on route change (the visual continuity cue)
  useEffect(() => {
    if (prevPathRef.current !== currentPath) {
      prevPathRef.current = currentPath;
      routePulse.current = 1.0; // Trigger pulse
    }
  }, [currentPath]);

  // Cube geometry with rounded beveled appearance
  const cubeGeometry = useMemo(() => {
    return new THREE.BoxGeometry(0.72, 0.72, 0.72);
  }, []);

  // Procedural soft contact shadow texture
  const shadowTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 128;
    canvas.height = 128;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const gradient = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
      gradient.addColorStop(0, 'rgba(12, 6, 18, 0.85)');
      gradient.addColorStop(0.3, 'rgba(42, 24, 48, 0.45)');
      gradient.addColorStop(0.7, 'rgba(42, 24, 48, 0.12)');
      gradient.addColorStop(1, 'rgba(42, 24, 48, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 128, 128);
    }
    return new THREE.CanvasTexture(canvas);
  }, []);

  useFrame((state) => {
    if (!groupRef.current) return;
    const time = state.clock.getElapsedTime();

    // Decay route pulse smoothly
    if (routePulse.current > 0.001) {
      routePulse.current = lerp(routePulse.current, 0, 0.06);
    } else {
      routePulse.current = 0;
    }

    // Determine target coordinates based on active route and page scroll
    let targetX = isMobile ? 0 : 1.35;
    let targetY = isMobile ? -0.25 : 0.05;
    let targetZ = 0;
    let targetScale = isMobile ? 0.75 : 1.0;
    let targetExplode = 0;
    let targetRotY = 0.55 + scrollProgress * Math.PI * 1.5;
    let targetRotX = 0.32 + Math.sin(scrollProgress * Math.PI * 2) * 0.1;

    const normalizedPath = currentPath.toLowerCase();

    if (normalizedPath === '/' || normalizedPath === '') {
      // HOME PAGE: Multi-stage scroll choreography
      if (scrollProgress < 0.15) {
        targetX = isMobile ? 0 : 1.35;
        targetY = isMobile ? -0.25 : 0.05;
        targetZ = 0;
        targetScale = isMobile ? 0.75 : 1.0;
        targetExplode = 0;
      } else if (scrollProgress < 0.40) {
        const p = (scrollProgress - 0.15) / 0.25;
        targetX = isMobile ? 0.9 : 2.0 - p * 0.3;
        targetY = isMobile ? 0.8 : 0.6 - p * 0.2;
        targetZ = -1.0;
        targetScale = isMobile ? 0.45 : 0.65;
        targetExplode = p * 0.25;
      } else if (scrollProgress < 0.75) {
        const p = (scrollProgress - 0.40) / 0.35;
        targetX = isMobile ? -0.9 : -2.0 + p * 0.4;
        targetY = -0.2 + Math.sin(p * Math.PI) * 0.25;
        targetZ = -1.2;
        targetScale = isMobile ? 0.5 : 0.7;
        targetExplode = 0.15;
      } else {
        const p = Math.min((scrollProgress - 0.75) / 0.25, 1);
        targetX = 0;
        targetY = isMobile ? -0.2 : -0.05;
        targetZ = 0.1;
        targetScale = isMobile ? 0.75 : 1.05;
        targetExplode = (1 - p) * 0.2;
      }
    } else if (normalizedPath.startsWith('/services')) {
      // SERVICES PAGE: Calm upper-left anchor
      targetX = isMobile ? -0.9 : -2.0;
      targetY = isMobile ? 0.9 : 0.5 - scrollProgress * 0.4;
      targetZ = -0.9;
      targetScale = isMobile ? 0.48 : 0.65;
      targetExplode = 0.12 + Math.sin(scrollProgress * Math.PI) * 0.15;
      targetRotY = 0.75 + scrollProgress * Math.PI;
    } else if (normalizedPath.startsWith('/technology')) {
      // TECHNOLOGY PAGE: Center stage exploded isometric layers
      targetX = 0;
      targetY = isMobile ? 0.1 : 0.15 - scrollProgress * 0.2;
      targetZ = isMobile ? -0.4 : 0.2;
      targetScale = isMobile ? 0.72 : 0.95;
      targetExplode = 0.45 + scrollProgress * 0.25; // Exploded for inspection
      targetRotY = 0.55 + scrollProgress * 1.8;
    } else if (normalizedPath.startsWith('/kiduart')) {
      // KIDUART ERP PAGE: Center-right companion with spotlight
      targetX = isMobile ? 0.8 : 1.8;
      targetY = isMobile ? 0.8 : 0.3 - scrollProgress * 0.3;
      targetZ = -0.8;
      targetScale = isMobile ? 0.52 : 0.75;
      targetExplode = 0.08;
      targetRotY = 0.45 + Math.sin(time * 0.5) * 0.2;
    } else if (normalizedPath.startsWith('/process')) {
      // PROCESS PAGE: Right side layered step stack
      targetX = isMobile ? 1.0 : 1.9;
      targetY = isMobile ? 0.5 : 0.1 - scrollProgress * 0.3;
      targetZ = -1.0;
      targetScale = isMobile ? 0.48 : 0.68;
      targetExplode = 0.35 + scrollProgress * 0.2;
      targetRotY = 0.8 + scrollProgress * 1.2;
    } else if (normalizedPath.startsWith('/about')) {
      // ABOUT PAGE: Solid reassembled crystal badge stage
      targetX = isMobile ? 0.9 : 1.7;
      targetY = isMobile ? 0.6 : 0.25 - scrollProgress * 0.2;
      targetZ = -0.6;
      targetScale = isMobile ? 0.55 : 0.8;
      targetExplode = 0.02; // Solid unity
      targetRotY = 0.55 + scrollProgress * 0.8;
    } else if (normalizedPath.startsWith('/contact')) {
      // CONTACT PAGE: Reassembled center anchor
      targetX = isMobile ? 0 : 1.4;
      targetY = isMobile ? 0.8 : 0.1;
      targetZ = isMobile ? -0.5 : 0;
      targetScale = isMobile ? 0.6 : 0.85;
      targetExplode = 0;
      targetRotY = 0.55 + scrollProgress * 0.5;
    }

    // Apply route acknowledgment pulse scale boost
    const pulseFactor = Math.sin(routePulse.current * Math.PI) * 0.14;
    targetScale += pulseFactor;

    // 2. Interpolate physics & cursor tilt with heavy damping (lerp 0.06-0.08)
    if (!reducedMotion) {
      const floatOffset = Math.sin(time * 1.3) * 0.07;
      currentFloat.current = lerp(currentFloat.current, floatOffset, 0.07);

      const mouseTiltX = mousePos.y * 0.12;
      const mouseTiltY = mousePos.x * 0.15;

      currentRotation.current.x = lerp(currentRotation.current.x, targetRotX + mouseTiltX, 0.06);
      currentRotation.current.y = lerp(currentRotation.current.y, targetRotY + mouseTiltY + time * 0.03, 0.06);
    } else {
      currentRotation.current.x = 0.32;
      currentRotation.current.y = 0.55;
    }

    currentPos.current.x = lerp(currentPos.current.x, targetX, 0.065);
    currentPos.current.y = lerp(currentPos.current.y, targetY + currentFloat.current, 0.065);
    currentPos.current.z = lerp(currentPos.current.z, targetZ, 0.065);
    currentScale.current = lerp(currentScale.current, targetScale, 0.07);
    currentExplode.current = lerp(currentExplode.current, targetExplode, 0.07);

    groupRef.current.position.set(currentPos.current.x, currentPos.current.y, currentPos.current.z);
    groupRef.current.rotation.set(currentRotation.current.x, currentRotation.current.y, 0);
    groupRef.current.scale.setScalar(currentScale.current);

    // 3. Update individual cubes with lerp
    cubesRef.current.forEach((cube, i) => {
      if (!cube) return;
      const config = CUBE_CONFIGS[i];
      const exploded = EXPLODED_POSITIONS[i];

      const tx = lerp(config.targetPos[0], exploded[0], currentExplode.current);
      const ty = lerp(config.targetPos[1], exploded[1], currentExplode.current);
      const tz = lerp(config.targetPos[2], exploded[2], currentExplode.current);

      const isHovered = hoveredCube === i;
      const hoverScale = isHovered ? 1.12 : 1.0;

      cube.position.x = lerp(cube.position.x, tx, 0.09);
      cube.position.y = lerp(cube.position.y, ty + (isHovered ? 0.08 : 0), 0.09);
      cube.position.z = lerp(cube.position.z, tz, 0.09);

      cube.scale.setScalar(lerp(cube.scale.x, hoverScale, 0.1));

      if (currentExplode.current > 0.05) {
        cube.rotation.x = Math.sin(time * 1.5 + i) * currentExplode.current * 0.4;
        cube.rotation.y = Math.cos(time * 1.2 + i) * currentExplode.current * 0.4;
      } else {
        cube.rotation.x = lerp(cube.rotation.x, 0, 0.08);
        cube.rotation.y = lerp(cube.rotation.y, 0, 0.08);
      }
    });

    // 4. Contact shadow adaptation
    if (shadowRef.current) {
      const shadowHeightFactor = 1 - currentFloat.current * 1.2;
      const shadowScale = (1.8 + currentExplode.current * 0.3) * shadowHeightFactor * currentScale.current;
      shadowRef.current.scale.set(shadowScale, shadowScale, 1);
      shadowRef.current.position.set(currentPos.current.x, currentPos.current.y - 2.1 * currentScale.current, currentPos.current.z);
      
      const shadowMat = shadowRef.current.material as THREE.MeshBasicMaterial;
      if (shadowMat) {
        shadowMat.opacity = THREE.MathUtils.clamp(
          (0.6 - currentFloat.current * 0.5) * (1 - currentExplode.current * 0.3),
          0.12,
          0.7
        );
      }
    }
  });

  return (
    <group>
      {/* Contact Shadow Plane */}
      <mesh
        ref={shadowRef}
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -2.1, 0]}
      >
        <planeGeometry args={[3.2, 3.2]} />
        <meshBasicMaterial
          map={shadowTexture}
          transparent
          opacity={0.55}
          depthWrite={false}
        />
      </mesh>

      {/* The 5-Cube Isometric "Y" Formation */}
      <group ref={groupRef}>
        {CUBE_CONFIGS.map((config, index) => {
          const isHovered = hoveredCube === index;
          return (
            <mesh
              key={config.id}
              ref={(el) => { cubesRef.current[index] = el; }}
              geometry={cubeGeometry}
              position={[config.targetPos[0], config.targetPos[1], config.targetPos[2]]}
              castShadow
              receiveShadow
              onPointerOver={(e) => {
                e.stopPropagation();
                soundEngine.playHover();
                onCubeHover?.(index);
              }}
              onPointerOut={() => {
                onCubeHover?.(null);
              }}
            >
              <meshPhysicalMaterial
                color={config.color}
                roughness={0.25}
                metalness={0.15}
                clearcoat={0.35}
                clearcoatRoughness={0.2}
                reflectivity={0.65}
                emissive={config.accent ? '#E8A9C2' : isHovered ? '#B9A6D1' : config.emissive}
                emissiveIntensity={config.accent ? 0.38 : isHovered ? 0.5 : 0.12}
              />
            </mesh>
          );
        })}
      </group>
    </group>
  );
};
