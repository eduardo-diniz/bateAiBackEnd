
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Companies', 'senha', {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: 'admin',
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Companies', 'senha');
  }
};