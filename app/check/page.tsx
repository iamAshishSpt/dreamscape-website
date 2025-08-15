"use client";

import Link from "next/link";

export default function CheckPage() {
	return (
		<div className="min-h-screen bg-black text-white flex items-center justify-center">
			<div className="text-center max-w-2xl mx-auto px-6">
				<h1 className="text-4xl md:text-6xl font-light mb-6">Page Moved</h1>
				<p className="text-xl md:text-2xl text-gray-300 mb-8">
					This page has been moved to the home page. The beautiful Himalayas
					showcase is now your main landing page.
				</p>
				<Link
					href="/"
					className="inline-block px-8 py-4 bg-white/10 border border-white/30 text-white/90 font-medium uppercase tracking-wider text-lg hover:bg-white/20 transition-colors rounded-lg"
				>
					Go to Home Page
				</Link>
				<p className="text-sm text-gray-500 mt-6">
					If you need to access the old home page content, it's available at{" "}
					<Link href="/old-home" className="text-blue-400 hover:underline">
						/old-home
					</Link>
				</p>
			</div>
		</div>
	);
}
