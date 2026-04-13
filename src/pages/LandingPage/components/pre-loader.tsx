import React, { useState, useEffect } from 'react';

// Enhanced Loader Component with SEO and Animations
const Loader = ({ onLoadComplete }: { onLoadComplete: () => void }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fade out animation
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 5500);

    // Complete loading
    const completeTimer = setTimeout(() => {
      onLoadComplete();
    }, 6000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [onLoadComplete]);

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100 transition-opacity duration-500 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
      role="progressbar"
      aria-label="Loading memorial page"
    >
      <div className="text-center px-4 relative">
        {/* Animated background elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#fcbb68] opacity-5 rounded-full animate-ping-slow" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#fcbb68] opacity-3 rounded-full animate-pulse-slow" />
        </div>

        {/* Main heading with staggered animation */}
        <div className="space-y-2">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase overflow-hidden">
            <span className="inline-block animate-slide-up animation-delay-100">
              Olaseni
            </span>
            {' '}
            <span className="inline-block animate-slide-up animation-delay-200">
              Babatunde
            </span>
            <br />
            <span className="inline-block animate-slide-up animation-delay-300">
              Olagbaju
            </span>
          </h1>

          {/* Animated divider */}
          <div className="flex justify-center items-center gap-2 mt-4">
            <div className="h-[3px] bg-[#fcbb68] w-8 animate-expand-left" />
            <div className="h-[5px] bg-[#fcbb68] w-12 rounded animate-scale-in animation-delay-400" />
            <div className="h-[3px] bg-[#fcbb68] w-8 animate-expand-right" />
          </div>

          {/* Subtitle with fade-in */}
          <p className="text-lg md:text-xl text-gray-600 mt-6 animate-fade-in animation-delay-500 font-light">
            1951 - 2025
          </p>
          <p className="text-sm md:text-base text-gray-500 animate-fade-in animation-delay-600 italic">
            In Loving Memory
          </p>
        </div>

        {/* Loading dots indicator */}
        <div className="flex justify-center gap-2 mt-8">
          <div className="w-2 h-2 bg-[#fcbb68] rounded-full animate-bounce animation-delay-100" />
          <div className="w-2 h-2 bg-[#fcbb68] rounded-full animate-bounce animation-delay-200" />
          <div className="w-2 h-2 bg-[#fcbb68] rounded-full animate-bounce animation-delay-300" />
        </div>
      </div>

      {/* Add custom CSS for animations */}
      <style jsx>{`
        @keyframes slideUp {
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
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scaleX(0);
          }
          to {
            opacity: 1;
            transform: scaleX(1);
          }
        }

        @keyframes expandLeft {
          from {
            opacity: 0;
            transform: scaleX(0);
            transform-origin: right;
          }
          to {
            opacity: 1;
            transform: scaleX(1);
            transform-origin: right;
          }
        }

        @keyframes expandRight {
          from {
            opacity: 0;
            transform: scaleX(0);
            transform-origin: left;
          }
          to {
            opacity: 1;
            transform: scaleX(1);
            transform-origin: left;
          }
        }

        @keyframes pingSlow {
          0% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.1;
          }
          50% {
            opacity: 0.05;
          }
          100% {
            transform: translate(-50%, -50%) scale(2);
            opacity: 0;
          }
        }

        @keyframes pulseSlow {
          0%, 100% {
            opacity: 0.03;
            transform: translate(-50%, -50%) scale(1);
          }
          50% {
            opacity: 0.08;
            transform: translate(-50%, -50%) scale(1.05);
          }
        }

        .animate-slide-up {
          animation: slideUp 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
          opacity: 0;
        }

        .animate-scale-in {
          animation: scaleIn 0.6s ease-out forwards;
        }

        .animate-expand-left {
          animation: expandLeft 0.8s ease-out forwards;
        }

        .animate-expand-right {
          animation: expandRight 0.8s ease-out forwards;
        }

        .animate-ping-slow {
          animation: pingSlow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        .animate-pulse-slow {
          animation: pulseSlow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .animation-delay-100 {
          animation-delay: 0.1s;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-300 {
          animation-delay: 0.3s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }

        .animation-delay-500 {
          animation-delay: 0.5s;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
        }
      `}</style>
    </div>
  );
};

export default Loader;