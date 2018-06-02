// $.get("./api/boilerplates", data => {
//   console.log(data);
// });

// var postAllCards = function() {
//   $.post(
//   "./api/boilerplates",
//   {
//     title: "test title",
//     description: "a description",
//     lang: "a language",
//     content: "some content",
//     tags: []
//   },
//   () => {
//     console.log("it worked");
//   }
// );
// var getAllPosts = function() {
//   $.get("./api/boilerplates/:id", data => {
//   console.log(data);
//   )};

var getAllPosts = function() {
  $.get("./api/boilerplates/", function(data) {
    console.log(data);
  });
};
// var deletePost = function() {
// $.destroy("./api/boilerplates/:id", data => {
//   console.log("it worked");
// });

// var putTag = function() {
//   $.put("/api/tags", data => {
//   console.log("it worked");
// });

// var addTag = function() {
//   $.post(
//   "./api/tags",
//   {
//     title: "test title",
//     color: "a color"
//   },
//   () => {
//     console.log("it worked");
//   }
//   )};

// $.get(".api/tags", data => {
//   console.log(data);
// });
// $.destroy(".api/tags/:id", data => {
//   console.log(data);
// });
// $.put("/api/tags/id:", data => {
//   console.log("it worked");
// });
