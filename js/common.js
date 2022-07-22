$('.toggle-button').click(function(){
	$(this).toggleClass('active');
	$('.toggle-menu').toggleClass('active');
	$('header').toggleClass('active');
	$('body').toggleClass('lock');
})
$('.allow').click(function(){
	$('.allow-popup').toggleClass('active');
	$('body').toggleClass('lock');
})
//Modal universal close button
$('.modal-close').click(function(){
	if ($(this).parent().hasClass("active")) {
		$(this).parent().removeClass("active");
		
	}
	$('body').removeClass('lock');
})
//filters toggle active
$('.filters button').click(function(){
	$('.filters button.active').not(this).removeClass('active');
	$(this).toggleClass('active');
})

//swiper init
const swipermodules = new Swiper('.modules-carousel', {
	// Optional parameters
	direction: 'horizontal',
	loop: false,
	// Navigation arrows
	navigation: {
		nextEl: '.modules-next',
		prevEl: '.modules-prev',
	},
	pagination: {
		el: ".swiper-pagination",
		type: "progressbar",
	},
	slidesPerView: 2.1,
	centeredSlides: false,
	spaceBetween: 16,
	watchOverflow: true,
	breakpoints: {
			1280: {
				slidesPerView: 3.2,
				watchOverflow: true,
				spaceBetween: 40,
				centeredSlides: false,
			},
		}, 
});
