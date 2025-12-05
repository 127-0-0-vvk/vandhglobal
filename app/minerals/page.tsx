import { mineralPrices } from '@/data/commodityPrices';
import MineralPricingCalculator from '@/components/MineralPricingCalculator';

export const metadata = {
  title: 'Minerals Trading | Iron Ore, Bauxite, Coal, Copper | VandhGlobal',
  description: 'Premium quality minerals from verified mines. Iron ore, bauxite, coal, copper, manganese, chromite. FOB pricing with logistics support.',
};

export default function MineralsPage() {
  return (
    <div className="bg-primary-lighter min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-dark to-primary-medium text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Minerals Trading</h1>
          <p className="text-xl md:text-2xl mb-4 text-primary-lighter">
            Premium Quality Minerals from Verified Mines Across India and Globally
          </p>
          <p className="text-lg max-w-3xl">
            We source high-grade minerals from certified mines with comprehensive quality assurance and complete documentation support. All our mining partners undergo rigorous due diligence to ensure compliance with environmental and safety standards.
          </p>
        </div>
      </section>

      {/* Price Calculator Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MineralPricingCalculator />
        </div>
      </section>

      {/* Minerals Catalog */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading text-center mb-12">Our Minerals Catalog</h2>
          <div className="grid grid-cols-1 gap-8">
            {mineralPrices.map((mineral, index) => (
              <div key={mineral.name} className="card">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Left Column - Basic Info */}
                  <div className="md:col-span-1">
                    <h3 className="text-2xl font-bold text-primary-dark mb-3">{mineral.name}</h3>
                    <div className="bg-primary-accent bg-opacity-20 rounded-lg p-4 mb-4">
                      <div className="text-3xl font-bold text-primary-dark mb-1">
                        ${mineral.price}
                      </div>
                      <div className="text-sm text-primary-medium">{mineral.unit}</div>
                      <div className="text-xs text-primary-medium mt-2">
                        Updated: {mineral.lastUpdated}
                      </div>
                    </div>
                    <p className="text-primary-medium text-sm">
                      {mineral.description}
                    </p>
                  </div>

                  {/* Middle Column - Specifications */}
                  <div className="md:col-span-1">
                    <h4 className="font-semibold text-primary-dark mb-3">Technical Specifications</h4>
                    <ul className="space-y-2">
                      {mineral.specifications.map((spec, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg className="w-5 h-5 text-primary-accent mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-sm text-primary-dark">{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right Column - Applications */}
                  <div className="md:col-span-1">
                    <h4 className="font-semibold text-primary-dark mb-3">Applications & Uses</h4>
                    <ul className="space-y-2">
                      {mineral.applications.map((app, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg className="w-5 h-5 text-primary-dark mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                          <span className="text-sm text-primary-medium">{app}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6">
                      <a href="#calculator" className="btn-primary text-sm inline-block">
                        Calculate FOB Price
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance Section */}
      <section className="py-12 md:py-16 bg-primary-lighter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading text-center mb-12">Quality Assurance & Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-primary-dark rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary-dark">ISO Certified Suppliers</h3>
              <p className="text-primary-medium">
                All our mining partners are ISO certified and comply with international quality standards.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-primary-dark rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 008 10.586V5L7 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary-dark">Third-Party Testing</h3>
              <p className="text-primary-medium">
                Every shipment undergoes independent laboratory testing for quality verification.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-primary-dark rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary-dark">Complete Documentation</h3>
              <p className="text-primary-medium">
                Full export documentation support including certificates of origin and analysis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mining Locations */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading text-center mb-8">Our Mining Network</h2>
          <p className="text-center text-primary-medium mb-12 max-w-3xl mx-auto">
            We have established partnerships with premium mines across India, ensuring consistent supply of high-quality minerals.
          </p>
          <div className="bg-primary-lighter rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-primary-dark mb-4">Major Mining Regions</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-accent mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <span className="font-medium">Odisha:</span> Iron Ore, Bauxite, Chromite
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-accent mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <span className="font-medium">Jharkhand:</span> Coal, Iron Ore, Bauxite
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-accent mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <span className="font-medium">Chhattisgarh:</span> Iron Ore, Coal
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-accent mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <span className="font-medium">Karnataka:</span> Iron Ore, Manganese
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-primary-dark mb-4">Export Ports</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-accent mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span>Mundra Port, Gujarat</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-accent mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span>JNPT (Nhava Sheva), Maharashtra</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-accent mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span>Paradip Port, Odisha</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-accent mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span>Visakhapatnam Port, Andhra Pradesh</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-primary-dark to-primary-medium text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Trading?</h2>
          <p className="text-xl mb-8 text-primary-lighter">
            Contact us for detailed quotations, sample requests, or partnership inquiries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/#contact" className="btn-secondary">
              Get a Quote
            </a>
            <a href="/#contact" className="bg-white text-primary-dark px-8 py-3 rounded-lg hover:bg-primary-lighter transition-colors duration-300">
              Request Samples
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
