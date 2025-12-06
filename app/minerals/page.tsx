import { mineralPrices, partnerMines } from '@/data/commodityPrices';
import MineralPricingCalculator from '@/components/MineralPricingCalculator';

export const metadata = {
  title: 'Minerals Trading | Premium Quality Minerals from Verified Mines | VandhGlobal',
  description: 'Trade in 20+ premium quality minerals from verified mines across India. Iron ore, bauxite, coal, copper, limestone, and more. FOB pricing with complete logistics support.',
};

export default function MineralsPage() {
  return (
    <div className="bg-primary-cream min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-dark via-primary-brown to-primary-tan text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-slide-up">Minerals Trading</h1>
          <p className="text-xl md:text-3xl mb-4 text-primary-cream animate-slide-up" style={{animationDelay: '0.1s'}}>
            Premium Quality Minerals from Verified Mines
          </p>
          <p className="text-base md:text-lg max-w-3xl animate-slide-up" style={{animationDelay: '0.2s'}}>
            We source high-grade minerals from 24+ certified partner mines across India with comprehensive quality assurance and complete documentation support. All our mining partners undergo rigorous due diligence to ensure compliance with environmental and safety standards.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 animate-slide-up" style={{animationDelay: '0.3s'}}>
            <a href="#calculator" className="btn-primary text-center">
              Calculate FOB Price
            </a>
            <a href="#catalog" className="bg-white text-primary-dark px-6 py-3 rounded-lg hover:bg-primary-cream transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-center">
              View Minerals Catalog
            </a>
          </div>
        </div>
      </section>

      {/* Price Calculator Section */}
      <section id="calculator" className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-slide-up">
            <MineralPricingCalculator />
          </div>
        </div>
      </section>

      {/* Minerals Catalog */}
      <section id="catalog" className="py-12 md:py-16 bg-primary-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-primary-dark animate-slide-up">Our Minerals Catalog</h2>
          <p className="text-center text-primary-dark mb-12 max-w-2xl mx-auto animate-slide-up">
            Trade in 20+ premium quality minerals sourced from verified mines across India
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {mineralPrices.map((mineral, index) => (
              <div
                key={mineral.name}
                className="card-interactive animate-zoom-in"
                style={{animationDelay: `${index * 0.05}s`}}
              >
                {/* Header */}
                <div className="mb-4">
                  <h3 className="text-xl md:text-2xl font-bold text-primary-dark mb-2">{mineral.name}</h3>
                  <div className="bg-gradient-to-r from-primary-brown to-primary-tan text-white rounded-lg p-4 mb-3">
                    <div className="text-2xl md:text-3xl font-bold mb-1">
                      ${mineral.price.toLocaleString()}
                    </div>
                    <div className="text-sm opacity-90">{mineral.unit}</div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-primary-dark text-sm mb-4 leading-relaxed">
                  {mineral.description}
                </p>

                {/* Specifications */}
                <div className="mb-4">
                  <h4 className="font-semibold text-primary-dark mb-2 text-sm">Key Specifications:</h4>
                  <ul className="space-y-1">
                    {mineral.specifications.slice(0, 3).map((spec, idx) => (
                      <li key={idx} className="flex items-start text-xs">
                        <svg className="w-4 h-4 text-primary-brown mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-primary-dark">{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Applications */}
                <div className="mb-4">
                  <h4 className="font-semibold text-primary-dark mb-2 text-sm">Applications:</h4>
                  <div className="flex flex-wrap gap-2">
                    {mineral.applications.slice(0, 3).map((app, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-primary-tan bg-opacity-30 text-primary-dark rounded-full text-xs"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-4 pt-4 border-t border-primary-tan">
                  <a href="#calculator" className="block text-center bg-primary-brown text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition-all duration-300 text-sm font-medium">
                    Get Quote
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-primary-dark animate-slide-up">Quality Assurance &amp; Certifications</h2>
          <p className="text-center text-primary-dark mb-12 max-w-2xl mx-auto">
            Every shipment meets international quality standards with complete documentation
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="card-interactive text-center">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-primary-brown to-primary-tan rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-primary-dark">ISO Certified Suppliers</h3>
              <p className="text-primary-dark text-sm md:text-base">
                All our mining partners are ISO certified and comply with international quality standards.
              </p>
            </div>

            <div className="card-interactive text-center">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-primary-brown to-primary-tan rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 008 10.586V5L7 4z" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-primary-dark">Third-Party Testing</h3>
              <p className="text-primary-dark text-sm md:text-base">
                Every shipment undergoes independent laboratory testing for quality verification.
              </p>
            </div>

            <div className="card-interactive text-center">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-primary-brown to-primary-tan rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-primary-dark">Complete Documentation</h3>
              <p className="text-primary-dark text-sm md:text-base">
                Full export documentation support including certificates of origin and analysis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Mines Network */}
      <section className="py-12 md:py-16 bg-primary-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-primary-dark animate-slide-up">Our Mining Network</h2>
          <p className="text-center text-primary-dark mb-12 max-w-3xl mx-auto">
            We have established partnerships with 24+ premium mines across India, ensuring consistent supply of high-quality minerals.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {partnerMines.map((mine, index) => (
              <div
                key={mine.name}
                className="bg-white rounded-xl p-4 md:p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-primary-tan animate-slide-up"
                style={{animationDelay: `${index * 0.03}s`}}
              >
                <div className="flex items-start mb-3">
                  <svg className="w-5 h-5 text-primary-brown mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <div className="flex-1">
                    <h3 className="font-bold text-primary-dark text-base md:text-lg mb-1">{mine.name}</h3>
                    <p className="text-sm text-primary-dark opacity-75">{mine.location}, {mine.state}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex flex-wrap gap-1">
                    {mine.minerals.map((mineral, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-gradient-to-r from-primary-brown to-primary-tan text-white rounded text-xs"
                      >
                        {mineral}
                      </span>
                    ))}
                  </div>
                  {mine.capacity && (
                    <p className="text-xs text-primary-dark">
                      <span className="font-semibold">Capacity:</span> {mine.capacity}
                    </p>
                  )}
                  {mine.established && (
                    <p className="text-xs text-primary-dark">
                      <span className="font-semibold">Established:</span> {mine.established}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Export Ports Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-primary-dark animate-slide-up">Export Ports Network</h2>
          <p className="text-center text-primary-dark mb-12 max-w-2xl mx-auto">
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
                className="bg-gradient-to-br from-white to-primary-cream rounded-lg p-4 shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-primary-tan text-center animate-zoom-in"
                style={{animationDelay: `${index * 0.05}s`}}
              >
                <svg className="w-8 h-8 md:w-10 md:h-10 text-primary-brown mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <h3 className="font-bold text-primary-dark text-sm mb-1">{port.name}</h3>
                <p className="text-xs text-primary-dark opacity-75">{port.state}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-primary-dark to-primary-brown text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Start Trading?</h2>
          <p className="text-lg md:text-xl mb-8">
            Contact us for detailed quotations, sample requests, or partnership inquiries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/#contact" className="bg-white text-primary-dark px-8 py-3 rounded-lg hover:bg-primary-cream transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-medium">
              Get a Quote
            </a>
            <a href="/#contact" className="bg-primary-tan text-primary-dark px-8 py-3 rounded-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-medium">
              Request Samples
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
