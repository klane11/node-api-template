'use strict';
module.exports = (sequelize, DataTypes) => {
  var access_tokens = sequelize.define('access_tokens', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    guid: {
      type: DataTypes.TEXT,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    expired_at: {
      type: DataTypes.DATE,
      timezone: 'UTC'
    },
    deletedAt: {
      type: DataTypes.DATE,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {
    paranoid: true,
    underscored: true,
  });

  access_tokens.associate = function(models) {
    AccessTokens.belongsTo(models.Users);
  };

  return access_tokens;
};