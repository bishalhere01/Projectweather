// Simple test script for mockWeatherData (ES module)
import { mockWeatherFor, MOCK } from '../data/mockWeatherData.js';

console.log('MOCK keys count:', Object.keys(MOCK).length);

// test some cities
const tests = ['Delhi', 'Mumbai', 'Jharkhand', 'Kerala', 'Springfield', 'NonExistingCity'];
for (const t of tests) {
  console.log('->', t, JSON.stringify(mockWeatherFor(t)));
}
