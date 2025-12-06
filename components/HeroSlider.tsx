'use client';

import Link from 'next/link';

export default function HeroSlider() {
  return (
    <div className="relative min-h-[600px] md:min-h-[700px] overflow-hidden bg-gradient-to-br from-gladia-darkest via-gladia-darkBlue to-gladia-purple/20">
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gladia-purple/10 via-transparent to-gladia-lightBlue/10 animate-pulse"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center min-h-[600px] md:min-h-[700px]">
        <div className="text-white max-w-4xl animate-slide-in-left py-20">
          <h1 className="text-5xl md:text-7xl font-light mb-6 bg-gradient-to-r from-gladia-purple via-gladia-purpleBlue to-gladia-lightBlue bg-clip-text text-transparent leading-tight">
            VandhGlobal
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gladia-white/90 font-light leading-relaxed">
            Leading supplier of high-grade industrial minerals from operational mines across the globe. Rice and Spices and dehydrated powders with reliable B2B solutions.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            <Link
              href="/minerals"
              className="inline-block bg-gradient-to-r from-gladia-purple to-gladia-purpleBlue text-white px-8 py-4 rounded-xl hover:shadow-xl hover:shadow-gladia-purple/50 transform hover:scale-105 transition-all duration-300 font-normal text-lg"
            >
              Explore Minerals
            </Link>
            <Link
              href="/agro/rice"
              className="inline-block bg-gladia-white text-gladia-darkest px-8 py-4 rounded-xl hover:bg-gladia-white/90 transform hover:scale-105 transition-all duration-300 font-normal text-lg shadow-lg"
            >
              View Rice & Spices
            </Link>
            <Link
              href="/#contact"
              className="inline-block bg-gladia-darkBlue/50 backdrop-blur-sm border border-gladia-purple/30 text-gladia-white px-8 py-4 rounded-xl hover:border-gladia-purple/60 hover:bg-gladia-darkBlue/70 transform hover:scale-105 transition-all duration-300 font-normal text-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative gradient orbs */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-gladia-purple/20 to-gladia-lightBlue/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-gladia-purpleBlue/20 to-gladia-purple/20 rounded-full blur-3xl"></div>
    </div>
  );
}
