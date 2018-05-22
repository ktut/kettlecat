"use strict";
module.exports = (sequelize, DataTypes) => {
  var BoilerplateTag = sequelize.define("BoilerplateTag", {}, {});
  BoilerplateTag.associate = function(models) {
    models.Boilerplate.belongsToMany(models.Tag, { through: BoilerplateTag });
    models.Tag.belongsToMany(models.Boilerplate, { through: BoilerplateTag });
  };
  return BoilerplateTag;
};
