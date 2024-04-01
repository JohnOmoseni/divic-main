import Image from "next/image";

const Footer = () => {
	return (
		<div className="md:container  mt-12 md:mt-24 md:mx-auto px-4 lg:px-24 items-center  pt-10 pb-6 md:pb-20  lg:pt-20 ">
			<hr
				className="block md:hidden px-5 mb-4 bg-slate-50	 border-0	"
				style={{ height: "1px", opacity: "0.1" }}
			/>
			<div className="flex items-center justify-between flex-col md:flex-row ">
				<div className="logo mb-4 md:mb-0">
					<Image
						width={73}
						height={20}
						alt="DIVIC"
						src="/assests/logo/Vector.png"
					/>
				</div>
				<div className="flex items-center justify-between gap-6"></div>
				<p className="py-5 block" style={{ color: "rgba(94, 103, 124, 1)" }}>
					All rights reserved Divic 2023
				</p>
			</div>
		</div>
	);
};

export default Footer;
