"use strict";
module.exports = (sequelize, DataTypes) => {
  var Tag = sequelize.define(
    "Tag",
    {
      title: DataTypes.STRING,
      color: DataTypes.STRING
    },
    {}
  );
  Tag.associate = function(models) {
    // associations can be defined here
  };
  return Tag;
};
