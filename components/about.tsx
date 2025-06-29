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
							Full Stack Developer
						</span>{" "}
						and currently an Intern at Masleap PLC. I specialize in
						building modern, scalable web applications using
						Next.js, Node.js, and MongoDB. My journey into web
						development began {new Date().getFullYear() - 2020}{" "}
						years ago when I built my first website out of pure
						curiosity.
					</p>

					<p className="text-neutral-400">
						I enjoy crafting intuitive user interfaces and writing
						robust backend logic. What drives me is the challenge of
						building{" "}
						<span className="text-foreground font-medium">
							fast, secure, and elegant
						</span>{" "}
						full-stack solutions that offer real value. I strongly
						believe in the principles of
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
						Outside of coding, I{"'"}m always learning—exploring new
						tools, contributing to open source, and staying up to
						date with the latest in tech. I also enjoy some fresh
						air and outdoor activities when I unplug.
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
