import { SectionHeader, SectionWrapper } from '../Section';
import { useReveal } from '@/hooks/useReveal';
import { Target, Compass, Sparkles, Rocket } from 'lucide-react';

const DREAMS = [
  {
    icon: Sparkles,
    title: 'إسعاد أهله',
    desc: 'أكبر حلم عنده هو أن يكرمه الله، ويفرح أهله، ويشوف السعادة في عيونهم بسبب نجاحه، ويكون دائمًا سبب فخر لهم.',
    progress: 40,
  },
  {
    icon: Compass,
    title: 'نكمل حياتنا معًا',
    desc: 'من أحلامه أن ندخل نفس الجامعة، ونكمل رحلتنا معًا، وندعم بعض في كل خطوة، ويجمعنا الله دائمًا على خير.',
    progress: 30,
  },
  {
    icon: Target,
    title: 'تحقيق أحلامه',
    desc: 'يتمنى أن يكون له مستقبل ناجح، ويحصل على وظيفة محترمة يحبها، ويحقق كل أهدافه ويصل لكل ما يتمناه بإذن الله.',
    progress: 60,
  },
  {
    icon: Rocket,
    title: 'بيت يجمعنا بالحلال',
    desc: 'أجمل حلم عنده أن يجمعنا الله بالحلال، ونبني بيتًا مليئًا بالمودة والرحمة، ويرزقنا الله أطفالًا صالحين يملؤون حياتنا سعادة.',
    progress: 20,
  },
];

export default function Dreams() {
  const { ref, visible } = useReveal();

  return (
    <SectionWrapper
      id="dreams"
      className="bg-gradient-to-b from-transparent via-babyPink-50/30 to-transparent dark:via-warmPink-900/10"
    >
      <SectionHeader
        icon="🌙"
        planetName="Planet 5"
        title="الأحلام"
        subtitle="الأحلام التي يسعى يوسف لتحقيقها"
      />

      <div
        ref={ref}
        className={`reveal ${
          visible ? 'visible' : ''
        } grid md:grid-cols-2 gap-6`}
      >
        {DREAMS.map((d, i) => {
          const Icon = d.icon;

          return (
            <div key={i} className="glass-card rounded-3xl p-7">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-warmPink-400 to-babyPink-600 flex items-center justify-center shadow-lg">
                  <Icon className="w-6 h-6 text-white" />
                </div>

                <h4 className="font-display text-xl font-bold text-babyPink-700 dark:text-babyPink-200">
                  {d.title}
                </h4>
              </div>

              <p className="text-sm text-babyPink-800/60 dark:text-babyPink-100/60 leading-relaxed mb-5">
                {d.desc}
              </p>

              <div className="flex items-center gap-3">
                <div className="flex-1 h-2 rounded-full bg-babyPink-100 dark:bg-warmPink-900/40 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-babyPink-400 via-roseGold-400 to-warmPink-500 transition-all duration-1000"
                    style={{
                      width: visible ? `${d.progress}%` : '0%',
                    }}
                  />
                </div>

                <span className="text-xs font-medium text-roseGold-500 dark:text-roseGold-300 w-9 text-right">
                  {d.progress}%
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}