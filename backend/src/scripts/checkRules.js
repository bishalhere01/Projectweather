import mongoose from 'mongoose';
import ActivityRule from '../models/ActivityRule.js';
import { mockWeatherFor } from '../data/mockWeatherData.js';
import dotenv from 'dotenv';

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/activity_suggestor';

async function run() {
  try {
    await mongoose.connect(MONGO_URI, { dbName: 'activity_suggestor' });
    console.log('Connected to Mongo for check');

    const rules = await ActivityRule.find().lean();
    console.log('Rules count:', rules.length);

    const mock = mockWeatherFor('Delhi');
    console.log('Mock:', mock);

    let matchedRule = null;
    for (const rule of rules) {
      if (
        mock.temperature >= rule.minTemp &&
        mock.temperature <= rule.maxTemp &&
        rule.condition === mock.generalCondition
      ) {
        matchedRule = rule;
        break;
      }
    }

    console.log('Matched:', matchedRule ? matchedRule.activitySuggestion : 'No matching activity');
    await mongoose.disconnect();
    process.exit(0);
  } catch (err) {
    console.error('Error running check:', err);
    process.exit(1);
  }
}

run();
