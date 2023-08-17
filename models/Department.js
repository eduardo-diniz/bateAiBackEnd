const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

const Department = sequelize.define('Department', {
  Name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  DepartamentId: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  CNPJ: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false,
  },
  AllowsRemoteWork: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  AllowsOvertime: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  AllowsAI: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  AllowsWeekendWork: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },

});

module.exports = Department;
