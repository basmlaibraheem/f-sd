import { Rocket, Heart } from 'lucide-react';
import StarField from './StarField';

interface HeroProps {
  onExplore: () => void;
  onMemories: () => void;
}

export default function Hero({ onExplore, onMemories }: HeroProps) {
  return (
    <section className="relative min-h-screen galaxy-bg flex items-center justify-center overflow-hidden">
      <StarField count={200} />

      {/* Orbit rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full border border-babyPink-400/10 animate-spinSlow" />
        <div className="absolute w-[800px] h-[800px] rounded-full border border-roseGold-300/10 animate-spinSlow" style={{ animationDuration: '60s', animationDirection: 'reverse' }} />
        <div className="absolute w-[1000px] h-[1000px] rounded-full border border-warmPink-400/10 animate-spinSlow" style={{ animationDuration: '80s' }} />
      </div>

      {/* Central planet */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative">
          <div className="planet w-72 h-72 md:w-96 md:h-96 animate-pulseGlow" />
          <div className="planet-ring w-[340px] h-[340px] md:w-[460px] md:h-[460px]" />
          {/* Orbiting moon */}
          <div className="absolute inset-0 animate-spinSlow" style={{ animationDuration: '20s' }}>
            <div className="absolute top-1/2 left-1/2 w-6 h-6 -translate-x-1/2 -translate-y-1/2">
              <div
                className="w-full h-full rounded-full"
                style={{ background: 'radial-gradient(circle at 30% 30%, #ffe9e6, #dc8a55)', transform: 'translateX(180px)', boxShadow: '0 0 20px rgba(220,138,85,0.6)' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Text overlay */}
      <div className="relative z-10 text-center px-6 animate-fadeIn">
        <p className="text-babyPink-300 font-light tracking-[0.3em] uppercase text-xs md:text-sm mb-4">
          Welcome to
        </p>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold gradient-text mb-4 leading-tight">
          Yusuf Universe
        </h1>
        <p className="font-display italic text-lg md:text-2xl text-babyPink-200 mb-12">
          Every star has a story.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={onExplore}
            className="group px-8 py-3.5 rounded-full bg-gradient-to-r from-babyPink-500 to-warmPink-500 text-white font-medium text-sm tracking-wide shadow-lg shadow-babyPink-500/30 hover:shadow-babyPink-500/50 hover:scale-105 transition-all duration-300 flex items-center gap-2"
          >
            <Rocket className="w-4 h-4 group-hover:rotate-45 transition-transform" />
            Explore
          </button>
          <button
            onClick={onMemories}
            className="px-8 py-3.5 rounded-full glass text-babyPink-100 dark:text-babyPink-100 font-medium text-sm tracking-wide hover:scale-105 transition-all duration-300 flex items-center gap-2"
          >
            <Heart className="w-4 h-4 text-warmPink-400" />
            Our Memories
          </button>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-babyPink-300/40 flex items-start justify-center p-1.5">
          <div className="w-1 h-2 rounded-full bg-babyPink-300 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
