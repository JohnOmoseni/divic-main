"use client";

import { twMerge } from "tailwind-merge";

type ButtonProps = {
	title: string;
	className?: string;
	btnType?: "button" | "submit";
	onClick?: () => void;
};

const Button = ({ title, className, btnType, onClick }: ButtonProps) => {
	return (
		<button
			type={btnType || "button"}
			onClick={onClick}
			className={twMerge(
				"text-white py-2 px-5 text-base bg-[#7e43ff] min-w-[130px] relative rounded-md shadow-md",
				className
			)}
		>
			{title}
		</button>
	);
};

export default Button;
