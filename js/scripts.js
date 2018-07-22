$(document).ready(function($) {

	// Project Titles Hover
	$(".overlay").mouseenter( function() {
		$(".project-title", this).delay(200).fadeIn(500,"swing");
	}).mouseleave( function() {
		$(".project-title", this).hide();
	});

	// Hide Header on on scroll down
	$(document).ready(function () {
  
	  'use strict';
	  
	   var c, currentScrollTop = 0,
	       navbar = $('header');

	   $(window).scroll(function () {
	      var a = $(window).scrollTop();
	      var b = navbar.height();
	     
	      currentScrollTop = a;
	     
	      if (c < currentScrollTop && a > b + b) {
	        navbar.addClass("scrollUp");
	      } else if (c > currentScrollTop && !(a <= b)) {
	        navbar.removeClass("scrollUp");
	      }
	      c = currentScrollTop;
	  });
	  
	});


});