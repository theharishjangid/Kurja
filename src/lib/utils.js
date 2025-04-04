import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
	return twMerge(clsx(inputs));
}

export const getInitials = (name) => {
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
