import { useState } from "react";
import React from "react";
import Loader from "./components/pre-loader";
import Navigation from "./components/navigation-menu";
import HeroSection from "./components/Hero";
import Obituary from "./pages/Obituary";
import Favorites from "./pages/Favorites";
import Eulogies from "./pages/Eulogies";
import Service from "./pages/Service";
import MemoryWall from "./pages/MemoryWall";
import Gallery from "./pages/Gallery";
import Timeline from "./pages/Timeline";
import Funeral from "./pages/Funeral-photos"

// Main App Component
export default function MemorialPage() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <Loader onLoadComplete={() => setIsLoading(false)} />}

      {!isLoading && (
        <>
          <Navigation />
          <HeroSection />
          <Obituary />
          <Eulogies />
          <Timeline />
					<Favorites />
          {/* <Gallery /> */}
          <MemoryWall />
					<Funeral/>
          <Service />
        </>
      )}
    </>
  );
}
