import { whyUs } from "@/constants";
import "./WhyUs.css";
import Image from "next/image";

const WhyUs = () => {
	return (
		<div
			id="Why US"
			className="md:container relative md:mx-auto px-4 lg:px-24 items-center	my-10  md:my-24 "
		>
			<Image
				width={1428}
				height={892}
				className="one"
				alt="one"
				src="/assests/hero-addon/1.png"
			/>
			<div className="main-title mx-auto">Why Us</div>
			<div className="mt-3 mb-8 hidden md:block mx-auto items-center ">
				<div className="hero-last text-base	 lg:text-2xl">
					Powering the world’s best product teams
				</div>
				<div className="hero-last light text-base	 lg:text-2xl">
					From next-gen startups to established enterprises.
				</div>
			</div>
			<div className="hero-last  mt-3 mb-8 mx-auto block md:hidden">
				Streamline your software development process with Divic
			</div>
			{/* cards-section */}
			<div className=" gap-6 md:gap-10 lg:gap-28 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
				{whyUs.map((item, index) => (
					<div key={index} className="flex-col flex">
						<div className=" block  lg:flex items-center">
							<div className="mr-2">{item.icon}</div>
							<b className="text-base text-white">{item.title}</b>
						</div>
						<p
							className="my-2 text-base"
							style={{ color: "rgba(136, 151, 174, 1)" }}
						>
							{item.paragraph}
						</p>
					</div>
				))}
			</div>
			{/* cards-section */}
		</div>
	);
};

export default WhyUs;
