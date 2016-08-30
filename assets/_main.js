
( function( $ ) {
	// Setup variables
	$window = $(window);
	$slide = $('.homeSlide');
	$body = $('body');

    //FadeIn all sections
	$body.imagesLoaded( function() {
		setTimeout(function() {

		      // Resize sections
		      adjustWindow();

		      // Fade in sections
			  $body.removeClass('loading').addClass('loaded');

		}, 5000);
	});

	function adjustWindow(){

		// Init Skrollr
		var s = skrollr.init({
		    forceHeight: false
		});

		// Get window size
	    winH = $window.height();
	    winW = $window.width();
	    // Keep minimum height 550
	    if(winH <= 550) {
				winH = 550;
			}

			if (winW >= 768) {
				var s = skrollr.init({
					forceHeight: false
				});

				//Resize slides
				$slide.height(winH);
				s.refresh($('.homeSlide'));
			}
			else {
				// Init Skrollr
			 var s = skrollr.init();
			 s.destroy();
			}

			//Check for touch
			if (Modernizr.touch) {
				//Init Skrollr
				var s = skrollr.init();
			  s.destroy();
	 		}


	    // Resize our slides
	    $slide.height(winH);

	    // Refresh Skrollr after resizing our sections
	    s.refresh($('.homeSlide'));

	}

	function initAdjustWindow() {
		return {
			match: function() {
				adjustWindow();
			},
			unmatch: function() {
				adjustWindow();
			}
		};
	}

	enquire.register("screen and (min-width: 768px)", initAdjustWindow(), false);


} )( jQuery );
