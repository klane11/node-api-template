'use strict';
const Errors = require('../errors');
const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  var users = sequelize.define('users', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    first_name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    last_name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING,
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
    deleted_at: {
      type: DataTypes.DATE,
    },
    created_at: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updated_at: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {
    paranoid: true,
    underscored: true,
  });

  users.associate = function(models) {
    models.Users.hasOne(models.AccessTokens);
  };

  users.prototype.authenticate = authenticate;

  users.beforeCreate(cleanUpData);
  users.beforeCreate(encryptPassword);
  users.beforeUpdate(cleanUpData);
  users.beforeUpdate(encryptPassword);

  return users;
};


function authenticate(password) {
  if (bcrypt.compareSync(password, this.encrypted_password)) return this;
  return false;
}

function cleanUpData(user) {
  user.email = user.email.toLowerCase();
}

function encryptPassword(user) {
  if (!user.password) {
    return;
  }

  if (user.password != user.password_confirmation) {
    throw new Errors.PasswordConfirmationDoesNotMatch();
  }

  user.encrypted_password = bcrypt.hashSync(user.password, 10);
}
