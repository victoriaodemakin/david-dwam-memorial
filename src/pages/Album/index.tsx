import React, { useEffect, useRef } from "react";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";

import Photo1 from "../../../public/assets/images/young-papa.jpg";
import Photo2 from "../../../public/assets/images/young-pap-2.jpg";
import Photo3 from "../../../public/assets/images/papa-navy.jpg";
import Photo12 from "../../../public/assets/images/papa-school-1.jpg";
import Photo4 from "../../../public/assets/images/papa-at-alter.jpeg";
import Photo5 from "../../../public/assets/images/papa-alone.jpeg";
import Photo6 from "../../../public/assets/images/papa-marry-1.jpg";
import Photo7 from "../../../public/assets/images/papa-married-2.jpg";
import Photo8 from "../../../public/assets/images/papa-mama-1.jpg";
import Photo9 from "../../../public/assets/images/papa-mama.jpg";
import Photo10 from "../../../public/assets/images/youn-papa-mama-2.jpg";
import Photo11 from "../../../public/assets/images/young-papa-mama.jpg";
import Photo13 from "../../../public/assets/images/papa-amsami-1.jpeg";
import Photo14 from "../../../public/assets/images/papa-dance-1.jpg";
import Photo15 from "../../../public/assets/images/papa-family-1.jpg";
import Photo16 from "../../../public/assets/images/papa-frien.jpg";
import Photo17 from "../../../public/assets/images/papa-family-3.jpg";
import Photo18 from "../../../public/assets/images/papa-young.jpg";
import Photo19 from "../../../public/assets/images/papa-red-pictures.jpeg";
import Photo20 from "../../../public/assets/images/papa-amsami-2.jpeg";
import Photo21 from "../../../public/assets/images/papa-friend-4.jpg";
import Photo22 from "../../../public/assets/images/papa-friend-5.jpg";
import Photo23 from "../../../public/assets/images/youn-papa-mama-2.jpg";
import Photo24 from "../../../public/assets/images/papa-family-3.jpg";
import Photo25 from "../../../public/assets/images/IMG_20260412_161947.jpg";
import Photo26 from "../../../public/assets/images/IMG_20260412_160343.jpg";
import Photo27 from "../../../public/assets/images/IMG_20260412_132850.jpg";
import Photo28 from "../../../public/assets/images/IMG_20260412_161238.jpg";
import Photo29 from "../../../public/assets/images/IMG_20260412_161409.jpg";
import Photo30 from "../../../public/assets/images/IMG_20260412_162241.jpg";
import Photo31 from "../../../public/assets/images/IMG_20260412_161740.jpg";
import Photo32 from "../../../public/assets/images/papa-school-1.jpg";
import Photo33 from "../../../public/assets/images/papa-school-2.jpg";


const galleryImages = [
  { id: 0, url: Photo1, alt: "young daddy", objectFit: "contain"  },
  { id: 2, url: Photo2, alt: "Family in water" },
  { id: 1, url: Photo19, alt: "Family outdoor moment" ,objectFit: "contain"  },
  { id: 3, url: Photo3, alt: "Indoor family time" },
  { id: 4, url: Photo4, alt: "Sunset family" },
	{ id: 5, url: Photo5, alt: "Portrait" },
	{ id: 23, url: Photo23, alt: "Sunset family" },
    { id: 18, url: Photo18, alt: "Happy moments" },
  { id: 15, url: Photo15, alt: "Portrait" },
  { id: 8, url: Photo8, alt: "Family in water" },
  { id: 9, url: Photo9, alt: "Indoor family time", objectFit: "contain" },
  { id: 7, url: Photo7, alt: "Family outdoor moment", objectFit: "contain" },
  { id: 6, url: Photo6, alt: "Beach time" },
  { id: 20, url: Photo20, alt: "Special day" },

  { id: 10, url: Photo10, alt: "Sunset family", objectFit: "contain" },
  { id: 13, url: Photo13, alt: "Family outdoor moment", objectFit: "contain" },
 

	{ id: 14, url: Photo14, alt: "Sunset family" },
    { id: 11, url: Photo11, alt: "Happy moments" },
  { id: 30, url: Photo30, alt: "Portrait" },
  { id: 28, url: Photo28, alt: "Portrait" },
	
  { id: 16, url: Photo16, alt: "Beach time" },

  { id: 17, url: Photo17, alt: "Family moment" },
  { id: 19, url: Photo19, alt: "Together", objectFit: "contain" },
  { id: 21, url: Photo21, alt: "Family time", objectFit: "contain" },
    { id: 26, url: Photo26, alt: "Wedding moment" },

		{ id: 27, url: Photo27, alt: "Wedding day" },
	{ id: 22, url: Photo22, alt: "With sons" },
  { id: 24, url: Photo24, alt: "Wedding party" },
  
	{ id: 29, url: Photo29, alt: "Portrait" },
    { id: 33, url: Photo33, alt: "Together" },
			{ id: 12, url: Photo12, alt: "Sunset family", objectFit: "contain"  },
    { id: 31, url: Photo31, alt: "Happy moments" },
  { id: 32, url: Photo32, alt: "Portrait" },
  { id: 25, url: Photo25, alt: "Portrait" },

		{ id: 23, url: Photo23, alt: "Sunset family" },
    { id: 18, url: Photo18, alt: "Happy moments" },
  { id: 15, url: Photo15, alt: "Portrait" },
  { id: 5, url: Photo5, alt: "Portrait" },


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
