"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Tags",
      [
        {
          title: "Auth",
          color: "d6e421"
        },
        {
          title: "Routing",
          color: "75aa4e"
        },
        {
          title: "FullStack",
          color: "90b5ff"
        },
        {
          title: "AI",
          color: "1111aa"
        }
      ],
      {}
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Tags", null, {});
  }
};
