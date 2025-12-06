'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 border-b-2 border-primary-tan">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center group">
              <span className="text-3xl font-bold text-primary-brown transform group-hover:scale-110 transition-transform duration-300">VandhGlobal</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            <Link
              href="/"
              className="px-4 py-2 rounded-full hover:bg-primary-cream text-primary-dark hover:text-primary-brown transition-all duration-200 font-medium transform hover:scale-105"
            >
              Home
            </Link>
            <Link
              href="/minerals"
              className="px-4 py-2 rounded-full hover:bg-primary-cream text-primary-dark hover:text-primary-brown transition-all duration-200 font-medium transform hover:scale-105"
            >
              Minerals
            </Link>
            <Link
              href="/agro/rice"
              className="px-4 py-2 rounded-full hover:bg-primary-cream text-primary-dark hover:text-primary-brown transition-all duration-200 font-medium transform hover:scale-105"
            >
              Rice
            </Link>
            <Link
              href="/agro/spices"
              className="px-4 py-2 rounded-full hover:bg-primary-cream text-primary-dark hover:text-primary-brown transition-all duration-200 font-medium transform hover:scale-105"
            >
              Spices & Powders
            </Link>
            <Link
              href="/#about"
              className="px-4 py-2 rounded-full hover:bg-primary-cream text-primary-dark hover:text-primary-brown transition-all duration-200 font-medium transform hover:scale-105"
            >
              About Us
            </Link>
            <Link
              href="/#contact"
              className="ml-2 bg-primary-brown text-white px-6 py-2 rounded-full hover:bg-opacity-90 transform hover:scale-105 transition-all duration-200 font-medium shadow-lg hover:shadow-xl"
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-primary-dark focus:outline-none hover:text-primary-brown transition-colors p-2"
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
        <div className="md:hidden bg-white border-t border-primary-tan animate-slide-up shadow-lg">
          <div className="px-4 pt-2 pb-3 space-y-2">
            <Link
              href="/"
              className="block px-4 py-3 rounded-lg text-primary-dark hover:bg-primary-cream hover:text-primary-brown transition-all font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/minerals"
              className="block px-4 py-3 rounded-lg text-primary-dark hover:bg-primary-cream hover:text-primary-brown transition-all font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Minerals Trading
            </Link>
            <Link
              href="/agro/rice"
              className="block px-4 py-3 rounded-lg text-primary-dark hover:bg-primary-cream hover:text-primary-brown transition-all font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Rice Trading
            </Link>
            <Link
              href="/agro/spices"
              className="block px-4 py-3 rounded-lg text-primary-dark hover:bg-primary-cream hover:text-primary-brown transition-all font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Spices & Powders
            </Link>
            <Link
              href="/#about"
              className="block px-4 py-3 rounded-lg text-primary-dark hover:bg-primary-cream hover:text-primary-brown transition-all font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/#contact"
              className="block px-4 py-3 rounded-lg bg-primary-brown text-white hover:bg-opacity-90 transition-all font-medium text-center"
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
