$(document).ready(function() {
	console.log("document ready");
	var offset = 250;
	var duration = 300;
  $('.back-to-top').css({"display": "none"});
	$(window).scroll(function() {
		if ($(this).scrollTop() > offset) {
      console.log("scroll big");
			$('.back-to-top').hide().fadeIn(duration);
		} else {
			$('.back-to-top').fadeOut(duration);
		}
	});
	$('.back-to-top').click(function(event) {
		event.preventDefault();
		$('html, body').animate({scrollTop: 0}, duration);
		return false;
	});
});


//Anchor scrolling effect
$(document).on('click', 'a.scrolllink', function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
});
