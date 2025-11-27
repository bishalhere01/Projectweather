// backend/src/data/mockWeatherData.js
/**
 * Extended MOCK WEATHER DATA
 * Includes 30+ Indian states & 100+ random global cities.
 */

const MOCK = {
  // 🌍 Global cities
  London:   { location: "London",   temperature: 12, windSpeed: 8, humidity: 80, generalCondition: "Rainy" },
  Mumbai:   { location: "Mumbai",   temperature: 30, windSpeed: 10, humidity: 70, generalCondition: "Sunny" },
  Delhi:    { location: "Delhi",    temperature: 18, windSpeed: 6, humidity: 40, generalCondition: "Cloudy" },
  Paris:    { location: "Paris",    temperature: 15, windSpeed: 7, humidity: 60, generalCondition: "Cloudy" },
  Tokyo:    { location: "Tokyo",    temperature: 22, windSpeed: 9, humidity: 65, generalCondition: "Sunny" },
  NewYork:  { location: "New York", temperature: 17, windSpeed: 12, humidity: 72, generalCondition: "Cloudy" },
  Dubai:    { location: "Dubai",    temperature: 35, windSpeed: 9, humidity: 30, generalCondition: "Sunny" },
  Moscow:   { location: "Moscow",   temperature: -3, windSpeed: 10, humidity: 85, generalCondition: "Snowy" },
  Sydney:   { location: "Sydney",   temperature: 26, windSpeed: 14, humidity: 68, generalCondition: "Sunny" },
  Singapore:{ location: "Singapore",temperature: 31, windSpeed: 8, humidity: 82, generalCondition: "Rainy" },

  // 🇮🇳 Indian States & Union Territories (Realistic Weather Simulation)
  "Andhra Pradesh": { location: "Andhra Pradesh", temperature: 33, windSpeed: 9, humidity: 60, generalCondition: "Sunny" },
  "Arunachal Pradesh": { location: "Arunachal Pradesh", temperature: 18, windSpeed: 6, humidity: 85, generalCondition: "Cloudy" },
  Assam: { location: "Assam", temperature: 28, windSpeed: 5, humidity: 88, generalCondition: "Rainy" },
  Bihar: { location: "Bihar", temperature: 30, windSpeed: 8, humidity: 70, generalCondition: "Sunny" },
  Chhattisgarh: { location: "Chhattisgarh", temperature: 32, windSpeed: 7, humidity: 65, generalCondition: "Sunny" },
  Goa: { location: "Goa", temperature: 29, windSpeed: 12, humidity: 78, generalCondition: "Rainy" },
  Gujarat: { location: "Gujarat", temperature: 35, windSpeed: 10, humidity: 50, generalCondition: "Sunny" },
  Haryana: { location: "Haryana", temperature: 27, windSpeed: 7, humidity: 55, generalCondition: "Cloudy" },
  Himachal: { location: "Himachal Pradesh", temperature: 15, windSpeed: 5, humidity: 70, generalCondition: "Cloudy" },
  Jharkhand: { location: "Jharkhand", temperature: 29, windSpeed: 7, humidity: 68, generalCondition: "Sunny" },
  Karnataka: { location: "Karnataka", temperature: 28, windSpeed: 9, humidity: 72, generalCondition: "Rainy" },
  Kerala: { location: "Kerala", temperature: 27, windSpeed: 8, humidity: 90, generalCondition: "Rainy" },
  MadhyaPradesh: { location: "Madhya Pradesh", temperature: 31, windSpeed: 8, humidity: 60, generalCondition: "Sunny" },
  Maharashtra: { location: "Maharashtra", temperature: 33, windSpeed: 9, humidity: 65, generalCondition: "Sunny" },
  Manipur: { location: "Manipur", temperature: 22, windSpeed: 5, humidity: 80, generalCondition: "Cloudy" },
  Meghalaya: { location: "Meghalaya", temperature: 20, windSpeed: 4, humidity: 88, generalCondition: "Rainy" },
  Mizoram: { location: "Mizoram", temperature: 23, windSpeed: 5, humidity: 85, generalCondition: "Cloudy" },
  Nagaland: { location: "Nagaland", temperature: 21, windSpeed: 6, humidity: 82, generalCondition: "Rainy" },
  Odisha: { location: "Odisha", temperature: 30, windSpeed: 8, humidity: 70, generalCondition: "Sunny" },
  Punjab: { location: "Punjab", temperature: 25, windSpeed: 8, humidity: 55, generalCondition: "Cloudy" },
  Rajasthan: { location: "Rajasthan", temperature: 38, windSpeed: 12, humidity: 35, generalCondition: "Sunny" },
  Sikkim: { location: "Sikkim", temperature: 18, windSpeed: 5, humidity: 85, generalCondition: "Rainy" },
  TamilNadu: { location: "Tamil Nadu", temperature: 33, windSpeed: 10, humidity: 70, generalCondition: "Sunny" },
  Telangana: { location: "Telangana", temperature: 32, windSpeed: 8, humidity: 68, generalCondition: "Sunny" },
  Tripura: { location: "Tripura", temperature: 26, windSpeed: 7, humidity: 82, generalCondition: "Rainy" },
  Uttarakhand: { location: "Uttarakhand", temperature: 19, windSpeed: 6, humidity: 75, generalCondition: "Cloudy" },
  UP: { location: "Uttar Pradesh", temperature: 28, windSpeed: 7, humidity: 65, generalCondition: "Cloudy" },
  WB: { location: "West Bengal", temperature: 30, windSpeed: 9, humidity: 80, generalCondition: "Rainy" },
  "Jammu & Kashmir": { location: "Jammu & Kashmir", temperature: 10, windSpeed: 5, humidity: 78, generalCondition: "Snowy" },
  "Ladakh": { location: "Ladakh", temperature: 5, windSpeed: 7, humidity: 40, generalCondition: "Snowy" },
  "Andaman & Nicobar": { location: "Andaman & Nicobar Islands", temperature: 29, windSpeed: 12, humidity: 88, generalCondition: "Rainy" },
  "Chandigarh": { location: "Chandigarh", temperature: 26, windSpeed: 8, humidity: 60, generalCondition: "Cloudy" },
  "Puducherry": { location: "Puducherry", temperature: 31, windSpeed: 9, humidity: 70, generalCondition: "Sunny" },
};

// 🌐 Add 100+ more cities for realism
const randomCities = [
  "Indore", "Bhopal", "Jaipur", "Surat", "Lucknow", "Kolkata", "Ahmedabad", "Patna", "Chennai", "Hyderabad",
  "Coimbatore", "Nagpur", "Pune", "Kanpur", "Noida", "Gurgaon", "Varanasi", "Amritsar", "Dehradun", "Shimla",
  "Ranchi", "Raipur", "Thiruvananthapuram", "Vishakhapatnam", "Mysuru", "Kozhikode", "Jodhpur", "Udaipur", "Agra",
  "Meerut", "Moradabad", "Bareilly", "Gwalior", "Jabalpur", "Bikaner", "Ajmer", "Haridwar", "Rishikesh", "Panaji",
  "Kochi", "Madurai", "Erode", "Tiruchirappalli", "Tirunelveli", "Kollam", "Thrissur", "Alappuzha", "Mangalore",
  "Hubli", "Belgaum", "Davangere", "Gadag", "Kolar", "Ballari", "Warangal", "Karimnagar", "Nizamabad", "Khammam"
];

for (const city of randomCities) {
  const temp = Math.floor(Math.random() * 40) - 2;
  const wind = Math.floor(Math.random() * 15) + 3;
  const hum  = Math.floor(Math.random() * 50) + 40;
  const conds = ["Sunny", "Cloudy", "Rainy", "Windy", "Foggy"];
  const cond = conds[Math.floor(Math.random() * conds.length)];
  MOCK[city] = { location: city, temperature: temp, windSpeed: wind, humidity: hum, generalCondition: cond };
}

/**
 * Main function to simulate a mock API response
 */
function mockWeatherFor(location) {
  if (!location) return { location: "Unknown", temperature: 25, windSpeed: 6, humidity: 60, generalCondition: "Sunny" };

  const key = location.replace(/\s+/g, "").toLowerCase();
  const found = Object.keys(MOCK).find(c => c.replace(/\s+/g, "").toLowerCase() === key);
  if (found) return MOCK[found];

  const temp = Math.floor(Math.random() * 35);
  const conds = ["Sunny", "Cloudy", "Rainy", "Windy"];
  const cond = conds[Math.floor(Math.random() * conds.length)];
  return { location, temperature: temp, windSpeed: 8, humidity: 60, generalCondition: cond };
}
// Export as ES module to match project `type: "module"`
export { mockWeatherFor, MOCK };
