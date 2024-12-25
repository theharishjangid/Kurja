import ProjectView from "@/components/project"

const Project = async ({ params }) => {
    const projectName = params.project
    return (
        <main className="">
                    <ProjectView />
                </main>
    )
}

export default Project