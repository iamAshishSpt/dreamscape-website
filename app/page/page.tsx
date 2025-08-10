"use client";
import Image from "next/image";
import { useEffect } from "react";
import { runMenuAnimation } from "./menuAnimation";

export default function MenuPage() {
	useEffect(() => {
		const cleanup = runMenuAnimation();
		return () => {
			if (typeof cleanup === "function") cleanup();
		};
	}, []);

	return (
		<div className="overflow-x-hidden">
			{/* Navigation */}
			<nav className="fixed w-full p-10 flex justify-between items-center z-20">
				<div className="logo">
					<a
						href="/"
						className="text-white font-bold text-base relative hover:after:scale-x-100 after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[2px] after:bg-white after:scale-x-0 after:origin-right after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.6,0,0.4,1)]"
					>
						Dream scape
					</a>
				</div>

				<div className="menu-toggle relative w-12 h-6 cursor-pointer">
					<p
						id="menu-open"
						className="absolute text-white text-base font-light origin-top-left will-change-transform"
					>
						Menu
					</p>
					<p
						id="menu-close"
						className="absolute text-white text-base font-light origin-top-left will-change-transform opacity-0"
						style={{
							transform: "translateX(-5px) translateY(10px) rotate(5deg)",
						}}
					>
						Close
					</p>
				</div>
			</nav>

			{/* Menu Overlay */}
			<div
				className="menu-overlay fixed w-full h-screen bg-[#0e0e0e] z-10"
				style={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
			>
				<div
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
							<div className="menu-preview-img relative w-[45%] h-full overflow-hidden">
								<img
									src="/images/everest-footer.jpg"
									alt="menu-preview-img"
									className="absolute w-full h-full object-cover will-change-transform"
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
										href="/"
										data-img="/images/manaslu.jpg"
										className="inline-block will-change-transform text-white text-[3.5rem] leading-none tracking-[-0.02rem] font-light transition-colors duration-500 relative hover:after:scale-x-100 after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[2px] after:bg-white after:scale-x-0 after:origin-right after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.6,0,0.4,1)] after:z-[1]"
										style={{ transform: "translateY(120%)", opacity: 0.25 }}
									>
										Destination
									</a>
								</div>
								<div
									className="link pb-1.5"
									style={{
										clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
									}}
								>
									<a
										href="/"
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
										href="/"
										data-img="/images/everest.jpg"
										className="inline-block will-change-transform text-white text-[3.5rem] leading-none tracking-[-0.02rem] font-light transition-colors duration-500 relative hover:after:scale-x-100 after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[2px] after:bg-white after:scale-x-0 after:origin-right after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.6,0,0.4,1)] after:z-[1]"
										style={{ transform: "translateY(120%)", opacity: 0.25 }}
									>
										Photo gallery
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
										className="inline-block will-change-transform text-[#8f8f8f] text-base font-light transition-colors duration-500 hover:text-white relative hover:after:scale-x-100 after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[2px] after:bg-white after:scale-x-0 after:origin-right after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.6,0,0.4,1)] after:z-[1]"
										style={{ transform: "translateY(120%)", opacity: 0.25 }}
									>
										Facebook
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
										className="inline-block will-change-transform text-[#8f8f8f] text-base font-light transition-colors duration-500 hover:text-white relative hover:after:scale-x-100 after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[2px] after:bg-white after:scale-x-0 after:origin-right after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.6,0,0.4,1)] after:z-[1]"
										style={{ transform: "translateY(120%)", opacity: 0.25 }}
									>
										Instagram
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
										className="inline-block will-change-transform text-[#8f8f8f] text-base font-light transition-colors duration-500 hover:text-white relative hover:after:scale-x-100 after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[2px] after:bg-white after:scale-x-0 after:origin-right after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.6,0,0.4,1)] after:z-[1]"
										style={{ transform: "translateY(120%)", opacity: 0.25 }}
									>
										Twitter
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
										className="inline-block will-change-transform text-[#8f8f8f] text-base font-light transition-colors duration-500 hover:text-white relative hover:after:scale-x-100 after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[2px] after:bg-white after:scale-x-0 after:origin-right after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.6,0,0.4,1)] after:z-[1]"
										style={{ transform: "translateY(120%)", opacity: 0.25 }}
									>
										Youtube
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
								href="/"
								className="text-white text-base font-light relative hover:after:scale-x-100 after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[2px] after:bg-white after:scale-x-0 after:origin-right after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.6,0,0.4,1)] after:z-[1]"
							>
								Test
							</a>
							<a
								href="/"
								className="text-white text-base font-light relative hover:after:scale-x-100 after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[2px] after:bg-white after:scale-x-0 after:origin-right after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.6,0,0.4,1)] after:z-[1]"
							>
								Test 2
							</a>
						</div>
					</div>
				</div>
			</div>

			{/* Main Content Container */}
			<div className="container relative w-full h-screen will-change-transform origin-top-right">
				<section className="hero relative w-screen h-screen flex items-end p-10 overflow-hidden">
					<div className="hero-img absolute top-0 left-0 w-full h-screen -z-10">
						<Image
							src="/images/everest.jpg"
							alt="hero-img"
							fill
							className="object-cover"
						/>
					</div>
					<h1 className="text-white font-normal text-[7rem] leading-none tracking-[-0.2rem] w-4/5">
						Annapurna Himalayas Trekking
					</h1>
				</section>
			</div>
		</div>
	);
}
