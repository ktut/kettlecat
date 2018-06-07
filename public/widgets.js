$( document ).ready(function() {
    $(".animate").addClass("move");

    // TEMPORARY: set tag colors based on content
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
$(document).on("click", "div.card",function() {
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


// when clicking various buttons, do stuff
$(document).on("click", ".js-copy-button",function() {
    var copyText = $(this).siblings("textarea.content");
    copyText.focus();
    copyText.select();
    document.execCommand("copy");
});

$(document).on("click", ".add-card",function() {
    modal.style.display = "block";
});

$(document).on("click", ".close",function() {
    modal.style.display = "none";
});

$(document).on("click", ".add-tag",function() {
    tagModal.style.display = "block";
});

$(document).on("click", ".closeTag",function() {
    tagModal.style.display = "none";
});
