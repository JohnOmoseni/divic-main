"use client";

import { benefits } from "@/constants";
import "./Benefits.css";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const Benefits = ({ hint }: { hint?: string }) => {
	// const settings = {
	//   dots: true,
	//   customPaging: (i) => <div className="custom-dot "></div>,
	//   infinite: true,
	//   speed: 500,
	//   slidesToShow: 1,
	//   slidesToScroll: 1,
	//   arrows: false,
	// };

	return (
		<div
			className={`md:container md:mx-auto px-4 ${
				hint ? "hidden md:block" : ""
			} lg:px-24 items-center	my-10  md:my-24 `}
		>
			<div className="attendance-title md:text-4xl text-2xl mx-auto">
				Benefits compared to the Competition
			</div>
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

			{/* benefits-section */}
			<div className=" gap-5 benefits-desktop hidden items-center lg:grid-cols-4 md:grid-cols-2 md:grid">
				{benefits.map((item, index) => (
					<div key={index} className="benefits-card md:p-4 p-6  flex gap-3">
						<div>{item.icon}</div>
						<div className="benefits-desc">
							<h2
								className="text-lg"
								style={{ color: "rgba(170, 179, 195, 1)" }}
							>
								{item.description}
							</h2>
						</div>
					</div>
				))}
			</div>
			{/* mobile-benefits */}
			<div className="block md:hidden">
				{benefits.map((item, index) => (
					<div
						key={index}
						className="benefits-card-mobile md:p-4 p-6  flex gap-3"
					>
						<div>{item.icon}</div>
						<div>
							<h2
								className="text-lg"
								style={{ color: "rgba(170, 179, 195, 1)" }}
							>
								{item.description}
							</h2>
						</div>
					</div>
				))}
			</div>

			{/* mobile-benefits */}

			{/* benefits-section */}
		</div>
	);
};

export default Benefits;
