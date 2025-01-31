import Link from "next/link";
import HeroSection from "@/components/hero";
import Projects from "@/components/featuredprojects";
import StrategySection from "@/components/strategies";
import AboutSection from "@/components/about";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { testimonials } from "@/constants";

export default function Home() {
	return (
		<main className="flex flex-col mb-4 md:mb-8">
			<HeroSection />
			<p className="pt-10 font-light uppercase text-xs sm:text-sm md:text-md text-center">
				Featured Projects
			</p>
			<h1 className="self-center text-2xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r to-orange-300 via-red-400 from-red-600 inline-block">
				Where Vision Meets Reality
			</h1>
			<Projects />
			<StrategySection />
			<AboutSection />
			<div className="container mx-auto">
				<div className="m-4 md:m-0 p-4 sm:p-8 md:p-12 text-center flex flex-col items-center bg-neutral-100 rounded-xl">
					<h2 className="lg:w-4/5 text-xl md:text-3xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-green-800 via-green-600 to-lime-500 inline-block">
						Hire Kurja today and take the first step towards
						building your dream home!
					</h2>
					<p className="mb-4 lg:w-3/5 mt-2 md:mt-4 text-gray-600">
						{
							"With our seamless process, expert guidance and a portfolio of stunning interior designs, your dream space is just a step away. Contact us now to bring your vision to life!"
						}
					</p>
					<Link href="/contact">
						<button
							aria-label="Contact"
							className="px-8 py-2 bg-gradient-to-r to-orange-300 via-red-400 from-red-600 text-white text-sm rounded-md font-semibold hover:bg-red-600 hover:shadow-lg">
							Contact Us
						</button>
					</Link>
				</div>
			</div>
			<p className="pt-10 font-light uppercase text-xs sm:text-sm md:text-md text-center">
				Testimonials
			</p>
			<h1 className="self-center text-2xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r to-orange-300 via-red-400 from-red-600 inline-block">
				Where Design Meets Delight
			</h1>
			<AnimatedTestimonials testimonials={testimonials} />
		</main>
	);
}
