"use client";
import Link from "next/link";
import { LayoutGrid } from "./ui/layout-grid";

export default function Projects() {
	return (
		<div className="h-screen min-h-96 w-full">
			<LayoutGrid cards={cards} />
		</div>
	);
}

const SkeletonOne = () => {
	return (
		<div>
			<p className="font-bold md:text-4xl text-xl text-white">
				Forest Adventure
			</p>
			<p className="font-normal text-base text-white"></p>
			<p className="font-normal text-base my-4 max-w-lg text-neutral-200">
				A serene and tranquil retreat, this house in the woods offers a
				peaceful escape from the hustle and bustle of city life.
			</p>
			<Link href="/portfolio/Forest Adventure">
				<button
					aria-label="Portfolio"
					className="px-8 py-2 bg-gradient-to-r to-orange-300 via-red-400 from-red-600 text-white text-sm rounded-md font-semibold hover:bg-red-600 hover:shadow-lg">
					View More
				</button>
			</Link>
		</div>
	);
};

const SkeletonTwo = () => {
	return (
		<div>
			<p className="font-bold md:text-4xl text-xl text-white">
				Valley of life
			</p>
			<p className="font-normal text-base text-white"></p>
			<p className="font-normal text-base my-4 max-w-lg text-neutral-200">
				Perched high above the world, this house offers breathtaking
				views and a unique living experience. It's a place where the sky
				meets home, and tranquility is a way of life.
			</p>
			<Link href="/portfolio/Valley of life">
				<button
					aria-label="Portfolio"
					className="px-8 py-2 bg-gradient-to-r to-orange-300 via-red-400 from-red-600 text-white text-sm rounded-md font-semibold hover:bg-red-600 hover:shadow-lg">
					View More
				</button>
			</Link>
		</div>
	);
};
const SkeletonThree = () => {
	return (
		<div>
			<p className="font-bold md:text-4xl text-xl text-white">
				Priynka Kolkata
			</p>
			<p className="font-normal text-base text-white"></p>
			<p className="font-normal text-base my-4 max-w-lg text-neutral-200">
				A house surrounded by greenery and nature's beauty. It's the
				perfect place to relax, unwind, and enjoy life.
			</p>
			<Link href="/portfolio/Priynka Kolkata">
				<button
					aria-label="Portfolio"
					className="px-8 py-2 bg-gradient-to-r to-orange-300 via-red-400 from-red-600 text-white text-sm rounded-md font-semibold hover:bg-red-600 hover:shadow-lg">
					View More
				</button>
			</Link>
		</div>
	);
};
const SkeletonFour = () => {
	return (
		<div>
			<p className="font-bold md:text-4xl text-xl text-white">
				Fire Office
			</p>
			<p className="font-normal text-base text-white"></p>
			<p className="font-normal text-base my-4 max-w-lg text-neutral-200">
				A house by the river is a place of peace and tranquility. It's
				the perfect place to relax, unwind, and enjoy life.
			</p>
			<Link href="/portfolio/Fire Office">
				<button
					aria-label="Portfolio"
					className="px-8 py-2 bg-gradient-to-r to-orange-300 via-red-400 from-red-600 text-white text-sm rounded-md font-semibold hover:bg-red-600 hover:shadow-lg">
					View More
				</button>
			</Link>
		</div>
	);
};

const cards = [
	{
		id: 1,
		content: <SkeletonOne />,
		className: "md:col-span-2 cursor-pointer",
		thumbnail:
			"https://cdn-bnokp.nitrocdn.com/QNoeDwCprhACHQcnEmHgXDhDpbEOlRHH/assets/images/optimized/rev-6d59c08/www.decorilla.com/online-decorating/wp-content/uploads/2022/07/bohemian-interior-design-feature-2-scaled.jpeg",
	},
	{
		id: 2,
		content: <SkeletonTwo />,
		className: "col-span-1 cursor-pointer",
		thumbnail:
			"https://media.designcafe.com/wp-content/uploads/2019/12/09102702/modern-living-room-design-with-tv-unit-designed-with-storage.jpg",
	},
	{
		id: 3,
		content: <SkeletonThree />,
		className: "col-span-1 cursor-pointer",
		thumbnail: "/Commercial/Priynka Kolkata/1.png",
	},
	{
		id: 4,
		content: <SkeletonFour />,
		className: "md:col-span-2 cursor-pointer",
		thumbnail: "/Commercial/Fire Office/1.png",
	},
];
