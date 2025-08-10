import gsap from "gsap";

/**
 * Wire up GSAP menu animation on a page that renders the required DOM.
 * Call this from a client component's useEffect.
 */
export function runMenuAnimation() {
	const container = document.querySelector<HTMLElement>(".container");
	const menuToggle = document.querySelector<HTMLElement>(".menu-toggle");
	const menuOverlay = document.querySelector<HTMLElement>(".menu-overlay");
	const menuContent = document.querySelector<HTMLElement>(".menu-content");
	const menuLinks = document.querySelectorAll<HTMLAnchorElement>(".link a");
	const menuPreviewImg =
		document.querySelector<HTMLElement>(".menu-preview-img");

	let isOpen = false;
	let isAnimating = false;

	if (
		!container ||
		!menuToggle ||
		!menuOverlay ||
		!menuContent ||
		!menuPreviewImg
	) {
		// Required nodes are missing; bail out quietly
		return;
	}

	// Helpful perf hint for elements that animate
	container.classList.add("will-change-transform");
	menuContent.classList.add("will-change-transform");
	menuOverlay.classList.add("will-change-transform");

	// Set initial state for menu toggle texts
	const open = document.querySelector<HTMLElement>("p#menu-open");
	const close = document.querySelector<HTMLElement>("p#menu-close");
	if (open && close) {
		gsap.set(open, { opacity: 1, x: 0, y: 0, rotation: 0 });
		gsap.set(close, { opacity: 0, x: 0, y: 0, rotation: 0 });
	}

	// ---- Event handlers we’ll need to remove on cleanup ----
	const linkEnterHandlers: Array<[HTMLAnchorElement, (e: Event) => void]> = [];

	const onToggleClick = () => {
		if (!isOpen) openMenu();
		else closeMenu();
	};

	menuToggle.addEventListener("click", onToggleClick);

	function cleanUpPreviewImages() {
		// Keep only the last 3 images
		while (menuPreviewImg.children.length > 3) {
			menuPreviewImg.removeChild(menuPreviewImg.firstElementChild!);
		}
	}

	function resetPreviewImage() {
		menuPreviewImg.innerHTML = "";
		const defaultPreviewImage = document.createElement("img");
		defaultPreviewImage.src = "/images/everest.jpg";
		defaultPreviewImage.alt = "Preview";
		menuPreviewImg.appendChild(defaultPreviewImage);
	}

	function animateMenuToggle(isOpening: boolean) {
		const open = document.querySelector<HTMLElement>("p#menu-open");
		const close = document.querySelector<HTMLElement>("p#menu-close");
		if (!open || !close) return;

		if (isOpening) {
			// Hide "Menu" text
			gsap.to(open, {
				x: -5,
				y: -10,
				rotate: -5,
				opacity: 0,
				delay: 0.25,
				duration: 0.5,
				ease: "power2.out",
			});

			// Show "Close" text
			gsap.to(close, {
				x: 0,
				y: 0,
				rotation: 0,
				opacity: 1,
				duration: 0.5,
				ease: "power2.out",
				delay: 0.25,
			});
		} else {
			// Hide "Close" text
			gsap.to(close, {
				x: 5,
				y: 10,
				rotate: 5,
				opacity: 0,
				delay: 0.25,
				duration: 0.5,
				ease: "power2.out",
			});

			// Show "Menu" text
			gsap.to(open, {
				x: 0,
				y: 0,
				rotation: 0,
				opacity: 1,
				duration: 0.5,
				ease: "power2.out",
				delay: 0.5,
			});
		}
	}

	function openMenu() {
		if (isAnimating || isOpen) return;
		isAnimating = true;

		gsap.to(container, {
			rotation: 10,
			x: 300,
			y: 450,
			scale: 1.5,
			duration: 1.25,
			ease: "power4.inOut",
		});

		animateMenuToggle(true);

		gsap.to(menuContent, {
			rotation: 0,
			x: 0,
			y: 0,
			scale: 1,
			opacity: 1,
			duration: 1.25,
			ease: "power4.inOut",
		});

		gsap.to([".link a", ".social a"], {
			y: "0%",
			opacity: 1,
			duration: 1,
			delay: 0.75,
			ease: "power3.out",
			stagger: 0.1,
		});

		gsap.to(menuOverlay, {
			clipPath: "polygon(0% 0%, 100% 0%, 100% 175%, 0% 100%)",
			duration: 1.25,
			ease: "power4.inOut",
			onComplete: () => {
				isOpen = true;
				isAnimating = false;
			},
		});
	}

	function closeMenu() {
		if (isAnimating || !isOpen) return;
		isAnimating = true;

		gsap.to(container, {
			rotation: 0,
			x: 0,
			y: 0,
			scale: 1,
			duration: 1.25,
			ease: "power4.inOut",
		});

		animateMenuToggle(false);

		gsap.to(menuContent, {
			rotation: -15,
			x: -100,
			y: -100,
			scale: 1.5,
			opacity: 0.25,
			duration: 1.25,
			ease: "power4.inOut",
		});

		gsap.to(menuOverlay, {
			clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
			duration: 1.25,
			ease: "power4.inOut",
			onComplete: () => {
				isOpen = false;
				isAnimating = false;
				gsap.set([".link a", ".social a"], { y: "120%" });
				resetPreviewImage();
			},
		});
	}

	// --------- Hover preview on links (use mouseenter) ----------
	menuLinks.forEach((link) => {
		const handler = () => {
			if (!isOpen || isAnimating) return;

			const imgSrc = link.dataset.img || link.getAttribute("data-img");
			if (!imgSrc) return;

			const last = menuPreviewImg.querySelector(
				"img:last-of-type",
			) as HTMLImageElement | null;
			if (last) {
				// Compare path only to avoid absolute vs relative mismatch
				const lastPath = new URL(last.src, window.location.href).pathname;
				if (lastPath.endsWith(imgSrc)) return;
			}

			const img = new Image();
			img.src = imgSrc;
			img.alt = "Preview";

			gsap.set(img, {
				opacity: 0,
				scale: 1.25,
				rotate: 10,
				// Tailwind 3.4+: or add class "will-change-transform"
				// Using style here to avoid needing Tailwind; comment out if you prefer class
				willChange: "transform, opacity" as any,
			});

			menuPreviewImg.appendChild(img);
			cleanUpPreviewImages();

			gsap.to(img, {
				opacity: 1,
				scale: 1,
				rotate: 0,
				duration: 0.75,
				ease: "power2.inOut",
			});
		};

		link.addEventListener("mouseenter", handler);
		linkEnterHandlers.push([link, handler]);
	});

	// --------- Return a cleanup function (use in useEffect cleanup) ----------
	return () => {
		menuToggle.removeEventListener("click", onToggleClick);
		linkEnterHandlers.forEach(([el, fn]) =>
			el.removeEventListener("mouseenter", fn),
		);
		// kill any in-flight tweens on these nodes
		gsap.killTweensOf([
			container,
			menuContent,
			menuOverlay,
			".link a",
			".social a",
		]);
	};
}
