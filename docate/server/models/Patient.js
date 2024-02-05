// server/models/Patient.js

const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  username: String,
  password: String,
  // Add other patient-related fields
});

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;
