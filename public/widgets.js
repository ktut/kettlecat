// document ready = get all posts
// ajax.getPosts

// make cards active when selected
$( "div.card" ).click(function() {
    if (!$(this).hasClass("active")) {
        $(this).toggleClass("active");
        $(this).siblings( "div.card" ).removeClass("active");
    }
});

// on load, do the following:
// 1. get 20 posts, THEN
// 2. set tag colors based on content
// • backend = blue
// • frontend = red
// 3. when typing in filter box, execute sequelize query and get posts again
// 4. when clicking copy button, copy code

$( document ).ready(function() {

    // get all posts

    $('div.card p.tag').each(function( index ) {
        if ($(this).text() == 'backend') {
            $(this).css( "background", "blue" )
        } else if ($(this).text() == 'frontend') {
            $(this).css( "background", "red" )
        } else {
            $(this).css( "background", "grey" )
        }
    });

    // when typing in filter box, execute sequelize query and get posts again
    
    let filterWhileTyping = function() {
        console.log($(".js-filter").text());
    }

    $('.js-filter').keyup(_.debounce(filterWhileTyping , 300));

    // when clicking copy button, copy code
});
