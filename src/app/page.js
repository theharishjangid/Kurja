import HeroSection from "@/components/hero";
import Projects from "@/components/featuredprojects";
import Testimonials from "@/components/testimonials";

export default function Home() {
	return (
		<main className="">
			<HeroSection />
			<Projects />
			<Testimonials />
		</main>
	);
}
