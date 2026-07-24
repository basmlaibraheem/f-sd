import { useEffect, useState } from 'react';

const LINKS = [
  { id: 'about', label: 'About', icon: '🪐' },
  { id: 'gallery', label: 'Gallery', icon: '📸' },
  { id: 'letters', label: 'Letters', icon: '💌' },
  { id: 'favorites', label: 'Favorites', icon: '⭐' },
  { id: 'dreams', label: 'Dreams', icon: '🌙' },
  { id: 'music', label: 'Music', icon: '🎵' },
  { id: 'timeline', label: 'Timeline', icon: '📅' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[8000] transition-all duration-500 ${
        scrolled ? 'glass py-3 shadow-lg' : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-2">
          <div className="planet w-7 h-7" />
          <span className="font-display font-bold gradient-text text-lg">Yusuf Universe</span>
        </button>
        <div className="hidden md:flex items-center gap-1">
          {LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className="px-3 py-1.5 rounded-full text-sm text-babyPink-700/80 dark:text-babyPink-100/80 hover:bg-babyPink-100 dark:hover:bg-warmPink-900/30 hover:text-babyPink-600 dark:hover:text-babyPink-100 transition-all duration-300"
            >
              {l.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
