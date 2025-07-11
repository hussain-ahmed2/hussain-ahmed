"use client";
import Image from "next/image";
import { ScrollAnimate } from "./motion/scroll-animation";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export function Skills() {
	const skills = [
		{ name: "React", level: "Intermediate", icon: "/react.svg" },
		{ name: "Next.js", level: "Junior", icon: "/nextjs.svg" },
		{ name: "TypeScript", level: "Junior", icon: "/typescript.svg" },
		{
			name: "Tailwind CSS",
			level: "Intermediate",
			icon: "/tailwindcss.svg",
		},
		{ name: "Node.js", level: "Junior", icon: "/nodejs.svg" },
		{ name: "MongoDB", level: "Junior", icon: "/mongodb.svg" },
		{ name: "Figma", level: "Junior", icon: "/figma.svg" },
	];

	return (
		<section id="skills" className="py-20 px-4 max-w-6xl mx-auto">
			<ScrollAnimate variant="fadeUp" className="text-muted-foreground font-medium text-lg mb-2 text-center">
				My Toolkit
			</ScrollAnimate>

			<ScrollAnimate delay={0.2} variant="fadeUp">
				<h2 className="text-3xl sm:text-5xl font-bold mb-12 text-center">Skills</h2>
			</ScrollAnimate>

			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
				{skills.map((skill, i) => (
					<ScrollAnimate key={i} variant="scale" delay={0.3 + i * 0.1}>
						<Tooltip>
							<TooltipTrigger asChild>
								<div className="flex flex-col gap-2 items-center p-6 rounded-lg border bg-card hover:bg-card/50 text-card-foreground transition-colors cursor-default">
									<Image src={skill.icon} alt={skill.name} width={40} height={40} />
									<span>{skill.name}</span>
								</div>
							</TooltipTrigger>
							<TooltipContent>
								<p>{skill.level} proficiency</p>
							</TooltipContent>
						</Tooltip>
					</ScrollAnimate>
				))}
			</div>
		</section>
	);
}
