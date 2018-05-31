'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    userID: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    User.hasMany(models.Boilerplate, {
      onDelete: "cascade"
    });
  };
  return User;
};