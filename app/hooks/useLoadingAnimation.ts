import { useCallback, useEffect, useRef, useState } from "react";
import { runLoadingAnimation } from "../components/loadingAnimation";

interface LoadingRefs {
	loadingScreen: React.RefObject<HTMLDivElement | null>;
	loader: React.RefObject<HTMLDivElement | null>;
	loader1: React.RefObject<HTMLDivElement | null>;
	loader2: React.RefObject<HTMLDivElement | null>;
	counter1: React.RefObject<HTMLDivElement | null>;
	counter2: React.RefObject<HTMLDivElement | null>;
	counter3: React.RefObject<HTMLDivElement | null>;
	websiteContent: React.RefObject<HTMLDivElement | null>;
	header: React.RefObject<HTMLDivElement | null>;
	countersWrap: React.RefObject<HTMLDivElement | null>;
}

interface LoadingState {
	isLoading: boolean;
	isComplete: boolean;
	progress: number;
	error?: string;
}

/**
 * Custom hook for managing GSAP loading animations
 *
 * @example
 * ```tsx
 * function LoadingScreen() {
 *   const { refs, loadingState, areRefsReady } = useLoadingAnimation();
 *
 *   return (
 *     <div ref={refs.loadingScreen}>
 *       <div ref={refs.loader}>
 *         <div ref={refs.loader1}></div>
 *         <div ref={refs.loader2}></div>
 *       </div>
 *       <div ref={refs.counter1}></div>
 *       <div ref={refs.counter2}></div>
 *       <div ref={refs.counter3}></div>
 *     </div>
 *   );
 * }
 * ```
 *
 * @returns {Object} Object containing refs, loading state, and utility functions
 * @returns {LoadingRefs} refs - React refs for DOM elements
 * @returns {LoadingState} loadingState - Current loading state
 * @returns {Function} areRefsReady - Function to check if all refs are available
 */
export function useLoadingAnimation() {
	// Refs for DOM elements - must be called at top level
	const loadingScreenRef = useRef<HTMLDivElement>(null);
	const loaderRef = useRef<HTMLDivElement>(null);
	const loader1Ref = useRef<HTMLDivElement>(null);
	const loader2Ref = useRef<HTMLDivElement>(null);
	const counter1Ref = useRef<HTMLDivElement>(null);
	const counter2Ref = useRef<HTMLDivElement>(null);
	const counter3Ref = useRef<HTMLDivElement>(null);
	const websiteContentRef = useRef<HTMLDivElement>(null);
	const headerRef = useRef<HTMLDivElement>(null);
	const countersWrapRef = useRef<HTMLDivElement>(null);

	// Create refs object
	const refs: LoadingRefs = {
		loadingScreen: loadingScreenRef,
		loader: loaderRef,
		loader1: loader1Ref,
		loader2: loader2Ref,
		counter1: counter1Ref,
		counter2: counter2Ref,
		counter3: counter3Ref,
		websiteContent: websiteContentRef,
		header: headerRef,
		countersWrap: countersWrapRef,
	};

	// Loading state
	const [loadingState, setLoadingState] = useState<LoadingState>({
		isLoading: true,
		isComplete: false,
		progress: 0,
	});

	// Check if all refs are available
	const areRefsReady = useCallback(() => {
		return (
			loadingScreenRef.current &&
			loaderRef.current &&
			loader1Ref.current &&
			loader2Ref.current &&
			counter1Ref.current &&
			counter2Ref.current &&
			counter3Ref.current &&
			websiteContentRef.current &&
			headerRef.current &&
			countersWrapRef.current
		);
	}, []);

	// Initialize animations
	useEffect(() => {
		if (!areRefsReady()) return;

		try {
			const cleanup = runLoadingAnimation(
				{
					loadingScreen: loadingScreenRef.current!,
					loader: loaderRef.current!,
					loader1: loader1Ref.current!,
					loader2: loader2Ref.current!,
					counter1: counter1Ref.current!,
					counter2: counter2Ref.current!,
					counter3: counter3Ref.current!,
					websiteContent: websiteContentRef.current!,
					header: headerRef.current!,
					countersWrap: countersWrapRef.current!,
				},
				setLoadingState,
			);

			return () => {
				if (typeof cleanup === "function") cleanup();
			};
		} catch (error) {
			console.error("Error initializing loading animation:", error);
			setLoadingState((prev) => ({
				...prev,
				error:
					error instanceof Error ? error.message : "Unknown error occurred",
			}));
		}
	}, [areRefsReady]);

	// Expose refs and state
	return {
		refs,
		loadingState,
		areRefsReady,
	};
}
