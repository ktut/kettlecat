"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Boilerplates",
      [
        {
          title: "Passport",
          description: "Passport Usage",
          lang: "Javascript",
          content: "some content",
          upvotes: 12,
          downvotes: 3,
          UserId: 1
        },
        {
          title: "Express",
          description: "Express Usage",
          lang: "Javascript",
          content: "some other content",
          upvotes: 42,
          downvotes: 90,
          UserId: 1
        },
        {
          title: "TensorFlow",
          description: "to quickly setup a neural network",
          lang: "Python",
          content: "complicated content",
          upvotes: 35696,
          downvotes: 76,
          UserId: 1
        },
        {
          title: "Devise template",
          description: "Basic setup for Devise",
          lang: "Ruby",
          content: "Random Content, everything works anyway",
          upvotes: 56,
          downvotes: 90,
          UserId: 1
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Boilerplates", null, {});
  }
};
