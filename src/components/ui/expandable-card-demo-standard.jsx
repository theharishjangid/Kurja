"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/lib/hooks";
import { IoClose } from "react-icons/io5";

export default function DesignTeam() {
	const [active, setActive] = useState(null);
	const ref = useRef(null);
	const id = useId();

	useEffect(() => {
		function onKeyDown(event) {
			if (event.key === "Escape") {
				setActive(false);
			}
		}

		if (active && typeof active === "object") {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}

		window.addEventListener("keydown", onKeyDown);
		return () => window.removeEventListener("keydown", onKeyDown);
	}, [active]);

	useOutsideClick(ref, () => setActive(null));

	return (
		<>
			<AnimatePresence>
				{active && typeof active === "object" && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="fixed inset-0 bg-black/20 h-full w-full z-10"
					/>
				)}
			</AnimatePresence>
			<AnimatePresence>
				{active && typeof active === "object" ? (
					<div className="fixed inset-0  grid place-items-center z-[100]">
						<motion.div
							layoutId={`card-${active.title}-${id}`}
							ref={ref}
							className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden">
							<motion.div
								layoutId={`image-${active.title}-${id}`}>
								<Image
									priority
									width={200}
									height={200}
									src={active.src}
									alt={active.title}
									className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover"
								/>
							</motion.div>

							<div>
								<div className="flex justify-between items-start p-4">
									<div className="">
										<motion.h3
											layoutId={`title-${active.title}-${id}`}
											className="font-bold text-neutral-700 dark:text-neutral-200">
											{active.title}
										</motion.h3>
										<motion.p
											layoutId={`description-${active.description}-${id}`}
											className="text-neutral-600 dark:text-neutral-400 text-sm">
											{active.description}
										</motion.p>
									</div>
									<motion.button
										layoutId={`button-${active.title}-${id}`}
										href={active.ctaLink}
										target="_blank"
										onClick={() => setActive(null)}>
										<IoClose className="w-7 h-7" />
									</motion.button>
								</div>
								<div className="pt-4 relative px-4">
									<motion.div
										layout
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										exit={{ opacity: 0 }}
										className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]">
										{typeof active.content === "function"
											? active.content()
											: active.content}
									</motion.div>
								</div>
							</div>
						</motion.div>
					</div>
				) : null}
			</AnimatePresence>
			<ul className="max-w-2xl mx-auto w-full gap-4 grid grid-cols-1 md:grid-cols-2 items-start">
				{cards.map((card, index) => (
					<motion.div
						layoutId={`card-${card.title}-${id}`}
						key={`card-${card.title}-${id}`}
						onClick={() => setActive(card)}
						className="p-4 flex flex-col md:flex-row justify-between items-center md:bg-neutral-100 hover:shadow-md border border-white hover:border-gray-200 rounded-xl cursor-pointer">
						<div className="flex gap-4 flex-col md:flex-row ">
							<motion.div layoutId={`image-${card.title}-${id}`}>
								<Image
									width={100}
									height={100}
									src={card.src}
									alt={card.title}
									className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover"
								/>
							</motion.div>
							<div className="">
								<motion.h3
									layoutId={`title-${card.title}-${id}`}
									className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left">
									{card.title}
								</motion.h3>
								<motion.p
									layoutId={`description-${card.description}-${id}`}
									className="text-gray-500 dark:text-neutral-400 text-center md:text-left text-sm">
									{card.description}
								</motion.p>
							</div>
						</div>
					</motion.div>
				))}
			</ul>
		</>
	);
}

const cards = [
	{
		description: "Designer 1",
		title: "Sunil Kumar",
		src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		content: () => {
			return (
				<p>
					Lana Del Rey, an iconic American singer-songwriter, is
					celebrated for her melancholic and cinematic music style.
					Born Elizabeth Woolridge Grant in New York City, she has
					captivated audiences worldwide with her haunting voice and
					introspective lyrics. <br /> <br />
					Her songs often explore themes of tragic romance, glamour,
					and melancholia, drawing inspiration from both contemporary
					and vintage pop culture. With a career that has seen
					numerous critically acclaimed albums, Lana Del Rey has
					established herself as a unique and influential figure in
					the music industry, earning a dedicated fan base and
					numerous accolades.
				</p>
			);
		},
	},
	{
		description: "Designer 2",
		title: "Ravi Patel",
		src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		content: () => {
			return (
				<p>
					Babu Maan, a legendary Punjabi singer, is renowned for his
					soulful voice and profound lyrics that resonate deeply with
					his audience. Born in the village of Khant Maanpur in
					Punjab, India, he has become a cultural icon in the Punjabi
					music industry. <br /> <br />
					His songs often reflect the struggles and triumphs of
					everyday life, capturing the essence of Punjabi culture and
					traditions. With a career spanning over two decades, Babu
					Maan has released numerous hit albums and singles that have
					garnered him a massive fan following both in India and
					abroad.
				</p>
			);
		},
	},

	{
		description: "Designer 3",
		title: "Vinod Kumar",
		src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		content: () => {
			return (
				<p>
					Metallica, an iconic American heavy metal band, is renowned
					for their powerful sound and intense performances that
					resonate deeply with their audience. Formed in Los Angeles,
					California, they have become a cultural icon in the heavy
					metal music industry. <br /> <br />
					Their songs often reflect themes of aggression, social
					issues, and personal struggles, capturing the essence of the
					heavy metal genre. With a career spanning over four decades,
					Metallica has released numerous hit albums and singles that
					have garnered them a massive fan following both in the
					United States and abroad.
				</p>
			);
		},
	},
	{
		description: "Designer 4",
		title: "Abhishek Sharma",
		src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		content: () => {
			return (
				<p>
					Led Zeppelin, a legendary British rock band, is renowned for
					their innovative sound and profound impact on the music
					industry. Formed in London in 1968, they have become a
					cultural icon in the rock music world. <br /> <br />
					Their songs often reflect a blend of blues, hard rock, and
					folk music, capturing the essence of the 1970s rock era.
					With a career spanning over a decade, Led Zeppelin has
					released numerous hit albums and singles that have garnered
					them a massive fan following both in the United Kingdom and
					abroad.
				</p>
			);
		},
	},
	{
		description: "Designer 5",
		title: "Priya Jain",
		src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		content: () => {
			return (
				<p>
					"Aawarapan", a Bollywood movie starring Emraan Hashmi, is
					renowned for its intense storyline and powerful
					performances. Directed by Mohit Suri, the film has become a
					significant work in the Indian film industry. <br /> <br />
					The movie explores themes of love, redemption, and
					sacrifice, capturing the essence of human emotions and
					relationships. With a gripping narrative and memorable
					music, "Aawarapan" has garnered a massive fan following both
					in India and abroad, solidifying Emraan Hashmi's status as a
					versatile actor.
				</p>
			);
		},
	},
	{
		description: "Designer 6",
		title: "Sanjana Rao",
		src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		content: () => {
			return (
				<p>
					"Aawarapan", a Bollywood movie starring Emraan Hashmi, is
					renowned for its intense storyline and powerful
					performances. Directed by Mohit Suri, the film has become a
					significant work in the Indian film industry. <br /> <br />
					The movie explores themes of love, redemption, and
					sacrifice, capturing the essence of human emotions and
					relationships. With a gripping narrative and memorable
					music, "Aawarapan" has garnered a massive fan following both
					in India and abroad, solidifying Emraan Hashmi's status as a
					versatile actor.
				</p>
			);
		},
	},
];
