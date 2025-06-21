"use client";
import { ScrollAnimate } from "./motion/scroll-animation";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/ui/tooltip";

export function Skills() {
	const skills = [
		{ name: "React", level: "Advanced", icon: "⚛️" },
		{ name: "Next.js", level: "Expert", icon: "▲" },
		{ name: "TypeScript", level: "Advanced", icon: "📘" },
		{ name: "Tailwind CSS", level: "Expert", icon: "🎨" },
		{ name: "Node.js", level: "Intermediate", icon: "🟢" },
		{ name: "Figma", level: "Proficient", icon: "✏️" },
	];

	return (
		<section id="skills" className="py-20 px-4 max-w-6xl mx-auto">
			<ScrollAnimate
				variant="fadeUp"
				className="text-muted-foreground font-medium text-lg mb-2 text-center"
			>
				My Toolkit
			</ScrollAnimate>

			<ScrollAnimate delay={0.2} variant="fadeUp">
				<h2 className="text-3xl sm:text-5xl font-bold mb-12 text-center">
					Skills
				</h2>
			</ScrollAnimate>

			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
				{skills.map((skill, i) => (
					<ScrollAnimate
						key={i}
						variant="scale"
						delay={0.3 + i * 0.1}
					>
						<Tooltip>
							<TooltipTrigger asChild>
								<div className="flex flex-col items-center p-6 rounded-lg border hover:bg-accent/50 transition-colors cursor-default">
									<span className="text-2xl mb-2">
										{skill.icon}
									</span>
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
