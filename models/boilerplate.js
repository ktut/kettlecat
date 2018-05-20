'use strict';
module.exports = (sequelize, DataTypes) => {
  var Boilerplate = sequelize.define('Boilerplate', {
    title: DataTypes.STRING,
    content: DataTypes.STRING
  }, {});
  Boilerplate.associate = function(models) {
    // associations can be defined here
  };
  return Boilerplate;
};