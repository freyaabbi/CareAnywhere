const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Patient = sequelize.define('Patient', {
  name: DataTypes.STRING,
  age: DataTypes.INTEGER,
  symptoms: DataTypes.STRING,
  vitalSigns: DataTypes.STRING,
});

module.exports = Patient;
