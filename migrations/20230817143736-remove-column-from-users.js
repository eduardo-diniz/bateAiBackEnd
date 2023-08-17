'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Users', 'codigoEmpresa');
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.addColumn('Users', 'codigoEmpresa', {
      type: Sequelize.STRING,
      allowNull: false,
    });
  },
};
