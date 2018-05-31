"use strict";
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define(
    "User",
    {
      displayName: DataTypes.STRING,
      userID: DataTypes.STRING
    },
    {}
  );
  User.associate = function(models) {
    User.hasMany(models.Boilerplate, {
      onDelete: "cascade"
    });
  };
  return User;
};
