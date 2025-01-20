"use client";
import { useScroll, useTransform } from "framer-motion";
import ImageCarousel from "./ImageCarousel";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

export const ParallaxScroll = ({ images, className }) => {
	const [selectedImageIndex, setSelectedImageIndex] = useState(null);
	const openCarousel = (index) => {
		setSelectedImageIndex(index);
	};
	const closeCarousel = () => {
		setSelectedImageIndex(null);
	};

	const gridRef = useRef(null);
	const { scrollYProgress } = useScroll({
		container: gridRef, // remove this if your container is not fixed height
		offset: ["start start", "end start"], // remove this if your container is not fixed height
	});

	const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
	const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
	const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

	const third = Math.ceil(images.length / 3);

	const firstPart = images.slice(0, third);
	const secondPart = images.slice(third, 2 * third);
	const thirdPart = images.slice(2 * third);

	return (
		<div
			className={cn(
				"h-[40rem] items-start overflow-y-auto scrollbar-hidden w-full",
				className
			)}
			ref={gridRef}>
			<div
				className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start container mx-auto gap-10 py-10 px-10"
				ref={gridRef}>
				<div className="grid gap-10">
					{firstPart.map((el, idx) => (
						<motion.div
							// Apply the translateY motion value here
							style={{ y: translateFirst }}
							key={"grid-1" + idx}
							onClick={() => openCarousel(idx)}>
							<Image
								src={el}
								className="h-80 w-full object-cover object-center rounded-lg gap-10 !m-0 !p-0 cursor-pointer"
								height="400"
								width="400"
								alt="thumbnail"
							/>
						</motion.div>
					))}
				</div>
				<div className="grid gap-10">
					{secondPart.map((el, idx) => (
						<motion.div
							style={{ y: translateSecond }}
							key={"grid-2" + idx}
							onClick={() => openCarousel(idx + third)}>
							<Image
								src={el}
								className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0 cursor-pointer"
								height="400"
								width="400"
								alt="thumbnail"
							/>
						</motion.div>
					))}
				</div>
				<div className="grid gap-10">
					{thirdPart.map((el, idx) => (
						<motion.div
							style={{ y: translateThird }}
							key={"grid-3" + idx}
							onClick={() => openCarousel(idx + 2 * third)}>
							<Image
								src={el}
								className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0 cursor-pointer"
								height="400"
								width="400"
								alt="thumbnail"
							/>
						</motion.div>
					))}
				</div>
			</div>
			{selectedImageIndex !== null && (
				<ImageCarousel
					images={images}
					currentIndex={selectedImageIndex}
					onClose={closeCarousel}
					onIndexChange={setSelectedImageIndex}
				/>
			)}
		</div>
	);
};
