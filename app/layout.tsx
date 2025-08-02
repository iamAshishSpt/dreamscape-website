import type { Metadata } from "next";
import { Geist, Geist_Mono, Jersey_25 } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";
import QueryProvider from "./providers/QueryProviders";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

const jersey = Jersey_25({
	variable: "--font-jersey",
	subsets: ["latin"],
	weight: "400",
});

export const metadata: Metadata = {
	title: "Nepal Travel & Tours - Discover the Himalayas",
	description:
		"Experience the magic of Nepal with our expert-guided tours. Explore Mount Everest, Annapurna, and more with premium accommodations and local guides.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} ${jersey.variable} antialiased`}
			>
				<QueryProvider>{children}</QueryProvider>
				<Toaster position="top-center" richColors closeButton />
			</body>
		</html>
	);
}
