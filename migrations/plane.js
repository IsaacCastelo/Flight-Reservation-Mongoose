const mongoose = require('mongoose');

const planeSchema = new mongoose.Schema({
  seats: {
    type: Number,
    required: true
  }
});

const Plane = mongoose.model('Plane', planeSchema);

module.exports = Plane;
