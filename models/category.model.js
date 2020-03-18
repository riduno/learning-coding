const mongoose = require('mongoose');

const CategorySchema = mongoose.Schema(
  {
    id: { type: Int, require: true },
    category: String
  },
  {
    timestamps: true
  }
);
module.exports = mongoose.model('Category', CategorySchema);