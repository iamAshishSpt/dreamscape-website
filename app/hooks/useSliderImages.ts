import type { SliderImage } from "@/lib/types";
import { useQuery } from "@tanstack/react-query";

export const useSliderImages = () => {
	return useQuery<SliderImage[]>({
		queryKey: ["sliderImages"],
		queryFn: async () => {
			const res = await fetch("/api/slider");
			if (!res.ok) throw new Error("Failed to fetch images");
			return res.json();
		},
	});
};
