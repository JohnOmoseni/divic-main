"use client";

import { motion, useInView, useAnimationControls } from "framer-motion";
import { useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
	children: React.ReactNode;
	className?: string;
	delay?: number;
};

const revealVariants = {
	hidden: { opacity: 0, y: 75 },
	visible: { opacity: 1, y: 0 },
};

function RevealAnimate({ children, className, delay }: Props) {
	const ref = useRef<any>();
	const revealControls = useAnimationControls();
	const isInView = useInView(ref, { once: false, amount: 0.3 });

	useEffect(() => {
		if (isInView) {
			revealControls.start("visible");
		}
	}, [isInView]);

	return (
		<motion.div
			ref={ref}
			variants={revealVariants}
			initial="hidden"
			animate={revealControls}
			transition={{ duration: 0.6, delay: delay ? delay : 0.3 }}
			className={twMerge("w-full", className)}
		>
			{children}
		</motion.div>
	);
}

export default RevealAnimate;
