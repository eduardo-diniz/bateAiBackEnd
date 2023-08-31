'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cpf: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      cargo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      codigoEmpresa: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      codigoDoSetor: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      homeOffice: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      aceitaIA: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      horasNoturnas: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      senha: {
        type: Sequelize.STRING,
        allowNull: false,
      },      
      finalDeSemana: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  },
};