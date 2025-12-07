import { mineralPrices } from '@/data/commodityPrices';
import { notFound } from 'next/navigation';
import QuoteGenerator from '@/components/QuoteGenerator';
import Link from 'next/link';

export async function generateStaticParams() {
  return mineralPrices.map((mineral) => ({
    slug: mineral.name.toLowerCase().replace(/\s+/g, '-'),
  }));
}

export default function MineralDetailPage({ params }: { params: { slug: string } }) {
  const mineral = mineralPrices.find(
    (m) => m.name.toLowerCase().replace(/\s+/g, '-') === params.slug
  );

  if (!mineral) {
    notFound();
  }

  const priceChange = (Math.random() * 5 - 2.5).toFixed(2);
  const isUp = parseFloat(priceChange) > 0;

  return (
    <div className="bg-gladia-darkest min-h-screen pt-28">
      {/* Breadcrumb */}
      <div className="bg-gradient-to-br from-gladia-darkest via-gladia-darkBlue to-gladia-darkest py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-gladia-white/70">
            <Link href="/" className="hover:text-gladia-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/minerals" className="hover:text-gladia-white transition-colors">Products</Link>
            <span>/</span>
            <span className="text-gladia-white">{mineral.name}</span>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <section className="py-8 md:py-12 bg-gradient-to-br from-gladia-darkest via-gladia-darkBlue to-gladia-darkest">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Image */}
            <div className="relative overflow-hidden rounded-2xl border border-gladia-purple/20">
              <img
                src={mineral.imageUrl}
                alt={mineral.name}
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gladia-darkest/50 to-transparent"></div>
            </div>

            {/* Details */}
            <div>
              <h1 className="text-3xl md:text-5xl font-light text-white mb-4">{mineral.name}</h1>
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-4xl font-normal text-white">
                  ${mineral.price.toLocaleString()}
                </span>
                <span className="text-sm font-light text-white/70">per {mineral.unit}</span>
                <div className={`flex items-center gap-1 text-sm ${isUp ? 'text-green-400' : 'text-red-400'}`}>
                  {isUp ? (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                  <span className="font-medium">{Math.abs(parseFloat(priceChange))}%</span>
                </div>
              </div>

              <p className="text-gladia-white/80 text-lg mb-6 leading-relaxed">{mineral.description}</p>

              {/* Specifications */}
              <div className="mb-6">
                <h3 className="text-xl font-normal text-white mb-3">Key Specifications</h3>
                <ul className="space-y-2">
                  {mineral.specifications.map((spec, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <svg className="w-5 h-5 text-gladia-lightBlue mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gladia-white/80">{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Applications */}
              <div>
                <h3 className="text-xl font-normal text-white mb-3">Applications</h3>
                <div className="flex flex-wrap gap-2">
                  {mineral.applications.map((app, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-gradient-to-r from-gladia-purple to-gladia-purpleBlue text-white rounded-full text-sm font-light"
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Generator */}
      <QuoteGenerator mineral={mineral} />

      {/* Additional Info */}
      <section className="py-12 bg-gradient-to-br from-gladia-darkBlue via-gladia-darkest to-gladia-darkBlue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gladia-darkBlue/50 backdrop-blur-sm border border-gladia-purple/20 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-gladia-lightBlue to-gladia-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-normal text-white mb-2">Quality Certified</h3>
              <p className="text-sm text-gladia-white/70">ISO certified suppliers with third-party testing</p>
            </div>
            <div className="bg-gladia-darkBlue/50 backdrop-blur-sm border border-gladia-purple/20 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-gladia-purple to-gladia-purpleBlue rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-normal text-white mb-2">Fast Delivery</h3>
              <p className="text-sm text-gladia-white/70">End-to-end logistics with real-time tracking</p>
            </div>
            <div className="bg-gladia-darkBlue/50 backdrop-blur-sm border border-gladia-purple/20 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-gladia-purpleBlue to-gladia-lightPurple rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-normal text-white mb-2">Documentation</h3>
              <p className="text-sm text-gladia-white/70">Complete export documentation support</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
