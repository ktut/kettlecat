// *****************************************************************************
// **** api-routes.js - this file offers a set of routes for displaying and
// saving data to the db
// ******************************************************************************
// *** Dependencies

// Requiring our models
var db = require("../models");

// Routes =============================================================
const routing = {
  // due to its dependence to db connection, this function is tested in api.int.test.js
  findBoilerplate: (tags, searchInput) => {
    // TODO complete implementation
    return db.Boilerplate.findAll({});
  },

  findOneBoilerplate: id => {
    return db.Boilerplate.findOne({
      where: {
        id: id
      }
    }).then(bpOne => {
      return bpOne;
    });
  },
  testcreateBoilerPlateWithUser: (
    title,
    description,
    lang,
    content,
    tags,
    userId
  ) => {
    return db.Boilerplate.create({
      title: title,
      content: content,
      description: description,
      lang: lang,
      UserId: userId
    });
  },
  // due to its dependence to db connection, this function is tested in api.int.test.js
  createBoilerplate: (title, description, lang, content, tags) => {
    // FIXME tags management makes the test fail, pb of asynchronism
    if (tags) {
      db.Boilerplate.create({
        title: title,
        content: content,
        description: description,
        lang: lang
      }).then(boilerplate => {
        return boilerplate.addTag(tags);
      });
    } else {
      return db.Boilerplate.create({
        title: title,
        content: content,
        description: description,
        lang: lang
      });
    }
  },
  // update boilerplate
  updateBoilerPlate: (id, updatedContent) => {
    return db.Boilerplate.update(updatedContent, {
      where: {
        id: id
      }
    }).then(bpUpdate => {
      return bpUpdate;
    });
  },
  //delete Boilerplate
  deleteBoilerPlate: id => {
    return db.Boilerplate.destroy({
      where: {
        id: id
      }
    }).then(boilerplate => {
      //console.log(boilerplate);
      return boilerplate;
    });
  },
  // due to its dependence to db connection, this function is tested in api.int.test.js
  createTag: (title, color) => {
    return db.Tag.create({
      title: title,
      color: color
    });
  },

  findAllTags: (title, color) => {
    return db.Tag.findAll({});
  },

  deleteTag: id => {
    return db.Tag.destroy({
      where: {
        id: id
      }
    }).then(tagDel => {
      return tagDel;
    });
  },

  updateTag: (id, tagContent) => {
    return db.Tag.update(tagContents, {
      id: id
    }).then(tagUpdate => {
      return tagUpdate;
    });
  },

  // this function will only be tested through UI testing
  routes: function(app) {
    // GET route for getting all of the boilerplates
    app.get("/api/boilerplates", function(req, res) {
      console.log("the user id is" + req.session.passport.user);
      // findAll returns all entries for a table when used with no options
      // TODO complete implementation to get tags and searchInput from req.body or req.params
      routing.findBoilerplate().then(function(bp) {
        // We have access to the boilerplates as an argument inside of the callback function
        res.json(bp);
      });
    });

    app.get("/api/boilerplates/:id", function(req, res) {
      routing.findOneBoilerplate(req.params.id).then(function(bpOneGet) {
        res.json(bpOneGet);
      });
    });
    // POST route for saving a new boilerplate
    // app.post("/api/boilerplates", function(req, res) {
    //   // create takes an argument of an object describing the item we want to insert
    //   // into our table. In this case we just we pass in an object with a text and
    //   // complete property
    //   routing
    //     .createBoilerplate(req.body.title, req.body.content, req.body.tags)
    //     .then(function(bp) {
    //       // We have access to the new boilerplate as an argument inside of the callback function
    //       res.json(bp);
    //     });
    // });

    app.post("/api/boilerplates", function(req, res) {
      // create takes an argument of an object describing the item we want to insert
      // into our table. In this case we just we pass in an object with a text and
      // complete property
      routing
        .testcreateBoilerPlateWithUser(
          req.body.title,
          req.body.description,
          req.body.lang,
          req.body.content,
          req.body.tags,
          req.session.passport.user
        )
        .then(function(bp) {
          // We have access to the new boilerplate as an argument inside of the callback function
          res.json(bp);
        });
    });

    //DELETE route for Boilerplate
    app.delete("/api/boilerplates/:id", function(req, res) {
      routing.deleteBoilerPlate(req.params.id).then(dbreturn => {
        res.json(dbreturn);
      });
    });
    //PUT route for updating Boilerplates
    app.put("/api/boilerplates/:id", function(req, res) {
      routing.updateBoilerPlate(req.params.id, req.body).then(bpUpdatePut => {
        res.json(bpUpdatePut);
      });
    });
    ///////////////////////////tag routes///////////////////////////////////
    //POST route for saving a new Tag
    app.post("/api/tags", function(req, res) {
      // create takes an argument of an object describing the item we want to insert
      // into our table. In this case we just we pass in an object with a text and
      // complete property
      routing.createTag(req.body.title, req.body.color).then(function(tag) {
        // We have access to the new tag as an argument inside of the callback function
        res.json(tag);
      });
    });
    //GET route for all of the Tags
    app.get("/api/tags", function(req, res) {
      routing
        .findAllTags(req.body.title, req.body.color)
        .then(function(allTags) {
          res.json(allTags);
        });
    });
    //DELETE route for a Tag by ID
    app.delete("api/tags/:id", function(req, res) {
      routing.deleteTag(req.params.id).then(tagreturn => {
        res.json(tagreturn);
      });
    });

    app.put("api/tags/id:", function(req, res) {
      routing.updateTag(req.params.id, req.body).then(tagUpdatePut => {
        req.json(tagUpdatePut);
      });
    });
  }
};

module.exports = routing;
