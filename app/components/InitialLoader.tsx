"use client";

import { AnimatePresence, motion } from "framer-motion";
import type React from "react";
import { useState } from "react";
import LoadingScreen from "./LoadingScreen";

interface InitialLoaderProps {
	children: React.ReactNode;
}

export default function InitialLoader({ children }: InitialLoaderProps) {
	const [isLoading, setIsLoading] = useState(true);

	const handleLoadingComplete = () => {
		setIsLoading(false);
	};

	return (
		<AnimatePresence mode="wait">
			{isLoading ? (
				<motion.div
					key="loader"
					initial={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.5, ease: "easeInOut" }}
				>
					<LoadingScreen onComplete={handleLoadingComplete} />
				</motion.div>
			) : (
				<motion.div
					key="content"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5, ease: "easeInOut" }}
				>
					{children}
				</motion.div>
			)}
		</AnimatePresence>
	);
}
