(function ($) {
	$(document).ready(function () {
		$('.multiple-items').slick({
			infinite: true,
			slidesToShow: 6,
			slidesToScroll: 1,
			prevArrow: $('.arrow_next'),
			nextArrow: $('.arrow_prev'),
			responsive: [
				{
					breakpoint: 1441,
					settings:{
						slidesToShow: 5,
						slidesToScroll: 1,
				  	}
				},
				{
					breakpoint: 1025,
					settings:{
						slidesToShow: 4,
						slidesToScroll: 1,
				  	}
				},
				{
					breakpoint: 835,
					settings:{
						slidesToShow: 3,
						slidesToScroll: 1,
				  	}
				},
				{
					breakpoint: 767,
					settings:{
						slidesToShow: 1,
						slidesToScroll: 1,
				  	}
				}
			]
		});
		$('input[type="tel"]').inputmask({
			mask: "+7 ([9][9][9]) [9][9][9]-[9][9]-[9][9]",
			greedy: false
		});
		jQuery(document).ready(function($) {
			$('#pop').magnificPopup({
				type: 'inline'
			});
		});
		window.onload = init;
		function init(){
			var button = document.getElementById("coco")
			button.onclick = handleButtonClick;
		}
		function handleButtonClick() {
			document.getElementsByClassName('coco')[0].style.display = 'none';
		}
	});
})(jQuery);