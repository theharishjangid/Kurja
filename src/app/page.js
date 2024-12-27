import HeroSection from "@/components/hero";
import Projects from "@/components/featuredprojects";
import Testimonials from "@/components/testimonials";

export default function Home() {
	return (
		<main className="">
			<HeroSection />
			<h1 className="pt-10 text-2xl md:text-4xl text-center">Where Vision Meets Reality</h1>
			<Projects />
			<div className="my-4 md:my-8 container mx-auto">
			<div className="m-4 md:m-0 p-4 sm:p-8 md:p-12 text-center flex flex-col items-center bg-red-50 rounded-2xl md:rounded-3xl">
				<h2 className="lg:w-4/5 text-2xl md:text-3xl lg:text-4xl">
					Hire Kurja today and take the first step towards building
					your dream home!
				</h2>
				<p className="mb-4 lg:w-3/5 text-sm mt-2 md:mt-4 font-light">
					{
						"With our seamless process,expert guidance and a portfolio of stunning interior designs, your dream space is just a step away. Contact us now to bring your vision to life!"
					}
				</p>
				<button className="px-8 py-2 bg-red-500 text-white text-sm rounded-md font-semibold hover:bg-red-600 hover:shadow-lg">
					Contact Us
				</button>
			</div>
		</div>
			<h1 className="pt-10 text-2xl md:text-4xl text-center">Where Design Meets Delight</h1>
			<Testimonials />
		</main>
	);
}
