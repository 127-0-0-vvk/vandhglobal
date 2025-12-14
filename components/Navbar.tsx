'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-mineral-dark/95 backdrop-blur-lg border-b border-mineral-yellow/20 shadow-lg shadow-mineral-orange/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-20 sm:h-24 md:h-28">
          {/* Centered Logo */}
          <Link href="/" className="flex items-center justify-center group">
            <img
              src="/images/logo.png"
              alt="VandhGlobal Logo"
              className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 transform group-hover:scale-110 transition-transform duration-300 object-contain"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
}
