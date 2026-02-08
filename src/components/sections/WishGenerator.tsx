"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { MagneticButton } from "@/components/ui/MagneticButton";

const relations = ["Friend", "Partner", "Family", "Colleague"];

const wishes = {
  Friend: "May our laughter echo through 2026, creating memories that outshine the stars.",
  Partner: "In every timeline, in every universe, I choose you to walk into 2026 with.",
  Family: "To the roots that ground me and the wings that let me fly—Happy New Year.",
  Colleague: "Here's to another year of shared goals, coffee breaks, and conquering challenges."
};

export default function WishGenerator() {
  const [selected, setSelected] = useState<string | null>(null);
  const [generatedWish, setGeneratedWish] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async () => {
    if (!selected) return;
    setIsGenerating(true);
    setGeneratedWish(null);
    
    // Simulate network latency for a better UX
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const mockWishes: Record<string, string[]> = {
      Friend: [
        "May our digital and physical worlds align for a spectacular 2026.",
        "To another year of breaking the simulation and making real memories.",
        "May our laughter echo through 2026, creating memories that outshine the stars.",
      ],
      Partner: [
        "Our love is the only constant in an ever-changing 2026.",
        "Walking into the future with you is my only resolution.",
        "In every timeline, in every universe, I choose you to walk into 2026 with.",
      ],
      Family: [
        "Roots deep as time, love bright as the 2026 dawn.",
        "Home is wherever we are together in this new year.",
        "To the roots that ground me and the wings that let me fly—Happy New Year.",
      ],
      Colleague: [
        "Synchronizing our goals for a high-performance 2026.",
        "May your productivity be as infinite as the new year's potential.",
        "Here's to another year of shared goals, coffee breaks, and conquering challenges.",
      ]
    };

    const options = mockWishes[selected] || ["Happy New Year 2026!"];
    const randomWish = options[Math.floor(Math.random() * options.length)];
    
    setGeneratedWish(randomWish);
    setIsGenerating(false);
  };

  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center py-20 px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-display mb-4">AI Wish Crafter</h2>
        <p className="text-white/60">Select a recipient to generate a unique greeting.</p>
      </div>

      <GlassCard className="w-full max-w-2xl min-h-[400px] flex flex-col items-center justify-center p-8 md:p-12 relative overflow-hidden">
        
        {/* Selection Area */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 z-10">
          {relations.map((rel) => (
            <button
              key={rel}
              onClick={() => { setSelected(rel); setGeneratedWish(null); }}
              className={`px-6 py-2 rounded-full border transition-all duration-300 ${
                selected === rel 
                  ? "bg-white text-black border-white scale-105" 
                  : "bg-transparent text-white/70 border-white/20 hover:border-white/50"
              }`}
            >
              {rel}
            </button>
          ))}
        </div>

        {/* Action Button */}
        <div className="mb-12 z-10">
          <MagneticButton onClick={handleGenerate} className={!selected ? "opacity-50 cursor-not-allowed" : ""}>
            <span className="flex items-center gap-2">
              {isGenerating ? "Crafting..." : "Generate Wish"} 
              <Sparkles size={16} />
            </span>
          </MagneticButton>
        </div>

        {/* Output Area */}
        <div className="w-full text-center relative z-10 min-h-[100px]">
          <AnimatePresence mode="wait">
            {generatedWish && (
              <motion.div
                key="result"
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, filter: "blur(10px)" }}
                className="font-script text-3xl md:text-4xl text-gold leading-relaxed"
              >
                &quot;{generatedWish}&quot;
              </motion.div>
            )}
            {isGenerating && (
               <motion.div
               key="loader"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               className="absolute inset-0 flex items-center justify-center"
             >
               <div className="w-8 h-8 border-2 border-gold border-t-transparent rounded-full animate-spin" />
             </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Decorative Background Glow inside card */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/20 blur-[100px] rounded-full pointer-events-none" />
        
      </GlassCard>
    </section>
  );
}
