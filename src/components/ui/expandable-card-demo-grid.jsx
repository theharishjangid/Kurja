"use client";
import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/lib/hooks";
import { IoClose } from "react-icons/io5";
import { teamData } from "@/constants";

export default function CoreTeam() {
	const cards = teamData.filter((item) => item.type === "core");
	const [active, setActive] = useState(null);
	const id = useId();
	const ref = useRef(null);

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
							className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white sm:rounded-3xl overflow-hidden">
							<motion.div
								layoutId={`image-${active.title}-${id}`}>
								<Image
									priority
									width={500}
									height={500}
									src={active.src}
									alt={active.title}
									className="w-full lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover"
								/>
							</motion.div>

							<div>
								<div className="flex justify-between items-start p-4">
									<div className="">
										<motion.h3
											layoutId={`title-${active.title}-${id}`}
											className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-green-800 via-green-600 to-lime-500 text-lg">
											{active.title}
										</motion.h3>
										<motion.p
											layoutId={`description-${active.title}-${id}`}
											className="text-gray-500 text-sm">
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
			<ul className="my-4 max-w-2xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 items-start gap-4">
				{cards.map((card, index) => (
					<motion.div
						layoutId={`card-${card.title}-${id}`}
						key={card.title}
						onClick={() => setActive(card)}
						className="p-4 flex flex-col md:bg-neutral-100 hover:shadow-md border border-white hover:border-gray-200 rounded-xl cursor-pointer">
						<div className="flex gap-4 flex-col  w-full">
							<motion.div layoutId={`image-${card.title}-${id}`}>
								<Image
									width={300}
									height={300}
									src={card.src}
									alt={card.title}
									className="h-60 w-full  rounded-lg object-cover"
								/>
							</motion.div>
							<div className="flex justify-center items-center flex-col">
								<motion.h3
									layoutId={`title-${card.title}-${id}`}
									className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-green-800 via-green-600 to-lime-500 text-center md:text-left text-lg">
									{card.title}
								</motion.h3>
								<motion.p
									layoutId={`description-${card.title}-${id}`}
									className="text-gray-500 text-center md:text-left text-sm">
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
