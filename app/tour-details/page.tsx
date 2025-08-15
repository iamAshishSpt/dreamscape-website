"use client";

import { ArrowRight, Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Navigation from "../components/Navigation";

const reasons = [
	{
		id: 1,
		image: "/images/annapurna.jpg",
		text: "The Inca Trail is one of the most popular ways to get to Machu Picchu, offering a long trek through the Andes Mountains, camping along the trail, and seeing old Inca sites and other structures.",
	},
	{
		id: 2,
		image: "/images/everest.jpg",
		text: 'The mystery: A lot of people know that it was built by the Inca centuries ago in what is today Peru. However, most don’t even know that the site was not "discovered" until 1911.',
	},
	{
		id: 3,
		image: "/images/manaslu.jpg",
		text: "Other sites en route: Patallacta is one of the Inca villages you pass along the Inca Trail. This is a large Inca town located near Machu Picchu.",
	},
	{
		id: 4,
		image: "/images/machhapuchhre.jpg",
		text: "The amazing view: Even in pictures, but seeing the picture does not compare to actually viewing it in person.",
	},
	{
		id: 5,
		image: "/images/everest.jpg",
		text: "Being an explorer: Cutting your way through a forest, exploring ancient ruins, and crossing deadly ancient rope bridges. Enjoy it!",
	},
];

const tours = [
	{
		id: 1,
		name: "MACHU PICCHU FULL DAY",
		date: "19/07",
		route: "/tour-details",
	},
	{ id: 2, name: "2 DAY INCA TRAIL", date: "12-14/08", route: "/tour-details" },
	{
		id: 3,
		name: "MACHU PICCHU CLASSIC TOUR 4 DAYS",
		date: "18-22/08",
		route: "/tour-details",
		highlight: true,
	},
	{
		id: 4,
		name: "MACHU PICCHU AMAZON TRIP 7 DAYS",
		date: "24-31/08",
		route: "/tour-details",
	},
];

export default function TourDetailsPage() {
	return (
		<div className="min-h-screen bg-[#101914] text-white overflow-x-hidden">
			<Navigation
				currentPage="Tour Details"
				heroImage="/images/everest.jpg"
				heroTitle="Tour Details"
			/>

			{/* Main Content Container */}
			<div className="main-content relative w-full min-h-screen bg-[#101914]">
				{/* Main content below */}
				{/* Hero Section */}
				<section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
					<div className="absolute inset-0">
						<Image
							src="/images/everest.jpg"
							alt="Machu Picchu"
							fill
							className="object-cover"
						/>
						<div className="absolute inset-0 bg-black/40" />
					</div>
					<div className="relative z-10 flex flex-col items-center justify-center w-full h-full pt-24">
						<p className="font-montserrat text-lg tracking-widest text-white/80 mb-2">
							LET US PLAN YOU A PERFECT
						</p>
						<h1 className="font-baron-neue text-5xl md:text-7xl font-bold text-white mb-2">
							MACHU PICCHU TRIP
						</h1>
						<div className="flex flex-col items-center mt-4">
							<span className="font-montserrat text-base tracking-widest text-white/80">
								TRAVEL DETAILS
							</span>
							<div className="w-px h-8 bg-white/30 mt-2" />
						</div>
					</div>
				</section>

				{/* Reasons Section */}
				<section className="relative py-24 px-4 md:px-8 lg:px-0 bg-[#101914]">
					<div className="max-w-6xl mx-auto">
						<div className="text-center mb-12">
							<h3 className="font-absortile text-[#D4AF37] text-xl md:text-2xl tracking-widest mb-2">
								REASONS
							</h3>
							<h2 className="font-baron-neue text-3xl md:text-4xl font-bold uppercase mb-8">
								FIVE REASONS WHY YOU SHOULD VISIT MACHUPICCHU
							</h2>
						</div>
						<div className="relative flex flex-col md:flex-row gap-8 md:gap-0 items-center justify-center">
							{/* Left Diamonds */}
							<div className="flex flex-col gap-8 items-end w-full md:w-1/2 pr-0 md:pr-12">
								<div className="flex flex-col gap-8">
									<div className="flex gap-8 items-center">
										<div className="w-40 h-40 transform rotate-45 overflow-hidden border-4 border-[#233024]">
											<Image
												src={reasons[0].image}
												alt="reason1"
												width={200}
												height={200}
												className="object-cover w-full h-full -rotate-45 scale-125"
											/>
										</div>
										<p className="font-montserrat text-base max-w-xs text-right">
											{reasons[0].text}
										</p>
									</div>
									<div className="flex gap-8 items-center">
										<div className="w-32 h-32 transform rotate-45 overflow-hidden border-4 border-[#233024]">
											<Image
												src={reasons[1].image}
												alt="reason2"
												width={160}
												height={160}
												className="object-cover w-full h-full -rotate-45 scale-125"
											/>
										</div>
										<p className="font-montserrat text-base max-w-xs text-right">
											{reasons[1].text}
										</p>
									</div>
									<div className="flex gap-8 items-center">
										<div className="w-28 h-28 transform rotate-45 overflow-hidden border-4 border-[#233024]">
											<Image
												src={reasons[2].image}
												alt="reason3"
												width={120}
												height={120}
												className="object-cover w-full h-full -rotate-45 scale-125"
											/>
										</div>
										<p className="font-montserrat text-base max-w-xs text-right">
											{reasons[2].text}
										</p>
									</div>
								</div>
							</div>
							{/* Center Line */}
							<div className="hidden md:block w-0.5 bg-gradient-to-b from-[#D4AF37] to-transparent h-[500px] mx-8" />
							{/* Right Diamonds */}
							<div className="flex flex-col gap-8 items-start w-full md:w-1/2 pl-0 md:pl-12">
								<div className="flex flex-col gap-8">
									<div className="flex gap-8 items-center flex-row-reverse">
										<div className="w-40 h-40 transform rotate-45 overflow-hidden border-4 border-[#233024]">
											<Image
												src={reasons[3].image}
												alt="reason4"
												width={200}
												height={200}
												className="object-cover w-full h-full -rotate-45 scale-125"
											/>
										</div>
										<p className="font-montserrat text-base max-w-xs text-left">
											{reasons[3].text}
										</p>
									</div>
									<div className="flex gap-8 items-center flex-row-reverse">
										<div className="w-32 h-32 transform rotate-45 overflow-hidden border-4 border-[#233024]">
											<Image
												src={reasons[4].image}
												alt="reason5"
												width={160}
												height={160}
												className="object-cover w-full h-full -rotate-45 scale-125"
											/>
										</div>
										<p className="font-montserrat text-base max-w-xs text-left">
											{reasons[4].text}
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="flex justify-center mt-16">
							<button
								type="button"
								className="px-10 py-4 border-2 border-[#D4AF37] text-[#D4AF37] font-montserrat font-medium hover:bg-[#D4AF37] hover:text-white transition-colors uppercase tracking-wider"
							>
								BOOK TOUR
							</button>
						</div>
					</div>
				</section>

				{/* Tours Section */}
				<section className="py-24 px-4 md:px-8 lg:px-0 bg-[#16211A]">
					<div className="max-w-6xl mx-auto">
						<div className="text-center mb-12">
							<h3 className="font-absortile text-[#D4AF37] text-xl md:text-2xl tracking-widest mb-2">
								TOURS
							</h3>
							<h2 className="font-baron-neue text-3xl md:text-4xl font-bold uppercase mb-8">
								TOURS OF OUR AGENCY
							</h2>
						</div>
						<div className="flex flex-col md:flex-row gap-12">
							{/* Left: Main Image */}
							<div className="flex-1 relative min-h-[350px] max-h-[400px] rounded-lg overflow-hidden">
								<Image
									src="/images/annapurna.jpg"
									alt="Tour"
									fill
									className="object-cover"
								/>
								<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 flex flex-col md:flex-row md:items-end md:justify-between">
									<div>
										<h4 className="font-baron-neue text-lg md:text-2xl font-bold uppercase mb-2">
											MACHU PICCHU CLASSIC TOUR 4 DAYS
										</h4>
										<div className="flex items-center gap-4 text-sm text-white/80">
											<Calendar size={16} />
											<span className="font-montserrat">18.07</span>
										</div>
									</div>
									<div className="text-[#D4AF37] font-baron-neue text-2xl font-bold mt-4 md:mt-0">
										$735
									</div>
								</div>
							</div>
							{/* Right: Tour List */}
							<div className="flex-1 flex flex-col gap-4 justify-center">
								{tours.map((tour) => (
									<div
										key={tour.id}
										className={`flex items-center justify-between p-6 rounded-lg border border-white/10 transition-colors ${
											tour.highlight
												? "bg-[#D4AF37]/20 border-[#D4AF37] text-[#D4AF37]"
												: "bg-white/5 hover:bg-white/10 text-white"
										}`}
									>
										<div>
											<h4 className="font-baron-neue text-lg font-bold uppercase mb-1">
												{tour.name}
											</h4>
											<div className="flex items-center gap-2 text-sm">
												<Calendar size={16} />
												<span className="font-montserrat">{tour.date}</span>
											</div>
										</div>
										<Link
											href={tour.route}
											className="flex items-center gap-2 text-sm font-montserrat hover:text-[#D4AF37] transition-colors"
										>
											VIEW ROUTE
											<ArrowRight size={16} />
										</Link>
									</div>
								))}
								<div className="flex justify-end mt-4">
									<button
										type="button"
										className="px-10 py-4 border-2 border-[#D4AF37] text-[#D4AF37] font-montserrat font-medium hover:bg-[#D4AF37] hover:text-white transition-colors uppercase tracking-wider"
									>
										BOOK TOUR
									</button>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}
