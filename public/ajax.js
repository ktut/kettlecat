// $(document).ready(function() {
//   $.ajax({
//     url: queryURL, ///api/boilerplates?
//     method: "GET"
//   }).[then(function(data) {
//     $.post(".card", newcard);
//     console.log("add.html", data);
//   });
// });
//     $(".tag").append($(p));
//     $(".title").append($(p));
//     $(".author").append($(p));
//     $(".desc").append($(p));
//     $(".lang").append($(p));
//     $(".content").append($(p));
//     $(".js-copy").append((p));
//   });
// });.

$(document).ready(function() {
  // $.ajax({
  //   url: queryURL, ///api/boilerplates?
  //   method: "GET"
  // }).then(function(data) {
  //   $.post(".card", newcard);
  //   console.log("add.html", data);
  // });

  $.get("./api/boilerplates", data => {
    console.log(data);
  });

  $.post(
    "./api/boilerplates",
    {
      title: "test title",
      description: "a description",
      lang: "a language",
      content: "some content",
      tags: []
    },
    () => {
      console.log("it worked");
    }
  );
});