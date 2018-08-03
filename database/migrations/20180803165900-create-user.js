'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      first_name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      last_name: {
        allowNull: false,
        type: Sequelize.STING
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      encrypted_password: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.VIRTUAL,
        allowNull: false,
      },
      password_confirmation: {
        type: DataTypes.VIRTUAL,
        allowNull: false,
      },
      deletedAt: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface) => {
    return queryInterface.dropTable('users');
  }
};