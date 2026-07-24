import { SectionHeader, SectionWrapper } from '../Section';
import { useReveal } from '@/hooks/useReveal';
import { useState } from 'react';

const PHOTOS = [
  {
    url: '/image/y.jpg',
    title: 'Stargazing Nights',
    span: 'md:col-span-2 md:row-span-2',
  },
  {
    url: '/image/y2.jpg',
    title: 'Golden Hour',
    span: '',
  },
  {
    url: '/image/y3.jpg',
    title: 'Mountain Dreams',
    span: '',
  },
  {
    url: '/image/y4.jpg',
    title: 'Ocean Whispers',
    span: 'md:col-span-2',
  },
  {
    url: '/image/y5.jpg',
    title: 'City Lights',
    span: '',
  },
  {
    url: '/image/y6.jpg',
    title: 'River of Stars',
    span: '',
  },
];

export default function Gallery() {
  const { ref, visible } = useReveal();
  const [active, setActive] = useState<number | null>(null);

  return (
    <SectionWrapper
      id="gallery"
      className="bg-gradient-to-b from-transparent via-roseGold-50/30 to-transparent dark:via-roseGold-900/10"
    >
      <SectionHeader
        icon="📸"
        planetName="Planet 2"
        title="Gallery"
        subtitle="Moments captured in the orbit of time"
      />

      <div
        ref={ref}
        className={`reveal ${
          visible ? 'visible' : ''
        } grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[180px] md:auto-rows-[220px]`}
      >
        {PHOTOS.map((p, i) => (
          <div
            key={i}
            onMouseEnter={() => setActive(i)}
            onMouseLeave={() => setActive(null)}
            className={`relative rounded-2xl overflow-hidden group cursor-pointer ${p.span}`}
          >
            <img
              src={p.url}
              alt={p.title}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-warmPink-900/80 via-babyPink-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
              <div>
                <p className="text-white font-display font-semibold text-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  {p.title}
                </p>
                <div className="h-0.5 w-12 bg-roseGold-400 mt-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            </div>

            {/* Corner sparkle */}
            <div
              className={`absolute top-3 right-3 text-roseGold-300 transition-all duration-500 ${
                active === i
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-50'
              }`}
            >
              ✨
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}