import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

interface SpotlightElements {
	spotlight: HTMLDivElement;
	titlesContainer: HTMLDivElement;
	imagesContainer: HTMLDivElement;
	spotlightHeader: HTMLDivElement;
	titlesContainerElements: HTMLDivElement; // <- .spotlight-titles-container
	introTextElements: HTMLDivElement;
	spotlightBgImg: HTMLDivElement;
}

interface SpotlightState {
	isAnimating: boolean;
	currentIndex: number;
	progress: number;
}

type SetSpotlightState = React.Dispatch<React.SetStateAction<SpotlightState>>;

export function runSpotlightAnimation(
	elements: SpotlightElements,
	setSpotlightState: SetSpotlightState,
) {
	if (typeof window === "undefined") return;

	gsap.registerPlugin(ScrollTrigger);

	const config = { gap: 0.08, speed: 0.3, arcRadius: 500 };

	const spotlightItems = [
		{ name: "Annapurna", img: "/images/annapurna.jpg" },
		{ name: "Everest", img: "/images/everest.jpg" },
		{ name: "Machhapuchhre", img: "/images/machhapuchhre.jpg" },
		{ name: "Manaslu", img: "/images/manaslu.jpg" },
		{ name: "MT Everest", img: "/images/MTEVEREST.jpeg" },
	];

	let isInitialized = false;

	const lenis = new Lenis();
	const raf = (time: number) => lenis.raf(time * 1000);
	const onLenisScroll = () => ScrollTrigger.update();
	lenis.on("scroll", onLenisScroll);
	gsap.ticker.add(raf);
	gsap.ticker.lagSmoothing(0);

	const {
		spotlight: _spotlight,
		titlesContainer,
		imagesContainer,
		spotlightHeader,
		titlesContainerElements,
		introTextElements,
		spotlightBgImg,
	} = elements;

	/* 🔧 NEW: keep the clip-path exactly aligned to the diagonals
     Your CSS polygon uses 50svh as an X; this converts that to px and rebuilds
     the polygon so the hide boundary coincides with the visual line on all screens. */
	// const syncClipToLines = () => {
	// 	const h = window.innerHeight;
	// 	const w = window.innerWidth;
	// 	const x = h * 0.5; // 50svh expressed in px
	// 	const TUNE = -6; // nudge so text hides exactly ON the bottom line; tweak -8..-2 if needed
	// 	titlesContainerElements.style.clipPath = `polygon(${x}px 0px, 0px 50%, ${w}px ${h + x + TUNE}px, ${w}px ${-x + TUNE}px)`;
	// };
	// // run once now + on resize
	// syncClipToLines();
	// window.addEventListener("resize", syncClipToLines);

	// Build titles + images once
	if (
		!isInitialized &&
		titlesContainer.children.length === 0 &&
		imagesContainer.children.length === 0
	) {
		spotlightItems.forEach((item, index) => {
			const titleElement = document.createElement("h1");
			titleElement.textContent = item.name;
			if (index === 0) titleElement.style.opacity = "1";
			titlesContainer.appendChild(titleElement);

			const imgWrapper = document.createElement("div");
			imgWrapper.className = "spotlight-img";
			const imgElement = document.createElement("img");
			imgElement.src = item.img;
			imgElement.alt = "";
			imgWrapper.appendChild(imgElement);
			imagesContainer.appendChild(imgWrapper);
		});
		isInitialized = true;
	}

	const titleElements = titlesContainer.querySelectorAll("h1");
	const imageElements = imagesContainer.querySelectorAll(
		".spotlight-img",
	) as NodeListOf<HTMLDivElement>;
	let currentActiveIndex = 0;

	const containerWidth = window.innerWidth * 0.3;
	const containerHeight = window.innerHeight;
	const arcStartX = containerWidth - 220;
	const arcStartY = -200;
	const arcEndY = containerHeight + 200;
	const arcControlPointX = arcStartX + config.arcRadius;
	const arcControlPointY = containerHeight / 2;

	function getBezierPosition(t: number) {
		const x =
			(1 - t) * (1 - t) * arcStartX +
			2 * (1 - t) * t * arcControlPointX +
			t * t * arcStartX;
		const y =
			(1 - t) * (1 - t) * arcStartY +
			2 * (1 - t) * t * arcControlPointY +
			t * t * arcEndY;
		return { x, y };
	}

	function getImageProgressState(index: number, overallProgress: number) {
		const startTime = index * config.gap;
		const endTime = startTime + config.speed;
		if (overallProgress < startTime) return -1;
		if (overallProgress > endTime) return 2;
		return (overallProgress - startTime) / config.speed;
	}

	imageElements.forEach((img) => gsap.set(img, { opacity: 0 }));

	const st = ScrollTrigger.create({
		trigger: ".spotlight",
		start: "top top",
		end: `+=${window.innerHeight * 10}px`,
		pin: true,
		pinSpacing: true,
		scrub: 1,
		onUpdate: (self) => {
			const progress = self.progress;
			setSpotlightState((prev) => ({ ...prev, progress }));

			if (progress <= 0.2) {
				const animationProgress = progress / 0.2;
				const moveDistance = window.innerWidth * 0.6;

				gsap.set(introTextElements, { x: -animationProgress * moveDistance });
				gsap.set(introTextElements.nextElementSibling as HTMLElement, {
					x: animationProgress * moveDistance,
				});

				gsap.set(introTextElements, { opacity: 1 });
				gsap.set(introTextElements.nextElementSibling as HTMLElement, {
					opacity: 1,
				});

				gsap.set(spotlightBgImg, { transform: `scale(${animationProgress})` });
				gsap.set(spotlightBgImg.querySelector("img"), {
					transform: `scale(${1.5 - animationProgress * 0.5})`,
				});

				imageElements.forEach((img) => gsap.set(img, { opacity: 0 }));
				spotlightHeader.style.opacity = "0";

				gsap.set(titlesContainerElements, {
					"--before-opacity": "0",
					"--after-opacity": "0",
				} as CSSStyleDeclaration & {
					"--before-opacity": string;
					"--after-opacity": string;
				});
			} else if (progress > 0.2 && progress <= 0.25) {
				gsap.set(spotlightBgImg, { transform: "scale(1)" });
				gsap.set(spotlightBgImg.querySelector("img"), {
					transform: "scale(1)",
				});
				gsap.set(introTextElements, { opacity: 0 });
				gsap.set(introTextElements.nextElementSibling as HTMLElement, {
					opacity: 0,
				});

				imageElements.forEach((img) => gsap.set(img, { opacity: 0 }));
				spotlightHeader.style.opacity = "1";

				gsap.set(titlesContainerElements, {
					"--before-opacity": "1",
					"--after-opacity": "1",
				} as CSSStyleDeclaration & {
					"--before-opacity": string;
					"--after-opacity": string;
				});
			} else if (progress > 0.25 && progress < 0.95) {
				gsap.set(spotlightBgImg, { transform: "scale(1)" });
				gsap.set(spotlightBgImg.querySelector("img"), {
					transform: "scale(1)",
				});

				gsap.set(introTextElements, { opacity: 0 });
				gsap.set(introTextElements.nextElementSibling as HTMLElement, {
					opacity: 0,
				});

				spotlightHeader.style.opacity = "1";
				gsap.set(titlesContainerElements, {
					"--before-opacity": "1",
					"--after-opacity": "1",
				} as CSSStyleDeclaration & {
					"--before-opacity": string;
					"--after-opacity": string;
				});

				const switchProgress = (progress - 0.25) / 0.7;
				const viewportHeight = window.innerHeight;
				const titleContainerHeight = titlesContainer.scrollHeight;
				const startPosition = viewportHeight;
				const targetPosition = -titleContainerHeight;
				const totalDistance = startPosition - targetPosition;
				const currentY = startPosition - switchProgress * totalDistance;

				gsap.set(titlesContainer, { transform: `translateY(${currentY}px)` });

				imageElements.forEach((img, index) => {
					const imageProgress = getImageProgressState(index, switchProgress);
					if (imageProgress < 0 || imageProgress > 1) {
						gsap.set(img, { opacity: 0 });
					} else {
						const pos = getBezierPosition(imageProgress);
						gsap.set(img, { x: pos.x - 100, y: pos.y - 75, opacity: 1 });
					}
				});

				const viewportMiddle = viewportHeight / 2;
				let closestIndex = 0;
				let closestDistance = Infinity;

				titleElements.forEach((title, index) => {
					const titleRect = title.getBoundingClientRect();
					const titleCenter = titleRect.top + titleRect.height / 2;
					const distanceFromCenter = Math.abs(titleCenter - viewportMiddle);
					if (distanceFromCenter < closestDistance) {
						closestDistance = distanceFromCenter;
						closestIndex = index;
					}
				});

				if (closestIndex !== currentActiveIndex) {
					if (titleElements[currentActiveIndex]) {
						(titleElements[currentActiveIndex] as HTMLElement).style.opacity =
							"0.25";
					}
					(titleElements[closestIndex] as HTMLElement).style.opacity = "1";
					(spotlightBgImg.querySelector("img") as HTMLImageElement).src =
						spotlightItems[closestIndex].img;
					currentActiveIndex = closestIndex;
					setSpotlightState((prev) => ({
						...prev,
						currentIndex: closestIndex,
					}));
				}
			} else if (progress > 0.95) {
				spotlightHeader.style.opacity = "0";
				gsap.set(titlesContainerElements, {
					"--before-opacity": "0",
					"--after-opacity": "0",
				} as CSSStyleDeclaration & {
					"--before-opacity": string;
					"--after-opacity": string;
				});
			}
		},
	});

	// Cleanup
	return () => {
		// window.removeEventListener("resize", syncClipToLines); // 🔧 NEW
		st.kill();
		gsap.ticker.remove(raf);
		lenis.off("scroll", onLenisScroll);
		lenis.destroy();
	};
}
