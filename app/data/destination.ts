// data/destinations.ts
import type { Destination } from "../types/destination";

// (optional) use static imports to catch filename typos at build time
// import Manaslu from "@/public/images/manaslu.jpg";
// ...

export const DESTINATIONS: Destination[] = [
	{
		title: "Manaslu",
		duration: "25-30 days",
		elevation: "8868 m",
		tourMonth: "Oct - Nov",
		image: "/images/manaslu.jpg",
	},
	{
		title: "Everest Base Camp",
		duration: "12-14 days",
		elevation: "5364 m",
		tourMonth: "Mar - May",
		image: "/images/everest.jpg",
	},
	{
		title: "Annapurna Circuit",
		duration: "14-20 days",
		elevation: "5416 m",
		tourMonth: "Sep - Nov",
		image: "/images/annapurna.jpg",
	},
	{
		title: "Macchapuchare",
		duration: "7-10 days",
		elevation: "4984 m",
		tourMonth: "Apr - May",
		image: "/images/machhapuchhre.jpg",
	},
];
