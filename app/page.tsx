import Link from 'next/link';
import HeroSlider from '@/components/HeroSlider';

export default function Home() {
  return (
    <div className="bg-gladia-darkest">
      {/* Hero Slider Section */}
      <HeroSlider />

      {/* Our Services Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gladia-darkest via-gladia-darkBlue to-gladia-darkest">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-light text-center mb-4 bg-gradient-to-r from-gladia-purple via-gladia-purpleBlue to-gladia-lightBlue bg-clip-text text-transparent">Our Services</h2>
          <p className="text-center text-lg text-gladia-white/70 mb-12 max-w-3xl mx-auto">
            Comprehensive commodity trading solutions with end-to-end support
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gladia-darkBlue/50 backdrop-blur-sm border border-gladia-purple/20 rounded-2xl p-8 text-center hover:border-gladia-purple/50 transition-all duration-300 hover:shadow-lg hover:shadow-gladia-purple/20">
              <div className="w-16 h-16 bg-gradient-to-br from-gladia-purple to-gladia-purpleBlue rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-normal mb-3 text-gladia-white">Commodity Sourcing & Procurement</h3>
              <p className="text-gladia-white/60 font-light">
                Direct sourcing from verified mines, mills, and processing units with quality assurance
              </p>
            </div>

            <div className="bg-gladia-darkBlue/50 backdrop-blur-sm border border-gladia-purple/20 rounded-2xl p-8 text-center hover:border-gladia-purple/50 transition-all duration-300 hover:shadow-lg hover:shadow-gladia-purple/20">
              <div className="w-16 h-16 bg-gradient-to-br from-gladia-lightBlue to-gladia-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-normal mb-3 text-gladia-white">Quality Testing & Certification</h3>
              <p className="text-gladia-white/60 font-light">
                Third-party laboratory testing and international quality certifications
              </p>
            </div>

            <div className="bg-gladia-darkBlue/50 backdrop-blur-sm border border-gladia-purple/20 rounded-2xl p-8 text-center hover:border-gladia-purple/50 transition-all duration-300 hover:shadow-lg hover:shadow-gladia-purple/20">
              <div className="w-16 h-16 bg-gradient-to-br from-gladia-purpleBlue to-gladia-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-normal mb-3 text-gladia-white">Logistics & Supply Chain Management</h3>
              <p className="text-gladia-white/60 font-light">
                End-to-end logistics from source to port with real-time tracking
              </p>
            </div>

            <div className="bg-gladia-darkBlue/50 backdrop-blur-sm border border-gladia-purple/20 rounded-2xl p-8 text-center hover:border-gladia-purple/50 transition-all duration-300 hover:shadow-lg hover:shadow-gladia-purple/20">
              <div className="w-16 h-16 bg-gradient-to-br from-gladia-purple to-gladia-lightPurple rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-normal mb-3 text-gladia-white">FOB & CIF Pricing Solutions</h3>
              <p className="text-gladia-white/60 font-light">
                Transparent pricing calculators with logistics cost breakdowns
              </p>
            </div>

            <div className="bg-gladia-darkBlue/50 backdrop-blur-sm border border-gladia-purple/20 rounded-2xl p-8 text-center hover:border-gladia-purple/50 transition-all duration-300 hover:shadow-lg hover:shadow-gladia-purple/20">
              <div className="w-16 h-16 bg-gradient-to-br from-gladia-lightBlue to-gladia-purpleBlue rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-normal mb-3 text-gladia-white">Documentation & Export Support</h3>
              <p className="text-gladia-white/60 font-light">
                Complete export documentation including certificates and compliance support
              </p>
            </div>

            <div className="bg-gladia-darkBlue/50 backdrop-blur-sm border border-gladia-purple/20 rounded-2xl p-8 text-center hover:border-gladia-purple/50 transition-all duration-300 hover:shadow-lg hover:shadow-gladia-purple/20">
              <div className="w-16 h-16 bg-gradient-to-br from-gladia-blue to-gladia-lightBlue rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-normal mb-3 text-gladia-white">Market Intelligence & Price Analysis</h3>
              <p className="text-gladia-white/60 font-light">
                Real-time market insights and pricing trends for informed decisions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose VandhGlobal Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gladia-darkBlue via-gladia-darkest to-gladia-darkBlue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-light text-center mb-12 bg-gradient-to-r from-gladia-purple via-gladia-purpleBlue to-gladia-lightBlue bg-clip-text text-transparent">Why Choose VandhGlobal?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gladia-darkest/60 backdrop-blur-sm border border-gladia-lightBlue/20 rounded-2xl p-8 text-center hover:border-gladia-lightBlue/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-gladia-lightBlue to-gladia-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-normal mb-3 text-gladia-white">Verified Partnerships</h3>
              <p className="text-gladia-white/60 font-light">
                Tied up with leading mines and agro-based industries. Every partner undergoes rigorous due diligence.
              </p>
            </div>

            <div className="bg-gladia-darkest/60 backdrop-blur-sm border border-gladia-purple/20 rounded-2xl p-8 text-center hover:border-gladia-purple/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-gladia-purple to-gladia-lightPurple rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-normal mb-3 text-gladia-white">Transparent Pricing</h3>
              <p className="text-gladia-white/60 font-light">
                Real-time pricing calculators with FOB rates, logistics costs, and complete transparency in every transaction.
              </p>
            </div>

            <div className="bg-gladia-darkest/60 backdrop-blur-sm border border-gladia-purpleBlue/20 rounded-2xl p-8 text-center hover:border-gladia-purpleBlue/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-gladia-purpleBlue to-gladia-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-normal mb-3 text-gladia-white">Global Reach</h3>
              <p className="text-gladia-white/60 font-light">
                Connecting buyers and sellers worldwide with comprehensive logistics support from source to port.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-gradient-to-br from-gladia-darkest via-gladia-darkBlue to-gladia-darkest">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="section-heading">About VandhGlobal</h2>
              <p className="text-lg text-gray-700 mb-4">
                VandhGlobal is a leading commodity trading company with extensive partnerships across the mining and agricultural sectors. Our commitment to quality, transparency, and customer satisfaction sets us apart in the global marketplace.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                We have established strong relationships with premier mines and agro-based industries, ensuring that every commodity meets international quality standards and certifications.
              </p>
              <Link href="/#contact" className="btn-primary">
                Get In Touch
              </Link>
            </div>
            <div className="bg-gradient-to-br from-primary-blue to-primary-dark rounded-xl p-8 text-white animate-slide-in-right">
              <h3 className="text-2xl font-bold mb-6">Our Commitment</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary-lightblue mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="font-semibold">Comprehensive Due Diligence</h4>
                    <p className="text-sm text-primary-cream">Rigorous verification of all partners</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary-lightblue mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="font-semibold">Quality Assurance</h4>
                    <p className="text-sm text-primary-cream">International standards compliance</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary-lightblue mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="font-semibold">Logistics Excellence</h4>
                    <p className="text-sm text-primary-cream">End-to-end logistics support</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-gradient-to-br from-gladia-darkBlue via-gladia-darkest to-gladia-darkBlue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading text-center mb-4">Get In Touch</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Ready to start trading? Contact us for pricing, samples, or any inquiries.
          </p>
          <div className="card">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-primary-dark mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-blue focus:border-transparent outline-none"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-primary-dark mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-blue focus:border-transparent outline-none"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-primary-dark mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-blue focus:border-transparent outline-none"
                  placeholder="Your Company Ltd."
                />
              </div>
              <div>
                <label htmlFor="commodity" className="block text-sm font-medium text-primary-dark mb-2">
                  Commodity Interest
                </label>
                <select
                  id="commodity"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-blue focus:border-transparent outline-none"
                >
                  <option value="">Select a commodity category</option>
                  <option value="minerals">Minerals</option>
                  <option value="rice">Rice</option>
                  <option value="spices">Spices & Powders</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-primary-dark mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-blue focus:border-transparent outline-none"
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>
              <button type="submit" className="btn-primary w-full">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
