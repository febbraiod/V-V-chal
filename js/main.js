$(function(){
  bindDownArrow();
});


$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 120) {
      $("#down_arrow").hide();
      $("#nav_container").addClass("top_nav");
      $("#nav_container").removeClass("bottom_nav");
    } else {
      $("#nav_container").addClass("bottom_nav");
      $("#nav_container").removeClass("top_nav");
      $("#down_arrow").show();
    }
});

function bindDownArrow(){
  var stop_at = $("#second_section").offset().top;
  $('#down_arrow').click(function(){
    $(window).scrollTop(stop_at);
  });

  $('#down_arrow').hover(function(){
    $("#down_arrow").addClass("bounce");
  }, function(){
    $("#down_arrow").removeClass("bounce");
  });
}