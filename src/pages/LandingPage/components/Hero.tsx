"use client";
import React from "react";
import Image from "next/image";
import HeroImage from "../../../../public/assets/images/Olaseni-Babatunde-Olagbaju-4.jpg";

const HeroSection = () => {
  return (
    <section 
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white pt-20"
      aria-label="Memorial hero section"
    >
      <div className="container mx-auto px-4 text-center">
        {/* SEO: Added descriptive text before H1 */}
        <p className="text-gray-600 text-lg mb-1 mt-5 font-light animate-fade-in">
          In Loving Memory - He Will Forever Be Missed
        </p>
        
        <div className="text-center">
          {/* SEO: H1 with full name and memorial keyword */}
          <h1 className="text-3xl md:text-4xl uppercase font-semibold animate-fade-in-up inline-block pb-2">
            Olaseni Babatunde Olagbaju Memorial
          </h1>
          <div className="h-[5px] bg-gradient-to-r from-transparent via-[#fcbb68] to-transparent divider-line mx-auto rounded"></div>
        </div>

        {/* SEO: Added descriptive subtitle with dates and keywords */}
        <h2 className="text-xl md:text-2xl text-gray-700 mt-4 mb-2 font-light">
          Celebrating the Life and Legacy of Olaseni Babatunde Olagbaju
        </h2>
        <p className="text-gray-600 font-normal text-base md:text-lg mb-6">
          1951 - 2025 | Beloved Father, Grand Father, Leader, and Inspiration
        </p>

        <div className="flex flex-col mt-5 md:flex-row items-center justify-center gap-8 md:gap-16 max-w-5xl mx-auto">
          {/* SEO: Added semantic meaning to dates */}
          <div 
            className="text-6xl md:text-8xl font-bold animate-fade-in-left"
            aria-label="Birth year"
          >
            <time dateTime="1951">1951</time>
          </div>
          
          <div className="w-64 h-96 md:w-80 md:h-[500px] rounded-lg overflow-hidden shadow-2xl animate-fade-in-up relative">
            {/* SEO: Detailed alt text with full name and context */}
            <Image
              src={HeroImage}
              alt="Olaseni Babatunde Olagbaju memorial portrait photo"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 256px, 320px"
            />
          </div>
          
          <div 
            className="text-6xl md:text-8xl font-bold animate-fade-in-right"
            aria-label="Year of passing"
          >
            <time dateTime="2025">2025</time>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;