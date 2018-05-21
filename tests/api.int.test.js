// this line really really needs to be the first
require("dotenv").config();
const api = require("./../routes/api-routes");
const db = require("./../models");

test("the created boilerplate is returned once stored", () => {
  expect.assertions(1);
  return api.createBoilerplate("test title", "test content").then(data => {
    expect(data).toEqual(
      expect.objectContaining({
        title: "test title",
        content: "test content"
      })
    );
  });
});

test("an empty search returns every boilerplate", () => {
  db.Boilerplate.findAll({}).then(expectedData => {
    expect.assertions(1);
    return api.findBoilerplate().then(data => {
      expect(data.length).toEqual(expectedData.length);
    });
  });
});
