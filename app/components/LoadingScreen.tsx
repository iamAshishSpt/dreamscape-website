"use client";

import React from "react";
import { useLoadingAnimation } from "../hooks/useLoadingAnimation";

interface LoadingScreenProps {
	onComplete?: () => void;
	showProgress?: boolean;
	className?: string;
}

export default function LoadingScreen({
	onComplete,
	showProgress = true,
	className = "",
}: LoadingScreenProps) {
	const { refs, loadingState } = useLoadingAnimation();

	// Call onComplete when loading is finished
	React.useEffect(() => {
		if (loadingState.isComplete && onComplete) {
			onComplete();
		}
	}, [loadingState.isComplete, onComplete]);

	return (
		<div className={`w-screen h-screen overflow-hidden ${className}`}>
			{/* Website Content */}
			<div
				ref={refs.websiteContent}
				className="absolute inset-0 flex justify-center items-center"
			>
				<div ref={refs.header} className="relative w-max h-max">
					<div className="flex flex-col items-center">
						<h1
							className="text-center relative top-20 text-8xl uppercase font-normal text-white mb-4 opacity-0"
							style={{
								animation: "fadeInUp 1s ease-out 0.5s forwards",
							}}
						>
							Nepal Travel
						</h1>
						<h2
							className="text-center relative top-20 text-4xl uppercase font-normal text-white/80 opacity-0"
							style={{
								animation: "fadeInUp 1s ease-out 1s forwards",
							}}
						>
							Your gateway to the Himalayas
						</h2>
					</div>
					<div className="absolute inset-0 w-full h-full"></div>
				</div>
			</div>

			{/* Loading Screen */}
			<div
				ref={refs.loadingScreen}
				className="loading-screen fixed inset-0 w-full h-full text-white pointer-events-none z-50"
			>
				{/* Subtle background pattern */}
				<div className="absolute inset-0 opacity-10">
					<div
						className="absolute inset-0"
						style={{
							backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
							backgroundSize: "60px 60px",
						}}
					/>
				</div>
				{/* Loader */}
				<div
					ref={refs.loader}
					className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[50px] flex bg-gray-600"
				>
					<div
						ref={refs.loader1}
						className="relative bg-white w-[200px] h-[50px]"
					></div>
					<div
						ref={refs.loader2}
						className="relative bg-white w-[100px] h-[50px]"
					></div>
				</div>

				{/* Progress Bar */}
				<div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 w-96 h-1 bg-white/20 rounded-full overflow-hidden">
					<div
						className="h-full bg-white rounded-full transition-all duration-300 ease-out"
						style={{
							width: "0%",
							animation: "progress 6s ease-out forwards",
						}}
					/>
				</div>

				{/* Loading Text */}
				<div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-white/60 font-montserrat text-sm uppercase tracking-widest">
					<span
						className="inline-block opacity-0"
						style={{
							animation: "fadeIn 0.5s ease-out 0.5s forwards",
						}}
					>
						Loading...
					</span>
				</div>

				{/* Counter */}
				<div
					ref={refs.countersWrap}
					className="fixed left-[50px] bottom-[50px] flex text-[100px] leading-[100px]"
				>
					{/* Hundreds */}
					<div
						ref={refs.counter1}
						className="digit relative -top-[15px] overflow-hidden h-[100px] w-[0.6em]"
					>
						<div className="nums will-change-transform">
							<div className="num block h-[100px]">0</div>
							<div className="num block h-[100px]">1</div>
						</div>
					</div>

					{/* Tens */}
					<div
						ref={refs.counter2}
						className="digit relative -top-[15px] overflow-hidden h-[100px] w-[0.6em]"
					>
						<div className="nums will-change-transform">
							<div className="num block h-[100px]">0</div>
							<div className="num block h-[100px]">1</div>
							<div className="num block h-[100px]">2</div>
							<div className="num block h-[100px]">3</div>
							<div className="num block h-[100px]">4</div>
							<div className="num block h-[100px]">5</div>
							<div className="num block h-[100px]">6</div>
							<div className="num block h-[100px]">7</div>
							<div className="num block h-[100px]">8</div>
							<div className="num block h-[100px]">9</div>
							<div className="num block h-[100px]">0</div>
						</div>
					</div>

					{/* Ones */}
					<div
						ref={refs.counter3}
						className="digit relative -top-[15px] overflow-hidden h-[100px] w-[0.6em]"
					>
						<div className="nums will-change-transform">
							<div className="num block h-[100px]">0</div>
							<div className="num block h-[100px]">1</div>
							<div className="num block h-[100px]">2</div>
							<div className="num block h-[100px]">3</div>
							<div className="num block h-[100px]">4</div>
							<div className="num block h-[100px]">5</div>
							<div className="num block h-[100px]">6</div>
							<div className="num block h-[100px]">7</div>
							<div className="num block h-[100px]">8</div>
							<div className="num block h-[100px]">9</div>
							<div className="num block h-[100px]">0</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
