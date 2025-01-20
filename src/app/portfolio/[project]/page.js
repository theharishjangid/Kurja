import Link from "next/link";
import { portfolioData } from "@/constants";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";
import { IoArrowBack } from "react-icons/io5";

const Project = async ({ params }) => {
	const { project } = await params;
	const projectName = decodeURIComponent(project);
	const projectDetails = portfolioData[projectName];
	return (
		<main className="container mx-auto">
			<Link
				href="/portfolio"
				className="mt-6 mx-2 cursor-pointer group inline-flex text-sm sm:text-base items-center hover:text-red-600 text-transparent bg-clip-text bg-gradient-to-r from-green-700 via-green-600 to-lime-500">
				<IoArrowBack className="text-green-800 group-hover:text-red-600 mr-2 h-5 w-5" />
				Back to Portfolio
			</Link>
			<h1 className="text-center my-4 text-2xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r to-orange-300 via-red-400 from-red-600">
				{projectName}
			</h1>
			<p className="text-center mb-12 mx-2 font-light sm:text-lg text-gray-500">
				{projectDetails.description}
			</p>
			<ParallaxScroll images={projectDetails.images} />
		</main>
	);
};

export default Project;
