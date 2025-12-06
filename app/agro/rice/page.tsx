import { ricePrices, partnerRiceMills } from '@/data/commodityPrices';
import AgroPricingCalculator from '@/components/AgroPricingCalculator';

export const metadata = {
  title: 'Rice Trading | Premium Basmati & Non-Basmati Rice Export | VandhGlobal',
  description: 'Trade in 15+ premium quality rice varieties from certified mills across India. 1121 Basmati, Pusa, Sona Masoori, IR-64, and more. FOB pricing with complete export documentation.',
};

export default function RicePage() {
  return (
    <div className="bg-primary-light min-h-screen">
      {/* Rice Catalog - Now at the top */}
      <section className="py-12 md:py-16 bg-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-light text-center mb-4 text-primary-dark animate-slide-up">Our Rice Varieties</h1>
          <p className="text-center text-primary-dark font-light mb-12 max-w-2xl mx-auto animate-slide-up">
            Premium quality Basmati and Non-Basmati rice from certified mills across India&apos;s rice belt
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {ricePrices.map((rice, index) => (
              <div
                key={rice.name}
                className="bg-white rounded-2xl shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-primary-light overflow-hidden animate-zoom-in"
                style={{animationDelay: `${index * 0.05}s`}}
              >
                {/* Price Header */}
                <div className="bg-gradient-to-r from-primary-cyan to-primary-medium p-6">
                  <h3 className="text-2xl md:text-3xl font-light text-white mb-2">{rice.name}</h3>
                  {rice.variety && (
                    <p className="text-sm font-light text-white opacity-90 mb-2">{rice.variety}</p>
                  )}
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl md:text-4xl font-normal text-white">
                      ${rice.price.toLocaleString()}
                    </span>
                    <span className="text-sm font-light text-white opacity-90">{rice.unit}</span>
                  </div>
                </div>

                <div className="p-6">
                  {/* Description */}
                  <p className="text-primary-dark font-light text-sm mb-4 leading-relaxed">
                    {rice.description}
                  </p>

                  {/* Specifications */}
                  <div className="mb-4">
                    <h4 className="font-normal text-primary-dark mb-2 text-sm">Key Specifications</h4>
                    <ul className="space-y-1">
                      {rice.specifications.slice(0, 3).map((spec, idx) => (
                        <li key={idx} className="flex items-start text-xs font-light">
                          <svg className="w-4 h-4 text-primary-cyan mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-primary-dark">{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Packaging Options */}
                  <div className="mb-4">
                    <h4 className="font-normal text-primary-dark mb-2 text-sm">Packaging Options</h4>
                    <div className="flex flex-wrap gap-2">
                      {rice.packagingOptions.slice(0, 3).map((pkg, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-primary-light text-primary-dark rounded-full text-xs font-light border border-primary-cyan"
                        >
                          {pkg}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="mt-4 pt-4 border-t border-primary-light">
                    <a href="#calculator" className="block text-center bg-primary-cyan text-white px-4 py-2 rounded-lg hover:bg-primary-medium transition-all duration-300 text-sm font-normal">
                      Get Quote
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Price Calculator Section - Moved below rice catalog */}
      <section id="calculator" className="py-12 md:py-16 bg-gradient-to-br from-white to-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-primary-cyan">
            <h2 className="text-3xl md:text-4xl font-light text-center mb-8 text-primary-dark">Get FOB Price</h2>
            <AgroPricingCalculator productType="rice" />
          </div>
        </div>
      </section>

      {/* Quality Assurance Section */}
      <section className="py-12 md:py-16 bg-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-light text-center mb-4 text-primary-dark animate-slide-up">Quality Assurance &amp; Certifications</h2>
          <p className="text-center text-primary-dark font-light mb-12 max-w-2xl mx-auto">
            Every shipment meets international quality standards with complete documentation
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white rounded-2xl shadow-md hover:shadow-xl p-8 text-center transition-all duration-300 border border-primary-light transform hover:-translate-y-2">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-primary-cyan to-primary-medium rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-normal mb-3 text-primary-dark">FSSAI Certified Mills</h3>
              <p className="text-primary-dark font-light text-sm md:text-base">
                All our rice mills are FSSAI certified and comply with international food safety standards.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-md hover:shadow-xl p-8 text-center transition-all duration-300 border border-primary-light transform hover:-translate-y-2">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-primary-cyan to-primary-medium rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 008 10.586V5L7 4z" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-normal mb-3 text-primary-dark">Laboratory Testing</h3>
              <p className="text-primary-dark font-light text-sm md:text-base">
                Every batch undergoes comprehensive laboratory testing for quality verification.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-md hover:shadow-xl p-8 text-center transition-all duration-300 border border-primary-light transform hover:-translate-y-2">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-primary-cyan to-primary-medium rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-normal mb-3 text-primary-dark">Complete Documentation</h3>
              <p className="text-primary-dark font-light text-sm md:text-base">
                Full export documentation support including phytosanitary and origin certificates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Rice Mills Network */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-light text-center mb-4 text-primary-dark animate-slide-up">Our Rice Mills Network</h2>
          <p className="text-center text-primary-dark font-light mb-12 max-w-3xl mx-auto">
            We have established partnerships with premium rice mills across India&apos;s rice belt, ensuring consistent supply of high-quality rice.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {partnerRiceMills.map((mill, index) => (
              <div
                key={mill.name}
                className="bg-white rounded-2xl p-4 md:p-6 shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-primary-light animate-slide-up"
                style={{animationDelay: `${index * 0.03}s`}}
              >
                <div className="flex items-start mb-3">
                  <svg className="w-5 h-5 text-primary-cyan mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <div className="flex-1">
                    <h3 className="font-normal text-primary-dark text-base md:text-lg mb-1">{mill.name}</h3>
                    <p className="text-sm text-primary-dark font-light opacity-75">{mill.location}, {mill.state}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex flex-wrap gap-1">
                    {mill.varieties.map((variety, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-gradient-to-r from-primary-cyan to-primary-medium text-white rounded text-xs font-light"
                      >
                        {variety}
                      </span>
                    ))}
                  </div>
                  {mill.capacity && (
                    <p className="text-xs text-primary-dark font-light">
                      <span className="font-normal">Capacity:</span> {mill.capacity}
                    </p>
                  )}
                  {mill.certifications && mill.certifications.length > 0 && (
                    <p className="text-xs text-primary-dark font-light">
                      <span className="font-normal">Certifications:</span> {mill.certifications.join(', ')}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Export Ports Section */}
      <section className="py-12 md:py-16 bg-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-light text-center mb-4 text-primary-dark animate-slide-up">Export Ports Network</h2>
          <p className="text-center text-primary-dark font-light mb-12 max-w-2xl mx-auto">
            Strategic access to major Indian ports for seamless international shipping
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {[
              { name: "Mundra Port", state: "Gujarat" },
              { name: "JNPT (Nhava Sheva)", state: "Maharashtra" },
              { name: "Chennai Port", state: "Tamil Nadu" },
              { name: "Visakhapatnam Port", state: "Andhra Pradesh" },
              { name: "Kandla Port", state: "Gujarat" },
              { name: "Kakinada Port", state: "Andhra Pradesh" },
              { name: "Kolkata Port", state: "West Bengal" },
              { name: "Tuticorin Port", state: "Tamil Nadu" },
              { name: "Cochin Port", state: "Kerala" },
              { name: "Paradip Port", state: "Odisha" }
            ].map((port, index) => (
              <div
                key={port.name}
                className="bg-white rounded-2xl p-4 shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-primary-light text-center animate-zoom-in"
                style={{animationDelay: `${index * 0.05}s`}}
              >
                <svg className="w-8 h-8 md:w-10 md:h-10 text-primary-cyan mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <h3 className="font-normal text-primary-dark text-sm mb-1">{port.name}</h3>
                <p className="text-xs text-primary-dark font-light opacity-75">{port.state}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-primary-medium to-primary-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-light mb-6">Ready to Start Trading?</h2>
          <p className="text-lg md:text-xl mb-8 font-light">
            Contact us for detailed quotations, sample requests, or partnership inquiries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/#contact" className="bg-primary-cyan text-white px-8 py-3 rounded-lg hover:bg-white hover:text-primary-dark transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-normal">
              Get a Quote
            </a>
            <a href="/#contact" className="bg-white text-primary-dark px-8 py-3 rounded-lg hover:bg-primary-cyan hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-normal">
              Request Samples
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
