$( document ).ready(function() {
    $(".animate").addClass("move");

    // AJAX goes here: get 20 posts
    // getAllPosts();

    // set tag colors based on content
    // • backend = blue
    // • frontend = red
    $('div.card p.tag').each(function( index ) {
        if ($(this).text().trim() == 'backend') {
            $(this).css( "background", "blue" )
        } else if ($(this).text().trim() == 'frontend') {
            $(this).css( "background", "red" )
        } else {
            $(this).css( "background", "grey" )
        }
    });
    //$('.modal').modal('hide');
});
let modal = document.getElementById('bpModal');
// make cards active when selected
$( "div.card" ).click(function() {
    if (!$(this).hasClass("active")) {
        $(this).toggleClass("active");
        $(this).siblings( "div.card" ).removeClass("active");
    }
});

 // when typing in filter box, every 500ms, update posts
let filterResults = function() {
    console.log($(".js-filter").val());
    // AJAX: get posts using above string as query
}
$('.js-filter').keyup(_.debounce(filterResults , 500));

// 
$( ".js-copy-button" ).click(function() {
    var copyText = $(this).siblings("textarea.content");
    copyText.focus();
    copyText.select();
    document.execCommand("copy");
});

$(".add-card").click(function() {
   
    modal.style.display = "flex";
})
let span = document.getElementsByClassName("close")[0];


