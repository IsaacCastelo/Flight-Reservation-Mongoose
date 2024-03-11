const mongoose = require('mongoose');

const seatSchema = new mongoose.Schema({
    idPlane: { type: mongoose.Schema.Types.ObjectId, ref: 'Plane', required: true },
    num: { type: String, required: true },
    classType: { type: String, required: true },
    state: { type: Number, required: true },
    price: { type: Number, required: true },
    createdAt: { type: Date, required: true },
    updatedAt: { type: Date, required: true }
  });

  module.exports = mongoose.model('Seat', seatSchema);