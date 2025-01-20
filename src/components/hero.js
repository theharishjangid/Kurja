"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ImagesSlider } from "../components/ui/images-slider";

const HeroSection = () => {
	const images = [
		"/Residential/Vaisnavi 2/1.webp",
		"/Commercial/Fizz Club House/5.webp",
		"/Residential/Abhishek/5.webp",
		"/Commercial/Manjhu/1.webp",
		"/Residential/Bimalji/11.webp",
		"/Commercial/Priynka Kolkata/3.webp",
		"/Residential/Bimalji/2.webp",
		"/Commercial/Realstate/1.webp",
		"/Residential/Swetha/2.webp",
		"/Commercial/Realstate/4.webp",
	];
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
				<motion.p className="font-medium mb-4 text-2xl sm:text-3xl md:text-6xl text-center bg-clip-text text-white bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
					Get a Designer <br /> Space You'll Love
				</motion.p>
				<Link href="/portfolio">
					<button
						aria-label="Portfolio"
						className="py-2 backdrop-blur-sm border bg-red-red/10 border-red-500/20 text-white mx-auto text-center rounded-md relative">
						<span className="px-4 py-2">Explore More →</span>
						<div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-red-600 to-transparent" />
					</button>
				</Link>
			</motion.div>
		</ImagesSlider>
	);
};

export default HeroSection;
