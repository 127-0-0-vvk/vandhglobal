// Commodity prices based on research (December 2025)
// Prices are in USD per metric ton unless otherwise specified

export interface MineralPrice {
  name: string;
  price: number;
  unit: string;
  description: string;
  specifications: string[];
  applications: string[];
  lastUpdated: string;
}

export interface AgriPrice {
  name: string;
  price: number;
  unit: string;
  variety?: string;
  description: string;
  specifications: string[];
  packagingOptions: string[];
  lastUpdated: string;
}

export const mineralPrices: MineralPrice[] = [
  {
    name: "Iron Ore",
    price: 107.88,
    unit: "USD/MT",
    description: "High-grade iron ore with Fe content 62-65%. Essential raw material for steel production.",
    specifications: [
      "Fe Content: 62-65%",
      "Moisture: Max 8%",
      "Silica (SiO2): 2-4%",
      "Alumina (Al2O3): 1-3%",
      "Phosphorus: Max 0.05%"
    ],
    applications: [
      "Steel manufacturing",
      "Pig iron production",
      "Direct reduction iron (DRI)",
      "Pellet production"
    ],
    lastUpdated: "2025-12-04"
  },
  {
    name: "Bauxite",
    price: 82.3,
    unit: "USD/MT",
    description: "Premium grade bauxite ore, primary source of aluminum. High alumina content suitable for refining.",
    specifications: [
      "Al2O3 Content: 50-55%",
      "Silica (SiO2): 3-7%",
      "Fe2O3: 15-25%",
      "Moisture: Max 10%",
      "LOI: 25-30%"
    ],
    applications: [
      "Aluminum production",
      "Refractory materials",
      "Cement manufacturing",
      "Chemical industry"
    ],
    lastUpdated: "2025-12-04"
  },
  {
    name: "Copper Ore",
    price: 9000,
    unit: "USD/MT (refined)",
    description: "Copper concentrate and refined copper. Essential for electrical and construction industries.",
    specifications: [
      "Cu Content: 20-30% (concentrate)",
      "Purity: 99.99% (refined)",
      "Moisture: Max 8%",
      "Impurities: Controlled levels"
    ],
    applications: [
      "Electrical wiring and cables",
      "Electronic components",
      "Construction materials",
      "Industrial machinery"
    ],
    lastUpdated: "2025-12-04"
  },
  {
    name: "Coal (Thermal)",
    price: 95,
    unit: "USD/MT",
    description: "High-quality thermal coal for power generation. Low ash and sulfur content.",
    specifications: [
      "GCV: 5500-6000 kcal/kg",
      "Ash Content: Max 15%",
      "Sulfur: Max 0.8%",
      "Moisture: Max 12%",
      "Volatile Matter: 25-35%"
    ],
    applications: [
      "Power generation",
      "Cement manufacturing",
      "Industrial heating"
    ],
    lastUpdated: "2025-12-04"
  },
  {
    name: "Coal (Metallurgical)",
    price: 185,
    unit: "USD/MT",
    description: "Premium coking coal for steel production. High carbon content and low impurities.",
    specifications: [
      "Fixed Carbon: 60-70%",
      "Volatile Matter: 20-28%",
      "Ash: Max 10%",
      "Sulfur: Max 0.6%",
      "CSR: >60"
    ],
    applications: [
      "Steel production",
      "Coke manufacturing",
      "Blast furnace operations"
    ],
    lastUpdated: "2025-12-04"
  },
  {
    name: "Limestone",
    price: 45,
    unit: "USD/MT",
    description: "High-grade limestone for cement and construction. High calcium carbonate content.",
    specifications: [
      "CaCO3: >95%",
      "MgCO3: <3%",
      "SiO2: <2%",
      "Moisture: Max 5%"
    ],
    applications: [
      "Cement production",
      "Construction aggregate",
      "Agricultural lime",
      "Chemical industry"
    ],
    lastUpdated: "2025-12-04"
  },
  {
    name: "Manganese Ore",
    price: 240,
    unit: "USD/MT",
    description: "High-grade manganese ore for steel alloy production.",
    specifications: [
      "Mn Content: 38-44%",
      "Fe: 8-15%",
      "SiO2: Max 12%",
      "Phosphorus: Max 0.15%"
    ],
    applications: [
      "Steel alloy production",
      "Battery manufacturing",
      "Chemical industry"
    ],
    lastUpdated: "2025-12-04"
  },
  {
    name: "Chromite",
    price: 280,
    unit: "USD/MT",
    description: "Chromite ore for ferrochrome and stainless steel production.",
    specifications: [
      "Cr2O3: 42-46%",
      "Fe: 12-18%",
      "SiO2: Max 10%",
      "Cr:Fe Ratio: 2.5:1 min"
    ],
    applications: [
      "Stainless steel production",
      "Refractory materials",
      "Chemical industry"
    ],
    lastUpdated: "2025-12-04"
  }
];

export const ricePrices: AgriPrice[] = [
  {
    name: "1121 Basmati Rice (White)",
    variety: "Premium Long Grain",
    price: 1060,
    unit: "USD/MT FOB",
    description: "Premium 1121 Basmati rice, extra-long grain, aged for superior aroma and taste. Non-GMO, pesticide residue free.",
    specifications: [
      "Average Grain Length: 8.3-8.4 mm",
      "Purity: 95% minimum",
      "Broken: 1% maximum",
      "Moisture: 12-13%",
      "Crop Year: 2024",
      "Aging: Minimum 1 year"
    ],
    packagingOptions: [
      "50 KG PP Bags",
      "25 KG PP Bags",
      "Custom packaging available"
    ],
    lastUpdated: "2025-12-04"
  },
  {
    name: "1121 Basmati Rice (Steam)",
    variety: "Premium Long Grain",
    price: 1050,
    unit: "USD/MT FOB",
    description: "Premium 1121 Steam Basmati rice, parboiled for enhanced nutrition retention. Extra-long grain.",
    specifications: [
      "Average Grain Length: 8.3-8.4 mm",
      "Purity: 95% minimum",
      "Broken: 1% maximum",
      "Moisture: 12-13%",
      "Crop Year: 2024"
    ],
    packagingOptions: [
      "50 KG PP Bags",
      "25 KG PP Bags"
    ],
    lastUpdated: "2025-12-04"
  },
  {
    name: "1121 Basmati Rice (Golden Sella)",
    variety: "Premium Parboiled",
    price: 930,
    unit: "USD/MT FOB",
    description: "Premium 1121 Golden Sella Basmati rice, parboiled to golden perfection. Non-sticky, fluffy texture.",
    specifications: [
      "Average Grain Length: 8.3 mm",
      "Purity: 95% minimum",
      "Broken: 1% maximum",
      "Moisture: 12-13%",
      "Color: Golden Yellow"
    ],
    packagingOptions: [
      "50 KG PP Bags",
      "25 KG PP Bags"
    ],
    lastUpdated: "2025-12-04"
  },
  {
    name: "IR-64 Parboiled Rice",
    variety: "Non-Basmati Long Grain",
    price: 480,
    unit: "USD/MT FOB",
    description: "IR-64 Parboiled rice, popular non-basmati variety. Excellent for daily consumption and export markets.",
    specifications: [
      "Average Grain Length: 6.0-6.2 mm",
      "Purity: 95% minimum",
      "Broken: 5% maximum",
      "Moisture: 14% maximum",
      "Silky polished"
    ],
    packagingOptions: [
      "50 KG PP Bags",
      "25 KG PP Bags",
      "Bulk packaging"
    ],
    lastUpdated: "2025-12-04"
  },
  {
    name: "Swarna Raw Rice",
    variety: "Non-Basmati Medium Grain",
    price: 420,
    unit: "USD/MT FOB",
    description: "Swarna raw rice, medium grain non-basmati variety. Widely consumed in South India and export markets.",
    specifications: [
      "Average Grain Length: 5.5-6.0 mm",
      "Purity: 95% minimum",
      "Broken: 5% maximum",
      "Moisture: 14% maximum"
    ],
    packagingOptions: [
      "50 KG PP Bags",
      "25 KG PP Bags"
    ],
    lastUpdated: "2025-12-04"
  },
  {
    name: "PR-11/14 Steam Rice",
    variety: "Non-Basmati Long Grain",
    price: 450,
    unit: "USD/MT FOB",
    description: "PR-11/14 Steam rice, premium non-basmati variety. Ideal for biryani and pulao preparations.",
    specifications: [
      "Average Grain Length: 6.8-7.0 mm",
      "Purity: 95% minimum",
      "Broken: 3% maximum",
      "Moisture: 13% maximum"
    ],
    packagingOptions: [
      "50 KG PP Bags",
      "25 KG PP Bags"
    ],
    lastUpdated: "2025-12-04"
  }
];

export const spicePrices: AgriPrice[] = [
  {
    name: "Turmeric Powder",
    variety: "Premium Grade",
    price: 3.2,
    unit: "USD/KG FOB",
    description: "Premium quality turmeric powder with high curcumin content. Bright yellow color, finely ground.",
    specifications: [
      "Curcumin Content: 3-5%",
      "Moisture: Max 10%",
      "Mesh Size: 60-100 mesh",
      "Color Value: >50",
      "Volatile Oil: 3-5%"
    ],
    packagingOptions: [
      "25 KG PP Bags",
      "50 KG PP Bags",
      "Custom packaging"
    ],
    lastUpdated: "2025-12-04"
  },
  {
    name: "Turmeric Whole (Finger)",
    variety: "Premium Grade",
    price: 2.8,
    unit: "USD/KG FOB",
    description: "Whole turmeric fingers, sun-dried and polished. High quality Erode/Salem variety.",
    specifications: [
      "Moisture: Max 10%",
      "Curcumin: 2.5-4%",
      "Size: 2-5 cm fingers",
      "Color: Bright Yellow"
    ],
    packagingOptions: [
      "25 KG Jute Bags",
      "50 KG Jute Bags"
    ],
    lastUpdated: "2025-12-04"
  },
  {
    name: "Cumin Seeds (Jeera)",
    variety: "Premium Quality",
    price: 3.5,
    unit: "USD/KG FOB",
    description: "Premium cumin seeds with strong aroma. Machine cleaned and sortex quality.",
    specifications: [
      "Purity: 99% minimum",
      "Moisture: Max 8%",
      "Volatile Oil: 2.5-4.5%",
      "Admixture: Max 1%"
    ],
    packagingOptions: [
      "25 KG PP Bags",
      "50 KG Jute Bags"
    ],
    lastUpdated: "2025-12-04"
  },
  {
    name: "Cumin Powder",
    variety: "Premium Grade",
    price: 3.8,
    unit: "USD/KG FOB",
    description: "Finely ground cumin powder, freshly ground from premium cumin seeds.",
    specifications: [
      "Purity: 98% minimum",
      "Moisture: Max 8%",
      "Mesh Size: 40-60 mesh",
      "Volatile Oil: 2-4%"
    ],
    packagingOptions: [
      "25 KG PP Bags with liner",
      "Custom packaging"
    ],
    lastUpdated: "2025-12-04"
  },
  {
    name: "Coriander Seeds",
    variety: "Premium Quality",
    price: 2.5,
    unit: "USD/KG FOB",
    description: "Premium coriander seeds, machine cleaned and graded. Eagle or scooter variety.",
    specifications: [
      "Purity: 99% minimum",
      "Moisture: Max 8%",
      "Volatile Oil: 0.4-0.8%",
      "Admixture: Max 1%"
    ],
    packagingOptions: [
      "25 KG PP Bags",
      "50 KG Jute Bags"
    ],
    lastUpdated: "2025-12-04"
  },
  {
    name: "Coriander Powder",
    variety: "Premium Grade",
    price: 2.8,
    unit: "USD/KG FOB",
    description: "Finely ground coriander powder, aromatic and fresh.",
    specifications: [
      "Purity: 98% minimum",
      "Moisture: Max 8%",
      "Mesh Size: 40-60 mesh"
    ],
    packagingOptions: [
      "25 KG PP Bags with liner",
      "Custom packaging"
    ],
    lastUpdated: "2025-12-04"
  },
  {
    name: "Red Chilli Powder",
    variety: "Premium Grade",
    price: 4.2,
    unit: "USD/KG FOB",
    description: "Premium red chilli powder, high heat and bright color. Teja/S17 variety.",
    specifications: [
      "ASTA Color: 120-140",
      "Moisture: Max 10%",
      "Capsaicin: 0.4-0.5%",
      "Mesh Size: 40-60 mesh"
    ],
    packagingOptions: [
      "25 KG PP Bags with liner",
      "Custom packaging"
    ],
    lastUpdated: "2025-12-04"
  },
  {
    name: "Black Pepper Whole",
    variety: "Premium Quality",
    price: 7.5,
    unit: "USD/KG FOB",
    description: "Premium whole black pepper, bold size. Malabar/Tellicherry quality.",
    specifications: [
      "Purity: 99% minimum",
      "Moisture: Max 12%",
      "Bulk Density: 500-600 g/L",
      "Piperine Content: 4-6%"
    ],
    packagingOptions: [
      "25 KG Jute Bags",
      "50 KG Jute Bags",
      "Vacuum packed"
    ],
    lastUpdated: "2025-12-04"
  },
  {
    name: "Onion Powder (Dehydrated)",
    variety: "Premium Dehydrated",
    price: 3.5,
    unit: "USD/KG FOB",
    description: "Premium dehydrated onion powder, spray dried. White/pink variety.",
    specifications: [
      "Purity: 99% minimum",
      "Moisture: Max 5%",
      "Mesh Size: 80-100 mesh",
      "Color: White to cream"
    ],
    packagingOptions: [
      "25 KG PP Bags with liner",
      "Aluminum foil packaging"
    ],
    lastUpdated: "2025-12-04"
  },
  {
    name: "Garlic Powder (Dehydrated)",
    variety: "Premium Dehydrated",
    price: 4.8,
    unit: "USD/KG FOB",
    description: "Premium dehydrated garlic powder, spray dried. Strong aroma and flavor.",
    specifications: [
      "Purity: 99% minimum",
      "Moisture: Max 5%",
      "Mesh Size: 100-120 mesh",
      "Allicin Content: Present"
    ],
    packagingOptions: [
      "25 KG PP Bags with liner",
      "Aluminum foil packaging"
    ],
    lastUpdated: "2025-12-04"
  },
  {
    name: "Ginger Powder (Dehydrated)",
    variety: "Premium Dehydrated",
    price: 4.2,
    unit: "USD/KG FOB",
    description: "Premium dehydrated ginger powder, spray dried. High gingerol content.",
    specifications: [
      "Purity: 98% minimum",
      "Moisture: Max 5%",
      "Mesh Size: 60-80 mesh",
      "Volatile Oil: 1.5-3%"
    ],
    packagingOptions: [
      "25 KG PP Bags with liner",
      "Custom packaging"
    ],
    lastUpdated: "2025-12-04"
  },
  {
    name: "Tomato Powder (Dehydrated)",
    variety: "Premium Dehydrated",
    price: 5.5,
    unit: "USD/KG FOB",
    description: "Premium dehydrated tomato powder, spray dried. Bright red color, high lycopene.",
    specifications: [
      "Purity: 99% minimum",
      "Moisture: Max 5%",
      "Mesh Size: 80-100 mesh",
      "Color: Bright Red"
    ],
    packagingOptions: [
      "25 KG PP Bags with liner",
      "Aluminum foil packaging"
    ],
    lastUpdated: "2025-12-04"
  }
];

// Indian major ports for FOB calculations
export const indianPorts = [
  { name: "Mundra Port", state: "Gujarat", lat: 22.8396, lng: 69.7297 },
  { name: "JNPT (Nhava Sheva)", state: "Maharashtra", lat: 18.9502, lng: 72.9493 },
  { name: "Chennai Port", state: "Tamil Nadu", lat: 13.0827, lng: 80.2707 },
  { name: "Visakhapatnam Port", state: "Andhra Pradesh", lat: 17.6868, lng: 83.2185 },
  { name: "Cochin Port", state: "Kerala", lat: 9.9674, lng: 76.2409 },
  { name: "Kandla Port", state: "Gujarat", lat: 23.0333, lng: 70.2167 },
  { name: "Paradip Port", state: "Odisha", lat: 20.3143, lng: 86.6114 },
  { name: "Kolkata Port", state: "West Bengal", lat: 22.5726, lng: 88.3639 },
  { name: "Tuticorin Port", state: "Tamil Nadu", lat: 8.7642, lng: 78.1348 },
  { name: "Mormugao Port", state: "Goa", lat: 15.4167, lng: 73.8000 }
];

// Major mining/production locations in India
export const miningLocations = {
  ironOre: [
    { name: "Bailadila, Chhattisgarh", lat: 18.6333, lng: 81.3167 },
    { name: "Keonjhar, Odisha", lat: 21.6294, lng: 85.5815 },
    { name: "Bellary, Karnataka", lat: 15.1394, lng: 76.9214 }
  ],
  bauxite: [
    { name: "Koraput, Odisha", lat: 18.8130, lng: 82.7109 },
    { name: "Lohardaga, Jharkhand", lat: 23.4333, lng: 84.6833 }
  ],
  coal: [
    { name: "Singrauli, Madhya Pradesh", lat: 24.0864, lng: 82.6761 },
    { name: "Jharia, Jharkhand", lat: 23.7417, lng: 86.4150 },
    { name: "Talcher, Odisha", lat: 20.9517, lng: 85.2261 }
  ],
  limestone: [
    { name: "Satna, Madhya Pradesh", lat: 24.6005, lng: 80.8322 },
    { name: "Cuddapah, Andhra Pradesh", lat: 14.4674, lng: 78.8241 }
  ],
  manganese: [
    { name: "Nagpur, Maharashtra", lat: 21.1458, lng: 79.0882 },
    { name: "Balaghat, Madhya Pradesh", lat: 21.8061, lng: 80.1864 }
  ]
};

export const agriLocations = {
  rice: [
    { name: "Karnal, Haryana", lat: 29.6857, lng: 76.9905 },
    { name: "Amritsar, Punjab", lat: 31.6340, lng: 74.8723 },
    { name: "West Godavari, Andhra Pradesh", lat: 16.7150, lng: 81.7303 }
  ],
  spices: [
    { name: "Erode, Tamil Nadu", lat: 11.3410, lng: 77.7172 },
    { name: "Guntur, Andhra Pradesh", lat: 16.3067, lng: 80.4365 },
    { name: "Kochi, Kerala", lat: 9.9312, lng: 76.2673 }
  ]
};

// Logistics cost calculation (per KM per MT)
export const logisticsRates = {
  truck: {
    baseRatePerKm: 0.15, // USD per KM per MT
    minCost: 50, // Minimum charge
    loadingUnloading: 25, // USD per MT
    tollCharges: 0.05 // USD per KM additional
  },
  rail: {
    baseRatePerKm: 0.08, // USD per KM per MT
    minCost: 100,
    loadingUnloading: 15
  }
};

// Helper function to calculate distance between two coordinates (Haversine formula)
export function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371; // Radius of the Earth in km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;
  return Math.round(distance);
}

// Calculate logistics cost
export function calculateLogisticsCost(
  distance: number,
  quantity: number,
  transportMode: 'truck' | 'rail' = 'truck'
): {
  transportCost: number;
  loadingUnloadingCost: number;
  tollCharges: number;
  totalLogisticsCost: number;
  costPerMT: number;
} {
  const rates = logisticsRates[transportMode];

  let transportCost = distance * quantity * rates.baseRatePerKm;
  if (transportCost < rates.minCost) {
    transportCost = rates.minCost;
  }

  const loadingUnloadingCost = quantity * rates.loadingUnloading;
  const tollCharges = transportMode === 'truck' ? distance * quantity * logisticsRates.truck.tollCharges : 0;

  const totalLogisticsCost = transportCost + loadingUnloadingCost + tollCharges;
  const costPerMT = totalLogisticsCost / quantity;

  return {
    transportCost,
    loadingUnloadingCost,
    tollCharges,
    totalLogisticsCost,
    costPerMT
  };
}
