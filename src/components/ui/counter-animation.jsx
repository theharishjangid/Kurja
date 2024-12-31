"use client";

import { useEffect, useState, useRef } from "react";

export function Counter({ end, duration = 2000, suffix = "+" }) {
	const [count, setCount] = useState(0);
	const [hasAnimated, setHasAnimated] = useState(0);
	const counterRef = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				const [entry] = entries;
				if (entry.isIntersecting && hasAnimated < 1) {
					setHasAnimated(1);

					const steps = 60;
					const increment = end / steps;
					const stepDuration = duration / steps;
					let current = 0;

					const timer = setInterval(() => {
						current += increment;
						if (current >= end) {
							setCount(end);
							clearInterval(timer);
						} else {
							setCount(Math.floor(current));
						}
					}, stepDuration);

					return () => clearInterval(timer);
				}
			},
			{
				threshold: 0.2, // Starts animation when 20% of the element is visible
				root: null, // Use viewport as root
				rootMargin: "0px",
			}
		);

		if (counterRef.current) {
			observer.observe(counterRef.current);
		}

		return () => {
			if (counterRef.current) {
				observer.unobserve(counterRef.current);
			}
		};
	}, [end, duration, hasAnimated]);

	return (
		<span
			ref={counterRef}
			className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r to-orange-300 via-red-400 from-red-600">
			{count}
			{suffix}
		</span>
	);
}
