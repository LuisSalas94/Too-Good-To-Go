/* Navbar */
const menu = document.querySelector(".fa-bars");
const navbar = document.querySelector(".navbar");

/* change icon */
menu.addEventListener("click", () => {
	menu.classList.toggle("fa-times");
	navbar.classList.toggle("nav-toggle");
});

/*close navbar when scrolling */
window.addEventListener("scroll", () => {
	menu.classList.remove("fa-times");
	navbar.classList.remove("nav-toggle");
});
