const mongoose = require("mongoose");

const recordSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  amount: Number,
  type: { type: String, enum: ["INCOME", "EXPENSE"] },
  category: String,
  date: Date,
  note: String,
  isDeleted: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model("Record", recordSchema);
