const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    idReservation: { type: mongoose.Schema.Types.ObjectId, ref: 'Reservation', required: true },
    paymentMethod: { type: String, required: true },
    transactionId: { type: String, required: true },
    createdAt: { type: Date, required: true },
    updatedAt: { type: Date, required: true }
  });

  module.exports = mongoose.model('Payment', paymentSchema);
