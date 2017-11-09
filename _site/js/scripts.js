jQuery(document).ready(function($) {

  // Navagation scrolling
  $('nav a.navScroll').click(function() {
    var $target = $(this.hash);
    var targetOffset = $target.offset().top;
    $('html, body').animate({
      scrollTop: targetOffset
    }, 700);

    if ($('nav').hasClass('mobile')) {
      $('nav').slideToggle();
      $('.menu-btn').show();
      $('.close').hide();
    }

    return false;
  });

  // Hamburger menu
  $('.menu-btn').click(function() {
    $('nav').slideToggle().addClass('mobile');
    $('.menu-btn').hide();
    $('.close').show();
  });

  $('.close').click(function() {
    $('nav').slideToggle();
    $('.menu-btn').show();
    $('.close').hide();
  });

  // Portfolio rollover
  $('.portfolio-container').hover(function() {
    var element = $(this).children('.port-copy');
    element.toggleClass('slide');
    element.children('span').toggle();
    element.children('p').toggle();
    element.siblings('.port-img').toggleClass('img-hover');
  });

    // asynchronously loading google fonts
    $(function() {
      var fonts = 'https://fonts.googleapis.com/css?family=Roboto+Condensed:400,700|Ubuntu:400,700" rel="stylesheet';
      if (document.createStyleSheet) document.createStyleSheet(fonts);
      else $("head style").before($("<link rel='stylesheet' href='"+ fonts +"' type='text/css' />"));
    });

}); // End DocReady
