"use client";

import LoadingScreen from "../components/LoadingScreen";

export default function Loading() {
	return (
		<LoadingScreen
			showProgress={true}
			onComplete={() => {
				console.log("Loading animation completed!");
			}}
		/>
	);
}
