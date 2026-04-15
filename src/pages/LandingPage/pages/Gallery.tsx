import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import GalleryFullPage from "../../Album/index"; // adjust path as needed
import Image from "next/image";
import Photo1 from "../../../../public/assets/images/paper-header-pic.jpeg";
import Photo2 from "../../../../public/assets/images/paper-header-pic.jpeg";
import Photo3 from "../../../../public/assets/images/paper-header-pic.jpeg";
import Photo4 from "../../../../public/assets/images/paper-header-pic.jpeg";
import Photo5 from "../../../../public/assets/images/paper-header-pic.jpeg";
import Photo6 from "../../../../public/assets/images/paper-header-pic.jpeg";
import Photo7 from "../../../../public/assets/images/paper-header-pic.jpeg";
import Photo8 from "../../../../public/assets/images/paper-header-pic.jpeg";
import Photo9 from "../../../../public/assets/images/paper-header-pic.jpeg";
import Photo10 from "../../../../public/assets/images/paper-header-pic.jpeg";
import Photo11 from "../../../../public/assets/images/paper-header-pic.jpeg";
import Photo12 from "../../../../public/assets/images/paper-header-pic.jpeg";
import Photo13 from "../../../../public/assets/images/paper-header-pic.jpeg";
import Photo14 from "../../../../public/assets/images/paper-header-pic.jpeg";
import Photo15 from "../../../../public/assets/images/paper-header-pic.jpeg";
import Photo16 from "../../../../public/assets/images/paper-header-pic.jpeg";
import Photo17 from "../../../../public/assets/images/paper-header-pic.jpeg";
import Photo18 from "../../../../public/assets/images/paper-header-pic.jpeg";
import Photo19 from "../../../../public/assets/images/paper-header-pic.jpeg";
import Photo20 from "../../../../public/assets/images/paper-header-pic.jpeg";
import Photo21 from "../../../../public/assets/images/paper-header-pic.jpeg";
import Photo22 from "../../../../public/assets/images/paper-header-pic.jpeg";
import Photo23 from "../../../../public/assets/images/paper-header-pic.jpeg";
import Photo24 from "../../../../public/assets/images/paper-header-pic.jpeg";
import Photo25 from "../../../../public/assets/images/paper-header-pic.jpeg";
import Photo26 from "../../../../public/assets/images/paper-header-pic.jpeg";
import Photo27 from "../../../../public/assets/images/paper-header-pic.jpeg";
import Photo28 from "../../../../public/assets/images/paper-header-pic.jpeg";
import Photo29 from "../../../../public/assets/images/paper-header-pic.jpeg";
import Photo30 from "../../../../public/assets/images/paper-header-pic.jpeg";
import Photo31 from "../../../../public/assets/images/paper-header-pic.jpeg";
import Photo32 from "../../../../public/assets/images/paper-header-pic.jpeg";
import Photo33 from "../../../../public/assets/images/paper-header-pic.jpeg";


// SEO-Enhanced Alt Text with Full Name
const galleryImages = [
  { id: 1, url: Photo1, alt: "David Dari Dwam wedding day with family" },
  {
    id: 3,
    url: Photo3,
    alt: "David Dari Dwam with child - father and son bond",
  },
  {
    id: 2,
    url: Photo2,
    alt: "Olaseni Olagbaju with wife - cherished moment together",
  },
  {
    id: 4,
    url: Photo4,
    alt: "Olaseni Olagbaju portrait - distinguished gentleman",
  },
  {
    id: 5,
    url: Photo5,
    alt: "David Dari Dwam at daughter wedding celebration",
  },
  {
    id: 6,
    url: Photo6,
    alt: "Olaseni Olagbaju with bride - proud father moment",
  },
  { id: 7, url: Photo7, alt: "David Dari Dwam with sons - family bond" },
  {
    id: 8,
    url: Photo8,
    alt: "Olaseni Olagbaju family gathering - generations together",
  },
  { id: 9, url: Photo9, alt: "David Dari Dwam family celebration" },
  {
    id: 10,
    url: Photo10,
    alt: "Olaseni Olagbaju with extended family members",
  },
  { id: 11, url: Photo11, alt: "David Dari Dwam daughter wedding moment" },
  { id: 13, url: Photo13, alt: "David Dari Dwam family outdoor gathering" },
  {
    id: 14,
    url: Photo14,
    alt: "Olaseni Olagbaju as grandfather - legacy continues",
  },
  {
    id: 15,
    url: Photo15,
    alt: "David Dari Dwam multi-generational family photo",
  },
  {
    id: 16,
    url: Photo16,
    alt: "Olaseni Olagbaju with children and grandchildren",
  },
  {
    id: 17,
    url: Photo17,
    alt: "David Dari Dwam with in-laws - extended family",
  },
  { id: 18, url: Photo18, alt: "Olaseni Olagbaju wedding portrait with bride" },
  { id: 19, url: Photo19, alt: "David Dari Dwam and wife - lifelong partners" },
  {
    id: 20,
    url: Photo20,
    alt: "Olaseni Olagbaju at son wedding - proud father",
  },
  { id: 21, url: Photo21, alt: "David Dari Dwam with wife - special moment" },
  {
    id: 22,
    url: Photo22,
    alt: "Olaseni Olagbaju with wife and son - family unit",
  },
  { id: 23, url: Photo23, alt: "David Dari Dwam with all sons together" },
  {
    id: 24,
    url: Photo24,
    alt: "Olaseni Olagbaju at wedding party celebration",
  },
  { id: 25, url: Photo25, alt: "David Dari Dwam wedding ceremony day" },
  { id: 26, url: Photo26, alt: "Olaseni Olagbaju traditional wedding attire" },
  { id: 27, url: Photo27, alt: "David Dari Dwam wedding celebration moment" },
  { id: 28, url: Photo28, alt: "Olaseni Olagbaju formal portrait photograph" },
  { id: 29, url: Photo29, alt: "David Dari Dwam with siblings - family roots" },
  {
    id: 30,
    url: Photo30,
    alt: "Olaseni Olagbaju distinguished portrait 1951-2026",
  },
  { id: 31, url: Photo31, alt: "David Dari Dwam family photograph" },
  { id: 32, url: Photo32, alt: "Olaseni Olagbaju and wife - enduring love" },
  { id: 33, url: Photo33, alt: "David Dari Dwam with brother - sibling bond" },
];

const Section = ({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) => (
  <section id={id} className="py-16 bg-white" aria-label="Photo gallery">
    {children}
  </section>
);

interface CarouselSlideProps {
  images: typeof galleryImages;
  currentIndex: number;
  onPrev: () => void;
  onNext: () => void;
}

const CarouselSlide: React.FC<CarouselSlideProps> = ({
  images,
  currentIndex,
  onPrev,
  onNext,
}) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayIndex, setDisplayIndex] = useState(currentIndex);
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Fix for SSR - only run on client
  useEffect(() => {
    setIsClient(true);

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => {
      setDisplayIndex(currentIndex);
      setIsTransitioning(false);
    }, 50);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  // Create infinite loop effect by duplicating images
  const extendedImages = [...images, ...images, ...images];
  const startIndex = images.length + displayIndex;

  // Calculate transform based on device type (only on client)
  const getTransform = () => {
    if (!isClient) return "translateX(0)"; // SSR fallback

    if (isMobile) {
      return `translateX(-${displayIndex * 100}%)`;
    }
    return `translateX(calc(-${startIndex * 650}px + 50vw - 325px))`;
  };

  return (
    <div className="relative w-full mb-8">
      {/* Carousel Container */}
      <div className="relative overflow-hidden rounded-lg shadow-2xl">
        <div
          className={`flex transition-transform duration-700 ease-in-out ${isTransitioning ? "" : "duration-0"}`}
          style={{ transform: getTransform() }}
        >
          {extendedImages.map((image, idx) => (
            <div
              key={`${image.id}-${idx}`}
              className="flex-shrink-0 w-full md:w-[650px] group"
            >
              <div className="h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] mx-0 md:mx-2 overflow-hidden rounded-lg relative">
                <Image
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-contain md:object-cover bg-gray-100 transition-transform duration-700 group-hover:scale-105"
                  loading={idx < 3 ? "eager" : "lazy"}
                  quality={85}
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons - Hidden on mobile, visible on desktop */}
        <button
          onClick={onPrev}
          className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10 items-center justify-center group"
          aria-label="Previous photo"
        >
          <ChevronLeft className="w-6 h-6 text-gray-800 group-hover:text-[#fcbb68] transition-colors" />
        </button>

        <button
          onClick={onNext}
          className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10 items-center justify-center group"
          aria-label="Next photo"
        >
          <ChevronRight className="w-6 h-6 text-gray-800 group-hover:text-[#fcbb68] transition-colors" />
        </button>
      </div>

      {/* Progress Indicator */}
      <div className="flex justify-center gap-2 mt-6">
        {images.slice(0, 8).map((_, idx) => (
          <button
            key={idx}
            onClick={() => onPrev()}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === displayIndex % 8
                ? "w-8 bg-[#fcbb68]"
                : "w-2 bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to photo ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

interface GalleryPageProps {
  onBack: () => void;
}

const GalleryPage: React.FC<GalleryPageProps> = ({ onBack }) => {
  const [visibleImages, setVisibleImages] = useState<number[]>([]);
  const imageRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observers = imageRefs.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleImages((prev) =>
                prev.includes(index) ? prev : [...prev, index],
              );
            }
          });
        },
        { threshold: 0.1 },
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <button
          onClick={onBack}
          className="mb-8 flex items-center gap-2 text-gray-600 hover:text-[#fcbb68] transition-colors group"
        >
          <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back to Gallery</span>
        </button>

        <header className="text-center mb-12 animate-fade-in">
          <p className="text-sm text-gray-600 mb-2 tracking-wide">
            Captured Moments
          </p>
          <h1 className="text-3xl lg:text-4xl font-bold text-black mb-2">
            David Dari Dwam - A Life in Pictures
          </h1>
          <p className="text-lg text-gray-600 mb-4">
            Celebrating memories from 1951 to 2026
          </p>
          <div className="h-[5px] bg-gradient-to-r from-transparent via-[#fcbb68] to-transparent divider-line mx-auto rounded"></div>
        </header>

        <div className="space-y-6">
          {/* Pattern: 1 big left, 2 small right */}
          {[0, 3, 6].map((startIdx, patternIdx) => (
            <div
              key={`pattern-a-${patternIdx}`}
              ref={(el) => (imageRefs.current[startIdx] = el)}
              className={`grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 transition-all duration-700 ${
                visibleImages.includes(startIdx)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="lg:col-span-2 h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden rounded-lg group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300">
                <Image
                  src={galleryImages[startIdx].url}
                  alt={galleryImages[startIdx].alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="grid grid-rows-2 gap-4 lg:gap-6">
                <div className="h-[150px] md:h-[200px] lg:h-[242px] overflow-hidden rounded-lg group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300">
                  <Image
                    src={galleryImages[startIdx + 1].url}
                    alt={galleryImages[startIdx + 1].alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="h-[150px] md:h-[200px] lg:h-[242px] overflow-hidden rounded-lg group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300">
                  <Image
                    src={galleryImages[startIdx + 2].url}
                    alt={galleryImages[startIdx + 2].alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
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

        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }

        .animate-expand-width {
          animation: expandWidth 1s ease-out 0.3s forwards;
          width: 0;
        }
      `}</style>
    </div>
  );
};

const Gallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showGalleryPage, setShowGalleryPage] = useState(false);
const galleryAudioRef = useRef(null);

  useEffect(() => {
    if (!showGalleryPage) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
      }, 4000);

      return () => clearInterval(interval);
    }
  }, [showGalleryPage]);

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  };

  if (showGalleryPage) {
// Where GalleryFullPage is rendered in Gallery
return <GalleryFullPage onBack={() => setShowGalleryPage(false)} audioRef={galleryAudioRef} />;  }

  return (
    <Section id="gallery" title="Gallery">
      <div className="text-center mb-12 animate-fade-in px-4">
        <p className="text-sm text-gray-600 mb-2 tracking-wide">
          Moments in Time
        </p>
        <h2 className="text-3xl lg:text-4xl font-bold text-black mb-2">
          David Dari Dwam - A Glimpse Through the Years
        </h2>
        <p className="text-lg text-gray-600 mb-4">
          Photo gallery celebrating his life and legacy
        </p>
        <div className="h-[5px] bg-[#fcbb68] w-12 mx-auto rounded"></div>
      </div>

      <CarouselSlide
        images={galleryImages}
        currentIndex={currentIndex}
        onPrev={handlePrev}
        onNext={handleNext}
      />

      {/* See More Button with Animation */}
      <div className="flex justify-center mb-8">
        <button
onClick={() => {
  // Start audio on this user gesture before mounting GalleryFullPage
  if (!galleryAudioRef.current) {
    galleryAudioRef.current = new Audio("/assets/music/song.mp3");
    galleryAudioRef.current.loop = true;
    galleryAudioRef.current.volume = 0.6;
  }
  galleryAudioRef.current.play().catch(() => {});
  setShowGalleryPage(true);
}}          className="bg-[#fcbb68] text-black px-8 py-3 rounded-lg font-semibold hover:bg-[#e5a851] transition-all duration-300 shadow-md hover:shadow-xl hover:scale-105 transform"
          aria-label="View full photo gallery of David Dari Dwam"
        >
          See More Photos
        </button>
      </div>
    </Section>
  );
};

export default Gallery;
