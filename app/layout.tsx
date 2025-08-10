import type { Metadata } from "next";
import { Geist, Geist_Mono, Jersey_25, Montserrat } from "next/font/google";
import { Toaster } from "sonner";
import InitialLoader from "./components/InitialLoader";
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

const montserrat = Montserrat({
	variable: "--font-montserrat",
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
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
			<head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="anonymous"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Absortile:wght@400;500;600;700&family=Baron+Neue:wght@400;500;600;700&display=swap"
					rel="stylesheet"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700;900&display=swap"
					rel="stylesheet"
				/>
			</head>
			<body
				className={`${geistSans.variable} ${geistMono.variable} ${jersey.variable} ${montserrat.variable} antialiased`}
			>
				<QueryProvider>
					<InitialLoader>{children}</InitialLoader>
				</QueryProvider>
				<Toaster position="top-center" richColors closeButton />
			</body>
		</html>
	);
}
