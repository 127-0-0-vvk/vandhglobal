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
    <div className="min-h-screen bg-mineral-dark">
      {/* Dashboard Header */}
      <div className="pt-24 pb-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 text-mineral-light">
            Commodity Trading Dashboard
          </h1>
          <p className="text-center text-mineral-light/70 text-sm sm:text-base">
            Real-time pricing • Verified sources • Global delivery
          </p>
        </div>
      </div>

      {/* Category Filter Buttons */}
      <div className="px-4 sm:px-6 lg:px-8 pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`
                  relative overflow-hidden rounded-lg p-3 sm:p-4 transition-all duration-300
                  ${selectedCategory === category.name
                    ? 'bg-mineral-orange text-mineral-dark shadow-lg shadow-mineral-orange/30 scale-105'
                    : 'bg-mineral-light/10 text-mineral-light hover:bg-mineral-light/20 border border-mineral-yellow/20'
                  }
                `}
              >
                <div className="flex flex-col items-center gap-1.5 sm:gap-2">
                  <span className="text-2xl sm:text-3xl">{category.icon}</span>
                  <span className="text-xs sm:text-sm md:text-base font-medium text-center leading-tight">
                    {category.name}
                  </span>
                  {selectedCategory === category.name && (
                    <div className="absolute inset-0 bg-gradient-to-br from-mineral-yellow/20 to-transparent pointer-events-none"></div>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Category Title */}
      <div className="px-4 sm:px-6 lg:px-8 pb-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-mineral-yellow">
            {selectedCategory === 'All' ? 'All Minerals' : selectedCategory}
            <span className="ml-2 text-mineral-light/60 text-base sm:text-lg">
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
                  <div className="bg-mineral-light/5 backdrop-blur-sm border border-mineral-yellow/20 rounded-md sm:rounded-lg overflow-hidden hover:border-mineral-orange/70 hover:shadow-lg hover:shadow-mineral-orange/20 transition-all duration-300 h-full">
                    {/* Image Section */}
                    <div className="relative w-full aspect-square overflow-hidden bg-mineral-dark/50">
                      <Image
                        src={mineral.imageUrl}
                        alt={mineral.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                        sizes="(max-width: 640px) 25vw, (max-width: 768px) 25vw, (max-width: 1024px) 20vw, 16vw"
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-mineral-dark via-transparent to-transparent opacity-60"></div>
                    </div>

                    {/* Content Section - Periodic Table Style */}
                    <div className="p-1.5 sm:p-2 md:p-3">
                      {/* Chemical Symbol - Large and prominent */}
                      <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-1 text-mineral-orange">
                        {symbol}
                      </div>

                      {/* Mineral Name */}
                      <h3 className="text-[9px] sm:text-[10px] md:text-xs font-medium text-mineral-light text-center mb-1 line-clamp-2 uppercase tracking-wide leading-tight">
                        {mineral.name}
                      </h3>

                      {/* Price */}
                      <div className="text-center">
                        <div className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-mineral-yellow">
                          ${mineral.price}
                        </div>
                        <div className="text-[8px] sm:text-[9px] md:text-[10px] text-mineral-light/40">
                          /{mineral.unit.split('/')[1] || 'MT'}
                        </div>
                      </div>

                      {/* Hover indicator - hidden on very small screens */}
                      <div className="mt-1 sm:mt-2 text-center opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block">
                        <span className="text-[9px] md:text-xs text-mineral-orange">
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
      <div className="border-t border-mineral-yellow/20 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-mineral-orange mb-1">
                {mineralPrices.length}+
              </div>
              <div className="text-sm text-mineral-light/60">
                Commodities
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-mineral-yellow mb-1">
                100%
              </div>
              <div className="text-sm text-mineral-light/60">
                Transparent Pricing
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-mineral-orange mb-1">
                24/7
              </div>
              <div className="text-sm text-mineral-light/60">
                Global Support
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
