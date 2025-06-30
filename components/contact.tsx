"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ScrollAnimate } from "./motion/scroll-animation";
import { Send } from "lucide-react";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { ContactFormData, contactSchema } from "@/lib/validators/contactSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { sendEmail } from "@/lib/actions/sendEmail";
import { toast } from "sonner";

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

	const onSubmit = async (data: ContactFormData) => {
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
						onClick: () => {
							toast.dismiss();
						},
					},
				});
			} else {
				toast.error("Something went wrong!", {
					description: "Please try again later.",
					action: {
						label: "Close",
						onClick: () => {
							toast.dismiss();
						},
					},
				});
			}
		} catch (error) {
			console.log(error);
			toast.error("Something went wrong!", {
				description: "Please try again later.",
				action: {
					label: "Close",
					onClick: () => {
						toast.dismiss();
					},
				},
			});
		}
	};

	return (
		<section id="contact" className="py-12 px-4 max-w-2xl mx-auto">
			<ScrollAnimate
				variant="fadeUp"
				className="text-muted-foreground font-medium text-lg mb-2 text-center"
			>
				Get In Touch
			</ScrollAnimate>

			<ScrollAnimate delay={0.2} variant="fadeUp">
				<h2 className="text-3xl sm:text-5xl font-bold mb-12 text-center">
					Contact
				</h2>
			</ScrollAnimate>

			<ScrollAnimate variant="fadeUp" delay={0.3}>
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="space-y-6"
					>
						<div className="grid md:grid-cols-2 gap-6">
							<FormField
								control={form.control}
								name="name"
								render={({ field }) => (
									<FormItem>
										<FormControl>
											<Input
												placeholder="Name"
												className="h-12"
												{...field}
											/>
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
											<Input
												type="email"
												placeholder="Email"
												className="h-12"
												{...field}
											/>
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
										<Input
											placeholder="Subject"
											className="h-12"
											{...field}
										/>
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
										<Textarea
											placeholder="Message"
											className="min-h-[150px]"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<ScrollAnimate variant="fadeUp" delay={0.4}>
							<Button
								type="submit"
								size="lg"
								className="w-full gap-2 flex items-center"
							>
								Send Message <Send className="w-4 h-4" />
							</Button>
						</ScrollAnimate>
					</form>
				</Form>
			</ScrollAnimate>
		</section>
	);
}
