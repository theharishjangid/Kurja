"use client";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getInitials } from "@/lib/utils";

export const AnimatedTestimonials = ({ testimonials, autoplay = false }) => {
	const [active, setActive] = useState(0);

	const handleNext = () => {
		setActive((prev) => (prev + 1) % testimonials.length);
	};

	const handlePrev = () => {
		setActive(
			(prev) => (prev - 1 + testimonials.length) % testimonials.length
		);
	};

	const isActive = (index) => {
		return index === active;
	};

	useEffect(() => {
		if (autoplay) {
			const interval = setInterval(handleNext, 5000);
			return () => clearInterval(interval);
		}
	}, [autoplay]);

	const randomRotateY = () => {
		return Math.floor(Math.random() * 21) - 10;
	};
	return (
		<div className="max-w-sm md:max-w-4xl mx-auto antialiased px-4 md:px-8 lg:px-12 py-10">
			<div className="relative grid grid-cols-1 md:grid-cols-2 gap:10 md:gap-20">
				<div>
					<div className="relative h-80 w-full">
						<AnimatePresence>
							{testimonials.map((testimonial, index) => (
								<motion.div
									key={testimonial.src}
									initial={{
										opacity: 0,
										scale: 0.9,
										z: -100,
										rotate: randomRotateY(),
									}}
									animate={{
										opacity: isActive(index) ? 1 : 0.7,
										scale: isActive(index) ? 1 : 0.95,
										z: isActive(index) ? 0 : -100,
										rotate: isActive(index)
											? 0
											: randomRotateY(),
										zIndex: isActive(index)
											? 100
											: testimonials.length + 2 - index,
										y: isActive(index) ? [0, -80, 0] : 0,
									}}
									exit={{
										opacity: 0,
										scale: 0.9,
										z: 100,
										rotate: randomRotateY(),
									}}
									transition={{
										duration: 0.4,
										ease: "easeInOut",
									}}
									className="absolute inset-0 origin-bottom">
									{testimonial.src ? (
										<Image
											src={testimonial.src}
											alt={testimonial.name}
											width={400}
											height={400}
											draggable={false}
											className="h-full w-full rounded-xl object-cover object-center"
										/>
									) : (
										<div className="h-full w-full rounded-xl bg-gradient-to-r to-orange-300 via-red-400 from-red-600 flex items-center justify-center text-white font-bold text-5xl">
											{getInitials(testimonial.name)}
										</div>
									)}
								</motion.div>
							))}
						</AnimatePresence>
					</div>
				</div>
				<div className="flex justify-between flex-col py-4 items-center md:items-start">
					<motion.div
						key={active}
						initial={{
							y: 20,
							opacity: 0,
						}}
						animate={{
							y: 0,
							opacity: 1,
						}}
						exit={{
							y: -20,
							opacity: 0,
						}}
						transition={{
							duration: 0.2,
							ease: "easeInOut",
						}}>
						<h2 className="text-center md:text-start text-2xl text-transparent bg-clip-text bg-gradient-to-r from-green-800 via-green-600 to-lime-500">
							{testimonials[active].name}
						</h2>
						<p className="text-center md:text-start text-sm text-gray-500 dark:text-neutral-500">
							{testimonials[active].designation}
						</p>
						<motion.p className="text-center md:text-start text-lg text-gray-500 mt-4 md:mt-8 dark:text-neutral-300">
							{testimonials[active].quote
								.split(" ")
								.map((word, index) => (
									<motion.span
										key={index}
										initial={{
											filter: "blur(10px)",
											opacity: 0,
											y: 5,
										}}
										animate={{
											filter: "blur(0px)",
											opacity: 1,
											y: 0,
										}}
										transition={{
											duration: 0.2,
											ease: "easeInOut",
											delay: 0.02 * index,
										}}
										className="inline-block">
										{word}&nbsp;
									</motion.span>
								))}
						</motion.p>
					</motion.div>
					<div className="flex gap-4 pt-4 md:pt-0">
						<button
							aria-label="Previous"
							onClick={handlePrev}
							className="h-7 w-7 rounded-full bg-gradient-to-r to-orange-300 via-red-400 from-red-600 flex items-center justify-center group/button shadow-lg opacity-80">
							<IconArrowLeft className="h-5 w-5 text-white group-hover/button:rotate-20 transition-transform duration-300" />
						</button>
						<button
							aria-label="Next"
							onClick={handleNext}
							className="h-7 w-7 rounded-full bg-gradient-to-r from-orange-300 via-red-400 to-red-600 flex items-center justify-center group/button shadow-lg opacity-80">
							<IconArrowRight className="h-5 w-5 text-white group-hover/button:-rotate-20 transition-transform duration-300" />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
