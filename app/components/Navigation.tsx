"use client";
import { MenuIcon, XIcon } from "lucide-react";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { useMenuAnimation } from "../hooks/useMenuAnimation";

interface NavigationProps {
	currentPage?: string;
	heroImage?: string;
	heroTitle?: string;
}

export default function Navigation({
	currentPage: _currentPage = "Home",
	heroImage: _heroImage = "/images/everest.jpg",
	heroTitle: _heroTitle = "Annapurna Himalayas Trekking",
}: NavigationProps) {
	// Use the custom hook for menu animation
	const { refs } = useMenuAnimation();

	return (
		<>
			{/* Main Content Container */}
			<div ref={refs.container} className="main-content">
				{/* Your main page content goes here */}
			</div>

			{/* Navigation */}
			<nav className="fixed w-full p-10 flex justify-between items-center z-50">
				<div className="logo">
					<a
						href="/"
						className="text-white font-bold text-base relative hover:after:scale-x-100 after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[2px] after:bg-white after:scale-x-0 after:origin-right after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.6,0,0.4,1)]"
					>
						Dream scape
					</a>
				</div>

				<div
					ref={refs.menuToggle}
					className="menu-toggle relative w-12 h-6 cursor-pointer mr-10"
				>
					<p
						id="menu-open"
						className="absolute origin-top-left will-change-transform flex items-center gap-2 bg-white rounded-2xl px-3 py-1.5"
					>
						<MenuIcon className="w-6 h-6 text-black" />
						<span className="text-black text-base font-bold">Menu</span>
					</p>
					<p
						id="menu-close"
						className="absolute origin-top-left will-change-transform opacity-0 flex items-center gap-2 bg-white rounded-2xl px-3 py-1.5"
						style={{
							transform: "translateX(-5px) translateY(10px) rotate(5deg)",
						}}
					>
						<XIcon className="w-6 h-6 text-black" />
						<span className="text-black text-base font-bold">Close</span>
					</p>
				</div>
			</nav>

			{/* Menu Overlay */}
			<div
				ref={refs.menuOverlay}
				className="menu-overlay fixed w-full h-screen bg-[#0e0e0e] z-40"
				style={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
			>
				<div
					ref={refs.menuContent}
					className="menu-content relative w-full h-full flex justify-center items-center origin-bottom-left will-change-transform"
					style={{
						transform:
							"translateX(-100px) translateY(-100px) scale(1.5) rotate(-15deg)",
						opacity: 0.25,
					}}
				>
					<div className="menu-items w-full p-10 flex gap-10">
						{/* Image Preview Column */}
						<div className="col-lg flex-[3] hidden md:flex items-center justify-center">
							<div
								ref={refs.menuPreviewImg}
								className="menu-preview-img relative w-[45%] h-full overflow-hidden"
							>
								<Image
									src="/images/everest-footer.jpg"
									alt="menu-preview-img"
									className="absolute w-full h-full object-cover will-change-transform"
									fill
								/>
							</div>
						</div>

						{/* Menu Links Column */}
						<div className="col-sm flex-[2] py-10 flex flex-col gap-10">
							{/* Main Menu Links */}
							<div className="menu-links flex flex-col gap-2">
								<div
									className="link pb-1.5"
									style={{
										clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
									}}
								>
									<a
										href="/"
										data-img="/images/everest-footer.jpg"
										className="inline-block will-change-transform text-white text-[3.5rem] leading-none tracking-[-0.02rem] font-light transition-colors duration-500 relative hover:after:scale-x-100 after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[2px] after:bg-white after:scale-x-0 after:origin-right after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.6,0,0.4,1)] after:z-[1]"
										style={{ transform: "translateY(120%)", opacity: 0.25 }}
									>
										Home
									</a>
								</div>
								<div
									className="link pb-1.5"
									style={{
										clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
									}}
								>
									<a
										href="/tours"
										data-img="/images/manaslu.jpg"
										className="inline-block will-change-transform text-white text-[3.5rem] leading-none tracking-[-0.02rem] font-light transition-colors duration-500 relative hover:after:scale-x-100 after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[2px] after:bg-white after:scale-x-0 after:origin-right after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.6,0,0.4,1)] after:z-[1]"
										style={{ transform: "translateY(120%)", opacity: 0.25 }}
									>
										Tours
									</a>
								</div>
								<div
									className="link pb-1.5"
									style={{
										clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
									}}
								>
									<a
										href="/about"
										data-img="/images/machhapuchhre.jpg"
										className="inline-block will-change-transform text-white text-[3.5rem] leading-none tracking-[-0.02rem] font-light transition-colors duration-500 relative hover:after:scale-x-100 after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[2px] after:bg-white after:scale-x-0 after:origin-right after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.6,0,0.4,1)] after:z-[1]"
										style={{ transform: "translateY(120%)", opacity: 0.25 }}
									>
										About us
									</a>
								</div>
								<div
									className="link pb-1.5"
									style={{
										clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
									}}
								>
									<a
										href="/tour-details"
										data-img="/images/everest.jpg"
										className="inline-block will-change-transform text-white text-[3.5rem] leading-none tracking-[-0.02rem] font-light transition-colors duration-500 relative hover:after:scale-x-100 after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[2px] after:bg-white after:scale-x-0 after:origin-right after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.6,0,0.4,1)] after:z-[1]"
										style={{ transform: "translateY(120%)", opacity: 0.25 }}
									>
										Tour Details
									</a>
								</div>
							</div>

							{/* Social Links */}
							<div className="menu-social flex flex-col gap-2">
								<div
									className="social pb-1.5"
									style={{
										clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
									}}
								>
									<a
										href="/"
										className="inline-block will-change-transform text-[#8f8f8f] text-base font-light transition-colors duration-500 hover:text-white relative hover:after:scale-x-100 after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[2px] after:bg-white after:scale-x-0 after:origin-right after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.6,0,0.4,1)] after:z-[1] group"
										style={{ transform: "translateY(120%)", opacity: 0.25 }}
									>
										<div className="flex items-center gap-3">
											<FaFacebookF className="text-[#8f8f8f] group-hover:text-white group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] transition-all duration-500" />
											<span>Facebook</span>
										</div>
									</a>
								</div>
								<div
									className="social pb-1.5"
									style={{
										clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
									}}
								>
									<a
										href="/"
										className="inline-block will-change-transform text-[#8f8f8f] text-base font-light transition-colors duration-500 hover:text-white relative hover:after:scale-x-100 after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[2px] after:bg-white after:scale-x-0 after:origin-right after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.6,0,0.4,1)] after:z-[1] group"
										style={{ transform: "translateY(120%)", opacity: 0.25 }}
									>
										<div className="flex items-center gap-3">
											<FaInstagram className="text-[#8f8f8f] group-hover:text-white group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] transition-all duration-500" />
											<span>Instagram</span>
										</div>
									</a>
								</div>
								<div
									className="social pb-1.5"
									style={{
										clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
									}}
								>
									<a
										href="/"
										className="inline-block will-change-transform text-[#8f8f8f] text-base font-light transition-colors duration-500 hover:text-white relative hover:after:scale-x-100 after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[2px] after:bg-white after:scale-x-0 after:origin-right after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.6,0,0.4,1)] after:z-[1] group"
										style={{ transform: "translateY(120%)", opacity: 0.25 }}
									>
										<div className="flex items-center gap-3">
											<FaTwitter className="text-[#8f8f8f] group-hover:text-white group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] transition-all duration-500" />
											<span>Twitter</span>
										</div>
									</a>
								</div>
								<div
									className="social pb-1.5"
									style={{
										clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
									}}
								>
									<a
										href="/"
										className="inline-block will-change-transform text-[#8f8f8f] text-base font-light transition-colors duration-500 hover:text-white relative hover:after:scale-x-100 after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[2px] after:bg-white after:scale-x-0 after:origin-right after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.6,0,0.4,1)] after:z-[1] group"
										style={{ transform: "translateY(120%)", opacity: 0.25 }}
									>
										<div className="flex items-center gap-3">
											<FaYoutube className="text-[#8f8f8f] group-hover:text-white group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] transition-all duration-500" />
											<span>Youtube</span>
										</div>
									</a>
								</div>
							</div>
						</div>
					</div>

					{/* Menu Footer */}
					<div className="menu-footer absolute bottom-0 w-full p-10 flex gap-10">
						<div className="col-lg flex-[3]">
							<a
								href="/"
								className="text-white text-base font-light relative hover:after:scale-x-100 after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[2px] after:bg-white after:scale-x-0 after:origin-right after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.6,0,0.4,1)] after:z-[1]"
							>
								Dreame scape
							</a>
						</div>
						<div className="col-sm flex-[2] flex justify-between">
							<a
								href="/test"
								className="text-white text-base font-light relative hover:after:scale-x-100 after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[2px] after:bg-white after:scale-x-0 after:origin-right after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.6,0,0.4,1)] after:z-[1]"
							>
								Test
							</a>
							<a
								href="/page"
								className="text-white text-base font-light relative hover:after:scale-x-100 after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[2px] after:bg-white after:scale-x-0 after:origin-right after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.6,0,0.4,1)] after:z-[1]"
							>
								Menu Demo
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
