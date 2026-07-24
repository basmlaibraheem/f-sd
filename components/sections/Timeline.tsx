import { SectionHeader, SectionWrapper } from '../Section';
import { useReveal } from '@/hooks/useReveal';

const EVENTS = [
  {
    year: '2008',
    title: 'بداية الحكاية',
    desc: 'يوسف اتولدنا سوا وده احسن يوم ف حياتي',
    icon: '✨'
  },

  {
    year: '2015',
    title: 'الكوتي موتي الصغير',
    desc: 'حاسه انه كان ولد شقي بس كتكوت كده وكل النسوان ساعتها كانو بيبوسوه اععع غيرتتت',
    icon: '🥹'
  },

  {
    year: '2019',
    title: 'الكوتي موتي كبر شويه',
    desc: 'طبعا الكوتي موتي كبر شويهه واكيد كان مغلب مامته وما كانش بيروح حضانته وكان بيضرب اخواته الله اعلم برضوو',
    icon: '🚀'
  },

  {
    year: '2023',
    title: 'كبر وبقى حليوة',
    desc: 'طبعا الحب بتاعييي كبر وبقي حليوة اكثر والاكيد اكيدةان ما كانش في نيوان لسه بتبوسه وكان شاطور ودحيح كمان اعععع',
    icon: '🌟'
  },

  {
    year: '2026',
    title: 'أحلى سنة',
    desc: 'دي احلا سنههه حرفيا هي ومن اخر سنه2025 لان عيشت وعملت احلي ذكريات انا واغلي حد علي قلبي سوا عارفه بدايه حبنا كان بيولد بخناقات دايما بس يلا عدينا كل المراحل ده احنا ساعتها كنا عاوزين شويه تفاهم من بعض بحبك ي يوسف ف كل لحظه وكل ثانيه وكل وقت انا ان شاء الله ينور عيوني مش هكمل بقيه حياتي الا معاك انت',
    icon: '💖'
  },
];

export default function Timeline() {
  const { ref, visible } = useReveal();

  return (
    <SectionWrapper
      id="timeline"
      className="bg-gradient-to-b from-transparent via-babyPink-50/30 to-transparent dark:via-warmPink-900/10"
    >
      <SectionHeader
        icon="📖"
        planetName="Chapter 7"
        title="Yusuf's Journey"
        subtitle="Every chapter tells a story of a special star."
      />

      <div
        ref={ref}
        className={`reveal ${
          visible ? 'visible' : ''
        } relative max-w-3xl mx-auto`}
      >
        {/* Center line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-babyPink-400 via-roseGold-400 to-warmPink-500 md:-translate-x-1/2" />

        {EVENTS.map((e, i) => (
          <div
            key={i}
            className={`relative mb-12 flex items-center ${
              i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
          >
            {/* Dot */}
            <div className="absolute left-4 md:left-1/2 w-5 h-5 rounded-full bg-gradient-to-br from-babyPink-400 to-warmPink-500 timeline-dot md:-translate-x-1/2 z-10" />

            {/* Card */}
            <div
              className={`ml-12 md:ml-0 md:w-1/2 ${
                i % 2 === 0
                  ? 'md:pr-12 md:text-right'
                  : 'md:pl-12'
              }`}
            >
              <div className="glass-card rounded-2xl p-6">

                <div
                  className={`flex items-center gap-3 mb-2 ${
                    i % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <span className="text-2xl">{e.icon}</span>

                  <span className="font-display text-2xl font-bold gradient-text">
                    {e.year}
                  </span>
                </div>

                <h4 className="font-display text-lg font-semibold text-babyPink-700 dark:text-babyPink-200 mb-1">
                  {e.title}
                </h4>

                <p className="text-sm text-babyPink-800/60 dark:text-babyPink-100/60 leading-relaxed">
                  {e.desc}
                </p>

              </div>
            </div>

            {/* Spacer */}
            <div className="hidden md:block md:w-1/2" />

          </div>
        ))}

      </div>
    </SectionWrapper>
  );
}