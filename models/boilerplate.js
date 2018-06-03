"use strict";
module.exports = (sequelize, DataTypes) => {
  var Boilerplate = sequelize.define(
    "Boilerplate",
    {
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      lang: DataTypes.STRING,
      content: DataTypes.STRING,
      upvotes: DataTypes.INTEGER,
      downvotes: DataTypes.INTEGER
    },
    {}
  );
  Boilerplate.associate = function(models) {
    // associations can be defined here
    Boilerplate.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Boilerplate;
};
