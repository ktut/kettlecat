// this line really really needs to be the first
require("dotenv").config();
const api = require("./../routes/api-routes");

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
