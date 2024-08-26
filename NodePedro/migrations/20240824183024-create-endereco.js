'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { DataTypes } = Sequelize;
    
    await queryInterface.createTable('enderecos', {
      Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      Cep: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Logradouro: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Numero: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      Complemento: {
        type: DataTypes.STRING,
      },
      Bairro: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Cidade: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Estado: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      MunicipioIBGE: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('enderecos');
  }
};
