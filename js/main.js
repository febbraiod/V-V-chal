$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 120) {
      $("#nav_container").addClass("top_nav");
      $("#nav_container").removeClass("bottom_nav");
    } else {
      $("#nav_container").addClass("bottom_nav");
      $("#nav_container").removeClass("top_nav");
    }
});