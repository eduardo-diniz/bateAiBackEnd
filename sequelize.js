const Sequelize = require('sequelize');

const sequelize = new Sequelize('bateAi', 'postgres', 'test', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = sequelize;
