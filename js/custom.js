$(function(){

	// scrollbar js initialization
	$(".nano").nanoScroller();

	// Window Width/Height
	wwwh = function(){
		ww = $(window).width();
		wh = $(window).height();
	}
	wwwh();

	$('.toggle a').click(function(e){
		$('.mynav').addClass('show-menu');
		$('.body-inactive').fadeIn(250);
		e.preventDefault();
	});

	$('.body-inactive, .close-menu').click(function(e){
		$('.mynav').removeClass('show-menu');
		$('.body-inactive').fadeOut(250);
		e.preventDefault();
	});

	// Carousel, Tab and Intro
	$('.s1-tabs ul li a').click(function(e){
		e.preventDefault();
		findTarget = $(this).attr('data-target');
		ifAlreadyActive = $('.ss-items.'+findTarget).hasClass('active');

		if(!ifAlreadyActive){
			$('.ss-items').stop().fadeOut(0).removeClass('active');		
			$('.ss-items.'+findTarget).stop().fadeIn(300).addClass('active');
		}
	})

	// Window Resize Orientation Change
	$(window).bind('resize orientationchange',function(){
		wwwh();
	})
})