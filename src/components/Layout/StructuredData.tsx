import Script from 'next/script';

const StructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Olaseni Babatunde Olagbaju",
    "birthDate": "1951",
    "deathDate": "2025",
    "description": "Beloved father, leader, and inspiration. Memorial site celebrating his life and legacy.",
    "image": "https://olaseni-memorial.netlify.app/assets/images/Olaseni-Babatunde-Olagbaju-4.jpg",
    "url": "https://olaseni-memorial.netlify.app/"
  };

  return (
    <Script
      id="person-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      strategy="beforeInteractive"
    />
  );
};

export default StructuredData;