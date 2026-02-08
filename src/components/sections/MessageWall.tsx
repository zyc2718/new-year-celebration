"use client";

import { motion } from "framer-motion";

const messages = [
  "Happy New Year! - Alex",
  "Best wishes from Tokyo! - Sato",
  "2026 let's go! - Sarah",
  "Peace and Love. - J",
  "Health and Happiness. - Mike",
  "Dream Big. - Anna",
];

export default function MessageWall() {
  return (
    <section className="py-20 overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-display text-white/80">Global Wishes</h2>
      </div>
      
      <div className="flex relative">
        <motion.div 
          className="flex gap-8 whitespace-nowrap"
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {[...messages, ...messages, ...messages].map((msg, i) => (
            <div key={i} className="glass px-6 py-3 rounded-full text-white/70">
              {msg}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
