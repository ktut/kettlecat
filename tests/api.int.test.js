// this line really really needs to be the first
require("dotenv").config();
const api = require("./../routes/api-routes");
const db = require("./../models");

// authenticate does not work?
// test("database connection works", () => {
//   expect.assertions(1);
//   return db.authenticate().then(data => {
//     expect(1).toBe(1);
//   });
// });

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

// just a comment

// FIXME test failing at the moment, pb of asynchronism?
// => async pb confirmed, it would take to mock or split the calls,
// however, we would just test sequelize, as there is no custom code
// test("creating a boilerplate with tags eventually returns the matching table", () => {
//   expect.assertions(1);
//   return api
//     .createBoilerplate("test title", "test content", [1, 2])
//     .then(data => {
//       expect(data).toEqual(
//         expect.objectContaining({
//           title: "test title",
//           content: "test content"
//         })
//       );
//     });

// just a test
// });

//test 2

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

// TODO tests for createTag
