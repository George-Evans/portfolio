$(document).ready(function($) {

	// Project Titles Hover
	$(".project").mouseenter( function() {
		$("img", this).delay(50).fadeTo(400,0);
		$(".project-title", this).delay(300).fadeIn(500,"swing");
	}).mouseleave( function() {
		$(".project-title", this).fadeOut(200);
		$("img", this).delay(100).fadeTo(100,1);
	});

});