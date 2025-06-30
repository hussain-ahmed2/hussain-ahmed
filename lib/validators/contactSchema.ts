import { z } from "zod";

export const contactSchema = z.object({
	name: z
		.string()
		.trim()
		.nonempty("Name is required")
		.min(2, "Name must be at least 2 characters"),
	email: z
		.string()
		.trim()
		.nonempty("Email is required")
		.email("Invalid email address"),
	subject: z
		.string()
		.trim()
		.nonempty("Subject is required")
		.min(2, "Subject must be at least 2 characters"),
	message: z
		.string()
		.trim()
		.nonempty("Message is required")
		.min(5, "Message must be at least 5 characters"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
