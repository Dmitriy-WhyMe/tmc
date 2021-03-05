(function ($) {
	$(document).ready(function () {
		$('.multiple-items').slick({
			infinite: true,
			slidesToShow: 6,
			slidesToScroll: 1,
			prevArrow: $('.arrow_next'),
			nextArrow: $('.arrow_prev')
		});
	});
})(jQuery);