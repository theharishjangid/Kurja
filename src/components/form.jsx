"use client";
import { Label } from "@/components/ui/label";
import { Input, TextArea } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useState } from "react";

export default function ContactForm() {
	const [formData, setFormData] = useState({
		firstname: "",
		lastname: "",
		email: "",
		phone: "",
		message: "",
	});

	const [errors, setErrors] = useState({});

	const handleChange = (e) => {
		const { id, value } = e.target;
		setFormData({ ...formData, [id]: value });
		setErrors({ ...errors, [id]: "" }); // Clear error when input changes
	};

	const validateForm = () => {
		let isValid = true;
		const newErrors = {};

		if (!formData.firstname.trim()) {
			newErrors.firstname = "First name is required";
			isValid = false;
		}

		if (!formData.lastname.trim()) {
			newErrors.lastname = "Last name is required";
			isValid = false;
		}

		if (!formData.email.trim()) {
			newErrors.email = "Email is required";
			isValid = false;
		} else if (!/\S+@\S+\.\S+/.test(formData.email)) {
			newErrors.email = "Email is invalid";
			isValid = false;
		}

		if (!formData.phone.trim()) {
			newErrors.phone = "Phone number is required";
			isValid = false;
		} else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
			newErrors.phone = "Phone number is invalid";
			isValid = false;
		}

		if (!formData.message.trim()) {
			newErrors.message = "Message is required";
			isValid = false;
		}

		setErrors(newErrors);
		return isValid;
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (validateForm()) {
			console.log("Form submitted", formData);
			// Reset form data after successful submission
			setFormData({
				firstname: "",
				lastname: "",
				email: "",
				phone: "",
				message: "",
			});
			setErrors({});
		} else {
			console.log("Form has errors");
		}
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
					<LabelInputContainer error={errors.firstname}>
						<Label htmlFor="firstname">First name</Label>
						<Input
							id="firstname"
							placeholder="Harish"
							type="text"
							value={formData.firstname}
							onChange={handleChange}
						/>
						{errors.firstname && (
							<p className="text-red-500 text-sm">
								{errors.firstname}
							</p>
						)}
					</LabelInputContainer>
					<LabelInputContainer error={errors.lastname}>
						<Label htmlFor="lastname">Last name</Label>
						<Input
							id="lastname"
							placeholder="Jangid"
							type="text"
							value={formData.lastname}
							onChange={handleChange}
						/>
						{errors.lastname && (
							<p className="text-red-500 text-sm">
								{errors.lastname}
							</p>
						)}
					</LabelInputContainer>
				</div>
				<LabelInputContainer error={errors.email} className="mb-4">
					<Label htmlFor="email">Email Address</Label>
					<Input
						id="email"
						placeholder="youremail@domain.com"
						type="email"
						value={formData.email}
						onChange={handleChange}
					/>
					{errors.email && (
						<p className="text-red-500 text-sm">
							{errors.email}
						</p>
					)}
				</LabelInputContainer>
				<LabelInputContainer error={errors.phone} className="mb-4">
					<Label htmlFor="phone">Phone</Label>
					<Input
						id="phone"
						placeholder="1234567890"
						type="tel"
						value={formData.phone}
						onChange={handleChange}
					/>
					{errors.phone && (
						<p className="text-red-500 text-sm">
							{errors.phone}
						</p>
					)}
				</LabelInputContainer>
				<LabelInputContainer error={errors.message} className="mb-8 h-fit">
					<Label htmlFor="message">Message</Label>
					<TextArea
						id="message"
						placeholder="Your query..."
						value={formData.message}
						onChange={handleChange}
					/>
					{errors.message && (
						<p className="text-red-500 text-sm">
							{errors.message}
						</p>
					)}
				</LabelInputContainer>

				<button
					aria-label="Submit"
					className="relative group/btn bg-gradient-to-r to-orange-300 via-red-400 from-red-600 w-full text-white rounded-md h-10 font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out"
					type="submit">
					Submit
				</button>
			</form>
		</div>
	);
}

const LabelInputContainer = ({ children, className, error }) => {
	return (
		<div className={cn("flex flex-col space-y-2 w-full", className)}>
			{children}
		</div>
	);
};
