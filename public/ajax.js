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
      tags: boilerplate.tags
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

const getAllTags = function(cb) {
  $.get("./api/boilerplates/tags", function(data) {
    // returns an array containing all tags
    cb(data);
  });
};

const postAllTags = function(boilerplate, cb) {
  $.post(
    "./api/boilerplates/tags",
    {
      title: tag.title,
      color: tag.color
    },
    function(result) {
      cb(result);
    }
  );
};

const putTags = function(boilerplate, cb) {
  const apiUrl = "./api/boilerplates/tags" + boilerplate.tags;
  $.ajax({
    url: apiUrl,
    type: "PUT",
    data: {
      title: tag.title,
      color: tag.color
    },
    success: function(result) {
      cb(result);
    }
  });
};

const deleteTags = function(boilerplate, cb) {
  const apiUrl = `/api/boilerplates/tags${boilerplate.tags}`;
  $.ajax({
    url: apiUrl,
    type: "DELETE",
    success: function(result) {
      cb(result);
    }
  });
};
