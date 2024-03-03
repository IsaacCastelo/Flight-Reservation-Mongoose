const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
    idUser: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    idFlight: { type: mongoose.Schema.Types.ObjectId, ref: 'Flight', required: true },
    state: { type: String, required: true },
    createdAt: { type: Date, required: true },
    updatedAt: { type: Date, required: true }
  });

  module.exports = mongoose.model('Reservation', reservationSchema);