import { useEffect, useRef } from 'react';

export default function StarCursor() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (ref.current) {
        ref.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
      }
    };
    const down = () => {
      if (ref.current) ref.current.style.opacity = '0.5';
    };
    const up = () => {
      if (ref.current) ref.current.style.opacity = '1';
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mousedown', down);
    window.addEventListener('mouseup', up);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mousedown', down);
      window.removeEventListener('mouseup', up);
    };
  }, []);

  return (
    <div ref={ref} className="star-cursor">
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 0 L13.5 8.5 L22 10 L13.5 11.5 L12 24 L10.5 11.5 L2 10 L10.5 8.5 Z"
          fill="url(#starGrad)"
        />
        <defs>
          <linearGradient id="starGrad" x1="0" y1="0" x2="24" y2="24">
            <stop offset="0%" stopColor="#ff7da9" />
            <stop offset="50%" stopColor="#ff4d86" />
            <stop offset="100%" stopColor="#dc8a55" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
