$(document).ready(function() {

	$('.main_btna').on('click', function(event) {
		event.preventDefault();
		$('.overlay').animate({opacity:'toggle'}, 900)
		$('.modal').animate({height:'toggle'}, 900)
	});

	$('.main_btn').on('click', function(event) {
		event.preventDefault();
		$('.modal').animate({height:'toggle'}, 900)
		$('.overlay').animate({opacity:'toggle'}, 900)
	});

	$('a[href="#sheldure"]').on('click', function(event) {
		event.preventDefault();
		$('.modal').animate({height:'toggle'}, 900)
		$('.overlay').animate({opacity:'toggle'}, 900)
	});

	$('.close').on('click', function(event) {
		event.preventDefault();
		$('.modal').animate({height:'toggle'}, 900)
		$('.overlay').animate({opacity:'toggle'}, 900)
	});

	$('.back').on('click', function(event) {
		event.preventDefault();
		$('.overlay').animate({height:'toggle'}, 900)
		$('.thanks').animate({opacity:'toggle'}, 900)
	});
	
	$('.form').submit(function(event) {
			event.preventDefault()
			$.ajax({
				url: 'server.php',
				type: 'POST',
				data: $(this).serialize()
			})
			.done(function() {
				$('.modal').animate({height:'toggle'}, 900)
				$('.thanks').animate({height:'toggle'}, 900)
			})
			.fail(function() {
				console.log("error");
			})
			.always(function() {
				console.log("complete");
			});
	
	});
});