import { mineralPrices, partnerMines } from '@/data/commodityPrices';
import MineralPricingCalculator from '@/components/MineralPricingCalculator';
import MineImageSlider from '@/components/MineImageSlider';

export const metadata = {
  title: 'Minerals Trading | Premium Quality Minerals from Verified Mines | VandhGlobal',
  description: 'Trade in 20+ premium quality minerals from verified mines across India. Iron ore, bauxite, coal, copper, limestone, and more. FOB pricing with complete logistics support.',
};

export default function MineralsPage() {
  return (
    <div className="bg-gladia-darkest min-h-screen pt-28">
      {/* Mine Image Slider */}
      <MineImageSlider />

      {/* Minerals Catalog - Now at the top */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-gladia-darkest via-gladia-darkBlue to-gladia-darkest">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-light text-center mb-4 bg-gradient-to-r from-gladia-purple via-gladia-purpleBlue to-gladia-lightBlue bg-clip-text text-transparent animate-slide-up">Our Minerals</h1>
          <p className="text-center text-gladia-white/70 font-light mb-12 max-w-2xl mx-auto animate-slide-up">
            Trade in 20+ premium quality minerals sourced from verified mines across India
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {mineralPrices.map((mineral, index) => (
              <div
                key={mineral.name}
                className="bg-gladia-darkBlue/50 backdrop-blur-sm rounded-2xl shadow-md hover:shadow-2xl hover:shadow-gladia-purple/20 transform hover:-translate-y-2 transition-all duration-300 border border-gladia-purple/20 overflow-hidden animate-zoom-in group"
                style={{animationDelay: `${index * 0.05}s`}}
              >
                {/* Mineral Image */}
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <img
                    src={mineral.imageUrl}
                    alt={mineral.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gladia-darkest/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-2xl md:text-3xl font-light text-white mb-1">{mineral.name}</h3>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl md:text-3xl font-normal text-white">
                        ${mineral.price.toLocaleString()}
                      </span>
                      <span className="text-xs font-light text-white opacity-90">{mineral.unit}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  {/* Description */}
                  <p className="text-gladia-white/70 font-light text-sm mb-4 leading-relaxed">
                    {mineral.description}
                  </p>

                  {/* Specifications */}
                  <div className="mb-4">
                    <h4 className="font-normal text-gladia-white mb-2 text-sm">Key Specifications</h4>
                    <ul className="space-y-1">
                      {mineral.specifications.slice(0, 3).map((spec, idx) => (
                        <li key={idx} className="flex items-start text-xs font-light">
                          <svg className="w-4 h-4 text-gladia-lightBlue mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gladia-white/70">{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Applications */}
                  <div className="mb-4">
                    <h4 className="font-normal text-gladia-white mb-2 text-sm">Applications</h4>
                    <div className="flex flex-wrap gap-2">
                      {mineral.applications.slice(0, 3).map((app, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gladia-darkest/50 text-gladia-white/70 rounded-full text-xs font-light border border-gladia-purple/30"
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="mt-4 pt-4 border-t border-gladia-purple/20">
                    <a href="#calculator" className="block text-center bg-gradient-to-r from-gladia-purple to-gladia-purpleBlue text-white px-4 py-2 rounded-lg hover:shadow-lg hover:shadow-gladia-purple/30 transition-all duration-300 text-sm font-normal">
                      Get Quote
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Price Calculator Section - Moved below minerals */}
      <section id="calculator" className="py-12 md:py-16 bg-gradient-to-br from-gladia-darkBlue via-gladia-darkest to-gladia-darkBlue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gladia-darkBlue/50 backdrop-blur-sm rounded-2xl shadow-xl p-6 md:p-8 border border-gladia-purple/20">
            <h2 className="text-3xl md:text-4xl font-light text-center mb-8 bg-gradient-to-r from-gladia-purple via-gladia-purpleBlue to-gladia-lightBlue bg-clip-text text-transparent">Get FOB Price</h2>
            <MineralPricingCalculator />
          </div>
        </div>
      </section>

      {/* Quality Assurance Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-gladia-darkest via-gladia-darkBlue to-gladia-darkest">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-light text-center mb-4 bg-gradient-to-r from-gladia-purple via-gladia-purpleBlue to-gladia-lightBlue bg-clip-text text-transparent animate-slide-up">Quality Assurance &amp; Certifications</h2>
          <p className="text-center text-gladia-white/70 font-light mb-12 max-w-2xl mx-auto">
            Every shipment meets international quality standards with complete documentation
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-gladia-darkBlue/50 backdrop-blur-sm rounded-2xl shadow-md hover:shadow-xl hover:shadow-gladia-purple/20 p-8 text-center transition-all duration-300 border border-gladia-purple/20 transform hover:-translate-y-2">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-gladia-lightBlue to-gladia-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-normal mb-3 text-gladia-white">ISO Certified Suppliers</h3>
              <p className="text-gladia-white/70 font-light text-sm md:text-base">
                All our mining partners are ISO certified and comply with international quality standards.
              </p>
            </div>

            <div className="bg-gladia-darkBlue/50 backdrop-blur-sm rounded-2xl shadow-md hover:shadow-xl hover:shadow-gladia-purple/20 p-8 text-center transition-all duration-300 border border-gladia-purple/20 transform hover:-translate-y-2">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-gladia-purple to-gladia-purpleBlue rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 008 10.586V5L7 4z" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-normal mb-3 text-gladia-white">Third-Party Testing</h3>
              <p className="text-gladia-white/70 font-light text-sm md:text-base">
                Every shipment undergoes independent laboratory testing for quality verification.
              </p>
            </div>

            <div className="bg-gladia-darkBlue/50 backdrop-blur-sm rounded-2xl shadow-md hover:shadow-xl hover:shadow-gladia-purple/20 p-8 text-center transition-all duration-300 border border-gladia-purple/20 transform hover:-translate-y-2">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-gladia-purpleBlue to-gladia-lightPurple rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-normal mb-3 text-gladia-white">Complete Documentation</h3>
              <p className="text-gladia-white/70 font-light text-sm md:text-base">
                Full export documentation support including certificates of origin and analysis.
              </p>
            </div>
          </div>
        </div>
      </section>

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
