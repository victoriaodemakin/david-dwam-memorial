import React, { useEffect, useRef, useState } from "react";

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
		const [visibleItems, setVisibleItems] = useState<number[]>([]);
		const itemRefs = useRef<(HTMLElement | null)[]>([]);
	
		const timelineData = [
			{
				year: "1961",
				date: "Sept 25th",
				title: "EARLY LIFE",
				description:
					"born on 25th September 1961 to the family of Dari Dwam and Assadiya Gananigili. He hailed from Demsa Local Government Area of Adamawa State, Nigeria.From an early age, he was known for his discipline, strength of character, and devotion to family and faith; qualities that would define the course of his remarkable life",
				icon: "",
			},
			{
				year: "1977",
				date: "(1977–1982)",
				title: "Education",
				description:
					"He began his educational journey at Dwam Primary School, completing his primary education in 1977. He then proceeded to Government Secondary School, Ganye, where he completed his secondary education in 1982. In his pursuit of knowledge and personal development, he further obtained a Higher National Diploma (HND) in Marine Engineering during his years in the military.He also earned a Bachelor of Science (B.Sc.) in Guidance and Counselling from the National Open University of Nigeria, followed by a Master’s degree in Theology, a Ph.D. in Theology, and several other academic and ministerial qualifications",
				icon: "",
			},
		{
		year: "1983",
		date: "(1983–1998)",
		title: "MILITARY CAREER",
		description: `Following his secondary education, Rev. David briefly served in the Nigerian Army for six months before enlisting in the Nigerian Navy on 31st January 1983. During his fifteen years of faithful service, he attended several professional and military courses and qualified as a Marine Engineer Artificer. He served in several naval establishments and warships, including:
	
	- NNS Aradu
	- NNS Lana
	
	While serving aboard NNS Lana, his place of assignment gradually became a spiritual refuge where officers and men came for prayers, counseling, and encouragement. He retired honorably from the Nigerian Navy on 28th February 1998 after 15 years of meticulous service to his fatherland.`,
		icon: "",
	},
			{
				year: "1989",
				date: "1989-04-28",
				title: "FAMILY LIFE",
				description: `While in the military, he first met his beloved wife, Pastor Nerias Byron, during the then National Games at Ijaniki, Lagos, where she was playing basketball.
	She immediately caught his attention, and from that moment, their bond grew into a lifelong union built on love, faith, and partnership.
	They were joyfully united in holy matrimony on 28th April 1989.
	Their blessed union was graced with three beloved children:
	
	- Amsami David
	- Pano David
	- Echem David
	
	Beyond his immediate family, he was also a father figure to many spiritual sons and daughters whose lives he nurtured through wisdom, counsel, and prayer.`,
				icon: "",
			},
			{
				year: "1990",
				date: "October 18th",
				title: "SPIRITUAL JOURNEY AND MINISTRY",
						 description: `A defining moment in his life occurred while he was on duty aboard a ship, when an incident unfolded that revealed the power and saving grace of God.
	This encounter led him to surrender his life fully to Christ, and in 1990, he accepted Jesus Christ as his Lord and Savior.
	From that moment, a fire for the Gospel was ignited in his heart.
	He preached tirelessly on ships, buses, pulpits, and crusade grounds, bringing hope, salvation, and healing to countless lives.
	In 1998, he answered the call into full-time ministry and became the founding pastor of Grace and Truth Christian Ministry.
	The ministry began in Cotonou, Benin Republic, before the headquarters was later moved to Lagos, Nigeria, with branches in Yola and Dakanta, Adamawa State. He also served the wider Christian community in various leadership capacities, including:
	
	- Chairman, Pentecostal Fellowship of Nigeria (PFN), Igbede Chapter
	- Director of Evangelism, Ojo Province
	- Member, Advisory Board
	
	His sermons were deeply rooted in Scripture and marked by faith, conviction, and grace.
	He is fondly remembered for his cherished words: “It is well with the righteous.”`,
				icon: "",
			},
			{
				year: "2026",
				date: "April 8th",
				title: "SIBLINGS",
				description:
			`He is survived by his beloved siblings:
	- Regina Dwam
	- Macdonald Dwam
	-Esther Dwam
	-Thompson Dwam
	-Faith Dwam
	-Monday Dwam
	-Sunday Dwam
	He was preceded in death by:
	- Masima Dwam `,
				icon: "",
			},
			{
				year: "2026",
				date: "April 8th",
				title: "HOME CALL",
				description:`Rev. David Dari Dwam lived a life of total service to God, family, nation, and humanity.
	He poured himself out for all who came his way and remained steadfast in faith until the very end.
	His final words were a bold declaration of faith: “I am the righteousness of God in Christ.”
	On 8th April 2026, he peacefully went home to be with the Lord. Though greatly missed, his legacy of faith, service, and love will continue to inspire generations to come.
	He fought a good fight, he finished his course, and he kept the faith.`,
				icon: "",
			},
		];
	
		useEffect(() => {
			const observers = itemRefs.current.map((ref, index) => {
				if (!ref) return null;
	
				const observer = new IntersectionObserver(
					(entries) => {
						entries.forEach((entry) => {
							if (entry.isIntersecting) {
								setVisibleItems((prev) =>
									prev.includes(index) ? prev : [...prev, index],
								);
							}
						});
					},
					{ threshold: 0.2 },
				);
	
				observer.observe(ref);
				return observer;
			});
	
			return () => {
				observers.forEach((observer) => observer?.disconnect());
			};
		}, []);
  return (
    <Section id="biography" title="">
    

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
I am the righteousness of God in Christ.
              </p>
              <p className="font-light text-center text-sm tracking-wider uppercase text-gray-700">
                His final words were a bold declaration of faith
              </p>
            </div>
            <span className="text-6xl text-yellow-600 font-serif leading-none animate-slide-in-right">
              "
            </span>
          </div>
        </header>

        {/* Legacy Section */}
      <header className="text-center mb-12">
          <p className="text-sm text-gray-600 mb-2 tracking-wide animate-fade-in">
            Journey of Grace
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-2 animate-slide-up">
            A Tribute to the Life and Legacy of Rev. David Dari Dwam (1961–2026)
          </h2>
          <p className="text-base lg:text-lg text-gray-600 mb-4 animate-fade-in animation-delay-200">
            A Life Well Lived | 1961 - 2026
          </p>
          <div className="h-[5px] bg-gradient-to-r from-transparent via-[#fcbb68] to-transparent divider-line mx-auto rounded"></div>
        </header>

        {/* Biography Content */}
         <div className="min-h-screen bg-gradient-to-b from-white to-orange-50 py-6 px-4 sm:px-6 lg:px-8">
        {/* SEO-Enhanced Header */}
    

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline Items with Scroll Animations */}
            <div className="space-y-0">
              {timelineData.map((item, index) => (
                <article
                  key={index}
                  ref={(el) => (itemRefs.current[index] = el)}
                  className={`relative transition-all duration-700 ${
                    visibleItems.includes(index)
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                  itemScope
                  itemType="https://schema.org/Event"
                >
                  <div className="flex flex-col md:flex-row md:gap-3 relative">
                    {/* Year Label with Animation */}
                    <div className="flex items-start md:w-24 md:flex-shrink-0 mb-2 md:mb-0">
                      <time
                        className={`text-[#deac6c] font-light text-3xl md:text-4xl leading-none transition-all duration-500 ${
                          visibleItems.includes(index)
                            ? "scale-100 opacity-100"
                            : "scale-75 opacity-0"
                        }`}
                        dateTime={item.year}
                        itemProp="startDate"
                      >
                        {item.year}
                      </time>
                    </div>

                    {/* Animated Circle with connecting line */}
                    <div className="hidden md:block relative flex-shrink-0">
                      <div
                        className={`w-7 h-7 rounded-full border-[2.5px] border-[#deac6c] bg-white flex items-center justify-center z-10 relative transition-all duration-500 ${
                          visibleItems.includes(index)
                            ? "scale-100 rotate-0"
                            : "scale-0 rotate-180"
                        }`}
                      >
                        <div className="w-2.5 h-2.5 rounded-full bg-[#deac6c] animate-pulse-soft"></div>
                      </div>
                      {/* Animated Vertical line */}
                      {index < timelineData.length - 1 && (
                        <div
                          className={`absolute left-[13px] top-7 w-[2px] bg-[#deac6c] transition-all duration-1000 ${
                            visibleItems.includes(index)
                              ? "h-[calc(100%+60px)] opacity-100"
                              : "h-0 opacity-0"
                          }`}
                        ></div>
                      )}
                    </div>

                    {/* Content Card with Hover Effects */}
                    <div
                      className={`flex-1 bg-white rounded-md shadow-md p-4 md:p-5 border-l-4 md:border-l-0 border-[#deac6c] ml-4 md:ml-0 mb-6 md:mb-0 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer ${
                        visibleItems.includes(index)
                          ? "translate-x-0 opacity-100"
                          : "translate-x-10 opacity-0"
                      }`}
                    >
                      {/* Icon Badge */}
                      <div className="flex items-start gap-3 mb-2">
                        <span className="text-2xl animate-bounce-subtle">
                          {item.icon}
                        </span>
                        <div className="flex-1">
                          <h3
                            className="text-[#deac6c] font-semibold text-base md:text-lg mb-2"
                            itemProp="name"
                          >
                            {item.title}
                          </h3>
                        </div>
                      </div>

                      <p
                        className="text-gray-600 font-light text-xs md:text-sm leading-relaxed whitespace-pre-line mb-2"
                        itemProp="description"
                      >
                        {item.description}
                      </p>

                      {item.date && (
                        <p className="text-gray-400 text-xs font-light italic">
                          {item.date}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Spacing between timeline items */}
                  {index < timelineData.length - 1 && (
                    <div className="h-12 md:h-16"></div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>

        {/* Bible Reading Section - Stacked and Visually Enhanced */}
        <div className=" max-w-3xl mx-auto space-y-4 my-4">
          {/* 1 Thessalonians 4:13–18 */}
          <BibleVerseCard
            reference="1 Thessalonians 4:13–18"
            preview="Brothers and sisters, we do not want you to be uninformed about those who sleep in death, so that you do not grieve like the rest of mankind, who have no hope."
            full="¹⁴ For we believe that Jesus died and rose again, and so we believe that God will bring with Jesus those who have fallen asleep in him. ¹⁵ According to the Lord's word, we tell you that we who are still alive, who are left until the coming of the Lord, will certainly not precede those who have fallen asleep. ¹⁶ For the Lord himself will come down from heaven, with a loud command, with the voice of the archangel and with the trumpet call of God, and the dead in Christ will rise first. ¹⁷ After that, we who are still alive and are left will be caught up together with them in the clouds to meet the Lord in the air. And so we will be with the Lord forever. ¹⁸ Therefore encourage one another with these words."
            delay="delay-400"
            bg="from-amber-50 via-orange-50 to-yellow-50"
            border="border-l-4 border-yellow-600"
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
    </Section>
  );
};

export default Obituary;
