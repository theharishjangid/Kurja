import Image from "next/image";

export default function JourneySection() {
	return (
		<section className="container mx-auto px-4 py-10 md:py-16 flex flex-col">
			<h1 className="mb-7 lg:mb-10 self-center text-2xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r to-orange-300 via-red-400 from-red-600">
			Where Innovation Meets Legacy
			</h1>
			<div className="grid md:grid-cols-2 gap-8 items-center">
				<div className="space-y-8 flex flex-col mx-4">
					<div className="space-y-6">
						<p className="text-sm md:text-base lg:text-lg text-gray-600">
							At{" "}
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-green-800 via-green-600 to-lime-500">
								Kurja Interior Space
							</span>
							, our story is one of passion, creativity, and an
							unwavering commitment to excellence. From humble
							beginnings to becoming a trusted name in interior
							design marketing, our journey has been defined by a
							vision to transform how luxury interiors connect
							with discerning audiences. <br />
							Each milestone we've achieved has been driven by a
							simple goal: to empower interior designers and
							brands to showcase their artistry and create lasting
							impressions. By combining innovative strategies with
							a deep understanding of design aesthetics, we've
							redefined how beauty meets functionality in the
							digital space.
							<br />
							As we continue to grow, we remain dedicated to
							pushing boundaries, elevating brands, and crafting
							stories that resonate. At Kurja, your journey to
							success is part of our story, and we're here to make
							it extraordinary.
						</p>
					</div>
				</div>

				<div className="relative mx-4">
					<Image
						src="/office.jpg"
						width={800}
						height={600}
						alt="Interior Design Showcase"
						className="rounded-lg shadow-xl"
					/>
					<div className="absolute -top-4 -left-4 border-2 border-amber-700 rounded-xl w-full h-full -z-10" />
				</div>
			</div>
		</section>
	);
}
