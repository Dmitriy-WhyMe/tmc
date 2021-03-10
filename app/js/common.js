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
		//Mask
		$('input[type="tel"]').inputmask({
			mask: "+7 ([9][9][9]) [9][9][9]-[9][9]-[9][9]",
			greedy: false
		});
		//Popup
		jQuery(document).ready(function($) {
			$('#pop').magnificPopup({
				type: 'inline'
			});
		});
		jQuery(document).ready(function($) {
			$('#pop_1').magnificPopup({
				type: 'inline'
			});
		});
		jQuery(document).ready(function($) {
			$('#pop_2').magnificPopup({
				type: 'inline'
			});
		});
		//Cookie
		function getCookie() {
			var cookies = document.cookie.match ( '(^|;) ?adultconfirmed=([^;]*)(;|$)' );
			if (cookies) { $('.coco').hide(); }
			}
			$('#coco').click(function(event) {
			event.preventDefault();
			document.cookie = 'adultconfirmed=yes; path=/; max-age=604800';
			$('.coco').hide();
			});
		getCookie();
		// menu
		$('#main-menu li a').each(function () {      
			var location = window.location.href 
			var link = this.href                
			var result = location.match(link);  
			if(result != null) {                
				$(this).addClass('active');    
			}
		});
		// select
		$(document).ready(function() {
			$('select').niceSelect();
		});
		// maps

		var map;
		var arrMarkers = [];
		var arrInfoWindows = [];
		
		function mapInit() {
			var centerCoord = new google.maps.LatLng(55.748053042845335, 37.550249169656325);
			var mapOptions = {
				zoom: 7,
				center: centerCoord,
				mapTypeId: google.maps.MapTypeId.ROADMAP
			};
		
			map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

			$.getJSON("../js/markers.json", {}, function (data) {
				$.each(data.places, function (i, item) {
		
					var marker = new google.maps.Marker({
						position: new google.maps.LatLng(item.lat, item.lng),
						map: map,
						title: item.title
					});
		
					arrMarkers[i] = marker;
					var infowindow = new google.maps.InfoWindow({
						content: "<h3>" + item.title + "</h3><p>"
					});
		
					arrInfoWindows[i] = infowindow;
					google.maps.event.addListener(marker, 'click', function () {
						infowindow.open(map, marker);
					});
		
				});
			});
		}
		
		function newLocation(newLat, newLng, newZoom) {
			map.setCenter({
				lat: newLat,
				lng: newLng
			});
			map.setZoom(newZoom)
		}
		
		$(document).on('click', '.maps__link', function (e) {
			e.preventDefault();
			newLocation($(this).data('lat'), $(this).data('long'), $(this).data('zoom'));
		});
		
		
		$(function () {
			if($('#map-canvas').length) {
				mapInit();
			}
		});
	});
})(jQuery);