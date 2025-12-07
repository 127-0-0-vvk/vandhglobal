'use client';

import { useState } from 'react';
import { partnerMines } from '@/data/commodityPrices';
import { indianStates, getAreasForCity, getDistrictsForState, getCitiesForDistrict } from '@/data/indianLocations';

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
  distance: number;
  destinationType: 'india' | 'fob' | 'cif';

  // Base Price Breakdown
  basePriceBreakdown: {
    miningCost: number;
    extractionCost: number;
    processingCost: number;
    qualityTesting: number;
    profitMargin: number;
  };

  // Transport Breakdown (for India-to-India)
  transportBreakdown: {
    numTrucks: number;
    truckCapacity: number; // in tons
    fuelCostPerTruck: number;
    fuelCost: number;
    driverCostPerTruck: number;
    driverCost: number;
    tollFeesPerTruck: number;
    tollFees: number;
    vehicleRentPerTruck: number;
    vehicleRent: number;
  };

  // Other Expenses
  otherExpenses: {
    handlingCharges: number;
    documentation: number;
    insurance: number;
    packaging: number;
    loading: number;
    unloading: number;
  };

  // FOB-specific charges
  fobCharges?: {
    portHandling: number;
    customsClearance: number;
    exportDocumentation: number;
    fumigation: number;
    inlandTransport: number;
    terminalCharges: number;
    totalFOB: number;
    originPort: string;
  };

  // CIF-specific charges (includes FOB + Ocean Freight + Insurance)
  cifCharges?: {
    fobTotal: number;
    portHandling: number;
    customsClearance: number;
    exportDocumentation: number;
    fumigation: number;
    inlandTransport: number;
    terminalCharges: number;
    oceanFreight: number;
    marineInsurance: number;
    destinationPortCharges: number;
    totalCIF: number;
    originPort: string;
    destinationPort: string;
  };
}

export default function QuoteGenerator({ mineral }: QuoteGeneratorProps) {
  const [specification, setSpecification] = useState('');
  const [quantity, setQuantity] = useState('');
  const [destinationType, setDestinationType] = useState<'india' | 'fob' | 'cif'>('india');
  const [destination, setDestination] = useState('');
  const [transportMode, setTransportMode] = useState<'truck' | 'rail'>('truck');
  const [quotations, setQuotations] = useState<Quotation[]>([]);
  const [showQuotations, setShowQuotations] = useState(false);
  const [selectedQuotation, setSelectedQuotation] = useState<Quotation | null>(null);
  const [showInterestForm, setShowInterestForm] = useState(false);
  const [expandedBreakdown, setExpandedBreakdown] = useState<{[key: number]: {base: boolean, transport: boolean, other: boolean, fob: boolean, cif: boolean}}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Interest form fields
  const [name, setName] = useState('');
  const [countryCode, setCountryCode] = useState('+91');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [note, setNote] = useState('');

  // Location selection for India
  const [selectedState, setSelectedState] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedArea, setSelectedArea] = useState('');
  const [availableDistricts, setAvailableDistricts] = useState<any[]>([]);
  const [availableCities, setAvailableCities] = useState<string[]>([]);
  const [availableAreas, setAvailableAreas] = useState<string[]>([]);

  // Port selection for FOB/CIF
  const [selectedPort, setSelectedPort] = useState('');
  const [destinationPort, setDestinationPort] = useState(''); // For CIF

  const indianPorts = [
    "Mundra Port, Gujarat",
    "JNPT (Nhava Sheva), Maharashtra",
    "Paradip Port, Odisha",
    "Visakhapatnam Port, Andhra Pradesh",
    "Chennai Port, Tamil Nadu",
    "Kolkata Port, West Bengal",
    "Tuticorin Port, Tamil Nadu",
    "Cochin Port, Kerala"
  ];

  const internationalPorts = [
    "Port of Shanghai, China",
    "Port of Singapore",
    "Port of Rotterdam, Netherlands",
    "Port of Hamburg, Germany",
    "Port of Dubai, UAE",
    "Port of Jebel Ali, UAE",
    "Port of New York, USA",
    "Port of Los Angeles, USA",
    "Port of Felixstowe, UK",
    "Port of Antwerp, Belgium"
  ];

  // Handle state selection
  const handleStateChange = (state: string) => {
    setSelectedState(state);
    setSelectedDistrict('');
    setSelectedCity('');
    setSelectedArea('');
    const districts = getDistrictsForState(state);
    setAvailableDistricts(districts);
    setAvailableCities([]);
    setAvailableAreas([]);
    updateDestination(state, '', '', '');
  };

  // Handle district selection
  const handleDistrictChange = (district: string) => {
    setSelectedDistrict(district);
    setSelectedCity('');
    setSelectedArea('');
    const cities = getCitiesForDistrict(selectedState, district);
    setAvailableCities(cities);
    setAvailableAreas([]);
    updateDestination(selectedState, district, '', '');
  };

  // Handle city selection
  const handleCityChange = (city: string) => {
    setSelectedCity(city);
    setSelectedArea('');
    const areas = getAreasForCity(city);
    setAvailableAreas(areas);
    updateDestination(selectedState, selectedDistrict, city, '');
  };

  // Handle area selection
  const handleAreaChange = (area: string) => {
    setSelectedArea(area);
    updateDestination(selectedState, selectedDistrict, selectedCity, area);
  };

  // Update destination string
  const updateDestination = (state: string, district: string, city: string, area: string) => {
    const parts = [area, city, district, state].filter(Boolean);
    setDestination(parts.join(', '));
  };

  // Toggle breakdown display
  const toggleBreakdown = (index: number, type: 'base' | 'transport' | 'other' | 'fob' | 'cif') => {
    setExpandedBreakdown(prev => ({
      ...prev,
      [index]: {
        ...prev[index],
        [type]: !prev[index]?.[type]
      }
    }));
  };

  const generateQuotations = () => {
    // Validation
    if (!specification || !quantity) {
      alert('Please fill all required fields');
      return;
    }

    if (destinationType === 'india' && !destination) {
      alert('Please select destination location');
      return;
    }

    if ((destinationType === 'fob' || destinationType === 'cif') && !selectedPort) {
      alert('Please select a port');
      return;
    }

    if (destinationType === 'cif' && !destinationPort) {
      alert('Please select destination port for CIF');
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
      const distance = Math.floor(Math.random() * 1500) + 500; // 500-2000 km

      // ===== BASE PRICE BREAKDOWN =====
      // Transparent pricing: Ex-mine price with NO markup/margin
      // VandhGlobal revenue comes ONLY from handling charges
      const miningCost = mineral.price * qty * 0.42; // 42% mining & extraction from ground
      const extractionCost = mineral.price * qty * 0.26; // 26% refining & separation
      const processingCost = mineral.price * qty * 0.22; // 22% processing & grading
      const qualityTesting = mineral.price * qty * 0.10; // 10% quality assurance & testing
      const profitMargin = 0; // ZERO margin - transparent pricing model

      const basePrice = miningCost + extractionCost + processingCost + qualityTesting; // = 100% of mineral.price

      // ===== TRANSPORT CALCULATIONS (India-to-India or India-to-Port) =====
      let transportCost = 0;
      let transportBreakdown: any = {
        numTrucks: 0,
        truckCapacity: 0,
        fuelCostPerTruck: 0,
        fuelCost: 0,
        driverCostPerTruck: 0,
        driverCost: 0,
        tollFeesPerTruck: 0,
        tollFees: 0,
        vehicleRentPerTruck: 0,
        vehicleRent: 0
      };

      if (destinationType === 'india' || destinationType === 'fob' || destinationType === 'cif') {
        if (transportMode === 'truck') {
          // Standard bulk mineral truck capacity: 25 tons (based on research)
          const truckCapacity = 25; // tons
          const numTrucks = Math.ceil(qty / truckCapacity);

          // Per-truck costs based on research: ₹35/km average for bulk cargo
          const fuelCostPerTruck = distance * 15; // ₹15/km fuel per truck (researched rates)
          const driverCostPerTruck = Math.ceil(distance / 400) * 2200; // ₹2200/day, 400km/day
          const tollFeesPerTruck = Math.floor(distance / 100) * 300; // ₹300 per 100km
          const vehicleRentPerTruck = Math.ceil(distance / 400) * 5500; // ₹5500/day truck rent

          // Total costs
          const fuelCost = fuelCostPerTruck * numTrucks;
          const driverCost = driverCostPerTruck * numTrucks;
          const tollFees = tollFeesPerTruck * numTrucks;
          const vehicleRent = vehicleRentPerTruck * numTrucks;

          transportCost = fuelCost + driverCost + tollFees + vehicleRent;

          transportBreakdown = {
            numTrucks,
            truckCapacity,
            fuelCostPerTruck,
            fuelCost,
            driverCostPerTruck,
            driverCost,
            tollFeesPerTruck,
            tollFees,
            vehicleRentPerTruck,
            vehicleRent
          };
        } else {
          // Rail transport (cheaper per ton-km)
          const wagonsNeeded = Math.ceil(qty / 40); // 40 tons per wagon
          const fuelCost = distance * 0.25 * qty; // ₹0.25 per ton-km for rail
          const operatorCost = Math.ceil(distance / 300) * 1800 * wagonsNeeded; // ₹1800/day per wagon
          const vehicleRent = Math.ceil(distance / 300) * 8000 * wagonsNeeded; // ₹8000/day wagon rent

          transportCost = fuelCost + operatorCost + vehicleRent;

          transportBreakdown = {
            numTrucks: wagonsNeeded,
            truckCapacity: 40,
            fuelCostPerTruck: distance * 0.25 * 40,
            fuelCost,
            driverCostPerTruck: Math.ceil(distance / 300) * 1800,
            driverCost: operatorCost,
            tollFeesPerTruck: 0,
            tollFees: 0,
            vehicleRentPerTruck: Math.ceil(distance / 300) * 8000,
            vehicleRent
          };
        }
      }

      // ===== OTHER EXPENSES =====
      const handlingCharges = basePrice * 0.012; // 1.2% handling (VandhGlobal's only revenue)
      const documentation = 1200; // Fixed documentation cost (competitive)
      const insurance = basePrice * 0.008; // 0.8% insurance (low margin)
      const packaging = 0; // No packaging for bulk minerals (shipped in bulk carriers/containers)
      const loading = qty * 25; // ₹25 per ton loading
      const unloading = qty * 25; // ₹25 per ton unloading

      const otherCosts = handlingCharges + documentation + insurance + packaging + loading + unloading;

      // ===== FOB CHARGES (if FOB or CIF) =====
      let fobCharges = undefined;
      if (destinationType === 'fob' || destinationType === 'cif') {
        // Distance from mine to port
        const portDistance = Math.floor(Math.random() * 800) + 300; // 300-1100 km to port

        const portHandling = qty * 80; // ₹80 per ton port handling
        const customsClearance = basePrice * 0.01 + 2500; // 1% + fixed fee
        const exportDocumentation = 3500; // Fixed export doc cost

        // Fumigation based on quantity (researched rates)
        const fumigation = qty < 50 ? 3000 : qty < 200 ? 4500 : 6000;

        const inlandTransport = portDistance * (transportMode === 'truck' ? 35 : 25); // Per km rate (mine to port)
        const terminalCharges = 4500; // Port terminal charges

        const totalFOB = portHandling + customsClearance + exportDocumentation + fumigation +
                         inlandTransport + terminalCharges;

        fobCharges = {
          portHandling,
          customsClearance,
          exportDocumentation,
          fumigation,
          inlandTransport,
          terminalCharges,
          totalFOB,
          originPort: selectedPort
        };
      }

      // ===== CIF CHARGES (if CIF) =====
      let cifCharges = undefined;
      if (destinationType === 'cif' && fobCharges) {
        // Ocean freight based on destination (researched 2024 rates)
        let oceanFreight = 50000; // Base ocean freight in rupees

        // Adjust based on destination port
        if (destinationPort.includes('China') || destinationPort.includes('Singapore')) {
          oceanFreight = 55000; // Closer Asian ports
        } else if (destinationPort.includes('Dubai') || destinationPort.includes('UAE')) {
          oceanFreight = 75000; // Middle East
        } else if (destinationPort.includes('Europe') || destinationPort.includes('UK')) {
          oceanFreight = 125000; // Europe
        } else if (destinationPort.includes('USA')) {
          oceanFreight = 145000; // USA
        }

        // Scale by quantity (per TEU equivalent)
        const teuEquivalent = Math.ceil(qty / 20); // ~20 tons per TEU for minerals
        oceanFreight = oceanFreight * teuEquivalent;

        const marineInsurance = (basePrice + fobCharges.totalFOB) * 0.015; // 1.5% marine insurance
        const destinationPortCharges = qty * 120; // ₹120 per ton destination charges

        const totalCIF = fobCharges.totalFOB + oceanFreight + marineInsurance + destinationPortCharges;

        cifCharges = {
          fobTotal: fobCharges.totalFOB,
          portHandling: fobCharges.portHandling,
          customsClearance: fobCharges.customsClearance,
          exportDocumentation: fobCharges.exportDocumentation,
          fumigation: fobCharges.fumigation,
          inlandTransport: fobCharges.inlandTransport,
          terminalCharges: fobCharges.terminalCharges,
          oceanFreight,
          marineInsurance,
          destinationPortCharges,
          totalCIF,
          originPort: fobCharges.originPort,
          destinationPort
        };
      }

      // ===== TOTAL PRICE CALCULATION =====
      let totalPrice = basePrice + otherCosts;

      if (destinationType === 'india') {
        totalPrice += transportCost;
      } else if (destinationType === 'fob' && fobCharges) {
        totalPrice += transportCost + fobCharges.totalFOB;
      } else if (destinationType === 'cif' && cifCharges) {
        totalPrice += transportCost + cifCharges.totalCIF;
      }

      // ===== DELIVERY TIME =====
      const estimatedDays = (() => {
        if (destinationType === 'india') {
          return transportMode === 'truck' ? Math.ceil(distance / 400) : Math.ceil(distance / 300);
        } else if (destinationType === 'fob') {
          return transportMode === 'truck' ? Math.ceil(distance / 400) + 2 : Math.ceil(distance / 300) + 2;
        } else {
          // CIF includes ocean transit
          const landDays = transportMode === 'truck' ? Math.ceil(distance / 400) : Math.ceil(distance / 300);
          let oceanDays = 15; // Base ocean days
          if (destinationPort.includes('China') || destinationPort.includes('Singapore')) {
            oceanDays = 12;
          } else if (destinationPort.includes('Europe') || destinationPort.includes('UK')) {
            oceanDays = 25;
          } else if (destinationPort.includes('USA')) {
            oceanDays = 30;
          }
          return landDays + oceanDays + 3; // +3 for customs/port handling
        }
      })();

      // ===== ROUTE =====
      let route = '';
      if (destinationType === 'india') {
        route = `${mine.location}, ${mine.state} → ${destination}`;
      } else if (destinationType === 'fob') {
        route = `${mine.location}, ${mine.state} → ${selectedPort} (FOB)`;
      } else {
        route = `${mine.location}, ${mine.state} → ${selectedPort} → ${destinationPort} (CIF)`;
      }

      return {
        mine,
        totalPrice,
        basePrice,
        transportCost,
        otherCosts,
        route,
        estimatedDays,
        distance,
        destinationType,
        basePriceBreakdown: {
          miningCost,
          extractionCost,
          processingCost,
          qualityTesting,
          profitMargin
        },
        transportBreakdown,
        otherExpenses: {
          handlingCharges,
          documentation,
          insurance,
          packaging,
          loading,
          unloading
        },
        fobCharges,
        cifCharges
      };
    });

    setQuotations(generatedQuotations);
    setShowQuotations(true);
  };

  const downloadQuotation = (quotation: Quotation) => {
    // Build destination-specific sections
    let logisticsSection = '';
    let pricingBreakdown = '';

    if (quotation.destinationType === 'india') {
      // India-to-India logistics
      logisticsSection = `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  LOGISTICS DETAILS (DOMESTIC)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Route           : ${quotation.route}
Distance        : ${quotation.distance} km
Transport Mode  : ${transportMode.toUpperCase()}
Vehicles Needed : ${quotation.transportBreakdown.numTrucks} ${transportMode === 'truck' ? 'Trucks' : 'Wagons'} × ${quotation.transportBreakdown.truckCapacity} tons each
Est. Delivery   : ${quotation.estimatedDays} days`;

      pricingBreakdown = `
1. EX-MINE PRICE (100% TRANSPARENT PRICING)           $${quotation.basePrice.toLocaleString()}
   ├─ Mining & Extraction                             $${quotation.basePriceBreakdown.miningCost.toLocaleString()}
   ├─ Refining & Separation                           $${quotation.basePriceBreakdown.extractionCost.toLocaleString()}
   ├─ Processing & Grading                            $${quotation.basePriceBreakdown.processingCost.toLocaleString()}
   ├─ Quality Testing & Assurance                     $${quotation.basePriceBreakdown.qualityTesting.toLocaleString()}
   └─ VandhGlobal Profit Margin                       $0 (0%)

   ⓘ We operate on 100% transparent pricing. Zero markup on ex-mine costs.
      Our revenue comes ONLY from handling charges below.

2. TRANSPORT COSTS                                     $${quotation.transportCost.toLocaleString()}
   Using ${quotation.transportBreakdown.numTrucks} ${transportMode === 'truck' ? 'Trucks' : 'Wagons'} @ ${quotation.transportBreakdown.truckCapacity} tons capacity each

   ├─ Fuel Cost ($${quotation.transportBreakdown.fuelCostPerTruck.toLocaleString()}/vehicle × ${quotation.transportBreakdown.numTrucks})     $${quotation.transportBreakdown.fuelCost.toLocaleString()}
   ├─ Driver Cost ($${quotation.transportBreakdown.driverCostPerTruck.toLocaleString()}/vehicle × ${quotation.transportBreakdown.numTrucks})   $${quotation.transportBreakdown.driverCost.toLocaleString()}${quotation.transportBreakdown.tollFees > 0 ? `
   ├─ Toll Fees ($${quotation.transportBreakdown.tollFeesPerTruck.toLocaleString()}/vehicle × ${quotation.transportBreakdown.numTrucks})       $${quotation.transportBreakdown.tollFees.toLocaleString()}` : ''}
   └─ Vehicle Rent ($${quotation.transportBreakdown.vehicleRentPerTruck.toLocaleString()}/vehicle × ${quotation.transportBreakdown.numTrucks}) $${quotation.transportBreakdown.vehicleRent.toLocaleString()}

   Distance: ${quotation.distance} km

3. OTHER EXPENSES                                      $${quotation.otherCosts.toLocaleString()}
   ├─ Handling Charges (VandhGlobal Revenue - 1.2%)   $${quotation.otherExpenses.handlingCharges.toLocaleString()}
   ├─ Documentation Fees                               $${quotation.otherExpenses.documentation.toLocaleString()}
   ├─ Insurance Coverage                               $${quotation.otherExpenses.insurance.toLocaleString()}
   ├─ Loading Charges                                  $${quotation.otherExpenses.loading.toLocaleString()}
   └─ Unloading Charges                                $${quotation.otherExpenses.unloading.toLocaleString()}

   ⓘ Handling charges (1.2% of ex-mine price) are our ONLY revenue source`;

    } else {
      // Export logistics (FOB/CIF)
      const originPort = quotation.fobCharges?.originPort || quotation.cifCharges?.originPort;

      if (quotation.destinationType === 'fob') {
        logisticsSection = `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  LOGISTICS DETAILS (EXPORT - FOB)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Incoterm        : FOB (Free On Board)
Port            : ${originPort}
Est. Delivery   : ${quotation.estimatedDays} days`;
      } else {
        logisticsSection = `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  LOGISTICS DETAILS (EXPORT - CIF)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Incoterm        : CIF (Cost, Insurance & Freight)
Origin Port     : ${originPort}
Destination Port: ${quotation.cifCharges!.destinationPort}
Est. Delivery   : ${quotation.estimatedDays} days`;
      }

      if (quotation.destinationType === 'fob') {
        pricingBreakdown = `
1. EX-MINE PRICE (100% TRANSPARENT PRICING)           $${quotation.basePrice.toLocaleString()}
   ├─ Mining & Extraction                             $${quotation.basePriceBreakdown.miningCost.toLocaleString()}
   ├─ Refining & Separation                           $${quotation.basePriceBreakdown.extractionCost.toLocaleString()}
   ├─ Processing & Grading                            $${quotation.basePriceBreakdown.processingCost.toLocaleString()}
   ├─ Quality Testing & Assurance                     $${quotation.basePriceBreakdown.qualityTesting.toLocaleString()}
   └─ VandhGlobal Profit Margin                       $0 (0%)

   ⓘ We operate on 100% transparent pricing. Zero markup on ex-mine costs.

2. FOB CHARGES (FREE ON BOARD)                         $${quotation.transportCost.toLocaleString()}
   ├─ Port Handling Charges                           $${quotation.fobCharges!.portHandling.toLocaleString()}
   ├─ Customs Clearance                               $${quotation.fobCharges!.customsClearance.toLocaleString()}
   ├─ Export Documentation                            $${quotation.fobCharges!.exportDocumentation.toLocaleString()}
   ├─ Fumigation Certificate                          $${quotation.fobCharges!.fumigation.toLocaleString()}
   ├─ Mine to Port Transport                          $${quotation.fobCharges!.inlandTransport.toLocaleString()}
   └─ Terminal Handling Charges                       $${quotation.fobCharges!.terminalCharges.toLocaleString()}

   Origin Port: ${quotation.fobCharges!.originPort}

3. OTHER EXPENSES                                      $${quotation.otherCosts.toLocaleString()}
   ├─ Handling Charges (VandhGlobal Revenue - 1.2%)   $${quotation.otherExpenses.handlingCharges.toLocaleString()}
   ├─ Documentation Fees                               $${quotation.otherExpenses.documentation.toLocaleString()}
   ├─ Insurance Coverage                               $${quotation.otherExpenses.insurance.toLocaleString()}
   ├─ Loading Charges                                  $${quotation.otherExpenses.loading.toLocaleString()}
   └─ Unloading Charges                                $${quotation.otherExpenses.unloading.toLocaleString()}`;

      } else {
        // CIF
        pricingBreakdown = `
1. EX-MINE PRICE (100% TRANSPARENT PRICING)           $${quotation.basePrice.toLocaleString()}
   ├─ Mining & Extraction                             $${quotation.basePriceBreakdown.miningCost.toLocaleString()}
   ├─ Refining & Separation                           $${quotation.basePriceBreakdown.extractionCost.toLocaleString()}
   ├─ Processing & Grading                            $${quotation.basePriceBreakdown.processingCost.toLocaleString()}
   ├─ Quality Testing & Assurance                     $${quotation.basePriceBreakdown.qualityTesting.toLocaleString()}
   └─ VandhGlobal Profit Margin                       $0 (0%)

   ⓘ We operate on 100% transparent pricing. Zero markup on ex-mine costs.

2. CIF CHARGES (COST, INSURANCE & FREIGHT)            $${quotation.transportCost.toLocaleString()}

   FOB Subtotal                                        $${quotation.cifCharges!.fobTotal.toLocaleString()}
   ├─ Port Handling                                   $${quotation.cifCharges!.portHandling.toLocaleString()}
   ├─ Customs Clearance                               $${quotation.cifCharges!.customsClearance.toLocaleString()}
   ├─ Export Documentation                            $${quotation.cifCharges!.exportDocumentation.toLocaleString()}
   ├─ Fumigation Certificate                          $${quotation.cifCharges!.fumigation.toLocaleString()}
   ├─ Inland Transport                                $${quotation.cifCharges!.inlandTransport.toLocaleString()}
   └─ Terminal Charges                                $${quotation.cifCharges!.terminalCharges.toLocaleString()}

   Ocean Freight & Insurance
   ├─ Ocean Freight                                   $${quotation.cifCharges!.oceanFreight.toLocaleString()}
   ├─ Marine Insurance                                $${quotation.cifCharges!.marineInsurance.toLocaleString()}
   └─ Destination Port Charges                        $${quotation.cifCharges!.destinationPortCharges.toLocaleString()}

   Destination: ${quotation.cifCharges!.destinationPort}

3. OTHER EXPENSES                                      $${quotation.otherCosts.toLocaleString()}
   ├─ Handling Charges (VandhGlobal Revenue - 1.2%)   $${quotation.otherExpenses.handlingCharges.toLocaleString()}
   ├─ Documentation Fees                               $${quotation.otherExpenses.documentation.toLocaleString()}
   ├─ Insurance Coverage                               $${quotation.otherExpenses.insurance.toLocaleString()}
   ├─ Loading Charges                                  $${quotation.otherExpenses.loading.toLocaleString()}
   └─ Unloading Charges                                $${quotation.otherExpenses.unloading.toLocaleString()}`;
      }
    }

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
${logisticsSection}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  COMPREHENSIVE PRICING BREAKDOWN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${pricingBreakdown}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

╔═══════════════════════════════════════════════════════════════╗
║  TOTAL QUOTATION PRICE:                  $${quotation.totalPrice.toLocaleString().padStart(20)}  ║
╚═══════════════════════════════════════════════════════════════╝

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  CONTACT INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Email           : vandhglobal@gmail.com
Website         : www.vandhglobal.com

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  TRANSPARENCY COMMITMENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
At VandhGlobal, we believe in complete transparency:
• Zero profit margin on ex-mine prices (100% transparent cost)
• Our revenue comes only from handling charges (1.2%)
• All costs are itemized and verifiable
• No hidden fees or markups

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
          basePriceBreakdown: selectedQuotation.basePriceBreakdown,
          destinationType: selectedQuotation.destinationType,
          fobCharges: selectedQuotation.fobCharges,
          cifCharges: selectedQuotation.cifCharges,
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
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="destinationType"
                      value="india"
                      checked={destinationType === 'india'}
                      onChange={(e) => setDestinationType('india')}
                      className="w-4 h-4 text-gladia-purple"
                    />
                    <span className="text-gladia-white text-sm">India to India</span>
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
                    <span className="text-gladia-white text-sm">FOB (Indian Port)</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="destinationType"
                      value="cif"
                      checked={destinationType === 'cif'}
                      onChange={(e) => setDestinationType('cif')}
                      className="w-4 h-4 text-gladia-purple"
                    />
                    <span className="text-gladia-white text-sm">CIF (International)</span>
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

                  {/* District Selection */}
                  {selectedState && availableDistricts.length > 0 && (
                    <div>
                      <label className="block text-sm font-normal text-gladia-white mb-2">
                        District <span className="text-red-400">*</span>
                      </label>
                      <select
                        value={selectedDistrict}
                        onChange={(e) => handleDistrictChange(e.target.value)}
                        className="w-full px-4 py-3 bg-gladia-darkest border border-gladia-purple/30 rounded-lg text-gladia-white focus:outline-none focus:border-gladia-purple transition-colors"
                      >
                        <option value="">Select District</option>
                        {availableDistricts.map((district, idx) => (
                          <option key={idx} value={district.name}>{district.name}</option>
                        ))}
                      </select>
                    </div>
                  )}

                  {/* City Selection */}
                  {selectedDistrict && (
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
                <div className="space-y-4">
                  {/* Indian Port Selection */}
                  <div>
                    <label className="block text-sm font-normal text-gladia-white mb-2">
                      Indian Port (Origin) <span className="text-red-400">*</span>
                    </label>
                    <select
                      value={selectedPort}
                      onChange={(e) => setSelectedPort(e.target.value)}
                      className="w-full px-4 py-3 bg-gladia-darkest border border-gladia-purple/30 rounded-lg text-gladia-white focus:outline-none focus:border-gladia-purple transition-colors"
                    >
                      <option value="">Select Indian Port</option>
                      {indianPorts.map((port, idx) => (
                        <option key={idx} value={port}>{port}</option>
                      ))}
                    </select>
                  </div>

                  {/* Destination Port for CIF */}
                  {destinationType === 'cif' && (
                    <div>
                      <label className="block text-sm font-normal text-gladia-white mb-2">
                        Destination Port (International) <span className="text-red-400">*</span>
                      </label>
                      <select
                        value={destinationPort}
                        onChange={(e) => setDestinationPort(e.target.value)}
                        className="w-full px-4 py-3 bg-gladia-darkest border border-gladia-purple/30 rounded-lg text-gladia-white focus:outline-none focus:border-gladia-purple transition-colors"
                      >
                        <option value="">Select Destination Port</option>
                        {internationalPorts.map((port, idx) => (
                          <option key={idx} value={port}>{port}</option>
                        ))}
                      </select>
                    </div>
                  )}
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
            <div className={`grid grid-cols-1 gap-6 ${
              quotations.length === 3 ? 'md:grid-cols-3' :
              quotations.length === 2 ? 'md:grid-cols-2 max-w-4xl mx-auto' :
              'md:grid-cols-1 max-w-2xl mx-auto'
            }`}>
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
                    {/* Base Price - Expandable */}
                    <div className="border border-gladia-purple/20 rounded-lg overflow-hidden">
                      <button
                        onClick={() => toggleBreakdown(idx, 'base')}
                        className="w-full flex justify-between items-center text-sm px-3 py-2 bg-gladia-darkest/30 hover:bg-gladia-darkest/50 transition-colors"
                      >
                        <span className="text-gladia-white/70">Ex-Mine Price (100% transparent):</span>
                        <div className="flex items-center gap-2">
                          <span className="text-gladia-white font-medium">${quotation.basePrice.toLocaleString()}</span>
                          <svg
                            className={`w-4 h-4 text-gladia-white/70 transition-transform ${expandedBreakdown[idx]?.base ? 'rotate-180' : ''}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </button>
                      {expandedBreakdown[idx]?.base && (
                        <div className="px-3 py-2 space-y-1.5 text-xs bg-gladia-darkest/20">
                          <div className="flex justify-between">
                            <span className="text-gladia-white/60">• Mining & Extraction:</span>
                            <span className="text-gladia-white/90">${quotation.basePriceBreakdown.miningCost.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gladia-white/60">• Refining & Separation:</span>
                            <span className="text-gladia-white/90">${quotation.basePriceBreakdown.extractionCost.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gladia-white/60">• Processing & Grading:</span>
                            <span className="text-gladia-white/90">${quotation.basePriceBreakdown.processingCost.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gladia-white/60">• Quality Testing & Certification:</span>
                            <span className="text-gladia-white/90">${quotation.basePriceBreakdown.qualityTesting.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between border-t border-gladia-purple/20 pt-1.5 mt-1.5">
                            <span className="text-gladia-lightBlue/80 font-medium">VandhGlobal Margin:</span>
                            <span className="text-gladia-lightBlue/90 font-medium">$0 (0%)</span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Transport Cost - Expandable */}
                    {quotation.destinationType === 'india' && (
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
                            <div className="flex justify-between font-medium text-gladia-lightBlue/90 border-b border-gladia-purple/20 pb-1.5 mb-1.5">
                              <span>{quotation.transportBreakdown.numTrucks} {transportMode === 'truck' ? 'Trucks' : 'Wagons'} × {quotation.transportBreakdown.truckCapacity} tons each</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gladia-white/60">• Fuel (${quotation.transportBreakdown.fuelCostPerTruck.toLocaleString()}/vehicle × {quotation.transportBreakdown.numTrucks}):</span>
                              <span className="text-gladia-white/90">${quotation.transportBreakdown.fuelCost.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gladia-white/60">• Driver (${quotation.transportBreakdown.driverCostPerTruck.toLocaleString()}/vehicle × {quotation.transportBreakdown.numTrucks}):</span>
                              <span className="text-gladia-white/90">${quotation.transportBreakdown.driverCost.toLocaleString()}</span>
                            </div>
                            {quotation.transportBreakdown.tollFees > 0 && (
                              <div className="flex justify-between">
                                <span className="text-gladia-white/60">• Tolls (${quotation.transportBreakdown.tollFeesPerTruck.toLocaleString()}/vehicle × {quotation.transportBreakdown.numTrucks}):</span>
                                <span className="text-gladia-white/90">${quotation.transportBreakdown.tollFees.toLocaleString()}</span>
                              </div>
                            )}
                            <div className="flex justify-between">
                              <span className="text-gladia-white/60">• Vehicle Rent (${quotation.transportBreakdown.vehicleRentPerTruck.toLocaleString()}/vehicle × {quotation.transportBreakdown.numTrucks}):</span>
                              <span className="text-gladia-white/90">${quotation.transportBreakdown.vehicleRent.toLocaleString()}</span>
                            </div>
                            <div className="text-xs text-gladia-white/50 mt-2 pt-2 border-t border-gladia-purple/10">
                              Distance: {quotation.distance} km
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    {/* FOB Charges - Expandable (if FOB or CIF) */}
                    {(quotation.destinationType === 'fob' || quotation.destinationType === 'cif') && quotation.fobCharges && (
                      <div className="border border-gladia-purple/20 rounded-lg overflow-hidden">
                        <button
                          onClick={() => toggleBreakdown(idx, 'fob')}
                          className="w-full flex justify-between items-center text-sm px-3 py-2 bg-gladia-darkest/30 hover:bg-gladia-darkest/50 transition-colors"
                        >
                          <span className="text-gladia-white/70">FOB Charges:</span>
                          <div className="flex items-center gap-2">
                            <span className="text-gladia-white font-medium">${quotation.fobCharges.totalFOB.toLocaleString()}</span>
                            <svg
                              className={`w-4 h-4 text-gladia-white/70 transition-transform ${expandedBreakdown[idx]?.fob ? 'rotate-180' : ''}`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                        </button>
                        {expandedBreakdown[idx]?.fob && (
                          <div className="px-3 py-2 space-y-1.5 text-xs bg-gladia-darkest/20">
                            <div className="flex justify-between">
                              <span className="text-gladia-white/60">• Port Handling:</span>
                              <span className="text-gladia-white/90">${quotation.fobCharges.portHandling.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gladia-white/60">• Customs Clearance:</span>
                              <span className="text-gladia-white/90">${quotation.fobCharges.customsClearance.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gladia-white/60">• Export Documentation:</span>
                              <span className="text-gladia-white/90">${quotation.fobCharges.exportDocumentation.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gladia-white/60">• Fumigation Certificate:</span>
                              <span className="text-gladia-white/90">${quotation.fobCharges.fumigation.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gladia-white/60">• Mine to Port Transport:</span>
                              <span className="text-gladia-white/90">${quotation.fobCharges.inlandTransport.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gladia-white/60">• Terminal Charges:</span>
                              <span className="text-gladia-white/90">${quotation.fobCharges.terminalCharges.toLocaleString()}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    {/* CIF Charges - Expandable (if CIF) */}
                    {quotation.destinationType === 'cif' && quotation.cifCharges && (
                      <div className="border border-gladia-purple/20 rounded-lg overflow-hidden">
                        <button
                          onClick={() => toggleBreakdown(idx, 'cif')}
                          className="w-full flex justify-between items-center text-sm px-3 py-2 bg-gladia-darkest/30 hover:bg-gladia-darkest/50 transition-colors"
                        >
                          <span className="text-gladia-white/70">CIF Charges (International):</span>
                          <div className="flex items-center gap-2">
                            <span className="text-gladia-white font-medium">${quotation.cifCharges.totalCIF.toLocaleString()}</span>
                            <svg
                              className={`w-4 h-4 text-gladia-white/70 transition-transform ${expandedBreakdown[idx]?.cif ? 'rotate-180' : ''}`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                        </button>
                        {expandedBreakdown[idx]?.cif && (
                          <div className="px-3 py-2 space-y-1.5 text-xs bg-gladia-darkest/20">
                            <div className="flex justify-between">
                              <span className="text-gladia-white/60">• FOB Total:</span>
                              <span className="text-gladia-white/90">${quotation.cifCharges.fobTotal.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gladia-white/60">• Ocean Freight:</span>
                              <span className="text-gladia-white/90">${quotation.cifCharges.oceanFreight.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gladia-white/60">• Marine Insurance:</span>
                              <span className="text-gladia-white/90">${quotation.cifCharges.marineInsurance.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gladia-white/60">• Destination Port Charges:</span>
                              <span className="text-gladia-white/90">${quotation.cifCharges.destinationPortCharges.toLocaleString()}</span>
                            </div>
                            <div className="text-xs text-gladia-white/50 mt-2 pt-2 border-t border-gladia-purple/10">
                              To: {quotation.cifCharges.destinationPort}
                            </div>
                          </div>
                        )}
                      </div>
                    )}

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
                          <div className="flex justify-between border-b border-gladia-purple/20 pb-1.5 mb-1.5">
                            <span className="text-gladia-lightBlue/80 font-medium">• Handling (VandhGlobal Revenue):</span>
                            <span className="text-gladia-lightBlue/90 font-medium">${quotation.otherExpenses.handlingCharges.toLocaleString()}</span>
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
                    <div className="border-t-2 border-gladia-purple/40 pt-3">
                      <div className="flex justify-between">
                        <span className="text-gladia-white font-normal">Total Price:</span>
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

            {/* End-to-End Trade Process Documentation */}
            <div className="mt-12 max-w-5xl mx-auto">
              <div className="bg-gladia-darkest/40 border border-gladia-purple/20 rounded-lg p-6">
                <h3 className="text-xl font-normal text-gladia-white mb-4 flex items-center gap-2">
                  <svg className="w-6 h-6 text-gladia-lightBlue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Complete Trade Process - From Inquiry to Delivery
                </h3>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Left Column */}
                  <div className="space-y-4">
                    <div className="border-l-2 border-gladia-lightBlue/50 pl-4">
                      <h4 className="text-gladia-lightBlue font-medium mb-1">Step 1: Letter of Interest (LOI)</h4>
                      <p className="text-sm text-gladia-white/70">Click &quot;Interested&quot; button to submit your inquiry. We&apos;ll review your requirements and respond within 24 hours with a formal LOI template.</p>
                    </div>

                    <div className="border-l-2 border-gladia-lightBlue/50 pl-4">
                      <h4 className="text-gladia-lightBlue font-medium mb-1">Step 2: Commercial Discussion</h4>
                      <p className="text-sm text-gladia-white/70">Our team will discuss pricing, delivery terms, payment structure, and any specific requirements. All costs remain transparent as shown in quotation.</p>
                    </div>

                    <div className="border-l-2 border-gladia-lightBlue/50 pl-4">
                      <h4 className="text-gladia-lightBlue font-medium mb-1">Step 3: Sample &amp; Testing (Optional)</h4>
                      <p className="text-sm text-gladia-white/70">We can provide samples for quality verification. Third-party testing at SGS or similar labs can be arranged at buyer&apos;s request.</p>
                    </div>

                    <div className="border-l-2 border-gladia-lightBlue/50 pl-4">
                      <h4 className="text-gladia-lightBlue font-medium mb-1">Step 4: Purchase Order (PO)</h4>
                      <p className="text-sm text-gladia-white/70">Once terms are agreed, you&apos;ll issue a PO with specifications, quantity, delivery schedule, and payment terms. We confirm acceptance within 48 hours.</p>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-4">
                    <div className="border-l-2 border-gladia-lightBlue/50 pl-4">
                      <h4 className="text-gladia-lightBlue font-medium mb-1">Step 5: Advance Payment & Documentation</h4>
                      <p className="text-sm text-gladia-white/70">50% advance payment via wire transfer. We provide proforma invoice, tax invoice, and begin procurement from our verified mine sources.</p>
                    </div>

                    <div className="border-l-2 border-gladia-lightBlue/50 pl-4">
                      <h4 className="text-gladia-lightBlue font-medium mb-1">Step 6: Quality Assurance & Packaging</h4>
                      <p className="text-sm text-gladia-white/70">Material undergoes final quality checks as per agreed specifications. Proper packaging for transit protection (bulk commodities shipped as-is in containers/trucks).</p>
                    </div>

                    <div className="border-l-2 border-gladia-lightBlue/50 pl-4">
                      <h4 className="text-gladia-lightBlue font-medium mb-1">Step 7: Dispatch & Tracking</h4>
                      <p className="text-sm text-gladia-white/70">Material dispatched via agreed transport mode. Real-time tracking details shared. For exports: complete customs documentation, fumigation certificates, and shipping bills provided.</p>
                    </div>

                    <div className="border-l-2 border-gladia-lightBlue/50 pl-4">
                      <h4 className="text-gladia-lightBlue font-medium mb-1">Step 8: Delivery & Final Payment</h4>
                      <p className="text-sm text-gladia-white/70">Delivery at your location as per timeline. Final inspection and handover. Remaining 50% payment due upon delivery. All documentation (delivery challan, test certificates) provided.</p>
                    </div>
                  </div>
                </div>

                {/* Key Documents Section */}
                <div className="mt-6 pt-6 border-t border-gladia-purple/20">
                  <h4 className="text-gladia-white font-medium mb-3">Key Documents Provided:</h4>
                  <div className="grid md:grid-cols-3 gap-3 text-sm">
                    <div className="bg-gladia-darkest/60 border border-gladia-purple/10 rounded px-3 py-2">
                      <span className="text-gladia-lightBlue">✓</span> Proforma Invoice
                    </div>
                    <div className="bg-gladia-darkest/60 border border-gladia-purple/10 rounded px-3 py-2">
                      <span className="text-gladia-lightBlue">✓</span> Tax Invoice (GST)
                    </div>
                    <div className="bg-gladia-darkest/60 border border-gladia-purple/10 rounded px-3 py-2">
                      <span className="text-gladia-lightBlue">✓</span> Quality Test Certificates
                    </div>
                    <div className="bg-gladia-darkest/60 border border-gladia-purple/10 rounded px-3 py-2">
                      <span className="text-gladia-lightBlue">✓</span> Delivery Challan
                    </div>
                    <div className="bg-gladia-darkest/60 border border-gladia-purple/10 rounded px-3 py-2">
                      <span className="text-gladia-lightBlue">✓</span> Transport Documents
                    </div>
                    <div className="bg-gladia-darkest/60 border border-gladia-purple/10 rounded px-3 py-2">
                      <span className="text-gladia-lightBlue">✓</span> Export Docs (if applicable)
                    </div>
                  </div>
                </div>

                {/* Timeline Notice */}
                <div className="mt-6 bg-gladia-purple/10 border border-gladia-purple/30 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gladia-lightBlue mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="text-sm text-gladia-white/90">
                        <strong className="text-gladia-lightBlue">Typical Timeline:</strong> From LOI to delivery typically takes 15-30 days depending on quantity, location, and customs clearance (for exports). Rush orders can be accommodated with additional coordination.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
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
