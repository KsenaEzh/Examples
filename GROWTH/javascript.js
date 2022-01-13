$(document).ready (function(){
	$('.header a').on('click', function(){
		var el = $(this);
		var direction = el.attr('href');
		$('html').animate({scrollTop:$(direction).offset().top}, 500);
		return false;
	});

	$(".form").submit(function(e){
	    e.preventDefault();
	    $.ajax({
	        type: "POST",
	        url: "send.php",
	        data: $(".form").serialize(),
	        success: function(data) {
	            $("#result").html(data);
	        }
	    });
	    alert('ok');
	});
});