import React, { useEffect } from 'react';

const Section = ({ id, title, children }) => (
  <section id={id}>
    {title && <h2>{title}</h2>}
    {children}
  </section>
);

const Obituary = () => {
  useEffect(() => {
    // SEO Meta Tags
    document.title = "Olaseni Babatunde Olagbaju (1951-2025) - Obituary & Life Tribute";
    
    const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta');
    metaDescription.name = "description";
    metaDescription.content = "Honoring the life and legacy of Olaseni Babatunde Olagbaju (1951-2025). A tribute to a remarkable life of generosity, community impact, and unwavering kindness.";
    if (!document.querySelector('meta[name="description"]')) {
      document.head.appendChild(metaDescription);
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]') || document.createElement('meta');
    metaKeywords.name = "keywords";
    metaKeywords.content = "Olaseni Babatunde Olagbaju, obituary, tribute, memorial, OAU, Obafemi Awolowo University, Rotunda, legacy";
    if (!document.querySelector('meta[name="keywords"]')) {
      document.head.appendChild(metaKeywords);
    }

    // Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]') || document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    ogTitle.content = "In Loving Memory of Olaseni Babatunde Olagbaju";
    if (!document.querySelector('meta[property="og:title"]')) {
      document.head.appendChild(ogTitle);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]') || document.createElement('meta');
    ogDescription.setAttribute('property', 'og:description');
    ogDescription.content = "A celebration of the extraordinary life of Olaseni Babatunde Olagbaju (1951-2025)";
    if (!document.querySelector('meta[property="og:description"]')) {
      document.head.appendChild(ogDescription);
    }
  }, []);

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

      <article itemScope itemType="https://schema.org/Person" className="max-w-4xl mx-auto px-4 py-8">
        {/* Schema.org structured data */}
        <meta itemProp="name" content="Olaseni Babatunde Olagbaju" />
        <meta itemProp="birthDate" content="1951-04-24" />
        <meta itemProp="deathDate" content="2025-09-28" />
        <meta itemProp="deathPlace" content="Newham University Hospital, London" />
        <meta itemProp="alumniOf" content="Obafemi Awolowo University" />

        {/* Top Honor Section */}
        <header className="text-center mb-12 bg-gradient-to-b from-white to-orange-50 py-9 rounded-lg animate-fade-in">
          <p className="text-sm text-gray-600 mb-4 tracking-wide animate-fade-in-up delay-100">
            Honoring Olaseni Babatunde Olagbaju
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
            A Tribute to the Life and Legacy of Olaseni Babatunde Olagbaju (1951–2025)
          </p>
            <h1 className="text-3xl lg:text-4xl font-bold text-black mb-4">A Life Well Lived</h1>
          <div className="h-[5px] bg-gradient-to-r from-transparent via-[#fcbb68] to-transparent divider-line mx-auto rounded"></div>
        </div>

        {/* Biography Content */}
        <div className="text-gray-900 font-light leading-relaxed space-y-4 mb-12">
          {/* First paragraph with drop cap */}
          <p className="mb-4 paragraph-hover animate-fade-in-up delay-500">
            <span className="float-left text-7xl font-serif leading-none mr-3 mt-1 text-gray-900 drop-cap-animated">
              T
            </span>
            <span className="inline" itemProp="description">
              he world dimmed on Sunday, September 28, 2025, when Olaseni Babatunde Olagbaju was called home to glory at Newham University Hospital, London. He departs from us, leaving behind a profound legacy of uncommon generosity, deep care, and unique impact.
            </span>
          </p>

          <p className="mb-4 clear-left paragraph-hover animate-fade-in-up delay-600">
            Born on June 24, 1951, to Joseph Oladimeji Olagbaju and Princess Mobolaji Olagbaju (née Ademiluyi), Olaseni was the cherished second child in a dynamic family of nine. His foundational years were spent at St Stephen A, Ile Ife (1957–1963) and Molusi College, Ijebu Igbo (1963–1968), where the seeds of his intellectual curiosity were first sown. His passion led him to Obafemi Awolowo University (OAU), where he graduated in 1974 with a BSc in Microbiology.
          </p>

          <p className="mb-4 paragraph-hover animate-fade-in-up delay-100">
            However, Olaseni's greatest impact on campus extended beyond the classroom: when he returned to famously managed and ran Rotunda, an iconic building that served as the energetic hub of student life and the nascent tech scene at OAU. It was here that he cultivated connections and mentored others, embodying the community spirit that defined him. He moved to the UK in 1988.
          </p>

          <p className="paragraph-hover animate-fade-in-up delay-200">
            Throughout his 74 years, Olaseni was a magnetic force. His unique spirit touched the lives of all who knew him; his generosity knew no bounds. He truly connected with people. While the loss is immeasurable for the family he leaves behind, we take comfort in the knowledge that to all who knew him, Olaseni was more than a friend or family member; he was a force of positive impact, his generosity touching and transforming countless lives. His unique spirit will be deeply missed, but the profound legacy of his kindness remains etched in the hearts of all who have crossed his path.
          </p>

          <p className="my-3 text-center text-lg italic animate-fade-in-up delay-300">
            May the blessings of a life well-lived accompany Olaseni into eternal rest.
          </p>
        </div>

        {/* Yoruba Tributes Section - Stacked and Visually Enhanced */}
        <div className="space-y-6 mb-8">
          {/* First Tribute */}
          <div className="quote-card bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 rounded-2xl p-8 border-l-4 border-yellow-600 shadow-lg animate-fade-in-up delay-400">
            <div className="flex items-start gap-4">
              <span className="text-5xl text-yellow-600 font-serif leading-none opacity-50 animate-float">
                "
              </span>
              <div className="flex-1">
                <p className="text-yellow-700 text-lg lg:text-xl font-light leading-relaxed mb-2 italic">
                  Ọmọ a bọ̀kẹ́ ìpàkọ́ wọlé sọya rọ̀rọ̀, sọkọ sọkọ n'mọgun baba Ògúntúwàsé, olóyè ní yègbéyèbé Ọmọ Adéyẹmí. Pọpọtan bí egbe Ọmọ ọlọ mìíràn.
                </p>
              </div>
              <span className="text-5xl text-yellow-600 font-serif leading-none opacity-50 animate-float" style={{animationDelay: '1.5s'}}>
                "
              </span>
            </div>
          </div>

          {/* Second Tribute */}
          <div className="quote-card bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 rounded-2xl p-8 border-l-4 border-yellow-500 shadow-lg animate-fade-in-up delay-500">
            <div className="flex items-start gap-4">
              <span className="text-5xl text-yellow-600 font-serif leading-none opacity-50 animate-float" style={{animationDelay: '0.5s'}}>
                "
              </span>
              <div className="flex-1">
                <p className="text-yellow-700 text-lg lg:text-xl font-light leading-relaxed mb-2 italic">
                  Àwùsì, Mọ́rìlówú, Ọmọ aréwà, Ọmọ ajírí ilé, Ọmọ olókè ọ̀nà, Ọmọ Àfí Kàràhún fò rí mu, Ọmọ Ládìméjì Àrìfí, Ọmọ Igbó Tapa.
                </p>
              </div>
              <span className="text-5xl text-yellow-600 font-serif leading-none opacity-50 animate-float" style={{animationDelay: '2s'}}>
                "
              </span>
            </div>
          </div>

          {/* Final Tribute - Featured */}
          <div className="quote-card bg-gradient-to-br from-yellow-100 via-amber-100 to-orange-100 rounded-2xl p-10 border-2 border-yellow-600 shadow-2xl animate-fade-in-up delay-600">
            <div className="flex items-start gap-4">
              <span className="text-6xl text-yellow-700 font-serif leading-none opacity-60 animate-float" style={{animationDelay: '1s'}}>
                "
              </span>
     <div>
                
                <p className="font-light text-center text-sm tracking-wider uppercase">
Olásèní Ọmọ Ọlágbájú, Rìyánlọlá Dúbíọ́ndé. Sùn rẹ o!                </p>
              </div>
              <span className="text-6xl text-yellow-700 font-serif leading-none opacity-60 animate-float" style={{animationDelay: '2.5s'}}>
                "
              </span>
            </div>
          </div>
        </div>
      </article>
    </Section>
  );
};

export default Obituary;