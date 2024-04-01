import "./Fodista.css";
import Image from "next/image";

const Fodista = () => {
	return (
		<div className="md:container md:mx-auto px-4 lg:px-24 items-center	my-10  md:my-24 ">
			<div className="main-title mx-auto">Our Products</div>
			<div className="attendance-title  md:text-4xl text-2xl mx-auto">
				Fodista
			</div>
			<div className="mt-3 mb-8 hidden lg:block mx-auto items-center ">
				<div className="hero-last text-base	 lg:text-2xl">
					World-First Restaurant ERP
				</div>
				<div className="hero-last light text-base	 lg:text-2xl">
					From next-gen startups to established enterprises.
				</div>
			</div>
			<div className="hero-last  mt-3 mb-8 mx-auto block md:hidden">
				Streamline your software development process with Divic
			</div>
			<div className="fodista-card hidden lg:block mx-auto align-center">
				<Image
					width={300}
					height={250}
					alt="divic"
					src={`/assests/hero-addon/fodista.png`}
					className="mx-auto"
				/>
			</div>
		</div>
	);
};

export default Fodista;
