"use client";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { ScrollAnimate } from "./motion/scroll-animation";

export function Footer() {
	return (
		<footer className="py-12 px-4 border-t">
			<div className="max-w-6xl mx-auto">
				<div className="flex flex-col md:flex-row justify-between items-center gap-6">
					<ScrollAnimate variant="fadeUp">
						<p className="text-muted-foreground text-sm">
							© {new Date().getFullYear()} Hussain Ahmed. All
							rights reserved.
						</p>
					</ScrollAnimate>

					<div className="flex gap-4">
						<ScrollAnimate variant="scale" delay={0.2}>
							<Button variant="ghost" size="icon" asChild>
								<Link href="mailto:hussainahmed.vu@gmail.com">
									<Mail className="h-5 w-5" />
								</Link>
							</Button>
						</ScrollAnimate>
						<ScrollAnimate variant="scale" delay={0.3}>
							<Button variant="ghost" size="icon" asChild>
								<Link
									href="https://github.com/hussain-ahmed2"
									target="_blank"
								>
									<Github className="h-5 w-5" />
								</Link>
							</Button>
						</ScrollAnimate>
						<ScrollAnimate variant="scale" delay={0.4}>
							<Button variant="ghost" size="icon" asChild>
								<Link
									href="https://linkedin.com/in/hussainahmed2"
									target="_blank"
								>
									<Linkedin className="h-5 w-5" />
								</Link>
							</Button>
						</ScrollAnimate>
					</div>
				</div>
			</div>
		</footer>
	);
}
