import { spicePrices } from '@/data/commodityPrices';
import AgroPricingCalculator from '@/components/AgroPricingCalculator';

export const metadata = {
  title: 'Spices & Dehydrated Powders Export | Turmeric, Cumin, Coriander | VandhGlobal',
  description: 'Premium quality spices and dehydrated powders export. Turmeric, cumin, coriander, chilli, and dehydrated vegetables. FOB pricing with export documentation.',
};

export default function SpicesPage() {
  const wholeSpices = spicePrices.filter(spice =>
    spice.name.includes('Whole') || spice.name.includes('Seeds')
  );

  const powderedSpices = spicePrices.filter(spice =>
    spice.name.includes('Powder') && !spice.name.includes('Dehydrated')
  );

  const dehydratedPowders = spicePrices.filter(spice =>
    spice.name.includes('Dehydrated')
  );

  return (
    <div className="bg-primary-lighter min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-accent to-primary-medium text-primary-dark py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Spices & Dehydrated Powders</h1>
          <p className="text-xl md:text-2xl mb-4">
            Premium Quality Spices and Dehydrated Products from Certified Processors
          </p>
          <p className="text-lg max-w-3xl">
            We source premium quality spices and dehydrated products from certified processors in India&apos;s spice belt - Kerala, Tamil Nadu, Gujarat, and Andhra Pradesh. All products are export quality with complete certifications.
          </p>
        </div>
      </section>

      {/* Price Calculator Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AgroPricingCalculator productType="spices" />
        </div>
      </section>

      {/* Whole Spices Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading mb-4">Whole Spices & Seeds</h2>
          <p className="text-center text-primary-medium mb-12 max-w-3xl mx-auto">
            Premium whole spices, machine cleaned and sortex quality. Available in various grades to meet international standards.
          </p>

          <div className="grid grid-cols-1 gap-6">
            {wholeSpices.map((spice) => (
              <div key={spice.name} className="card">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Left Column - Basic Info */}
                  <div className="md:col-span-1">
                    <h3 className="text-xl font-bold text-primary-dark mb-2">{spice.name}</h3>
                    {spice.variety && (
                      <p className="text-sm text-primary-accent mb-3">{spice.variety}</p>
                    )}
                    <div className="bg-primary-accent bg-opacity-20 rounded-lg p-4 mb-4">
                      <div className="text-2xl font-bold text-primary-dark mb-1">
                        ${spice.price}
                      </div>
                      <div className="text-sm text-primary-medium">{spice.unit}</div>
                      <div className="text-xs text-primary-medium mt-2">
                        Updated: {spice.lastUpdated}
                      </div>
                    </div>
                    <p className="text-primary-medium text-sm">
                      {spice.description}
                    </p>
                  </div>

                  {/* Middle Column - Specifications */}
                  <div className="md:col-span-1">
                    <h4 className="font-semibold text-primary-dark mb-3">Specifications</h4>
                    <ul className="space-y-2">
                      {spice.specifications.map((spec, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg className="w-4 h-4 text-primary-accent mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-sm text-primary-dark">{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right Column - Packaging */}
                  <div className="md:col-span-1">
                    <h4 className="font-semibold text-primary-dark mb-3">Packaging Options</h4>
                    <ul className="space-y-2 mb-6">
                      {spice.packagingOptions.map((pkg, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg className="w-4 h-4 text-primary-dark mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm text-primary-medium">{pkg}</span>
                        </li>
                      ))}
                    </ul>
                    <a href="#calculator" className="btn-primary text-sm inline-block">
                      Calculate FOB Price
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Powdered Spices Section */}
      <section className="py-12 md:py-16 bg-primary-lighter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading mb-4">Powdered Spices</h2>
          <p className="text-center text-primary-medium mb-12 max-w-3xl mx-auto">
            Freshly ground spice powders with high essential oil content. Available in various mesh sizes.
          </p>

          <div className="grid grid-cols-1 gap-6">
            {powderedSpices.map((spice) => (
              <div key={spice.name} className="card">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Left Column - Basic Info */}
                  <div className="md:col-span-1">
                    <h3 className="text-xl font-bold text-primary-dark mb-2">{spice.name}</h3>
                    {spice.variety && (
                      <p className="text-sm text-primary-accent mb-3">{spice.variety}</p>
                    )}
                    <div className="bg-primary-accent bg-opacity-20 rounded-lg p-4 mb-4">
                      <div className="text-2xl font-bold text-primary-dark mb-1">
                        ${spice.price}
                      </div>
                      <div className="text-sm text-primary-medium">{spice.unit}</div>
                      <div className="text-xs text-primary-medium mt-2">
                        Updated: {spice.lastUpdated}
                      </div>
                    </div>
                    <p className="text-primary-medium text-sm">
                      {spice.description}
                    </p>
                  </div>

                  {/* Middle Column - Specifications */}
                  <div className="md:col-span-1">
                    <h4 className="font-semibold text-primary-dark mb-3">Specifications</h4>
                    <ul className="space-y-2">
                      {spice.specifications.map((spec, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg className="w-4 h-4 text-primary-accent mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-sm text-primary-dark">{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right Column - Packaging */}
                  <div className="md:col-span-1">
                    <h4 className="font-semibold text-primary-dark mb-3">Packaging Options</h4>
                    <ul className="space-y-2 mb-6">
                      {spice.packagingOptions.map((pkg, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg className="w-4 h-4 text-primary-dark mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm text-primary-medium">{pkg}</span>
                        </li>
                      ))}
                    </ul>
                    <a href="#calculator" className="btn-primary text-sm inline-block">
                      Calculate FOB Price
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dehydrated Powders Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading mb-4">Dehydrated Vegetable Powders</h2>
          <p className="text-center text-primary-medium mb-12 max-w-3xl mx-auto">
            Premium spray-dried and dehydrated vegetable powders with maximum nutrient retention. Food-grade quality.
          </p>

          <div className="grid grid-cols-1 gap-6">
            {dehydratedPowders.map((spice) => (
              <div key={spice.name} className="card">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Left Column - Basic Info */}
                  <div className="md:col-span-1">
                    <h3 className="text-xl font-bold text-primary-dark mb-2">{spice.name}</h3>
                    {spice.variety && (
                      <p className="text-sm text-primary-accent mb-3">{spice.variety}</p>
                    )}
                    <div className="bg-primary-accent bg-opacity-20 rounded-lg p-4 mb-4">
                      <div className="text-2xl font-bold text-primary-dark mb-1">
                        ${spice.price}
                      </div>
                      <div className="text-sm text-primary-medium">{spice.unit}</div>
                      <div className="text-xs text-primary-medium mt-2">
                        Updated: {spice.lastUpdated}
                      </div>
                    </div>
                    <p className="text-primary-medium text-sm">
                      {spice.description}
                    </p>
                  </div>

                  {/* Middle Column - Specifications */}
                  <div className="md:col-span-1">
                    <h4 className="font-semibold text-primary-dark mb-3">Specifications</h4>
                    <ul className="space-y-2">
                      {spice.specifications.map((spec, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg className="w-4 h-4 text-primary-accent mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-sm text-primary-dark">{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right Column - Packaging */}
                  <div className="md:col-span-1">
                    <h4 className="font-semibold text-primary-dark mb-3">Packaging Options</h4>
                    <ul className="space-y-2 mb-6">
                      {spice.packagingOptions.map((pkg, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg className="w-4 h-4 text-primary-dark mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm text-primary-medium">{pkg}</span>
                        </li>
                      ))}
                    </ul>
                    <a href="#calculator" className="btn-primary text-sm inline-block">
                      Calculate FOB Price
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-12 md:py-16 bg-primary-lighter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading text-center mb-12">Quality Assurance & Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="w-14 h-14 bg-primary-accent rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-7 h-7 text-primary-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-semibold mb-2 text-primary-dark">FSSAI Certified</h4>
              <p className="text-sm text-primary-medium">Food safety compliance</p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center">
              <div className="w-14 h-14 bg-primary-accent rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-7 h-7 text-primary-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-semibold mb-2 text-primary-dark">Spices Board Certified</h4>
              <p className="text-sm text-primary-medium">Government approved exporters</p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center">
              <div className="w-14 h-14 bg-primary-accent rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-7 h-7 text-primary-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-semibold mb-2 text-primary-dark">Pesticide Free</h4>
              <p className="text-sm text-primary-medium">Residue tested and certified</p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center">
              <div className="w-14 h-14 bg-primary-accent rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-7 h-7 text-primary-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-semibold mb-2 text-primary-dark">Lab Tested</h4>
              <p className="text-sm text-primary-medium">Quality parameters verified</p>
            </div>
          </div>
        </div>
      </section>

      {/* Export Documentation */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading text-center mb-12">Export Support & Documentation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-primary-lighter rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-primary-dark">Complete Export Documentation</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-accent mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Certificate of Origin</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-accent mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Phytosanitary Certificate</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-accent mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Laboratory Analysis Report</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-accent mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Fumigation Certificate</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-accent mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Pesticide Residue Test Report</span>
                </li>
              </ul>
            </div>

            <div className="bg-primary-lighter rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-primary-dark">Major Sourcing Regions</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-accent mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <span className="font-medium">Gujarat:</span>
                    <span className="text-primary-medium"> Cumin Seeds</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-accent mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <span className="font-medium">Tamil Nadu:</span>
                    <span className="text-primary-medium"> Turmeric (Erode)</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-accent mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <span className="font-medium">Andhra Pradesh:</span>
                    <span className="text-primary-medium"> Red Chilli (Guntur)</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-accent mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <span className="font-medium">Kerala:</span>
                    <span className="text-primary-medium"> Black Pepper, Cardamom</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-primary-accent to-primary-medium text-primary-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Import Premium Spices?</h2>
          <p className="text-xl mb-8">
            Contact us for detailed quotations, sample requests, or partnership inquiries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/#contact" className="btn-primary">
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
