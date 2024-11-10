const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Patient = require('./Patient');

const Observation = sequelize.define('Observation', {
  observations: DataTypes.TEXT,
  symptoms: DataTypes.TEXT,
  healthParameters: DataTypes.TEXT,
  patientId: {
    type: DataTypes.INTEGER,
    references: {
      model: Patient,
      key: 'id',
    },
  },
});

module.exports = Observation;
