'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Departments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      Name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      DepartamentId: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      CNPJ: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
      },
      AllowsRemoteWork: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      AllowsOvertime: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      AllowsAI: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      AllowsWeekendWork: {
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

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Departments');
  },
};
