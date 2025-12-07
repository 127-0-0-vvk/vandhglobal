export const indianStates = [
  { name: "Andhra Pradesh", cities: ["Visakhapatnam", "Vijayawada", "Guntur", "Nellore", "Kurnool", "Rajahmundry"] },
  { name: "Arunachal Pradesh", cities: ["Itanagar", "Naharlagun", "Pasighat", "Tawang"] },
  { name: "Assam", cities: ["Guwahati", "Silchar", "Dibrugarh", "Jorhat", "Nagaon", "Tinsukia"] },
  { name: "Bihar", cities: ["Patna", "Gaya", "Bhagalpur", "Muzaffarpur", "Purnia", "Darbhanga"] },
  { name: "Chhattisgarh", cities: ["Raipur", "Bhilai", "Korba", "Bilaspur", "Durg", "Rajnandgaon"] },
  { name: "Goa", cities: ["Panaji", "Margao", "Vasco da Gama", "Mapusa", "Ponda"] },
  { name: "Gujarat", cities: ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Bhavnagar", "Jamnagar", "Gandhinagar"] },
  { name: "Haryana", cities: ["Faridabad", "Gurgaon", "Rohtak", "Panipat", "Karnal", "Sonipat", "Ambala"] },
  { name: "Himachal Pradesh", cities: ["Shimla", "Dharamshala", "Manali", "Solan", "Mandi", "Kullu"] },
  { name: "Jharkhand", cities: ["Ranchi", "Jamshedpur", "Dhanbad", "Bokaro", "Deoghar", "Hazaribagh"] },
  { name: "Karnataka", cities: ["Bangalore", "Mysore", "Hubli", "Mangalore", "Belgaum", "Gulbarga", "Bellary"] },
  { name: "Kerala", cities: ["Thiruvananthapuram", "Kochi", "Kozhikode", "Thrissur", "Kollam", "Palakkad"] },
  { name: "Madhya Pradesh", cities: ["Bhopal", "Indore", "Gwalior", "Jabalpur", "Ujjain", "Sagar", "Ratlam"] },
  { name: "Maharashtra", cities: ["Mumbai", "Pune", "Nagpur", "Nashik", "Aurangabad", "Solapur", "Kolhapur"] },
  { name: "Manipur", cities: ["Imphal", "Thoubal", "Bishnupur", "Churachandpur"] },
  { name: "Meghalaya", cities: ["Shillong", "Tura", "Nongstoin", "Jowai"] },
  { name: "Mizoram", cities: ["Aizawl", "Lunglei", "Champhai", "Serchhip"] },
  { name: "Nagaland", cities: ["Kohima", "Dimapur", "Mokokchung", "Tuensang"] },
  { name: "Odisha", cities: ["Bhubaneswar", "Cuttack", "Rourkela", "Brahmapur", "Puri", "Sambalpur"] },
  { name: "Punjab", cities: ["Ludhiana", "Amritsar", "Jalandhar", "Patiala", "Bathinda", "Mohali"] },
  { name: "Rajasthan", cities: ["Jaipur", "Jodhpur", "Udaipur", "Kota", "Ajmer", "Bikaner", "Alwar"] },
  { name: "Sikkim", cities: ["Gangtok", "Namchi", "Gyalshing", "Mangan"] },
  { name: "Tamil Nadu", cities: ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem", "Tirunelveli"] },
  { name: "Telangana", cities: ["Hyderabad", "Warangal", "Nizamabad", "Khammam", "Karimnagar", "Mahbubnagar"] },
  { name: "Tripura", cities: ["Agartala", "Dharmanagar", "Udaipur", "Kailashahar"] },
  { name: "Uttar Pradesh", cities: ["Lucknow", "Kanpur", "Ghaziabad", "Agra", "Varanasi", "Meerut", "Allahabad", "Noida"] },
  { name: "Uttarakhand", cities: ["Dehradun", "Haridwar", "Roorkee", "Haldwani", "Rudrapur", "Kashipur"] },
  { name: "West Bengal", cities: ["Kolkata", "Howrah", "Durgapur", "Asansol", "Siliguri", "Kharagpur"] },
  { name: "Delhi", cities: ["New Delhi", "South Delhi", "North Delhi", "East Delhi", "West Delhi"] }
];

export const getAreasForCity = (city: string): string[] => {
  // Common areas for major cities
  const cityAreas: { [key: string]: string[] } = {
    "Mumbai": ["Andheri", "Bandra", "Borivali", "Thane", "Navi Mumbai", "Dadar", "Kurla"],
    "Delhi": ["Connaught Place", "Karol Bagh", "Dwarka", "Rohini", "Saket", "Lajpat Nagar"],
    "Bangalore": ["Whitefield", "Koramangala", "Indiranagar", "Electronic City", "Marathahalli", "JP Nagar"],
    "Pune": ["Hinjewadi", "Kharadi", "Wakad", "Baner", "Pimpri-Chinchwad", "Viman Nagar"],
    "Chennai": ["T Nagar", "Anna Nagar", "Velachery", "Adyar", "Tambaram", "Porur"],
    "Hyderabad": ["Hitech City", "Gachibowli", "Madhapur", "Secunderabad", "Kukatpally", "Miyapur"],
    "Kolkata": ["Salt Lake", "Howrah", "Park Street", "Rajarhat", "Ballygunge", "Alipore"],
    "Ahmedabad": ["Satellite", "Vastrapur", "Prahlad Nagar", "Navrangpura", "Maninagar", "Chandkheda"],
    "Surat": ["Adajan", "Vesu", "Pal", "Katargam", "Varachha", "Magdalla"],
    "Jaipur": ["Malviya Nagar", "Vaishali Nagar", "Mansarovar", "Jagatpura", "Ajmer Road", "Tonk Road"]
  };

  return cityAreas[city] || ["City Center", "Industrial Area", "Residential Area", "Commercial Zone"];
};
