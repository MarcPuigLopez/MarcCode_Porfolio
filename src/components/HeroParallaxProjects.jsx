"use client";

import { HeroParallax } from "./ui/hero-parallax";

export function HeroParallaxProjects() {
	return <HeroParallax products={products} />;
}
export const products = [
	{
		title: "Moonbeam",
		link: "https://gomoonbeam.com",
		description: "Trabajo",
		thumbnail:
			"https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
		skills: ["React", "Tailwind CSS", "Node.js", "MongoDB", "Express.js"],
	},
	{
		title: "Cursor",
		link: "https://cursor.so",
		description: "Trabajo",
		thumbnail:
			"https://aceternity.com/images/products/thumbnails/new/cursor.png",
		skills: ["React", "Tailwind CSS", "Node.js", "MongoDB", "Express.js"],
	},
	{
		title: "Rogue",
		link: "https://userogue.com",
		description: "Trabajo",
		thumbnail:
			"https://aceternity.com/images/products/thumbnails/new/rogue.png",
		skills: ["React", "Tailwind CSS", "Node.js", "MongoDB", "Express.js"],
	},

	{
		title: "Editorially",
		link: "https://editorially.org",
		description: "Trabajo",
		thumbnail:
			"https://aceternity.com/images/products/thumbnails/new/editorially.png",
		skills: ["React", "Tailwind CSS", "Node.js", "MongoDB", "Express.js"],
	},
];
