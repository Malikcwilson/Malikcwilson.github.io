$(document).ready(function() {
/*	$('#slides').superslides({
		animation: 'fade',
		play: 2000,
		pagination: true
	});

	var typed = new Typed(".typed", {
		strings: ["College Graduate", "Java Developer", "Always Learning"],
		typeSpeed: 80,
		loop: true,
		startDelay: 1000,
		showCursor: false

	} ); */

	$("[data-fancybox]").fancybox();

	$(".items").isotope({
		filter: '*',
		animationOptions:{
			duration: 1500,
			easing: 'linear',
			queue: false
		}
	});

	$("#navigation li a").click(function(e){
		e.preventDefault();

		var targetElement = $(this).attr("href");
		var targetPosition = $(targetElement).offset().top;
		$("html, body").animate({scrollTop: targetPosition -50}, "slow" );
	});

	const nav = $("#navigation");
	const navTop = nav.offset().top;

	$(window).on("scroll", stickyNavigation);

	function stickyNavigation() {

		const body = $("body");

		if($(window).scrollTop() >= navTop) {
			body.css("padding-top", nav.outerHeight() + "px");
			body.addClass("fixedNav");
		}
		else {
			body.css("padding-top", 0);
			body.removeClass("fixedNav");
		}

	}


});