'use client';

import { useState, useEffect } from 'react';

export default function HeroSlider() {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = "Leading supplier of high-grade industrial minerals, rice, spices and dehydrated powders with reliable B2B solutions";

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.substring(0, index + 1));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50); // 50ms per character

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="relative min-h-[50vh] md:min-h-screen overflow-hidden bg-gladia-darkest">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover md:object-cover object-[center_15%]"
      >
        <source src="/images/landing.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[50vh] md:min-h-screen px-4 sm:px-6 lg:px-8 md:-mt-20">
        {/* Tagline with Typing Effect */}
        <h1 className="text-2xl md:text-5xl lg:text-6xl xl:text-7xl text-center text-white font-light leading-tight max-w-6xl" style={{fontFamily: "'Space Grotesk', sans-serif"}}>
          {displayedText}
          <span className="animate-pulse">|</span>
        </h1>
      </div>
    </div>
  );
}
