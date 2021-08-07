$(document).ready(function() {

    // Menu Set Up

    var numSlides = $('#slider .slide').length;

    for (var i = 0; i < numSlides; i++) {
        
        
    }

    $(".container").scroll(function(event){
        event.preventDefault();
        var x = $(this).scrollLeft();
        $("#scroller").width(x / (numSlides -1));
    });
});




