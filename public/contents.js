const VIEWS = {
  MAIN: 1,
  OWN: 2
};

let state = {
  isLogged: false,
  view: VIEWS.MAIN
};

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
  getAllBoilerplates(displayAllBoilerplates);
});
