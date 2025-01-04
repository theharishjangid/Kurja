import { Roboto } from "next/font/google";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import "./globals.css";

const roboto = Roboto({
	weight: ["100", "300", "400", "500", "700", "900"],
	subsets: ["latin"],
});

export const metadata = {
	title: "Kurja Interiors",
	description:
		"Kurja Interiors specializes in creating stunning and functional interior designs for residential and commercial spaces. Explore our bespoke solutions tailored to elevate your lifestyle and work environment.",
	keywords:
		"Kurja Interiors, interior design, residential interiors, commercial interiors, bespoke interiors, space planning, home decor, office decor",
	author: "Kurja Interiors",
	robots: "index, follow",
	"og:title": "Kurja Interiors",
	"og:description":
		"Discover beautiful and functional interior designs tailored to your needs. Kurja Interiors offers customized solutions for homes and offices.",
	"og:image": "/logo.webp",
	"og:url": "https://kurjainteriors.com",
	"og:type": "website",
	"twitter:card": "summary_large_image",
	"twitter:title": "Kurja Interiors",
	"twitter:description":
		"Kurja Interiors crafts unique interior designs for residential and commercial spaces. Let us bring your vision to life.",
	"twitter:image":
		"/logo.webp",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${roboto.className}`}>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
