// *****************************************************************************
// **** api-routes.js - this file offers a set of routes for displaying and
// saving data to the db
// ******************************************************************************
// *** Dependencies

// Requiring our models
var db = require("../models");

// Routes =============================================================
module.exports = {
  createBoilerplate: (title, content) => {
    return db.Boilerplate.create({
      title: title,
      content: content
    });
  },
  routes: function(app) {
    // GET route for getting all of the boilerplates
    app.get("/api/boilerplates", function(req, res) {
      // findAll returns all entries for a table when used with no options
      db.Boilerplate.findAll({}).then(function(bp) {
        // We have access to the boilerplates as an argument inside of the callback function
        res.json(bp);
      });
    });

    // POST route for saving a new boilerplate
    app.post("/api/boilerplates", function(req, res) {
      // create takes an argument of an object describing the item we want to insert
      // into our table. In this case we just we pass in an object with a text and
      // complete property
      this.createBoilerplate(req.body.title, req.body.content).then(function(
        bp
      ) {
        // We have access to the new boilerplate as an argument inside of the callback function
        res.json(bp);
      });
    });
  }
};
