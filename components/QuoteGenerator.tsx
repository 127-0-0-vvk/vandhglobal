'use client';

import { useState, useRef, useEffect } from 'react';
import { partnerMines } from '@/data/commodityPrices';

interface QuoteGeneratorProps {
  mineral: any;
}

interface Quotation {
  mine: any;
  totalPrice: number;
  basePrice: number;
  transportCost: number;
  otherCosts: number;
  route: string;
  estimatedDays: number;
}

export default function QuoteGenerator({ mineral }: QuoteGeneratorProps) {
  const [specification, setSpecification] = useState('');
  const [quantity, setQuantity] = useState('');
  const [destinationType, setDestinationType] = useState<'india' | 'fob'>('india');
  const [destination, setDestination] = useState('');
  const [transportMode, setTransportMode] = useState<'truck' | 'rail'>('truck');
  const [quotations, setQuotations] = useState<Quotation[]>([]);
  const [showQuotations, setShowQuotations] = useState(false);
  const [selectedQuotation, setSelectedQuotation] = useState<Quotation | null>(null);
  const [showInterestForm, setShowInterestForm] = useState(false);

  // Interest form fields
  const [name, setName] = useState('');
  const [countryCode, setCountryCode] = useState('+91');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [note, setNote] = useState('');

  // Google Maps autocomplete ref
  const autocompleteInputRef = useRef<HTMLInputElement>(null);
  const autocompleteRef = useRef<any>(null);

  // Load Google Maps script and initialize autocomplete
  useEffect(() => {
    const loadGoogleMapsScript = () => {
      if (typeof window !== 'undefined' && !window.google) {
        const script = document.createElement('script');
        // Replace with your Google Maps API key or use environment variable
        const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || 'YOUR_GOOGLE_MAPS_API_KEY';
        script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
        script.async = true;
        script.defer = true;
        script.onload = initAutocomplete;
        document.head.appendChild(script);
      } else if (window.google && autocompleteInputRef.current && !autocompleteRef.current) {
        initAutocomplete();
      }
    };

    const initAutocomplete = () => {
      if (autocompleteInputRef.current && window.google) {
        autocompleteRef.current = new window.google.maps.places.Autocomplete(
          autocompleteInputRef.current,
          {
            componentRestrictions: { country: 'in' },
            fields: ['formatted_address', 'name'],
            types: ['geocode', 'establishment']
          }
        );

        autocompleteRef.current.addListener('place_changed', () => {
          const place = autocompleteRef.current?.getPlace();
          if (place && place.formatted_address) {
            setDestination(place.formatted_address);
          }
        });
      }
    };

    if (destinationType === 'india') {
      loadGoogleMapsScript();
    }
  }, [destinationType]);

  const ports = [
    "Mundra Port, Gujarat",
    "JNPT (Nhava Sheva), Maharashtra",
    "Paradip Port, Odisha",
    "Visakhapatnam Port, Andhra Pradesh",
    "Chennai Port, Tamil Nadu",
  ];

  const generateQuotations = () => {
    if (!specification || !quantity || !destination) {
      alert('Please fill all required fields');
      return;
    }

    // Filter mines that supply this mineral
    const relevantMines = partnerMines.filter(mine =>
      mine.minerals.some(m => m.toLowerCase().includes(mineral.name.toLowerCase().split(' ')[0]))
    );

    // Take up to 3 mines
    const selectedMines = relevantMines.slice(0, 3);

    const generatedQuotations: Quotation[] = selectedMines.map((mine) => {
      const qty = parseFloat(quantity);
      const basePrice = mineral.price * qty;
      const distance = Math.floor(Math.random() * 1500) + 500; // Random distance 500-2000 km
      const transportCost = transportMode === 'truck'
        ? distance * 0.8 * qty
        : distance * 0.5 * qty;
      const otherCosts = basePrice * 0.05; // 5% for handling, documentation, etc.
      const totalPrice = basePrice + transportCost + otherCosts;
      const estimatedDays = transportMode === 'truck'
        ? Math.ceil(distance / 400)
        : Math.ceil(distance / 300);

      const route = `${mine.location}, ${mine.state} → ${destination}`;

      return {
        mine,
        totalPrice,
        basePrice,
        transportCost,
        otherCosts,
        route,
        estimatedDays,
      };
    });

    setQuotations(generatedQuotations);
    setShowQuotations(true);
  };

  const downloadQuotation = (quotation: Quotation) => {
    const content = `
QUOTATION - ${mineral.name}
=====================================

Mine: ${quotation.mine.name}
Location: ${quotation.mine.location}, ${quotation.mine.state}
Capacity: ${quotation.mine.capacity || 'N/A'}

PRODUCT DETAILS
- Mineral: ${mineral.name}
- Specification: ${specification}
- Quantity: ${quantity} ${mineral.unit}

ROUTE
${quotation.route}
Transport Mode: ${transportMode.toUpperCase()}
Estimated Delivery: ${quotation.estimatedDays} days

PRICING BREAKDOWN
- Base Price: $${quotation.basePrice.toLocaleString()}
- Transport Cost: $${quotation.transportCost.toLocaleString()}
- Other Costs (Handling, Documentation): $${quotation.otherCosts.toLocaleString()}
=====================================
TOTAL PRICE: $${quotation.totalPrice.toLocaleString()}

Contact: vandhglobal@gmail.com
    `.trim();

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `quotation-${mineral.name.replace(/\s+/g, '-')}-${quotation.mine.name.replace(/\s+/g, '-')}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleInterested = (quotation: Quotation) => {
    setSelectedQuotation(quotation);
    setShowInterestForm(true);
  };

  const submitInterest = () => {
    if (!name || !phone || !email) {
      alert('Please fill all required fields');
      return;
    }

    const subject = `Interest in ${mineral.name} from ${selectedQuotation?.mine.name}`;
    const body = `
Name: ${name}
Phone: ${countryCode} ${phone}
Email: ${email}

Mineral: ${mineral.name}
Specification: ${specification}
Quantity: ${quantity} ${mineral.unit}

Mine: ${selectedQuotation?.mine.name}
Location: ${selectedQuotation?.mine.location}, ${selectedQuotation?.mine.state}
Total Price: $${selectedQuotation?.totalPrice.toLocaleString()}

Note: ${note || 'N/A'}
    `.trim();

    window.location.href = `mailto:vandhglobal@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Reset form
    setShowInterestForm(false);
    setName('');
    setPhone('');
    setEmail('');
    setNote('');
  };

  return (
    <>
      <section className="py-12 md:py-16 bg-gradient-to-br from-gladia-darkBlue via-gladia-darkest to-gladia-darkBlue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-light text-center mb-8 bg-gradient-to-r from-gladia-purple via-gladia-purpleBlue to-gladia-lightBlue bg-clip-text text-transparent">
            Get Instant Quote
          </h2>

          <div className="bg-gladia-darkBlue/50 backdrop-blur-sm border border-gladia-purple/20 rounded-2xl p-6 md:p-8">
            <div className="space-y-6">
              {/* Specification */}
              <div>
                <label className="block text-sm font-normal text-gladia-white mb-2">
                  Specification <span className="text-red-400">*</span>
                </label>
                <select
                  value={specification}
                  onChange={(e) => setSpecification(e.target.value)}
                  className="w-full px-4 py-3 bg-gladia-darkest border border-gladia-purple/30 rounded-lg text-gladia-white focus:outline-none focus:border-gladia-purple transition-colors"
                >
                  <option value="">Select specification</option>
                  {mineral.specifications.map((spec: string, idx: number) => (
                    <option key={idx} value={spec}>{spec}</option>
                  ))}
                </select>
              </div>

              {/* Quantity */}
              <div>
                <label className="block text-sm font-normal text-gladia-white mb-2">
                  Quantity ({mineral.unit}) <span className="text-red-400">*</span>
                </label>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  placeholder="Enter quantity"
                  className="w-full px-4 py-3 bg-gladia-darkest border border-gladia-purple/30 rounded-lg text-gladia-white focus:outline-none focus:border-gladia-purple transition-colors"
                />
              </div>

              {/* Destination Type */}
              <div>
                <label className="block text-sm font-normal text-gladia-white mb-2">
                  Destination Type <span className="text-red-400">*</span>
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="destinationType"
                      value="india"
                      checked={destinationType === 'india'}
                      onChange={(e) => setDestinationType('india')}
                      className="w-4 h-4 text-gladia-purple"
                    />
                    <span className="text-gladia-white">India to India</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="destinationType"
                      value="fob"
                      checked={destinationType === 'fob'}
                      onChange={(e) => setDestinationType('fob')}
                      className="w-4 h-4 text-gladia-purple"
                    />
                    <span className="text-gladia-white">India to FOB (Port)</span>
                  </label>
                </div>
              </div>

              {/* Destination */}
              <div>
                <label className="block text-sm font-normal text-gladia-white mb-2">
                  Destination <span className="text-red-400">*</span>
                </label>
                {destinationType === 'india' ? (
                  <input
                    ref={autocompleteInputRef}
                    type="text"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    placeholder="Start typing city or location (e.g., Mumbai, Maharashtra)"
                    className="w-full px-4 py-3 bg-gladia-darkest border border-gladia-purple/30 rounded-lg text-gladia-white focus:outline-none focus:border-gladia-purple transition-colors"
                  />
                ) : (
                  <select
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full px-4 py-3 bg-gladia-darkest border border-gladia-purple/30 rounded-lg text-gladia-white focus:outline-none focus:border-gladia-purple transition-colors"
                  >
                    <option value="">Select port</option>
                    {ports.map((port, idx) => (
                      <option key={idx} value={port}>{port}</option>
                    ))}
                  </select>
                )}
              </div>

              {/* Transport Mode */}
              <div>
                <label className="block text-sm font-normal text-gladia-white mb-2">
                  Transport Mode <span className="text-red-400">*</span>
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="transportMode"
                      value="truck"
                      checked={transportMode === 'truck'}
                      onChange={(e) => setTransportMode('truck')}
                      className="w-4 h-4 text-gladia-purple"
                    />
                    <span className="text-gladia-white">Truck</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="transportMode"
                      value="rail"
                      checked={transportMode === 'rail'}
                      onChange={(e) => setTransportMode('rail')}
                      className="w-4 h-4 text-gladia-purple"
                    />
                    <span className="text-gladia-white">Rail</span>
                  </label>
                </div>
              </div>

              {/* Generate Button */}
              <button
                onClick={generateQuotations}
                className="w-full bg-gradient-to-r from-gladia-purple to-gladia-purpleBlue text-white px-6 py-3 rounded-lg hover:shadow-lg hover:shadow-gladia-purple/30 transition-all duration-300 font-normal text-lg"
              >
                Generate Quotation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quotations Display */}
      {showQuotations && quotations.length > 0 && (
        <section className="py-12 bg-gradient-to-br from-gladia-darkest via-gladia-darkBlue to-gladia-darkest">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl md:text-4xl font-light text-center mb-8 text-gladia-white">
              Available Quotations ({quotations.length})
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {quotations.map((quotation, idx) => (
                <div
                  key={idx}
                  className="bg-gladia-darkBlue/50 backdrop-blur-sm border border-gladia-purple/20 rounded-xl p-6 hover:border-gladia-purple/50 transition-all"
                >
                  <div className="mb-4">
                    <h4 className="text-xl font-normal text-white mb-2">{quotation.mine.name}</h4>
                    <p className="text-sm text-gladia-white/70">{quotation.mine.location}, {quotation.mine.state}</p>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-gladia-white/70">Base Price:</span>
                      <span className="text-gladia-white font-medium">${quotation.basePrice.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gladia-white/70">Transport:</span>
                      <span className="text-gladia-white font-medium">${quotation.transportCost.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gladia-white/70">Other Costs:</span>
                      <span className="text-gladia-white font-medium">${quotation.otherCosts.toLocaleString()}</span>
                    </div>
                    <div className="border-t border-gladia-purple/30 pt-3">
                      <div className="flex justify-between">
                        <span className="text-gladia-white font-normal">Total:</span>
                        <span className="text-2xl font-normal text-gladia-lightBlue">${quotation.totalPrice.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 mb-6 text-sm text-gladia-white/70">
                    <p><strong className="text-gladia-white">Route:</strong> {quotation.route}</p>
                    <p><strong className="text-gladia-white">Delivery:</strong> {quotation.estimatedDays} days</p>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => downloadQuotation(quotation)}
                      className="flex-1 bg-gladia-darkest border border-gladia-purple/30 text-gladia-white px-4 py-2 rounded-lg hover:border-gladia-purple transition-all text-sm font-normal"
                    >
                      Download
                    </button>
                    <button
                      onClick={() => handleInterested(quotation)}
                      className="flex-1 bg-gradient-to-r from-gladia-purple to-gladia-purpleBlue text-white px-4 py-2 rounded-lg hover:shadow-lg hover:shadow-gladia-purple/30 transition-all text-sm font-normal"
                    >
                      Interested
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Interest Form Popup */}
      {showInterestForm && selectedQuotation && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
          onClick={() => setShowInterestForm(false)}
        >
          <div
            className="bg-gladia-darkBlue/90 backdrop-blur-md border border-gladia-purple/30 rounded-3xl p-8 max-w-2xl w-full transform animate-zoom-in shadow-2xl shadow-gladia-purple/30 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl md:text-3xl font-normal mb-6 text-center bg-gradient-to-r from-gladia-purple via-gladia-purpleBlue to-gladia-lightBlue bg-clip-text text-transparent">
              Express Your Interest
            </h3>

            {/* Selected Quotation Summary */}
            <div className="bg-gladia-darkest/50 border border-gladia-purple/20 rounded-xl p-4 mb-6">
              <p className="text-sm text-gladia-white/70 mb-2">Selected Quotation:</p>
              <p className="text-lg text-white font-normal">{selectedQuotation.mine.name}</p>
              <p className="text-sm text-gladia-white/70">{selectedQuotation.mine.location}, {selectedQuotation.mine.state}</p>
              <p className="text-2xl text-gladia-lightBlue font-normal mt-2">${selectedQuotation.totalPrice.toLocaleString()}</p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-normal text-gladia-white mb-2">
                  Full Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 bg-gladia-darkest border border-gladia-purple/30 rounded-lg text-gladia-white focus:outline-none focus:border-gladia-purple transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-normal text-gladia-white mb-2">
                  Phone Number <span className="text-red-400">*</span>
                </label>
                <div className="flex gap-2">
                  <select
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                    className="px-4 py-3 bg-gladia-darkest border border-gladia-purple/30 rounded-lg text-gladia-white focus:outline-none focus:border-gladia-purple transition-colors"
                  >
                    <option value="+91">+91 (IN)</option>
                    <option value="+1">+1 (US)</option>
                    <option value="+44">+44 (UK)</option>
                    <option value="+971">+971 (UAE)</option>
                    <option value="+86">+86 (CN)</option>
                  </select>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="9876543210"
                    className="flex-1 px-4 py-3 bg-gladia-darkest border border-gladia-purple/30 rounded-lg text-gladia-white focus:outline-none focus:border-gladia-purple transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-normal text-gladia-white mb-2">
                  Email Address <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 bg-gladia-darkest border border-gladia-purple/30 rounded-lg text-gladia-white focus:outline-none focus:border-gladia-purple transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-normal text-gladia-white mb-2">
                  Additional Note
                </label>
                <textarea
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="Any additional requirements or questions..."
                  rows={4}
                  className="w-full px-4 py-3 bg-gladia-darkest border border-gladia-purple/30 rounded-lg text-gladia-white focus:outline-none focus:border-gladia-purple transition-colors resize-none"
                />
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  onClick={() => setShowInterestForm(false)}
                  className="flex-1 bg-gladia-darkest border border-gladia-purple/30 text-gladia-white px-6 py-3 rounded-lg hover:border-gladia-purple transition-all font-normal"
                >
                  Cancel
                </button>
                <button
                  onClick={submitInterest}
                  className="flex-1 bg-gradient-to-r from-gladia-purple to-gladia-purpleBlue text-white px-6 py-3 rounded-lg hover:shadow-lg hover:shadow-gladia-purple/50 transition-all font-normal"
                >
                  Send Inquiry
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
