$(window).on("load", function(){
	enable_scroll();
	close_nav();
});
// Control Fade
$(window).on("scroll", function(){
	var box = $(".fadeIn");
	box.each(function(){
		var boxOffset = $(this).offset().top;
		var scrollPos = $(window).scrollTop();
		var wh = $(window).height();

		if(scrollPos > boxOffset - wh + 10 ){
			$(this).addClass("effected");
		}else{
			$(this).removeClass("effected");
		}
	});
});

// Click Hamburger Icon and Disable/Enable Scroll
$(function() {
	$(".hum_icon,.hum_click,#navlinks>li>a").on("click", function(e) {
		// Disable link
		e.preventDefault();
		var url = $(this).attr("href");
		
		if ($(".hum_icon, .hum_click, .hum_str").hasClass("active")) {
			close_nav();
			enable_scroll();
		} else {
			disable_scroll();
			open_nav();
		}
		if (url != ""){
			setTimeout(function(){
				window.location = url;
			},250);
		}
		return false;
	});
});

function close_nav() {
			$(".hum_icon, .hum_click, .hum_str").removeClass("active");
			$("nav")
				.addClass("close")
				.removeClass("open");

			$(".hum_shade")
				.addClass("close")
				.removeClass("open");

}

function open_nav() {
			$(".hum_icon, .hum_click, .hum_str").addClass("active");
			$("nav")
				.addClass("open")
				.removeClass("close");
			$(".hum_shade")
				.addClass("open")
				.removeClass("close");
}

// Disable Scroll
function disable_scroll() {
    // PC
    document.addEventListener("mousewheel", scroll_control, { passive: false });
    // Smart Phone
    document.addEventListener("touchmove", scroll_control, { passive: false });
}
// Enable Scroll
function enable_scroll() {
    // PC
    document.removeEventListener("mousewheel", scroll_control, { passive: false });
    // Smart Phone
    document.removeEventListener('touchmove', scroll_control, { passive: false });
}

// Control Scroll
function scroll_control(event) {
    event.preventDefault();
}


// Control Humbeger navi bar
$(function() {
  var $win = $(window),
      $header = $(".hum"),
      headerHeight = $header.outerHeight(),
      startPos = 0;

  $win.on("load scroll", function() {
	var value = $(this).scrollTop();
	if ( value > startPos && value > headerHeight ) {
		$header.css("top", "-" + headerHeight + "px");
	} else {
		$header.css("top", "0");
	}
	startPos = value;
  });
});

// navi bar Switch top <--> bottom
$(window).on("scroll", function(){
	var value = $(this).scrollTop();
	if(value > 700){
		$("nav").addClass("nav_top");
	} else {
		$("nav").removeClass("nav_top");
	}
});
