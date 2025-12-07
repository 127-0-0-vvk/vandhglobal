'use client';

import { useState } from 'react';

interface ServiceCard {
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
}

export default function WhyUsSection() {
  const [selectedCard, setSelectedCard] = useState<ServiceCard | null>(null);

  const services: ServiceCard[] = [
    {
      title: 'Commodity Sourcing & Procurement',
      description: 'Direct sourcing from verified mines, mills, and processing units with quality assurance',
      gradient: 'from-gladia-purple to-gladia-purpleBlue',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
    },
    {
      title: 'Quality Testing & Certification',
      description: 'Third-party laboratory testing and international quality certifications',
      gradient: 'from-gladia-lightBlue to-gladia-blue',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Logistics & Supply Chain Management',
      description: 'End-to-end logistics from source to port with real-time tracking',
      gradient: 'from-gladia-purpleBlue to-gladia-purple',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: 'FOB & CIF Pricing Solutions',
      description: 'Transparent pricing calculators with logistics cost breakdowns',
      gradient: 'from-gladia-purple to-gladia-lightPurple',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Documentation & Export Support',
      description: 'Complete export documentation including certificates and compliance support',
      gradient: 'from-gladia-lightBlue to-gladia-purpleBlue',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      title: 'Market Intelligence & Price Analysis',
      description: 'Real-time market insights and pricing trends for informed decisions',
      gradient: 'from-gladia-blue to-gladia-lightBlue',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
  ];

  return (
    <>
      <section className="py-16 md:py-24 bg-gradient-to-br from-gladia-darkest via-gladia-darkBlue to-gladia-darkest">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-light text-center mb-4 bg-gradient-to-r from-gladia-purple via-gladia-purpleBlue to-gladia-lightBlue bg-clip-text text-transparent">
            Why us
          </h2>
          <p className="text-center text-lg text-gladia-white/70 mb-12 max-w-3xl mx-auto">
            Comprehensive commodity trading solutions with end-to-end support
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                onClick={() => setSelectedCard(service)}
                className="bg-gladia-darkBlue/50 backdrop-blur-sm border border-gladia-purple/20 rounded-2xl p-6 text-center cursor-pointer hover:border-gladia-purple/50 transition-all duration-300 hover:shadow-lg hover:shadow-gladia-purple/20 hover:scale-105 transform"
              >
                <h3 className="text-lg md:text-xl font-normal text-gladia-white">
                  {service.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal Popup */}
      {selectedCard && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
          onClick={() => setSelectedCard(null)}
        >
          <div
            className="bg-gladia-darkBlue/90 backdrop-blur-md border border-gladia-purple/30 rounded-3xl p-8 md:p-12 max-w-2xl w-full transform animate-zoom-in shadow-2xl shadow-gladia-purple/30"
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`w-20 h-20 bg-gradient-to-br ${selectedCard.gradient} rounded-full flex items-center justify-center mx-auto mb-6`}>
              {selectedCard.icon}
            </div>
            <h3 className="text-2xl md:text-3xl font-normal mb-6 text-center bg-gradient-to-r from-gladia-purple via-gladia-purpleBlue to-gladia-lightBlue bg-clip-text text-transparent">
              {selectedCard.title}
            </h3>
            <p className="text-gladia-white/80 text-lg text-center mb-8 leading-relaxed">
              {selectedCard.description}
            </p>
            <button
              onClick={() => setSelectedCard(null)}
              className="mx-auto block px-8 py-3 bg-gradient-to-r from-gladia-purple to-gladia-purpleBlue text-white rounded-full hover:shadow-lg hover:shadow-gladia-purple/50 transition-all duration-300 hover:scale-105"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
