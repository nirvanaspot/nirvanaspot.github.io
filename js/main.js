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

	// Initiate the bootstrap popovers

	$('[data-toggle="popover"]').popover({html:true});

});