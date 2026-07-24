import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let p = 0;
    const interval = setInterval(() => {
      p += Math.random() * 15 + 5;
      if (p >= 100) {
        p = 100;
        clearInterval(interval);
        setTimeout(() => setDone(true), 600);
      }
      setProgress(p);
    }, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[10000] flex flex-col items-center justify-center galaxy-bg transition-opacity duration-700 ${
        done ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Stars */}
      {Array.from({ length: 60 }).map((_, i) => (
        <span
          key={i}
          className="star"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 3 + 1}px`,
            height: `${Math.random() * 3 + 1}px`,
            animationDelay: `${Math.random() * 3}s`,
          }}
        />
      ))}

      {/* Logo */}
      <div className="relative mb-10">
        <div className="planet w-24 h-24 animate-pulseGlow" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl">✨</span>
        </div>
      </div>

      <h1 className="font-display text-3xl md:text-4xl gradient-text font-bold mb-2 tracking-wide">
        Yusuf Universe
      </h1>
      <p className="text-babyPink-200 text-sm mb-8 font-light italic">Every star has a story</p>

      {/* Progress bar */}
      <div className="w-64 h-1.5 bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-babyPink-400 via-roseGold-400 to-warmPink-500 rounded-full transition-all duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="text-babyPink-300 text-xs mt-3 font-light">{Math.round(progress)}%</p>
    </div>
  );
}
