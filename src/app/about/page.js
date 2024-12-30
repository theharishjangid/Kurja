import AboutHero from "@/components/aboutHero";
import CoreTeam from "@/components/ui/expandable-card-demo-grid";
import DesignTeam from "@/components/ui/expandable-card-demo-standard";

const About = () => {
  return (
    <main className="flex flex-col mb-4 md:mb-8">
      <AboutHero />
      <h1 className="self-center pt-10 text-2xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r to-yellow-600 via-orange-300 from-red-800 inline-block">
        Your Interior Specialists
			</h1>
      <h2 className="text-center px-2 pt-2 font-light text-sm md:text-base lg:text-lg text-transparent bg-clip-text bg-gradient-to-r from-green-800 via-green-600 to-lime-500 inline-block">Our Design Team brings your needs, passions and vision to life, creating homes you&apos;ll truly love.</h2>
      <CoreTeam />
      <DesignTeam />
    </main>
  )
}

export default About