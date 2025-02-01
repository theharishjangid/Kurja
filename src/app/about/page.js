import AboutHero from "@/components/aboutHero";
import CoreTeam from "@/components/ui/expandable-card-demo-grid";
import DesignTeam from "@/components/ui/expandable-card-demo-standard";
import { InfiniteMovingLogos } from "@/components/ui/infinite-moving-logos";
import JourneySection from "@/components/journey";
import { Counter } from "@/components/ui/counter-animation";

const About = () => {
	return (
		<main className="flex flex-col mb-4 md:mb-8">
			<AboutHero />
			<div className="w-full bg-neutral-200 sm:py-2 md:py-4">
				<InfiniteMovingLogos direction="left" speed="normal" />
			</div>
			<JourneySection />
			<div className="bg-neutral-100">
				<div className="grid grid-cols-2 md:grid-cols-4 gap-8 my-10 md:my-16 text-center">
					<div className="space-y-2">
						<Counter end={8} />
						<p className="text-sm md:text-base text-transparent bg-clip-text bg-gradient-to-r from-green-800 via-green-600 to-lime-500 font-medium uppercase tracking-wider">
							Years Legacy
						</p>
					</div>

					<div className="space-y-2">
						<Counter end={20} />
						<p className="text-sm md:text-base text-transparent bg-clip-text bg-gradient-to-r from-green-800 via-green-600 to-lime-500 font-medium uppercase tracking-wider">
							Team Members
						</p>
					</div>

					<div className="space-y-2">
						<Counter end={270} />
						<p className="text-sm md:text-base text-transparent bg-clip-text bg-gradient-to-r from-green-800 via-green-600 to-lime-500 font-medium uppercase tracking-wider">
							Finished Projects
						</p>
					</div>

					<div className="space-y-2">
						<Counter end={250} />
						<p className="text-sm md:text-base text-transparent bg-clip-text bg-gradient-to-r from-green-800 via-green-600 to-lime-500 font-medium uppercase tracking-wider">
							Happy Clients
						</p>
					</div>
				</div>
			</div>
			<p className="pt-10 font-light uppercase text-xs sm:text-sm md:text-md text-center ">
				Meet Our Team
			</p>
			<h1 className="self-center text-2xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r to-orange-300 via-red-400 from-red-600 inline-block">
				Where Design Meets Mastery
			</h1>
			<h2 className="text-center px-2 py-4 font-light text-sm md:text-base lg:text-lg text-gray-600">
				Our Design Team brings your needs, passions and vision to life,
				creating homes you'll truly love.
			</h2>
			<CoreTeam />
			<DesignTeam />
		</main>
	);
};

export default About;
