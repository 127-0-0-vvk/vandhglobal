'use client';

import { useState } from 'react';

interface QualityCard {
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
}

export default function QualityAssuranceSection() {
  const [hoveredCard, setHoveredCard] = useState<QualityCard | null>(null);

  const qualityItems: QualityCard[] = [
    {
      title: 'ISO Certified Suppliers',
      description: 'All our mining partners are ISO certified and comply with international quality standards.',
      gradient: 'from-gladia-lightBlue to-gladia-blue',
      icon: (
        <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Third-Party Testing',
      description: 'Every shipment undergoes independent laboratory testing for quality verification.',
      gradient: 'from-gladia-purple to-gladia-purpleBlue',
      icon: (
        <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 008 10.586V5L7 4z" />
        </svg>
      ),
    },
    {
      title: 'Complete Documentation',
      description: 'Full export documentation support including certificates of origin and analysis.',
      gradient: 'from-gladia-purpleBlue to-gladia-lightPurple',
      icon: (
        <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
  ];

  return (
    <>
      <section className="py-8 md:py-16 bg-gradient-to-br from-gladia-darkest via-gladia-darkBlue to-gladia-darkest">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-5xl font-light text-center mb-3 md:mb-4 bg-gradient-to-r from-gladia-purple via-gladia-purpleBlue to-gladia-lightBlue bg-clip-text text-transparent animate-slide-up">
            Quality Assurance &amp; Certifications
          </h2>
          <p className="text-center text-sm md:text-base text-gladia-white/70 font-light mb-6 md:mb-12 max-w-2xl mx-auto">
            Every shipment meets international quality standards with complete documentation
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-3 md:gap-8">
            {qualityItems.map((item, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredCard(item)}
                onMouseLeave={() => setHoveredCard(null)}
                className="bg-gladia-darkBlue/50 backdrop-blur-sm rounded-xl md:rounded-2xl shadow-md hover:shadow-xl hover:shadow-gladia-purple/20 p-3 md:p-6 text-center transition-all duration-300 border border-gladia-purple/20 cursor-pointer hover:scale-105"
              >
                <h3 className="text-sm md:text-xl font-normal text-gladia-white">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hover Popup */}
      {hoveredCard && (
        <div className="fixed inset-0 z-40 flex items-center justify-center pointer-events-none px-4">
          <div className="bg-gladia-darkBlue/90 backdrop-blur-md border border-gladia-purple/30 rounded-3xl p-8 max-w-md w-full transform animate-zoom-in shadow-2xl shadow-gladia-purple/30">
            <div className={`w-20 h-20 bg-gradient-to-br ${hoveredCard.gradient} rounded-full flex items-center justify-center mx-auto mb-6`}>
              {hoveredCard.icon}
            </div>
            <h3 className="text-2xl md:text-3xl font-normal mb-4 text-center bg-gradient-to-r from-gladia-purple via-gladia-purpleBlue to-gladia-lightBlue bg-clip-text text-transparent">
              {hoveredCard.title}
            </h3>
            <p className="text-gladia-white/80 text-base text-center leading-relaxed">
              {hoveredCard.description}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
