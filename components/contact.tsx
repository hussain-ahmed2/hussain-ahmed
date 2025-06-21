"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ScrollAnimate } from "./motion/scroll-animation";
import { Send } from "lucide-react";

export function Contact() {
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
				<form className="space-y-6">
					<div className="grid md:grid-cols-2 gap-6">
						<div className="space-y-2">
							<Input placeholder="Name" className="h-12" />
						</div>
						<div className="space-y-2">
							<Input
								placeholder="Email"
								type="email"
								className="h-12"
							/>
						</div>
					</div>
					<div className="space-y-2">
						<Input placeholder="Subject" className="h-12" />
					</div>
					<div className="space-y-2">
						<Textarea
							placeholder="Message"
							className="min-h-[150px]"
						/>
					</div>
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
			</ScrollAnimate>
		</section>
	);
}
