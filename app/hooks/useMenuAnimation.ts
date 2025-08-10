import { useCallback, useEffect, useRef, useState } from "react";
import { runMenuAnimation } from "../components/menuAnimation";

interface MenuRefs {
	container: React.RefObject<HTMLDivElement | null>;
	menuToggle: React.RefObject<HTMLDivElement | null>;
	menuOverlay: React.RefObject<HTMLDivElement | null>;
	menuContent: React.RefObject<HTMLDivElement | null>;
	menuPreviewImg: React.RefObject<HTMLDivElement | null>;
}

interface MenuState {
	isOpen: boolean;
	isAnimating: boolean;
}

/**
 * Custom hook for managing GSAP menu animations
 *
 * @example
 * ```tsx
 * function MyComponent() {
 *   const { refs, menuState, areRefsReady } = useMenuAnimation();
 *
 *   return (
 *     <div ref={refs.container}>
 *       <button ref={refs.menuToggle}>Menu</button>
 *       <div ref={refs.menuOverlay}>
 *         <div ref={refs.menuContent}>
 *           <div ref={refs.menuPreviewImg}></div>
 *         </div>
 *       </div>
 *     </div>
 *   );
 * }
 * ```
 *
 * @returns {Object} Object containing refs, menu state, and utility functions
 * @returns {MenuRefs} refs - React refs for DOM elements
 * @returns {MenuState} menuState - Current menu state (isOpen, isAnimating)
 * @returns {Function} areRefsReady - Function to check if all refs are available
 */
export function useMenuAnimation() {
	// Refs for DOM elements - must be called at top level
	const containerRef = useRef<HTMLDivElement>(null);
	const menuToggleRef = useRef<HTMLDivElement>(null);
	const menuOverlayRef = useRef<HTMLDivElement>(null);
	const menuContentRef = useRef<HTMLDivElement>(null);
	const menuPreviewImgRef = useRef<HTMLDivElement>(null);

	// Create refs object
	const refs: MenuRefs = {
		container: containerRef,
		menuToggle: menuToggleRef,
		menuOverlay: menuOverlayRef,
		menuContent: menuContentRef,
		menuPreviewImg: menuPreviewImgRef,
	};

	// Menu state
	const [menuState, setMenuState] = useState<MenuState>({
		isOpen: false,
		isAnimating: false,
	});

	// Check if all refs are available
	const areRefsReady = useCallback(() => {
		return (
			containerRef.current &&
			menuToggleRef.current &&
			menuOverlayRef.current &&
			menuContentRef.current &&
			menuPreviewImgRef.current
		);
	}, []);

	// Initialize animations
	useEffect(() => {
		if (!areRefsReady()) return;

		const cleanup = runMenuAnimation({
			container: containerRef.current!,
			menuToggle: menuToggleRef.current!,
			menuOverlay: menuOverlayRef.current!,
			menuContent: menuContentRef.current!,
			menuPreviewImg: menuPreviewImgRef.current!,
		});

		return () => {
			if (typeof cleanup === "function") cleanup();
		};
	}, [areRefsReady]);

	// Expose refs and state
	return {
		refs,
		menuState,
		areRefsReady,
	};
}
