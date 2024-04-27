

import { HeroParallax } from "./ui/hero-parallax";

export function HeroParallaxProjects() {
	return <HeroParallax products={products} />;
}
export const products = [
	{
		title: "FABINCCI",
		link: "https://fabincci.netlify.app",
		description:
			"Trabajo de final de carrera para la universidad. Página web de una barberia ubicada en Mataró, con un diseño personalizado, registro de clientes y gestión de citas.",
		thumbnail: "src/utils/img/FabincciProject.webp",
		skills: ["React", "Tailwind", "Node", "Mongo", "Express"],
	},
	{
		title: "Cursor",
		link: "https://cursor.so",
		description: "Trabajo",
		thumbnail:
			"https://aceternity.com/images/products/thumbnails/new/cursor.png",
		skills: ["React", "Tailwind", "Node", "Mongo", "Express"],
	},
	{
		title: "Rogue",
		link: "https://userogue.com",
		description: "Trabajo",
		thumbnail:
			"https://aceternity.com/images/products/thumbnails/new/rogue.png",
		skills: ["React", "Tailwind", "Node", "Mongo", "Express"],
	},

	{
		title: "Editorially",
		link: "https://editorially.org",
		description: "Trabajo",
		thumbnail:
			"https://aceternity.com/images/products/thumbnails/new/editorially.png",
		skills: ["React", "Tailwind", "Node", "Mongo", "Express"],
	},
];
