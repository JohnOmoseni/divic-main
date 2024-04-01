import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header, Footer } from "@/components";
import Image from "next/image";

import "./globals.css";
// import "./index.css";
import { Providers } from "./providers";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Divic Website",
	description: "Unlike any company you hired before",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className="relative">
				<Image
					width={1428}
					height={892}
					className="one"
					alt="one"
					src="/assests/hero-addon/1.png"
				/>
				<Image
					width={2400}
					height={2821}
					className="lights"
					alt="lights"
					src="/assests/hero-addon/Lights.png"
				/>
				<Image
					width={1634}
					height={1240}
					className="Galaxy"
					alt="Galaxy"
					src="/assests/hero-addon/Galaxy.png"
				/>
				<Image
					width={520}
					height={383}
					className="vector5"
					alt="vector5"
					src="/assests/hero-addon/Vector 5.png"
				/>
				<Image
					width={1420}
					height={1219.62646484375}
					className="vector4"
					alt="vector4"
					src="/assests/hero-addon/Vector 4.png"
				/>
				<Image
					width={819.5}
					height={858}
					className="intersect"
					alt="intersect"
					src="/assests/hero-addon/Intersect.png"
				/>

				<div className="wrapper relative max-w-[1200px] mx-auto">
					{/* <Header /> */}
					<Providers>{children}</Providers>
					<Footer />
				</div>
			</body>
		</html>
	);
}
