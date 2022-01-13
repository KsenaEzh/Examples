$('document').ready(function() {

	$('#name').on('click', function() {
		$('#name').css({
			'color' : '#000',
			'-webkit-text-shadow' : '0 0 0px #000',
			'-moz-text-shadow' : '0 0 0px #000',
			'text-shadow' : '0 0 0px #000'
		});
	});

	$('#job').on('click', function() {
		$('#job').css({
			'color' : '#000',
			'-webkit-text-shadow' : '0 0 0px #000',
			'-moz-text-shadow' : '0 0 0px #000',
			'text-shadow' : '0 0 0px #000'
		});
	});

	$('body').keypress(function(e) {
		if (e.which == 32) {
			$('a').remove();
		}
	});

	// $('a').remove();
});
