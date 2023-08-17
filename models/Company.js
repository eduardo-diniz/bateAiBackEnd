const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize'); 

const bcrypt = require('bcrypt');
const saltRounds = 10;

const Company = sequelize.define('Company', {
  Name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  NomeFantasia: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  CNPJ: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  senha: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  hooks: {
    beforeCreate: async (company) => {
      if (company.changed('senha')) {
        const hashedPassword = await bcrypt.hash(company.senha, saltRounds);
        company.senha = hashedPassword;
      }
    },
  },
});

module.exports = Company;
