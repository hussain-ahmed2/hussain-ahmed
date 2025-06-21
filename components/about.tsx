"use client";
import { ScrollAnimate } from "./motion/scroll-animation";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function About() {
	return (
		<section
			id="about"
			className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] py-12 px-4 max-w-6xl mx-auto"
		>
			<ScrollAnimate
				variant="fadeUp"
				className="text-neutral-500 font-medium text-lg mb-2"
			>
				Get to know me
			</ScrollAnimate>

			<ScrollAnimate delay={0.2} variant="fadeUp">
				<h2 className="text-3xl sm:text-5xl font-bold mb-8">
					About Me
				</h2>
			</ScrollAnimate>

			<div className="grid md:grid-cols-2 gap-12 items-center">
				<ScrollAnimate
					variant="fadeUp"
					delay={0.4}
					className="space-y-6"
				>
					<p className="text-neutral-400">
						I{"'"}m a{" "}
						<span className="text-foreground font-medium">
							Frontend Developer
						</span>{" "}
						with a passion for creating intuitive, responsive
						digital experiences. My journey in web development began{" "}
						{new Date().getFullYear() - 2020} years ago when I built
						my first website.
					</p>

					<p className="text-neutral-400">
						What excites me most is solving complex problems with
						elegant solutions that balance performance and
						aesthetics. I believe in the power of
						<span className="text-foreground font-medium">
							{" "}
							clean code
						</span>{" "}
						and
						<span className="text-foreground font-medium">
							{" "}
							thoughtful design
						</span>
						.
					</p>

					<p className="text-neutral-400">
						When I{"'"}m not coding, you{"'"}ll find me exploring
						new technologies, contributing to open source, or
						enjoying outdoor activities.
					</p>

					<div className="pt-4">
						<Button variant="outline" size="lg" asChild>
							<Link href="#contact">Let{"'"}s Connect</Link>
						</Button>
					</div>
				</ScrollAnimate>

				<ScrollAnimate
					variant="fadeUp"
					delay={0.6}
					className="grid grid-cols-2 gap-4"
				>
					{[
						{ name: "Frontend Development", value: "95%" },
						{ name: "UI/UX Design", value: "85%" },
						{ name: "React/Next.js", value: "90%" },
						{ name: "Performance Optimization", value: "88%" },
					].map((skill, i) => (
						<div key={i} className="space-y-2">
							<h3 className="text-sm font-medium text-foreground">
								{skill.name}
							</h3>
							<div className="h-2 w-full bg-neutral-200 dark:bg-neutral-800 rounded-full">
								<div
									className="h-full bg-foreground rounded-full"
									style={{ width: skill.value }}
								/>
							</div>
						</div>
					))}
				</ScrollAnimate>
			</div>
		</section>
	);
}
