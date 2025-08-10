"use client";

import {
	Award,
	Calendar,
	MapPin,
	MessageCircle,
	Mountain,
	Phone,
	Star,
	Users,
} from "lucide-react";
import Image from "next/image";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

export default function AboutPage() {
	const starArray = Array.from({ length: 5 }, (_, i) => ({ id: i }));

	return (
		<div className="min-h-screen bg-white overflow-x-hidden">
			<Navigation
				currentPage="About"
				heroImage="/images/everest.jpg"
				heroTitle="About DreamScape"
			/>

			{/* Main Content Container */}
			<div className="main-content relative w-full min-h-screen bg-white">
				{/* Main content below */}

				{/* Hero Section */}
				<section className="relative pt-24 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100">
					<div className="absolute inset-0 bg-black/20"></div>
					<div className="relative max-w-7xl mx-auto px-6 py-16 text-center">
						<h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
							About DreamScape
						</h1>
						<p className="text-xl text-gray-700 max-w-3xl mx-auto">
							Your trusted partner in exploring the majestic Himalayas of Nepal.
							We specialize in creating unforgettable mountain adventures that
							connect you with the heart and soul of the world's highest peaks.
						</p>
					</div>
				</section>

				{/* Why We Are Best Section */}
				<section className="py-20 bg-white">
					<div className="max-w-7xl mx-auto px-6">
						<div className="text-center mb-16">
							<h2 className="text-4xl font-bold text-gray-900 mb-4">
								Why We Are Best
							</h2>
							<p className="text-lg text-gray-600 max-w-2xl mx-auto">
								We combine local expertise with international standards to
								deliver exceptional mountain experiences
							</p>
						</div>

						<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
							<div className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 hover:shadow-lg transition-all duration-300">
								<div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
									<Phone className="w-8 h-8 text-white" />
								</div>
								<h3 className="text-xl font-semibold text-gray-900 mb-3">
									24-hour Support
								</h3>
								<p className="text-gray-600">
									Round-the-clock assistance from our experienced team, ensuring
									your safety and comfort throughout your journey
								</p>
							</div>

							<div className="text-center p-6 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 hover:shadow-lg transition-all duration-300">
								<div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
									<Award className="w-8 h-8 text-white" />
								</div>
								<h3 className="text-xl font-semibold text-gray-900 mb-3">
									No Hidden Fees
								</h3>
								<p className="text-gray-600">
									Transparent pricing with all costs clearly outlined. No
									surprises, just honest, upfront pricing for your peace of mind
								</p>
							</div>

							<div className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-50 to-violet-50 hover:shadow-lg transition-all duration-300">
								<div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
									<Calendar className="w-8 h-8 text-white" />
								</div>
								<h3 className="text-xl font-semibold text-gray-900 mb-3">
									Flexible Booking
								</h3>
								<p className="text-gray-600">
									Customizable itineraries and flexible booking options to match
									your schedule and preferences perfectly
								</p>
							</div>

							<div className="text-center p-6 rounded-xl bg-gradient-to-br from-orange-50 to-amber-50 hover:shadow-lg transition-all duration-300">
								<div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
									<MapPin className="w-8 h-8 text-white" />
								</div>
								<h3 className="text-xl font-semibold text-gray-900 mb-3">
									Local Expertise
								</h3>
								<p className="text-gray-600">
									Expert local guides with deep knowledge of Nepal's mountains,
									culture, and hidden gems
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* Our Story Section */}
				<section className="py-20 bg-gray-50">
					<div className="max-w-7xl mx-auto px-6">
						<div className="grid lg:grid-cols-2 gap-12 items-center">
							<div>
								<h2 className="text-4xl font-bold text-gray-900 mb-6">
									It feels like family <br />
									<span className="text-blue-600">(because it is)</span>
								</h2>
								<p className="text-lg text-gray-600 mb-6">
									DreamEscape was born from a deep love for Nepal's majestic
									mountains and a desire to share their magic with the world.
									Our founders, native to the Himalayas, grew up exploring these
									peaks and understanding their sacred significance to the local
									communities.
								</p>
								<p className="text-lg text-gray-600 mb-8">
									We believe that every mountain adventure should be more than
									just a trek – it should be a transformative journey that
									connects you with the local culture, respects the environment,
									and creates lasting memories with our extended family of
									guides and porters.
								</p>
								<button
									type="button"
									className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
								>
									Read More
								</button>
							</div>
							<div className="relative">
								<div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
									<Image
										fill
										src="/images/everest.jpg"
										alt="Mount Everest"
										className="w-full h-full object-cover"
									/>
								</div>
								<div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
									<div className="flex items-center gap-3">
										<Mountain className="w-8 h-8 text-blue-600" />
										<div>
											<p className="font-semibold text-gray-900">
												Mount Everest
											</p>
											<p className="text-sm text-gray-600">
												8,848m - World's Highest Peak
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Stats Section */}
				<section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
					<div className="max-w-7xl mx-auto px-6">
						<div className="text-center mb-16">
							<h2 className="text-4xl font-bold text-white mb-4">
								We're here to introduce you to all the places out there
							</h2>
							<p className="text-xl text-blue-100 max-w-3xl mx-auto">
								From the base of Mount Everest to the hidden valleys of the
								Annapurna range, we've been guiding adventurers through Nepal's
								most spectacular landscapes for over a decade.
							</p>
						</div>

						<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
							<div className="text-center">
								<div className="text-4xl font-bold text-white mb-2">5000+</div>
								<p className="text-blue-100">Happy customers</p>
							</div>
							<div className="text-center">
								<div className="text-4xl font-bold text-white mb-2">150+</div>
								<p className="text-blue-100">Tours and activities</p>
							</div>
							<div className="text-center">
								<div className="text-4xl font-bold text-white mb-2">25+</div>
								<p className="text-blue-100">Countries around the globe</p>
							</div>
							<div className="text-center">
								<div className="text-4xl font-bold text-white mb-2">50+</div>
								<p className="text-blue-100">Local Partners</p>
							</div>
						</div>
					</div>
				</section>

				{/* Leadership Team Section */}
				<section className="py-20 bg-white">
					<div className="max-w-7xl mx-auto px-6">
						<div className="text-center mb-16">
							<h2 className="text-4xl font-bold text-gray-900 mb-4">
								Leadership Team
							</h2>
							<p className="text-lg text-gray-600 max-w-2xl mx-auto">
								Our people are your people, too. Meet the passionate team
								guiding DreamEscape's success.
							</p>
						</div>

						<div className="grid md:grid-cols-3 gap-8">
							<div className="text-center">
								<div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center">
									<Users className="w-20 h-20 text-white" />
								</div>
								<h3 className="text-2xl font-semibold text-gray-900 mb-2">
									Rajesh Thapa
								</h3>
								<p className="text-blue-600 font-medium">Founder & CEO</p>
								<p className="text-gray-600 mt-3">
									Born in the shadow of the Himalayas, Rajesh has been exploring
									Nepal's mountains since childhood.
								</p>
							</div>

							<div className="text-center">
								<div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center">
									<Mountain className="w-20 h-20 text-white" />
								</div>
								<h3 className="text-2xl font-semibold text-gray-900 mb-2">
									Mingma Sherpa
								</h3>
								<p className="text-blue-600 font-medium">Co-Founder</p>
								<p className="text-gray-600 mt-3">
									A certified mountain guide with over 15 years of experience
									leading expeditions in the Everest region.
								</p>
							</div>

							<div className="text-center">
								<div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden bg-gradient-to-br from-purple-400 to-violet-500 flex items-center justify-center">
									<Award className="w-20 h-20 text-white" />
								</div>
								<h3 className="text-2xl font-semibold text-gray-900 mb-2">
									Priya Sharma
								</h3>
								<p className="text-blue-600 font-medium">
									Director of Marketing
								</p>
								<p className="text-gray-600 mt-3">
									Passionate about sharing Nepal's beauty with the world while
									preserving its cultural heritage.
								</p>
							</div>
						</div>

						<div className="text-center mt-12">
							<button
								type="button"
								className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
							>
								Meet our team
							</button>
						</div>
					</div>
				</section>

				{/* Testimonials Section */}
				<section className="py-20 bg-gray-50">
					<div className="max-w-7xl mx-auto px-6">
						<div className="text-center mb-16">
							<h2 className="text-4xl font-bold text-gray-900 mb-4">
								People love us
							</h2>
							<p className="text-lg text-gray-600">500+ reviews</p>
						</div>

						<div className="grid md:grid-cols-3 gap-8">
							<div className="bg-white p-8 rounded-xl shadow-lg">
								<div className="flex items-center mb-4">
									{starArray.map((star) => (
										<Star
											key={`star-sarah-${star.id}`}
											className="w-5 h-5 text-yellow-400 fill-current"
										/>
									))}
								</div>
								<p className="text-gray-600 mb-6">
									"DreamEscape made our Everest Base Camp trek absolutely
									incredible. The guides were knowledgeable, the accommodations
									were perfect, and the entire experience exceeded our
									expectations. Highly recommend!"
								</p>
								<div className="flex items-center">
									<div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4">
										<span className="text-white font-semibold">SL</span>
									</div>
									<div>
										<p className="font-semibold text-gray-900">Sarah Laura</p>
										<p className="text-gray-600">Spain</p>
									</div>
								</div>
							</div>

							<div className="bg-white p-8 rounded-xl shadow-lg">
								<div className="flex items-center mb-4">
									{starArray.map((star) => (
										<Star
											key={`star-laura-${star.id}`}
											className="w-5 h-5 text-yellow-400 fill-current"
										/>
									))}
								</div>
								<p className="text-gray-600 mb-6">
									"The Annapurna Circuit with DreamEscape was a life-changing
									experience. The team's attention to detail and local knowledge
									made all the difference. We felt safe and well-cared for
									throughout."
								</p>
								<div className="flex items-center">
									<div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4">
										<span className="text-white font-semibold">LS</span>
									</div>
									<div>
										<p className="font-semibold text-gray-900">Laura Susam</p>
										<p className="text-gray-600">United Kingdom</p>
									</div>
								</div>
							</div>

							<div className="bg-white p-8 rounded-xl shadow-lg">
								<div className="flex items-center mb-4">
									{starArray.map((star) => (
										<Star
											key={`star-kevin-${star.id}`}
											className="w-5 h-5 text-yellow-400 fill-current"
										/>
									))}
								</div>
								<p className="text-gray-600 mb-6">
									"Best mountain adventure company in Nepal! The Manaslu trek
									was perfectly organized, and our guide Mingma was exceptional.
									The cultural insights and mountain views were unforgettable."
								</p>
								<div className="flex items-center">
									<div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mr-4">
										<span className="text-white font-semibold">KD</span>
									</div>
									<div>
										<p className="font-semibold text-gray-900">Kevin Dun</p>
										<p className="text-gray-600">Italy</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* CTA Section */}
				<section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 m-10 rounded-4xl">
					<div className="max-w-7xl mx-auto px-6 text-center">
						<h2 className="text-4xl font-bold text-white mb-4">
							Not sure which tour is right for you? <br />
							We're here to help.
						</h2>

						<div className="grid md:grid-cols-3 gap-8 mt-12">
							<div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
								<MessageCircle className="w-12 h-12 text-white mx-auto mb-4" />
								<h3 className="text-xl font-semibold text-white mb-3">
									Chat online
								</h3>
								<p className="text-blue-100 mb-4">
									Chat instantly with us during our normal hours, or leave a
									message and we'll get back to you ASAP.
								</p>
								<button
									type="button"
									className="bg-white text-blue-600 px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
								>
									Chat now
								</button>
							</div>

							<div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
								<Calendar className="w-12 h-12 text-white mx-auto mb-4" />
								<h3 className="text-xl font-semibold text-white mb-3">
									Schedule a call
								</h3>
								<p className="text-blue-100 mb-4">
									Book a personalized consultation to discuss your dream
									mountain adventure and get expert recommendations.
								</p>
								<button
									type="button"
									className="bg-white text-blue-600 px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
								>
									Schedule now
								</button>
							</div>

							<div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
								<Phone className="w-12 h-12 text-white mx-auto mb-4" />
								<h3 className="text-xl font-semibold text-white mb-3">
									Call us
								</h3>
								<p className="text-blue-100 mb-4">
									Speak directly with our mountain experts for immediate
									assistance and personalized guidance.
								</p>
								<button
									type="button"
									className="bg-white text-blue-600 px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
								>
									Call now
								</button>
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
