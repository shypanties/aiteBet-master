const mongoose = require("mongoose");

const ScoreSchema = mongoose.Schema({
  username: { type: String, required: true },
  rank: { type: Number, default: 10 },
  score: { type: Number, required: true },
  type: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Scores", ScoreSchema);
