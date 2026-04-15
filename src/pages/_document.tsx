import { Html, Head, Main, NextScript } from "next/document";
import React from "react";

export default function Document() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "David Dari Dwam",
    birthDate: "1961",
    deathDate: "2026",
    description:
      "Beloved father, leader, and inspiration. Memorial site celebrating his life and legacy.",
    image:
      "https://olaseni-memorial.netlify.app/assets/images/Olaseni-Babatunde-Olagbaju-4.jpg",
    url: "https://olaseni-memorial.netlify.app/",
  };

  return (
    <Html lang="en">
      <Head>
        {/* SEO Meta Tags */}
        <meta
          name="description"
          content="In loving memory of David Dari Dwam. Celebrating his life, legacy, and the profound impact he made on family and community."
        />
        <meta
          name="keywords"
          content="Olaseni Olagbaju, Babatunde Olagbaju, Olagbaju memorial, obituary, legacy, 1961, 2026"
        />

        {/* Open Graph Meta Tags for Social Media */}
        <meta
          property="og:title"
          content="David Dari Dwam Memorial | 1961-2026"
        />
        <meta
          property="og:description"
          content="Celebrating the life and legacy of David Dari Dwam"
        />
        <meta
          property="og:image"
          content="/assets/images/Olaseni-Babatunde-Olagbaju-4.jpg"
        />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="David Dari Dwam Memorial" />
        <meta
          name="twitter:description"
          content="Celebrating the life and legacy of David Dari Dwam (1961-2026)"
        />
        <meta
          name="twitter:image"
          content="/assets/images/Olaseni-Babatunde-Olagbaju-4.jpg"
        />

        {/* Structured Data for Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
