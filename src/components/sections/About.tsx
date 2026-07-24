import { SectionHeader, SectionWrapper } from '../Section';
import { useReveal } from '@/hooks/useReveal';
import { Sparkles, Star, Heart, Moon } from 'lucide-react';

const TRAITS = [
  {
    icon: Heart,
    label: 'Kind Heart',
    desc: 'A kind-hearted person who always wishes the best for everyone.',
  },
  {
    icon: Sparkles,
    label: 'Passionate',
    desc: 'Driven by passion and always striving to achieve his dreams.',
  },
  {
    icon: Star,
    label: 'Honest',
    desc: 'Honesty is one of his strongest qualities, making him trustworthy and genuine.',
  },
  {
    icon: Moon,
    label: 'Social',
    desc: 'Friendly, approachable, and enjoys making meaningful connections with people.',
  },
];

export default function About() {
  const { ref, visible } = useReveal();

  return (
    <SectionWrapper
      id="about"
      className="bg-gradient-to-b from-transparent via-babyPink-50/30 to-transparent dark:via-warmPink-900/10"
    >
      <SectionHeader
        icon="🪐"
        planetName="Planet 1"
        title="About Yusuf"
        subtitle="A soul wandering through galaxies of wonder"
      />

      <div
        ref={ref}
        className={`reveal ${
          visible ? 'visible' : ''
        } grid md:grid-cols-2 gap-8 items-center`}
      >
        {/* About Card */}
        <div className="glass-card rounded-3xl p-8 md:p-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="planet w-16 h-16 flex-shrink-0" />

            <div>
              <h3 className="font-display text-2xl font-bold text-babyPink-600 dark:text-babyPink-200">
                Yusuf
              </h3>

              <p className="text-sm text-roseGold-500 dark:text-roseGold-300">
                Explorer of the Universe
              </p>
            </div>
          </div>

          <p className="text-babyPink-800/80 dark:text-babyPink-100/80 leading-relaxed text-sm md:text-base">
            Yusuf is someone who inspires others with his kindness, respect,
            and genuine personality. He has a deep passion for life and is
            always motivated to grow and achieve more. While he can be
            quick-tempered at times, his heart is pure, and his honesty always
            shines through. Friendly, caring, and naturally social, he enjoys
            connecting with people and spreading positive energy. Above all, he
            never envies others' success and sincerely wishes the best for
            everyone. 💕
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="glass-card rounded-2xl p-4 text-center">
              <h3 className="text-2xl font-bold text-babyPink-500">∞</h3>
              <p className="text-sm text-babyPink-700 dark:text-babyPink-200">
                Dreams
              </p>
            </div>

            <div className="glass-card rounded-2xl p-4 text-center">
              <h3 className="text-2xl font-bold text-babyPink-500">100%</h3>
              <p className="text-sm text-babyPink-700 dark:text-babyPink-200">
                Kindness
              </p>
            </div>

            <div className="glass-card rounded-2xl p-4 text-center">
              <h3 className="text-2xl font-bold text-babyPink-500">★★★★★</h3>
              <p className="text-sm text-babyPink-700 dark:text-babyPink-200">
                Loyalty
              </p>
            </div>

            <div className="glass-card rounded-2xl p-4 text-center">
              <h3 className="text-2xl font-bold text-babyPink-500">❤</h3>
              <p className="text-sm text-babyPink-700 dark:text-babyPink-200">
                Pure Heart
              </p>
            </div>
          </div>
        </div>

        {/* Traits */}
        <div className="grid grid-cols-2 gap-4">
          {TRAITS.map((t, i) => {
            const Icon = t.icon;

            return (
              <div
                key={i}
                className="glass-card rounded-2xl p-5 hover:scale-105 transition-all duration-300"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-babyPink-400 to-warmPink-500 flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5 text-white" />
                </div>

                <h4 className="font-display font-semibold text-babyPink-700 dark:text-babyPink-200 mb-2">
                  {t.label}
                </h4>

                <p className="text-xs text-babyPink-800/60 dark:text-babyPink-100/60 leading-relaxed">
                  {t.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}