"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ImagesSlider } from "../components/ui/images-slider";

const HeroSection = () => {
	const images = [
		"https://cdn-bnokp.nitrocdn.com/QNoeDwCprhACHQcnEmHgXDhDpbEOlRHH/assets/images/optimized/rev-6d59c08/www.decorilla.com/online-decorating/wp-content/uploads/2022/07/bohemian-interior-design-feature-2-scaled.jpeg",
		"https://media.designcafe.com/wp-content/uploads/2019/12/09102702/modern-living-room-design-with-tv-unit-designed-with-storage.jpg",
		"https://chiedesign.in/wp-content/uploads/2022/05/Luxury-Interior-Design-Living-Room-980x635.jpg",
		"https://cdn.shopify.com/s/files/1/0549/5806/3713/files/what_interior_design_style_uses_plants.jpg?v=1710239789",
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
				<motion.p className="font-medium text-2xl sm:text-3xl md:text-6xl text-center bg-clip-text text-white bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
					Get a Designer <br /> Space You'll Love
				</motion.p>
				<Link href="/portfolio">
					<button className="px-4 py-2 backdrop-blur-sm border bg-red-red/10 border-red-500/20 text-white mx-auto text-center rounded-md relative mt-4">
						<span>Explore More →</span>
						<div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-red-600 to-transparent" />
					</button>
				</Link>
			</motion.div>
		</ImagesSlider>
	);
};

export default HeroSection;
