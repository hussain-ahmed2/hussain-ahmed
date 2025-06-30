"use server";

import nodemailer from "nodemailer";
import { contactSchema } from "../validators/contactSchema";

export async function sendEmail(formData: FormData) {
	const raw = {
		name: formData.get("name"),
		email: formData.get("email"),
		subject: formData.get("subject"),
		message: formData.get("message"),
	};

	const parsed = contactSchema.safeParse(raw);

	if (!parsed.success) {
		return {
			success: false,
			errors: parsed.error.flatten().fieldErrors,
		};
	}

	const { name, email, subject, message } = parsed.data;

	const transporter = nodemailer.createTransport({
		service: "gmail",
		auth: {
			user: process.env.EMAIL_USER,
			pass: process.env.EMAIL_PASS,
		},
	});

	try {
		await transporter.sendMail({
			from: `"${name}" <${email}>`,
			to: process.env.EMAIL_USER,
			subject: subject,
			html: `
            <h2>New Contact Form Submission</h2>

            <p><strong>Name:</strong>&nbsp;${name}</p>
            <p><strong>Email:</strong>&nbsp;<a href="mailto:${email}">${email}</a></p>
            <p><strong>Subject:</strong>&nbsp;${subject}</p>
            
            <p><strong>Message:</strong></p>
            <p>${message}</p>

            <hr />

            <small>This message was sent from your portfolio contact form.</small>
          `,
		});

		return { success: true, message: "Email sent successfully!" };
	} catch (err) {
		console.error("Email error:", err);
		return { success: false, message: "Failed to send email." };
	}
}
