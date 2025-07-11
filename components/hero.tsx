"use client";

import { Button } from "@/components/ui/button";
import { Github, Linkedin, Sparkles } from "lucide-react";
import Link from "next/link";
import { ScrollAnimate } from "./motion/scroll-animation";

export default function Hero() {
	return (
		<section id="hero" className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] text-center px-4 max-w-6xl mx-auto">
			{/* Intro greeting */}
			<ScrollAnimate variant="fadeUp" className="text-neutral-500 font-medium text-lg mb-2 flex items-center gap-1">
				<Sparkles className="size-5" />
				<span>Hi, my name is</span>
			</ScrollAnimate>

			{/* Name */}
			<ScrollAnimate delay={0.2} variant="fadeUp">
				<h1 className="text-4xl sm:text-6xl font-extrabold mb-4">Hussain Ahmed</h1>
			</ScrollAnimate>

			{/* Title */}
			<ScrollAnimate delay={0.4} variant="fadeUp">
				<h2 className="text-2xl sm:text-4xl text-gray-500 mb-6 font-medium">
					A <span className="text-foreground font-bold">Software Developer</span>
				</h2>
			</ScrollAnimate>

			{/* Brief about with 2 months experience */}
			<ScrollAnimate delay={0.6} variant="fadeUp" className="max-w-2xl text-gray-400 mb-8 text-sm sm:text-base">
				I build full-stack web applications using React, Next.js, Node.js, and MongoDB. With 2 months of practical experience, I focus on writing clean, efficient code and delivering
				responsive user experiences.
			</ScrollAnimate>

			{/* Action buttons */}
			<div className="flex flex-wrap justify-center gap-4 mb-10">
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
						<Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
							View Resume
						</Link>
					</Button>
				</ScrollAnimate>
			</div>

			{/* Social icons */}
			<div className="flex gap-6 text-2xl mb-4">
				<ScrollAnimate variant="scale" delay={1.0}>
					<Button size="icon" variant="ghost" asChild>
						<Link href="https://github.com/hussain-ahmed2" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
							<Github />
						</Link>
					</Button>
				</ScrollAnimate>
				<ScrollAnimate variant="scale" delay={1.1}>
					<Button size="icon" variant="ghost" asChild>
						<Link href="https://linkedin.com/in/hussainahmed2" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
							<Linkedin />
						</Link>
					</Button>
				</ScrollAnimate>
			</div>
		</section>
	);
}
