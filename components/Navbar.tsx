'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-gladia-darkest/95 backdrop-blur-lg border-b border-gladia-purple/20 shadow-lg rounded-b-3xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-3 group">
              <Image
                src="/images/logo.png"
                alt="VandhGlobal Logo"
                width={50}
                height={50}
                className="transform group-hover:scale-110 transition-transform duration-300"
              />
              <span className="text-2xl md:text-3xl font-normal bg-gradient-to-r from-gladia-purple via-gladia-purpleBlue to-gladia-lightBlue bg-clip-text text-transparent transform group-hover:scale-105 transition-transform duration-300">VandhGlobal</span>
            </Link>
          </div>

          {/* Desktop Navigation - Centered Card Style */}
          <div className="hidden md:flex items-center absolute left-1/2 transform -translate-x-1/2">
            <div className="flex items-center gap-1 bg-gladia-darkBlue/40 backdrop-blur-sm border border-gladia-purple/20 rounded-2xl p-1.5 shadow-lg">
              <Link
                href="/minerals"
                className="px-5 py-2.5 rounded-xl text-gladia-white/90 hover:text-gladia-white hover:bg-gladia-purple/20 transition-all duration-200 font-light"
              >
                Minerals
              </Link>
              <Link
                href="/agro/rice"
                className="px-5 py-2.5 rounded-xl text-gladia-white/90 hover:text-gladia-white hover:bg-gladia-purple/20 transition-all duration-200 font-light"
              >
                Rice
              </Link>
              <Link
                href="/agro/spices"
                className="px-5 py-2.5 rounded-xl text-gladia-white/90 hover:text-gladia-white hover:bg-gladia-purple/20 transition-all duration-200 font-light"
              >
                Spices
              </Link>
              <Link
                href="/#about"
                className="px-5 py-2.5 rounded-xl text-gladia-white/90 hover:text-gladia-white hover:bg-gladia-purple/20 transition-all duration-200 font-light"
              >
                About
              </Link>
              <Link
                href="/#contact"
                className="px-5 py-2.5 rounded-xl text-gladia-white/90 hover:text-gladia-white hover:bg-gladia-purple/20 transition-all duration-200 font-light"
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
              href="/"
              className="block px-4 py-3 rounded-lg text-gladia-white/90 hover:bg-gladia-purple/20 hover:text-gladia-white transition-all font-light"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
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
              className="block px-4 py-3 rounded-lg bg-gladia-white text-gladia-darkest hover:bg-gladia-white/90 transition-all font-normal text-center shadow-md"
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
