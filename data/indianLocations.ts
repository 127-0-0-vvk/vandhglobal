// Enhanced location data with districts and comprehensive areas
export interface StateData {
  name: string;
  districts: DistrictData[];
}

export interface DistrictData {
  name: string;
  cities: string[];
}

export const indianStates: StateData[] = [
  {
    name: "Andhra Pradesh",
    districts: [
      { name: "Visakhapatnam", cities: ["Visakhapatnam", "Anakapalli", "Bheemunipatnam"] },
      { name: "Vijayawada", cities: ["Vijayawada", "Machilipatnam", "Tenali"] },
      { name: "Guntur", cities: ["Guntur", "Chilakaluripet", "Narasaraopet"] },
      { name: "Nellore", cities: ["Nellore", "Gudur", "Kavali"] },
      { name: "Kurnool", cities: ["Kurnool", "Adoni", "Nandyal"] },
      { name: "East Godavari", cities: ["Rajahmundry", "Kakinada", "Amalapuram"] }
    ]
  },
  {
    name: "Arunachal Pradesh",
    districts: [
      { name: "Papum Pare", cities: ["Itanagar", "Naharlagun", "Doimukh"] },
      { name: "East Siang", cities: ["Pasighat", "Mebo"] },
      { name: "Tawang", cities: ["Tawang", "Lumla"] }
    ]
  },
  {
    name: "Assam",
    districts: [
      { name: "Kamrup", cities: ["Guwahati", "Sonapur", "Boko"] },
      { name: "Cachar", cities: ["Silchar", "Lakhipur", "Sonai"] },
      { name: "Dibrugarh", cities: ["Dibrugarh", "Naharkatia", "Tingkhong"] },
      { name: "Jorhat", cities: ["Jorhat", "Titabor", "Teok"] },
      { name: "Nagaon", cities: ["Nagaon", "Hojai", "Lumding"] }
    ]
  },
  {
    name: "Bihar",
    districts: [
      { name: "Patna", cities: ["Patna", "Danapur", "Fatuha", "Khagaul"] },
      { name: "Gaya", cities: ["Gaya", "Bodh Gaya", "Manpur"] },
      { name: "Bhagalpur", cities: ["Bhagalpur", "Nathnagar", "Sultanganj"] },
      { name: "Muzaffarpur", cities: ["Muzaffarpur", "Kurhani", "Minapur"] },
      { name: "Purnia", cities: ["Purnia", "Kasba", "Banmankhi"] }
    ]
  },
  {
    name: "Chhattisgarh",
    districts: [
      { name: "Raipur", cities: ["Raipur", "Arang", "Tilda"] },
      { name: "Durg", cities: ["Bhilai", "Durg", "Patan"] },
      { name: "Korba", cities: ["Korba", "Katghora", "Podi-Uproda"] },
      { name: "Bilaspur", cities: ["Bilaspur", "Ratanpur", "Kota"] },
      { name: "Rajnandgaon", cities: ["Rajnandgaon", "Dongargaon", "Chhuikhadan"] }
    ]
  },
  {
    name: "Goa",
    districts: [
      { name: "North Goa", cities: ["Panaji", "Mapusa", "Ponda", "Bicholim"] },
      { name: "South Goa", cities: ["Margao", "Vasco da Gama", "Quepem", "Canacona"] }
    ]
  },
  {
    name: "Gujarat",
    districts: [
      { name: "Ahmedabad", cities: ["Ahmedabad", "Sanand", "Dholka", "Viramgam"] },
      { name: "Surat", cities: ["Surat", "Bardoli", "Mandvi", "Kamrej"] },
      { name: "Vadodara", cities: ["Vadodara", "Dabhoi", "Karjan", "Padra"] },
      { name: "Rajkot", cities: ["Rajkot", "Gondal", "Jasdan", "Kotda Sangani"] },
      { name: "Bhavnagar", cities: ["Bhavnagar", "Sihor", "Talaja", "Mahuva"] },
      { name: "Jamnagar", cities: ["Jamnagar", "Dwarka", "Khambhalia", "Okha"] },
      { name: "Gandhinagar", cities: ["Gandhinagar", "Kalol", "Mansa", "Dehgam"] }
    ]
  },
  {
    name: "Haryana",
    districts: [
      { name: "Faridabad", cities: ["Faridabad", "Ballabgarh", "Tigaon"] },
      { name: "Gurugram", cities: ["Gurgaon", "Pataudi", "Sohna", "Manesar"] },
      { name: "Rohtak", cities: ["Rohtak", "Meham", "Kalanaur"] },
      { name: "Panipat", cities: ["Panipat", "Samalkha", "Madlauda"] },
      { name: "Karnal", cities: ["Karnal", "Assandh", "Nilokheri", "Indri"] },
      { name: "Sonipat", cities: ["Sonipat", "Gohana", "Murthal", "Ganaur"] },
      { name: "Ambala", cities: ["Ambala", "Naraingarh", "Barara", "Shahbad"] }
    ]
  },
  {
    name: "Himachal Pradesh",
    districts: [
      { name: "Shimla", cities: ["Shimla", "Theog", "Rampur"] },
      { name: "Kangra", cities: ["Dharamshala", "Kangra", "Palampur"] },
      { name: "Kullu", cities: ["Kullu", "Manali", "Bhuntar"] },
      { name: "Solan", cities: ["Solan", "Nalagarh", "Baddi"] },
      { name: "Mandi", cities: ["Mandi", "Jogindernagar", "Sundernagar"] }
    ]
  },
  {
    name: "Jharkhand",
    districts: [
      { name: "Ranchi", cities: ["Ranchi", "Bundu", "Kanke"] },
      { name: "East Singhbhum", cities: ["Jamshedpur", "Ghatshila", "Chaibasa"] },
      { name: "Dhanbad", cities: ["Dhanbad", "Jharia", "Sindri"] },
      { name: "Bokaro", cities: ["Bokaro", "Chas", "Phusro"] },
      { name: "Deoghar", cities: ["Deoghar", "Madhupur", "Sarath"] },
      { name: "Hazaribagh", cities: ["Hazaribagh", "Chouparan", "Barhi"] }
    ]
  },
  {
    name: "Karnataka",
    districts: [
      { name: "Bangalore Urban", cities: ["Bangalore", "Anekal", "Byatarayanapura"] },
      { name: "Mysore", cities: ["Mysore", "Nanjangud", "T. Narsipur"] },
      { name: "Dharwad", cities: ["Hubli", "Dharwad", "Kalghatgi"] },
      { name: "Dakshina Kannada", cities: ["Mangalore", "Puttur", "Bantwal"] },
      { name: "Belgaum", cities: ["Belgaum", "Chikodi", "Gokak"] },
      { name: "Gulbarga", cities: ["Gulbarga", "Chincholi", "Sedam"] },
      { name: "Bellary", cities: ["Bellary", "Hospet", "Sandur"] }
    ]
  },
  {
    name: "Kerala",
    districts: [
      { name: "Thiruvananthapuram", cities: ["Thiruvananthapuram", "Neyyattinkara", "Varkala"] },
      { name: "Ernakulam", cities: ["Kochi", "Aluva", "Perumbavoor", "Angamaly"] },
      { name: "Kozhikode", cities: ["Kozhikode", "Vadakara", "Koyilandy"] },
      { name: "Thrissur", cities: ["Thrissur", "Chavakkad", "Kunnamkulam"] },
      { name: "Kollam", cities: ["Kollam", "Karunagappally", "Paravur"] },
      { name: "Palakkad", cities: ["Palakkad", "Ottapalam", "Chittur"] }
    ]
  },
  {
    name: "Madhya Pradesh",
    districts: [
      { name: "Bhopal", cities: ["Bhopal", "Berasia", "Huzur"] },
      { name: "Indore", cities: ["Indore", "Mhow", "Sanwer", "Depalpur"] },
      { name: "Gwalior", cities: ["Gwalior", "Dabra", "Bhitarwar"] },
      { name: "Jabalpur", cities: ["Jabalpur", "Sihora", "Patan"] },
      { name: "Ujjain", cities: ["Ujjain", "Mahidpur", "Tarana"] },
      { name: "Sagar", cities: ["Sagar", "Khurai", "Rehli"] }
    ]
  },
  {
    name: "Maharashtra",
    districts: [
      { name: "Mumbai Suburban", cities: ["Mumbai", "Andheri", "Borivali", "Bandra", "Kurla"] },
      { name: "Thane", cities: ["Thane", "Navi Mumbai", "Kalyan", "Ambernath"] },
      { name: "Pune", cities: ["Pune", "Pimpri-Chinchwad", "Talegaon", "Lonavala"] },
      { name: "Nagpur", cities: ["Nagpur", "Kamptee", "Ramtek", "Umred"] },
      { name: "Nashik", cities: ["Nashik", "Malegaon", "Sinnar", "Igatpuri"] },
      { name: "Aurangabad", cities: ["Aurangabad", "Paithan", "Gangapur"] },
      { name: "Solapur", cities: ["Solapur", "Barshi", "Pandharpur", "Akkalkot"] },
      { name: "Kolhapur", cities: ["Kolhapur", "Ichalkaranji", "Kagal", "Panhala"] }
    ]
  },
  {
    name: "Manipur",
    districts: [
      { name: "Imphal West", cities: ["Imphal", "Lamphelpat", "Porompat"] },
      { name: "Thoubal", cities: ["Thoubal", "Lilong", "Yairipok"] },
      { name: "Bishnupur", cities: ["Bishnupur", "Moirang", "Nambol"] }
    ]
  },
  {
    name: "Meghalaya",
    districts: [
      { name: "East Khasi Hills", cities: ["Shillong", "Sohra", "Pynursla"] },
      { name: "West Garo Hills", cities: ["Tura", "Phulbari", "Rongram"] }
    ]
  },
  {
    name: "Mizoram",
    districts: [
      { name: "Aizawl", cities: ["Aizawl", "Darlawn", "Thingsulthliah"] },
      { name: "Lunglei", cities: ["Lunglei", "Hnahthial"] },
      { name: "Champhai", cities: ["Champhai", "Khawzawl"] }
    ]
  },
  {
    name: "Nagaland",
    districts: [
      { name: "Kohima", cities: ["Kohima", "Tseminyu", "Jalukie"] },
      { name: "Dimapur", cities: ["Dimapur", "Chumukedima", "Niuland"] },
      { name: "Mokokchung", cities: ["Mokokchung", "Tuli", "Chuchuyimlang"] }
    ]
  },
  {
    name: "Odisha",
    districts: [
      { name: "Khordha", cities: ["Bhubaneswar", "Jatni", "Balianta"] },
      { name: "Cuttack", cities: ["Cuttack", "Choudwar", "Banki"] },
      { name: "Sundargarh", cities: ["Rourkela", "Sundargarh", "Rajgangpur"] },
      { name: "Ganjam", cities: ["Brahmapur", "Chhatrapur", "Gopalpur"] },
      { name: "Puri", cities: ["Puri", "Konark", "Pipli"] },
      { name: "Sambalpur", cities: ["Sambalpur", "Burla", "Hirakud"] }
    ]
  },
  {
    name: "Punjab",
    districts: [
      { name: "Ludhiana", cities: ["Ludhiana", "Khanna", "Samrala", "Jagraon"] },
      { name: "Amritsar", cities: ["Amritsar", "Ajnala", "Tarn Taran"] },
      { name: "Jalandhar", cities: ["Jalandhar", "Nakodar", "Phillaur"] },
      { name: "Patiala", cities: ["Patiala", "Rajpura", "Nabha", "Samana"] },
      { name: "Bathinda", cities: ["Bathinda", "Talwandi Sabo", "Rampura"] },
      { name: "Mohali", cities: ["Mohali", "Kharar", "Kurali", "Zirakpur"] }
    ]
  },
  {
    name: "Rajasthan",
    districts: [
      { name: "Jaipur", cities: ["Jaipur", "Sanganer", "Amber", "Chaksu"] },
      { name: "Jodhpur", cities: ["Jodhpur", "Bilara", "Phalodi", "Osian"] },
      { name: "Udaipur", cities: ["Udaipur", "Mavli", "Kherwara"] },
      { name: "Kota", cities: ["Kota", "Sangod", "Ladpura"] },
      { name: "Ajmer", cities: ["Ajmer", "Pushkar", "Beawar", "Kishangarh"] },
      { name: "Bikaner", cities: ["Bikaner", "Nokha", "Khajuwala"] },
      { name: "Alwar", cities: ["Alwar", "Behror", "Tijara", "Rajgarh"] }
    ]
  },
  {
    name: "Sikkim",
    districts: [
      { name: "East Sikkim", cities: ["Gangtok", "Rangpo", "Pakyong"] },
      { name: "South Sikkim", cities: ["Namchi", "Ravangla", "Jorethang"] }
    ]
  },
  {
    name: "Tamil Nadu",
    districts: [
      { name: "Chennai", cities: ["Chennai", "Tambaram", "Avadi", "Ambattur"] },
      { name: "Coimbatore", cities: ["Coimbatore", "Pollachi", "Valparai", "Mettupalayam"] },
      { name: "Madurai", cities: ["Madurai", "Melur", "Usilampatti"] },
      { name: "Tiruchirappalli", cities: ["Tiruchirappalli", "Srirangam", "Lalgudi"] },
      { name: "Salem", cities: ["Salem", "Mettur", "Attur", "Edappadi"] },
      { name: "Tirunelveli", cities: ["Tirunelveli", "Palayamkottai", "Sankarankovil"] }
    ]
  },
  {
    name: "Telangana",
    districts: [
      { name: "Hyderabad", cities: ["Hyderabad", "Secunderabad", "Kukatpally", "LB Nagar"] },
      { name: "Warangal Urban", cities: ["Warangal", "Hanamkonda", "Kazipet"] },
      { name: "Nizamabad", cities: ["Nizamabad", "Armoor", "Bodhan"] },
      { name: "Khammam", cities: ["Khammam", "Kothagudem", "Yellandu"] },
      { name: "Karimnagar", cities: ["Karimnagar", "Jagtial", "Huzurabad"] }
    ]
  },
  {
    name: "Tripura",
    districts: [
      { name: "West Tripura", cities: ["Agartala", "Mohanpur", "Jirania"] },
      { name: "North Tripura", cities: ["Dharmanagar", "Kanchanpur", "Panisagar"] }
    ]
  },
  {
    name: "Uttar Pradesh",
    districts: [
      { name: "Lucknow", cities: ["Lucknow", "Malihabad", "Mohanlalganj"] },
      { name: "Kanpur Nagar", cities: ["Kanpur", "Ghatampur", "Bilhaur"] },
      { name: "Ghaziabad", cities: ["Ghaziabad", "Loni", "Muradnagar", "Modinagar"] },
      { name: "Agra", cities: ["Agra", "Fatehabad", "Kiraoli"] },
      { name: "Varanasi", cities: ["Varanasi", "Pindra", "Chiraigaon"] },
      { name: "Meerut", cities: ["Meerut", "Mawana", "Sardhana"] },
      { name: "Allahabad", cities: ["Allahabad", "Phulpur", "Soraon", "Handia"] },
      { name: "Gautam Buddha Nagar", cities: ["Noida", "Greater Noida", "Dadri"] }
    ]
  },
  {
    name: "Uttarakhand",
    districts: [
      { name: "Dehradun", cities: ["Dehradun", "Mussoorie", "Rishikesh", "Vikasnagar"] },
      { name: "Haridwar", cities: ["Haridwar", "Roorkee", "Laksar"] },
      { name: "Udham Singh Nagar", cities: ["Rudrapur", "Kashipur", "Kichha", "Sitarganj"] },
      { name: "Nainital", cities: ["Haldwani", "Nainital", "Ramnagar", "Bhowali"] }
    ]
  },
  {
    name: "West Bengal",
    districts: [
      { name: "Kolkata", cities: ["Kolkata", "Garden Reach", "Behala"] },
      { name: "Howrah", cities: ["Howrah", "Uluberia", "Bally"] },
      { name: "Bardhaman", cities: ["Durgapur", "Asansol", "Bardhaman"] },
      { name: "Darjeeling", cities: ["Siliguri", "Darjeeling", "Kalimpong"] },
      { name: "Paschim Medinipur", cities: ["Kharagpur", "Medinipur", "Jhargram"] }
    ]
  },
  {
    name: "Delhi",
    districts: [
      { name: "Central Delhi", cities: ["Connaught Place", "Karol Bagh", "Paharganj"] },
      { name: "South Delhi", cities: ["Saket", "Lajpat Nagar", "Hauz Khas", "Defence Colony"] },
      { name: "North Delhi", cities: ["Civil Lines", "Model Town", "Kamla Nagar"] },
      { name: "East Delhi", cities: ["Laxmi Nagar", "Preet Vihar", "Mayur Vihar"] },
      { name: "West Delhi", cities: ["Dwarka", "Janakpuri", "Rajouri Garden", "Tilak Nagar"] },
      { name: "New Delhi", cities: ["Chanakyapuri", "Vasant Vihar", "Diplomatic Enclave"] }
    ]
  }
];

// Expanded area data for major cities - includes industrial zones, residential areas, commercial hubs
export const getAreasForCity = (city: string): string[] => {
  const cityAreas: { [key: string]: string[] } = {
    // Maharashtra
    "Mumbai": [
      "Andheri East", "Andheri West", "Bandra East", "Bandra West", "Borivali East", "Borivali West",
      "Dadar East", "Dadar West", "Kurla East", "Kurla West", "Goregaon East", "Goregaon West",
      "Malad East", "Malad West", "Powai", "Vikhroli", "Ghatkopar", "Mulund", "Bhandup",
      "Chembur", "Santacruz", "Vile Parle", "Juhu", "Versova", "Kandivali", "Dahisar"
    ],
    "Thane": ["Thane West", "Thane East", "Majiwada", "Vartak Nagar", "Ghodbunder Road", "Wagle Estate", "Kasarvadavali", "Kolshet"],
    "Navi Mumbai": ["Vashi", "Nerul", "Belapur", "Kharghar", "Kamothe", "Panvel", "Airoli", "Ghansoli", "Kopar Khairane"],
    "Pune": [
      "Hinjewadi Phase 1", "Hinjewadi Phase 2", "Hinjewadi Phase 3", "Kharadi", "Wakad", "Baner",
      "Pimpri-Chinchwad", "Viman Nagar", "Hadapsar", "Magarpatta", "Aundh", "Koregaon Park",
      "Kothrud", "Warje", "Katraj", "Sinhagad Road", "Wagholi", "Mundhwa"
    ],
    "Nagpur": ["Sitabuldi", "Dharampeth", "Civil Lines", "Sadar", "Pratap Nagar", "Laxmi Nagar", "MIDC Hingna", "Wadi"],

    // Delhi NCR
    "Delhi": [
      "Connaught Place", "Karol Bagh", "Dwarka Sector 1-28", "Rohini Sector 1-40", "Saket", "Lajpat Nagar",
      "Nehru Place", "Green Park", "Hauz Khas", "Okhla Industrial Area", "Mayur Vihar Phase 1-3",
      "Laxmi Nagar", "Preet Vihar", "Janakpuri", "Rajouri Garden", "Tilak Nagar", "Vasant Kunj",
      "Pitampura", "Shalimar Bagh", "Model Town", "Civil Lines", "Chandni Chowk"
    ],
    "Noida": [
      "Sector 1-168", "Noida Expressway", "Film City", "Greater Noida West", "Knowledge Park",
      "Alpha Commercial Belt", "Beta Greater Noida", "Gamma Greater Noida", "Delta Greater Noida"
    ],
    "Ghaziabad": ["Indirapuram", "Vaishali", "Crossings Republik", "Raj Nagar Extension", "Kaushambi", "Vasundhara"],
    "Gurgaon": [
      "Cyber City", "DLF Phase 1-5", "Sector 14-115", "Golf Course Road", "Sohna Road", "MG Road",
      "Udyog Vihar", "IMT Manesar", "Palam Vihar", "South City", "Nirvana Country"
    ],

    // Karnataka
    "Bangalore": [
      "Whitefield", "Koramangala", "Indiranagar", "Electronic City Phase 1-2", "Marathahalli", "JP Nagar",
      "HSR Layout", "BTM Layout", "Jayanagar", "Banashankari", "Bannerghatta Road", "Sarjapur Road",
      "Hebbal", "Yelahanka", "Bellandur", "Kadubisanahalli", "Domlur", "Frazer Town", "MG Road",
      "Brigade Road", "KR Puram", "Malleshwaram", "Rajajinagar", "Basavanagudi", "ITPL", "Bagmane Tech Park"
    ],
    "Mysore": ["Kuvempunagar", "Vijayanagar", "Gokulam", "Jayalakshmipuram", "Saraswathipuram", "VV Mohalla"],
    "Mangalore": ["Hampankatta", "Balmatta", "Kadri", "Kankanady", "Urwa", "Surathkal", "Bunder"],

    // Tamil Nadu
    "Chennai": [
      "T Nagar", "Anna Nagar", "Velachery", "Adyar", "Tambaram", "Porur", "Guindy", "Nungambakkam",
      "Egmore", "Mylapore", "Chrompet", "Sholinganallur", "OMR", "Perungudi", "Thoraipakkam",
      "Ambattur", "Avadi", "Poonamallee", "Medavakkam", "Pallavaram", "ECR", "Besant Nagar"
    ],
    "Coimbatore": ["RS Puram", "Gandhipuram", "Peelamedu", "Saibaba Colony", "Singanallur", "Kuniyamuthur", "Tidel Park"],

    // Telangana
    "Hyderabad": [
      "Hitech City", "Gachibowli", "Madhapur", "Secunderabad", "Kukatpally", "Miyapur", "Begumpet",
      "Banjara Hills", "Jubilee Hills", "Kondapur", "Uppal", "LB Nagar", "Dilsukhnagar", "Kompally",
      "Ameerpet", "SR Nagar", "Koti", "Abids", "Tolichowki", "Mehdipatnam", "Financial District",
      "Nanakramguda", "Manikonda", "Kokapet", "Gachibowli", "Cyber Towers"
    ],

    // West Bengal
    "Kolkata": [
      "Salt Lake Sector 1-5", "Howrah", "Park Street", "Rajarhat", "Ballygunge", "Alipore",
      "New Town", "Bidhannagar", "Dum Dum", "Jadavpur", "Behala", "Tollygunge", "Gariahat",
      "Kasba", "Lake Gardens", "Bhowanipore", "Kalighat", "Ultadanga"
    ],
    "Siliguri": ["Sevoke Road", "Matigara", "Pradhan Nagar", "Jalpaiguri Road", "Hill Cart Road"],

    // Gujarat
    "Ahmedabad": [
      "Satellite", "Vastrapur", "Prahlad Nagar", "Navrangpura", "Maninagar", "Chandkheda",
      "Bopal", "Science City", "SG Highway", "Sindhu Bhavan Road", "CG Road", "Ashram Road",
      "Iscon", "Paldi", "Naranpura", "Thaltej", "Bodakdev", "Ambawadi"
    ],
    "Surat": ["Adajan", "Vesu", "Pal", "Katargam", "Varachha", "Magdalla", "Althan", "Piplod", "Citylight"],

    // Rajasthan
    "Jaipur": [
      "Malviya Nagar", "Vaishali Nagar", "Mansarovar", "Jagatpura", "Ajmer Road", "Tonk Road",
      "C Scheme", "MI Road", "Bapu Nagar", "Sodala", "Raja Park", "Lal Kothi", "Sitapura Industrial Area"
    ],

    // Uttar Pradesh
    "Lucknow": ["Gomti Nagar", "Hazratganj", "Aliganj", "Indira Nagar", "Alambagh", "Vikas Nagar", "Chinhat"],
    "Kanpur": ["Civil Lines", "Kakadeo", "Swaroop Nagar", "Kalyanpur", "Govind Nagar", "Panki Industrial Area"],
    "Agra": ["Kamla Nagar", "Sanjay Place", "Dayal Bagh", "Sikandra", "Fatehabad Road", "MG Road"],
    "Varanasi": ["Lanka", "Sigra", "Sarnath", "Bhelupur", "Ravindrapuri", "Nadesar"],

    // Punjab
    "Ludhiana": ["Model Town", "Civil Lines", "Sarabha Nagar", "Dugri", "PAU", "Focal Point Industrial Area"],
    "Amritsar": ["Ranjit Avenue", "Lawrence Road", "Majitha Road", "Chheharta", "Mall Road"],

    // Madhya Pradesh
    "Indore": ["Vijay Nagar", "AB Road", "MG Road", "Palasia", "Sapna Sangeeta", "Rau", "Pithampur Industrial Area"],
    "Bhopal": ["MP Nagar", "Arera Colony", "Shahpura", "Kolar Road", "Hoshangabad Road", "Ayodhya Bypass"],

    // Bihar
    "Patna": ["Boring Road", "Fraser Road", "Kankarbagh", "Rajendra Nagar", "Bailey Road", "Danapur", "Patliputra"],

    // Jharkhand
    "Jamshedpur": ["Bistupur", "Sakchi", "Sonari", "Kadma", "Mango", "Adityapur Industrial Area"],
    "Ranchi": ["Main Road", "Lalpur", "Kanke Road", "Doranda", "Hinoo", "Circular Road"],

    // Odisha
    "Bhubaneswar": ["Patia", "Chandrasekharpur", "Khandagiri", "Jaydev Vihar", "Nayapalli", "Saheed Nagar", "Mancheswar Industrial Estate"],

    // Kerala
    "Kochi": ["Edappally", "Kakkanad", "Palarivattom", "MG Road", "Marine Drive", "Fort Kochi", "Infopark", "Tripunithura"],
    "Thiruvananthapuram": ["Technopark", "Kazhakkoottam", "Pattom", "Kesavadasapuram", "Vellayambalam", "Sasthamangalam"]
  };

  return cityAreas[city] || [
    "City Center", "Industrial Area Phase 1", "Industrial Area Phase 2", "Residential Zone A",
    "Residential Zone B", "Commercial Hub", "Market Area", "Railway Station Road",
    "Bus Stand Area", "MIDC Area", "IT Park", "Export Zone"
  ];
};

// Get all cities for a district
export const getCitiesForDistrict = (stateName: string, districtName: string): string[] => {
  const state = indianStates.find(s => s.name === stateName);
  if (!state) return [];

  const district = state.districts.find(d => d.name === districtName);
  return district?.cities || [];
};

// Get all districts for a state
export const getDistrictsForState = (stateName: string): DistrictData[] => {
  const state = indianStates.find(s => s.name === stateName);
  return state?.districts || [];
};
