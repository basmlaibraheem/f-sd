import StarField from './StarField';
import { Heart } from 'lucide-react';

// Star positions (in % of the footer text area) tracing the word "YUSUF"
const STAR_POSITIONS = [
  // Y
  [4, 10], [4, 30], [4, 50], [8, 30], [12, 10], [12, 30], [12, 50],
  // U
  [20, 10], [20, 30], [20, 50], [24, 60], [28, 60], [32, 10], [32, 30], [32, 50],
  // S
  [40, 10], [40, 20], [40, 30], [44, 10], [48, 30], [48, 40], [48, 50], [44, 50],
  // U
  [56, 10], [56, 30], [56, 50], [60, 60], [64, 60], [68, 10], [68, 30], [68, 50],
  // F
  [76, 10], [76, 30], [76, 50], [80, 10], [84, 10], [80, 30], [84, 30],
];

export default function Footer() {
  return (
    <footer className="relative galaxy-bg pt-20 pb-10 overflow-hidden">
      <StarField count={100} />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="font-display italic text-babyPink-200 mb-8">Stars that spell a name</p>

        {/* Star word */}
        <div className="relative w-full max-w-2xl mx-auto" style={{ height: '180px' }}>
          {STAR_POSITIONS.map(([x, y], i) => (
            <svg
              key={i}
              viewBox="0 0 24 24"
              className="footer-star absolute"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                width: '16px',
                height: '16px',
                animationDelay: `${(i % 10) * 0.2}s`,
              }}
            >
              <path d="M12 0 L13.5 8.5 L22 10 L13.5 11.5 L12 24 L10.5 11.5 L2 10 L10.5 8.5 Z" fill="currentColor" className="footer-star" />
            </svg>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-4">
          <div className="flex items-center gap-2 text-babyPink-200">
            <span className="text-sm">Made with</span>
            <Heart className="w-4 h-4 text-warmPink-400 fill-warmPink-400 animate-pulse" />
            <span className="text-sm">across the universe</span>
          </div>
          <p className="font-display text-2xl gradient-text font-bold">Yusuf Universe</p>
          <p className="text-xs text-babyPink-300/60 tracking-wider">Every star has a story to love pasmla💗 &middot; © {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
}
