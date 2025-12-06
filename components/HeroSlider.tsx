'use client';

export default function HeroSlider() {
  return (
    <div className="relative min-h-[70vh] md:min-h-screen overflow-hidden bg-gladia-darkest">
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
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[70vh] md:min-h-screen px-4 sm:px-6 lg:px-8">
        {/* Blinking Logo */}
        <img
          src="/images/logoname.svg"
          alt="VandhGlobal"
          className="logo-blink w-48 md:w-80 lg:w-[500px] mb-6 md:mb-8 object-contain"
        />

        {/* Tagline */}
        <p className="text-base md:text-xl lg:text-2xl text-center text-white font-light leading-relaxed max-w-4xl px-4">
          Leading supplier of high-grade industrial minerals, Rice, Spices and dehydrated powders with reliable B2B solutions
        </p>
      </div>
    </div>
  );
}
