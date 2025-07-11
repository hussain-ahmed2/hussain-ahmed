"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ScrollAnimate } from "./motion/scroll-animation";
import { Send, Github, Linkedin } from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { ContactFormData, contactSchema } from "@/lib/validators/contactSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { sendEmail } from "@/lib/actions/sendEmail";
import { toast } from "sonner";
import { useState } from "react";
import Link from "next/link";

export function Contact() {
	const form = useForm<ContactFormData>({
		resolver: zodResolver(contactSchema),
		defaultValues: {
			name: "",
			email: "",
			subject: "",
			message: "",
		},
	});

	const [isSubmitting, setIsSubmitting] = useState(false);

	const onSubmit = async (data: ContactFormData) => {
		setIsSubmitting(true);
		try {
			const formData = new FormData();
			formData.append("name", data.name);
			formData.append("email", data.email);
			formData.append("subject", data.subject);
			formData.append("message", data.message);

			const res = await sendEmail(formData);

			if (res.success) {
				toast.success("Email sent successfully!", {
					description: "Thanks for reaching out!",
					action: {
						label: "Close",
						onClick: () => toast.dismiss(),
					},
				});
				form.reset();
			} else {
				toast.error("Something went wrong!", {
					description: "Please try again later.",
					action: {
						label: "Close",
						onClick: () => toast.dismiss(),
					},
				});
			}
		} catch (error) {
			console.error(error);
			toast.error("Something went wrong!", {
				description: "Please try again later.",
				action: {
					label: "Close",
					onClick: () => toast.dismiss(),
				},
			});
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<section id="contact" className="py-12 px-4 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
			{/* Left side: Contact info */}
			<div className="flex flex-col justify-center space-y-6">
				<ScrollAnimate variant="fadeUp" className="text-muted-foreground font-medium text-lg mb-2">
					Get In Touch
				</ScrollAnimate>

				<ScrollAnimate delay={0.2} variant="fadeUp">
					<h2 className="text-3xl sm:text-5xl font-bold mb-4">Contact</h2>
				</ScrollAnimate>

				<ScrollAnimate delay={0.3} variant="fadeUp">
					<p className="text-gray-600 max-w-md">
						I’m open to new opportunities, freelance projects, or just a friendly hello. Feel free to reach out using the form or via the channels below.
					</p>
				</ScrollAnimate>

				<ScrollAnimate delay={0.4} variant="fadeUp" className="space-y-3 text-gray-700 max-w-md">
					<p>
						<strong>Email:</strong>{" "}
						<a href="mailto:hussainahmed.vu@gmail.com" className="text-foreground underline">
							hussainahmed.vu@gmail.com
						</a>
					</p>
					<p>
						<strong>Phone:</strong>{" "}
						<a href="tel:+8801874117418" className="text-foreground underline">
							+880 1874 117418
						</a>
					</p>
					<p>
						<strong>Location:</strong> Dhaka, Bangladesh (GMT+6)
					</p>
					<p>
						<strong>Response Time:</strong> Usually within 24-48 hours
					</p>
				</ScrollAnimate>

				<ScrollAnimate delay={0.5} variant="fadeUp" className="flex gap-6 text-2xl">
					<Button size="icon" variant="ghost" asChild>
						<Link href="https://github.com/hussain-ahmed2" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
							<Github />
						</Link>
					</Button>
					<Button size="icon" variant="ghost" asChild>
						<Link href="https://linkedin.com/in/hussainahmed2" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
							<Linkedin />
						</Link>
					</Button>
				</ScrollAnimate>
			</div>

			{/* Right side: Contact form */}
			<div>
				<ScrollAnimate variant="fadeUp" delay={0.6}>
					<Form {...form}>
						<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" noValidate>
							<div className="grid md:grid-cols-2 gap-6">
								<FormField
									control={form.control}
									name="name"
									render={({ field }) => (
										<FormItem>
											<FormControl>
												<Input placeholder="Name" className="h-12" autoComplete="name" aria-label="Name" {...field} disabled={isSubmitting} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="email"
									render={({ field }) => (
										<FormItem>
											<FormControl>
												<Input type="email" placeholder="Email" className="h-12" autoComplete="email" aria-label="Email" {...field} disabled={isSubmitting} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>

							<FormField
								control={form.control}
								name="subject"
								render={({ field }) => (
									<FormItem>
										<FormControl>
											<Input placeholder="Subject" className="h-12" autoComplete="off" aria-label="Subject" {...field} disabled={isSubmitting} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name="message"
								render={({ field }) => (
									<FormItem>
										<FormControl>
											<Textarea placeholder="Message" className="min-h-[150px]" aria-label="Message" {...field} disabled={isSubmitting} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<Button type="submit" size="lg" className="w-full gap-2 flex items-center justify-center" disabled={isSubmitting}>
								{isSubmitting ? "Sending..." : "Send Message"} <Send className="w-4 h-4" />
							</Button>
						</form>
					</Form>
				</ScrollAnimate>
			</div>
		</section>
	);
}
