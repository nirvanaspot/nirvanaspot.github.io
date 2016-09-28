$(document).ready(function(){

	// Smooth Scrolling

	$('a[href^="#"]').on('click',function(e) {
		e.preventDefault();

		var target = this.hash;
		var $target = $(target);
		var targetOffset = $target.offset().top - 45;

		$('html, body').stop().animate({
			'scrollTop': targetOffset
		}, 900, 'swing', function () {
			window.location.hash = targetOffset;
		});
	});

	// Collapse mobile menu on link click

	$("#top-nav-items a").click(function(event) {
		var windowWidth = $(window).width();

		if ( windowWidth < 768 && $(".navbar-collapse").hasClass("in") ) {
			$(".navbar-collapse").collapse("hide");
		}

	});

	// Initiate the bootstrap popovers

	$('[data-toggle="popover"]').popover({html:true});

});