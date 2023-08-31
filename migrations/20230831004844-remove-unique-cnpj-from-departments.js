'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('Departments', 'CNPJ', {
      type: Sequelize.STRING,
      allowNull: false,
      unique: false, // Alterando para não ser mais único
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('Departments', 'CNPJ', {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true, // Voltando à configuração original
    });
  },
};