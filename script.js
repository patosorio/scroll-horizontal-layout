$(document).ready(function() {

    var numSlides = $('#slider .slide').length;

    // Menu Set Up
    for ( i = 0; i < numSlides; i++ ) {
        var slideMenuButton = ("<div class='slideMenuButton'>" + "slideButton" + (i+1) + "</div>");
        $("#scrolling-bar").append(slideMenuButton);
    }    
    
    // Slide Menu Button width
    
    $(".slideMenuButton").width($(window).width()/numSlides);

    $("#scroller").width($(".slideMenuButton").width());
 
    var widthScroller = $("#scroller").width();

    $(".container").scroll(function(event){

        event.preventDefault();

        var horizontalScrolled = $(this).scrollLeft();

        $("#scroller").width((horizontalScrolled / numSlides) + widthScroller);
    });


});





