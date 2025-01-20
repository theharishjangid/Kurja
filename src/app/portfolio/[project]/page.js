import { portfolioData } from "@/constants";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";

const Project = async ({ params }) => {
	const { project } = await params;
	const projectName = decodeURIComponent(project);
	const projectDetails = portfolioData[projectName]
	return (
		<main className="">
			<h1 className="text-center mt-12 text-2xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r to-orange-300 via-red-400 from-red-600">
				{projectName}
			</h1>
			<p className="text-center mt-2 mb-12 font-light text-lg text-gray-500">{projectDetails.description}</p>
			<ParallaxScroll images={projectDetails.images} />
		</main>
	);
};

export default Project;
