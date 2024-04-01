import "./OurProducts.css";
import Features from "./Features";
import Image from "next/image";

const OurProducts = ({ title }: { title: string }) => {
	return (
		<div
			id="Products"
			className="md:container relative md:mx-auto px-3 lg:px-20 items-center	my-10  md:my-24 "
		>
			<Image
				width={1428}
				height={892}
				className="one"
				alt="one"
				src="/assests/hero-addon/1.png"
			/>
			{!title && <div className="main-title mx-auto">Our Products</div>}
			<div
				className={`attendance-title md:text-4xl text-2xl mx-auto ${
					title ? "hidden lg:block" : ""
				}`}
			>
				{title ? title : "Fodista"}
			</div>
			<div
				className={`mt-3 mb-8 hidden md:block mx-auto items-center ${
					title ? "hidden lg:block" : ""
				}`}
			>
				<div className="hero-last text-base	 lg:text-2xl">
					Powering the world’s best product teams
				</div>
				<div className="hero-last light text-base	 lg:text-2xl">
					From next-gen startups to established enterprises.
				</div>
			</div>
			<div
				className={`hero-last  mt-3 mb-8 mx-auto block md:hidden ${
					title ? "hidden lg:block" : ""
				}`}
			>
				Streamline your software development process with Divic
			</div>
			<Features />
		</div>
	);
};

export default OurProducts;
