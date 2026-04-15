import React, { useEffect } from "react";

const Section = ({ id, title, children }) => (
  <section id={id}>
    {title && <h2>{title}</h2>}
    {children}
  </section>
);

const BibleVerseCard = ({ reference, preview, full, delay, bg, border }) => {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <div
      className={`quote-card bg-gradient-to-br ${bg} rounded-2xl p-8 ${border} shadow-lg animate-fade-in-up ${delay}`}
    >
      <div className="flex items-start gap-4">
        <span className="text-5xl text-yellow-600 font-serif leading-none opacity-50 animate-float">
          "
        </span>
        <div className="flex-1">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3 text-yellow-700 opacity-70">
            {reference}
          </p>
          <p className="text-yellow-700 text-lg lg:text-xl font-light leading-relaxed italic">
            ¹ {preview}
          </p>
          {expanded && (
            <p className="text-yellow-700 text-lg lg:text-xl font-light leading-relaxed italic mt-3">
              {full}
            </p>
          )}
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-4 text-sm font-medium border border-yellow-600 text-yellow-700 rounded-full px-4 py-1.5 hover:bg-yellow-100 transition-all duration-300"
          >
            {expanded ? "Read less ↑" : "Read more ↓"}
          </button>
        </div>
        <span
          className="text-5xl text-yellow-600 font-serif leading-none opacity-50 animate-float"
          style={{ animationDelay: "1.5s" }}
        >
          "
        </span>
      </div>
    </div>
  );
};
const Obituary = () => {


  return (
    <Section id="biography" title="">
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }

        .animate-slide-in-left {
          animation: slideInLeft 0.8s ease-out forwards;
        }

        .animate-slide-in-right {
          animation: slideInRight 0.8s ease-out forwards;
        }

        .animate-scale-in {
          animation: scaleIn 0.6s ease-out forwards;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .delay-100 { animation-delay: 0.1s; opacity: 0; }
        .delay-200 { animation-delay: 0.2s; opacity: 0; }
        .delay-300 { animation-delay: 0.3s; opacity: 0; }
        .delay-400 { animation-delay: 0.4s; opacity: 0; }
        .delay-500 { animation-delay: 0.5s; opacity: 0; }
        .delay-600 { animation-delay: 0.6s; opacity: 0; }

        .gradient-text {
          background: linear-gradient(135deg, #ca8a04 0%, #f59e0b 50%, #ca8a04 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3s linear infinite;
        }

        .drop-cap-animated {
          transition: all 0.3s ease;
        }

        .drop-cap-animated:hover {
          color: #ca8a04;
          transform: scale(1.1);
        }

        .paragraph-hover {
          transition: all 0.3s ease;
        }

        .paragraph-hover:hover {
          transform: translateX(5px);
          color: #1f2937;
        }

        .quote-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .quote-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(202, 138, 4, 0.15);
        }

        .divider-line {
          width: 0;
          animation: expandWidth 1.2s ease-out forwards;
          animation-delay: 0.5s;
        }

        @keyframes expandWidth {
          to { width: 3rem; }
        }
      `}</style>

      <article
        itemScope
        itemType="https://schema.org/Person"
        className="max-w-4xl mx-auto px-4 py-8"
      >
        {/* Schema.org structured data */}
        <meta itemProp="name" content="David Dari Dwam" />
        <meta itemProp="birthDate" content="1951-04-24" />
        <meta itemProp="deathDate" content="2026-09-28" />
        <meta
          itemProp="deathPlace"
          content="Newham University Hospital, London"
        />
        <meta itemProp="alumniOf" content="Obafemi Awolowo University" />

        {/* Top Honor Section */}
        <header className="text-center mb-12 bg-gradient-to-b from-white to-orange-50 py-9 rounded-lg animate-fade-in">
          <p className="text-sm text-gray-600 mb-4 tracking-wide animate-fade-in-up delay-100">
            Honoring Rev David Dari Dwam
          </p>
          <div className="flex items-start justify-center gap-4 max-w-3xl mx-auto animate-fade-in-up delay-200">
            <span className="text-6xl text-yellow-600 font-serif leading-none animate-slide-in-left">
              "
            </span>
            <div className="animate-scale-in delay-300">
              <p className="text-yellow-600 text-xl lg:text-2xl font-light leading-relaxed mb-3">
                For this God is our God forever and ever; He will be our guide
                even to the end.
              </p>
              <p className="font-light text-center text-sm tracking-wider uppercase text-gray-700">
                PSALM 48:14
              </p>
            </div>
            <span className="text-6xl text-yellow-600 font-serif leading-none animate-slide-in-right">
              "
            </span>
          </div>
        </header>

        {/* Legacy Section */}
        <div className="text-center mb-8 animate-fade-in-up delay-400">
          <p className="text-sm text-gray-600 mb-2 tracking-wide">
            A Tribute to the Life and Legacy of David Dari Dwam (1951–2026)
          </p>
          <h1 className="text-3xl lg:text-4xl font-bold text-black mb-4">
            A Life Well Lived
          </h1>
          <div className="h-[5px] bg-gradient-to-r from-transparent via-[#fcbb68] to-transparent divider-line mx-auto rounded"></div>
        </div>

        {/* Biography Content */}
       <div className="text-gray-900 font-light leading-relaxed space-y-4 mb-12">
  {/* First paragraph with drop cap */}
  <p className="mb-4 paragraph-hover animate-fade-in-up delay-500">
    <span className="float-left text-7xl font-serif leading-none mr-3 mt-1 text-gray-900 drop-cap-animated">
      I
    </span>
    <span className="inline" itemProp="description">
      t is with hearts full of grief and gratitude that we announce the passing of
      Reverend David Dari Dwam, who was called home to glory on Wednesday, April 8, 2026.
      He departs from us leaving behind a profound legacy of faith, service, and
      uncommon devotion — a man who served his nation in uniform, and then spent
      the rest of his life serving his God and his people.
    </span>
  </p>

  <p className="mb-4 clear-left paragraph-hover animate-fade-in-up delay-600">
    Born on September 25, 1951, David Dari Dwam was a proud son of Adamawa, rooted in the
    rich culture and community of his people. From an early age, he carried himself
    with discipline and purpose. He answered the call of duty by enlisting in the
    Nigerian Navy, where he served with honour and distinction before retiring as a
    proud veteran. His years of service instilled in him a lifelong commitment to
    integrity, loyalty, and selfless giving.
  </p>

  <p className="mb-4 paragraph-hover animate-fade-in-up delay-100">
    After his retirement from the Navy, David Dari Dwam answered a higher calling.
    He surrendered his life fully to the service of God, was ordained as a Reverend,
    and devoted himself wholeheartedly to pastoral ministry. As a pastor, he was
    a shepherd in the truest sense — tending to his flock with compassion, preaching
    the Word with conviction, and walking faithfully alongside those in his care.
    To many, he was not just a pastor but a father, a counsellor, and a friend.
  </p>

  <p className="paragraph-hover animate-fade-in-up delay-200">
    Throughout his 74 years, Rev David Dari Dwam was a magnetic and towering presence
    wherever he went. Whether in the barracks or the pulpit, he led with grace and
    governed with love. His beloved wife, children, family, and congregation now
    mourn a man who was their anchor. While the loss is immeasurable, we take
    comfort in knowing that he lived fully, loved deeply, and finished his race with
    faith intact. The seeds of kindness, wisdom, and godly character he planted in
    countless lives will continue to bear fruit for generations to come.
  </p>

  <p className="my-3 text-center text-lg italic animate-fade-in-up delay-300">
    Beloved Husband, Father, Brother, Uncle, and Pastor — may the blessings of a
    life well-lived and faithfully served accompany Rev David Dari Dwam into eternal rest.
  </p>
</div>

        {/* Bible Reading Section - Stacked and Visually Enhanced */}
<div className="space-y-6 mb-8">

  {/* 1 Thessalonians 4:13–18 */}
  <BibleVerseCard
    reference="1 Thessalonians 4:13–18"
    preview="Brothers and sisters, we do not want you to be uninformed about those who sleep in death, so that you do not grieve like the rest of mankind, who have no hope."
    full="¹⁴ For we believe that Jesus died and rose again, and so we believe that God will bring with Jesus those who have fallen asleep in him. ¹⁵ According to the Lord's word, we tell you that we who are still alive, who are left until the coming of the Lord, will certainly not precede those who have fallen asleep. ¹⁶ For the Lord himself will come down from heaven, with a loud command, with the voice of the archangel and with the trumpet call of God, and the dead in Christ will rise first. ¹⁷ After that, we who are still alive and are left will be caught up together with them in the clouds to meet the Lord in the air. And so we will be with the Lord forever. ¹⁸ Therefore encourage one another with these words."
    delay="delay-400"
    bg="from-amber-50 via-orange-50 to-yellow-50"
    border="border-l-4 border-yellow-600"
  />

  {/* Job 14:1–14 */}
  <BibleVerseCard
    reference="Job 14:1–14"
    preview="Mortals, born of woman, are of few days and full of trouble. ² They spring up like flowers and wither away; like fleeting shadows, they do not endure."
    full="³ Do you fix your eye on them? Will you bring them before you for judgment? ⁴ Who can bring what is pure from the impure? No one! ⁵ A person's days are determined; you have decreed the number of his months and have set limits he cannot exceed. ⁶ So look away from him and let him alone, till he has put in his time like a hired laborer. ⁷ At least there is hope for a tree: if it is cut down, it will sprout again, and its new shoots will not fail. ⁸ Its roots may grow old in the ground and its stump die in the soil, ⁹ yet at the scent of water it will bud and put forth shoots like a plant. ¹⁰ But a man dies and is laid low; he breathes his last and is no more. ¹¹ As waters fail from the sea, and a river wastes away and dries up, ¹² so he lies down and does not rise; till the heavens are no more, people will not awake or be roused from their sleep. ¹³ If only you would hide me in the grave and conceal me till your anger has passed! If only you would set me a time and then remember me! ¹⁴ If someone dies, will they live again? All the days of my hard service I will wait for my renewal to come."
    delay="delay-500"
    bg="from-orange-50 via-amber-50 to-yellow-50"
    border="border-l-4 border-yellow-500"
  />

  {/* Ecclesiastes 3:1–8 */}
  <BibleVerseCard
    reference="Ecclesiastes 3:1–8"
    preview="There is a time for everything, and a season for every activity under the heavens: ² a time to be born and a time to die, a time to plant and a time to uproot,"
    full="³ a time to kill and a time to heal, a time to tear down and a time to build, ⁴ a time to weep and a time to laugh, a time to mourn and a time to dance, ⁵ a time to scatter stones and a time to gather them, a time to embrace and a time to refrain from embracing, ⁶ a time to search and a time to give up, a time to keep and a time to throw away, ⁷ a time to tear and a time to mend, a time to be silent and a time to speak, ⁸ a time to love and a time to hate, a time for war and a time for peace."
    delay="delay-600"
    bg="from-yellow-100 via-amber-100 to-orange-100"
    border="border-2 border-yellow-600"
  />

</div>
      </article>
    </Section>
  );
};

export default Obituary;
