import Image from "next/image";

export default function StrategySection() {
	return (
		<section className="bg-neutral-100">
			<div className="container mx-auto flex flex-col items-center py-10 md:py-14">
				<p className="font-light uppercase text-xs sm:text-sm md:text-md text-center ">
					Blueprint for Success
				</p>
				<h1 className="text-2xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r to-orange-300 via-red-400 from-red-600 inline-block">
					Where Process Meets Perfection
				</h1>

				<div className="mt-10 mx-4 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-12">
					<div className="text-center space-y-4">
						<div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-neutral-200 border border-neutral-300">
							<Image
								src="/search.webp"
								alt="Logo"
								width={50}
								height={50}
								className="w-12 h-12 text-amber-600"
							/>
						</div>
						<h2 className="text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-green-800 via-green-600 to-lime-500">
							Discover
						</h2>
						<p className="text-gray-600">
							Collaborating closely with you to understand your
							vision and crafting a design blueprint that captures
							your personality and lifestyle.
						</p>
					</div>
					<div className="text-center space-y-4">
						<div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-neutral-200 border border-neutral-300">
							<Image
								src="/design.webp"
								alt="Logo"
								width={50}
								height={50}
								className="w-12 h-12 text-amber-600"
							/>
						</div>
						<h2 className="text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-green-800 via-green-600 to-lime-500">
							Design
						</h2>
						<p className="text-gray-600 leading-relaxed">
							Bringing concepts to life with meticulous attention
							to detail, ensuring every element aligns with the
							aesthetics and functionality of your space.
						</p>
					</div>
					<div className="text-center space-y-4">
						<div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-neutral-200 border border-neutral-300">
							<Image
								src="/deliver.webp"
								alt="Logo"
								width={50}
								height={50}
								className="w-12 h-12 text-amber-600"
							/>
						</div>
						<h2 className="text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-green-800 via-green-600 to-lime-500">
							Deliver
						</h2>
						<p className="text-gray-600 leading-relaxed">
							Refining and perfecting designs to achieve timeless
							beauty and unparalleled sophistication tailored to
							your needs.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
