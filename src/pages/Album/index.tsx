import React, { useEffect, useRef } from "react";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Photo0 from "../../../public/assets/images/daddy-1.jpg";
import Photo1 from "../../../public/assets/images/daddy-wedding.jpg";
import Photo2 from "../../../public/assets/images/daddy-mummy.jpg";
import Photo3 from "../../../public/assets/images/daddy--and-child.jpg";
import Photo4 from "../../../public/assets/images/cool-dad.jpg";
import Photo5 from "../../../public/assets/images/daddy-bride-2.jpg";
import Photo7 from "../../../public/assets/images/daddy-sons.jpg";
import Photo6 from "../../../public/assets/images/daddy-bride-2.jpg";
import Photo8 from "../../../public/assets/images/daddy-family.jpg";
import Photo9 from "../../../public/assets/images/daddy-family-2.jpg";
import Photo10 from "../../../public/assets/images/daddy-family-4.jpg";
import Photo11 from "../../../public/assets/images/daddy-bride-3.jpg";
import Photo13 from "../../../public/assets/images/daddy-family-5.jpg";
import Photo14 from "../../../public/assets/images/daddy-grandpa.jpg";
import Photo16 from "../../../public/assets/images/daddy-family-7.jpg";
import Photo17 from "../../../public/assets/images/daddy-in-laws.jpg";
import Photo19 from "../../../public/assets/images/daddy-mummy-2.jpg";
import Photo20 from "../../../public/assets/images/daddy-son-wedding.jpg";
import Photo21 from "../../../public/assets/images/daddy-mummy-3.jpg";
import Photo22 from "../../../public/assets/images/daddy-mummy-son-1.jpg";
import Photo23 from "../../../public/assets/images/daddy-sons.jpg";
import Photo24 from "../../../public/assets/images/daddy-wdding-party.jpg";
import Photo26 from "../../../public/assets/images/daddy-wedding-3.jpg";
import Photo27 from "../../../public/assets/images/daddy-wedding-4.jpg";
import Photo28 from "../../../public/assets/images/Olaseni-Babatunde-Olagbaju-1.jpg";

import Photo29 from "../../../public/assets/images/daddy-silbings.jpg";

import Photo30 from "../../../public/assets/images/Olaseni-Babatunde-Olagbaju-4.jpg";

import Photo33 from "../../../public/assets/images/daddy-brother.jpg";
import Photo35 from "../../../public/assets/images/daddy-all-silbings.jpg";
import Photo36 from "../../../public/assets/images/daddy-baby-1.jpg";
import Photo38 from "../../../public/assets/images/daddy-silbing-2.jpg";
import Photo39 from "../../../public/assets/images/daddy-silbing-3.jpg";
import Photo40 from "../../../public/assets/images/daddy-silbing-4.jpg";
import Photo41 from "../../../public/assets/images/daddy-silbing-5.jpg";
import Photo42 from "../../../public/assets/images/daddy-silbing-6.jpg";
import Photo37 from "../../../public/assets/images/daddy-silbing-7.jpg";
import Photo43 from "../../../public/assets/images/daddy-silbings-8.jpg";
import Photo44 from "../../../public/assets/images/daddy-silbings.jpg";
import Photo45 from "../../../public/assets/images/family-daddy.jpg";
import Photo46 from "../../../public/assets/images/daddy-christmas.jpg";
import Photo47 from "../../../public/assets/images/daddy-family-8.jpg";

const galleryImages = [
  { id: 0, url: Photo0, alt: "young daddy" },
  { id: 2, url: Photo2, alt: "Family in water" },
  { id: 1, url: Photo1, alt: "Family outdoor moment" },
  { id: 3, url: Photo3, alt: "Indoor family time" },
  { id: 4, url: Photo4, alt: "Sunset family" },
	  { id: 46, url: Photo46, alt: "Together", objectFit: "contain" },

  { id: 8, url: Photo8, alt: "Family in water" },
  { id: 9, url: Photo9, alt: "Indoor family time", objectFit: "contain" },
  { id: 7, url: Photo7, alt: "Family outdoor moment", objectFit: "contain" },
  { id: 6, url: Photo6, alt: "Beach time" },
  { id: 20, url: Photo20, alt: "Special day" },

  { id: 10, url: Photo10, alt: "Sunset family", objectFit: "contain" },
  { id: 13, url: Photo13, alt: "Family outdoor moment", objectFit: "contain" },
 
	{ id: 36, url: Photo36, alt: "Family photo", objectFit: "contain" },

	{ id: 14, url: Photo14, alt: "Sunset family" },
    { id: 11, url: Photo11, alt: "Happy moments" },
  { id: 30, url: Photo30, alt: "Portrait" },
  { id: 28, url: Photo28, alt: "Portrait" },
	
  { id: 16, url: Photo16, alt: "Beach time" },
	  { id: 45, url: Photo45, alt: "Family photo",objectFit: "contain" },

  { id: 17, url: Photo17, alt: "Family moment" },
  { id: 19, url: Photo19, alt: "Together", objectFit: "contain" },
  { id: 21, url: Photo21, alt: "Family time", objectFit: "contain" },
    { id: 26, url: Photo26, alt: "Wedding moment" },

		{ id: 27, url: Photo27, alt: "Wedding day" },
	{ id: 22, url: Photo22, alt: "With sons" },
  { id: 24, url: Photo24, alt: "Wedding party" },
  
	{ id: 29, url: Photo29, alt: "Portrait" },
    { id: 33, url: Photo33, alt: "Together" },

	{ id: 35, url: Photo35, alt: "Wedding celebration" },
  { id: 37, url: Photo37, alt: "Together" },
  { id: 38, url: Photo38, alt: "Family gathering" },
  { id: 39, url: Photo39, alt: "Wedding celebration" },
  { id: 40, url: Photo40, alt: "Family photo" },
  { id: 41, url: Photo41, alt: "Together" },
  { id: 42, url: Photo42, alt: "Family gathering" },
	  { id: 43, url: Photo43, alt: "Family gathering",objectFit: "contain" },
			  { id: 45, url: Photo47, alt: "Family gathering",objectFit: "contain" },

  { id: 44, url: Photo44, alt: "Wedding celebration" },
];

const GalleryFullPage = ({ onBack }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    // Create and play audio when component mounts
    if (!audioRef.current) {
      audioRef.current = new Audio("/assets/music/song.mp3");
      audioRef.current.loop = true;
      audioRef.current.volume = 0.6;
    }

    audioRef.current.play().catch((error) => {
    });

    // Cleanup: stop audio when component unmounts
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-8 md:py-16">
      <div className="max-w-7xl mx-auto px-4">
        <button
          onClick={onBack}
          className="mb-6 md:mb-8 flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors animate-fade-in"
        >
          <ChevronLeft className="w-5 h-5" />
          Back to Gallery
        </button>

        <div className="text-center mb-8 md:mb-12 animate-fade-in-up">
          <p className="text-sm text-gray-600 mb-2 tracking-wide">
            Captured Moments
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-4">
            A Life in Pictures
          </h2>
          <div className="h-[5px] bg-gradient-to-r from-transparent via-[#fcbb68] to-transparent divider-line mx-auto rounded"></div>
        </div>

        {/* Responsive Masonry-style Grid Gallery */}
        <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-5">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className="aspect-square overflow-hidden rounded-lg group cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 animate-scale-in"
              style={{
                animationDelay: `${index * 0.05}s`,
                backgroundColor:
                  image.objectFit === "contain" ? "#f3f4f6" : "transparent",
              }}
            >
              <Image
                src={image.url}
                alt={image.alt}
                className={`w-full h-full transition-transform duration-500 group-hover:scale-110 ${
                  image.objectFit === "contain"
                    ? "object-contain p-2"
                    : "object-cover"
                }`}
              />
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

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-scale-in {
          opacity: 0;
          animation: scaleIn 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default GalleryFullPage;
