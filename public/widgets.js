$( document ).ready(function() {

    // AJAX: get 20 posts

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

});

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

// TO FINISH: when clicking copy button, copy code
// use:
// https://clipboardjs.com/

$( ".js-copy-button" ).click(function() {
    var copyText = $(this).siblings("textarea.content");
    copyText.focus();
    // var copiedText = copyText["0"].innerText;
    copyText.select();
    document.execCommand("copy");

    // console.log(copyText["0"].innerText);
});

