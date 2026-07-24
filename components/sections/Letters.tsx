import { SectionHeader, SectionWrapper } from '../Section';
import { useReveal } from '@/hooks/useReveal';
import { useState } from 'react';

const LETTERS = [
  {
    title: "To Yusuf ❤️",
    body: "أول حاجة أحب أقولها إني بحبك أكتر من أي حد. ربنا يخليك ليا ويحفظك دايمًا. وأكتر أمنية في قلبي إن علاقتنا تكمل بالحلال، وأفضل أدعي ربنا يحققها ويجمعنا على خير. 🤍",
  },
  {
    title: "My Wish For You 🌙",
    body: "نفسي بجد أشوف كل أحلامك وهي بتتحقق قدام عيني، وأشوفك أسعد إنسان في الدنيا كلها. تستحق كل خير، وكل نجاح، وكل فرحة. ربنا يوفقك في كل خطوة، ويحققلك كل اللي نفسك فيه. يا يوسفي، يا أغلى حد في حياتي. 🤍",
  },
  {
    title: "I'm Sorry 💌",
    body: "أنا آسفة على كل حاجة، وعلى كل لحظة زعلتك فيها من غير ما أقصد. بجد مكنتش حابة أكون سبب في أي حزن ليك. سامحني يا ينو، إنت نور عيني وأغلى حد في حياتي، وبحبك من كل قلبي. ❤️",
  },
  {
    title: "Believe in Yourself 🌟",
    body: "خلي دايمًا عندك هدف تسعى له، وخلي ثقتك وإيمانك بربنا سبحانه وتعالى أكبر من أي خوف أو صعوبة. صدقني، ربنا هيكرمك ويعوض تعبك، لأنك تستحق كل حاجة حلوة في الدنيا. وأنا هفضل دايمًا مؤمنة بيك، وفخورة بكل خطوة بتاخدها. 🤲❤️",
  },
];

function Envelope({
  letter,
  index,
}: {
  letter: { title: string; body: string };
  index: number;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="envelope"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className="glass-card rounded-2xl p-6 relative overflow-hidden">
        <div className="relative h-48 flex items-center justify-center">
          {!open ? (
            <div
              className="text-center cursor-pointer"
              onClick={() => setOpen(true)}
            >
              <div className="text-4xl mb-2 animate-float">💌</div>
              <p className="font-display text-babyPink-600 dark:text-babyPink-200 text-sm font-medium">
                {letter.title}
              </p>
              <p className="text-xs text-roseGold-400 mt-1">
                Click to open
              </p>
            </div>
          ) : (
            <div className="text-center px-2">
              <h3 className="font-display text-lg text-babyPink-700 dark:text-babyPink-100 mb-3">
                {letter.title}
              </h3>

              <p className="text-babyPink-700 dark:text-babyPink-100 text-sm leading-7">
                {letter.body}
              </p>

              <button
                onClick={() => setOpen(false)}
                className="mt-5 px-4 py-2 rounded-full bg-roseGold-500 text-white hover:bg-roseGold-600 transition"
              >
                Close
              </button>
            </div>
          )}
        </div>

        {!open && (
          <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-gradient-to-br from-warmPink-500 to-babyPink-600 flex items-center justify-center text-white text-xs font-bold shadow-lg">
            Y
          </div>
        )}
      </div>
    </div>
  );
}

export default function Letters() {
  const { ref, visible } = useReveal();

  return (
    <SectionWrapper
      id="letters"
      className="bg-gradient-to-b from-transparent via-babyPink-50/30 to-transparent dark:via-warmPink-900/10"
    >
      <SectionHeader
        icon="💌"
        planetName="Planet 3"
        title="Letters"
        subtitle="Words sealed in stardust, waiting to be opened"
      />

      <div
        ref={ref}
        className={`reveal ${
          visible ? 'visible' : ''
        } grid sm:grid-cols-2 lg:grid-cols-4 gap-6`}
      >
        {LETTERS.map((l, i) => (
          <Envelope key={i} letter={l} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
}