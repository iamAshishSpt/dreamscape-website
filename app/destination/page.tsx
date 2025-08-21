"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ReactLenis from "lenis/react";
import { useEffect, useRef } from "react";
import { DESTINATIONS } from "../data/destination";
import Card from "./Card";
import "./styles.css";

gsap.registerPlugin(ScrollTrigger);

export default function Destination() {
	const containerRef = useRef<HTMLDivElement | null>(null);
	const cardRef = useRef<HTMLDivElement[]>([]);

	useGSAP(
		() => {
			const containerEl = containerRef.current;
			if (!containerEl) return;

			const cardsContainer = containerEl.querySelector(".cards");
			if (!cardsContainer) return;

			const cards = cardRef.current;
			const totalScrollHeight = window.innerHeight * 3;
			const position = [14, 38, 62, 86];
			const rotation = [-15, -7.5, 7.5, 15];

			ScrollTrigger.create({
				trigger: cardsContainer,
				start: "top top",
				end: () => `+=${totalScrollHeight}`,
				pin: true,
				pinSpacing: true,
			});

			//spread cards

			cards.forEach((card, index) => {
				gsap.to(card, {
					left: `${position[index]}%`,
					rotation: `${rotation[index]}`,
					ease: "none",
					scrollTrigger: {
						trigger: cardsContainer,
						start: "top top",
						end: () => `+=${window.innerHeight}`,
						scrub: 0.5,
						id: `spread-${index + 1}`,
					},
				});

				//fliping the cards

				cards.forEach((card, index) => {
					const frontEl = card.querySelector(
						".flip-card-front",
					) as HTMLElement | null;
					const backEl = card.querySelector(
						".flip-card-back",
					) as HTMLElement | null;

					if (!frontEl || !backEl) return;

					const stagerOffset = index * 0.05;
					const startOffset = 1 / 3 + stagerOffset;
					const endOffset = 2 / 3 + stagerOffset;

					ScrollTrigger.create({
						trigger: cardsContainer,
						start: " top top",
						end: () => `+=${totalScrollHeight}`,
						scrub: 1,
						id: `rotate-flip-${index + 1}`,
						onUpdate: (self) => {
							const progress = self.progress;
							if (progress >= startOffset && progress <= endOffset) {
								const animationProgress = (progress - startOffset) / (1 / 3);
								const frontRotation = -180 * animationProgress;
								const backRotation = 180 - 180 * animationProgress;
								const cardRotation = rotation[index] * (1 - animationProgress);

								gsap.to(frontEl, {
									rotationY: frontRotation,
									ease: "power1.Out",
								});

								gsap.to(backEl, {
									rotationY: backRotation,
									ease: "power1.Out",
								});

								gsap.to(card, {
									xPercent: -50,
									yPercent: -50,
									rotate: cardRotation,
									ease: "power1.Out",
								});
							}
						},
					});
				});
			});
		},
		{ scope: containerRef },
	);
	useEffect(() => {
		return () => {
			ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
		};
	}, []);

	return (
		<ReactLenis root>
			<div className="container" ref={containerRef}>
				<section className="hero">
					<h1>
						Explore our <br /> top Destinations
					</h1>
				</section>
				<section className="cards">
					{[...Array(4)].map((_, index) => {
						const d = DESTINATIONS[index % DESTINATIONS.length];
						return (
							<Card
								key={`card-${index + 1}`}
								id={`card-${index + 1}`}
								frontSrc="/images/MTEVEREST.jpeg"
								frontAlt="card Image"
								destination={d}
								ref={(el) => {
									if (el) {
										cardRef.current[index] = el;
									}
								}}
							/>
						);
					})}
				</section>

				<section className="footer">
					<h1>footer or upcomming section.</h1>
				</section>
			</div>
		</ReactLenis>
	);
}
