import { SectionHeader, SectionWrapper } from '../Section';
import { useReveal } from '@/hooks/useReveal';
import { useCounter } from '@/hooks/useCounter';
import {
  Palette,
  UtensilsCrossed,
  Trophy,
  Gamepad2,
  Music,
} from 'lucide-react';

const FAVORITES = [
  {
    icon: Palette,
    label: 'Favorite Color',
    value: 'Black 🖤',
    accent: 'from-gray-700 to-black',
    detail:
      'Black is his favorite color because it reflects elegance, confidence, and simplicity.',
  },
  {
    icon: UtensilsCrossed,
    label: 'Favorite Food',
    value: 'Macaroni Béchamel 🍝',
    accent: 'from-amber-400 to-orange-500',
    detail:
      'A delicious homemade Macaroni Béchamel is his favorite comfort meal.',
  },
  {
    icon: Trophy,
    label: 'Favorite Hobby',
    value: 'Football ⚽',
    accent: 'from-green-500 to-emerald-600',
    detail:
      'Playing football is one of his biggest passions and brings him joy every time he steps onto the field.',
  },
  {
    icon: Gamepad2,
    label: 'Favorite Activity',
    value: 'Gaming 🎮',
    accent: 'from-indigo-500 to-purple-600',
    detail:
      'He enjoys spending his free time playing games and exploring new adventures.',
  },
  {
    icon: Music,
    label: 'Favorite Songs',
    value: 'Favorite Playlist 🎵',
    accent: 'from-pink-500 to-rose-500',
    detail:
      'Music is always with him, making every moment more beautiful and full of memories.',
  },
];

const STATS = [
  { value: 7, suffix: '', label: 'Dreams' },
  { value: 100, suffix: '%', label: 'Loyalty' },
  { value: 365, suffix: '', label: 'Happy Days' },
  { value: 99, suffix: '%', label: 'Smile' },
];

function StatCard({
  stat,
  start,
}: {
  stat: typeof STATS[0];
  start: boolean;
}) {
  const count = useCounter(stat.value, 2000, start);

  return (
    <div className="glass-card rounded-2xl p-6 text-center">
      <p className="font-display text-4xl md:text-5xl font-bold gradient-text counter-glow">
        {count}
        {stat.suffix}
      </p>

      <p className="text-xs uppercase tracking-wider text-babyPink-700/70 dark:text-babyPink-200/70 mt-2">
        {stat.label}
      </p>
    </div>
  );
}

export default function FavoriteThings() {
  const { ref, visible } = useReveal();
  const { ref: statRef, visible: statVisible } = useReveal();

  return (
    <SectionWrapper
      id="favorites"
      className="bg-gradient-to-b from-transparent via-roseGold-50/30 to-transparent dark:via-roseGold-900/10"
    >
      <SectionHeader
        icon="⭐"
        planetName="Planet 4"
        title="Favorite Things"
        subtitle="The little things that make Yusuf, Yusuf."
      />

      <div
        ref={statRef}
        className={`reveal ${
          statVisible ? 'visible' : ''
        } grid grid-cols-2 md:grid-cols-4 gap-4 mb-12`}
      >
        {STATS.map((s, i) => (
          <StatCard key={i} stat={s} start={statVisible} />
        ))}
      </div>

      <div
        ref={ref}
        className={`reveal ${
          visible ? 'visible' : ''
        } grid sm:grid-cols-2 lg:grid-cols-3 gap-6`}
      >
        {FAVORITES.map((f, i) => {
          const Icon = f.icon;

          return (
            <div
              key={i}
              className="glass-card rounded-3xl p-6 flex items-start gap-5"
            >
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${f.accent} flex items-center justify-center flex-shrink-0 shadow-lg`}
              >
                <Icon className="w-7 h-7 text-white" />
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-roseGold-500 dark:text-roseGold-300 mb-1">
                  {f.label}
                </p>

                <h4 className="font-display text-xl font-bold text-babyPink-700 dark:text-babyPink-200 mb-1">
                  {f.value}
                </h4>

                <p className="text-sm text-babyPink-800/60 dark:text-babyPink-100/60 leading-relaxed">
                  {f.detail}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}