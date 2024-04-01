import "./hero-section.css";
import Image from "next/image";

const Hero = () => {
	return (
		<div
			id="home"
			className="md:container md:mx-auto px-4 lg:px-24 items-center pt-10 lg:pt-20"
		>
			<div className=" LED mx-auto">
				<div className="LED-light">
					<Image
						width={1049}
						height={311}
						alt="LED-light"
						src="/assests/hero-addon/Vector 2.png"
					/>
				</div>
			</div>
			<div className=" solution mx-auto">Software Solutions House</div>
			<div className="big-title mt-3 mb-8 mx-auto  ">
				Unlike any company you hired before
			</div>
			<div className="hero-last text-lg lg:text-xl mx-auto">
				Streamline your software development process with Digital Vision Company
				- Divic
			</div>
		</div>
	);
};

export default Hero;
