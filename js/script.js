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
