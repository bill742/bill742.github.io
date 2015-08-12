// Navagation
jQuery(document).ready(function($){
  
  // Navagation scrolling
  $('a').click(function(){
    $('html, body').animate({
      scrollTop: $( $(this).attr('href') ).offset().top -90 }, 500);
    return false;
  });

  // Hamburger menu
  $('.menu').click(function(){
    $('nav').slideToggle();
  });

  // Show/Hide Portfolio images
  $('.port-img').click(function(){
    if ($(this).hasClass("sm")) {
      $(this)
      .hide()
      .prevAll('.lg').fadeIn('slow');
    } else {
      $(this)
      .hide()
      .next('img').fadeIn('slow');
    }
  });

}); // End DocReady

// Tracking
var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");
document.write(unescape("%3Cscript src='" + gaJsHost + "google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E"));

try {
  var pageTracker = _gat._getTracker("UA-60121501-1");
pageTracker._trackPageview();
} catch(err) {}