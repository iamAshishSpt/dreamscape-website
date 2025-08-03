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
import Link from "next/link";

export default function Footer() {
	return (
		<footer className="relative bg-gray-900 text-white overflow-hidden">
			{/* Mountain Background with Parallax Effect */}
			<div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
				{/* Mountain Silhouettes */}
				<div className="absolute bottom-0 left-0 right-0 h-64 opacity-20">
					<svg
						viewBox="0 0 1200 200"
						className="w-full h-full"
						preserveAspectRatio="none"
						aria-label="Mountain silhouettes background bottom"
					>
						<defs>
							<linearGradient
								id="mountainGradient"
								x1="0%"
								y1="0%"
								x2="0%"
								y2="100%"
							>
								<stop offset="0%" stopColor="#1f2937" />
								<stop offset="100%" stopColor="#111827" />
							</linearGradient>
						</defs>
						{/* First mountain range */}
						<path
							d="M0,200 L200,100 L400,150 L600,80 L800,120 L1000,60 L1200,100 L1200,200 Z"
							fill="url(#mountainGradient)"
							className="animate-pulse"
							style={{ animationDuration: "4s" }}
						/>
						{/* Second mountain range */}
						<path
							d="M0,200 L150,120 L300,140 L450,90 L600,110 L750,70 L900,100 L1050,80 L1200,90 L1200,200 Z"
							fill="url(#mountainGradient)"
							opacity="0.7"
							className="animate-pulse"
							style={{ animationDuration: "6s", animationDelay: "1s" }}
						/>
						{/* Third mountain range */}
						<path
							d="M0,200 L100,140 L200,160 L300,110 L400,130 L500,90 L600,110 L700,80 L800,100 L900,85 L1000,95 L1100,75 L1200,85 L1200,200 Z"
							fill="url(#mountainGradient)"
							opacity="0.5"
							className="animate-pulse"
							style={{ animationDuration: "8s", animationDelay: "2s" }}
						/>
					</svg>
				</div>

				{/* Floating particles effect */}
				<div className="absolute inset-0 overflow-hidden">
					{Array.from({ length: 20 }).map((_, i) => (
						<div
							key={`particle-${i}-${Math.random()}`}
							className="absolute w-1 h-1 bg-white/30 rounded-full animate-float"
							style={{
								left: `${Math.random() * 100}%`,
								top: `${Math.random() * 100}%`,
								animationDelay: `${Math.random() * 3}s`,
								animationDuration: `${3 + Math.random() * 4}s`,
							}}
						/>
					))}
				</div>
			</div>

			{/* Content */}
			<div className="relative z-10">
				{/* Main Footer Content */}
				<div className="max-w-7xl mx-auto px-6 py-16">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						{/* Company Info */}
						<div className="lg:col-span-1">
							<div className="mb-6">
								<h3 className="text-2xl font-bold text-white mb-2">
									DreamScape
								</h3>
								<p className="text-gray-300 text-sm">
									Your gateway to the majestic Himalayas
								</p>
							</div>
							<p className="text-gray-400 mb-6 leading-relaxed">
								Experience the magic of Nepal with our expert-guided tours. From
								Mount Everest to hidden valleys, we create unforgettable
								mountain adventures that connect you with the heart of the
								Himalayas.
							</p>
							<div className="flex space-x-4">
								<a
									href="https://facebook.com"
									className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
									aria-label="Facebook"
								>
									<Facebook size={18} />
								</a>
								<a
									href="https://twitter.com"
									className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
									aria-label="Twitter"
								>
									<Twitter size={18} />
								</a>
								<a
									href="https://instagram.com"
									className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
									aria-label="Instagram"
								>
									<Instagram size={18} />
								</a>
								<a
									href="https://youtube.com"
									className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
									aria-label="YouTube"
								>
									<Youtube size={18} />
								</a>
							</div>
						</div>

						{/* Quick Links */}
						<div>
							<h4 className="text-lg font-semibold text-white mb-6">
								Quick Links
							</h4>
							<ul className="space-y-3">
								<li>
									<Link
										href="/tours"
										className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
									>
										<span className="w-0 h-0.5 bg-white group-hover:w-4 transition-all duration-300 mr-2"></span>
										Adventure Tours
									</Link>
								</li>
								<li>
									<Link
										href="/about"
										className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
									>
										<span className="w-0 h-0.5 bg-white group-hover:w-4 transition-all duration-300 mr-2"></span>
										About Us
									</Link>
								</li>
								<li>
									<Link
										href="#"
										className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
									>
										<span className="w-0 h-0.5 bg-white group-hover:w-4 transition-all duration-300 mr-2"></span>
										Destinations
									</Link>
								</li>
								<li>
									<Link
										href="#"
										className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
									>
										<span className="w-0 h-0.5 bg-white group-hover:w-4 transition-all duration-300 mr-2"></span>
										Testimonials
									</Link>
								</li>
								<li>
									<Link
										href="#"
										className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
									>
										<span className="w-0 h-0.5 bg-white group-hover:w-4 transition-all duration-300 mr-2"></span>
										Blog
									</Link>
								</li>
							</ul>
						</div>

						{/* Popular Tours */}
						<div>
							<h4 className="text-lg font-semibold text-white mb-6">
								Popular Tours
							</h4>
							<ul className="space-y-3">
								<li>
									<Link
										href="#"
										className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
									>
										<span className="w-0 h-0.5 bg-white group-hover:w-4 transition-all duration-300 mr-2"></span>
										Everest Base Camp
									</Link>
								</li>
								<li>
									<Link
										href="#"
										className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
									>
										<span className="w-0 h-0.5 bg-white group-hover:w-4 transition-all duration-300 mr-2"></span>
										Annapurna Circuit
									</Link>
								</li>
								<li>
									<Link
										href="#"
										className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
									>
										<span className="w-0 h-0.5 bg-white group-hover:w-4 transition-all duration-300 mr-2"></span>
										Manaslu Trek
									</Link>
								</li>
								<li>
									<Link
										href="#"
										className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
									>
										<span className="w-0 h-0.5 bg-white group-hover:w-4 transition-all duration-300 mr-2"></span>
										Langtang Valley
									</Link>
								</li>
								<li>
									<Link
										href="#"
										className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
									>
										<span className="w-0 h-0.5 bg-white group-hover:w-4 transition-all duration-300 mr-2"></span>
										Upper Mustang
									</Link>
								</li>
							</ul>
						</div>

						{/* Contact Info */}
						<div>
							<h4 className="text-lg font-semibold text-white mb-6">
								Contact Us
							</h4>
							<div className="space-y-4">
								<div className="flex items-start space-x-3">
									<MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
									<div>
										<p className="text-gray-400 text-sm">
											Thamel, Kathmandu
											<br />
											Nepal
										</p>
									</div>
								</div>
								<div className="flex items-center space-x-3">
									<Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
									<a
										href="tel:+977-1-4444444"
										className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
									>
										+977-1-4444444
									</a>
								</div>
								<div className="flex items-center space-x-3">
									<Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
									<a
										href="mailto:info@dreamescape.com"
										className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
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
										className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors duration-300"
									/>
									<button
										type="button"
										className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-r-lg transition-colors duration-300"
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
							<div className="text-gray-400 text-sm">
								© 2025 DreamScape. All rights reserved.
							</div>
							<div className="flex space-x-6 text-sm">
								<Link
									href="#"
									className="text-gray-400 hover:text-white transition-colors duration-300"
								>
									Privacy Policy
								</Link>
								<Link
									href="#"
									className="text-gray-400 hover:text-white transition-colors duration-300"
								>
									Terms of Service
								</Link>
								<Link
									href="#"
									className="text-gray-400 hover:text-white transition-colors duration-300"
								>
									Cookie Policy
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Custom CSS for animations */}
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
