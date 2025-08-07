"use client";

import {
	Facebook,
	Instagram,
	Mail,
	MapPin,
	Phone,
	Twitter,
	Youtube,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Footer() {
	const footerRef = useRef<HTMLDivElement>(null);
	const snowCanvasRef = useRef<HTMLCanvasElement>(null);

	type Snowflake = { x: number; y: number; r: number; d: number };

	// Snowfall effect
	useEffect(() => {
		const canvas = snowCanvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;
		let width = canvas.offsetWidth;
		let height = canvas.offsetHeight;
		canvas.width = width;
		canvas.height = height;
		let snowflakes: Snowflake[] = [];
		let animationId: number | undefined;

		function resize() {
			if (!canvas) return;
			width = canvas.offsetWidth;
			height = canvas.offsetHeight;
			canvas.width = width;
			canvas.height = height;
		}
		window.addEventListener("resize", resize);

		function createSnowflakes() {
			if (!canvas) return;
			snowflakes = [];
			for (let i = 0; i < 60; i++) {
				snowflakes.push({
					x: Math.random() * width,
					y: Math.random() * height,
					r: Math.random() * 2 + 1,
					d: Math.random() * 1 + 0.5,
				});
			}
		}
		function drawSnowflakes() {
			if (!ctx) return;
			ctx.clearRect(0, 0, width, height);
			ctx.fillStyle = "rgba(255,255,255,0.85)";
			ctx.beginPath();
			for (let i = 0; i < snowflakes.length; i++) {
				const f = snowflakes[i];
				ctx.moveTo(f.x, f.y);
				ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2, true);
			}
			ctx.fill();
			moveSnowflakes();
		}
		function moveSnowflakes() {
			for (let i = 0; i < snowflakes.length; i++) {
				const f = snowflakes[i];
				f.y += f.d;
				if (f.y > height) {
					f.x = Math.random() * width;
					f.y = 0;
				}
			}
		}
		function animateSnow() {
			drawSnowflakes();
			animationId = requestAnimationFrame(animateSnow);
		}
		resize();
		createSnowflakes();
		animateSnow();

		return () => {
			window.removeEventListener("resize", resize);
			if (animationId) cancelAnimationFrame(animationId);
		};
	}, []);

	return (
		<footer
			ref={footerRef}
			className="relative text-gray-800 overflow-hidden bg-transparent"
		>
			{/* SVG Mountain Top Shape with Everest Background */}
			<div
				className="absolute top-0 left-0 w-full h-[1200px] z-10 bg-cover bg-center"
				style={{ backgroundImage: "url('/images/everest-footer.png')" }}
			>
				<Image
					src="/images/mountain.svg"
					alt="Mountain"
					fill
					className="w-full h-full object-cover z-20 relative mix-blend-multiply"
					priority
				/>
			</div>

			{/* Snowfall Canvas (above background, below content) */}
			<canvas
				ref={snowCanvasRef}
				id="footer-snow-canvas"
				className="snow-canvas"
			/>

			{/* Footer Content */}
			<div className="relative z-30 mt-90 pb-12 px-6 bg-transparent">
				{/* Main Footer Content */}
				<div className="max-w-7xl mx-auto px-6 py-16">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						{/* Company Info */}
						<div className="lg:col-span-1">
							<div className="mb-6">
								<h3 className="text-2xl font-bold text-white mb-2">
									DreamScape
								</h3>
								<p className="text-gray-200 text-sm">
									Your gateway to the majestic Himalayas
								</p>
							</div>
							<p className="text-gray-300 mb-6 leading-relaxed">
								Experience the magic of Nepal with our expert-guided tours. From
								Mount Everest to hidden valleys, we create unforgettable
								mountain adventures that connect you with the heart of the
								Himalayas.
							</p>
							<div className="flex space-x-4">
								<a
									href="https://facebook.com"
									aria-label="Facebook"
									className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
								>
									<Facebook size={18} className="text-white" />
								</a>
								<a
									href="https://twitter.com"
									aria-label="Twitter"
									className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
								>
									<Twitter size={18} className="text-white" />
								</a>
								<a
									href="https://instagram.com"
									aria-label="Instagram"
									className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
								>
									<Instagram size={18} className="text-white" />
								</a>
								<a
									href="https://youtube.com"
									aria-label="YouTube"
									className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
								>
									<Youtube size={18} className="text-white" />
								</a>
							</div>
						</div>

						{/* Quick Links */}
						<div>
							<h4 className="text-lg font-semibold text-white mb-6">
								Quick Links
							</h4>
							<ul className="space-y-3">
								{[
									"Adventure Tours",
									"About Us",
									"Destinations",
									"Testimonials",
									"Blog",
								].map((label) => (
									<li key={label}>
										<Link
											href="#"
											className="text-gray-300 hover:text-white flex items-center group transition-colors duration-300"
										>
											<span className="w-0 h-0.5 bg-white group-hover:w-4 transition-all duration-300 mr-2" />
											{label}
										</Link>
									</li>
								))}
							</ul>
						</div>

						{/* Popular Tours */}
						<div>
							<h4 className="text-lg font-semibold text-white mb-6">
								Popular Tours
							</h4>
							<ul className="space-y-3">
								{[
									"Everest Base Camp",
									"Annapurna Circuit",
									"Manaslu Trek",
									"Langtang Valley",
									"Upper Mustang",
								].map((label) => (
									<li key={label}>
										<Link
											href="#"
											className="text-gray-300 hover:text-white flex items-center group transition-colors duration-300"
										>
											<span className="w-0 h-0.5 bg-white group-hover:w-4 transition-all duration-300 mr-2" />
											{label}
										</Link>
									</li>
								))}
							</ul>
						</div>

						{/* Contact Info */}
						<div>
							<h4 className="text-lg font-semibold text-white mb-6">
								Contact Us
							</h4>
							<div className="space-y-4">
								<div className="flex items-start space-x-3">
									<MapPin className="w-5 h-5 text-blue-300 mt-1 flex-shrink-0" />
									<p className="text-gray-300 text-sm">
										Thamel, Kathmandu
										<br />
										Nepal
									</p>
								</div>
								<div className="flex items-center space-x-3">
									<Phone className="w-5 h-5 text-blue-300 flex-shrink-0" />
									<a
										href="tel:+977-1-4444444"
										className="text-gray-300 hover:text-white text-sm transition-colors duration-300"
									>
										+977-1-4444444
									</a>
								</div>
								<div className="flex items-center space-x-3">
									<Mail className="w-5 h-5 text-blue-300 flex-shrink-0" />
									<a
										href="mailto:info@dreamescape.com"
										className="text-gray-300 hover:text-white text-sm transition-colors duration-300"
									>
										info@dreamescape.com
									</a>
								</div>
							</div>

							{/* Newsletter Signup */}
							<div className="mt-8">
								<h5 className="text-sm font-semibold text-white mb-3">
									Newsletter
								</h5>
								<div className="flex">
									<input
										type="email"
										placeholder="Your email"
										className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-l-lg text-white placeholder-gray-300 focus:outline-none focus:border-blue-300 transition-colors duration-300"
									/>
									<button
										type="button"
										className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-r-lg transition-colors duration-300"
									>
										Subscribe
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className="border-t border-white/10">
					<div className="max-w-7xl mx-auto px-6 py-6">
						<div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
							<p className="text-gray-300 text-sm">
								© 2025 DreamScape. All rights reserved.
							</p>
							<div className="flex space-x-6 text-sm">
								{["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
									(label) => (
										<Link
											href="#"
											key={label}
											className="text-gray-300 hover:text-white transition-colors duration-300"
										>
											{label}
										</Link>
									),
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* Float Animation Keyframes */}
			<style jsx>{`
				@keyframes float {
					0%, 100% {
						transform: translateY(0px) rotate(0deg);
						opacity: 0.3;
					}
					50% {
						transform: translateY(-20px) rotate(180deg);
						opacity: 0.7;
					}
				}
				.animate-float {
					animation: float 3s ease-in-out infinite;
				}
			`}</style>
		</footer>
	);
}
