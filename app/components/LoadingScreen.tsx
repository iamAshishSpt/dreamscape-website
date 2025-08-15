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
