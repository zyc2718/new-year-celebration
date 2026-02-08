"use client";

import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sparkles, Stars } from "@react-three/drei";
import { Group } from "three";

function Particles() {
  const groupRef = useRef<Group>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
      groupRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      <Sparkles 
        count={isMobile ? 80 : 200} 
        scale={12} 
        size={4} 
        speed={0.4} 
        opacity={0.6}
        color="#D4AF37" 
      />
      
      <Sparkles 
        count={isMobile ? 40 : 100} 
        scale={15} 
        size={6} 
        speed={0.2} 
        opacity={0.4}
        color="#FF2D55" 
      />

      <Stars 
        radius={100} 
        depth={50} 
        count={isMobile ? 2000 : 5000} 
        factor={4} 
        saturation={0} 
        fade 
        speed={1} 
      />
    </group>
  );
}

export default function ParticleBackground() {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <fog attach="fog" args={["#050505", 5, 20]} />
        <ambientLight intensity={0.5} />
        <Particles />
      </Canvas>
    </div>
  );
}
