// components/loadingAnimation.ts
"use client";
import gsap from "gsap";

interface LoadingElements {
	loadingScreen: HTMLElement;
	loader: HTMLElement;
	loader1: HTMLElement;
	loader2: HTMLElement;
	counter1: HTMLElement; // hundreds
	counter2: HTMLElement; // tens
	counter3: HTMLElement; // ones
	countersWrap: HTMLElement; // wrapper around all three digits
}

interface LoadingState {
	isLoading: boolean;
	isComplete: boolean;
	progress: number;
}
type SetLoadingState = React.Dispatch<React.SetStateAction<LoadingState>>;

/** Add a tween that makes a digit column land on targetIndex exactly at endAt (seconds). */
function addCounterTweenAt(
	tl: gsap.core.Timeline,
	counterEl: HTMLElement,
	targetIndex: number,
	startAt: number,
	endAt: number,
	rowHeightFallback = 100,
) {
	const nums = counterEl.querySelector<HTMLElement>(".nums");
	const rows = counterEl.querySelectorAll<HTMLElement>(".num");
	if (!nums || !rows.length) return tl;

	const rowH = rows[0].clientHeight || rowHeightFallback;
	const maxIndex = rows.length - 1;
	const clamped = Math.max(0, Math.min(targetIndex, maxIndex));
	const y = -clamped * rowH;
	const duration = Math.max(0.001, endAt - startAt);

	tl.add(
		gsap.timeline().set(nums, { y: 0, force3D: true }, 0).to(nums, {
			y,
			duration,
			ease: "power2.out", // no bounce/overshoot
			overwrite: "auto",
		}),
		startAt,
	);

	return tl;
}

export function runLoadingAnimation(
	elements: LoadingElements,
	setLoadingState: SetLoadingState,
) {
	console.log("runLoadingAnimation called with elements:", elements);

	const {
		loadingScreen,
		loader,
		loader1,
		loader2,
		counter1, // hundreds
		counter2, // tens
		counter3, // ones
		countersWrap,
	} = elements;

	console.log("Destructured elements:", {
		loadingScreen: !!loadingScreen,
		loader: !!loader,
		loader1: !!loader1,
		loader2: !!loader2,
		counter1: !!counter1,
		counter2: !!counter2,
		counter3: !!counter3,
		countersWrap: !!countersWrap,
	});

	// master timing
	const END = 6; // when counters & loader1 finish together
	const LIFT = 0; // we're NOT lifting digits; keep at 0 to skip
	const EXIT = 0.05; // fade wrapper a hair after END

	console.log("Starting GSAP animation...");
	const ctx = gsap.context(() => {
		const master = gsap.timeline({ defaults: { ease: "power2.out" } });
		console.log("GSAP timeline created");

		// ----- LOADER BARS -----
		master.from(loader1, { width: 0, duration: END }, 0); // 0 -> END
		master.from(loader2, { width: 0, duration: 2 }, 1.9); // 1.9 -> 3.9

		// ----- COUNTERS (land at END) -----
		// Ones (to trailing 0 at index 10)
		addCounterTweenAt(master, counter3, 10, 0.0, END);
		// Tens (to trailing 0 at index 10). Start slightly later if you want a tiny offset.
		addCounterTweenAt(master, counter2, 10, 0.2, END);
		// Hundreds (to 1). Starts late so it clicks to 1 near the end.
		addCounterTweenAt(master, counter1, 1, 4.0, END);

		// ----- OPTIONAL LIFT (disabled) -----
		if (LIFT > 0) {
			master.to(
				".digit",
				{
					top: "-150px",
					duration: LIFT,
					ease: "power3.out",
				},
				END,
			);
		}

		// ----- HIDE WHOLE COUNTER WRAPPER TOGETHER -----
		master.to(
			countersWrap,
			{
				y: -40,
				opacity: 0,
				duration: 0.45,
				ease: "power1.in",
				onComplete: () => {
					countersWrap.style.display = "none";
				},
			},
			END + EXIT,
		);

		// ----- CONTINUE LOADER EXIT ANIMS AFTER COUNTERS GONE -----
		master.to(loader, { background: "none", duration: 0.1 }, END);
		master.to(loader1, { rotate: 90, y: -50, duration: 0.5 }, END);
		master.to(loader2, { x: -75, y: 75, duration: 0.5 }, END);
		master.to(loader, { scale: 40, duration: 1 }, END + 1);
		master.to(loader, { rotate: 45, y: 500, x: 2000, duration: 1 }, END + 1);

		// Fade the whole loading screen out
		master.to(
			loadingScreen,
			{
				opacity: 0,
				duration: 0.5,
				ease: "power1.inOut",
				onComplete: () => {
					console.log("Loading animation completed, setting state...");
					setLoadingState((prev) => ({
						...prev,
						isLoading: false,
						isComplete: true,
					}));
				},
			},
			END + 1.5,
		);

		console.log("GSAP animation timeline built");
	}, loadingScreen);

	return () => ctx.revert();
}
