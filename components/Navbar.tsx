'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-primary-dark text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-primary-accent">VandhGlobal</span>
              <span className="ml-2 text-sm text-primary-lighter hidden md:block">
                Commodity Trading Excellence
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="hover:text-primary-accent transition-colors duration-200 font-medium"
            >
              Home
            </Link>
            <div className="relative group">
              <button className="hover:text-primary-accent transition-colors duration-200 font-medium flex items-center">
                Minerals
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link
                  href="/minerals"
                  className="block px-4 py-2 text-primary-dark hover:bg-primary-lighter transition-colors"
                >
                  All Minerals
                </Link>
              </div>
            </div>
            <div className="relative group">
              <button className="hover:text-primary-accent transition-colors duration-200 font-medium flex items-center">
                Agri Products
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link
                  href="/agro/rice"
                  className="block px-4 py-2 text-primary-dark hover:bg-primary-lighter transition-colors"
                >
                  Rice
                </Link>
                <Link
                  href="/agro/spices"
                  className="block px-4 py-2 text-primary-dark hover:bg-primary-lighter transition-colors"
                >
                  Spices & Powders
                </Link>
              </div>
            </div>
            <Link
              href="/#about"
              className="hover:text-primary-accent transition-colors duration-200 font-medium"
            >
              About Us
            </Link>
            <Link
              href="/#contact"
              className="bg-primary-accent text-primary-dark px-6 py-2 rounded-lg hover:bg-opacity-90 transition-all duration-200 font-medium"
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white focus:outline-none"
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
        <div className="md:hidden bg-primary-medium">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md text-white hover:bg-primary-dark transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/minerals"
              className="block px-3 py-2 rounded-md text-white hover:bg-primary-dark transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Minerals Trading
            </Link>
            <Link
              href="/agro/rice"
              className="block px-3 py-2 rounded-md text-white hover:bg-primary-dark transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Rice Trading
            </Link>
            <Link
              href="/agro/spices"
              className="block px-3 py-2 rounded-md text-white hover:bg-primary-dark transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Spices & Powders
            </Link>
            <Link
              href="/#about"
              className="block px-3 py-2 rounded-md text-white hover:bg-primary-dark transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/#contact"
              className="block px-3 py-2 rounded-md text-white hover:bg-primary-dark transition-colors"
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
