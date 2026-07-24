import { SectionHeader, SectionWrapper } from '../Section';
import { useReveal } from '@/hooks/useReveal';
import { useState } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2 } from 'lucide-react';

const TRACKS = [
  {
    title: 'MUKANJYO',
    artist: 'Survive Said The Prophet',
    duration: '3:36',
    color: 'from-babyPink-400 to-warmPink-500',
  },
  {
    title: 'Dark Crow',
    artist: 'MAN WITH A MISSION',
    duration: '3:48',
    color: 'from-roseGold-400 to-babyPink-500',
  },
  {
    title: 'Him & I',
    artist: 'G-Eazy & Halsey',
    duration: '4:29',
    color: 'from-warmPink-400 to-roseGold-500',
  },
  {
    title: 'Surah Yusuf',
    artist: 'Quran Recitation',
    duration: '—',
    color: 'from-emerald-400 to-teal-500',
  },
  {
    title: 'Surah Al-Baqarah',
    artist: 'Quran Recitation',
    duration: '—',
    color: 'from-green-500 to-emerald-600',
  },
];

export default function Music() {
  const { ref, visible } = useReveal();
  const [current, setCurrent] = useState(0);
  const [playing, setPlaying] = useState(false);

  const track = TRACKS[current];

  return (
    <SectionWrapper
      id="music"
      className="bg-gradient-to-b from-transparent via-roseGold-50/30 to-transparent dark:via-roseGold-900/10"
    >
      <SectionHeader
        icon="🎵"
        planetName="Planet 6"
        title="Yusuf's Favorites"
        subtitle="A collection of Yusuf's favorite tracks and recitations"
      />

      <div
        ref={ref}
        className={`reveal ${
          visible ? 'visible' : ''
        } grid md:grid-cols-2 gap-8 max-w-4xl mx-auto`}
      >
        {/* Player */}
        <div className="glass-card rounded-3xl p-8">
          <div
            className={`relative w-48 h-48 mx-auto rounded-full bg-gradient-to-br ${
              track.color
            } mb-6 flex items-center justify-center ${
              playing ? 'animate-spinSlow' : ''
            }`}
            style={playing ? { animationDuration: '8s' } : {}}
          >
            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-white/60" />
            </div>
          </div>

          <div className="flex items-end justify-center gap-1 h-8 mb-4">
            {playing &&
              Array.from({ length: 20 }).map((_, i) => (
                <span
                  key={i}
                  className="music-bar"
                  style={{
                    animationDelay: `${i * 0.08}s`,
                    animationDuration: `${0.6 + Math.random() * 0.6}s`,
                  }}
                />
              ))}

            {!playing && (
              <div className="h-2 w-full bg-babyPink-200/30 rounded-full" />
            )}
          </div>

          <h4 className="font-display text-xl font-bold text-center text-babyPink-700 dark:text-babyPink-200">
            {track.title}
          </h4>

          <p className="text-center text-sm text-roseGold-500 dark:text-roseGold-300 mb-6">
            {track.artist}
          </p>

          <div className="flex items-center justify-center gap-6">
            <button
              onClick={() =>
                setCurrent((c) => (c - 1 + TRACKS.length) % TRACKS.length)
              }
              className="text-babyPink-500 hover:text-babyPink-400 transition"
            >
              <SkipBack className="w-6 h-6" />
            </button>

            <button
              onClick={() => setPlaying(!playing)}
              className="w-14 h-14 rounded-full bg-gradient-to-br from-babyPink-500 to-warmPink-500 flex items-center justify-center text-white shadow-lg shadow-babyPink-500/30 hover:scale-110 transition-transform"
            >
              {playing ? (
                <Pause className="w-6 h-6" />
              ) : (
                <Play className="w-6 h-6 ml-0.5" />
              )}
            </button>

            <button
              onClick={() =>
                setCurrent((c) => (c + 1) % TRACKS.length)
              }
              className="text-babyPink-500 hover:text-babyPink-400 transition"
            >
              <SkipForward className="w-6 h-6" />
            </button>
          </div>

          <div className="flex items-center gap-2 mt-6">
            <Volume2 className="w-4 h-4 text-babyPink-400" />
            <div className="flex-1 h-1.5 rounded-full bg-babyPink-100 dark:bg-warmPink-900/40">
              <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-babyPink-400 to-roseGold-400" />
            </div>
          </div>
        </div>

        {/* Playlist */}
        <div className="glass-card rounded-3xl p-6">
          <h4 className="font-display text-lg font-semibold text-babyPink-700 dark:text-babyPink-200 mb-4 px-2">
            Yusuf's Playlist
          </h4>

          <div className="space-y-2">
            {TRACKS.map((t, i) => (
              <button
                key={i}
                onClick={() => {
                  setCurrent(i);
                  setPlaying(true);
                }}
                className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-300 ${
                  i === current
                    ? 'bg-gradient-to-r from-babyPink-100 to-warmPink-100 dark:from-warmPink-900/40 dark:to-babyPink-900/30'
                    : 'hover:bg-babyPink-50 dark:hover:bg-warmPink-900/20'
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-lg bg-gradient-to-br ${t.color} flex items-center justify-center text-white text-sm font-bold flex-shrink-0`}
                >
                  {i + 1}
                </div>

                <div className="flex-1 text-left">
                  <p
                    className={`text-sm font-medium ${
                      i === current
                        ? 'text-babyPink-700 dark:text-babyPink-100'
                        : 'text-babyPink-800/70 dark:text-babyPink-200/70'
                    }`}
                  >
                    {t.title}
                  </p>

                  <p className="text-xs text-roseGold-500 dark:text-roseGold-300">
                    {t.artist}
                  </p>
                </div>

                <span className="text-xs text-babyPink-500/60">
                  {t.duration}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}