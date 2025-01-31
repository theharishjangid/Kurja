"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { clients } from "@/constants";

export const InfiniteMovingLogos = ({
	direction = "left",
	speed = "fast",
	pauseOnHover = true,
	className,
}) => {
	const containerRef = useRef(null);
	const scrollerRef = useRef(null);

	useEffect(() => {
		addAnimation();
	}, []);

	const [start, setStart] = useState(false);

	function addAnimation() {
		if (containerRef.current && scrollerRef.current) {
			const scrollerContent = Array.from(scrollerRef.current.children);

			scrollerContent.forEach((item) => {
				const duplicatedItem = item.cloneNode(true);
				if (scrollerRef.current) {
					scrollerRef.current.appendChild(duplicatedItem);
				}
			});

			getDirection();
			getSpeed();
			setStart(true);
		}
	}

	const getDirection = () => {
		if (containerRef.current) {
			if (direction === "left") {
				containerRef.current.style.setProperty(
					"--animation-direction",
					"forwards"
				);
			} else {
				containerRef.current.style.setProperty(
					"--animation-direction",
					"reverse"
				);
			}
		}
	};

	const getSpeed = () => {
		if (containerRef.current) {
			if (speed === "fast") {
				containerRef.current.style.setProperty(
					"--animation-duration",
					"20s"
				);
			} else if (speed === "normal") {
				containerRef.current.style.setProperty(
					"--animation-duration",
					"40s"
				);
			} else {
				containerRef.current.style.setProperty(
					"--animation-duration",
					"80s"
				);
			}
		}
	};

	return (
		<div
			ref={containerRef}
			className={cn(
				"scroller relative z-20 overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
				className
			)}>
			<ul
				ref={scrollerRef}
				className={cn(
					"flex min-w-full shrink-0 gap-8 py-4 w-max flex-nowrap",
					start && "animate-scroll",
					pauseOnHover && "hover:[animation-play-state:paused]"
				)}>
				{clients.map((item, idx) => (
					<li
						className="w-[150px] max-w-full relative flex-shrink-0"
						key={item.alt}>
						<Image
							src={item.src}
							alt={item.alt}
							width={100}
							height={100}
							className="object-contain"
						/>
					</li>
				))}
			</ul>
		</div>
	);
};
