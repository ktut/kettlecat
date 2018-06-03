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
  author
) {
  this.title = title ? title : null;
  this.description = description ? description : null;
  this.lang = lang ? lang : null;
  this.content = content ? content : null;
  this.upvotes = upvotes ? upvotes : null;
  this.downvotes = downvotes ? downvotes : null;
  this.tags = tags ? tags : null;
  this.author = author ? author : null;
};

// function that returns a Boilerplate card as a Jquery object
const createBoilerplateCard = boilerplate => {
  return $(`<div class="card">
  <div class="top">
    <h1 class="title">${boilerplate.title}</h1>
    <p class="tag">${boilerplate.tags}</p>
  </div>
  <p class="author">${boilerplate.author}</p>
  <p class="desc">${boilerplate.description}</p>
  <p class="lang">${boilerplate.lang}</p>
  <textarea class="content">
${boilerplate.content}
</textarea>
  <button class="js-copy-button">Copy</button>
</div>`);
};

// function that displays an array of boilerplates in the UI
const displayAllBoilerplates = boilerplates => {
  for (bp of boilerplates) {
    let bpUiFormatted = new Boilerplate(
      bp.title,
      bp.description,
      bp.lang,
      bp.content,
      bp.upvotes,
      bp.downvotes,
      bp.tags,
      bp.UserId
    );
    $("main").append(createBoilerplateCard(bpUiFormatted));
  }
};

$(document).ready(function() {
  // call the AJAX function and pass the display action as a callback
  getAllBoilerplates(displayAllBoilerplates);
});
