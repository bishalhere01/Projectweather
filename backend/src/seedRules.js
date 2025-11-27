import mongoose from "mongoose";
import dotenv from "dotenv";
import ActivityRule from "./models/ActivityRule.js";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/activity_suggestor";

const seed = async () => {
  try {
    await mongoose.connect(MONGO_URI, { dbName: "activity_suggestor" });
    console.log("Connected. Seeding rules...");

    await ActivityRule.deleteMany({});

    const rules = [
      { condition: "Rainy", minTemp: 5, maxTemp: 20, activitySuggestion: "Visit a cozy café and read a book ☕📚" },
      { condition: "Sunny", minTemp: 20, maxTemp: 40, activitySuggestion: "Go for a beach walk or cycling 🚴‍♂️" },
      { condition: "Cloudy", minTemp: 10, maxTemp: 25, activitySuggestion: "Explore a museum or indoor rock climbing 🧗" }
    ];

    await ActivityRule.insertMany(rules);
    console.log("Seeded:", rules.length, "rules");
  } catch (e) {
    console.error(e);
  } finally {
    await mongoose.disconnect();
    console.log("Done.");
  }
};

seed();