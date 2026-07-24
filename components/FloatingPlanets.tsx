import { useMemo } from 'react';

const PLANETS = [
  { size: 80, top: '12%', left: '8%', color: 'radial-gradient(circle at 30% 30%, #ffd9e8, #ff8fb8, #e23d72)', delay: '0s' },
  { size: 50, top: '70%', left: '85%', color: 'radial-gradient(circle at 30% 30%, #ffe9e6, #ff8a7f, #bd382e)', delay: '2s' },
  { size: 120, top: '45%', left: '92%', color: 'radial-gradient(circle at 30% 30%, #f9e6d8, #e7a87e, #c9703a)', delay: '1s' },
  { size: 35, top: '85%', left: '15%', color: 'radial-gradient(circle at 30% 30%, #ffd9e8, #ff6a9e, #c4245a)', delay: '3s' },
  { size: 60, top: '25%', left: '75%', color: 'radial-gradient(circle at 30% 30%, #ffb8d4, #ff4d86, #a01d4b)', delay: '1.5s' },
];

export default function FloatingPlanets() {
  const planets = useMemo(() => PLANETS, []);
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {planets.map((p, i) => (
        <div
          key={i}
          className="floating-planet animate-floatSlow"
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            top: p.top,
            left: p.left,
            background: p.color,
            boxShadow: `0 0 40px rgba(255, 125, 169, 0.3), inset -8px -12px 24px rgba(0,0,0,0.3)`,
            animationDelay: p.delay,
          }}
        />
      ))}
    </div>
  );
}
