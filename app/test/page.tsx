"use client";

import { AnimatePresence, motion, useAnimationControls } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

// The source of truth for our images
const images = [
	"/images/everest.jpg",
	"/images/annapurna.jpg",
	"/images/manaslu.jpg",
	"/images/machhapuchhre.jpg",
	"/images/everest.jpg",
	"/images/annapurna.jpg",
	"/images/manaslu.jpg",
	"/images/machhapuchhre.jpg",
];

// Create a very long "infinite" tape of images for a seamless loop.
const displayImages = [...images, ...images, ...images, ...images, ...images];

const IMAGE_WIDTH_PX = 128;
const GAP_PX = 16;
const SLIDE_WIDTH_PX = IMAGE_WIDTH_PX + GAP_PX;
const ANIMATION_DURATION_S = 1.2;

export default function Home() {
	const controls = useAnimationControls();
	const [currentIndex, setCurrentIndex] = useState(0);

	// --- State Management ---
	const [backgroundUrl, setBackgroundUrl] = useState(images[0]);
	const [animatingImage, setAnimatingImage] = useState<{
		id: string;
		src: string;
		direction: "next" | "prev";
	} | null>(null);
	const [hiddenImageSrc, setHiddenImageSrc] = useState<string | null>(null);
	const [sliderMoving, setSliderMoving] = useState(false);
	// This ref is the new, robust lock to prevent animation overlaps.
	const isAnimating = useRef(false);

	// --- Animation Handlers ---
	const handleNext = useCallback(() => {
		console.log("handleNext called");
		// Check the lock. If an animation is in progress, do nothing.
		// if (isAnimating.current) {
		//   console.log('Animation in progress, skipping');
		//   return;
		// }
		// Immediately engage the lock.
		isAnimating.current = true;
		console.log("Animation lock engaged");

		// Animate the first image in the current slider view (before moving)
		const imageToAnimateSrc = displayImages[currentIndex];
		const uniqueAnimationId = `expanding-${imageToAnimateSrc}`;
		console.log(
			"Setting animating image:",
			uniqueAnimationId,
			"for image:",
			imageToAnimateSrc,
		);

		// Set the image to be hidden
		setHiddenImageSrc(imageToAnimateSrc);

		// Start the expanding animation after a longer delay to let the fade complete
		setTimeout(() => {
			setAnimatingImage({
				id: uniqueAnimationId,
				src: imageToAnimateSrc,
				direction: "next",
			});

			// Move slider after a short delay to let the expanding animation start
			setTimeout(() => {
				setSliderMoving(true);
				setCurrentIndex((prevIndex) => {
					const nextIndex = (prevIndex + 1) % displayImages.length;
					console.log("Moving to next index:", nextIndex);
					return nextIndex;
				});
			}, 100); // Short delay to let expanding animation start
		}, 200); // Longer delay to ensure fade is complete
	}, [currentIndex]); // Include currentIndex in dependencies

	const handlePrev = () => {
		console.log("handlePrev called");
		// Also check the lock for the "previous" button.
		// if (isAnimating.current) {
		//   console.log('Animation in progress, skipping');
		//   return;
		// }
		isAnimating.current = true;
		console.log("Animation lock engaged");

		// For previous, we need to animate the current image before moving
		const imageToAnimateSrc = displayImages[currentIndex];
		const uniqueAnimationId = `expanding-${imageToAnimateSrc}`;
		console.log(
			"Setting animating image:",
			uniqueAnimationId,
			"for image:",
			imageToAnimateSrc,
		);

		// Set the image to be hidden
		setHiddenImageSrc(imageToAnimateSrc);

		// Start the expanding animation after a longer delay to let the fade complete
		setTimeout(() => {
			setAnimatingImage({
				id: uniqueAnimationId,
				src: imageToAnimateSrc,
				direction: "prev",
			});

			// Move slider after a short delay to let the expanding animation start
			setTimeout(() => {
				setSliderMoving(true);
				setCurrentIndex((prevIndex) => {
					const nextIndex =
						(prevIndex - 1 + displayImages.length) % displayImages.length;
					console.log("Moving to next index:", nextIndex);
					return nextIndex;
				});
			}, 100); // Short delay to let expanding animation start
		}, 200); // Longer delay to ensure fade is complete
	};

	// --- Effects ---
	// The timer is now simple and reliable. It calls the stable handleNext function.
	useEffect(() => {
		const timer = setInterval(() => {
			if (!isAnimating.current) {
				handleNext();
			}
		}, 5000);
		return () => clearInterval(timer);
	}, [handleNext]); // handleNext is stable, so this effect runs only once.

	// This effect handles the physical movement of the slider.
	useEffect(() => {
		controls.start({
			x: -currentIndex * SLIDE_WIDTH_PX,
			transition: { duration: ANIMATION_DURATION_S, ease: "easeInOut" },
		});
	}, [currentIndex, controls]);

	// Debug effect to monitor animatingImage state
	useEffect(() => {
		console.log("animatingImage state changed:", animatingImage);
	}, [animatingImage]);

	return (
		<div className="min-h-screen relative overflow-hidden">
			{/* --- STABLE BACKGROUND --- */}
			<div
				className="fixed inset-0 z-0 bg-cover bg-center"
				style={{ backgroundImage: `url(${backgroundUrl})` }}
			>
				{/* <div className="absolute inset-0 bg-black/40"></div> */}
			</div>

			{/* --- ANIMATING OVERLAY (The Expanding Image) --- */}
			<AnimatePresence>
				{animatingImage && (
					<motion.div
						key={animatingImage.id}
						className="fixed z-20"
						initial={{
							width: "128px",
							height: "128px",
							left: "calc(100vw - 496px - 8px)",
							top: "calc(100vh - 40px - 128px)",
							borderRadius: "8px",
							scale: 1,
						}}
						animate={{
							width: "100vw",
							height: "100vh",
							left: "0px",
							top: "0px",
							borderRadius: "0px",
							scale: 1,
						}}
						onAnimationStart={() => {
							console.log("Animation started for:", animatingImage.id);
						}}
						onAnimationComplete={() => {
							console.log("Animation completed");
							setBackgroundUrl(animatingImage.src);

							// Clear the hidden image state and animating image after slider movement
							setTimeout(() => {
								setHiddenImageSrc(null);
								setAnimatingImage(null);
								setSliderMoving(false);

								// CRUCIAL: Release the lock once the animation is done.
								isAnimating.current = false;
								console.log("Animation lock released");
							}, ANIMATION_DURATION_S * 1000); // Wait for slider movement to complete
						}}
						transition={{
							duration: ANIMATION_DURATION_S,
							ease: [0.43, 0.13, 0.23, 0.96],
						}}
					>
						<img
							src={animatingImage.src}
							className="w-full h-full object-cover"
							alt=""
						/>
					</motion.div>
				)}
			</AnimatePresence>

			{/* --- SLIDER --- */}
			<div className="fixed bottom-8 right-0 z-50">
				<div className="w-[496px] h-32 rounded-2xl overflow-hidden">
					<motion.div
						className="flex h-full gap-4"
						animate={controls}
						initial={{ x: 0 }}
					>
						{displayImages.map((imageSrc, index) => {
							// Only the first visible image gets a fade effect during animation
							const isFirstVisible = index === currentIndex;
							const shouldHide =
								(hiddenImageSrc === imageSrc && isFirstVisible) ||
								(sliderMoving && hiddenImageSrc === imageSrc);
							return (
								<motion.div
									key={`${imageSrc}-${index}`}
									className="w-32 h-full flex-shrink-0 rounded-lg overflow-hidden"
									animate={{
										opacity: shouldHide ? 0 : 1,
									}}
									transition={{ duration: 0.3 }} // Smooth fade
								>
									<img
										src={imageSrc}
										alt=""
										className="w-full h-full object-cover"
									/>
								</motion.div>
							);
						})}
					</motion.div>
				</div>

				{/* --- CONTROLS --- */}
				<div className="flex items-center gap-4 mt-4 w-[496px]">
					<button
						onClick={handlePrev}
						className="w-8 h-8 rounded-full border border-white/50 text-white/50 flex items-center justify-center hover:bg-white/10 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
					>
						&lt;
					</button>
					<button
						onClick={handleNext}
						className="w-8 h-8 rounded-full border border-white/50 text-white/50 flex items-center justify-center hover:bg-white/10 transition-colors disabled:opacity-50 flex-shrink-0"
					>
						&gt;
					</button>
					<div className="w-full h-0.5 bg-white/20 rounded-full overflow-hidden">
						<motion.div
							key={currentIndex}
							className="h-full bg-white"
							initial={{ width: "0%" }}
							animate={{ width: "100%" }}
							transition={{ duration: 5, ease: "linear" }}
						/>
					</div>
					<div className="relative h-8 w-10 overflow-hidden flex-shrink-0">
						<AnimatePresence>
							<motion.span
								key={currentIndex % images.length}
								className="absolute inset-0 flex items-center justify-center font-jersey text-2xl text-white"
								initial={{ y: "100%" }}
								animate={{ y: "0%" }}
								exit={{ y: "-100%" }}
								transition={{ duration: 0.5, ease: "easeInOut" }}
							>
								{((currentIndex % images.length) + 1)
									.toString()
									.padStart(2, "0")}
							</motion.span>
						</AnimatePresence>
					</div>
				</div>
			</div>
		</div>
	);
}
