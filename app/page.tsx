'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { mineralPrices, type MineralCategory } from '@/data/commodityPrices';

// Chemical symbols for periodic table-style cards
const mineralSymbols: { [key: string]: string } = {
  "Iron Ore": "Fe",
  "Bauxite": "Al",
  "Copper Ore": "Cu",
  "Coal (Thermal)": "C",
  "Coal (Metallurgical)": "C",
  "Manganese Ore": "Mn",
  "Chromite": "Cr",
  "Zinc Ore": "Zn",
  "Lead Ore": "Pb",
  "Dolomite": "Mg",
  "Graphite": "C",
  "Bentonite": "Si",
  "Limestone": "Ca",
  "Gypsum": "Ca",
  "Silica Sand": "Si",
  "Feldspar": "K",
  "Mica": "K",
  "Talc": "Mg",
  "China Clay (Kaolin)": "Al",
  "Quartz": "Si"
};

const categories: Array<{ name: MineralCategory | 'All'; icon: string }> = [
  { name: 'All', icon: '🌍' },
  { name: 'Metallic Minerals', icon: '⚙️' },
  { name: 'Non-Metallic Minerals', icon: '💎' },
  { name: 'Energy Minerals', icon: '⚡' }
];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<MineralCategory | 'All'>('All');

  const filteredMinerals = selectedCategory === 'All'
    ? mineralPrices
    : mineralPrices.filter(m => m.category === selectedCategory);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#dcdcdc' }}>
      {/* Dashboard Header */}
      <div className="pt-24 pb-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-3 text-mineral-dark leading-tight">
            Market-Leading Prices on Essential Industrial Minerals
          </h1>
          <p className="text-center text-mineral-dark/70 text-sm sm:text-base">
            Real-time pricing • Verified sources • Integrated logistics solutions
          </p>
        </div>
      </div>

      {/* Category Filter Buttons */}
      <div className="px-4 sm:px-6 lg:px-8 pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`
                  relative overflow-hidden rounded-2xl p-4 sm:p-5 md:p-6 transition-all duration-300 transform
                  ${selectedCategory === category.name
                    ? 'bg-mineral-dark text-mineral-light shadow-2xl scale-105 -translate-y-1'
                    : 'bg-white/80 text-mineral-dark hover:bg-white hover:shadow-xl hover:-translate-y-0.5 shadow-md border border-mineral-dark/5'
                  }
                `}
                style={{
                  boxShadow: selectedCategory === category.name
                    ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(0, 0, 0, 0.05)'
                    : undefined
                }}
              >
                <div className="flex flex-col items-center gap-2 sm:gap-2.5">
                  <span className="text-3xl sm:text-4xl md:text-5xl">{category.icon}</span>
                  <span className="text-xs sm:text-sm md:text-base font-semibold text-center leading-tight">
                    {category.name}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Category Title */}
      <div className="px-4 sm:px-6 lg:px-8 pb-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-mineral-dark">
            {selectedCategory === 'All' ? 'All Minerals' : selectedCategory}
            <span className="ml-2 text-mineral-dark/60 text-base sm:text-lg">
              ({filteredMinerals.length})
            </span>
          </h2>
        </div>
      </div>

      {/* Minerals Grid - Mobile First */}
      <div className="px-2 sm:px-4 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          {/* Grid: 4 columns on mobile, 4 on tablet, 6 on desktop */}
          <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2 sm:gap-3 md:gap-4">
            {filteredMinerals.map((mineral) => {
              const slug = mineral.name.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '');
              const symbol = mineralSymbols[mineral.name] || "?";

              return (
                <Link
                  key={mineral.name}
                  href={`/minerals/${slug}`}
                  className="group"
                >
                  <div className="bg-white/80 backdrop-blur-sm border border-mineral-dark/10 rounded-md sm:rounded-lg overflow-hidden hover:border-mineral-dark/30 hover:shadow-lg hover:shadow-mineral-dark/10 transition-all duration-300 h-full">
                    {/* Image Section */}
                    <div className="relative w-full aspect-square overflow-hidden" style={{ backgroundColor: '#f5f5f5' }}>
                      <Image
                        src={mineral.imageUrl}
                        alt={mineral.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                        sizes="(max-width: 640px) 25vw, (max-width: 768px) 25vw, (max-width: 1024px) 20vw, 16vw"
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent"></div>
                    </div>

                    {/* Content Section - Periodic Table Style */}
                    <div className="p-1.5 sm:p-2 md:p-3">
                      {/* Chemical Symbol - Large and prominent */}
                      <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-1 text-mineral-dark">
                        {symbol}
                      </div>

                      {/* Mineral Name */}
                      <h3 className="text-[9px] sm:text-[10px] md:text-xs font-medium text-mineral-dark text-center mb-1 line-clamp-2 uppercase tracking-wide leading-tight">
                        {mineral.name}
                      </h3>

                      {/* Price */}
                      <div className="text-center">
                        <div className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-mineral-dark">
                          ${mineral.price}
                        </div>
                        <div className="text-[8px] sm:text-[9px] md:text-[10px] text-mineral-dark/50">
                          /{mineral.unit.split('/')[1] || 'MT'}
                        </div>
                      </div>

                      {/* Hover indicator - hidden on very small screens */}
                      <div className="mt-1 sm:mt-2 text-center opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block">
                        <span className="text-[9px] md:text-xs text-mineral-dark">
                          View →
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Footer Info */}
      <div className="py-8 px-4" style={{ backgroundColor: '#947bfd' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl sm:text-3xl font-bold mb-1" style={{ color: '#e9e9e9' }}>
                {mineralPrices.length}+
              </div>
              <div className="text-sm" style={{ color: '#e9e9e9', opacity: 0.9 }}>
                Commodities
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold mb-1" style={{ color: '#e9e9e9' }}>
                100%
              </div>
              <div className="text-sm" style={{ color: '#e9e9e9', opacity: 0.9 }}>
                Transparent Pricing
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold mb-1" style={{ color: '#e9e9e9' }}>
                24/7
              </div>
              <div className="text-sm" style={{ color: '#e9e9e9', opacity: 0.9 }}>
                Global Support
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
