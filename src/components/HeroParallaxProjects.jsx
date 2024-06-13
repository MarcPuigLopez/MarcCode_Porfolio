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
		thumbnail: "/static/img/fabincci.webp",
		mobileThumbnail: "/static/img/fabincci_mobil.png",
		skills: ["React", "Tailwind", "Node", "Mongo", "Express"],
	},
	{
		title: "iDance",
		link: "https://idancenacional.com",
		description: "Página web para la competición de baile iDance Nacional.",
		thumbnail: "/static/img/idanceNacional.png",
		mobileThumbnail: "/static/img/idanceNacional_mobil.jpeg",
		skills: ["Wordpress", "Elementor", "JavaScript", "CSS", "HTML"],
	},
	{
		title: "Quality Machines Profile S.L.",
		link: "https://qmprofile.com",
		description: "Página web para la empresa Quality Machines Profile S.L.",
		thumbnail: "/static/img/qmprofile.png",
		mobileThumbnail: "/static/img/qmprofile_mobil.png",
		skills: ["Wordpress", "Elementor", "SEO", "Javascript", "CSS", "HTML"],
	},

	{
		title: "Vic.Inkk",
		link: "https://vic-ink.vercel.app",
		description: "Página web para el estudio de tatuajes Vic.Inkk.",
		thumbnail: "/static/img/vicinkk.png",
		mobileThumbnail: "/static/img/vicinkk_mobil.png",
		skills: ["React", "Tailwind", "Astro"],
	},
];
