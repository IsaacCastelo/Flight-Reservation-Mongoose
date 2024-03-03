const mongoose = require('mongoose');

const seatSchema = new mongoose.Schema({
  number: {
    type: Number,
    required: true
  },
  class: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  plane: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Plane',
    required: true
  }
});

const Seat = mongoose.model('Seat', seatSchema);

module.exports = Seat;
