const mongoose = require('mongoose');

const ExTrackerSchema = mongoose.Schema(
  {
    note: { type: String },
    type: { type: String, require: true },
    category: String,
    total: { type: Number, require: true}
  },
  { 
    timestamps: true
  }
);
module.exports = mongoose.model('Tracker', ExTrackerSchema);