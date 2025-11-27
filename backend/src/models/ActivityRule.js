import mongoose from "mongoose";

const ActivityRuleSchema = new mongoose.Schema(
  {
    condition: { type: String, required: true }, // e.g., 'Rainy', 'Sunny', 'Cloudy'
    minTemp: { type: Number, required: true },
    maxTemp: { type: Number, required: true },
    activitySuggestion: { type: String, required: true }
  },
  { timestamps: true }
);

export default mongoose.model("ActivityRule", ActivityRuleSchema);