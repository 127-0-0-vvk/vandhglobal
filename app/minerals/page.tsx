import { mineralPrices, partnerMines } from '@/data/commodityPrices';
import MineImageSlider from '@/components/MineImageSlider';
import QualityAssuranceSection from '@/components/QualityAssuranceSection';

export const metadata = {
  title: 'Minerals Trading | Premium Quality Minerals from Verified Mines | VandhGlobal',
  description: 'Trade in 20+ premium quality minerals from verified mines across India. Iron ore, bauxite, coal, copper, limestone, and more. FOB pricing with complete logistics support.',
};

export default function MineralsPage() {
  return (
    <div className="bg-gladia-darkest min-h-screen pt-28">
      {/* Mine Image Slider */}
      <MineImageSlider />

      {/* Products Section */}
      <section className="py-6 md:py-8 bg-gradient-to-br from-gladia-darkest via-gladia-darkBlue to-gladia-darkest">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-light text-center mb-4 bg-gradient-to-r from-gladia-purple via-gladia-purpleBlue to-gladia-lightBlue bg-clip-text text-transparent animate-slide-up">Products</h1>
          <p className="text-center text-gladia-white/70 font-light mb-12 max-w-2xl mx-auto animate-slide-up">
            Trade in 20+ premium quality minerals sourced from verified mines across India
          </p>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-3 md:gap-4">
            {mineralPrices.map((mineral, index) => {
              const priceChange = (Math.random() * 5 - 2.5).toFixed(2);
              const isUp = parseFloat(priceChange) > 0;
              const slug = mineral.name.toLowerCase().replace(/\s+/g, '-');

              return (
                <a
                  key={mineral.name}
                  href={`/minerals/${slug}`}
                  className="bg-gladia-darkBlue/50 backdrop-blur-sm rounded-xl shadow-md hover:shadow-xl hover:shadow-gladia-purple/20 transform hover:-translate-y-1 transition-all duration-300 border border-gladia-purple/20 overflow-hidden group cursor-pointer"
                  style={{animationDelay: `${index * 0.02}s`}}
                >
                  {/* Mineral Image */}
                  <div className="relative h-24 md:h-32 overflow-hidden">
                    <img
                      src={mineral.imageUrl}
                      alt={mineral.name}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gladia-darkest/90 to-transparent"></div>
                  </div>

                  <div className="p-2 md:p-3">
                    <h3 className="text-xs md:text-sm font-normal text-white mb-1 truncate">{mineral.name}</h3>
                    <div className="flex items-baseline gap-1 mb-1">
                      <span className="text-sm md:text-base font-normal text-white">
                        ${mineral.price.toLocaleString()}
                      </span>
                      <span className="text-[10px] font-light text-white/70">/{mineral.unit}</span>
                    </div>
                    {/* Price Change Indicator */}
                    <div className={`flex items-center gap-1 text-xs ${isUp ? 'text-green-400' : 'text-red-400'}`}>
                      {isUp ? (
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                      <span className="font-medium">{Math.abs(parseFloat(priceChange))}%</span>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quality Assurance Section */}
      <QualityAssuranceSection />

      {/* Partner Mines Network */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-gladia-darkBlue via-gladia-darkest to-gladia-darkBlue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-light text-center mb-4 bg-gradient-to-r from-gladia-purple via-gladia-purpleBlue to-gladia-lightBlue bg-clip-text text-transparent animate-slide-up">Our Mining Network</h2>
          <p className="text-center text-gladia-white/70 font-light mb-12 max-w-3xl mx-auto">
            We have established partnerships with 24+ premium mines across India, ensuring consistent supply of high-quality minerals.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {partnerMines.map((mine, index) => (
              <div
                key={mine.name}
                className="bg-gladia-darkBlue/50 backdrop-blur-sm rounded-2xl p-4 md:p-6 shadow-md hover:shadow-xl hover:shadow-gladia-purple/20 transform hover:-translate-y-2 transition-all duration-300 border border-gladia-purple/20 animate-slide-up"
                style={{animationDelay: `${index * 0.03}s`}}
              >
                <div className="flex items-start mb-3">
                  <svg className="w-5 h-5 text-gladia-lightBlue mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <div className="flex-1">
                    <h3 className="font-normal text-gladia-white text-base md:text-lg mb-1">{mine.name}</h3>
                    <p className="text-sm text-gladia-white/70 font-light">{mine.location}, {mine.state}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex flex-wrap gap-1">
                    {mine.minerals.map((mineral, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-gradient-to-r from-gladia-purple to-gladia-purpleBlue text-white rounded text-xs font-light"
                      >
                        {mineral}
                      </span>
                    ))}
                  </div>
                  {mine.capacity && (
                    <p className="text-xs text-gladia-white/70 font-light">
                      <span className="font-normal">Capacity:</span> {mine.capacity}
                    </p>
                  )}
                  {mine.established && (
                    <p className="text-xs text-gladia-white/70 font-light">
                      <span className="font-normal">Established:</span> {mine.established}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Export Ports Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-gladia-darkest via-gladia-darkBlue to-gladia-darkest">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-light text-center mb-4 bg-gradient-to-r from-gladia-purple via-gladia-purpleBlue to-gladia-lightBlue bg-clip-text text-transparent animate-slide-up">Export Ports Network</h2>
          <p className="text-center text-gladia-white/70 font-light mb-12 max-w-2xl mx-auto">
            Strategic access to major Indian ports for seamless international shipping
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {[
              { name: "Mundra Port", state: "Gujarat" },
              { name: "JNPT (Nhava Sheva)", state: "Maharashtra" },
              { name: "Paradip Port", state: "Odisha" },
              { name: "Visakhapatnam Port", state: "Andhra Pradesh" },
              { name: "Chennai Port", state: "Tamil Nadu" },
              { name: "Kandla Port", state: "Gujarat" },
              { name: "Cochin Port", state: "Kerala" },
              { name: "Kolkata Port", state: "West Bengal" },
              { name: "Tuticorin Port", state: "Tamil Nadu" },
              { name: "Mormugao Port", state: "Goa" }
            ].map((port, index) => (
              <div
                key={port.name}
                className="bg-gladia-darkBlue/50 backdrop-blur-sm rounded-2xl p-4 shadow-md hover:shadow-xl hover:shadow-gladia-purple/20 transform hover:-translate-y-1 transition-all duration-300 border border-gladia-purple/20 text-center animate-zoom-in"
                style={{animationDelay: `${index * 0.05}s`}}
              >
                <svg className="w-8 h-8 md:w-10 md:h-10 text-gladia-lightBlue mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <h3 className="font-normal text-gladia-white text-sm mb-1">{port.name}</h3>
                <p className="text-xs text-gladia-white/70 font-light">{port.state}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-gladia-darkBlue via-gladia-darkest to-gladia-darkBlue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-light mb-6 bg-gradient-to-r from-gladia-purple via-gladia-purpleBlue to-gladia-lightBlue bg-clip-text text-transparent">Ready to Start Trading?</h2>
          <p className="text-lg md:text-xl mb-8 font-light text-gladia-white/70">
            Contact us for detailed quotations, sample requests, or partnership inquiries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/#contact" className="bg-gradient-to-r from-gladia-purple to-gladia-purpleBlue text-white px-8 py-3 rounded-lg hover:shadow-lg hover:shadow-gladia-purple/30 transition-all duration-300 transform hover:scale-105 font-normal">
              Get a Quote
            </a>
            <a href="/#contact" className="bg-gladia-white text-gladia-darkest px-8 py-3 rounded-lg hover:bg-gladia-white/90 transition-all duration-300 transform hover:scale-105 shadow-lg font-normal">
              Request Samples
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
