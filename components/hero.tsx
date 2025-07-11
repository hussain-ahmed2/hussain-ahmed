"use client";
import { Button } from "@/components/ui/button";
import { ChevronDown, Github, Linkedin, Sparkles } from "lucide-react";
import Link from "next/link";
import { ScrollAnimate } from "./motion/scroll-animation";

export default function Hero() {
	return (
		<section id="hero" className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] text-center px-4 max-w-6xl mx-auto">
			<ScrollAnimate variant="fadeUp" className="text-neutral-500 font-medium text-lg mb-2 flex items-center gap-1">
				<Sparkles className="size-5" />
				<span>Hi, my name is</span>
			</ScrollAnimate>
			<ScrollAnimate delay={0.2} variant="fadeUp">
				<h1 className="text-4xl sm:text-6xl font-extrabold mb-4">Hussain Ahmed</h1>
			</ScrollAnimate>
			<ScrollAnimate variant="fadeUp" delay={0.4}>
				<h2 className="text-2xl sm:text-4xl text-gray-500 mb-6 font-medium">
					A <span className="text-foreground">Software Developer</span>
				</h2>
			</ScrollAnimate>
			<ScrollAnimate variant="fadeUp" delay={0.6} className="max-w-xl text-gray-400 mb-6">
				Specializing in React, Next.js, and design systems that adapt seamlessly across devices and themes.
			</ScrollAnimate>
			<div className="flex flex-wrap justify-center gap-4">
				<ScrollAnimate delay={0.7}>
					<Button variant="ghost" size="lg" asChild>
						<Link href="/#projects">View Projects</Link>
					</Button>
				</ScrollAnimate>
				<ScrollAnimate delay={0.8}>
					<Button variant="outline" size="lg" asChild>
						<Link href="/#contact">Contact Me</Link>
					</Button>
				</ScrollAnimate>
				<ScrollAnimate delay={0.9}>
					<Button variant="default" size="lg" asChild>
						<Link href="/resume.pdf" target="_blank">
							View Resume
						</Link>
					</Button>
				</ScrollAnimate>
			</div>

			<div className="flex gap-6 mt-8 text-2xl">
				<ScrollAnimate variant="scale" delay={1.0}>
					<Button size="icon" variant="ghost" className="cursor-pointer" asChild>
						<Link href="https://github.com/hussain-ahmed2" target="_blank" rel="noopener noreferrer">
							<Github />
						</Link>
					</Button>
				</ScrollAnimate>
				<ScrollAnimate variant="scale" delay={1.1}>
					<Button size="icon" variant="ghost" className="cursor-pointer" asChild>
						<Link href="https://linkedin.com/in/hussainahmed2" target="_blank" rel="noopener noreferrer">
							<Linkedin />
						</Link>
					</Button>
				</ScrollAnimate>
			</div>

			{/* Scroll indicator */}
			<ScrollAnimate delay={1.2} className="mt-8">
				<Link href="#about" className="block animate-bounce">
					<ChevronDown className="w-6 h-6 text-gray-500" />
				</Link>
			</ScrollAnimate>
		</section>
	);
}
