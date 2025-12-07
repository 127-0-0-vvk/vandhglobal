'use client';

import { useState, useEffect } from 'react';

export default function MineImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    '/images/mine1.jpg',
    '/images/mine2.jpg',
    '/images/mine3.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden bg-gladia-darkest">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentIndex
              ? 'opacity-100 translate-x-0'
              : index === (currentIndex - 1 + images.length) % images.length
              ? 'opacity-0 -translate-x-full'
              : 'opacity-0 translate-x-full'
          }`}
        >
          <img
            src={image}
            alt={`Mine ${index + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50"></div>
        </div>
      ))}
    </div>
  );
}
