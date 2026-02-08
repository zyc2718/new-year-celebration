"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef, MouseEvent } from "react";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export function MagneticButton({ children, onClick, className }: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const ySpring = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    
    // Calculate distance from center
    const xDist = clientX - (left + width / 2);
    const yDist = clientY - (top + height / 2);

    x.set(xDist * 0.35);
    y.set(yDist * 0.35);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: xSpring, y: ySpring }}
      className={cn("cursor-pointer", className)}
      onClick={onClick}
    >
      <motion.button
        className={cn(
          "px-8 py-3 rounded-full text-lg font-medium",
          "glass text-white",
          "transition-all duration-300 ease-out",
          "hover:bg-white/10 hover:scale-105 active:scale-95",
          "border border-white/10 hover:border-gold/30"
        )}
      >
        {children}
      </motion.button>
    </motion.div>
  );
}
