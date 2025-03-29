"use client";
import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/lib/hooks";
import { IoClose } from "react-icons/io5";
import { teamData } from "@/constants";

const getInitials = (name) => {
	if (!name) return "";
	const names = name.split(" ");
	let initials = "";
	for (let i = 0; i < names.length; i++) {
		if (names[i].length > 0) {
			initials += names[i][0].toUpperCase();
		}
		if (initials.length >= 2) break;
	}
	return initials;
};

export default function DesignTeam() {
	const cards = teamData.filter((item) => item.type !== "core");
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
								{active.src ? (
									<Image
										priority
										width={500}
										height={500}
										src={active.src}
										alt={active.title}
										className="w-full h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover"
									/>
								) : (
									<div className="w-full h-80 sm:rounded-tr-lg sm:rounded-tl-lg bg-gradient-to-r to-orange-300 via-red-400 from-red-600 flex items-center justify-center text-white font-bold text-8xl">
										{getInitials(active.title)}
									</div>
								)}
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
											layoutId={`description-${active.title}-${id}`}
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
								{card.src ? (
									<Image
										width={100}
										height={100}
										src={card.src}
										alt={card.title}
										className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover"
									/>
								) : (
									<div className="h-40 w-40 md:h-14 md:w-14 rounded-lg bg-gradient-to-r to-orange-300 via-red-400 from-red-600 flex items-center justify-center text-white font-bold text-5xl md:text-xl">
										{getInitials(card.title)}
									</div>
								)}
							</motion.div>
							<div className="">
								<motion.h3
									layoutId={`title-${card.title}-${id}`}
									className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left">
									{card.title}
								</motion.h3>
								<motion.p
									layoutId={`description-${card.title}-${id}`}
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
