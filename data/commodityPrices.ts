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

export interface Mine {
  name: string;
  location: string;
  state: string;
  minerals: string[];
  capacity?: string;
  established?: string;
  lat: number;
  lng: number;
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
  },
  {
    name: "Zinc Ore",
    price: 2850,
    unit: "USD/MT",
    description: "High-grade zinc concentrate for galvanizing and alloy production.",
    specifications: [
      "Zn Content: 45-55%",
      "Fe: Max 10%",
      "SiO2: Max 8%",
      "Pb: 1-3%"
    ],
    applications: [
      "Galvanizing steel",
      "Brass production",
      "Die casting",
      "Chemical industry"
    ],
    lastUpdated: "2025-12-04"
  },
  {
    name: "Lead Ore",
    price: 2100,
    unit: "USD/MT",
    description: "Lead concentrate for battery and alloy manufacturing.",
    specifications: [
      "Pb Content: 60-70%",
      "Zn: Max 5%",
      "SiO2: Max 10%",
      "Ag: 100-200 g/t"
    ],
    applications: [
      "Battery manufacturing",
      "Radiation shielding",
      "Cable sheathing",
      "Alloys production"
    ],
    lastUpdated: "2025-12-04"
  },
  {
    name: "Gypsum",
    price: 35,
    unit: "USD/MT",
    description: "Natural gypsum for cement and plaster production.",
    specifications: [
      "CaSO4.2H2O: >85%",
      "Moisture: Max 8%",
      "Purity: >90%",
      "Whiteness: >80%"
    ],
    applications: [
      "Cement retarder",
      "Plaster of Paris",
      "Wallboard production",
      "Agricultural gypsum"
    ],
    lastUpdated: "2025-12-04"
  },
  {
    name: "Dolomite",
    price: 55,
    unit: "USD/MT",
    description: "High-grade dolomite for steel and glass industries.",
    specifications: [
      "MgCO3: 40-45%",
      "CaCO3: 50-55%",
      "SiO2: Max 3%",
      "Moisture: Max 5%"
    ],
    applications: [
      "Steel production",
      "Glass manufacturing",
      "Refractory materials",
      "Construction aggregate"
    ],
    lastUpdated: "2025-12-04"
  },
  {
    name: "Silica Sand",
    price: 65,
    unit: "USD/MT",
    description: "Premium quality silica sand for glass and foundry applications.",
    specifications: [
      "SiO2: >98%",
      "Fe2O3: <0.05%",
      "Moisture: Max 2%",
      "Grain Size: 0.1-0.6 mm"
    ],
    applications: [
      "Glass manufacturing",
      "Foundry casting",
      "Silicon production",
      "Water filtration"
    ],
    lastUpdated: "2025-12-04"
  },
  {
    name: "Feldspar",
    price: 85,
    unit: "USD/MT",
    description: "Potassium feldspar for ceramic and glass industries.",
    specifications: [
      "K2O + Na2O: 10-12%",
      "Al2O3: 16-18%",
      "Fe2O3: <0.1%",
      "Brightness: >90%"
    ],
    applications: [
      "Ceramic manufacturing",
      "Glass production",
      "Enamel and glazes",
      "Filler applications"
    ],
    lastUpdated: "2025-12-04"
  },
  {
    name: "Mica",
    price: 420,
    unit: "USD/MT",
    description: "High-quality muscovite mica for electrical and cosmetic applications.",
    specifications: [
      "Purity: >85%",
      "Moisture: Max 1%",
      "Sheet size: Various grades",
      "Dielectric strength: High"
    ],
    applications: [
      "Electrical insulation",
      "Cosmetics industry",
      "Paints and coatings",
      "Plastics filler"
    ],
    lastUpdated: "2025-12-04"
  },
  {
    name: "Talc",
    price: 180,
    unit: "USD/MT",
    description: "Premium talc powder for pharmaceutical and cosmetic use.",
    specifications: [
      "Purity: >95%",
      "Whiteness: >90%",
      "Mesh Size: 200-325 mesh",
      "Moisture: Max 0.5%"
    ],
    applications: [
      "Pharmaceuticals",
      "Cosmetics",
      "Paints and coatings",
      "Plastics industry"
    ],
    lastUpdated: "2025-12-04"
  },
  {
    name: "Graphite",
    price: 950,
    unit: "USD/MT",
    description: "Natural flake graphite for battery and industrial applications.",
    specifications: [
      "Carbon Content: 90-95%",
      "Flake Size: Various grades",
      "Moisture: Max 1%",
      "Ash: Max 5%"
    ],
    applications: [
      "Battery manufacturing",
      "Lubricants",
      "Refractories",
      "Pencil production"
    ],
    lastUpdated: "2025-12-04"
  },
  {
    name: "Bentonite",
    price: 95,
    unit: "USD/MT",
    description: "Sodium/Calcium bentonite for drilling and foundry applications.",
    specifications: [
      "Montmorillonite: >85%",
      "Moisture: Max 12%",
      "Swelling Index: >24 ml/2g",
      "Mesh: 200 mesh"
    ],
    applications: [
      "Drilling mud",
      "Foundry molding",
      "Iron ore pelletizing",
      "Civil engineering"
    ],
    lastUpdated: "2025-12-04"
  },
  {
    name: "China Clay (Kaolin)",
    price: 150,
    unit: "USD/MT",
    description: "Premium kaolin clay for ceramics and paper industries.",
    specifications: [
      "Al2O3: 36-38%",
      "SiO2: 45-48%",
      "Whiteness: >85%",
      "Moisture: Max 10%"
    ],
    applications: [
      "Ceramic manufacturing",
      "Paper coating",
      "Rubber filler",
      "Paints and coatings"
    ],
    lastUpdated: "2025-12-04"
  },
  {
    name: "Quartz",
    price: 125,
    unit: "USD/MT",
    description: "High-purity quartz for electronics and solar applications.",
    specifications: [
      "SiO2: >99.5%",
      "Fe2O3: <0.02%",
      "Moisture: Max 1%",
      "Particle Size: Various grades"
    ],
    applications: [
      "Solar panel production",
      "Electronics manufacturing",
      "Glass making",
      "Semiconductor industry"
    ],
    lastUpdated: "2025-12-04"
  }
];

// Partner Mines Network
export const partnerMines: Mine[] = [
  {
    name: "Bailadila Iron Ore Mines",
    location: "Bailadila, Dantewada",
    state: "Chhattisgarh",
    minerals: ["Iron Ore"],
    capacity: "4 MTPA",
    established: "1968",
    lat: 18.6333,
    lng: 81.3167
  },
  {
    name: "Keonjhar Iron Ore Complex",
    location: "Keonjhar District",
    state: "Odisha",
    minerals: ["Iron Ore", "Manganese"],
    capacity: "15 MTPA",
    lat: 21.6294,
    lng: 85.5815
  },
  {
    name: "Bellary-Hospet Iron Ore Belt",
    location: "Bellary District",
    state: "Karnataka",
    minerals: ["Iron Ore"],
    capacity: "20 MTPA",
    lat: 15.1394,
    lng: 76.9214
  },
  {
    name: "Panchpatmali Bauxite Mines",
    location: "Koraput District",
    state: "Odisha",
    minerals: ["Bauxite"],
    capacity: "6.3 MTPA",
    established: "1980",
    lat: 18.8130,
    lng: 82.7109
  },
  {
    name: "Jharia Coalfield",
    location: "Dhanbad District",
    state: "Jharkhand",
    minerals: ["Coal (Thermal)", "Coal (Metallurgical)"],
    capacity: "28 MTPA",
    lat: 23.7417,
    lng: 86.4150
  },
  {
    name: "Singrauli Coalfield",
    location: "Singrauli District",
    state: "Madhya Pradesh",
    minerals: ["Coal (Thermal)"],
    capacity: "60 MTPA",
    lat: 24.0864,
    lng: 82.6761
  },
  {
    name: "Talcher Coalfield",
    location: "Angul District",
    state: "Odisha",
    minerals: ["Coal (Thermal)"],
    capacity: "30 MTPA",
    lat: 20.9517,
    lng: 85.2261
  },
  {
    name: "Malanjkhand Copper Project",
    location: "Balaghat District",
    state: "Madhya Pradesh",
    minerals: ["Copper Ore"],
    capacity: "2 MTPA",
    lat: 21.8061,
    lng: 80.1864
  },
  {
    name: "Khetri Copper Complex",
    location: "Jhunjhunu District",
    state: "Rajasthan",
    minerals: ["Copper Ore"],
    capacity: "3.1 MTPA",
    lat: 28.0000,
    lng: 75.8000
  },
  {
    name: "Satna Limestone Belt",
    location: "Satna District",
    state: "Madhya Pradesh",
    minerals: ["Limestone"],
    capacity: "50 MTPA",
    lat: 24.6005,
    lng: 80.8322
  },
  {
    name: "Cuddapah Limestone Mines",
    location: "YSR District",
    state: "Andhra Pradesh",
    minerals: ["Limestone"],
    capacity: "25 MTPA",
    lat: 14.4674,
    lng: 78.8241
  },
  {
    name: "Nagpur Manganese Belt",
    location: "Nagpur District",
    state: "Maharashtra",
    minerals: ["Manganese Ore"],
    capacity: "1.5 MTPA",
    lat: 21.1458,
    lng: 79.0882
  },
  {
    name: "Sukinda Chromite Mines",
    location: "Jajpur District",
    state: "Odisha",
    minerals: ["Chromite"],
    capacity: "4 MTPA",
    lat: 20.8500,
    lng: 85.6500
  },
  {
    name: "Rajpura-Dariba Zinc Mines",
    location: "Rajsamand District",
    state: "Rajasthan",
    minerals: ["Zinc Ore", "Lead Ore"],
    capacity: "5 MTPA",
    lat: 25.0000,
    lng: 73.9000
  },
  {
    name: "Zawar Mines",
    location: "Udaipur District",
    state: "Rajasthan",
    minerals: ["Zinc Ore", "Lead Ore"],
    capacity: "4.2 MTPA",
    established: "1970",
    lat: 24.3600,
    lng: 73.7200
  },
  {
    name: "Bikaner Gypsum Mines",
    location: "Bikaner District",
    state: "Rajasthan",
    minerals: ["Gypsum"],
    capacity: "3 MTPA",
    lat: 28.0229,
    lng: 73.3119
  },
  {
    name: "Gujarat Silica Sand Mines",
    location: "Bharuch District",
    state: "Gujarat",
    minerals: ["Silica Sand"],
    capacity: "2 MTPA",
    lat: 21.7051,
    lng: 72.9959
  },
  {
    name: "Ajmer Feldspar Mines",
    location: "Ajmer District",
    state: "Rajasthan",
    minerals: ["Feldspar", "Quartz"],
    capacity: "0.5 MTPA",
    lat: 26.4499,
    lng: 74.6399
  },
  {
    name: "Jharkhand Mica Belt",
    location: "Koderma District",
    state: "Jharkhand",
    minerals: ["Mica"],
    capacity: "0.3 MTPA",
    lat: 24.4674,
    lng: 85.5996
  },
  {
    name: "Udaipur Talc Mines",
    location: "Udaipur District",
    state: "Rajasthan",
    minerals: ["Talc"],
    capacity: "0.8 MTPA",
    lat: 24.5854,
    lng: 73.7125
  },
  {
    name: "Tamil Nadu Graphite Mines",
    location: "Sivaganga District",
    state: "Tamil Nadu",
    minerals: ["Graphite"],
    capacity: "0.2 MTPA",
    lat: 9.8433,
    lng: 78.4808
  },
  {
    name: "Gujarat Bentonite Mines",
    location: "Kutch District",
    state: "Gujarat",
    minerals: ["Bentonite"],
    capacity: "1.5 MTPA",
    lat: 23.7337,
    lng: 69.8597
  },
  {
    name: "Kerala China Clay Mines",
    location: "Thiruvananthapuram",
    state: "Kerala",
    minerals: ["China Clay (Kaolin)"],
    capacity: "0.6 MTPA",
    lat: 8.5241,
    lng: 76.9366
  },
  {
    name: "Rajasthan Dolomite Mines",
    location: "Jaipur District",
    state: "Rajasthan",
    minerals: ["Dolomite"],
    capacity: "2.5 MTPA",
    lat: 26.9124,
    lng: 75.7873
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
