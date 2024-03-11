const mongoose = require('mongoose');

const planeSchema = new mongoose.Schema({
    type: { type: String, required: true },
    seats: { type: mongoose.Types.ObjectId, ref: "Seat"},
    createdAt: { type: Date, required: true },
    updatedAt: { type: Date, required: true }
  });

  module.exports = mongoose.model('Plane', planeSchema);