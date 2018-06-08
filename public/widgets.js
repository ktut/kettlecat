// an enum for the views
const VIEWS = {
  MAIN: 1,
  OWN: 2
};

// state of the app
let state = {
  isLogged: false,
  view: VIEWS.MAIN
};

// constructor for boilerplate, every field is always defined even if empty (null)
const Boilerplate = function(
  title,
  description,
  lang,
  content,
  upvotes,
  downvotes,
  tags,
  author,
  id
) {
  this.title = title ? title : null;
  this.description = description ? description : null;
  this.lang = lang ? lang : null;
  this.content = content ? content : null;
  this.upvotes = upvotes ? upvotes : null;
  this.downvotes = downvotes ? downvotes : null;
  this.tags = tags ? tags : null;
  this.author = author ? author : null;
  this.id = id ? id : null;
};

const Tag = function(title, color) {
  this.title = title ? title : null;
  this.color = color ? color : null;
};

// function that returns a Boilerplate card as a Jquery object
const createBoilerplateCard = boilerplate => {
  return $(`<div class="card" data-id="${boilerplate.id} data-cardid="${
    boilerplate.id
  }">
  <div class="top">
    <h1 class="title">${boilerplate.title}</h1>
    <p class="tag">${boilerplate.tags[0] ? boilerplate.tags[0].title : ""}</p>
  </div>
  <p class="author">${boilerplate.author}</p>
  <p class="desc">${boilerplate.description}</p>
  <p class="lang">${boilerplate.lang}</p>
  <textarea class="content" >
${boilerplate.content}
</textarea>
<div class="buttons">
  <button class="js-copy-button">Copy</button>
  <button class="js-save-button" data-id="${boilerplate.id}">Save</button>
  <button class="js-delete-button" data-id="${boilerplate.id}">Delete</button>
</div>
<div class="votes">
        <button class="thumbs-up" data-id="${
          boilerplate.id
        }"><i class="fas fa-thumbs-up"></i>
        <span class="js-thumbs-up">${boilerplate.upvotes}</span></button>
        <button class="thumbs-down" data-id="${
          boilerplate.id
        }"><i class="fas fa-thumbs-down" data-id="${boilerplate.id}"></i>
        <span class="js-thumbs-down">${boilerplate.downvotes}</span></button>
      </div>
</div>`);
};

// function that displays an array of boilerplates in the UI
const displayAllBoilerplates = boilerplates => {
  $("main").empty();
  for (bp of boilerplates) {
    let bpUiFormatted = new Boilerplate(
      bp.title,
      bp.description,
      bp.lang,
      bp.content,
      bp.upvotes,
      bp.downvotes,
      bp.Tags,
      bp.User.displayName,
      bp.id
    );
    let cardToAdd = createBoilerplateCard(bpUiFormatted);
    $("main").append(cardToAdd);
    cardToAdd
      .find(".tag")
      .css("background-color", `#${bp.Tags[0] ? bp.Tags[0].color : 666}`);
  }
};

const appendNewBoilerplate = boilerplate => {
  console.log(boilerplate);
  boilerplate.author = boilerplate.User.displayName;
  boilerplate.tags = boilerplate.Tags;
  let cardToAdd = createBoilerplateCard(boilerplate);
  $("main").append(cardToAdd);
  cardToAdd
    .find(".tag")
    .css(
      "background-color",
      `#${boilerplate.Tags[0] ? boilerplate.Tags[0].color : 666}`
    );
};

const displayUserInfo = user => {
  if (user) {
    console.log(user);
    $(".login")
      .empty()
      .append(`<h2 class="logged">Logged in as ${user.displayName}</h2>`);

    $(".add-card").show();
    $(".add-tag").show();
  } else {
    console.log("no user is connected");
    $(".add-card").hide();
    $(".add-tag").hide();
  }
};

$(document).ready(function() {
  $(".animate").addClass("move");

  // get user info
  getUser(displayUserInfo);

  // call the AJAX function and pass the display action as a callback
  getAllBoilerplates(displayAllBoilerplates);

  // AJAX goes here: get 20 posts
  // getAllPosts();

  // set tag colors based on content
  // • backend = blue
  // • frontend = red
  $("div.card p.tag").each(function(index) {
    if (
      $(this)
        .text()
        .trim() == "backend"
    ) {
      $(this).css("background", "blue");
    } else if (
      $(this)
        .text()
        .trim() == "frontend"
    ) {
      $(this).css("background", "red");
    } else {
      $(this).css("background", "grey");
    }
  });
  //$('.modal').modal('hide');

  $(".add-card").click(function() {
    let options = "";
    getAllTags(data => {
      for (tag of data) {
        options = options.concat(
          `<option value="${tag.id}">${tag.title}</option>`
        );
      }
      $("#tag-select").append($(options));
      modal.style.display = "block";
    });
  });

  $(".close").click(function() {
    modal.style.display = "none";
  });

  $(".add-tag").click(function() {
    tagModal.style.display = "block";
  });

  $(".closeTag").click(function() {
    tagModal.style.display = "none";
  });

  // new Boilerplate creation
  $(document).on("click", ".post-boilerplate", function(event) {
    event.preventDefault();
    // hides the modal
    modal.style.display = "none";

    // get the values from the fields
    const title = $("#title").val();
    const description = $("#description").val();
    const lang = $("#lang").val();
    const content = $("#content").val();
    const tag = $("#tag-select").val();

    // create a Boilerplate
    const boilerplateToPost = new Boilerplate(
      title,
      description,
      lang,
      content,
      null,
      null,
      [tag],
      null
    );

    //call the ajax function
    postBoilerplate(boilerplateToPost, appendNewBoilerplate);
  });

  //new Tag action
  $(document).on("click", ".post-tag", function(event) {
    event.preventDefault();

    //hide the modal
    tagModal.style.display = "none";

    //get the values from the fields
    const title = $("#tag-title").val();
    const color = $("#color").val();

    // create a Tag
    const tagToPost = new Tag(title, color);

    postTag(tagToPost, data => {
      console.log(data);
    });
  });

  // edit a Boilerplate
  $(document).on("click", ".js-save-button", function(event) {
    let id = $(event.target).data("id");
    let newContent = $(`[data-id="${id}"] .content`).val();
    let boilerplateToPut = new Boilerplate(
      null,
      null,
      null,
      newContent,
      null,
      null,
      null,
      null,
      id
    );
    putBoilerplate(boilerplateToPut, result => {
      console.log(result);
    });
  });

  // delete a Boilerplate
  $(document).on("click", ".js-delete-button", function(event) {
    let id = $(event.target).data("id");
    let card = $(event.target)
      .parent()
      .parent();
    deleteBoilerplate(id, result => {
      card.remove();
    });
  });

  $(document).on("click", ".thumbs-up", function(event) {
    console.log("isClicked");
    let id = $(this).data("id");
    let upvotes = parseInt(
      $(this)
        .parent()
        .find(".js-thumbs-up")
        .text()
    );
    putUpVote({ id: id, upvotes: upvotes }, bp => {
      $(this)
        .parent()
        .find(".js-thumbs-up")
        .text(bp.upvotes);
    });
  });

  $(document).on("click", ".thumbs-down", function(event) {
    console.log("isClicked");
    let id = $(this).data("id");
    let downvotes = parseInt(
      $(this)
        .parent()
        .find(".js-thumbs-down")
        .text()
    );
    putDownVote({ id: id, downvotes: downvotes }, bp => {
      $(this)
        .parent()
        .find(".js-thumbs-down")
        .text(bp.downvotes);
    });
  });
});

let modal = document.getElementById("bpModal");
let tagModal = document.getElementById("tagModal");

// make cards active when selected
$(document).on("click", "div.card", function() {
  if (!$(this).hasClass("active")) {
    $(this).toggleClass("active");
    $(this)
      .siblings("div.card")
      .removeClass("active");
  }
});

// when typing in filter box, every 500ms, update posts
let filterResults = function() {
  let query = $(".js-filter").val();
  if (query !== "") {
    searchBoilerplates(query, displayAllBoilerplates);
  } else {
    getAllBoilerplates(displayAllBoilerplates);
  }
  // AJAX: get posts using above string as query
};
$(".js-filter").keyup(_.debounce(filterResults, 500));

// copy text from a Boilerplate
$(".js-copy-button").click(function() {
  var copyText = $(this).siblings("textarea.content");
  copyText.focus();
  copyText.select();
  document.execCommand("copy");
});
