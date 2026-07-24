import { ReactNode } from 'react';
import { useReveal } from '@/hooks/useReveal';

interface SectionHeaderProps {
  icon: string;
  planetName: string;
  title: string;
  subtitle?: string;
}

export function SectionHeader({ icon, planetName, title, subtitle }: SectionHeaderProps) {
  const { ref, visible } = useReveal();
  return (
    <div ref={ref} className={`reveal ${visible ? 'visible' : ''} text-center mb-14`}>
      <div className="inline-flex items-center gap-3 mb-3">
        <span className="text-3xl">{icon}</span>
        <span className="text-xs uppercase tracking-[0.3em] text-roseGold-400 font-medium">{planetName}</span>
        <span className="text-3xl">{icon}</span>
      </div>
      <h2 className="font-display text-4xl md:text-5xl font-bold gradient-text mb-3">{title}</h2>
      {subtitle && <p className="font-display italic text-babyPink-300 dark:text-babyPink-200 text-base md:text-lg max-w-xl mx-auto">{subtitle}</p>}
    </div>
  );
}

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export function SectionWrapper({ id, children, className = '' }: SectionWrapperProps) {
  return (
    <section id={id} className={`relative py-24 px-6 ${className}`}>
      <div className="max-w-6xl mx-auto relative z-10">{children}</div>
    </section>
  );
}
