"use client";

import Image from "next/image";
import { useSpotlightAnimation } from "../hooks/useSpotlightAnimation";

export default function CheckPage() {
	const { refs, spotlightState: _spotlightState } = useSpotlightAnimation();

	return (
		<div className="min-h-screen bg-black text-white overflow-hidden">
			{/* Intro Section */}
			<section className="relative w-full h-screen flex justify-center items-center bg-black">
				<h1 className="text-6xl md:text-8xl font-light text-center leading-none">
					explore the beauty of Himalayas
				</h1>
			</section>

			{/* Spotlight Section */}
			<section
				ref={refs.spotlight}
				className="spotlight relative w-full h-screen overflow-hidden"
			>
				{/* Intro Text Wrapper */}
				<div className="spotlight-intro-text-wrapper absolute w-full top-1/2 transform -translate-y-1/2 flex gap-2 z-10">
					<div
						ref={refs.introTextElements}
						className="spotlight-intro-text flex-1 relative will-change-transform text-center"
					>
						<p className="text-2xl md:text-3xl font-medium">Beneath</p>
					</div>

					<div className="spotlight-intro-text flex-1 relative will-change-transform text-center">
						<p className="text-2xl md:text-3xl font-medium">Beyond</p>
					</div>
				</div>

				{/* Background Image */}
				<div
					ref={refs.spotlightBgImg}
					className="spotlight-bg-img absolute w-full h-full overflow-hidden transform scale-0 will-change-transform"
				>
					<Image
						src="/images/annapurna.jpg"
						alt="spotlight-bg"
						fill
						className="w-full h-full object-cover transform scale-150 will-change-transform"
					/>
				</div>

				{/* Titles Container */}
				<div
					ref={refs.titlesContainerElements}
					className="spotlight-titles-container absolute w-full h-full top-0 left-[15vw] overflow-hidden before:opacity-0 after:opacity-0"
				>
					<div
						ref={refs.titlesContainer}
						className="spotlight-titles relative left-[15%] w-[75%] h-full flex flex-col transform translate-y-full gap-20 z-[2]"
					>
						{/* Titles will be dynamically inserted here by GSAP */}
					</div>
				</div>

				{/* Images Container */}
				<div
					ref={refs.imagesContainer}
					className="spotlight-images absolute top-0 right-0 left-auto w-1/2 min-w-[300px] h-full z-[1] pointer-events-none"
				>
					{/* Images will be dynamically inserted here by GSAP */}
				</div>

				{/* Header */}
				<div
					ref={refs.spotlightHeader}
					className="spotlight-header absolute top-1/2 left-[10%] transform -translate-y-1/2 z-20 transition-opacity duration-300 ease-in-out text-white rounded-2xl"
				>
					<p className="text-2xl md:text-3xl font-medium">The Himalayas</p>
				</div>
			</section>

			{/* Outro Section */}
			<section className="relative w-full h-screen flex justify-center items-center bg-black">
				<h1 className="text-6xl md:text-8xl font-light text-center leading-none">
					Moment still in motion
				</h1>
			</section>
		</div>
	);
}
