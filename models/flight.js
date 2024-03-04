const mongoose = require('mongoose');
const flightSchema = new mongoose.Schema({
    origin: { type: String, required: true },
    destiny: { type: String, required: true },
    departureDate: { type: Date, required: true },
    arrivalDate: { type: Date, required: true },
    luggage: { type: Number, required: true },
    cost: { type: Number, required: true },
    createdAt: { type: Date, required: true  },
    updatedAt: { type: Date, required: true  }
  });

  module.exports = mongoose.model('Flight', flightSchema);