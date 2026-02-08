"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { GlassCard } from "@/components/ui/GlassCard";

const events = [
  { year: "2025", month: "January", title: "Reflection", description: "Looking back at the memories we made." },
  { year: "2025", month: "June", title: "Growth", description: "Challenges overcome, lessons learned." },
  { year: "2025", month: "December", title: "Anticipation", description: "Standing on the edge of tomorrow." },
  { year: "2026", month: "January", title: "New Dawn", description: "The future is open wide." },
];

function TimelineItem({ item, index }: { item: typeof events[0], index: number }) {
  const isEven = index % 2 === 0;
  
  return (
    <motion.div 
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className={`flex w-full items-center justify-between mb-24 ${isEven ? "flex-row" : "flex-row-reverse"}`}
    >
      {/* Date Side */}
      <div className={`w-5/12 ${isEven ? "text-right pr-8" : "text-left pl-8"}`}>
        <h3 className="text-3xl font-display text-gold">{item.year}</h3>
        <span className="text-xl text-white/50">{item.month}</span>
      </div>

      {/* Center Line Dot */}
      <div className="w-2/12 flex justify-center relative">
        <div className="w-4 h-4 bg-gold rounded-full z-10 shadow-[0_0_20px_rgba(212,175,55,0.5)]" />
        <div className="absolute top-4 bottom-[-100px] w-0.5 bg-white/10" />
      </div>

      {/* Content Side */}
      <div className="w-5/12 px-4">
        <GlassCard className="p-8 group cursor-default">
          <h4 className="text-2xl font-display mb-2 text-white group-hover:text-gold transition-colors">{item.title}</h4>
          <p className="text-white/70 font-body leading-relaxed">{item.description}</p>
        </GlassCard>
      </div>
    </motion.div>
  );
}

export default function Timeline() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);

  return (
    <section id="timeline" ref={ref} className="relative min-h-screen py-32 px-4 md:px-20 max-w-7xl mx-auto">
      <motion.div style={{ opacity }} className="relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-display mb-4">Time Capsule</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />
        </div>
        
        <div className="flex flex-col">
          {events.map((item, i) => (
            <TimelineItem key={i} item={item} index={i} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
