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

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-60121501-1', 'auto');
ga('send', 'pageview');