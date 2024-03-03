const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
  state: {
    type: String,
    required: true
  },
  flight: {
    type: String,
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});

const Reservation = mongoose.model('Reservation', reservationSchema);

module.exports = Reservation;
