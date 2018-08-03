'use strict';
module.exports = (sequelize, DataTypes) => {
  let schema = sequelize.define('users', {
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
  }, {
    paranoid: true,
    underscored: true,
  });
  schema.associate = function(models) {
    // associations can be defined here
  };
  return schema;
};