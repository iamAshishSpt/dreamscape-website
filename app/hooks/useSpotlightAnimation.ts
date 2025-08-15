import { useCallback, useEffect, useRef, useState } from "react";
import { runSpotlightAnimation } from "../components/spotlightAnimation";

interface SpotlightRefs {
	spotlight: React.RefObject<HTMLDivElement | null>;
	titlesContainer: React.RefObject<HTMLDivElement | null>;
	imagesContainer: React.RefObject<HTMLDivElement | null>;
	spotlightHeader: React.RefObject<HTMLDivElement | null>;
	titlesContainerElements: React.RefObject<HTMLDivElement | null>;
	introTextElements: React.RefObject<HTMLDivElement | null>;
	spotlightBgImg: React.RefObject<HTMLDivElement | null>;
}

interface SpotlightState {
	isAnimating: boolean;
	currentIndex: number;
	progress: number;
}

/**
 * Custom hook for managing GSAP spotlight animations
 *
 * @example
 * ```tsx
 * function SpotlightPage() {
 *   const { refs, spotlightState, areRefsReady } = useSpotlightAnimation();
 *
 *   return (
 *     <div ref={refs.spotlight}>
 *       <div ref={refs.titlesContainer}></div>
 *       <div ref={refs.imagesContainer}></div>
 *       <div ref={refs.spotlightHeader}></div>
 *     </div>
 *   );
 * }
 * ```
 *
 * @returns {Object} Object containing refs, spotlight state, and utility functions
 * @returns {SpotlightRefs} refs - React refs for DOM elements
 * @returns {SpotlightState} spotlightState - Current spotlight state
 * @returns {Function} areRefsReady - Function to check if all refs are available
 */
export function useSpotlightAnimation() {
	// Refs for DOM elements - must be called at top level
	const spotlightRef = useRef<HTMLDivElement>(null);
	const titlesContainerRef = useRef<HTMLDivElement>(null);
	const imagesContainerRef = useRef<HTMLDivElement>(null);
	const spotlightHeaderRef = useRef<HTMLDivElement>(null);
	const titlesContainerElementsRef = useRef<HTMLDivElement>(null);
	const introTextElementsRef = useRef<HTMLDivElement>(null);
	const spotlightBgImgRef = useRef<HTMLDivElement>(null);

	// Create refs object
	const refs: SpotlightRefs = {
		spotlight: spotlightRef,
		titlesContainer: titlesContainerRef,
		imagesContainer: imagesContainerRef,
		spotlightHeader: spotlightHeaderRef,
		titlesContainerElements: titlesContainerElementsRef,
		introTextElements: introTextElementsRef,
		spotlightBgImg: spotlightBgImgRef,
	};

	// Spotlight state
	const [spotlightState, setSpotlightState] = useState<SpotlightState>({
		isAnimating: false,
		currentIndex: 0,
		progress: 0,
	});

	// Check if all refs are available
	const areRefsReady = useCallback(() => {
		return (
			spotlightRef.current &&
			titlesContainerRef.current &&
			imagesContainerRef.current &&
			spotlightHeaderRef.current &&
			titlesContainerElementsRef.current &&
			introTextElementsRef.current &&
			spotlightBgImgRef.current
		);
	}, []);

	// Initialize animations
	useEffect(() => {
		if (!areRefsReady()) return;

		const cleanup = runSpotlightAnimation(
			{
				spotlight: spotlightRef.current ?? document.createElement("div"),
				titlesContainer:
					titlesContainerRef.current ?? document.createElement("div"),
				imagesContainer:
					imagesContainerRef.current ?? document.createElement("div"),
				spotlightHeader:
					spotlightHeaderRef.current ?? document.createElement("div"),
				titlesContainerElements:
					titlesContainerElementsRef.current ?? document.createElement("div"),
				introTextElements:
					introTextElementsRef.current ?? document.createElement("div"),
				spotlightBgImg:
					spotlightBgImgRef.current ?? document.createElement("div"),
			},
			setSpotlightState,
		);

		return () => {
			if (typeof cleanup === "function") cleanup();
		};
	}, [areRefsReady]);

	// Expose refs and state
	return {
		refs,
		spotlightState,
		areRefsReady,
	};
}
