import gsap from "gsap";

interface MenuAnimationElements {
	container: HTMLElement;
	menuToggle: HTMLElement;
	menuOverlay: HTMLElement;
	menuContent: HTMLElement;
	menuPreviewImg: HTMLElement;
}

/**
 * Wire up GSAP menu animation on a page that renders the required DOM.
 * Call this from a client component's useEffect with refs.
 */
export function runMenuAnimation(elements: MenuAnimationElements) {
	const { container, menuToggle, menuOverlay, menuContent, menuPreviewImg } =
		elements;
	const menuLinks = menuContent.querySelectorAll<HTMLAnchorElement>(".link a");

	let isOpen = false;
	let isAnimating = false;

	// Performance optimizations
	const elementsToOptimize = [container, menuContent, menuOverlay];
	elementsToOptimize.forEach((el) => el.classList.add("will-change-transform"));

	// Initial state setup
	const initialState = {
		menuLinks: { y: "120%", opacity: 0.25 },
		menuContent: { x: -100, y: -100, scale: 1.5, rotation: -15, opacity: 0.25 },
		menuOverlay: { clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)" },
		container: { x: 0, y: 0, rotation: 0, scale: 1 },
	};

	// Set initial states
	gsap.set([".link a", ".social a"], initialState.menuLinks);
	gsap.set(menuContent, initialState.menuContent);
	gsap.set(menuOverlay, initialState.menuOverlay);
	gsap.set(container, initialState.container);

	// Set initial state for menu toggle texts
	const open = menuToggle.querySelector<HTMLElement>("div#menu-open");
	const close = menuToggle.querySelector<HTMLElement>("div#menu-close");
	if (open && close) {
		gsap.set(open, { opacity: 1, x: 0, y: 0, rotation: 0 });
		gsap.set(close, { opacity: 0, x: 0, y: 0, rotation: 0 });
	}

	// ---- Event handlers we'll need to remove on cleanup ----
	const linkEnterHandlers: Array<[HTMLAnchorElement, (e: Event) => void]> = [];

	const onToggleClick = () => {
		if (!isOpen) openMenu();
		else closeMenu();
	};

	menuToggle.addEventListener("click", onToggleClick);

	// ---- Helper Functions ----
	function cleanUpPreviewImages() {
		if (!menuPreviewImg) return;
		// Keep only the last 3 images
		while (menuPreviewImg.children.length > 3) {
			menuPreviewImg.removeChild(menuPreviewImg.firstElementChild!);
		}
	}

	function resetPreviewImage() {
		if (!menuPreviewImg) return;
		menuPreviewImg.innerHTML = "";
		const defaultPreviewImage = document.createElement("img");
		defaultPreviewImage.src = "/images/everest-footer.jpg";
		defaultPreviewImage.alt = "Preview";
		defaultPreviewImage.className =
			"absolute w-full h-full object-cover will-change-transform";

		// Set initial state to prevent pop-in
		gsap.set(defaultPreviewImage, {
			opacity: 0,
			scale: 1.1,
		});

		menuPreviewImg.appendChild(defaultPreviewImage);

		// Animate in smoothly
		gsap.to(defaultPreviewImage, {
			opacity: 1,
			scale: 1,
			duration: 0.5,
			ease: "power2.out",
		});
	}

	function animateMenuToggle(isOpening: boolean) {
		const open = menuToggle.querySelector<HTMLElement>("p#menu-open");
		const close = menuToggle.querySelector<HTMLElement>("p#menu-close");
		if (!open || !close) return;

		const toggleTimeline = gsap.timeline();

		if (isOpening) {
			// Hide "Menu" text
			toggleTimeline.to(
				open,
				{
					x: -5,
					y: -10,
					rotate: -5,
					opacity: 0,
					duration: 0.5,
					ease: "power2.out",
				},
				0.25,
			);

			// Show "Close" text
			toggleTimeline.to(
				close,
				{
					x: 0,
					y: 0,
					rotation: 0,
					opacity: 1,
					duration: 0.5,
					ease: "power2.out",
				},
				0.25,
			);
		} else {
			// Hide "Close" text
			toggleTimeline.to(
				close,
				{
					x: 5,
					y: 10,
					rotate: 5,
					opacity: 0,
					duration: 0.5,
					ease: "power2.out",
				},
				0.25,
			);

			// Show "Menu" text
			toggleTimeline.to(
				open,
				{
					x: 0,
					y: 0,
					rotation: 0,
					opacity: 1,
					duration: 0.5,
					ease: "power2.out",
				},
				0.5,
			);
		}
	}

	// ---- Main Animation Functions ----
	function openMenu() {
		if (isAnimating || isOpen) return;
		isAnimating = true;

		// Create main timeline for coordinated animations
		const openTimeline = gsap.timeline({
			onComplete: () => {
				isOpen = true;
				isAnimating = false;
			},
		});

		// Animate container - slide down and scale slightly
		openTimeline.to(
			container,
			{
				x: 300,
				y: 450,
				rotation: 10,
				scale: 1.5,
				duration: 1.25,
				ease: "power4.inOut",
			},
			0,
		);

		// Animate menu toggle
		openTimeline.add(() => animateMenuToggle(true), 0.25);

		// Animate menu content - slide up from bottom
		openTimeline.to(
			menuContent,
			{
				rotation: 0,
				x: 0,
				y: 0,
				scale: 1,
				opacity: 1,
				duration: 1.25,
				ease: "power4.inOut",
			},
			0,
		);

		// Animate menu overlay
		openTimeline.to(
			menuOverlay,
			{
				clipPath: "polygon(0% 0%, 100% 0%, 100% 175%, 0% 100%)",
				duration: 1.25,
				ease: "power4.inOut",
			},
			0,
		);

		// Animate menu links - slide down into view
		openTimeline.to(
			[".link a", ".social a"],
			{
				y: "0%",
				opacity: 1,
				duration: 1,
				ease: "power3.out",
				stagger: 0.1,
			},
			0.75,
		);
	}

	function closeMenu() {
		if (isAnimating || !isOpen) return;
		isAnimating = true;

		// Create main timeline for coordinated animations
		const closeTimeline = gsap.timeline({
			onComplete: () => {
				isOpen = false;
				isAnimating = false;
				resetPreviewImage();

				// Reset the initial state for menu links and social links to ensure animations work on next open
				gsap.set([".link a", ".social a"], initialState.menuLinks);
			},
		});

		// Start closing sequence - animate links sliding back up first (reverse stagger)
		closeTimeline.to(
			container,
			{
				rotation: 0,
				x: 0,
				y: 0,
				scale: 1,
				duration: 1.25,
				ease: "power4.inOut",
			},
			0,
		);

		// Animate menu toggle (starts early like opening)
		closeTimeline.add(() => animateMenuToggle(false), 0.25);

		// Animate menu content and container simultaneously (same timing as opening)
		closeTimeline.to(
			menuContent,
			{
				rotation: -15,
				x: -100,
				y: -100,
				scale: 1.5,
				opacity: 0.25,
				duration: 1.25,
				ease: "power4.inOut",
			},
			0,
		);

		// Animate menu overlay (same timing as opening)
		closeTimeline.to(
			menuOverlay,
			{
				clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
				duration: 1.25,
				ease: "power4.inOut",
			},
			0,
		);
	}

	// --------- Hover preview on links (use mouseenter) ----------
	menuLinks.forEach((link) => {
		const handler = () => {
			if (!isOpen || isAnimating || !menuPreviewImg) return;

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
			img.className =
				"absolute w-full h-full object-cover will-change-transform";

			gsap.set(img, {
				opacity: 0,
				scale: 1.25,
				rotate: 10,
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
