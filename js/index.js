$(() => {
	$(window).on('scroll', () => {
		if ($(window).scrollTop() >= 44) {
			$('header').addClass('active fixed');
		} else {
			$('header').removeClass('active fixed');
		}
	});
});

$(() => {
	var a = $('#menu-items').html();
	for (let n = 0; n < 10; n++) {
		$('#menu-items').append(a);
	}
});

overlay = '<div class="overlay"></div>';

chefSocial =
	"<div class='chef-social'>" +
	'<ul>' +
	"<li><i class='fab fa-facebook-f fa-lg fa-fw'></i></li>" +
	"<li><i class='fab fa-twitter fa-lg fa-fw'></i></li>" +
	"<li><i class='fab fa-behance fa-lg fa-fw'></i></li>" +
	"<li><i class='fab fa-instagram fa-lg fa-fw'></i></li>" +
	"<li><i class='fab fa-dribbble fa-lg fa-fw'></i></li>" +
	'</ul>' +
	'</div>';

$(() => {
	$('#chef-card-group > .col > .card > img').wrap(overlay);
	$('.overlay').append(chefSocial);
});

// var myCarousel = document.getElementById('carouselFade')

// myCarousel.addEventListener('slide.bs.carousel', function () {
//   console.log("enter");
// })
// myCarousel.addEventListener('slide.bs.carousel', function () {
//   console.log("exit");
// })
