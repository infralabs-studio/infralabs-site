// src/components/brand/LogoMark3D.tsx
import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import type { ThreeElements } from '@react-three/fiber';
import * as THREE from 'three';

// 1. THE NUCLEAR OPTION: Required in every file using R3F tags
declare global {
  namespace JSX {
    interface IntrinsicElements extends ThreeElements {}
  }
}

const VERTICES = [
  new THREE.Vector3(0, 1.1, 0),
  new THREE.Vector3(-1.05, -0.85, 0.6),
  new THREE.Vector3(1.05, -0.85, -0.6),
  new THREE.Vector3(0, -0.2, -0.9),
];

const EDGES: [number, number][] = [
  [0, 1], [0, 2], [1, 2], [0, 3], [1, 3], [2, 3],
];

function Edge({ a, b }: { a: THREE.Vector3; b: THREE.Vector3 }) {
  const { position, quaternion, length } = useMemo(() => {
    const dist = a.distanceTo(b);
    const mid = new THREE.Vector3().addVectors(a, b).multiplyScalar(0.5);
    const dir = new THREE.Vector3().subVectors(b, a).normalize();
    const quat = new THREE.Quaternion().setFromUnitVectors(
      new THREE.Vector3(0, 1, 0),
      dir
    );
    return { position: mid, quaternion: quat, length: dist };
  }, [a, b]);

  return (
    <mesh position={position} quaternion={quaternion}>
      <cylinderGeometry args={[0.035, 0.035, length, 8]} />
      <meshStandardMaterial color="#1D9E75" metalness={0.2} roughness={0.5} />
    </mesh>
  );
}

function Mark() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += delta * 0.25;
    groupRef.current.rotation.x = 0.3 + Math.sin(state.clock.elapsedTime * 0.3) * 0.05;
  });

  return (
    <group ref={groupRef}>
      {VERTICES.map((v, i) => (
        <mesh key={`vertex-${i}`} position={v}>
          <sphereGeometry args={[0.14, 20, 20]} />
          <meshStandardMaterial
            color={i === 3 ? '#5DCAA5' : '#1D9E75'}
            emissive={i === 3 ? '#1D9E75' : '#0F6E56'}
            emissiveIntensity={0.5}
            metalness={0.3}
            roughness={0.4}
          />
        </mesh>
      ))}
      {EDGES.map(([a, b], i) => (
        <Edge key={`edge-${i}`} a={VERTICES[a]} b={VERTICES[b]} />
      ))}
    </group>
  );
}

function Lights() {
  return (
    <>
      <ambientLight intensity={0.7} color="#888880" />
      <pointLight position={[3, 3, 4]} intensity={2} color="#5DCAA5" />
      <pointLight position={[-3, -2, 3]} intensity={1.2} color="#1D9E75" />
    </>
  );
}

export function LogoMark3D() {
  return (
    <Canvas
      camera={{ position: [0, 0.3, 5.5], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
    >
      <Lights />
      <Mark />
    </Canvas>
  );
}