'use client';

export default function HeroSlider() {
  return (
    <div className="relative min-h-[50vh] md:min-h-screen overflow-hidden bg-gladia-darkest pt-28">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/images/landing.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[50vh] md:min-h-screen px-4 sm:px-6 lg:px-8">
        {/* Tagline with Background */}
        <div className="bg-black/70 backdrop-blur-sm px-8 py-6 md:px-12 md:py-10 rounded-2xl border border-white/10">
          <h1 className="text-2xl md:text-5xl lg:text-6xl xl:text-7xl text-center text-white font-light leading-tight max-w-6xl">
            Leading supplier of high-grade industrial minerals, rice, spices and dehydrated powders with reliable B2B solutions
          </h1>
        </div>
      </div>
    </div>
  );
}
