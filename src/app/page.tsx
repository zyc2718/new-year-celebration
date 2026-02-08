import ParticleBackground from "@/components/canvas/ParticleBackground";
import Hero from "@/components/sections/Hero";
import Timeline from "@/components/sections/Timeline";
import WishGenerator from "@/components/sections/WishGenerator";
import InteractiveGift from "@/components/sections/InteractiveGift";
import MessageWall from "@/components/sections/MessageWall";
import SharePortal from "@/components/sections/SharePortal";
import BackgroundMusic from "@/components/shared/BackgroundMusic";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen">
      <ParticleBackground />
      <BackgroundMusic />
      
      <div className="relative z-10">
        <Hero />
        <Timeline />
        <div className="bg-gradient-to-b from-transparent to-black/80">
          <WishGenerator />
          <InteractiveGift />
          <MessageWall />
          <SharePortal />
        </div>
      </div>
    </main>
  );
}