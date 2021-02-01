/* -- navbar script --*/
$(document).ready(function(){
    var nav = $("#header").offset().top; 
    $(window).bind('scroll', function() { 
      if ($(window).scrollTop() > nav) {  
        $('#header').addClass('fixed');  
      } 
      else {  
       $('#header').removeClass('fixed');    
      } 
    });
  });




$(document).ready(function () {
  // Scroll spy
  $('body').scrollspy({
    target: "#nabvar-main",
    offset: 70
  });

  // Navbar fade
  changeNavbar();

  $(window).scroll(function () {
    changeNavbar();
  });

  function changeNavbar() {
    var navbar = $("#nabvar-main");
    if($(this).scrollTop() >= 100 ) {
      navbar.addClass("bg-light").removeClass("bg-transparent");
    }else if ($(this).scrollTop() < 100) {
      navbar.removeClass("bg-light").addClass("bg-transparent");
    }
  }
});


/*--- ScrollToTop Arrow --*/

/*JS file of the Responsive jQuery ScrollToTop Arrow by Fabian Lins*/

$(document).ready(function() {

  /*Change this variable to adjust the speed of the scrolling.*/
  scrolltotop_scroll_speed=200;

  /*Change this variable to adjust the speed of the fading.*/
  scrolltotop_animation_speed=500;

  /*Change this variable to adjust the start position of the fade in.*/
  scrolltotop_fadein_start_position=200;

  /*True means you have a circle, false means you have a rectangle with round corners.*/
  scrolltotop_circle_mode=true;

  /*Make the rectangle a circle or give it round corners.*/
  if(scrolltotop_circle_mode==true){
      $("#scrolltotop_parent").addClass("scrolltotop_circle");
  }
  else{
      $("#scrolltotop_parent").addClass("scrolltotop_round_corners");
  }

  /*Scrolls to the top of the page.*/
  $("#scrolltotop_parent").on(
      "click keypress", function () {
      $("html, body").animate({
           scrollTop: 0		
      }, scrolltotop_scroll_speed);
      document.activeElement.blur();  
  });

  /*Fades the scrolltotop box in and out while scrolling.*/
  $(window).scroll(function () {
      if (window.pageYOffset >= scrolltotop_fadein_start_position) {
          $("#scrolltotop_parent").fadeIn(scrolltotop_animation_speed);
      }
      else {
          $("#scrolltotop_parent").fadeOut(scrolltotop_animation_speed);
      }
  });

/* Keyboard accessibility */
  $(document).keydown(function(e) {
  var key_pressed = e.keykey_pressed || e.which;
  /* Esc Key */
  if (key_pressed == "27") {
    if($("#scrolltotop_arrow").is(":focus")) {
        document.activeElement.blur();	
      }
      }
  });
});