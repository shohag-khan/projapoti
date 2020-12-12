// document.getElementById('body').style.background =  'red';
// $('#body').css('background', 'red');



$(document).ready(function(){
	
	// Owl Carousel
	$(".owl-carousel").owlCarousel({
		items: 6,
		margin: 20,
		loop: false,
		mouseDrag: false,
		nav: true,
		navText: ['<', '>'],
		responsive:{
	        0:{
	            items:1
	        },
	        767:{
	            items:3
	        },
	        991:{
	            items:4
	        },
	        1199:{
	        	items:5
	        }
	    }
	});







	// init Isotope
	var $grid = $('.portfolio-grid').isotope({
	    itemSelector: '.portfolio-item',
	    layoutMode: 'masonry'
	});
	// filter items on button click
	$('.portfolio-nav').on( 'click', 'button', function() {
	    var filterValue = $(this).attr('data-filter');
	    $grid.isotope({ filter: filterValue });
	});




	// Magnific Popup
	$('.image-link').magnificPopup({
		type:'image',
		gallery: {
			enabled: true
	    },
	});




});


