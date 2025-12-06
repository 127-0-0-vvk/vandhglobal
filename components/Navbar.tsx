'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-gladia-darkest/95 backdrop-blur-lg border-b border-gladia-purple/20 shadow-lg rounded-b-3xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-28">
          <div className="flex items-center justify-center ml-8">
            <Link href="/" className="flex items-center justify-center group">
              <img
                src="/images/logo.png"
                alt="VandhGlobal Logo"
                className="h-20 w-20 md:h-24 md:w-24 transform group-hover:scale-110 transition-transform duration-300 object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation - Right-Positioned Card Style */}
          <div className="hidden md:flex items-center absolute left-[60%] transform -translate-x-1/2">
            <div className="flex items-center gap-1 bg-gladia-darkBlue/40 backdrop-blur-sm border border-gladia-purple/20 rounded-2xl p-1.5 shadow-lg">
              <Link
                href="/minerals"
                className="px-5 py-2.5 rounded-xl text-gladia-white/90 hover:text-gladia-white hover:bg-gladia-purple/20 transition-all duration-200 font-light transform hover:scale-105 hover:shadow-lg hover:shadow-gladia-purple/30"
              >
                Minerals
              </Link>
              <Link
                href="/agro/rice"
                className="px-5 py-2.5 rounded-xl text-gladia-white/90 hover:text-gladia-white hover:bg-gladia-purple/20 transition-all duration-200 font-light transform hover:scale-105 hover:shadow-lg hover:shadow-gladia-purple/30"
              >
                Rice
              </Link>
              <Link
                href="/agro/spices"
                className="px-5 py-2.5 rounded-xl text-gladia-white/90 hover:text-gladia-white hover:bg-gladia-purple/20 transition-all duration-200 font-light transform hover:scale-105 hover:shadow-lg hover:shadow-gladia-purple/30"
              >
                Spices
              </Link>
              <Link
                href="/#about"
                className="px-5 py-2.5 rounded-xl text-gladia-white/90 hover:text-gladia-white hover:bg-gladia-purple/20 transition-all duration-200 font-light transform hover:scale-105 hover:shadow-lg hover:shadow-gladia-purple/30"
              >
                About
              </Link>
              <Link
                href="/#contact"
                className="px-5 py-2.5 rounded-xl text-gladia-white/90 hover:text-gladia-white hover:bg-gladia-purple/20 transition-all duration-200 font-light transform hover:scale-105 hover:shadow-lg hover:shadow-gladia-purple/30"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Spacer for layout balance */}
          <div className="hidden md:block w-32"></div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gladia-white focus:outline-none hover:text-gladia-purple transition-colors p-2"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gladia-darkBlue/98 backdrop-blur-lg border-t border-gladia-purple/20 animate-slide-up shadow-lg">
          <div className="px-4 pt-2 pb-3 space-y-2">
            <Link
              href="/minerals"
              className="block px-4 py-3 rounded-lg text-gladia-white/90 hover:bg-gladia-purple/20 hover:text-gladia-white transition-all font-light"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Minerals
            </Link>
            <Link
              href="/agro/rice"
              className="block px-4 py-3 rounded-lg text-gladia-white/90 hover:bg-gladia-purple/20 hover:text-gladia-white transition-all font-light"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Rice
            </Link>
            <Link
              href="/agro/spices"
              className="block px-4 py-3 rounded-lg text-gladia-white/90 hover:bg-gladia-purple/20 hover:text-gladia-white transition-all font-light"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Spices
            </Link>
            <Link
              href="/#about"
              className="block px-4 py-3 rounded-lg text-gladia-white/90 hover:bg-gladia-purple/20 hover:text-gladia-white transition-all font-light"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/#contact"
              className="block px-4 py-3 rounded-lg text-gladia-white/90 hover:bg-gladia-purple/20 hover:text-gladia-white transition-all font-light"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
