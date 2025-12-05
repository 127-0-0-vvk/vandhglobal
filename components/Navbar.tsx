'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-primary-dark text-white shadow-2xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center group">
              <span className="text-3xl font-bold text-primary-lightblue transform group-hover:scale-110 transition-transform duration-300">VandhGlobal</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="hover:text-primary-lightblue transition-colors duration-200 font-medium transform hover:scale-110"
            >
              Home
            </Link>
            <Link
              href="/minerals"
              className="hover:text-primary-lightblue transition-colors duration-200 font-medium transform hover:scale-110"
            >
              Minerals
            </Link>
            <Link
              href="/agro/rice"
              className="hover:text-primary-lightblue transition-colors duration-200 font-medium transform hover:scale-110"
            >
              Rice
            </Link>
            <Link
              href="/agro/spices"
              className="hover:text-primary-lightblue transition-colors duration-200 font-medium transform hover:scale-110"
            >
              Spices & Powders
            </Link>
            <Link
              href="/#about"
              className="hover:text-primary-lightblue transition-colors duration-200 font-medium transform hover:scale-110"
            >
              About Us
            </Link>
            <Link
              href="/#contact"
              className="bg-primary-blue text-white px-6 py-2 rounded-lg hover:bg-primary-lightblue transform hover:scale-110 transition-all duration-200 font-medium shadow-lg"
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white focus:outline-none hover:text-primary-lightblue transition-colors"
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
        <div className="md:hidden bg-primary-dark bg-opacity-95 backdrop-blur-sm animate-slide-up">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md text-white hover:bg-primary-blue transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/minerals"
              className="block px-3 py-2 rounded-md text-white hover:bg-primary-blue transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Minerals Trading
            </Link>
            <Link
              href="/agro/rice"
              className="block px-3 py-2 rounded-md text-white hover:bg-primary-blue transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Rice Trading
            </Link>
            <Link
              href="/agro/spices"
              className="block px-3 py-2 rounded-md text-white hover:bg-primary-blue transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Spices & Powders
            </Link>
            <Link
              href="/#about"
              className="block px-3 py-2 rounded-md text-white hover:bg-primary-blue transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/#contact"
              className="block px-3 py-2 rounded-md text-white hover:bg-primary-blue transition-colors"
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
