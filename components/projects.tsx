"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ScrollAnimate } from "./motion/scroll-animation";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function Projects() {
	const projects = [
		{
			title: "FeedMe - Food delivery website",
			description: "Next.js and MongoDB powered food delivery web application with cart and ordering features. Built for performance, scalability, and modern UI design.",
			tags: ["Next.js", "Tailwind CSS", "MongoDB"],
			link: "https://github.com/hussain-ahmed2/feed-me-food-delivery-website/",
			thumbnail: "/feedme-food-delivery.png",
		},
		{
			title: "RecipeRally - Recipe finder",
			description: "Discover and explore a variety of recipes with advanced search and filtering options.",
			tags: ["Laravel", "Tailwind CSS", "Sqlite"],
			link: "https://github.com/hussain-ahmed2/recipe-website",
			thumbnail: "/reciperally.png",
		},
		{
			title: "Music Academy",
			description: "A music academy website that provides classes and lessons for beginners and advanced players.",
			tags: ["Next.js", "Tailwind CSS", "Framer Motion", "Aceternity UI"],
			link: "https://github.com/hussain-ahmed2/music-academy",
			thumbnail: "/music-academy.png",
		},
	];

	return (
		<section id="projects" className="py-12 px-4 max-w-6xl mx-auto">
			<ScrollAnimate variant="fadeUp" className="text-muted-foreground font-medium text-lg mb-2 text-center">
				Selected Work
			</ScrollAnimate>

			<ScrollAnimate delay={0.2} variant="fadeUp">
				<h2 className="text-3xl sm:text-5xl font-bold mb-12 text-center">Projects</h2>
			</ScrollAnimate>

			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
				{projects.map((project, i) => (
					<ScrollAnimate key={i} variant="fadeUp" delay={0.3 + i * 0.1}>
						<Card className="h-full flex flex-col hover:shadow-md hover:bg-card/50 transition">
							<CardHeader>
								<div className="aspect-video bg-muted rounded-lg mb-4">
									<Image className="w-full h-full object-cover rounded-lg" src={project.thumbnail} alt="" width={800} height={450} />
								</div>
								<h3 className="text-xl font-semibold">{project.title}</h3>
							</CardHeader>

							<CardContent className="flex-grow">
								<p className="text-muted-foreground">{project.description}</p>
							</CardContent>

							<CardFooter className="flex flex-col items-start gap-4">
								<div className="flex flex-wrap gap-2">
									{project.tags.map((tag, j) => (
										<Badge key={j} variant="secondary" className="font-normal">
											{tag}
										</Badge>
									))}
								</div>
								<Button variant="outline" className="w-full" asChild>
									<Link href={project.link}>View Project</Link>
								</Button>
							</CardFooter>
						</Card>
					</ScrollAnimate>
				))}
			</div>

			<ScrollAnimate variant="fadeUp" delay={0.6} className="text-center mt-12 group">
				<Button variant="ghost" asChild>
					<Link href="#">
						View All Projects
						<ArrowRight className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-foreground" />
					</Link>
				</Button>
			</ScrollAnimate>
		</section>
	);
}
