const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
  origin: {
    type: String,
    required: true
  },
  destiny: {
    type: String,
    required: true
  },
  departureDate: {
    type: Date,
    required: true
  },
  arrivalDate: {
    type: Date,
    required: true
  },
  luggage: {
    type: Number,
    required: true
  },
  payment: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Payment',
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  reservation: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Reservation',
    required: true
  }
});

const Flight = mongoose.model('Flight', flightSchema);

module.exports = Flight;
