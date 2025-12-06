'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const heroSlides = [
  {
    image: 'https://images.pexels.com/photos/60008/pexels-photo-60008.jpeg?auto=compress&cs=tinysrgb&w=1920',
    title: 'Premium Minerals Trading',
    subtitle: 'Iron Ore, Bauxite, Coal & More',
    description: 'Sourced from verified mines across India',
    cta: 'Explore Minerals',
    link: '/minerals'
  },
  {
    image: 'https://images.pexels.com/photos/4110256/pexels-photo-4110256.jpeg?auto=compress&cs=tinysrgb&w=1920',
    title: 'Premium Basmati Rice',
    subtitle: '1121, Pusa, Sugandha & More Varieties',
    description: 'Export quality from certified mills',
    cta: 'Explore Rice',
    link: '/agro/rice'
  },
  {
    image: 'https://images.pexels.com/photos/5336701/pexels-photo-5336701.jpeg?auto=compress&cs=tinysrgb&w=1920',
    title: 'Premium Spices & Powders',
    subtitle: 'Turmeric, Cumin, Dehydrated Vegetables',
    description: 'Direct from India&apos;s spice belt',
    cta: 'Explore Spices',
    link: '/agro/spices'
  },
  {
    image: 'https://images.pexels.com/photos/4110256/pexels-photo-4110256.jpeg?auto=compress&cs=tinysrgb&w=1920',
    title: 'Rice Mills & Processing',
    subtitle: 'State-of-the-art facilities',
    description: 'Modern processing with quality assurance',
    cta: 'Learn More',
    link: '/#about'
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 2500); // Change every 2.5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[600px] md:h-[700px] overflow-hidden">
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
          style={{
            backgroundImage: `linear-gradient(rgba(34, 34, 34, 0.6), rgba(34, 34, 34, 0.4)), url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="text-white max-w-3xl animate-slide-in-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
                {slide.title}
              </h1>
              <p className="text-2xl md:text-3xl mb-3 text-primary-lightblue font-semibold drop-shadow-md">
                {slide.subtitle}
              </p>
              <p className="text-xl md:text-2xl mb-8 drop-shadow-md text-primary-cream">
                {slide.description}
              </p>
              <Link
                href={slide.link}
                className="inline-block bg-primary-blue text-white px-8 py-4 rounded-lg hover:bg-primary-lightblue transform hover:scale-110 transition-all duration-300 shadow-2xl font-semibold text-lg"
              >
                {slide.cta}
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-primary-blue w-8'
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
