import Link from "next/link";
import Image from "next/image";

export default function AboutSection() {
	return (
		<section className="container mx-auto px-4 py-10 md:py-16">
			<div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
				<div className="relative m-4">
					<div className="absolute inset-0 rounded-xl border-2 border-red-600 transform translate-x-4 translate-y-4 -z-10" />
					<div className="relative bg-black/5 rounded-xl overflow-hidden shadow-lg">
						<Image
							src="/about.webp"
							alt="Luxury living website displayed on laptop"
							width={500}
							height={500}
							className="w-full h-1/2"
						/>
					</div>
				</div>

				<div className="space-y-6 flex flex-col items-center">
					<h1 className="text-center text-2xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r to-yellow-600 via-orange-300 from-red-800 inline-block">
						Where Elegance Meets Individuality
					</h1>

					<p className="text-gray-500">
						At{" "}
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-green-800 via-green-600 to-lime-500">
							Kurja Interior Space
						</span>
						, we believe that success lies in more than just
						aesthetics — it's about creating spaces that captivate
						and inspire, resonating deeply with your unique vision
						and lifestyle. With a passion for innovation and an eye
						for detail, we specialize in transforming visions into
						breathtaking realities. Our team is dedicated to
						curating bespoke designs that elevate every space,
						leaving a lasting impression of sophistication and
						style. Let us help you redefine what it means to truly
						feel at home.
					</p>

					<Link href="/about">
						<button
							aria-label="About"
							className="mt-6 px-8 py-2 bg-gradient-to-r to-orange-300 via-red-400 from-red-600 text-white text-sm rounded-md font-semibold hover:bg-red-600 hover:shadow-lg">
							More About Us
						</button>
					</Link>
				</div>
			</div>
		</section>
	);
}
