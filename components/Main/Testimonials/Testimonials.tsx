"use client";

import "./Testimonials.css";
import { Avatar } from "@nextui-org/react";
import { testimonials } from "@/constants";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
	// const settings = {
	//   dots: true,
	//   customPaging: (i) => <div className="custom-dot"></div>,
	//   infinite: true,
	//   speed: 500,
	//   slidesToShow: 1,
	//   slidesToScroll: 1,
	//   arrows: false,
	// };
	return (
		<div
			id="Testimonials"
			className="md:container md:mx-auto px-4 lg:px-24 items-center	my-10  md:my-24 "
		>
			<div className="main-title mx-auto">Testimonials</div>
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
			{/* test-section */}
			<div className=" gap-10  grid-cols-2 hidden md:grid">
				{testimonials.map((item, index) => (
					<div key={index} className="testimonial-card p-6 flex gap-5">
						<div>
							<Avatar src={`${item.avatar}`} size="lg" />
						</div>
						<div>
							<h2
								className="md:text-2xl  text-lg font-semibold"
								style={{ color: "rgba(175, 186, 202, 1)" }}
							>
								{item.title}
							</h2>
							<h3
								className="md:text-base text-xs		mb-3"
								style={{ color: "rgba(94, 113, 141, 1)" }}
							>
								{item.position}
							</h3>
							<p
								className="md:text-base text-xs"
								style={{ color: "rgba(136, 151, 174, 1)" }}
							>
								{item.content}
							</p>
						</div>
					</div>
				))}
			</div>
			{/* mobile-testimonial */}
			<div className="block md:hidden">
				{testimonials.map((item, index) => (
					<div
						key={index}
						className="testimonial-card-mobile p-6 flex justify-center gap-5"
					>
						<div>
							<Avatar src={`${item.avatar}`} size="lg" />
						</div>
						<div>
							<h2
								className="md:text-2xl  text-lg font-semibold"
								style={{ color: "rgba(175, 186, 202, 1)" }}
							>
								{item.title}
							</h2>
							<h3
								className="md:text-base text-xs		mb-3"
								style={{ color: "rgba(94, 113, 141, 1)" }}
							>
								{item.position}
							</h3>
							<p
								className="md:text-base text-xs"
								style={{ color: "rgba(136, 151, 174, 1)" }}
							>
								{item.content}
							</p>
						</div>
					</div>
				))}
			</div>

			{/* mobile-testimonial */}
			{/* test-section */}
		</div>
	);
};

export default Testimonials;
