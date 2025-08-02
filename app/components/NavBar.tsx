"use client";

import { PlaneTakeoff } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { isImageDark } from "../../utils/imageBrightness";

const navLinks = [
	{ name: "Home", href: "/" },
	{ name: "Destinations", href: "/tours" },
	{ name: "About Us", href: "/about" },
	{ name: "Contact", href: "/contact" },
];

interface NavbarProps {
	backgroundImageUrl?: string | null;
}

export default function Navbar({ backgroundImageUrl }: NavbarProps) {
	const pathname = usePathname();
	const [open, setOpen] = useState(false);
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
		<header className="fixed top-0 left-0 w-full z-50">
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
					<nav className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex gap-2 items-center">
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

					{/* Mobile Menu Button */}
					<button
						type="button"
						onClick={() => setOpen(!open)}
						className="md:hidden text-black z-10 p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300"
					>
						<span className="text-xl">{open ? "✕" : "☰"}</span>
					</button>
				</div>
			</div>

			{/* Mobile Dropdown Nav */}
			{open && (
				<div className="md:hidden bg-black/95 border-b border-white/10">
					<div className="max-w-7xl mx-auto px-6 py-4 space-y-2">
						{navLinks.map((link) => (
							<Link
								key={link.name}
								href={link.href}
								onClick={() => setOpen(false)}
								className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
									pathname === link.href
										? "bg-white/20 text-black"
										: "text-white/90 hover:text-white hover:bg-white/10"
								}`}
							>
								{link.name}
							</Link>
						))}
					</div>
				</div>
			)}
		</header>
	);
}
