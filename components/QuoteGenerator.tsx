'use client';

import { useState } from 'react';
import { partnerMines } from '@/data/commodityPrices';
import { indianStates, getAreasForCity } from '@/data/indianLocations';

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
  // Detailed breakdown
  transportBreakdown: {
    fuelCost: number;
    driverCost: number;
    tollFees: number;
    vehicleRent: number;
  };
  otherExpenses: {
    handlingCharges: number;
    documentation: number;
    insurance: number;
    packaging: number;
    loading: number;
    unloading: number;
  };
  distance: number;
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
  const [expandedBreakdown, setExpandedBreakdown] = useState<{[key: number]: {transport: boolean, other: boolean}}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Interest form fields
  const [name, setName] = useState('');
  const [countryCode, setCountryCode] = useState('+91');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [note, setNote] = useState('');

  // Location selection for India
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedArea, setSelectedArea] = useState('');
  const [availableCities, setAvailableCities] = useState<string[]>([]);
  const [availableAreas, setAvailableAreas] = useState<string[]>([]);

  const ports = [
    "Mundra Port, Gujarat",
    "JNPT (Nhava Sheva), Maharashtra",
    "Paradip Port, Odisha",
    "Visakhapatnam Port, Andhra Pradesh",
    "Chennai Port, Tamil Nadu",
  ];

  // Handle state selection
  const handleStateChange = (state: string) => {
    setSelectedState(state);
    setSelectedCity('');
    setSelectedArea('');
    const stateData = indianStates.find(s => s.name === state);
    setAvailableCities(stateData?.cities || []);
    setAvailableAreas([]);
    updateDestination(state, '', '');
  };

  // Handle city selection
  const handleCityChange = (city: string) => {
    setSelectedCity(city);
    setSelectedArea('');
    const areas = getAreasForCity(city);
    setAvailableAreas(areas);
    updateDestination(selectedState, city, '');
  };

  // Handle area selection
  const handleAreaChange = (area: string) => {
    setSelectedArea(area);
    updateDestination(selectedState, selectedCity, area);
  };

  // Update destination string
  const updateDestination = (state: string, city: string, area: string) => {
    const parts = [area, city, state].filter(Boolean);
    setDestination(parts.join(', '));
  };

  // Toggle breakdown display
  const toggleBreakdown = (index: number, type: 'transport' | 'other') => {
    setExpandedBreakdown(prev => ({
      ...prev,
      [index]: {
        ...prev[index],
        [type]: !prev[index]?.[type]
      }
    }));
  };

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

      // Detailed Transport Cost Breakdown
      const fuelCostPerKm = transportMode === 'truck' ? 0.45 : 0.30;
      const fuelCost = distance * fuelCostPerKm * qty;

      const driverCost = transportMode === 'truck'
        ? Math.ceil(distance / 400) * 2000  // ₹2000 per day for truck driver
        : Math.ceil(distance / 300) * 1500; // ₹1500 per day for rail operator

      const tollFees = transportMode === 'truck'
        ? Math.floor(distance / 100) * 300  // ₹300 per 100km toll
        : 0; // No tolls for rail

      const vehicleRent = transportMode === 'truck'
        ? Math.ceil(distance / 400) * 5000  // ₹5000 per day truck rent
        : Math.ceil(distance / 300) * 8000; // ₹8000 per day rail wagon rent

      const transportCost = fuelCost + driverCost + tollFees + vehicleRent;

      // Detailed Other Expenses Breakdown
      const handlingCharges = basePrice * 0.015; // 1.5% of base price
      const documentation = 1500; // Fixed documentation cost
      const insurance = basePrice * 0.01; // 1% insurance
      const packaging = qty * 50; // ₹50 per unit packaging
      const loading = qty * 30; // ₹30 per unit loading
      const unloading = qty * 30; // ₹30 per unit unloading

      const otherCosts = handlingCharges + documentation + insurance + packaging + loading + unloading;

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
        transportBreakdown: {
          fuelCost,
          driverCost,
          tollFees,
          vehicleRent,
        },
        otherExpenses: {
          handlingCharges,
          documentation,
          insurance,
          packaging,
          loading,
          unloading,
        },
        distance,
      };
    });

    setQuotations(generatedQuotations);
    setShowQuotations(true);
  };

  const downloadQuotation = (quotation: Quotation) => {
    const content = `
╔═══════════════════════════════════════════════════════════════╗
║                     VANDHGLOBAL QUOTATION                     ║
╚═══════════════════════════════════════════════════════════════╝

QUOTATION FOR: ${mineral.name}
Date: ${new Date().toLocaleDateString()}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  SUPPLIER INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Mine Name       : ${quotation.mine.name}
Location        : ${quotation.mine.location}, ${quotation.mine.state}
Mine Capacity   : ${quotation.mine.capacity || 'N/A'}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  PRODUCT DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Mineral         : ${mineral.name}
Specification   : ${specification}
Quantity        : ${quantity} ${mineral.unit}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  LOGISTICS DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Route           : ${quotation.route}
Distance        : ${quotation.distance} km
Transport Mode  : ${transportMode.toUpperCase()}
Est. Delivery   : ${quotation.estimatedDays} days

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  COMPREHENSIVE PRICING BREAKDOWN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. BASE PRICE
   Mineral Cost                                    $${quotation.basePrice.toLocaleString()}

2. TRANSPORT COSTS                                 $${quotation.transportCost.toLocaleString()}
   ├─ Fuel Cost (${quotation.distance} km)                       $${quotation.transportBreakdown.fuelCost.toLocaleString()}
   ├─ Driver/Operator Cost                         $${quotation.transportBreakdown.driverCost.toLocaleString()}${quotation.transportBreakdown.tollFees > 0 ? `
   ├─ Toll Fees                                    $${quotation.transportBreakdown.tollFees.toLocaleString()}` : ''}
   └─ Vehicle Rent                                 $${quotation.transportBreakdown.vehicleRent.toLocaleString()}

3. OTHER EXPENSES                                  $${quotation.otherCosts.toLocaleString()}
   ├─ Handling Charges                             $${quotation.otherExpenses.handlingCharges.toLocaleString()}
   ├─ Documentation Fees                           $${quotation.otherExpenses.documentation.toLocaleString()}
   ├─ Insurance                                    $${quotation.otherExpenses.insurance.toLocaleString()}
   ├─ Packaging                                    $${quotation.otherExpenses.packaging.toLocaleString()}
   ├─ Loading Charges                              $${quotation.otherExpenses.loading.toLocaleString()}
   └─ Unloading Charges                            $${quotation.otherExpenses.unloading.toLocaleString()}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

╔═══════════════════════════════════════════════════════════════╗
║  TOTAL QUOTATION PRICE:                  $${quotation.totalPrice.toLocaleString().padStart(20)}  ║
╚═══════════════════════════════════════════════════════════════╝

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  CONTACT INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Email           : vandhglobal@gmail.com
Website         : www.vandhglobal.com

Terms & Conditions:
• This quotation is valid for 30 days from the date of issue
• Prices are subject to change based on market conditions
• 50% advance payment required to confirm the order
• Delivery timelines may vary based on availability
• All taxes and duties are extra as applicable

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Thank you for considering VandhGlobal for your commodity needs!
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

  const submitInterest = async () => {
    if (!name || !phone || !email) {
      alert('Please fill all required fields');
      return;
    }

    if (!selectedQuotation) {
      alert('No quotation selected');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send-inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          // Customer details
          name,
          phone,
          countryCode,
          email,
          note,
          // Quotation details
          mineral: mineral.name,
          specification,
          quantity,
          unit: mineral.unit,
          mine: selectedQuotation.mine,
          totalPrice: selectedQuotation.totalPrice,
          basePrice: selectedQuotation.basePrice,
          transportCost: selectedQuotation.transportCost,
          otherCosts: selectedQuotation.otherCosts,
          route: selectedQuotation.route,
          estimatedDays: selectedQuotation.estimatedDays,
          distance: selectedQuotation.distance,
          transportMode,
          transportBreakdown: selectedQuotation.transportBreakdown,
          otherExpenses: selectedQuotation.otherExpenses,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert('✓ Your inquiry has been sent successfully! We will contact you soon.');
        // Reset form
        setShowInterestForm(false);
        setName('');
        setPhone('');
        setEmail('');
        setNote('');
      } else {
        alert(`Failed to send inquiry: ${data.message || 'Unknown error'}\n\nNote: ${data.details || ''}`);
      }
    } catch (error: any) {
      alert(`Error sending inquiry: ${error.message || 'Network error'}\n\nPlease try again or contact us directly at vandhglobal@gmail.com`);
    } finally {
      setIsSubmitting(false);
    }
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
              {destinationType === 'india' ? (
                <div className="space-y-4">
                  {/* State Selection */}
                  <div>
                    <label className="block text-sm font-normal text-gladia-white mb-2">
                      State <span className="text-red-400">*</span>
                    </label>
                    <select
                      value={selectedState}
                      onChange={(e) => handleStateChange(e.target.value)}
                      className="w-full px-4 py-3 bg-gladia-darkest border border-gladia-purple/30 rounded-lg text-gladia-white focus:outline-none focus:border-gladia-purple transition-colors"
                    >
                      <option value="">Select State</option>
                      {indianStates.map((state, idx) => (
                        <option key={idx} value={state.name}>{state.name}</option>
                      ))}
                    </select>
                  </div>

                  {/* City Selection */}
                  {selectedState && (
                    <div>
                      <label className="block text-sm font-normal text-gladia-white mb-2">
                        City <span className="text-red-400">*</span>
                      </label>
                      <select
                        value={selectedCity}
                        onChange={(e) => handleCityChange(e.target.value)}
                        className="w-full px-4 py-3 bg-gladia-darkest border border-gladia-purple/30 rounded-lg text-gladia-white focus:outline-none focus:border-gladia-purple transition-colors"
                      >
                        <option value="">Select City</option>
                        {availableCities.map((city, idx) => (
                          <option key={idx} value={city}>{city}</option>
                        ))}
                      </select>
                    </div>
                  )}

                  {/* Area/Town Selection */}
                  {selectedCity && (
                    <div>
                      <label className="block text-sm font-normal text-gladia-white mb-2">
                        Area/Town (Optional)
                      </label>
                      <select
                        value={selectedArea}
                        onChange={(e) => handleAreaChange(e.target.value)}
                        className="w-full px-4 py-3 bg-gladia-darkest border border-gladia-purple/30 rounded-lg text-gladia-white focus:outline-none focus:border-gladia-purple transition-colors"
                      >
                        <option value="">Select Area (Optional)</option>
                        {availableAreas.map((area, idx) => (
                          <option key={idx} value={area}>{area}</option>
                        ))}
                      </select>
                    </div>
                  )}

                  {/* Display Selected Destination */}
                  {destination && (
                    <div className="bg-gladia-darkest/50 border border-gladia-purple/20 rounded-lg p-3">
                      <p className="text-xs text-gladia-white/60 mb-1">Selected Destination:</p>
                      <p className="text-sm text-white font-normal">{destination}</p>
                    </div>
                  )}
                </div>
              ) : (
                <div>
                  <label className="block text-sm font-normal text-gladia-white mb-2">
                    Port Destination <span className="text-red-400">*</span>
                  </label>
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
                </div>
              )}

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
                    {/* Base Price */}
                    <div className="flex justify-between text-sm">
                      <span className="text-gladia-white/70">Base Price:</span>
                      <span className="text-gladia-white font-medium">${quotation.basePrice.toLocaleString()}</span>
                    </div>

                    {/* Transport Cost - Expandable */}
                    <div className="border border-gladia-purple/20 rounded-lg overflow-hidden">
                      <button
                        onClick={() => toggleBreakdown(idx, 'transport')}
                        className="w-full flex justify-between items-center text-sm px-3 py-2 bg-gladia-darkest/30 hover:bg-gladia-darkest/50 transition-colors"
                      >
                        <span className="text-gladia-white/70">Transport Cost:</span>
                        <div className="flex items-center gap-2">
                          <span className="text-gladia-white font-medium">${quotation.transportCost.toLocaleString()}</span>
                          <svg
                            className={`w-4 h-4 text-gladia-white/70 transition-transform ${expandedBreakdown[idx]?.transport ? 'rotate-180' : ''}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </button>
                      {expandedBreakdown[idx]?.transport && (
                        <div className="px-3 py-2 space-y-1.5 text-xs bg-gladia-darkest/20">
                          <div className="flex justify-between">
                            <span className="text-gladia-white/60">• Fuel Cost ({quotation.distance} km):</span>
                            <span className="text-gladia-white/90">${quotation.transportBreakdown.fuelCost.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gladia-white/60">• Driver/Operator Cost:</span>
                            <span className="text-gladia-white/90">${quotation.transportBreakdown.driverCost.toLocaleString()}</span>
                          </div>
                          {quotation.transportBreakdown.tollFees > 0 && (
                            <div className="flex justify-between">
                              <span className="text-gladia-white/60">• Toll Fees:</span>
                              <span className="text-gladia-white/90">${quotation.transportBreakdown.tollFees.toLocaleString()}</span>
                            </div>
                          )}
                          <div className="flex justify-between">
                            <span className="text-gladia-white/60">• Vehicle Rent:</span>
                            <span className="text-gladia-white/90">${quotation.transportBreakdown.vehicleRent.toLocaleString()}</span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Other Expenses - Expandable */}
                    <div className="border border-gladia-purple/20 rounded-lg overflow-hidden">
                      <button
                        onClick={() => toggleBreakdown(idx, 'other')}
                        className="w-full flex justify-between items-center text-sm px-3 py-2 bg-gladia-darkest/30 hover:bg-gladia-darkest/50 transition-colors"
                      >
                        <span className="text-gladia-white/70">Other Expenses:</span>
                        <div className="flex items-center gap-2">
                          <span className="text-gladia-white font-medium">${quotation.otherCosts.toLocaleString()}</span>
                          <svg
                            className={`w-4 h-4 text-gladia-white/70 transition-transform ${expandedBreakdown[idx]?.other ? 'rotate-180' : ''}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </button>
                      {expandedBreakdown[idx]?.other && (
                        <div className="px-3 py-2 space-y-1.5 text-xs bg-gladia-darkest/20">
                          <div className="flex justify-between">
                            <span className="text-gladia-white/60">• Handling Charges:</span>
                            <span className="text-gladia-white/90">${quotation.otherExpenses.handlingCharges.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gladia-white/60">• Documentation:</span>
                            <span className="text-gladia-white/90">${quotation.otherExpenses.documentation.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gladia-white/60">• Insurance:</span>
                            <span className="text-gladia-white/90">${quotation.otherExpenses.insurance.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gladia-white/60">• Packaging:</span>
                            <span className="text-gladia-white/90">${quotation.otherExpenses.packaging.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gladia-white/60">• Loading:</span>
                            <span className="text-gladia-white/90">${quotation.otherExpenses.loading.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gladia-white/60">• Unloading:</span>
                            <span className="text-gladia-white/90">${quotation.otherExpenses.unloading.toLocaleString()}</span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Total */}
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
                  disabled={isSubmitting}
                  className="flex-1 bg-gladia-darkest border border-gladia-purple/30 text-gladia-white px-6 py-3 rounded-lg hover:border-gladia-purple transition-all font-normal disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Cancel
                </button>
                <button
                  onClick={submitInterest}
                  disabled={isSubmitting}
                  className="flex-1 bg-gradient-to-r from-gladia-purple to-gladia-purpleBlue text-white px-6 py-3 rounded-lg hover:shadow-lg hover:shadow-gladia-purple/50 transition-all font-normal disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    'Send Inquiry'
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </>
  );
}
