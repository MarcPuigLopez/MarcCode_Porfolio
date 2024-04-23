"use client";
import React from "react";
import {
	motion,
	useScroll,
	useTransform,
	useSpring,
	MotionValue,
} from "framer-motion";

export const HeroParallax = ({
	products,
}: {
	products: {
		title: string;
		link: string;
		thumbnail: string;
		skills: string[];
	}[];
}) => {
	const firstRow = products.slice(0, 2);
	const secondRow = products.slice(2, 4);
	const ref = React.useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"],
	});

	const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

	const translateX = useSpring(
		useTransform(scrollYProgress, [0, 1], [-300, 1000]),
		springConfig
	);
	const translateXReverse = useSpring(
		useTransform(scrollYProgress, [0, 1], [1000, -700]),
		springConfig
	);
	const rotateX = useSpring(
		useTransform(scrollYProgress, [0, 0.2], [15, 0]),
		springConfig
	);
	const opacity = useSpring(
		useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
		springConfig
	);
	const rotateZ = useSpring(
		useTransform(scrollYProgress, [0, 0.2], [20, 0]),
		springConfig
	);
	const translateY = useSpring(
		useTransform(scrollYProgress, [0, 0.2], [-400, 100]),
		springConfig
	);
	return (
		<div
			ref={ref}
			className="h-[250vh] py-40 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]">
			<Header />
			<motion.div
				style={{
					rotateX,
					rotateZ,
					translateY,
					opacity,
				}}
				className="">
				<motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
					{firstRow.map((product) => (
						<ProductCard
							product={product}
							translate={translateX}
							key={product.title}
						/>
					))}
				</motion.div>
				<motion.div className="flex flex-row  mb-20 space-x-20 ">
					{secondRow.map((product) => (
						<ProductCard
							product={product}
							translate={translateXReverse}
							key={product.title}
						/>
					))}
				</motion.div>
			</motion.div>
		</div>
	);
};

export const Header = () => {
	return (
		<div className="">
			<div id="Projects" aria-hidden className="absolute top-0"></div>
			<div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full  left-0 top-0">
				<h1 className="text-2xl md:text-7xl font-bold dark:text-white">
					My Projects <br />
				</h1>
				<p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
					A continuación se muestran algunos de los proyectos en los que he
					trabajado recientemente. <br />
				</p>
			</div>
		</div>
	);
};

export const ProductCard = ({
	product,
	translate,
}: {
	product: {
		title: string;
		link: string;
		thumbnail: string;
		skills: string[];
	};
	translate: MotionValue<number>;
}) => {
	return (
		<motion.div
			style={{
				x: translate,
			}}
			whileHover={{
				y: -20,
			}}
			key={product.title}
			className="group/product h-[37rem] w-[56rem] relative flex-shrink-0">
			<a href={product.link} className="block group-hover/product:shadow-2xl ">
				<img
					src={product.thumbnail}
					height="600"
					width="600"
					className="object-cover object-left-top absolute h-full w-full inset-0"
					loading="lazy"
					alt={product.title}
				/>
			</a>
			<div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-70 bg-black pointer-events-none"></div>
			<div className="absolute bottom-0 p-5 h-44 w-full opacity-0 group-hover/product:opacity-100 text-white bg-black">
				<div className="">
					<h2 className="pb-5">{product.title}</h2>
					<div>
						<h2> Skills </h2>
						<h3 className="text-white text-center">
							{product.skills.map((skill) => (
								<span key={skill} className="text-white">
									{skill} &nbsp;
								</span>
							))}
						</h3>
					</div>
				</div>
			</div>
		</motion.div>
	);
};
