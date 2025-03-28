"use client";
import Link from "next/link";
import { LayoutGrid } from "./ui/layout-grid";
import { portfolioData } from "@/constants";

const Skeleton = ({ featured }) => {
	return (
		<div>
			<p className="font-bold md:text-4xl text-xl text-white">
				{featured.title}
			</p>
			<p className="font-normal text-base text-white"></p>
			<p className="font-normal text-base my-4 max-w-lg text-neutral-200">
				{featured.description}
			</p>
			<Link href={`/portfolio/${featured.title}`}>
				<button
					aria-label="Portfolio"
					className="px-8 py-2 bg-gradient-to-r to-orange-300 via-red-400 from-red-600 text-white text-sm rounded-md font-semibold hover:bg-red-600 hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out">
					View More
				</button>
			</Link>
		</div>
	);
};

const cards = [
	{
		id: 1,
		content: <Skeleton featured={portfolioData["Abhishek"]} />,
		className: "md:col-span-2 cursor-pointer",
		thumbnail: "/Residential/Abhishek/6.webp",
	},
	{
		id: 2,
		content: <Skeleton featured={portfolioData["Manjhunath"]} />,
		className: "col-span-1 cursor-pointer",
		thumbnail: "/Residential/Manjhunath/8.webp",
	},
	{
		id: 3,
		content: <Skeleton featured={portfolioData["Priynka Kolkata"]} />,
		className: "col-span-1 cursor-pointer",
		thumbnail: "/Commercial/Priynka Kolkata/1.webp",
	},
	{
		id: 4,
		content: <Skeleton featured={portfolioData["Fire Office"]} />,
		className: "md:col-span-2 cursor-pointer",
		thumbnail: "/Commercial/Fire Office/1.webp",
	},
];

export default function Projects() {
	return (
		<div className="h-screen min-h-96 w-full">
			<LayoutGrid cards={cards} />
		</div>
	);
}
