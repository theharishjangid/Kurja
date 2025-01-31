"use client";
import { motion } from "framer-motion";
import { ImagesSlider } from "./ui/images-slider";

const AboutHero = () => {
	const images = ["/Commercial/Fire Office/1.webp"];
	return (
		<ImagesSlider
			className="h-72 sm:h-[30rem] md:h-[40rem]"
			images={images}
			direction="down">
			<motion.div
				initial={{
					opacity: 0,
					y: -80,
				}}
				animate={{
					opacity: 1,
					y: 0,
				}}
				transition={{
					duration: 0.6,
				}}
				className="z-50 flex flex-col justify-center items-center">
					<motion.p className="mb-2 font-light uppercase text-sm sm:text-md md:text-lg text-center text-gray-300">
					Our Story
				</motion.p>
				<motion.p className="font-medium text-2xl sm:text-3xl md:text-6xl text-center bg-clip-text text-white bg-gradient-to-b from-neutral-50 to-neutral-400">
					Concept To Completion
				</motion.p>
			</motion.div>
		</ImagesSlider>
	);
};

export default AboutHero;
