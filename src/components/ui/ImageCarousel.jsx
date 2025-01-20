import { useState, useEffect } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight, FaX } from "react-icons/fa6";

export default function ImageCarousel({
	images,
	currentIndex,
	onClose,
	onIndexChange,
}) {
	const [index, setIndex] = useState(currentIndex);

	useEffect(() => {
		const handleKeyDown = (event) => {
			if (event.key === "ArrowLeft") {
				navigateImage(-1);
			} else if (event.key === "ArrowRight") {
				navigateImage(1);
			} else if (event.key === "Escape") {
				onClose();
			}
		};

		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [index]);

	const navigateImage = (direction) => {
		const newIndex = (index + direction + images.length) % images.length;
		setIndex(newIndex);
		onIndexChange(newIndex);
	};

	return (
		<div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-[300]">
			<div className="relative w-full h-full max-w-4xl max-h-full">
				<button
					onClick={onClose}
					className="absolute top-6 right-2 text-white hover:text-gray-300 z-10 outline-none ring-[1.5px] ring-white hover:ring-gray-300 bg-black bg-opacity-30 rounded-full p-2"
					aria-label="Close carousel">
					<FaX size={15} />
				</button>
				<div className="relative w-full h-[calc(100vh-75px)] max-w-full max-h-full">
					<Image
						src={images[index] || "/placeholder.svg"}
						alt={`Image ${index + 1}`}
						layout="fill"
						objectFit="contain"
						className="mt-4"
					/>
				</div>
				<button
					onClick={() => navigateImage(-1)}
					className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 bg-black bg-opacity-30 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-white"
					aria-label="Previous image">
					<FaChevronLeft size={18} />
				</button>
				<button
					onClick={() => navigateImage(1)}
					className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 bg-black bg-opacity-30 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-white"
					aria-label="Next image">
					<FaChevronRight size={18} />
				</button>
				<div className="flex justify-center z-10 space-x-2 mt-8">
					{images.map((_, i) => (
						<button
							key={i}
							className={`w-2 h-2 rounded-full ${
								i === index ? "bg-white" : "bg-gray-500"
							}`}
							onClick={() => {
								setIndex(i);
								onIndexChange(i);
							}}
							aria-label={`Go to image ${i + 1}`}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
