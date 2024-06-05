

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
		thumbnail: "/static/img/FabincciProject.webp",
		skills: ["React", "Tailwind", "Node", "Mongo", "Express"],
	},
	{
		title: "iDance",
		link: "https://cursor.so",
		description: "Página web para la competición de baile iDance Nacional.",
		thumbnail:
			"/static/img/idanceNacional.png",
		skills: ["Wordpress", "Elementor", "JavaScript", "CSS", "HTML"],
	},
	{
		title: "Quality Machines Profile S.L.",
		link: "https://userogue.com",
		description: "Página web para la empresa Quality Machines Profile S.L.",
		thumbnail:
			"/static/img/qmprofile.png",
		skills: ["Wordpress", "Elementor", "SEO", "Javascript", "CSS", "HTML"],
	},

	{
		title: "Vic.Inkk",
		link: "https://editorially.org",
		description: "Página web para el estudio de tatuajes Vic.Inkk.",
		thumbnail:
			"/static/img/vicinkk.png",
		skills: ["React", "Tailwind", "Astro"],
	},
];
