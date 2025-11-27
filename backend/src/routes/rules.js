import express from "express";
import ActivityRule from "../models/ActivityRule.js";
import { mockWeatherFor } from "../data/mockWeatherData.js";

const router = express.Router();

router.get("/:location", async (req, res) => {
  const { location } = req.params;

  try {
    const mock = mockWeatherFor(location);

    // Try to load rules from DB; fall back to sensible defaults if DB is unavailable
    let rules = [];
    try {
      rules = await ActivityRule.find().lean();
    } catch (dbErr) {
      console.warn('Warning: could not load rules from DB, using fallback defaults:', dbErr.message);
      // fallback default rules (same shape as ActivityRule documents)
      rules = [
        { condition: 'Rainy', minTemp: 5, maxTemp: 20, activitySuggestion: 'Visit a cozy café and read a book ☕📚' },
        { condition: 'Sunny', minTemp: 20, maxTemp: 40, activitySuggestion: 'Go for a beach walk or cycling 🚴‍♂️' },
        { condition: 'Cloudy', minTemp: 10, maxTemp: 25, activitySuggestion: 'Explore a museum or indoor rock climbing 🧗' }
      ];
    }

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

    res.json({
      weather: mock,
      suggestion: matchedRule ? matchedRule.activitySuggestion : 'No matching activity found',
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
