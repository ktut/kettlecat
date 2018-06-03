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

const getAllBoilerplates = function(cb) {
  $.get("./api/boilerplates/", function(data) {
    // returns an array containing all Boilerplates
    cb(data);
  });
};

const postBoilerplate = function(boilerplate, cb) {
  $.post(
    "./api/boilerplates",
    {
      title: boilerplate.title,
      description: boilerplate.description,
      lang: boilerplate.lang,
      content: boilerplate.content,
      tags: boilerplates.tags
    },
    function(result) {
      cb(result);
    }
  );
};

const putBoilerplate = function(boilerplate, cb) {
  const apiUrl = "./api/boilerplates/" + boilerplate.id;
  $.ajax({
    url: apiUrl,
    type: "PUT",
    data: {
      title: boilerplate.title,
      description: boilerplate.description,
      lang: boilerplate.lang,
      content: boilerplate.content,
      tags: boilerplates.tags
    },
    success: function(result) {
      cb(result);
    }
  });
};

const putUpVote = function(boilerplate, cb) {
  const apiUrl = `/api/boilerplates/${
    boilerplate.id
  }/upvotes/${boilerplate.upvotes + 1}`;
  $.ajax({
    url: apiUrl,
    type: "PUT",
    success: function(result) {
      cb(result);
    }
  });
};

const putDownVote = function(boilerplate, cb) {
  const apiUrl = `/api/boilerplates/${
    boilerplate.id
  }/downvotes/${boilerplate.downvotes + 1}`;
  $.ajax({
    url: apiUrl,
    type: "PUT",
    success: function(result) {
      cb(result);
    }
  });
};

const deleteBoilerplate = function(boilerplate, cb) {
  const apiUrl = `/api/boilerplates/${boilerplate.id}`;
  $.ajax({
    url: apiUrl,
    type: "DELETE",
    success: function(result) {
      cb(result);
    }
  });
};
