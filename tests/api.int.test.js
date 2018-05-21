// this line really really needs to be the first
require("dotenv").config();
const api = require("./../routes/api-routes");
const db = require("./../models");

// TODO we could set a test database to get precise results, if we control exactly the content of the database

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

test("a search with one tag returns all elements having this tag");

test(
  "a search with several tags returns all elements having all tags (the intersection)"
);

test(
  "a search with a searchInput shall return all elements that match the searchInput (title or content)"
);
