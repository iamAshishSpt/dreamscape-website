import { Cinzel } from "next/font/google";
import Image from "next/image";

const cinzel = Cinzel({ subsets: ["latin"], weight: ["400", "600", "700"] });

// Replace these with your own image paths or remote URLs in /public or remote loader
const IMG = {
	leftBig: "/images/everest.jpg",
	leftSmall1: "/images/annapurna.jpg",
	leftSmall2: "/images/manaslu.jpg",
	midSmall: "/images/mountain.jpg",
	rightBig: "/images/MTEVEREST.jpeg",
	rightSmall1: "/images/everest-footer.jpg",
	rightSmall2: "/images/machhapuchhre.jpg",
};

/**
 * Drop this at app/reasons/page.tsx (App Router).
 * Tailwind required. Images should exist under /public/images or be remote URLs.
 */
export default function Page() {
	return (
		<main className="min-h-screen w-full bg-[#0f1b16] text-white">
			{/* vignette */}
			<div className="pointer-events-none fixed inset-0 [background:radial-gradient(60%_60%_at_50%_20%,rgba(255,255,255,0.06),transparent_60%)]" />

			<section className="relative mx-auto max-w-7xl px-6 pb-24 pt-20 lg:pt-24">
				{/* Section label */}
				<p className="mb-6 text-center text-sm tracking-[0.3em] text-amber-300/90">
					REASONS
				</p>

				{/* Title */}
				<h1
					className={`mx-auto max-w-4xl text-center ${cinzel.className} text-4xl sm:text-5xl md:text-7xl leading-tight tracking-wide`}
				>
					<span className="block">FIVE REASONS WHY</span>
					<span className="block">YOU SHOULD VISIT</span>
					<span className="block">MACHUPICCHU</span>
				</h1>

				{/* Main grid */}
				<div className="mt-14 grid grid-cols-1 gap-y-12 md:grid-cols-[1fr_auto_1fr] md:gap-x-10">
					{/* LEFT CLUSTER */}
					<div className="relative mx-auto w-full max-w-xl md:mx-0">
						<Diamond className="h-80 w-full md:h-[24rem]">
							<Image
								fill
								alt="Machu Picchu terraces"
								src={IMG.leftBig}
								className="object-cover"
							/>
						</Diamond>
						{/* overlap small diamonds */}
						<div className="pointer-events-none absolute -bottom-4 right-50 flex flex-row gap-6 md:right-10">
							<div className="w-36 md:w-40">
								<Diamond>
									<Image
										fill
										alt="Left small 1"
										src={IMG.leftSmall1}
										className="object-cover"
									/>
								</Diamond>
							</div>
							<div className="w-36 -translate-y-10 md:w-40">
								<Diamond>
									<Image
										fill
										alt="Left small 2"
										src={IMG.leftSmall2}
										className="object-cover"
									/>
								</Diamond>
							</div>
						</div>
					</div>

					{/* CENTER TIMELINE & COPY */}
					<div className="relative hidden md:block">
						<div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-amber-400/40" />
						<TimelineDot className="top-6" />
						<TimelineDot className="top-40" />
						<TimelineDot className="top-[18rem]" />
						<TimelineDot className="top-[28rem]" />
						<TimelineDot className="top-[36rem]" />
					</div>

					{/* RIGHT CLUSTER */}
					<div className="relative mx-auto w-full max-w-xl md:mx-0">
						<Diamond className="h-80 w-full md:h-[24rem]">
							<Image
								fill
								alt="Stone terraces"
								src={IMG.rightBig}
								className="object-cover"
							/>
						</Diamond>
						<div className="pointer-events-none absolute -bottom-4 left-6 flex gap-6 md:left-10">
							<div className="w-36 md:w-40">
								<Diamond>
									<Image
										fill
										alt="Right small 1"
										src={IMG.rightSmall1}
										className="object-cover"
									/>
								</Diamond>
							</div>
							<div className="w-36 translate-y-8 md:w-40">
								<Diamond>
									<Image
										fill
										alt="Right small 2"
										src={IMG.rightSmall2}
										className="object-cover"
									/>
								</Diamond>
							</div>
						</div>
					</div>

					{/* LEFT TEXT */}
					<div className="space-y-14 md:col-start-1 md:row-start-2">
						<Reason title="The Inca Trail.">
							This is one of the most popular ways to get to Machu Picchu,
							hiking over a long distance in the Andes Mountains, camping on the
							trail, and being able to see other Incan ruins.
						</Reason>
						<Reason title="The amazing view.">
							Even in pictures, but seeing the pictures does not compare to
							actually seeing it in person.
						</Reason>
					</div>

					{/* CENTER TEXT */}
					<div className="space-y-14 md:col-start-2 md:row-start-2 md:px-8">
						<Reason align="center" title="The Mystery.">
							A lot of people know that it was built by the Incas centuries ago
							in what is today Peru, however, most people don’t know that the
							site was not “discovered” until 1911.
						</Reason>
						<Reason align="center" title="Other sites en route.">
							Patallacta is one of the sites you pass by on the Inca Trail. This
							is a large Inca site located near Machu Picchu.
						</Reason>
						<Reason align="center" title="Being an explorer.">
							Cutting your way through a forest, exploring ancient ruins, and
							crossing deadly ancient rope bridges. Enjoy it!
						</Reason>
					</div>

					{/* RIGHT spacer to keep 3-col flow */}
					<div className="md:col-start-3" />

					{/* CTA */}
					<div className="md:col-span-3">
						<div className="mt-10 flex justify-center">
							<button className="rounded-xl border border-amber-400/70 px-8 py-3 text-sm tracking-[0.2em] text-amber-200 hover:bg-amber-400/10 focus:outline-none focus:ring-2 focus:ring-amber-400/60">
								BOOK TOUR
							</button>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}

function Reason({
	title,
	children,
	align = "left",
}: {
	title: string;
	children: React.ReactNode;
	align?: "left" | "center" | "right";
}) {
	const alignCls =
		align === "center"
			? "text-center"
			: align === "right"
				? "text-right"
				: "text-left";
	return (
		<div
			className={`relative z-10 mx-auto w-full max-w-sm text-xs leading-relaxed text-white/80 sm:text-[13px] ${alignCls}`}
		>
			{/* dot visually centered to the timeline on md+; on mobile it simply sits above block */}
			<span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-400 shadow-[0_0_0_4px_rgba(180,140,60,0.15)]" />
			<p className="mb-1 font-medium text-white/90">{title}</p>
			<p>{children}</p>
		</div>
	);
}

function Diamond({
	children,
	className = "",
}: {
	children: React.ReactNode;
	className?: string;
}) {
	return (
		<div
			className={`relative isolate aspect-square w-full overflow-hidden ${className}`}
		>
			<div className="absolute inset-0 [clip-path:polygon(50%_0,100%_50%,50%_100%,0_50%)]">
				{children}
			</div>
			<div className="pointer-events-none absolute inset-0 [clip-path:polygon(50%_0,100%_50%,50%_100%,0_50%)] ring-1 ring-white/10" />
		</div>
	);
}

function TimelineDot({ className = "" }: { className?: string }) {
	return (
		<span
			className={`absolute left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-amber-400 shadow-[0_0_0_4px_rgba(180,140,60,0.15)] ${className}`}
		/>
	);
}
