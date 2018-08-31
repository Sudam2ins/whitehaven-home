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
		ifAlreadyActive = $('.section-1 .ss-items.'+findTarget).hasClass('active');

		if(!ifAlreadyActive){
			$('.section-1 .ss-items').stop().fadeOut(0);
			$('.section-1 .ss-items, .s1-tabs ul li ').removeClass('active');
			$('.section-1  .ss-items.'+findTarget).stop().fadeIn(300);
			$('.section-1  .ss-items.'+findTarget).addClass('active');
			$(this).parent().addClass('active');
		}
	});

	$('.s5-tabs .sl-item a').click(function(e){
		e.preventDefault();
		findTarget = $(this).attr('data-target');
		ifAlreadyActive = $('.s5-intro .s5-items.'+findTarget).hasClass('active');
		console.log(ifAlreadyActive)

		if(!ifAlreadyActive){
			$('.section-5 .s5-items').stop().fadeOut(0);
			$('.section-5 .s5-items, .s5-tabs .sl-item a ').removeClass('active');
			$('.section-5 .s5-items.'+findTarget).stop().fadeIn(750);
			$('.section-5 .s5-items.'+findTarget).addClass('active');
			$(this).addClass('active');
		}
	});

	// Scroll Reveal

	// Reveal On Scroll Initialization
	window.sr = ScrollReveal();
	sr.reveal('.scroll-reveal', {
		duration: 700,
		distance: '50px',
		delay: 0,
		scale: 1,
		easing: 'ease-in-out'
	});

	// Window Resize Orientation Change
	$(window).bind('resize orientationchange',function(){
		wwwh();
	})
})
