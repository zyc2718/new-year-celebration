"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Gift } from "lucide-react";

export default function InteractiveGift() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="min-h-[60vh] flex flex-col items-center justify-center py-20 relative overflow-hidden">
      <div className="text-center mb-16 z-10">
        <h2 className="text-4xl md:text-5xl font-display mb-4">A Gift for You</h2>
        <p className="text-white/60">Tap to open your fortune.</p>
      </div>

      <div className="relative cursor-pointer group perspective-1000" onClick={() => setIsOpen(true)}>
        <motion.div
          animate={isOpen ? { rotateX: 180, opacity: 0 } : { rotateX: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative z-20"
        >
          {/* Closed Envelope Representation */}
          <div className="w-64 h-80 bg-gradient-to-br from-primary to-red-900 rounded-xl shadow-[0_0_50px_rgba(139,0,0,0.5)] flex items-center justify-center border border-white/10 group-hover:scale-105 transition-transform duration-500">
            <div className="w-20 h-20 rounded-full border-2 border-gold flex items-center justify-center">
              <span className="font-display text-4xl text-gold">26</span>
            </div>
          </div>
        </motion.div>

        {/* Gift Content (Behind/Inside) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 0 }}
          animate={isOpen ? { opacity: 1, scale: 1, y: -20 } : { opacity: 0, scale: 0.5, y: 0 }}
          transition={{ delay: 0.5, type: "spring" }}
          className="absolute top-0 left-0 w-64 h-80 bg-white/5 backdrop-blur-xl border border-gold/30 rounded-xl flex flex-col items-center justify-center p-6 text-center shadow-[0_0_100px_rgba(212,175,55,0.3)]"
        >
          <Gift className="w-12 h-12 text-gold mb-4" />
          <h3 className="text-xl font-display text-gold mb-2">Good Fortune</h3>
          <p className="text-sm text-white/80">Great opportunities await you in the coming year. Be bold.</p>
        </motion.div>
      </div>

      {/* Particles Effect when opened (Simple CSS for now) */}
      {isOpen && (
        <div className="absolute inset-0 pointer-events-none">
           {/* We would add a particle explosion here */}
        </div>
      )}
    </section>
  );
}
