"use strict";
window.addEventListener("load", () => {
	let resized = window.innerWidth;
	let height = window.innerHeight;

	const init = () => {
		const header = document.querySelector("header");
		let headerHeight = header.offsetHeight;
		let headerImgSize = Math.ceil(height - headerHeight);
		let burgerMenu = document.querySelector(".burgerMenu");
		let burgerLinks = document.querySelector(".navLinks");
		let navContainer = document.querySelector(".navBarContainer");
		const navClose = document.querySelector(".close");
		const body = document.querySelector("body");
		let navLinks = document.querySelector(".navLinks");

		document.documentElement.style.setProperty(
			"--header-imageSize",
			headerImgSize + "px"
		);

		// Mobile
		if (resized <= 660) {
			burgerMenu.addEventListener("click", () => {
				burgerLinks.classList.add("navPlaced");
				navContainer.classList.add("open");
				body.classList.add("noScroll");
			});
			navClose.addEventListener("click", () => {
				burgerLinks.classList.remove("navPlaced");
				navContainer.classList.remove("open");
				body.classList.remove("noScroll");
			});

			navLinks.addEventListener("click", (e) => {
				if (e.target.classList.contains("link")) {
					burgerLinks.classList.remove("navPlaced");
					navContainer.classList.remove("open");
					body.classList.remove("noScroll");
				}
			});
		}

		window.addEventListener("resize", () => {
			resized = window.innerWidth;
			height = window.innerHeight;
			headerImgSize = Math.ceil(height - headerHeight);
			document.documentElement.style.setProperty(
				"--header-imageSize",
				headerImgSize + "px"
			);
			if (resized <= 660) {
				burgerMenu.addEventListener("click", () => {
					burgerLinks.classList.add("navPlaced");
					navContainer.classList.add("open");
				});
				navClose.addEventListener("click", () => {
					burgerLinks.classList.remove("navPlaced");
					navContainer.classList.remove("open");
				});
				navLinks.addEventListener("click", (e) => {
					if (e.target.classList.contains("link")) {
						burgerLinks.classList.remove("navPlaced");
						navContainer.classList.remove("open");
						body.classList.remove("noScroll");
					}
				});
			}
		});
	};
	init();
});
