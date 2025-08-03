"use client";
import { AnimatePresence, motion, useAnimationControls } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import Navbar from "./components/NavBar";
import { useSliderImages } from "./hooks/useSliderImages";

const IMAGE_WIDTH_PX = 128;
const GAP_PX = 16;
const SLIDE_WIDTH_PX = IMAGE_WIDTH_PX + GAP_PX;
const ANIMATION_DURATION_S = 1.2;
const titleContainerVariants = {
	initial: {},
	animate: {
		transition: {
			staggerChildren: 0.12,
		},
	},
};
const titleWordVariants = {
	initial: { y: 60, opacity: 0 },
	animate: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};
const subheadingVariants = {
	initial: { y: 30, opacity: 0 },
	animate: { y: 0, opacity: 1, transition: { duration: 0.4, delay: 0.3 } },
};

export default function Home() {
	const { data, isLoading } = useSliderImages();
	const displayImages = data?.map((item) => item.imageUrl) ?? [];

	const imageMeta = (data ?? []).map((item) => ({
		src: item.imageUrl,
		title: item.title,
		location: item.location,
		subheading: item.subheading,
		button: "Book Now",
	}));
	const controls = useAnimationControls();
	const [currentIndex, setCurrentIndex] = useState(1);

	// --- State Management ---
	const [backgroundUrl, setBackgroundUrl] = useState<string | null>(null);
	const [animatingImage, setAnimatingImage] = useState<{
		id: string;
		src: string;
		direction: "next" | "prev";
	} | null>(null);
	const [hiddenImageSrc, setHiddenImageSrc] = useState<string | null>(null);
	const [sliderMoving, setSliderMoving] = useState(false);
	// This ref is the new, robust lock to prevent animation overlaps.
	const isAnimating = useRef(false);
	// Control text animation visibility
	const [textVisible, setTextVisible] = useState(true);

	// Helper to get meta for current background
	const currentMeta = imageMeta.find((meta) =>
		backgroundUrl?.includes(meta.src.split("/").pop() ?? ""),
	);

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
			}, 10); // Short delay to let expanding animation start
		}, 20); // Longer delay to ensure fade is complete
	}, [displayImages, currentIndex]); // Include currentIndex in dependencies

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
			}, 10); // Short delay to let expanding animation start
		}, 20); // Longer delay to ensure fade is complete
	};
	useEffect(() => {
		if (!backgroundUrl && data?.length) {
			setBackgroundUrl(data[0].imageUrl);
		}
	}, [data, backgroundUrl]);
	// --- Effects ---
	// Preload only the 4 currently visible slider images
	useEffect(() => {
		const preloadVisibleImages = () => {
			for (let i = 0; i < 4; i++) {
				const nextIndex = (currentIndex + i) % displayImages.length;
				const src = displayImages[nextIndex];

				const img = new window.Image();
				img.src = src;
				img.loading = "eager";
			}
		};

		preloadVisibleImages();
	}, [currentIndex, displayImages]);

	// Debug effect to monitor backgroundUrl changes
	useEffect(() => {
		console.log("Page: backgroundUrl changed to:", backgroundUrl);
	}, [backgroundUrl]);

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
	if (isLoading) {
		return <div>Loading...</div>;
	}

	return (
		<div className="min-h-screen relative overflow-hidden">
			{/* NavBar with dynamic background */}
			<Navbar backgroundImageUrl={backgroundUrl} />

			{/* --- STABLE BACKGROUND --- */}
			<div
				className="fixed inset-0 z-0 bg-cover bg-center"
				style={{ backgroundImage: `url(${backgroundUrl})` }}
			>
				{/* Title & Subheading Overlay - styled and animated */}
				<div className="absolute left-0 top-0 h-full flex items-center z-10">
					<div className="ml-16 p-10 text-white" style={{ minWidth: 380 }}>
						<AnimatePresence>
							{textVisible && (
								<motion.div
									key={backgroundUrl}
									initial={{ opacity: 0, y: 40 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.4, ease: [0.43, 0.13, 0.23, 0.96] }}
								>
									<div className="mb-2">
										<div className="h-1 w-8 bg-white/60 rounded mb-4" />
										<span className="uppercase tracking-widest text-base font-geist-sans text-white/80">
											{currentMeta?.location}
										</span>
									</div>
									<motion.div
										className="mb-4"
										variants={titleContainerVariants}
										initial="initial"
										animate="animate"
										key={currentMeta?.title}
									>
										{currentMeta?.title.split(" ").map((word, idx) => (
											<motion.span
												key={`${currentMeta.title}-word-${idx}`}
												className="block font-jersey text-6xl md:text-7xl font-bold leading-none uppercase drop-shadow-xl overflow-hidden"
												variants={titleWordVariants}
											>
												{word}
											</motion.span>
										))}
									</motion.div>
									<motion.p
										className="text-base md:text-lg font-geist-sans text-white/80 mb-6 max-w-xs"
										variants={subheadingVariants}
										initial="initial"
										animate="animate"
										key={currentMeta?.subheading}
									>
										{currentMeta?.subheading}
									</motion.p>
									<button
										type="button"
										className="flex items-center gap-2 px-6 py-2 rounded-full bg-white/10 border border-white/30 text-white/90 font-geist-sans uppercase tracking-wider text-sm hover:bg-white/20 transition"
									>
										<span className="inline-block w-6 h-6 bg-yellow-400 rounded-full items-center justify-center text-black font-bold mr-2">
											A
										</span>
										{currentMeta?.button}
									</button>
								</motion.div>
							)}
						</AnimatePresence>
					</div>
				</div>
				{/* <div className="absolute inset-0 bg-black/40"></div> */}
			</div>

			{/* --- ANIMATING OVERLAY (The Expanding Image) --- */}
			<AnimatePresence>
				{animatingImage?.src && (
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
							// Hide text before background changes
							setTextVisible(false);
						}}
						onAnimationComplete={() => {
							console.log("Animation completed");
							setBackgroundUrl(animatingImage.src);
							// Show text after background changes (with a small delay for smoothness)
							setTimeout(() => {
								setTextVisible(true);
								setHiddenImageSrc(null);
								setAnimatingImage(null);
								setSliderMoving(false);
								// CRUCIAL: Release the lock once the animation is done.
								isAnimating.current = false;
								console.log("Animation lock released");
							}, 0); // 50ms delay to ensure background visually updates first
						}}
						transition={{
							duration: ANIMATION_DURATION_S,
							ease: [0.43, 0.13, 0.23, 0.96],
						}}
					>
						<Image
							src={animatingImage.src}
							alt=""
							fill
							className="object-cover"
						/>
					</motion.div>
				)}
			</AnimatePresence>

			{/* --- SLIDER --- */}
			<div className="fixed bottom-8 right-0 z-50 hidden md:block">
				<div className="w-[432px] h-32 rounded-2xl overflow-hidden">
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

							// Calculate if this is the last visible image (4th image that's half showing)
							// The 4th image is at currentIndex + 3, but we need to check if it's actually the 4th visible
							const isLastVisible = index === currentIndex + 3;

							return (
								<motion.div
									key={imageSrc}
									className={`w-32 h-full flex-shrink-0 overflow-hidden relative ${
										isLastVisible ? "" : "rounded-lg"
									}`}
									animate={{
										opacity: shouldHide ? 0 : 1,
									}}
									transition={{ duration: 0.3 }} // Smooth fade
								>
									<Image src={imageSrc} alt="" fill className="object-cover" />
								</motion.div>
							);
						})}
					</motion.div>
				</div>

				{/* --- CONTROLS --- */}
				<div className="flex items-center gap-4 mt-4 w-[432px]">
					<button
						type="button"
						onClick={handlePrev}
						className="w-8 h-8 rounded-full border border-white/50 text-white/50 flex items-center justify-center hover:bg-white/10 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
					>
						&lt;
					</button>
					<button
						type="button"
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
								key={currentIndex % displayImages.length}
								className="absolute inset-0 flex items-center justify-center font-jersey text-2xl text-white"
								initial={{ y: "100%" }}
								animate={{ y: "0%" }}
								exit={{ y: "-100%" }}
								transition={{ duration: 0.5, ease: "easeInOut" }}
							>
								{((currentIndex % displayImages.length) + 1)
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
