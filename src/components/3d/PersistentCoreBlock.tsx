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

const EXPLODED_POSITIONS = [
  [-2.2, 2.0, 1.1],
  [2.3, 1.9, -1.1],
  [0, 0.4, 1.6],
  [-1.3, -1.0, -1.4],
  [1.4, -2.2, 1.2],
];

/** Edges that express “connectivity” between core modules */
const CONNECT_EDGES: [number, number][] = [
  [0, 2],
  [1, 2],
  [2, 3],
  [3, 4],
  [0, 1],
];

function smoothstep(edge0: number, edge1: number, x: number) {
  const t = Math.max(0, Math.min(1, (x - edge0) / (edge1 - edge0)));
  return t * t * (3 - 2 * t);
}

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
  const orbitRef = useRef<THREE.Group>(null);
  const cubesRef = useRef<(THREE.Mesh | null)[]>([]);
  const shadowRef = useRef<THREE.Mesh>(null);
  const linesRef = useRef<THREE.LineSegments | null>(null);

  const currentPos = useRef({ x: isMobile ? 0 : 1.35, y: isMobile ? -0.2 : 0.05, z: 0 });
  const currentRotation = useRef({ x: 0.32, y: 0.55, z: 0 });
  const currentScale = useRef(isMobile ? 0.75 : 1.0);
  const currentFloat = useRef(0);
  const currentExplode = useRef(0);
  const routePulse = useRef(0);
  const prevPathRef = useRef(currentPath);

  useEffect(() => {
    if (prevPathRef.current !== currentPath) {
      prevPathRef.current = currentPath;
      routePulse.current = 1.0;
    }
  }, [currentPath]);

  const cubeGeometry = useMemo(() => new THREE.BoxGeometry(0.72, 0.72, 0.72), []);

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

  const linePositions = useMemo(() => new Float32Array(CONNECT_EDGES.length * 6), []);
  const lineGeometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    return geo;
  }, [linePositions]);

  useFrame((state) => {
    if (!groupRef.current) return;
    const time = state.clock.getElapsedTime();

    if (routePulse.current > 0.001) {
      routePulse.current = lerp(routePulse.current, 0, 0.045);
    } else {
      routePulse.current = 0;
    }

    let targetX = isMobile ? 0 : 1.35;
    let targetY = isMobile ? -0.25 : 0.05;
    let targetZ = 0;
    let targetScale = isMobile ? 0.75 : 1.0;
    let targetExplode = 0;
    let targetRotY = 0.55 + scrollProgress * Math.PI * 1.2;
    let targetRotX = 0.28 + Math.sin(scrollProgress * Math.PI * 2) * 0.08;

    const normalizedPath = currentPath.toLowerCase();
    const ease = smoothstep;

    if (normalizedPath === '/' || normalizedPath === '') {
      // HOME: softer multi-stage journey — stays clear of left-aligned copy
      if (scrollProgress < 0.12) {
        targetX = isMobile ? 0 : 1.45;
        targetY = isMobile ? -0.2 : 0.08;
        targetZ = 0;
        targetScale = isMobile ? 0.72 : 0.98;
        targetExplode = 0;
      } else if (scrollProgress < 0.32) {
        const p = ease(0.12, 0.32, scrollProgress);
        targetX = isMobile ? 0.85 : 2.05 - p * 0.15;
        targetY = isMobile ? 0.55 : 0.55 - p * 0.15;
        targetZ = -0.85 - p * 0.25;
        targetScale = isMobile ? 0.48 : 0.62;
        targetExplode = p * 0.18;
      } else if (scrollProgress < 0.52) {
        // Across light Kiduart band — drift left, softer presence
        const p = ease(0.32, 0.52, scrollProgress);
        targetX = isMobile ? -0.7 : lerp(1.9, -1.85, p);
        targetY = lerp(0.4, -0.05, p) + Math.sin(p * Math.PI) * 0.18;
        targetZ = -1.05;
        targetScale = isMobile ? 0.46 : 0.58;
        targetExplode = 0.12 + p * 0.08;
      } else if (scrollProgress < 0.78) {
        const p = ease(0.52, 0.78, scrollProgress);
        targetX = isMobile ? 0.9 : lerp(-1.85, 1.75, p);
        targetY = lerp(-0.05, 0.15, p);
        targetZ = -1.0;
        targetScale = isMobile ? 0.5 : 0.68;
        targetExplode = 0.14;
      } else {
        const p = ease(0.78, 1, scrollProgress);
        targetX = lerp(1.75, 0.15, p);
        targetY = isMobile ? -0.15 : lerp(0.15, -0.02, p);
        targetZ = lerp(-1.0, 0.05, p);
        targetScale = isMobile ? 0.72 : lerp(0.68, 1.02, p);
        targetExplode = (1 - p) * 0.14;
      }
    } else if (normalizedPath.startsWith('/services')) {
      // SERVICES: right-side companion (content is left-heavy) — was wrongly on left
      targetX = isMobile ? 0.95 : 2.05;
      targetY = isMobile ? 0.55 : 0.35 - scrollProgress * 0.35;
      targetZ = -1.05;
      targetScale = isMobile ? 0.42 : 0.55;
      targetExplode = 0.1 + Math.sin(scrollProgress * Math.PI) * 0.1;
      targetRotY = 0.65 + scrollProgress * Math.PI * 0.85;
    } else if (normalizedPath.startsWith('/technology')) {
      targetX = 0;
      targetY = isMobile ? 0.1 : 0.15 - scrollProgress * 0.2;
      targetZ = isMobile ? -0.4 : 0.2;
      targetScale = isMobile ? 0.72 : 0.95;
      targetExplode = 0.45 + scrollProgress * 0.25;
      targetRotY = 0.55 + scrollProgress * 1.8;
    } else if (normalizedPath.startsWith('/kiduart')) {
      targetX = isMobile ? 0.8 : 1.8;
      targetY = isMobile ? 0.8 : 0.3 - scrollProgress * 0.3;
      targetZ = -0.8;
      targetScale = isMobile ? 0.52 : 0.75;
      targetExplode = 0.08;
      targetRotY = 0.45 + Math.sin(time * 0.5) * 0.2;
    } else if (normalizedPath.startsWith('/process')) {
      targetX = isMobile ? 1.0 : 1.9;
      targetY = isMobile ? 0.5 : 0.1 - scrollProgress * 0.3;
      targetZ = -1.0;
      targetScale = isMobile ? 0.48 : 0.68;
      targetExplode = 0.35 + scrollProgress * 0.2;
      targetRotY = 0.8 + scrollProgress * 1.2;
    } else if (normalizedPath.startsWith('/about')) {
      targetX = isMobile ? 0.9 : 1.7;
      targetY = isMobile ? 0.6 : 0.25 - scrollProgress * 0.2;
      targetZ = -0.6;
      targetScale = isMobile ? 0.55 : 0.8;
      targetExplode = 0.02;
      targetRotY = 0.55 + scrollProgress * 0.8;
    } else if (normalizedPath.startsWith('/contact')) {
      targetX = isMobile ? 0 : 1.4;
      targetY = isMobile ? 0.8 : 0.1;
      targetZ = isMobile ? -0.5 : 0;
      targetScale = isMobile ? 0.6 : 0.85;
      targetExplode = 0;
      targetRotY = 0.55 + scrollProgress * 0.5;
    }

    const pulseFactor = Math.sin(routePulse.current * Math.PI) * 0.12;
    targetScale += pulseFactor;

    // Heavier damping = smoother premium feel
    const damp = reducedMotion ? 0.12 : 0.048;
    const rotDamp = reducedMotion ? 0.12 : 0.042;

    if (!reducedMotion) {
      const floatOffset = Math.sin(time * 1.05) * 0.055;
      currentFloat.current = lerp(currentFloat.current, floatOffset, 0.055);

      const mouseTiltX = mousePos.y * 0.09;
      const mouseTiltY = mousePos.x * 0.11;

      currentRotation.current.x = lerp(currentRotation.current.x, targetRotX + mouseTiltX, rotDamp);
      currentRotation.current.y = lerp(
        currentRotation.current.y,
        targetRotY + mouseTiltY + time * 0.022,
        rotDamp,
      );
    } else {
      currentRotation.current.x = 0.32;
      currentRotation.current.y = 0.55;
    }

    currentPos.current.x = lerp(currentPos.current.x, targetX, damp);
    currentPos.current.y = lerp(currentPos.current.y, targetY + currentFloat.current, damp);
    currentPos.current.z = lerp(currentPos.current.z, targetZ, damp);
    currentScale.current = lerp(currentScale.current, targetScale, damp * 1.1);
    currentExplode.current = lerp(currentExplode.current, targetExplode, damp * 1.15);

    groupRef.current.position.set(currentPos.current.x, currentPos.current.y, currentPos.current.z);
    groupRef.current.rotation.set(currentRotation.current.x, currentRotation.current.y, 0);
    groupRef.current.scale.setScalar(currentScale.current);

    if (orbitRef.current) {
      orbitRef.current.rotation.y = time * 0.12;
      orbitRef.current.rotation.x = Math.sin(time * 0.18) * 0.08;
      orbitRef.current.position.copy(groupRef.current.position);
      orbitRef.current.scale.setScalar(currentScale.current * 1.05);
    }

    const cubeWorld: THREE.Vector3[] = [];

    cubesRef.current.forEach((cube, i) => {
      if (!cube) {
        cubeWorld.push(new THREE.Vector3());
        return;
      }
      const config = CUBE_CONFIGS[i];
      const exploded = EXPLODED_POSITIONS[i];

      const tx = lerp(config.targetPos[0], exploded[0], currentExplode.current);
      const ty = lerp(config.targetPos[1], exploded[1], currentExplode.current);
      const tz = lerp(config.targetPos[2], exploded[2], currentExplode.current);

      const isHovered = hoveredCube === i;
      const hoverScale = isHovered ? 1.1 : 1.0;

      cube.position.x = lerp(cube.position.x, tx, 0.075);
      cube.position.y = lerp(cube.position.y, ty + (isHovered ? 0.06 : 0), 0.075);
      cube.position.z = lerp(cube.position.z, tz, 0.075);
      cube.scale.setScalar(lerp(cube.scale.x, hoverScale, 0.085));

      if (currentExplode.current > 0.05) {
        cube.rotation.x = Math.sin(time * 1.2 + i) * currentExplode.current * 0.32;
        cube.rotation.y = Math.cos(time * 1.0 + i) * currentExplode.current * 0.32;
      } else {
        cube.rotation.x = lerp(cube.rotation.x, 0, 0.07);
        cube.rotation.y = lerp(cube.rotation.y, 0, 0.07);
      }

      cubeWorld.push(cube.position.clone());
    });

    // Update connective edges between modules
    if (linesRef.current && cubeWorld.length === CUBE_CONFIGS.length) {
      const pos = linesRef.current.geometry.attributes.position as THREE.BufferAttribute;
      CONNECT_EDGES.forEach(([a, b], edgeIndex) => {
        const i = edgeIndex * 6;
        pos.array[i] = cubeWorld[a].x;
        pos.array[i + 1] = cubeWorld[a].y;
        pos.array[i + 2] = cubeWorld[a].z;
        pos.array[i + 3] = cubeWorld[b].x;
        pos.array[i + 4] = cubeWorld[b].y;
        pos.array[i + 5] = cubeWorld[b].z;
      });
      pos.needsUpdate = true;
      const mat = linesRef.current.material as THREE.LineBasicMaterial;
      mat.opacity = 0.22 + Math.sin(time * 1.4) * 0.06 + currentExplode.current * 0.2;
    }

    if (shadowRef.current) {
      const shadowHeightFactor = 1 - currentFloat.current * 1.2;
      const shadowScale = (1.8 + currentExplode.current * 0.3) * shadowHeightFactor * currentScale.current;
      shadowRef.current.scale.set(shadowScale, shadowScale, 1);
      shadowRef.current.position.set(
        currentPos.current.x,
        currentPos.current.y - 2.1 * currentScale.current,
        currentPos.current.z,
      );

      const shadowMat = shadowRef.current.material as THREE.MeshBasicMaterial;
      if (shadowMat) {
        shadowMat.opacity = THREE.MathUtils.clamp(
          (0.55 - currentFloat.current * 0.45) * (1 - currentExplode.current * 0.3),
          0.1,
          0.65,
        );
      }
    }
  });

  return (
    <group>
      <mesh ref={shadowRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.1, 0]}>
        <planeGeometry args={[3.2, 3.2]} />
        <meshBasicMaterial map={shadowTexture} transparent opacity={0.5} depthWrite={false} />
      </mesh>

      {/* Orbital rings — visual connectivity / premium depth */}
      <group ref={orbitRef}>
        <mesh rotation={[Math.PI / 2.35, 0.15, 0.2]}>
          <torusGeometry args={[2.15, 0.006, 8, 96]} />
          <meshBasicMaterial color="#E8A9C2" transparent opacity={0.28} depthWrite={false} />
        </mesh>
        <mesh rotation={[Math.PI / 3.1, -0.4, 0.55]}>
          <torusGeometry args={[2.55, 0.004, 8, 96]} />
          <meshBasicMaterial color="#B9A6D1" transparent opacity={0.18} depthWrite={false} />
        </mesh>
        <mesh rotation={[1.2, 0.6, -0.3]}>
          <torusGeometry args={[1.75, 0.005, 8, 64]} />
          <meshBasicMaterial color="#6B4A87" transparent opacity={0.22} depthWrite={false} />
        </mesh>
      </group>

      <group ref={groupRef}>
        <lineSegments ref={linesRef} geometry={lineGeometry}>
          <lineBasicMaterial
            color="#E8A9C2"
            transparent
            opacity={0.28}
            depthWrite={false}
            blending={THREE.AdditiveBlending}
          />
        </lineSegments>

        {CUBE_CONFIGS.map((config, index) => {
          const isHovered = hoveredCube === index;
          return (
            <mesh
              key={config.id}
              ref={(el) => {
                cubesRef.current[index] = el;
              }}
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
                roughness={0.22}
                metalness={0.18}
                clearcoat={0.4}
                clearcoatRoughness={0.18}
                reflectivity={0.7}
                emissive={config.accent ? '#E8A9C2' : isHovered ? '#B9A6D1' : config.emissive}
                emissiveIntensity={config.accent ? 0.4 : isHovered ? 0.52 : 0.14}
              />
            </mesh>
          );
        })}
      </group>
    </group>
  );
};
