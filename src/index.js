// Hide the loading screen when the page is loaded
window.addEventListener("load", () => {
	let loader = document.querySelector(".loader");
	loader.classList.add("loader--hidden");  
	loader.addEventListener("transitionend", () => loader.remove());
});