import { Contact } from "@/components/contact";
import { Experience } from "@/components/experience";
import Hero from "@/components/hero";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";

export default function Home() {
	return (
		<div>
			<Hero />
			<Experience />
			<Skills />
			<Projects />
			<Contact />
		</div>
	);
}
