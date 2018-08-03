'use strict';
module.exports = (sequelize, DataTypes) => {
  var access_tokens = sequelize.define('access_tokens', {
    guid: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {});
  access_tokens.associate = function(models) {
    // associations can be defined here
  };
  return access_tokens;
};