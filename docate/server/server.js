// server/server.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const Doctor = require('./models/Doctor');
const Patient = require('./models/Patient');

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB for Doctors
const doctorDbUri = 'mongodb://localhost:27017/HTF.Doctors';
mongoose.connect(doctorDbUri)
.then(()=>{
  console.log("mongodb connected");
})
.catch(()=>{
  console.log('failed');
})

// Connect to MongoDB for Patients
const patientDbUri = 'mongodb://localhost:27017/HTF.Patients';
mongoose.connect(patientDbUri)
.then(()=>{
  console.log("mongodb connected");
})
.catch(()=>{
  console.log('failed');
})

const checkCredentials = async (username, password, userType) => {
  const model = userType === 'doctor' ? Doctor : Patient;

  try {
    const user = await model.findOne({ username, password });
    return !!user; // Return true if user is found
  } catch (error) {
    console.error('Error checking credentials:', error);
    return false;
  }
};

app.post('/login', async (req, res) => {
  const { username, password, userType } = req.body;

  try {
    const isValidCredentials = await checkCredentials(username, password, userType);

    if (isValidCredentials) {
      res.json({ success: true, userType });
    } else {
      res.json({ success: false, message: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});