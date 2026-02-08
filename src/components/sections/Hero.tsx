"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { TextReveal } from "@/components/ui/TextReveal";
import { MagneticButton } from "@/components/ui/MagneticButton";

export default function Hero() {
  const scrollToTimeline = () => {
    const timeline = document.getElementById("timeline");
    if (timeline) {
      timeline.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      <div className="z-10 flex flex-col items-center text-center space-y-8 p-4">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative"
        >
          <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-white/80 to-white/20 select-none">
            致童怿雅
          </h1>
          <div className="absolute -inset-4 blur-3xl bg-primary/20 rounded-full z-[-1] animate-pulse-slow" />
        </motion.div>

        <TextReveal 
          text="——一封来自远方的信件" 
          className="text-2xl md:text-4xl font-body text-gold/80" 
          delay={0.5} 
        />
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="pt-12"
        >
          <MagneticButton onClick={scrollToTimeline}>
            开启信笺
          </MagneticButton>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDown size={24} />
      </motion.div>
    </section>
  );
}
