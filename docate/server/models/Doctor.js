// server/models/Doctor.js

const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  username: String,
  password: String,
  // Add other doctor-related fields
});

const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;