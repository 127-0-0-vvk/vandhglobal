'use client';

import { useState, useEffect } from 'react';
import { mineralPrices } from '@/data/commodityPrices';
import { ricePrices } from '@/data/commodityPrices';
import { spicePrices } from '@/data/commodityPrices';

interface PriceData {
  name: string;
  price: number;
  unit: string;
  change: number; // percentage change
  isUp: boolean;
}

export default function PriceTicker() {
  const [priceData, setPriceData] = useState<PriceData[]>([]);

  useEffect(() => {
    // Combine selected commodities for ticker
    const tickerItems: PriceData[] = [
      // Top minerals
      { name: 'Iron Ore', price: mineralPrices[0]?.price || 0, unit: mineralPrices[0]?.unit || '', change: Math.random() * 5 - 2.5, isUp: Math.random() > 0.5 },
      { name: 'Bauxite', price: mineralPrices[1]?.price || 0, unit: mineralPrices[1]?.unit || '', change: Math.random() * 5 - 2.5, isUp: Math.random() > 0.5 },
      { name: 'Coal', price: mineralPrices[3]?.price || 0, unit: mineralPrices[3]?.unit || '', change: Math.random() * 5 - 2.5, isUp: Math.random() > 0.5 },
      // Top rice varieties
      { name: '1121 Basmati', price: ricePrices[0]?.price || 0, unit: ricePrices[0]?.unit || '', change: Math.random() * 5 - 2.5, isUp: Math.random() > 0.5 },
      { name: 'Pusa Basmati', price: ricePrices[1]?.price || 0, unit: ricePrices[1]?.unit || '', change: Math.random() * 5 - 2.5, isUp: Math.random() > 0.5 },
      // Top spices
      { name: 'Turmeric', price: spicePrices[0]?.price || 0, unit: spicePrices[0]?.unit || '', change: Math.random() * 5 - 2.5, isUp: Math.random() > 0.5 },
      { name: 'Cumin', price: spicePrices[1]?.price || 0, unit: spicePrices[1]?.unit || '', change: Math.random() * 5 - 2.5, isUp: Math.random() > 0.5 },
      { name: 'Black Pepper', price: spicePrices[4]?.price || 0, unit: spicePrices[4]?.unit || '', change: Math.random() * 5 - 2.5, isUp: Math.random() > 0.5 },
    ];

    setPriceData(tickerItems);

    // Update prices every 24 hours (simulated with random changes)
    const updateInterval = setInterval(() => {
      setPriceData(prev => prev.map(item => ({
        ...item,
        change: Math.random() * 5 - 2.5,
        isUp: Math.random() > 0.5
      })));
    }, 86400000); // 24 hours in milliseconds

    return () => clearInterval(updateInterval);
  }, []);

  return (
    <div className="bg-gladia-darkBlue/60 backdrop-blur-md border-b border-gladia-purple/30 py-2 overflow-hidden">
      <div className="animate-scroll flex items-center gap-8 whitespace-nowrap">
        {/* Duplicate items for seamless loop */}
        {[...priceData, ...priceData, ...priceData].map((item, index) => (
          <div key={index} className="flex items-center gap-2 px-4">
            <span className="text-gladia-white/90 font-normal text-sm">
              {item.name}
            </span>
            <span className="text-gladia-white font-medium text-sm">
              ${item.price.toLocaleString()}/{item.unit}
            </span>
            <span className={`flex items-center gap-1 text-xs font-medium ${
              item.isUp ? 'text-green-400' : 'text-red-400'
            }`}>
              {item.isUp ? (
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              )}
              {Math.abs(item.change).toFixed(2)}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
