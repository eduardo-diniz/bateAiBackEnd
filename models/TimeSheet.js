const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

const TimeSheet = sequelize.define('TimeSheet', {
  CPF: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Time: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

module.exports = TimeSheet;
