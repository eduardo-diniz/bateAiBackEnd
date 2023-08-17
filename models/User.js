const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');
const bcrypt = require('bcrypt');

const saltRounds = 10;

const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cpf: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  cargo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  codigoEmpresa: {
    type: DataTypes.STRING,
    allowNull: false, 
  },
  codigoDoSetor: {
    type: DataTypes.STRING,
    allowNull: true, 
  },
  homeOffice: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  aceitaIA: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  horasNoturnas: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  finalDeSemana: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  senha: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  hooks: {
    beforeCreate: async (user) => {
      if (user.changed('senha')) {
        const hashedPassword = await bcrypt.hash(user.senha, saltRounds);
        user.senha = hashedPassword;
      }
    },
  },
});

module.exports = User;
