document.addEventListener("DOMContentLoaded", () => {
	// Navbar scroll effect
	const navbar = document.getElementById("navbar");
	let lastScroll = 0;

	window.addEventListener("scroll", () => {
		const currentScroll = window.pageYOffset;

		if (currentScroll > 50) {
			navbar.classList.add("scrolled");
		} else {
			navbar.classList.remove("scrolled");
		}

		lastScroll = currentScroll;
	});

	// Mobile menu toggle
	const navToggle = document.getElementById("navToggle");
	const navLinks = document.getElementById("navLinks");

	navToggle.addEventListener("click", () => {
		navToggle.classList.toggle("active");
		navLinks.classList.toggle("active");
	});

	// Close mobile menu on link click
	document.querySelectorAll(".nav-links a").forEach((link) => {
		link.addEventListener("click", () => {
			navToggle.classList.remove("active");
			navLinks.classList.remove("active");
		});
	});

	// Scroll reveal animation
	const observerOptions = {
		root: null,
		rootMargin: "0px",
		threshold: 0.1,
	};

	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add("visible");
				observer.unobserve(entry.target);
			}
		});
	}, observerOptions);

	// Add fade-in class to elements and observe them
	const animateElements = document.querySelectorAll(
		".section-header, .about-text, .about-info, .skill-category, " +
			".timeline-item, .edu-card, .cert-card, .contact-item, .contact-cta-box",
	);

	animateElements.forEach((el) => {
		el.classList.add("fade-in");
		observer.observe(el);
	});

	// Smooth scroll for anchor links (fallback for older browsers)
	document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
		anchor.addEventListener("click", function (e) {
			e.preventDefault();
			const target = document.querySelector(this.getAttribute("href"));
			if (target) {
				target.scrollIntoView({
					behavior: "smooth",
					block: "start",
				});
			}
		});
	});

	// Active nav link on scroll
	const sections = document.querySelectorAll("section[id]");
	const navItems = document.querySelectorAll(".nav-links a");

	window.addEventListener("scroll", () => {
		let current = "";
		sections.forEach((section) => {
			const sectionTop = section.offsetTop - 100;
			if (pageYOffset >= sectionTop) {
				current = section.getAttribute("id");
			}
		});

		navItems.forEach((item) => {
			item.classList.remove("active");
			if (item.getAttribute("href") === `#${current}`) {
				item.classList.add("active");
			}
		});
	});
});
