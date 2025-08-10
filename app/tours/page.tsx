"use client";

import { Calendar, ChevronRight, Search, Users, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const destinations = [
	{
		id: 1,
		name: "Bukit Teletubbies",
		image: "/images/annapurna.jpg",
		description: "Rolling green hills with stunning panoramic views",
		tourists: "8k+ Happy Tourist",
	},
	{
		id: 2,
		name: "Pura Luhur Poten",
		image: "/images/everest.jpg",
		description: "Sacred temple with traditional architecture",
		tourists: "5k+ Happy Tourist",
	},
	{
		id: 3,
		name: "Gunung Batok",
		image: "/images/machhapuchhre.jpg",
		description: "Iconic volcanic peak with breathtaking views",
		tourists: "12k+ Happy Tourist",
	},
	{
		id: 4,
		name: "Kawah Bromo",
		image: "/images/manaslu.jpg",
		description: "Active volcanic crater with steam vents",
		tourists: "15k+ Happy Tourist",
	},
	{
		id: 5,
		name: "Pasir Berbisik",
		image: "/images/annapurna.jpg",
		description: "Vast desert landscape with unique sand formations",
		tourists: "6k+ Happy Tourist",
	},
];

const partners = [
	"mbc group",
	"ALJAZEERA",
	"The New York Times",
	"The Guardian",
	"BBC",
];

export default function ToursPage() {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [selectedDate, setSelectedDate] = useState("");
	const [selectedPassengers, setSelectedPassengers] = useState("");

	const nextSlide = () => {
		setCurrentSlide((prev) => (prev + 1) % destinations.length);
	};

	const prevSlide = () => {
		setCurrentSlide(
			(prev) => (prev - 1 + destinations.length) % destinations.length,
		);
	};

	return (
		<div className="min-h-screen bg-white overflow-x-hidden">
			<Navigation
				currentPage="Tours"
				heroImage="/images/annapurna.jpg"
				heroTitle="Discover Nepal Tours"
			/>

			{/* Main Content Container */}
			<div className="main-content relative w-full min-h-screen bg-white">
				{/* Main content below */}

				{/* Hero Section */}
				<section className="relative h-screen flex items-center justify-center overflow-hidden">
					{/* Background Image */}
					<div
						className="absolute inset-0 bg-cover bg-center bg-no-repeat"
						style={{
							backgroundImage: "url('/images/MTEVEREST.jpeg')",
							filter: "brightness(0.8)",
						}}
					>
						<div className="absolute inset-0 bg-black/30"></div>
					</div>

					{/* Content */}
					<div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
						{/* Top Tag */}

						{/* Main Headline */}
						<h1 className="text-5xl md:text-7xl font-bold mb-6">
							<span className="text-gray-900">Ready to start your</span>
							<br />
							<span className="text-white">Dreamscape Wonderful Journey</span>
							<br />
							<span className="text-black">with us</span>
						</h1>

						{/* Booking Form */}
						<div className="bg-white/95 backdrop-blur-md rounded-2xl p-8 shadow-2xl max-w-2xl mx-auto">
							<h3 className="text-2xl font-bold text-black mb-6">
								Book Travel Now!
							</h3>
							<div className="flex flex-col md:flex-row gap-4">
								<div className="flex-1 relative">
									<input
										type="date"
										value={selectedDate}
										onChange={(e) => setSelectedDate(e.target.value)}
										className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
										placeholder="Choose a date"
									/>
									<Calendar
										className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
										size={20}
									/>
								</div>
								<div className="flex-1 relative">
									<select
										value={selectedPassengers}
										onChange={(e) => setSelectedPassengers(e.target.value)}
										className="w-full px-4 py-3 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
									>
										<option value="">Select Passengers</option>
										<option value="1">1 Passenger</option>
										<option value="2">2 Passengers</option>
										<option value="3">3 Passengers</option>
										<option value="4">4 Passengers</option>
										<option value="5+">5+ Passengers</option>
									</select>
									<ChevronRight
										className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 rotate-90"
										size={20}
									/>
								</div>
								<button
									type="button"
									className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
								>
									<Search size={20} />
									Check Availability
								</button>
							</div>
						</div>
					</div>
				</section>

				{/* Trusted By Section */}
				<section className="py-16 bg-white">
					<div className="max-w-6xl mx-auto px-6">
						<div className="text-center mb-12">
							<h2 className="text-2xl font-semibold text-gray-600 mb-4">
								Trusted By
							</h2>
						</div>
						<div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
							{partners.map((partner) => (
								<div
									key={partner}
									className="text-gray-400 font-semibold text-lg"
								>
									{partner}
								</div>
							))}
						</div>
					</div>
				</section>

				{/* Destinations Section */}
				<section className="py-20 bg-gray-50">
					<div className="max-w-7xl mx-auto px-6">
						{/* Section Header */}
						<div className="text-center mb-16">
							<h2 className="text-4xl md:text-5xl font-bold mb-4">
								<span className="text-black">Escape to Our</span>
								<br />
								<span className="text-blue-600">Favorite Destination</span>
							</h2>
							<p className="text-lg text-gray-600 max-w-3xl mx-auto">
								Discover the Bromo most popular vacation spots, from Sunrise
								View Point Bukit Widodaren, Gunung Batok and many more.
							</p>
						</div>

						{/* Destinations Grid */}
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
							{destinations.map((destination, index) => (
								<div
									key={destination.id}
									className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
										index === currentSlide ? "ring-2 ring-blue-500" : ""
									}`}
								>
									<div className="relative h-48 overflow-hidden">
										<Image
											fill
											src={destination.image}
											alt={destination.name}
											className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
										/>
										<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
									</div>
									<div className="p-6">
										<h3 className="text-xl font-bold text-gray-800 mb-2">
											{destination.name}
										</h3>
										<p className="text-gray-600 text-sm mb-3">
											{destination.description}
										</p>
										<div className="flex items-center text-green-600 text-sm font-medium">
											<span>• {destination.tourists}</span>
										</div>
									</div>
								</div>
							))}
						</div>

						{/* Explore Button */}
						<div className="text-center mt-12">
							<button
								type="button"
								className="bg-white border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full hover:bg-gray-50 transition-colors flex items-center gap-2 mx-auto"
							>
								<X size={20} />
								Explore Destinations
							</button>
						</div>
					</div>
				</section>

				{/* Additional Features Section */}
				<section className="py-20 bg-white">
					<div className="max-w-6xl mx-auto px-6">
						<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
							<div className="text-center">
								<div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
									<Calendar size={24} className="text-blue-600" />
								</div>
								<h3 className="text-xl font-bold text-gray-800 mb-2">
									Flexible Booking
								</h3>
								<p className="text-gray-600">
									Book your trip with ease and modify dates as needed
								</p>
							</div>
							<div className="text-center">
								<div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
									<Users size={24} className="text-green-600" />
								</div>
								<h3 className="text-xl font-bold text-gray-800 mb-2">
									Expert Guides
								</h3>
								<p className="text-gray-600">
									Professional local guides for the best experience
								</p>
							</div>
							<div className="text-center">
								<div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
									<Search size={24} className="text-purple-600" />
								</div>
								<h3 className="text-xl font-bold text-gray-800 mb-2">
									Best Routes
								</h3>
								<p className="text-gray-600">
									Carefully curated routes for optimal exploration
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* Footer */}
				<Footer />
			</div>
		</div>
	);
}
