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
    },
    expired_at: {
      type: DataTypes.DATE,
      timezone: 'UTC'
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

  access_tokens.associate = function(models) {
    models.AccessTokens.belongsTo(models.Users);
  };

  return access_tokens;
};