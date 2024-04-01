import { services } from "@/constants";
import "./Services.css";
import Image from "next/image";

const Services = () => {
	return (
		<div
			id="Services"
			className="md:container relative md:mx-auto px-4 lg:px-24 items-center	my-10  md:my-24 "
		>
			<Image
				width={1428}
				height={892}
				className="one"
				alt="one"
				src="/assests/hero-addon/1.png"
			/>
			<div className="main-title mx-auto">Our Services</div>
			<div className="mt-3 mb-8 hidden md:block mx-auto items-center ">
				<div className="hero-last text-base	 lg:text-2xl	">
					Powering the world’s best product teams
				</div>
				<div className="hero-last light text-base	 lg:text-2xl">
					From next-gen startups to established enterprises.
				</div>
			</div>
			<div className="hero-last mt-3 mb-8 mx-auto block md:hidden">
				Streamline your software development process with Divic
			</div>
			{/* cards-section */}
			<div className=" service-card-content  gap-2 lg:gap-4 grid grid-cols-1 lg:grid-cols-2">
				{services.map((service, index) => (
					<div key={index} className="  service-card ">
						<div className="inner-service-card flex items-center justify-center">
							<div key={index} className="">
								<Image
									width={180}
									height={240}
									alt={service.title}
									className="services-img"
									src={service.img}
								/>
							</div>
							<div className="text-small py-1 md:py-5 px-0 md:px-3">
								<b className="hero-last text-base	 lg:text-xl my-1	">
									{service.title}
								</b>
								<p
									className=" text-xs	my-1 lg:text-base"
									style={{ color: "rgba(203, 203, 232, 0.75)" }}
								>
									{service.paragraph}
								</p>
							</div>
						</div>
					</div>
				))}
			</div>
			{/* cards-section */}
		</div>
	);
};

export default Services;
