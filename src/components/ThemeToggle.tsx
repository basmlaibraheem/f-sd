import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="fixed top-6 right-6 z-[9000] w-12 h-12 rounded-full glass flex items-center justify-center hover:scale-110 transition-transform duration-300"
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5 text-roseGold-300" />
      ) : (
        <Moon className="w-5 h-5 text-babyPink-600" />
      )}
    </button>
  );
}
