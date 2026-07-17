// src/components/hero/NodeNetworkScene.tsx
import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import type { ThreeElements } from '@react-three/fiber';
import * as THREE from 'three';

// 1. THE NUCLEAR OPTION: Keep this so TS doesn't forget our 3D tags
declare global {
  namespace JSX {
    interface IntrinsicElements extends ThreeElements {}
  }
}

const NODE_COUNT = 40;
const CONNECT_DISTANCE = 2.2;
const HOVER_RADIUS = 0.35; // in NDC space, roughly a third of the screen
const tmpVec3 = new THREE.Vector3();

function seededRandom(seed: number) {
  let value = seed;
  return () => {
    value = (value * 9301 + 49297) % 233280;
    return value / 233280;
  };
}

function useNodePositions() {
  return useMemo(() => {
    const rand = seededRandom(42);
    const positions: THREE.Vector3[] = [];
    for (let i = 0; i < NODE_COUNT; i++) {
      positions.push(
        new THREE.Vector3(
          (rand() - 0.5) * 8,
          (rand() - 0.5) * 5,
          (rand() - 0.5) * 4
        )
      );
    }
    return positions;
  }, []);
}

function Nodes({ positions }: { positions: THREE.Vector3[] }) {
  const groupRef = useRef<THREE.Group>(null);
  const meshRefs = useRef<(THREE.Mesh | null)[]>([]);

  const lines = useMemo(() => {
    const segments: [THREE.Vector3, THREE.Vector3][] = [];
    for (let i = 0; i < positions.length; i++) {
      for (let j = i + 1; j < positions.length; j++) {
        if (positions[i].distanceTo(positions[j]) < CONNECT_DISTANCE) {
          segments.push([positions[i], positions[j]]);
        }
      }
    }
    return segments;
  }, [positions]);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.getElapsedTime();
    
    // Ambient rotation + cursor parallax on the whole group
    groupRef.current.rotation.x = Math.sin(t * 0.1) * 0.05 + state.mouse.y * 0.15;
    groupRef.current.rotation.y = t * 0.05 + state.mouse.x * 0.05;

    // Per-node proximity glow + scale
    meshRefs.current.forEach((mesh) => {
      if (!mesh) return;
      
      mesh.getWorldPosition(tmpVec3);
      tmpVec3.project(state.camera);
      
      const dx = tmpVec3.x - state.mouse.x;
      const dy = tmpVec3.y - state.mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const influence = THREE.MathUtils.clamp(1 - dist / HOVER_RADIUS, 0, 1);
      
      const mat = mesh.material as THREE.MeshStandardMaterial;
      mat.emissiveIntensity = THREE.MathUtils.lerp(
        mat.emissiveIntensity,
        0.4 + influence * 1.8,
        0.15
      );
      
      const targetScale = 1 + influence * 0.9;
      mesh.scale.setScalar(
        THREE.MathUtils.lerp(mesh.scale.x, targetScale, 0.15)
      );
    });
  });

  return (
    <group ref={groupRef}>
      {positions.map((pos, i) => (
        <mesh 
          key={`node-${i}`} 
          position={pos}
          ref={(el) => { meshRefs.current[i] = el; }}
        >
          <sphereGeometry args={[0.035, 12, 12]} />
          <meshStandardMaterial
            color="#1D9E75"
            emissive="#0F6E56"
            emissiveIntensity={0.4}
          />
        </mesh>
      ))}
      {lines.map(([a, b], i) => (
        <line key={`line-${i}`}>
          <bufferGeometry onUpdate={(geo: THREE.BufferGeometry) => geo.setFromPoints([a, b])} />
          <lineBasicMaterial
            color="#5DCAA5"
            transparent
            opacity={0.25}
          />
        </line>
      ))}
    </group>
  );
}

function Lights() {
  return (
    <group>
      <ambientLight intensity={0.6} color="#888880" />
      <pointLight position={[4, 3, 5]} intensity={1.5} color="#378ADD" />
      <pointLight position={[-4, -2, 3]} intensity={1} color="#1D9E75" />
    </group>
  );
}

export function NodeNetworkScene() {
  const positions = useNodePositions();

  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
    >
      <Lights />
      <Nodes positions={positions} />
    </Canvas>
  );
}