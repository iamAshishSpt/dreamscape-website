// components/DestinationBadgeCard.tsx
import { Calendar, MountainIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { GiDuration } from "react-icons/gi";
import type { Destination } from "../types/destination";

export default function DestinationBadgeCard({
	title,
	duration,
	elevation,
	tourMonth,
	image,
	href = "/tour-details",
}: Destination) {
	return (
		<Link
			href={href}
			className="group relative overflow-hidden  bg-gray-100 ring-1 ring-black/5 transition-shadow hover:shadow-xl"
		>
			{/* image */}
			<div className="relative w-full h-full">
				<Image
					src={image}
					alt={title}
					fill
					priority={false}
					className="object-cover transition-transform duration-500 group-hover:scale-105"
					sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw"
				/>

				{/* subtle dark overlay for readability */}
				<div className="absolute inset-0 bg-black/20 transition-opacity duration-300 group-hover:opacity-30" />

				{/* bottom gradient like the screenshot */}
				<div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
			</div>

			{/* bottom-left text + green pill */}
			<div className="pointer-events-none absolute inset-x-0 bottom-0 p-4">
				<div className=" flex flex-row gap-1 transition-colors group-hover:text-white">
					<GiDuration size={20} />
					<text className="text-white text-sm font-semibold drop-shadow-sm">
						{duration}
					</text>
				</div>

				<h3 className="text-white text-xl font-semibold drop-shadow-sm transition-colors group-hover:text-white group-hover:underline">
					{title}
				</h3>

				<div className=" flex flex-row justify-between">
					<div className="flex flex-row gap-1 text-gray-300 transition-colors group-hover:text-white">
						<MountainIcon size={20} />
						<text className="text-sm font-semibold drop-shadow-sm">
							{elevation}
						</text>
					</div>
					<div className="flex flex-row gap-1 text-gray-300 transition-colors group-hover:text-white">
						<Calendar size={20} />
						<text className=" text-sm font-semibold drop-shadow-sm">
							{tourMonth}
						</text>
					</div>
				</div>
			</div>
		</Link>
	);
}
