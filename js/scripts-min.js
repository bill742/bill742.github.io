jQuery(document).ready(function(e){e("nav a.navScroll").click(function(){var o=e(this.hash),t=o.offset().top;return e("html, body").animate({scrollTop:t},700),e("nav").hasClass("mobile")&&(e("nav").slideToggle(),e(".menu-btn").show(),e(".close").hide()),!1}),e(".menu-btn").click(function(){e("nav").slideToggle().addClass("mobile"),e(".menu-btn").hide(),e(".close").show()}),e(".close").click(function(){e("nav").slideToggle(),e(".menu-btn").show(),e(".close").hide()}),e(".portfolio-container").hover(function(){var o=e(this).children(".port-copy");o.toggleClass("slide"),o.children("span").toggle(),o.children("p").toggle(),o.siblings(".port-img").toggleClass("img-hover")}),e(function(){var o='https://fonts.googleapis.com/css?family=Roboto+Condensed:400,700|Ubuntu:400,700" rel="stylesheet';document.createStyleSheet?document.createStyleSheet(o):e("head style").before(e("<link rel='stylesheet' href='"+o+"' type='text/css' media='screen' />"))})});