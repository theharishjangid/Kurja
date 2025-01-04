"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input, TextArea } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export default function ContactForm() {
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Form submitted");
	};
	return (
		<div className="rounded-none sm:rounded-xl w-full sm:w-auto p-4 md:p-8 shadow-input bg-white">
			<h2 className="text-center text-xl text-transparent bg-clip-text bg-gradient-to-r to-orange-300 via-red-400 from-red-600">
				Talk To Our Design Expert
			</h2>
			<p className="text-gray-500 text-sm max-w-sm mt-1 mb-3 dark:text-neutral-300">
				* Schedule an appointment to experience our focused and
				personalized care.
			</p>
			<form onSubmit={handleSubmit}>
				<div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
					<LabelInputContainer>
						<Label htmlFor="firstname">First name</Label>
						<Input
							id="firstname"
							placeholder="Harish"
							type="text"
						/>
					</LabelInputContainer>
					<LabelInputContainer>
						<Label htmlFor="lastname">Last name</Label>
						<Input id="lastname" placeholder="Jangid" type="text" />
					</LabelInputContainer>
				</div>
				<LabelInputContainer className="mb-4">
					<Label htmlFor="email">Email Address</Label>
					<Input
						id="email"
						placeholder="youremail@domain.com"
						type="email"
					/>
				</LabelInputContainer>
				<LabelInputContainer className="mb-4">
					<Label htmlFor="phone">Phone</Label>
					<Input
						id="phone"
						placeholder="1234567890"
						type="tel"
						pattern="[6789][0-9]{9}"
					/>
				</LabelInputContainer>
				<LabelInputContainer className="mb-8 h-fit">
					<Label htmlFor="message">Message</Label>
					<TextArea id="message" placeholder="Your query..." />
				</LabelInputContainer>

				<button
					className="relative group/btn bg-gradient-to-r to-orange-300 via-red-400 from-red-600 w-full text-white rounded-md h-10 font-medium hover:shadow-lg"
					type="submit">
					Submit
				</button>
			</form>
		</div>
	);
}

const LabelInputContainer = ({ children, className }) => {
	return (
		<div className={cn("flex flex-col space-y-2 w-full", className)}>
			{children}
		</div>
	);
};
