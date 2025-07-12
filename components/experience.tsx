"use client";

import { ScrollAnimate } from "./motion/scroll-animation";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

export function Experience() {
	const experiences = [
		{
			title: "Software Developer Intern (React/NextJs)",
			company: "Masleap.io",
			website: "https://masleap.io/",
			date: "June 2025 – Present",
			summary: "Built and enhanced core features of Masleap’s web platform, focusing on performance and clean, maintainable code.",
		},
	];

	return (
		<section id="experience" className="py-16 px-4 max-w-6xl mx-auto">
			<ScrollAnimate variant="fadeUp" className="text-muted-foreground text-lg mb-2 text-center">
				Professional Journey
			</ScrollAnimate>

			<ScrollAnimate delay={0.1} variant="fadeUp">
				<h2 className="text-3xl sm:text-5xl font-bold mb-8 text-center">Experience</h2>
			</ScrollAnimate>

			<div className="space-y-6">
				{experiences.map((exp, i) => (
					<ScrollAnimate key={i} delay={0.2 + i * 0.1} variant="fadeUp">
						<div className="border border-border rounded-lg p-5 bg-muted/30 hover:bg-muted/50 transition">
							<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
								<h3 className="text-lg font-semibold">{exp.title}</h3>
								<p className="text-sm text-muted-foreground">{exp.date}</p>
							</div>
							<p className="mb-1">
								<Link href={exp.website} target="_blank" rel="noopener noreferrer" className="text-foreground underline inline-flex items-center gap-1">
									{exp.company}
									<ExternalLink className="size-4" />
								</Link>
							</p>
							<p className="text-sm text-muted-foreground">{exp.summary}</p>
						</div>
					</ScrollAnimate>
				))}
			</div>
		</section>
	);
}
