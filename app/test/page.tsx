"use client";

import { motion } from "framer-motion";
import {
	ArrowRight,
	ChevronDown,
	ChevronUp,
	Mail,
	MapPin,
	Play,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function TourDetailsPage() {
	const [expandedFAQ, setExpandedFAQ] = useState<number | null>(3); // Start with "RECOMMENDATIONS" expanded
	const [currentDay, setCurrentDay] = useState(2);

	const tourDays = [
		{ id: 1, title: "DAY 1", subtitle: "CUSCO ARRIVAL", date: "01/09" },
		{
			id: 2,
			title: "DAY 2",
			subtitle: "VAILLABAMBA IN PACAIMAYU",
			date: "02/09",
		},
		{
			id: 3,
			title: "DAY 3",
			subtitle: "PACAIMAYU TO WIÑAYWAYNA",
			date: "03/09",
		},
		{ id: 4, title: "DAY 4", subtitle: "MACHU PICCHU", date: "04/09" },
	];

	const faqItems = [
		{
			id: 1,
			question: "WHERE IS MACHU PICCHU?",
			answer:
				"Machu Picchu is located in the Cusco Region of Peru, about 80 kilometers northwest of Cusco, in the Sacred Valley of the Incas.",
		},
		{
			id: 2,
			question: "DEPARTURE AND RETURN POINT",
			answer:
				"All tours depart from and return to Cusco. We provide hotel pickup and drop-off services for your convenience.",
		},
		{
			id: 3,
			question: "ADDITIONAL TOUR INFORMATION",
			answer:
				"Our tours include professional guides, transportation, meals as specified, and entrance fees. Please bring comfortable walking shoes and weather-appropriate clothing.",
		},
		{
			id: 4,
			question: "ADDITIONAL RECOMMENDED WALKS AFTER TOUR",
			answer:
				"After your main tour, we recommend exploring the Sacred Valley, visiting local markets, or taking a day trip to Rainbow Mountain.",
		},
		{
			id: 5,
			question: "RECOMMENDATIONS",
			answer:
				"We recommend booking at least one or two months ahead for Machu Picchu tours, especially during peak season. Always keep your original passport handy and prepare for a full day walk. Bring plenty of water, sunscreen, and a hat.",
		},
	];

	const tourInclusions = [
		"Air-conditioned vehicle",
		"Tour tickets to Machu Picchu",
		"All transfers on tours",
		"Professional English guide",
		"Lunch (3)",
		"Breakfast (3)",
		"Hotel accommodation",
		"Entrance fees",
		"First aid kit",
		"Emergency oxygen",
	];

	const placesOfInterest = [
		{
			name: "MARAS MORAY",
			image: "/images/annapurna.jpg",
			description: "Ancient salt ponds and agricultural terraces",
		},
		{
			name: "SACRED VALLEY",
			image: "/images/everest.jpg",
			description: "Lush valley surrounded by mountains",
		},
		{
			name: "RAINBOW MOUNTAIN",
			image: "/images/manaslu.jpg",
			description: "Colorful mountain with distinct stripes",
		},
	];

	const galleryImages = [
		"/images/everest.jpg",
		"/images/annapurna.jpg",
		"/images/manaslu.jpg",
		"/images/machhapuchhre.jpg",
	];

	return (
		<div className="min-h-screen bg-[#1A201A] text-white">
			{/* Header Section */}
			<header className="relative h-screen flex items-center justify-center overflow-hidden">
				{/* Background Image */}
				<div className="absolute inset-0">
					<Image
						src="/images/everest.jpg"
						alt="Machu Picchu"
						fill
						className="object-cover"
					/>
					<div className="absolute inset-0 bg-black/40"></div>
				</div>

				{/* Content */}
				<div className="relative z-10 text-center">
					<motion.h1
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="font-baron-neue text-6xl md:text-8xl font-bold mb-4"
					>
						ROUTE
					</motion.h1>
					<motion.h2
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="font-montserrat text-xl md:text-2xl font-light"
					>
						MACHU PICCHU CLASSIC TOUR 4 DAYS
					</motion.h2>
				</div>
			</header>

			{/* Main Content */}
			<main className="relative z-20">
				{/* Route Details Section */}
				<section className="py-20 px-4 md:px-8 lg:px-16">
					<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
						{/* Left Column - Day Details */}
						<div className="space-y-8">
							{/* Day Information */}
							<div className="space-y-4">
								<h3 className="font-montserrat text-lg font-light">
									DAY {currentDay}
								</h3>
								<h4 className="font-baron-neue text-3xl md:text-4xl font-bold uppercase">
									VAILLABAMBA IN PACAIMAYU
								</h4>
								<p className="font-montserrat text-base leading-relaxed">
									Today we embark on an incredible journey through the ancient
									Inca trail. Starting from Vaillabamba, we'll trek through
									stunning mountain landscapes, passing through Pacaimayu where
									we'll experience the rich history and culture of the Inca
									civilization.
								</p>
								<button
									type="button"
									className="flex items-center gap-2 text-sm font-montserrat hover:text-[#D4AF37] transition-colors"
								>
									LOOK FOR DETAILS
									<ArrowRight size={16} />
								</button>
							</div>

							{/* Timeline */}
							<div className="space-y-4">
								<div className="flex items-center justify-between">
									{tourDays.map((day) => (
										<button
											key={day.id}
											type="button"
											onClick={() => setCurrentDay(day.id)}
											className={`flex flex-col items-center space-y-2 transition-colors ${
												currentDay === day.id
													? "text-[#D4AF37]"
													: "text-white/60"
											}`}
										>
											<span className="font-baron-neue text-sm font-bold">
												{day.title}
											</span>
											<span className="font-montserrat text-xs">
												{day.date}
											</span>
										</button>
									))}
								</div>
								<div className="flex items-center gap-4">
									<button
										type="button"
										className="p-2 hover:bg-white/10 rounded-full transition-colors"
									>
										<ArrowRight size={20} className="rotate-180" />
									</button>
									<div className="flex-1 h-px bg-white/20"></div>
									<button
										type="button"
										className="p-2 hover:bg-white/10 rounded-full transition-colors"
									>
										<ArrowRight size={20} />
									</button>
								</div>
							</div>

							{/* Tour Price Includes */}
							<div className="space-y-4">
								<h5 className="font-baron-neue text-xl font-bold uppercase flex items-center gap-2">
									<span className="w-0 h-0 border-l-[8px] border-l-transparent border-b-[12px] border-b-[#D4AF37] border-r-[8px] border-r-transparent"></span>
									TOUR PRICE INCLUDES
								</h5>
								<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
									{tourInclusions.map((item) => (
										<div
											key={`inclusion-${item}`}
											className="flex items-center gap-3"
										>
											<div className="w-2 h-2 bg-[#D4AF37] rounded-full"></div>
											<span className="font-montserrat text-sm">{item}</span>
										</div>
									))}
								</div>
							</div>
						</div>

						{/* Right Column - Images */}
						<div className="relative">
							<div className="relative h-96 rounded-lg overflow-hidden">
								<Image
									src="/images/annapurna.jpg"
									alt="Mountain landscape"
									fill
									className="object-cover"
								/>
							</div>
							<div className="absolute -top-8 -left-8 w-32 h-32 transform rotate-45 overflow-hidden">
								<Image
									src="/images/everest.jpg"
									alt="Machu Picchu ruins"
									fill
									className="object-cover -rotate-45 scale-150"
								/>
							</div>
							<div className="absolute -bottom-8 -right-8 w-32 h-32 transform rotate-45 overflow-hidden">
								<Image
									src="/images/manaslu.jpg"
									alt="Mountain view"
									fill
									className="object-cover -rotate-45 scale-150"
								/>
							</div>
						</div>
					</div>
				</section>

				{/* Places of Interest Section */}
				<section className="py-20 px-4 md:px-8 lg:px-16 bg-[#1A241E]">
					<div className="max-w-7xl mx-auto text-center space-y-12">
						<div className="space-y-4">
							<h3 className="font-absortile text-[#D4AF37] text-2xl md:text-3xl">
								LOOK AT THIS
							</h3>
							<h4 className="font-baron-neue text-4xl md:text-5xl font-bold uppercase">
								WHAT YOU CAN SEE
							</h4>
						</div>

						<div className="space-y-8">
							<h5 className="font-montserrat text-lg font-medium">
								PLACES OF INTEREST IN MACHU PICCHU
							</h5>
							<p className="font-montserrat text-base max-w-3xl mx-auto leading-relaxed">
								Machu Picchu, the "Lost City of the Incas," is one of the most
								mysterious and beautiful archaeological sites in the world.
								Built in the 15th century and abandoned just 100 years later,
								this ancient citadel continues to captivate visitors with its
								stunning architecture and breathtaking location.
							</p>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
							{placesOfInterest.map((place, index) => (
								<motion.div
									key={`place-${place.name}`}
									initial={{ opacity: 0, y: 30 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.6, delay: index * 0.2 }}
									className="space-y-4"
								>
									<div className="w-32 h-32 mx-auto transform rotate-45 overflow-hidden">
										<Image
											src={place.image}
											alt={place.name}
											width={128}
											height={128}
											className="object-cover -rotate-45 scale-150"
										/>
									</div>
									<h6 className="font-baron-neue text-xl font-bold uppercase">
										{place.name}
									</h6>
								</motion.div>
							))}
						</div>
					</div>
				</section>

				{/* Heritage Section */}
				<section className="py-20 px-4 md:px-8 lg:px-16">
					<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
						<div className="space-y-6">
							<h5 className="font-baron-neue text-2xl font-bold uppercase">
								CULTURAL AND NATURAL HERITAGE OF HUMANITY
							</h5>
							<p className="font-montserrat text-base leading-relaxed">
								The citadel of Machu Picchu was built with such wisdom that it
								has survived earthquakes, landslides, and centuries of
								abandonment. The Inca civilization demonstrated extraordinary
								knowledge of architecture, astronomy, and engineering, creating
								structures that harmonize perfectly with the natural
								environment.
							</p>
						</div>
						<div className="space-y-6">
							<h5 className="font-baron-neue text-2xl font-bold uppercase">
								HISTORICAL-CULTURAL LEGACY
							</h5>
							<p className="font-montserrat text-base leading-relaxed">
								Today, Machu Picchu receives over 1.5 million visitors annually,
								covering an area of 32,592 hectares. The site is home to diverse
								flora and fauna, including 423 species of birds, 63 species of
								mammals, and 1,625 species of plants, making it a true natural
								paradise.
							</p>
						</div>
					</div>
				</section>

				{/* Video Section */}
				<section className="py-20 px-4 md:px-8 lg:px-16">
					<div className="max-w-4xl mx-auto">
						<div className="relative w-96 h-96 mx-auto transform rotate-45 overflow-hidden">
							<Image
								src="/images/machhapuchhre.jpg"
								alt="Machu Picchu aerial view"
								fill
								className="object-cover -rotate-45 scale-150"
							/>
							<div className="absolute inset-0 bg-black/30 flex items-center justify-center">
								<button
									className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
									type="button"
								>
									<Play size={24} className="text-white ml-1" />
								</button>
							</div>
						</div>
					</div>
				</section>

				{/* Photo Gallery Section */}
				<section className="py-20 px-4 md:px-8 lg:px-16 bg-[#1A241E]">
					<div className="max-w-7xl mx-auto space-y-12">
						<div className="text-center space-y-4">
							<h3 className="font-montserrat text-[#D4AF37] text-sm uppercase tracking-wider">
								IN FRAME
							</h3>
							<h4 className="font-baron-neue text-4xl md:text-5xl font-bold uppercase">
								TRAVELER PHOTO GALLERY
							</h4>
							<p className="font-montserrat text-base">LEAVE YOUR FEEDBACK</p>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
							{galleryImages.map((image, index) => (
								<motion.div
									key={image}
									initial={{ opacity: 0, scale: 0.9 }}
									whileInView={{ opacity: 1, scale: 1 }}
									transition={{ duration: 0.6, delay: index * 0.1 }}
									className="relative aspect-square rounded-lg overflow-hidden"
								>
									<Image
										src={image}
										alt={`Gallery image ${index + 1}`}
										fill
										className="object-cover hover:scale-110 transition-transform duration-300"
									/>
								</motion.div>
							))}
						</div>

						<div className="flex justify-center">
							<div className="flex space-x-2">
								{[1, 2, 3, 4].map((dot) => (
									<div
										key={dot}
										className={`w-3 h-3 rounded-full ${
											dot === 1 ? "bg-[#D4AF37]" : "bg-white/20"
										}`}
									></div>
								))}
							</div>
						</div>
					</div>
				</section>

				{/* FAQ Section */}
				<section className="py-20 px-4 md:px-8 lg:px-16">
					<div className="max-w-4xl mx-auto space-y-12">
						<div className="text-center space-y-4">
							<h3 className="font-montserrat text-[#D4AF37] text-sm uppercase tracking-wider">
								F.A.Q
							</h3>
							<h4 className="font-baron-neue text-4xl md:text-5xl font-bold uppercase">
								POPULAR QUESTIONS
							</h4>
						</div>

						<div className="space-y-4">
							{faqItems.map((item) => (
								<div
									key={item.id}
									className="border border-white/10 rounded-lg"
								>
									<button
										type="button"
										onClick={() =>
											setExpandedFAQ(expandedFAQ === item.id ? null : item.id)
										}
										className="w-full p-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
									>
										<div className="flex items-center gap-4">
											<div className="w-4 h-4 transform rotate-45 border border-[#D4AF37]"></div>
											<span className="font-montserrat font-medium">
												{item.question}
											</span>
										</div>
										{expandedFAQ === item.id ? (
											<ChevronUp size={20} className="text-[#D4AF37]" />
										) : (
											<ChevronDown size={20} className="text-white/60" />
										)}
									</button>
									{expandedFAQ === item.id && (
										<motion.div
											initial={{ opacity: 0, height: 0 }}
											animate={{ opacity: 1, height: "auto" }}
											exit={{ opacity: 0, height: 0 }}
											className="px-6 pb-6"
										>
											<p className="font-montserrat text-sm text-white/80 leading-relaxed">
												{item.answer}
											</p>
										</motion.div>
									)}
								</div>
							))}
						</div>
					</div>
				</section>

				{/* Contact Form Section */}
				<section className="py-20 px-4 md:px-8 lg:px-16 bg-[#1A241E]">
					<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
						{/* Form */}
						<div className="space-y-8">
							<form className="space-y-6">
								<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
									<input
										type="text"
										placeholder="Name"
										className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg font-montserrat text-white placeholder-white/60 focus:outline-none focus:border-[#D4AF37] transition-colors"
									/>
									<input
										type="email"
										placeholder="Email"
										className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg font-montserrat text-white placeholder-white/60 focus:outline-none focus:border-[#D4AF37] transition-colors"
									/>
								</div>
								<input
									type="tel"
									placeholder="Phone"
									className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg font-montserrat text-white placeholder-white/60 focus:outline-none focus:border-[#D4AF37] transition-colors"
								/>
								<textarea
									placeholder="Message"
									rows={4}
									className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg font-montserrat text-white placeholder-white/60 focus:outline-none focus:border-[#D4AF37] transition-colors resize-none"
								></textarea>
								<div className="flex items-center gap-3">
									<input
										type="checkbox"
										id="terms"
										className="w-4 h-4 text-[#D4AF37] bg-white/10 border-white/20 rounded focus:ring-[#D4AF37]"
									/>
									<label
										htmlFor="terms"
										className="font-montserrat text-sm text-white/80"
									>
										I agree with the terms of personal data processing
									</label>
								</div>
								<button
									type="submit"
									className="w-full bg-[#D4AF37] text-white font-montserrat font-medium py-4 rounded-lg hover:bg-[#B8942A] transition-colors uppercase tracking-wider"
								>
									TRAVEL TOGETHER
								</button>
							</form>
						</div>

						{/* Content */}
						<div className="space-y-8">
							<div className="space-y-4">
								<h3 className="font-baron-neue text-4xl md:text-5xl font-bold uppercase">
									A JOURNEY BEGINS WITH ONE STEP
								</h3>
								<h4 className="font-montserrat text-[#D4AF37] text-lg uppercase tracking-wider">
									START TRAVEL
								</h4>
								<p className="font-montserrat text-base text-white/80">
									Leave a request and our manager will contact you within 5
									minutes
								</p>
							</div>
						</div>
					</div>
				</section>
			</main>

			{/* Footer */}
			<footer className="py-16 px-4 md:px-8 lg:px-16 bg-[#1A201A] border-t border-white/10">
				<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
					{/* Brand */}
					<div className="space-y-4">
						<h3 className="font-baron-neue text-2xl font-bold">DREAM MACHU.</h3>
						<p className="font-montserrat text-sm text-white/80">
							We have excellent solutions for your exciting and safe holiday
						</p>
						<div className="space-y-2">
							<p className="font-montserrat text-lg font-medium">
								8 (800) 500-56-40
							</p>
							<p className="font-montserrat text-xs text-white/60">Toll free</p>
						</div>
					</div>

					{/* Quick Links */}
					<div className="space-y-4">
						<h4 className="font-montserrat font-medium uppercase tracking-wider">
							QUICK LINKS
						</h4>
						<ul className="space-y-2">
							{["Info", "Tours", "Gallery", "About us"].map((link) => (
								<li key={link}>
									<a
										href="/"
										className="font-montserrat text-sm text-white/80 hover:text-[#D4AF37] transition-colors"
									>
										{link}
									</a>
								</li>
							))}
						</ul>
					</div>

					{/* Contacts */}
					<div className="space-y-4">
						<h4 className="font-montserrat font-medium uppercase tracking-wider">
							CONTACTS
						</h4>
						<div className="space-y-3">
							<div className="flex items-start gap-3">
								<MapPin size={16} className="text-[#D4AF37] mt-1" />
								<div>
									<p className="font-montserrat text-sm text-white/80">
										82° PART CAPP, Costa, 14
									</p>
									<p className="font-montserrat text-sm text-white/80">
										Machu Picchu Highway, 40, building 1
									</p>
								</div>
							</div>
							<div className="flex items-center gap-3">
								<Mail size={16} className="text-[#D4AF37]" />
								<div>
									<p className="font-montserrat text-sm text-white/80">
										info@machupicchu.com
									</p>
									<p className="font-montserrat text-xs text-white/60">
										Sales Department
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}
