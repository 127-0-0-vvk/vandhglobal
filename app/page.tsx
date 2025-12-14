import Link from 'next/link';
import Image from 'next/image';
import { mineralPrices } from '@/data/commodityPrices';

// Add chemical symbols for periodic table-style cards
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
  "Bentonite": "Si"
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gladia-darkest">
      {/* Dashboard Header */}
      <div className="pt-24 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-center mb-3 bg-gradient-to-r from-gladia-purple via-gladia-purpleBlue to-gladia-lightBlue bg-clip-text text-transparent">
            Commodity Trading Dashboard
          </h1>
          <p className="text-center text-gladia-white/60 text-sm sm:text-base">
            Real-time pricing • Verified sources • Global delivery
          </p>
        </div>
      </div>

      {/* Minerals Grid - Mobile First */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          {/* Grid: 2 columns on mobile, 3 on tablet, 4 on desktop */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {mineralPrices.map((mineral) => {
              const slug = mineral.name.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '');
              const symbol = mineralSymbols[mineral.name] || "?";

              return (
                <Link
                  key={mineral.name}
                  href={`/minerals/${slug}`}
                  className="group"
                >
                  <div className="bg-gladia-darkest/60 backdrop-blur-sm border border-gladia-purple/20 rounded-lg overflow-hidden hover:border-gladia-lightBlue/50 hover:shadow-lg hover:shadow-gladia-purple/20 transition-all duration-300 h-full">
                    {/* Image Section */}
                    <div className="relative w-full aspect-square overflow-hidden bg-gladia-darkBlue/30">
                      <Image
                        src={mineral.imageUrl}
                        alt={mineral.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                        sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-gladia-darkest via-transparent to-transparent opacity-60"></div>
                    </div>

                    {/* Content Section - Periodic Table Style */}
                    <div className="p-3 sm:p-4">
                      {/* Chemical Symbol - Large and prominent */}
                      <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-2 bg-gradient-to-br from-gladia-lightBlue to-gladia-purple bg-clip-text text-transparent">
                        {symbol}
                      </div>

                      {/* Mineral Name */}
                      <h3 className="text-xs sm:text-sm md:text-base font-medium text-gladia-white text-center mb-2 line-clamp-2 uppercase tracking-wide">
                        {mineral.name}
                      </h3>

                      {/* Price */}
                      <div className="text-center">
                        <div className="text-lg sm:text-xl md:text-2xl font-semibold text-gladia-lightBlue">
                          ${mineral.price}
                        </div>
                        <div className="text-xs text-gladia-white/40">
                          per {mineral.unit.split('/')[1] || 'MT'}
                        </div>
                      </div>

                      {/* Hover indicator */}
                      <div className="mt-3 text-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-xs text-gladia-purple">
                          View Details →
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
      <div className="border-t border-gladia-purple/20 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-gladia-lightBlue mb-1">
                {mineralPrices.length}+
              </div>
              <div className="text-sm text-gladia-white/60">
                Commodities
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-gladia-purple mb-1">
                100%
              </div>
              <div className="text-sm text-gladia-white/60">
                Transparent Pricing
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-gladia-purpleBlue mb-1">
                24/7
              </div>
              <div className="text-sm text-gladia-white/60">
                Global Support
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
