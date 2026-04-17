import React, { useState } from "react";
import { Heart, Quote } from "lucide-react";
import Section from "../components/sessionManagement";

const eulogiesData = [
  {
    id: 1,
    name: "Pastor Mrs Nerias Dari david",
    title: "Wife",
    message:
      `"You were more than a husband—you were my partner and my rock. Saying goodbye was the hardest thing I’ve ever done.
You showed me how to live with strength and integrity. I’ll never forget your guidance or your favorite passage, John 1:1-5. Though you left us quietly, you left us with the peace of knowing 'It is well the righteous.' I am comforted because I know you are in a better place and that our paths will cross again.
I love you deeply. Thank you for everything you taught me and for shaping me into the woman I am today.
Always yours, your wife."
 `,
    relationship: "Wife",
  },
  {
    id: 2,
    name: "Amsami  David",
    title: "Daughter",
    message:
      "I can't believe that you're no longer with us my beloved father. I wasn't prepared for you to go when you did, but I understand that you've gone to a better place where you'll experience God's divine peace, joy and love. I looked up to you and thought you were invincible. You were so calm, funny, kind, and loving. I just wanted to see you happy and content because I adored you. I only wish we had more time to talk and say things that were left unsaid, I wish we had more time to make more memories. I thank God for your life and for knowing you. There will never be anyone like you. You were truly a special soul who touched the lives of so many with your warm heart and generosity. I love you so much Daddy and I believe we will see each other again in heaven. Rest in perfect peace.",
    relationship: "Daughter",
  },
  {
    id: 3,
    name: "Pano Isaac David",
    title: "Son",
    message:
      "For many years I thought the critical life-changing choices I made came from my independence, not until the day I heard you praying secretly. You were interceding for everyone of us. You truly designed with your mind, spoke and prayed things into existence. Thank you for pointing us to Jesus, who's my Lord, master and Saviour; of whom I'm certain you are sitting with this moment. You've lived a life of service, of which I testify of from a tender age, and you have served here on earth and continue to do so up in heaven. I'll see your face again.",
    relationship: "Son",
  },
  {
    id: 4,
    name: "Echem David",
    title: "Daughter",
    message:
      "Daddy, you were my hero. From the Nigerian Navy to the pulpit, you showed me what it means to serve with honour and to love with a whole heart. Your discipline, your faith, and your warmth shaped everything I am. I hold on to every memory your laughter, your wisdom, your prayers over us. I thank God every day that you were my father. There will never be another like you. The world is quieter without you, but heaven is richer. Rest well, Daddy. I love you more than words can say.",
    relationship: "Daughter",
  },
  {
    id: 5,
    name: "Pastor Joe Nwoake",
    title: "Pastor & Friend",
    message:
      "Rev David Dari Dwam was a man of rare integrity and deep faith. From his years of distinguished service in the Nigerian Navy to his faithful years in pastoral ministry, he carried himself with honour and humility in every season of life. He was a true soldier of the cross — disciplined, devoted, and deeply compassionate. His love for God and for people was evident in everything he did. The church has lost a pillar, the ministry has lost a faithful servant, and I have lost a dear brother in Christ. His example will continue to inspire all who had the privilege of knowing him. Rest well, Rev. Your labour was not in vain.",
    relationship: "Pastor & Friend",
  },
  {
    id: 6,
    name: "Pastor Olugbade",
    title: "Pastor & Friend",
    message:
      "I had the honour of walking alongside Rev David Dari Dwam in ministry, and I can say without hesitation that he was one of the most genuine men of God I have ever known. He came to the pulpit not seeking recognition, but seeking souls. His years in the Nigerian Navy gave him a backbone of discipline, and his encounter with God gave him a heart full of grace. He preached what he lived and lived what he preached. To his beloved wife Pastor Mrs Naris, his children, and the entire family may the God of all comfort surround you in this season. Rev Dwam finished well. Well done, good and faithful servant.",
    relationship: "Pastor & Friend",
  },
];

const EulogiesSection = () => {
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
  const [showAll, setShowAll] = useState(false);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const [expandedId, setExpandedId] = useState(null);
  const displayedEulogies = showAll ? eulogiesData : eulogiesData.slice(0, 5);

  return (
    <Section id="eulogies" title="">
      <section className="py-9 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-4">
            <p className="text-sm text-gray-600 mb-2 tracking-wide">
              Gentle Remembrance
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
              Words That Carry His Memory Forward
            </h2>

            <div className="h-[5px] bg-gradient-to-r from-transparent via-[#fcbb68] to-transparent divider-line mx-auto rounded"></div>
          </div>

          {/* Eulogies List */}
          <div className="space-y-4 md:space-y-8">
            {displayedEulogies.map((eulogy, index) => (
              <div
                key={eulogy.id}
                className="border-l-2 border-gray-200 pl-6 md:pl-10 py-4 animate-slide-in hover:border-[#fcbb68] transition-all duration-500"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Quote mark */}
                <div className="text-6xl text-gray-200 font-serif leading-none mb-2">
                  "
                </div>

                {/* Message */}
                <div className="mb-6">
                  <p
                    className={`text-gray-700 text-base md:text-lg leading-relaxed italic transition-all duration-300 ${
                      expandedId === eulogy.id ? "" : "line-clamp-3"
                    }`}
                  >
                    {eulogy.message}
                  </p>

                  {eulogy.message.length > 150 && (
                    <button
                      onClick={() => toggleExpand(eulogy.id)}
                      className="mt-3 text-sm text-gray-500 hover:text-[#fcbb68] transition-colors duration-300 underline"
                    >
                      {expandedId === eulogy.id ? "Show less" : "Read more"}
                    </button>
                  )}
                </div>

                {/* Author info */}
                <div className="flex items-baseline gap-3">
                  <h3 className="text-lg md:text-xl font-medium text-gray-900">
                    {eulogy.name}
                  </h3>
                  {eulogy.title && (
                    <>
                      <span className="text-gray-400">—</span>
                      <p className="text-sm md:text-base text-gray-500">
                        {eulogy.title}
                      </p>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Show More Button */}
        {eulogiesData.length > 4 && (
          <div className="text-center mt-8 mb-5">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-3 bg-[#fcbb68] text-white rounded-lg hover:bg-[#e6a857] transition-colors duration-300"
            >
              {showAll
                ? "Show Less"
                : `See More Eulogies (${eulogiesData.length - 5} more)`}
            </button>
          </div>
        )}
				{/* Job 14:1–14 */}
          <BibleVerseCard
            reference="Job 14:1–14"
            preview="Mortals, born of woman, are of few days and full of trouble. ² They spring up like flowers and wither away; like fleeting shadows, they do not endure."
            full="³ Do you fix your eye on them? Will you bring them before you for judgment? ⁴ Who can bring what is pure from the impure? No one! ⁵ A person's days are determined; you have decreed the number of his months and have set limits he cannot exceed. ⁶ So look away from him and let him alone, till he has put in his time like a hired laborer. ⁷ At least there is hope for a tree: if it is cut down, it will sprout again, and its new shoots will not fail. ⁸ Its roots may grow old in the ground and its stump die in the soil, ⁹ yet at the scent of water it will bud and put forth shoots like a plant. ¹⁰ But a man dies and is laid low; he breathes his last and is no more. ¹¹ As waters fail from the sea, and a river wastes away and dries up, ¹² so he lies down and does not rise; till the heavens are no more, people will not awake or be roused from their sleep. ¹³ If only you would hide me in the grave and conceal me till your anger has passed! If only you would set me a time and then remember me! ¹⁴ If someone dies, will they live again? All the days of my hard service I will wait for my renewal to come."
            delay="delay-500"
            bg="from-orange-50 via-amber-50 to-yellow-50"
            border="border-l-4 border-yellow-500"
          />
        <style jsx>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateX(-20px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          .animate-fade-in {
            animation: fadeIn 0.8s ease-out forwards;
          }

          .animate-slide-in {
            opacity: 0;
            animation: slideIn 0.6s ease-out forwards;
          }

          .line-clamp-3 {
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        `}</style>
      </section>
    </Section>
  );
};

export default EulogiesSection;
