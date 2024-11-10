const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Doctor = sequelize.define('Doctor', {
  name: DataTypes.STRING,
  field: DataTypes.STRING,
});

module.exports = Doctor;
