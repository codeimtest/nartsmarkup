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
//team buttons
$('.team-module').click(function(){
	$('.team-module.active').not(this).removeClass('active');
	$(this).toggleClass('active');
})
var swiper = new Swiper(".home-slider", {
	direction: "horizontal",
	slidesPerView: 1,
	spaceBetween: 30,
	mousewheel: true,
	loop: false
});
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

$('.roadmap-three .active').last().next().addClass('actual');
$('.roadmap-item:nth-child(odd)').addClass('left-brd');

//faq accordeon
var toggleActiveElements = document.querySelectorAll(".toggle-accordion");
for (var i = 0; i < toggleActiveElements.length; i++) {
    toggleActiveElements[i].addEventListener('click', function(event) {
        event.preventDefault();
        this.classList.toggle('active');
    });
}

//team tabs
$('.team-modules-content-item').hide();
  $('.team-modules-content-item:first').show();
  $('.team-module:first').addClass('active');
  $('.team-modules div').click(function(event) {
    $('.team-modules div').removeClass('active');
    $(this).addClass('active');
    $('.team-modules-content-item').hide();

    var selectTab = $(this).find('a').attr("href");

    $(selectTab).fadeIn();
		event.preventDefault();
  });