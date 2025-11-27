import express from 'express';
import ActivityRule from '../models/ActivityRule.js';
import { mockWeatherFor } from '../data/mockWeatherData.js';

const router = express.Router();

router.get('/:location', async (req, res) => {
  const { location } = req.params || {};

  try {
    const mock = mockWeatherFor(location);

    let rules = [];
    try {
      rules = await ActivityRule.find().lean().exec();
    } catch (dbErr) {
      console.error('Warning: DB read failed in /api/weather:', dbErr?.message || dbErr);
    }

    let matchedRule = null;
    for (const rule of rules) {
      if (
        mock.temperature >= rule.temperatureRange.min &&
        mock.temperature <= rule.temperatureRange.max &&
        rule.conditions.includes(mock.condition)
      ) {
        matchedRule = rule;
        break;
      }
    }

    return res.json({
      weather: mock,
      suggestion: matchedRule ? matchedRule.activity : "No matching activity found",
      matchedRule,
    });

  } catch (err) {
    console.error('Fatal error in /api/weather:', err);

    const mock = mockWeatherFor(location);
    return res.status(200).json({
      weather: mock,
      suggestion: null,
      matchedRule: null,
      error: 'Recovered from server error'
    });
  }
});

export default router;
