// src/components/VillaScene.jsx
import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';

function RotatingBox() {
  const mesh = useRef();
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  useFrame((_, delta) => {
    if (!prefersReduced && mesh.current) {
      mesh.current.rotation.y += delta * 0.5;
    }
  });
  return (
    <mesh ref={mesh} scale={1.5} castShadow receiveShadow>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#D8C19A" />
    </mesh>
  );
}

export default function VillaScene() {
  const [isWebGL, setIsWebGL] = useState(true);

  useEffect(() => {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    setIsWebGL(!!gl);
  }, []);

  if (!isWebGL) {
    // Fallback static image (placeholder)
    return (
      <section id="villa-scene" className="py-16 bg-bgSecondary flex items-center justify-center">
        <img src="https://via.placeholder.com/800x600?text=Villa+Scene+Fallback" alt="Villa scene fallback" className="max-w-full h-auto" />
      </section>
    );
  }

  return (
    <section id="villa-scene" className="py-16 bg-bgSecondary">
      <Canvas shadows camera={{ position: [2, 2, 4], fov: 50 }} className="max-w-4xl mx-auto h-96">
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={0.7} castShadow />
        <RotatingBox />
        <OrbitControls enableZoom={false} />
        {/* In case of loading issues, show a fallback message */}
        <Html center>
          <div className="text-textPrimary bg-bgPrimary p-2 rounded shadow">Villa 3D Demo</div>
        </Html>
      </Canvas>
    </section>
  );
}
