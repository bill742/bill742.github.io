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
    $('.port-copy').click(function() {
        $(this).toggleClass('slide');
        $(this).children('i').toggle();
        $(this).children('p').toggle();
        $(this).siblings('.port-img').toggleClass('img-hover');
    });

}); // End DocReady
