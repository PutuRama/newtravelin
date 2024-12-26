// NAVBAR
document.addEventListener("DOMContentLoaded", () => {
	let lastScrollTop = 0;
	const navbar = document.getElementById("navbar");

	window.addEventListener("scroll", () => {
		const scrollTop = window.scrollY || document.documentElement.scrollTop;

		if (scrollTop > lastScrollTop) {
			navbar.style.top = "-100px";
		} else {
			navbar.style.top = "0";
		}

		lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
	});
});

// HERO SLICK
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

// PAKET TUR SLICK
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

// PAKET TUR ARROW
$(".karoselarrow").slick({
	speed: 1500,
	arrows: true,
	infinite: true,
	asNavFor: ".karoselgambar-paket",
});

// PAKET TUR ICON
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

// REVIEW SLICK
$(".review__carousel").slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	speed: 2000,
	autoplay: true,
	autoplaySpeed: 6000,
	arrows: false,
	infinite: true,
});

// TREND SLICK
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
			breakpoint: 1025,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			},
		},
	],
});

// GUIDES SLICK
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
				slidesToScroll: 1,
				slidesToShow: 2,
			},
		},
		{
			breakpoint: 501,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			},
		},
	],
});

// PARTNER SLICK
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

// FOOTER SLIC
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
				slidesToShow: 4,
				slidesToScroll: 1,
			},
		},
		{
			breakpoint: 597,
			settings: {
				slidesToShow: 3,
			},
		},
		{
			breakpoint: 497,
			settings: {
				slidesToShow: 2,
			},
		},
	],
});

// CUSTOM SELECT INPUT
function initializeCustomDropdowns() {
	document.querySelectorAll(".custom_dropdown").forEach((dropdown) => {
		const dropdownButton = dropdown.querySelector(".form-control");
		const dropdownMenu = dropdown.querySelector(".dropdown_menu");
		const hiddenSelectId = dropdown.getAttribute("data-select-id");
		const hiddenSelect = document.getElementById(hiddenSelectId);

		// Toggle the dropdown menu
		dropdownButton.addEventListener("click", function () {
			dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
		});

		// Handle option selection
		dropdownMenu.addEventListener("click", function (e) {
			if (e.target.tagName === "LI") {
				const selectedValue = e.target.getAttribute("data-value");
				dropdownButton.textContent = e.target.textContent;
				hiddenSelect.value = selectedValue;
				dropdownMenu.style.display = "none";
			}
		});

		// Close the dropdown when clicking outside
		document.addEventListener("click", function (e) {
			if (!e.target.closest(".custom_dropdown")) {
				dropdownMenu.style.display = "none";
			}
		});
	});
}
// Initialize the dropdowns when the page loads
document.addEventListener("DOMContentLoaded", initializeCustomDropdowns);

// DROPDOWN TRANSITION
$(document).ready(function () {
	function toggleOnMobile(breakpoint = 1024) {
		$("[data-select-id]").each(function () {
			const toggleButton = $(this); // The button
			const panelId = toggleButton.data("select-id"); // Get the target panel ID
			const panel = $(`#${panelId}`); // The panel

			function handleToggle() {
				if (window.innerWidth <= breakpoint) {
					toggleButton.off("click").on("click", function () {
						panel.slideToggle(600);
					});
				} else {
					toggleButton.off("click"); // Remove the event handler on larger screens
				}
			}

			// Run on page load
			handleToggle();

			// Run on window resize
			$(window).resize(handleToggle);
		});
	}

	// Call the function to enable the toggle behavior
	toggleOnMobile();
});
