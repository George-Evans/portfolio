$(document).ready(function($) {

	// Project Titles Hover
	$(".overlay").mouseenter( function() {
		$(".project-title", this).delay(200).fadeIn(500,"swing");
	}).mouseleave( function() {
		$(".project-title", this).hide();
	});

});