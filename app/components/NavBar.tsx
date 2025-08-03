"use client";

import { Home, MapPin, Phone, PlaneTakeoff, Users } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { isImageDark } from "../../utils/imageBrightness";

const navLinks = [
	{ name: "Home", href: "/", icon: Home },
	{ name: "Destinations", href: "/tours", icon: MapPin },
	{ name: "About Us", href: "/about", icon: Users },
	{ name: "Contact", href: "/contact", icon: Phone },
];

interface NavbarProps {
	backgroundImageUrl?: string | null;
}

export default function Navbar({ backgroundImageUrl }: NavbarProps) {
	const pathname = usePathname();
	const [isDarkBackground, setIsDarkBackground] = useState(false);

	// Determine text color based on background brightness
	useEffect(() => {
		console.log("NavBar: backgroundImageUrl changed to:", backgroundImageUrl);

		if (backgroundImageUrl) {
			isImageDark(backgroundImageUrl)
				.then((isDark) => {
					console.log("NavBar: Image brightness analysis result:", isDark);
					setIsDarkBackground(isDark);
				})
				.catch((error) => {
					console.error("NavBar: Error analyzing image brightness:", error);
					// Fallback to dark background assumption for safety (white text)
					setIsDarkBackground(true);
				});
		} else {
			// Default to dark background when no image is provided (white text)
			setIsDarkBackground(true);
		}
	}, [backgroundImageUrl]);

	console.log(
		"NavBar: Current state - isDarkBackground:",
		isDarkBackground,
		"textColorClass:",
		isDarkBackground ? "text-white" : "text-black",
	);

	return (
		<>
			{/* Desktop Header */}
			<header className="fixed top-0 left-0 w-full z-50 hidden md:block">
				{/* Dark navbar background */}
				<div className="relative max-w-7xl mx-auto px-6 py-4">
					{/* Dark background */}
					{/* <div className="absolute inset-0 bg-black/80 border-b border-white/10"></div> */}

					<div className="relative flex items-center justify-between">
						{/* Brand on left */}
						<Link
							href="/"
							className="flex items-center gap-3 text-black font-geist-sans text-xl tracking-wide z-10 group"
						>
							<div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-all duration-300">
								<PlaneTakeoff size={24} className="text-black" />
							</div>
							<span className="font-bold">DREAMSCAPE</span>
						</Link>

						{/* Center Nav */}
						<nav className="absolute left-1/2 transform -translate-x-1/2 flex gap-2 items-center bg-white/30 rounded-2xl">
							{navLinks.map((link) => (
								<Link
									key={link.name}
									href={link.href}
									className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
										pathname === link.href
											? "bg-white/20 text-black shadow-lg"
											: "text-black/90 hover:text-black hover:bg-white/10"
									}`}
								>
									{link.name}
									{pathname === link.href && (
										<span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-yellow-400 rounded-full"></span>
									)}
								</Link>
							))}
						</nav>
					</div>
				</div>
			</header>

			{/* Mobile Bottom Tab Bar */}
			<header className="fixed bottom-0 left-0 w-full z-99000 md:hidden bg-gray-900 border-t border-gray-700 shadow-2xl m-5 rounded-4xl">
				<nav className="flex items-center justify-around w-full">
					{navLinks.map((link) => {
						const IconComponent = link.icon;
						const isActive = pathname === link.href;

						return (
							<Link
								key={link.name}
								href={link.href}
								className={`flex flex-col items-center justify-center px-4 py-3 rounded-xl transition-all duration-300 min-w-0 flex-1 mx-1 ${
									isActive
										? "text-blue-400 bg-blue-900/40 shadow-lg"
										: "text-gray-400 hover:text-blue-300 hover:bg-gray-800/50"
								}`}
							>
								<IconComponent
									size={24}
									className={`${isActive ? "text-blue-400" : "text-gray-400"}`}
								/>
								{isActive && (
									<span className="text-xs font-medium mt-1 text-blue-400">
										{link.name}
									</span>
								)}
								{isActive && (
									<span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-blue-400 rounded-full"></span>
								)}
							</Link>
						);
					})}
				</nav>
			</header>

			{/* Mobile Top Bar with Brand */}
			<header className="fixed top-0 left-0 w-full z-40 md:hidden">
				<div className="bg-white/95 backdrop-blur-md border-b border-gray-200/50">
					<div className="max-w-7xl mx-auto px-6 py-3">
						<Link
							href="/"
							className="flex items-center gap-3 text-black font-geist-sans text-lg tracking-wide"
						>
							<div className="p-1.5 bg-blue-100 rounded-lg">
								<PlaneTakeoff size={20} className="text-blue-600" />
							</div>
							<span className="font-bold">DREAMSCAPE</span>
						</Link>
					</div>
				</div>
			</header>
		</>
	);
}
