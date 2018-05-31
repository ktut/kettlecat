// document ready = get all posts
// ajax.getPosts

// make cards active when selected
$( "div.card" ).click(function() {
    $(this).toggleClass("active");
    $(this).siblings( "div.card" ).removeClass("active");
});