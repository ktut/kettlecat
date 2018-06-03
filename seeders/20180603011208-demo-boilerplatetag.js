"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "BoilerplateTags",
      [
        {
          BoilerplateId: 1,
          TagId: 1
        },
        {
          BoilerplateId: 2,
          TagId: 2
        },
        {
          BoilerplateId: 2,
          TagId: 3
        },
        {
          BoilerplateId: 3,
          TagId: 4
        }
      ],
      {}
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("BoilerplateTags", null, {});
  }
};
