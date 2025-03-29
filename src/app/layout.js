import { Roboto } from "next/font/google";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import "./globals.css";

const roboto = Roboto({
	weight: ["100", "300", "400", "500", "700", "900"],
	subsets: ["latin"],
});

export const metadata = {
	title: "Kurja Interior Space: Luxury Interior Designers in Bengaluru, India",
	description:
	  "Kurja Interior Space crafts bespoke luxury interior designs for residential and commercial spaces. Discover our innovative solutions, from modern homes to elegant offices. Contact us for a consultation.",
	keywords:
	  "luxury interior design, interior designers, residential interior design, commercial interior design, home decor, office design, bespoke interiors, space planning, modern interior design, Bengaluru interior design, Bengaluru interior designers, interior design company, interior design services",
	author: "Kurja Interior Space",
	robots: "index, follow",
	openGraph: {
	  title: "Kurja Interior Space: Transform Your Space with Luxury Design",
	  description:
		"Experience the art of luxury interior design with Kurja Interior Space. We specialize in creating stunning residential and commercial spaces tailored to your unique vision.",
	  url: "https://www.kurjainteriors.in",
	  siteName: "Kurja Interior Space",
	  images: [
		{
		  url: "/thumbnail.webp",
		  width: 800,
		  height: 600,
		  alt: "Kurja Interior Space Logo",
		},
	  ],
	  type: "website",
	},
	twitter: {
	  card: "summary_large_image",
	  title: "Kurja Interior Space: Elevating Spaces with Exquisite Design",
	  description:
		"Kurja Interior Space delivers exceptional interior design services for homes and businesses. Let us transform your space into a masterpiece.",
	  images: ["/thumbnail.webp"],
	},
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
