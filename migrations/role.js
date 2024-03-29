const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema({
  roleName: {
    type: String,
    enum: ['ADMINISTRADOR', 'CLIENTE'],
    required: true
  }
});

const Role = mongoose.model('Role', roleSchema);

module.exports = Role;
