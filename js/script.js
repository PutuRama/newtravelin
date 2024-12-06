document.addEventListener("DOMContentLoaded", () => {
	const dropdowns = document.querySelectorAll(".dropdown-menu > li");

	dropdowns.forEach((dropdown) => {
		const submenu = dropdown.querySelector(".dropdown__submenu");
		// Handle hover for showing submenus
		dropdown.addEventListener("mouseenter", () => {
			if (submenu) {
				submenu.classList.add("show");
			}
		});

		// Handle hover out for hiding submenus
		dropdown.addEventListener("mouseleave", () => {
			if (submenu) {
				submenu.classList.remove("show");
			}
		});

		// Toggle submenu visibility on click
		dropdown.addEventListener("click", (event) => {
			event.stopPropagation();
			if (submenu) {
				submenu.classList.toggle("show");
			}
		});
	});

	// Close all dropdowns when clicking outside
	document.addEventListener("click", () => {
		document.querySelectorAll(".dropdown__submenu.show").forEach((submenu) => {
			submenu.classList.remove("show");
		});
	});
});

// var prevScrollpos = window.scrollY;
// var navbar = document.getElementById("navbar");
// var upperContent = document.getElementById("info");
// var spacer = document.createElement("div");
// var isFirstScroll = true; // Flag for first scroll behavior

// // Set up the spacer to prevent layout shifting
// spacer.style.height = `${navbar.offsetHeight}px`;
// spacer.style.display = "none"; // Initially hidden
// navbar.parentNode.insertBefore(spacer, navbar); // Insert spacer before navbar

// window.onscroll = function () {
// 	var currentScrollPos = window.scrollY;
// 	var upperContentHeight = upperContent.offsetHeight; // Height of the upper content section

// 	if (currentScrollPos <= upperContentHeight) {
// 		// If scrolled back to or above the upper content height
// 		navbar.style.position = "relative";
// 		navbar.style.top = "0";
// 		spacer.style.display = "none"; // Hide spacer
// 		isFirstScroll = true; // Reset first scroll flag
// 	} else {
// 		// If scrolled past the upper content height
// 		if (isFirstScroll) {
// 			// First scroll behavior: show navbar when leaving the top
// 			navbar.style.position = "fixed";
// 			navbar.style.top = "0";
// 			spacer.style.display = "hide"; // Show spacer

// 			// Delay hiding the navbar
// 			setTimeout(() => {
// 				if (currentScrollPos > prevScrollpos) {
// 					navbar.style.top = "-80px"; // Hide navbar
// 				}
// 				isFirstScroll = false; // Disable first-scroll logic
// 			}, 150); // Delay in ms
// 		} else if (prevScrollpos > currentScrollPos) {
// 			// Scrolling up
// 			navbar.style.position = "fixed";
// 			navbar.style.top = "0";
// 			spacer.style.display = "block";
// 		} else {
// 			// Scrolling down
// 			navbar.style.position = "fixed";
// 			navbar.style.top = "-80px";
// 			spacer.style.display = "hide";
// 		}
// 	}

// 	// Update previous scroll position
// 	prevScrollpos = currentScrollPos;
// };

$(".hero__slick").slick({
	autoplay: true,
	autoplaySpeed: 3000,
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	speed: 3000,
	arrows: true,
	responsive: [
		{
			breakpoint: 767,
			settings: {
				arrows: false,
			},
		},
	],
});

$(".karoselgambar-paket").slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	infinite: true,
	autoplay: true,
	arrows: false,
	autoplaySpeed: 4000,
	speed: 1500,
	asNavFor: ".karoselarrow",
	responsive: [
		{
			breakpoint: 1000,
			settings: {
				slidesToShow: 2,
			},
		},
		{
			breakpoint: 750,
			settings: {
				slidesToShow: 1,
			},
		},
	],
});

$(".karoselarrow").slick({
	speed: 1500,
	arrows: true,
	infinite: true,
	asNavFor: ".karoselgambar-paket",
});

$(".karoselgambar-icon").slick({
	arrows: false,
	slidesToShow: 6,
	slidesToScroll: 1,
	autoplay: true,
	infinite: true,
	autoplaySpeed: 6000,
	responsive: [
		{
			breakpoint: 1000,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
			},
		},
		{
			breakpoint: 811,
			settings: {
				slidesToShow: 2,
			},
		},
		{
			breakpoint: 501,
			settings: {
				slidesToShow: 1,
			},
		},
	],
});

$(".review__carousel").slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	speed: 2000,
	autoplay: true,
	autoplaySpeed: 6000,
	arrows: false,
	infinite: true,
});

$(".trend__carousel").slick({
	slidesToShow: 2,
	slidesToScroll: 1,
	speed: 2000,
	autoplay: true,
	autoplaySpeed: 6000,

	arrows: false,
	infinite: true,
	responsive: [
		{
			breakpoint: 991,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			},
		},
	],
});

$(".autoplay").slick({
	slidesToShow: 4,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 2000,
	arrows: false,
	responsive: [
		{
			breakpoint: 1000,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
			},
		},
		{
			breakpoint: 811,
			settings: {
				slidesToShow: 2,
			},
		},
		{
			breakpoint: 501,
			settings: {
				slidesToShow: 1,
			},
		},
	],
});

$(".partner__slick").slick({
	infinite: true,
	slidesToShow: 5,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 2000,
	arrows: false,
	responsive: [
		{
			breakpoint: 1000,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
			},
		},
		{
			breakpoint: 811,
			settings: {
				slidesToShow: 2,
			},
		},
		{
			breakpoint: 501,
			settings: {
				slidesToShow: 1,
			},
		},
	],
});

$(".footer__slick").slick({
	infinite: true,
	slidesToShow: 8,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 2000,
	arrows: false,
	responsive: [
		{
			breakpoint: 1000,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
			},
		},
		{
			breakpoint: 811,
			settings: {
				slidesToShow: 2,
			},
		},
		{
			breakpoint: 501,
			settings: {
				slidesToShow: 1,
			},
		},
	],
});
