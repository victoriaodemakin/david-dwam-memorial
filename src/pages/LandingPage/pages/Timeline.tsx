import React, { useEffect, useRef, useState } from "react";
import Section from "../components/sessionManagement";
const Timeline = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const itemRefs = useRef<(HTMLElement | null)[]>([]);

  const timelineData = [
    {
      year: "1951",
      date: "June 24th",
      title: "A New Beginning",
      description: "Born on June 24, 1951, to Joseph Oladimeji Olagbaju and Princess Mobolaji Olagbaju (née Ademiluyi). \nOlaseni was the cherished second child in a dynamic family of nine.",
      icon: ""
    },
    {
      year: "1957",
      date: "(1957–1963)",
      title: "Foundational Years",
      description: "His foundational years were spent at St Stephen A, Ile Ife (1957–1963)",
      icon: ""
    },
    {
      year: "1963",
      date: "(1963–1968)",
      title: "Secondary School Days",
      description: "Attended Molusi College, Ijebu Igbo (1963–1968) \nwhere the seeds of his intellectual curiosity were first sown.",
      icon: ""
    },
    {
      year: "1970",
      date: "(1970-1974)",
      title: "University Years",
      description: "His passion led him to Obafemi Awolowo University (OAU), where he graduated in 1974 with a BSc in Microbiology",
      icon: ""
    },
    {
      year: "1988",
      date: "October 18th",
      title: "Legacy Journey",
      description: "He moved to the UK in 1988\nThroughout his 74 years, Olaseni was a magnetic force. His unique spirit touched the lives of all who knew him; his generosity knew no bounds. He truly connected with people.",
      icon: ""
    },
    {
      year: "2025",
      date: "September 28th",
      title: "Peaceful Transition",
      description: "Olaseni passed on peacefully on September 28, 2025, surrounded by family and loved ones.\n His unique spirit will be deeply missed, but the profound legacy of his kindness remains etched in the hearts of all who have crossed his path.",
      icon: ""
    }
  ];

  useEffect(() => {
    const observers = itemRefs.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleItems((prev) => 
                prev.includes(index) ? prev : [...prev, index]
              );
            }
          });
        },
        { threshold: 0.2 }
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  return (
    <Section id="timeline" title="">
      <div className="min-h-screen bg-gradient-to-b from-white to-orange-50 py-6 px-4 sm:px-6 lg:px-8">
        {/* SEO-Enhanced Header */}
        <header className="text-center mb-12">
          <p className="text-sm text-gray-600 mb-2 tracking-wide animate-fade-in">
            Journey of Grace
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-2 animate-slide-up">
            Life Timeline of Olaseni Babatunde Olagbaju
          </h2>
          <p className="text-base lg:text-lg text-gray-600 mb-4 animate-fade-in animation-delay-200">
            Moments That Mattered | 1951 - 2025
          </p>
          <div className="h-[5px] bg-gradient-to-r from-transparent via-[#fcbb68] to-transparent divider-line mx-auto rounded"></div>
        </header>

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
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-10'
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
                            ? 'scale-100 opacity-100'
                            : 'scale-75 opacity-0'
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
                            ? 'scale-100 rotate-0'
                            : 'scale-0 rotate-180'
                        }`}
                      >
                        <div className="w-2.5 h-2.5 rounded-full bg-[#deac6c] animate-pulse-soft"></div>
                      </div>
                      {/* Animated Vertical line */}
                      {index < timelineData.length - 1 && (
                        <div 
                          className={`absolute left-[13px] top-7 w-[2px] bg-[#deac6c] transition-all duration-1000 ${
                            visibleItems.includes(index)
                              ? 'h-[calc(100%+60px)] opacity-100'
                              : 'h-0 opacity-0'
                          }`}
                        ></div>
                      )}
                    </div>

                    {/* Content Card with Hover Effects */}
                    <div 
                      className={`flex-1 bg-white rounded-md shadow-md p-4 md:p-5 border-l-4 md:border-l-0 border-[#deac6c] ml-4 md:ml-0 mb-6 md:mb-0 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer ${
                        visibleItems.includes(index)
                          ? 'translate-x-0 opacity-100'
                          : 'translate-x-10 opacity-0'
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

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes expandWidth {
          from {
            width: 0;
            opacity: 0;
          }
          to {
            width: 3rem;
            opacity: 1;
          }
        }

        @keyframes pulseSoft {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.1);
          }
        }

        @keyframes bounceSubtle {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-3px);
          }
        }

        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }

        .animate-slide-up {
          animation: slideUp 0.8s ease-out forwards;
        }

        .animate-expand-width {
          animation: expandWidth 1s ease-out forwards;
        }

        .animate-pulse-soft {
          animation: pulseSoft 2s ease-in-out infinite;
        }

        .animate-bounce-subtle {
          animation: bounceSubtle 2s ease-in-out infinite;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
        }
      `}</style>
    </Section>
  );
};

export default Timeline;