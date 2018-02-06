$(function() {

	$('#my-menu').mmenu({
		extensions	: [ 'effect-slide-menu', 'shadow-page', 'shadow-panels' ],
		counters	: true,
		navbar: {
			title: 'Домашний ветеринар'
			
		},

		offCanvas: {
			position: 'left'

		}
	});

	var api = $('#my-menu').data('mmenu');
	api.bind('open:finish', function() {
		$('.hamburger').addClass('is-active');
	});
	api.bind('close:finish', function() {
		$('.hamburger').removeClass('is-active');
	});


					
					
					
			






$(".top-line .sf-menu").superfish({
		cssArrows: false,
		hoverClass: 'no-class',
		delay: 200
	});



$(".tagline").animated("slideInLeft", "zoomOutDown");
$(".button-animate").animated("slideInLeft", "zoomOutDown");
$(".silhouette-of-animals").animated("slideInRight", "zoomOutDown");

});
