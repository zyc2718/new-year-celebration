"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { MagneticButton } from "@/components/ui/MagneticButton";

const relations = ["朋友", "伴侣", "家人", "同事"];

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
      "朋友": [
        "愿我们在2026年的数字与物理世界里都能精彩纷呈。",
        "又是一年，让我们在虚拟与现实中共同创造更多回忆。",
        "愿我们的笑声在2026年回荡，创造比星辰更璀璨的回忆。",
      ],
      "伴侣": [
        "在瞬息万变的2026年，我们的爱是唯一的永恒。",
        "与你一同迈向未来，是我唯一的新年心愿。",
        "在每一个时空，每一个宇宙，我都选择与你共同步入2026。",
      ],
      "家人": [
        "根深如时光，爱亮如2026年的黎明。",
        "只要我们在一起，哪里都是家。",
        "致那些支撑我的根和让我飞翔的翅膀——新年快乐。",
      ],
      "同事": [
        "为我们在2026年共同的高效目标而同步。",
        "愿你的创造力如新年的潜力般无限。",
        "又是一年共同的目标、茶歇时间，以及战胜每一个挑战。",
      ]
    };

    const options = mockWishes[selected] || ["2026新年快乐！"];
    const randomWish = options[Math.floor(Math.random() * options.length)];
    
    setGeneratedWish(randomWish);
    setIsGenerating(false);
  };

  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center py-20 px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-display mb-4">AI 祝福生成器</h2>
        <p className="text-white/60">选择一个对象，生成一份独特的新年祝愿。</p>
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
              {isGenerating ? "正在生成..." : "生成祝福"} 
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
