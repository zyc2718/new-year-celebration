"use client";

import { Heart, Copy } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { GlassCard } from "@/components/ui/GlassCard";

export default function SharePortal() {
  const copyLink = () => {
    if (typeof window !== "undefined" && navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    } else {
      // Fallback for environments where clipboard API is not available
      const textArea = document.createElement("textarea");
      textArea.value = window.location.href;
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand('copy');
        alert("Link copied to clipboard!");
      } catch (err) {
        console.error('Fallback: Oops, unable to copy', err);
      }
      document.body.removeChild(textArea);
    }
  };

  return (
    <footer className="py-20 px-4 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        <GlassCard className="flex flex-col md:flex-row items-center justify-between p-8 md:p-12 gap-8">
          <div className="text-left">
            <h3 className="text-2xl font-display text-white mb-2">Share the Joy</h3>
            <p className="text-white/50 text-sm">Send this experience to someone special.</p>
          </div>

          <div className="flex gap-4">
            <MagneticButton onClick={copyLink}>
              <span className="flex items-center gap-2">
                <Copy size={16} /> Copy Link
              </span>
            </MagneticButton>
            <button className="p-4 rounded-full glass hover:bg-white/10 transition-colors text-secondary">
              <Heart fill="currentColor" />
            </button>
          </div>
        </GlassCard>

        <div className="mt-12 text-white/20 text-xs font-mono">
          <p>© 2026 Interactive Experience. Design by Gemini.</p>
        </div>
      </div>
    </footer>
  );
}
