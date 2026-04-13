import React, { useState } from 'react';
import { Heart, Quote } from 'lucide-react';
import Section from '../components/sessionManagement';

const eulogiesData = [
  {
    id: 1,
    name: "Mrs. Funke Olagbaju",
    title: "",
		message:'Seni, your departure was a great shock to us all but we know you are in a better place. You were a generous, hardworking and kind hearted soul. You will be missed! Your memories will always be remembered. I pray that God’s comfort will continue to reside with us and the entire family. We love and miss you. May your soul rest in eternal peace. Omo Arewa , Omo Ajiri ile, Omo Oloke ona.Sunre ooo.',
    relationship: ""
  },
	{
    id: 2,
    name: "Babs",
    title: "Son",
		message :"Our hearts heavy with loss, we honour a life that burned brightly and left an indelible mark on us all. Though you are gone, your laughter still echoes in quiet moments, your kindness lingers in every act of grace we now try to pass forward, and your courage remains a light that steadies us when the way feels dark. You taught us how to love fiercely, how to stand tall in adversity, and how to find joy even when the world seemed too heavy to bear. The space you once filled feels impossibly vast , yet somehow, in the memories we share and the stories we will carry, you are still right here among us. Yet, our hearts also  brimming with love for a man who truly defined what it means to be alive. Our world has shifted.The pain of losing him is excruciating, a testament to how deeply he was loved and how profoundly he will be missed. But this is not a moment for unbroken sorrow. This is one  to celebrate a life lived with unmatched optimism, mischief, and joy! He danced through storms in bright-colored shoes, turned ordinary days into adventures, and loved with a reckless, open-hearted abandon that left the rest of us breathless and better for it. Dad was a force of nature. He was instantly personable, the kind of man who was truly fun company. That kind of energy wasn't just magnetic—it gave everyone around him a lift. You knew him, you loved him. He was, without question, the King of Good Times .May his soul now find true peace and rest, embraced by eternal light, reunited with those he loved who have gone before him, and abiding in a realm of perfect tranquility. ​May his journey be gentle, his rest profound, and his memory a blessing forever."
    ,relationship: "Son"
  },
 
  {
    id: 3,
    name: "Gbolahan Olagbaju",
    title: "Son",
		message:"I knew him as an extremely generous man, kind hearted, a loving man, strong and an intelligent man. He tried his best to live his life the best way he could by impacting lives positively. These memories of him will never fade in my mind and I believe he has finally found everlasting peace.  They say “death is not the greatest loss in life. The greatest loss is what dies inside while still alive”. This is a great example of how my Dad lived his life. I will always respect him because he lived a full and vibrant life. He tried his best until the end and he never gave up. We love you Dad and we know your spirit will always be with us.Nle o, Dubionde, Moriolowu, Omo Arewa, Omo Ajirile, Omo Oloke Ona, Soko, Omo Aboke Ipako Wole Soya Roro.Sun re o May your soul rest in eternal peace. You will never be forgotten. Love you Dad. ",
    relationship: "Son"
  },
	 {
    id: 4,
    name: "Tolani Alake 🤍",
    title: "Daughter",
		message: "I can’t believe that you’re no longer with us my beloved father. I wasn’t prepared for you to go the time you did but I understand that you’ve gone to a better place where you’ll experience God’s divine peace, joy and love. I looked up to you and thought you were invincible. I knew how much you loved me and I hold on to all the memories of the past. You were always there to take me to school and picked me up when I finished school, you made sure there was always food on the table. I remember how you’d make my favourite foods and how much I looked forward to your wonderful cooking. It’s because of you that I love food so much. You were so calm, funny, kind, loving and I just wanted to see you happy and content because I adored you. I only wish we had more time to talk and say things that were left unsaid, I wish we had more time to make more memories. I thank God for your life and for knowing you, there will never be anyone like you. You were truly a special soul who touched the lives of so many with your warm heart and generosity. I love you so much Daddy and I believe we will see each other again in heaven. Rest in perfect peace, your daughter",
    relationship: "Daughter"
  },
  {
    id: 5,
    name: "Yetunde",
    title: "Sister",
		message:"Good bye ‘Omo Arewa’To say I miss you my dearest brother  is an understatement. We spoke a week before your passing but I had no clue that would be our last conversation. My heart still aches with sadness.You will be remembered as a wonderful brother and a generous and great friend. The truth is, at one point in our lives, we all will have to say goodbye, so for now till we meet again in glory to part no more. Goodbye my darling brother.",
    relationship: "Your dear Sister"
  },
  {
    id: 6,
    name: "Justice Iyabo Kasali (Rtd)",
    title: "Sister",
		message:"To my darling Brother: Olaseni Babatunde Olagbaju.Hmmmmmm!!!!brother Seni. You were not only a brother to me, you were my friend and I love you so much Sene. Your heart was so pure, you relate to each and everyone as if you were pals. Never a dull moment with you, you were kind, jovial and full of life. My brother I know you are with your creator now and I so much missed you. I know you were in a better place and we shall meet one day. ‘Nle o ‘Laseni, Obilohun, Dubionde’ (as our mummy always greeted you) Omo Arewa , Omo Ajiri ile, Omo Oloke ona. Omo aboke ipako Wole soya roro Omo soko soko nmogun baba oguntunwase. Oloye nyegbeyegbe baba Adeyemi. Popotan bi egbe omo elomirin. Sleep on brother Seni . May Eternal Rest Grant unto you, May you rest in Peace.🙏🏻",
    relationship: "Your dear Sister"
  },
  
];

const EulogiesSection = () => {
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
<p className="text-sm text-gray-600 mb-2 tracking-wide">Gentle Remembrance</p>
<h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">Words That Carry His Memory Forward</h2>


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
              <div className="text-6xl text-gray-200 font-serif leading-none mb-2">"</div>
              
              {/* Message */}
              <div className="mb-6">
                <p className={`text-gray-700 text-base md:text-lg leading-relaxed italic transition-all duration-300 ${
                  expandedId === eulogy.id ? '' : 'line-clamp-3'
                }`}>
                  {eulogy.message}
                </p>
                
                {eulogy.message.length > 150 && (
                  <button
                    onClick={() => toggleExpand(eulogy.id)}
                    className="mt-3 text-sm text-gray-500 hover:text-[#fcbb68] transition-colors duration-300 underline"
                  >
                    {expandedId === eulogy.id ? 'Show less' : 'Read more'}
                  </button>
                )}
              </div>

              {/* Author info */}
              <div className="flex items-baseline gap-3">
                <h3 className="text-lg md:text-xl font-medium text-gray-900">{eulogy.name}</h3>
                  {eulogy.title && (
    <>
      <span className="text-gray-400">—</span>
      <p className="text-sm md:text-base text-gray-500">{eulogy.title}</p>
    </>
  )}
              </div>
            </div>
          ))}
        </div>
      </div>

 {/* Show More Button */}
      {eulogiesData.length > 4 && (
        <div className="text-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-3 bg-[#fcbb68] text-white rounded-lg hover:bg-[#e6a857] transition-colors duration-300"
          >
            {showAll ? 'Show Less' : `See More Eulogies (${eulogiesData.length - 5} more)`}
          </button>
        </div>
      )}
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