const express = require('express');
const router = express.Router();
const Patient = require('../models/Patient');
const Observation = require('../models/Observation');
const Doctor = require('../models/Doctor');

// Route to get patient information
router.get('/patient/:id', async (req, res) => {
  try {
    const patient = await Patient.findByPk(req.params.id);
    if (patient) {
      res.json(patient);
    } else {
      res.status(404).json({ message: 'Patient not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

// Route to submit observations
router.post('/patient/:id/observations', async (req, res) => {
  const { observations, symptoms, healthParameters } = req.body;

  try {
    const patient = await Patient.findByPk(req.params.id);
    if (patient) {
      const observation = await Observation.create({
        observations,
        symptoms,
        healthParameters,
        patientId: patient.id,
      });
      res.status(201).json(observation);
    } else {
      res.status(404).json({ message: 'Patient not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

// Route to get doctors by field
router.get('/doctors', async (req, res) => {
  const { field } = req.query;

  try {
    const doctors = await Doctor.findAll({ where: { field } });
    res.json(doctors);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

// Route to consult with a doctor
router.post('/consult', async (req, res) => {
  const { patientId, doctorId } = req.body;

  try {
    // You can implement logic here for scheduling the consultation
    // For now, just returning a success message
    res.json({ message: 'Consultation scheduled successfully', patientId, doctorId });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

module.exports = router;
