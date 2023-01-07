jQuery(document).ready(function ($) {
	
	$('.phone').mask('+7 (999) 999 - 99 - 99')
	
	// SLIDER-IMG
	var sliders = document.getElementsByClassName("slider-container");
	for (var i = 0; i < sliders.length; i++) {
		var slider = sliders[i];
		var images = slider.getElementsByTagName("img");
		var html = "";
		for (var i = 0; i < images.length; i++) {
			if (i > 1) {
				break;
			}
			html +=
				'<div class="img ' + (i == 0 ? "before" : "after") + '-img" style="background-image: url(\'' + images[i].src + "')\"></div>";
		}
		html +=
			'<input type="range" min="1" max="100" value="50" class="slider" name="slider" id="slider-input"><div class="slider-button"></div>';
		slider.innerHTML = html;
		slider.addEventListener("input", function (e) {
			sliderChange(slider, e);
		});
		slider.addEventListener("change", function (e) {
			sliderChange(slider, e);
		});
	}
	
	function sliderChange(slider, e) {
		const sliderPos = e.target.value;
		slider.getElementsByClassName("after-img")[0].style.width = sliderPos + "%";
		slider.getElementsByClassName("slider-button")[0].style.left =
			"calc(" + sliderPos + "% - 18px)";
	}
	
	var lightbox = new SimpleLightbox(".gallery a", {});
	
	$(".play").click(function () {
		$(".popup__video").addClass("active");
		if ($(".popup__bg").hasClass("active")) {
			$(".popup__bg").show();
		}
	});
	
	$(".open-form").on('click', function () {
		
		const theme = $(this).data('theme')
		$('#getTheme').val(theme)
		
		$(".popup__form").addClass("active");
		if ($('.popup__bg').hasClass("active")) {
			$('.popup__bg').show();
		}
	});
	
	$(document).mouseup(function (e) {
		var container = $(".popup__bg");
		if (container.has(e.target).length === 0) {
			container.removeClass("active");
		}
	});
	
	// BURGER
	$(".burger").click(function () {
		$(this).toggleClass("active");
		$("#mobileMenu").toggleClass("active");
	});
	
	// TABS
	function tabs() {
		const tabsBtn = document.querySelectorAll(".btnTab");
		const tabsItems = document.querySelectorAll(".tab");
		
		tabsBtn.forEach(onTabClick);
		
		function onTabClick(item) {
			item.addEventListener("click", function () {
				let currentBtn = item;
				let tabId = currentBtn.getAttribute("data-tab");
				let currentTab = document.querySelector(tabId);
				
				if (!currentBtn.classList.contains("active")) {
					tabsBtn.forEach(function (item) {
						item.classList.remove("active");
					});
					
					tabsItems.forEach(function (item) {
						item.classList.remove("active");
					});
					
					currentBtn.classList.add("active");
					currentTab.classList.add("active");
				}
			});
			document.querySelector(".btnTab").click();
		}
	}
	
	tabs();
	
	//MAIN-SLIDER
	$("#mainSlider").slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		prevArrow: null,
		nextArrow: null,
		autoplay: true,
		autoplaySpeed: 2000,
		fade: true,
		cssEase: "linear",
		dots: true,
		responsive: [
			{
				breakpoint: 769,
				settings: {
					dots: false,
				},
			},
		],
	});
	
	// REVIEWS-SLIDER
	$("#reviewSlider").slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		prevArrow: "#reviewsPrev",
		nextArrow: "#reviewsNext",
		autoplay: true,
		autoplaySpeed: 1000,
		responsive: [
			{
				breakpoint: 1110,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	});
	
	// CERTIFICATES-SLIDER
	$("#certificates-slider").slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		dots: true,
		prevArrow: null,
		nextArrow: null,
		autoplay: true,
		autoplaySpeed: 3000,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					infinite: true,
					dots: true,
				},
			},
		],
	});
	
	// ACCORDION
	var acc = document.getElementsByClassName("accordion");
	var i;
	for (i = 0; i < acc.length; i++) {
		acc[i].addEventListener("click", function () {
			this.classList.toggle("active");
			var panel = this.nextElementSibling;
			if (panel.style.maxHeight) {
				panel.style.maxHeight = null;
			} else {
				panel.style.maxHeight = panel.scrollHeight + "px";
			}
		});
	}
});
