// *****************************************************************************
// **** api-routes.js - this file offers a set of routes for displaying and
// saving data to the db
// ******************************************************************************
// *** Dependencies

// Requiring our models
var db = require("../models");

// Routes =============================================================
module.exports = {
  // due to its dependence to db connection, this function is tested in api.int.test.js
  findBoilerplate: (tags, searchInput) => {
    // TODO complete implementation
    return db.Boilerplate.findAll({});
  },
  // due to its dependence to db connection, this function is tested in api.int.test.js
  createBoilerplate: (title, content, tags) => {
    // FIXME tags management makes the test fail, pb of asynchronism
    if (tags) {
      db.Boilerplate.create({
        title: title,
        content: content
      }).then(boilerplate => {
        return boilerplate.addTag(tags);
      });
    } else {
      return db.Boilerplate.create({
        title: title,
        content: content
      });
    }
  },
  // due to its dependence to db connection, this function is tested in api.int.test.js
  createTag: (title, color) => {
    return db.Tag.create({
      title: title,
      color: color
    });
  },
  // this function will only be tested through UI testing
  routes: function(app) {
    // GET route for getting all of the boilerplates
    app.get("/api/boilerplates", function(req, res) {
      // findAll returns all entries for a table when used with no options
      // TODO complete implementation to get tags and searchInput from req.body or req.params
      this.findBoilerplate().then(function(bp) {
        // We have access to the boilerplates as an argument inside of the callback function
        res.json(bp);
      });
    });

    // POST route for saving a new boilerplate
    app.post("/api/boilerplates", function(req, res) {
      // create takes an argument of an object describing the item we want to insert
      // into our table. In this case we just we pass in an object with a text and
      // complete property
      this.createBoilerplate(
        req.body.title,
        req.body.content,
        req.body.tags
      ).then(function(bp) {
        // We have access to the new boilerplate as an argument inside of the callback function
        res.json(bp);
      });
    });

    //POST route for saving a new Tag
    app.post("/api/tags", function(req, res) {
      // create takes an argument of an object describing the item we want to insert
      // into our table. In this case we just we pass in an object with a text and
      // complete property
      this.createTag(req.body.title, req.body.color).then(function(tag) {
        // We have access to the new tag as an argument inside of the callback function
        res.json(tag);
      });
    });
  }
};
