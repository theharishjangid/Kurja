import { NextResponse } from "next/server";

const {
	EMAILJS_SERVICE_ID,
	EMAILJS_TEMPLATE_ID,
	EMAILJS_PUBLIC_KEY,
	EMAILJS_PRIVATE_KEY,
} = process.env;

export async function POST(request) {
	try {
		const body = await request.json();
		const { firstname, lastname, email, phone, message } = body;

		if (!firstname || !lastname || !email || !phone || !message) {
			return NextResponse.json(
				{
					message:
						"firstname, lastname, email, phone and message are required.",
				},
				{ status: 400 }
			);
		}

		if (
			!EMAILJS_SERVICE_ID ||
			!EMAILJS_TEMPLATE_ID ||
			!EMAILJS_PUBLIC_KEY ||
			!EMAILJS_PRIVATE_KEY
		) {
			console.error("EmailJS environment variables are not set");
			return NextResponse.json(
				{ message: "Internal Server Error" },
				{ status: 500 }
			);
		}

		const response = await fetch(
			"https://api.emailjs.com/api/v1.0/email/send",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					service_id: EMAILJS_SERVICE_ID,
					template_id: EMAILJS_TEMPLATE_ID,
					user_id: EMAILJS_PUBLIC_KEY,
					accessToken: EMAILJS_PRIVATE_KEY,
					template_params: {
						firstname: firstname,
						lastname: lastname,
						email: email,
						phone: phone,
						message: message,
					},
				}),
			}
		);

		if (!response.ok) {
			const errorData = await response.json();
			console.error("EmailJS API Error:", errorData);
			return NextResponse.json(
				{ message: "Failed to send email." },
				{ status: 500 }
			);
		}

		return NextResponse.json(
			{ message: "Email sent successfully!" },
			{ status: 200 }
		);
	} catch (error) {
		console.error("Error sending email:", error);
		return NextResponse.json(
			{ message: "Internal Server Error" },
			{ status: 500 }
		);
	}
}
