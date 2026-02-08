"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { Mail } from "lucide-react";

export default function NewYearLetter() {
  return (
    <section className="min-h-screen py-32 px-4 flex items-center justify-center relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="w-full max-w-3xl"
      >
        <GlassCard className="p-8 md:p-16 relative overflow-hidden border-gold/10">
          {/* Envelope Seal Icon */}
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Mail size={120} className="rotate-12" />
          </div>

          {/* Letter Content */}
          <div className="relative z-10 space-y-8 text-white/90">
            <div className="space-y-2">
              <h2 className="text-3xl font-display text-gold">新年快乐，</h2>
              <h2 className="text-4xl font-display text-gold">怿雅同学！</h2>
            </div>

            <div className="space-y-6 text-lg leading-relaxed font-body">
              <p>
                希望新的一年里，你能继续在自己喜欢的英语专业里深耕前行，在农大的校园里收获更多知识与友谊。
              </p>
              
              <p>
                新的一年，愿你在追逐梦想的路上，如松柏般坚韧，如梅花般傲然绽放。要开心，要恣意潇洒，要平淡，要有光，也希望2025年，我们能继续携手前行。
              </p>

              <p className="pt-4">
                新年快乐，愿岁岁常欢愉，年年皆胜意。我在河南，愿此刻与你共享新春喜乐 [烟花][烟花]
              </p>
            </div>

            {/* Signature */}
            <div className="pt-12 flex flex-col items-end space-y-2">
              <p className="text-white/60">你的好朋友</p>
              <p className="text-3xl font-display text-gold">左易辰</p>
              <p className="text-sm text-white/40 font-mono mt-4">2025年 新春</p>
            </div>
          </div>

          {/* Decorative Corner */}
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-gold/5 to-transparent rounded-tr-full" />
        </GlassCard>
      </motion.div>
    </section>
  );
}
