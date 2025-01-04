import ProjectView from "@/components/project";

const Project = async ({ params }) => {
	const { project } = await params;
	const projectName = decodeURIComponent(project);
	return (
		<main className="">
			<h1 className="text-center my-12 text-2xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r to-orange-300 via-red-400 from-red-600">
				{projectName}
			</h1>
			<ProjectView />
		</main>
	);
};

export default Project;