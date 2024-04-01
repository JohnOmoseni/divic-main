"use client";

import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { navLinks } from "@/constants/navLinks";
import Link from "next/link";
import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";
import Button from "./Button";
import LinkRow from "./LinkRow";

type Props = {
	setOpenMenu?: Dispatch<SetStateAction<boolean>>;
};

const Header = () => {
	const [openMenu, setOpenMenu] = useState(false);

	return (
		<header className="max-width w-full absolute z-10 flex-row !justify-between px-6 py-4 sm:py-3 sm:px-4 bg-[#CECEFB] bg-opacity-30 rounded-md">
			<Link href="/" className="group flex transition-sm hover:scale-[0.9]">
				<Image
					src="/assests/logo/Vector.png"
					alt="DIVIC"
					width={73}
					height={18}
					className="object-contain"
				/>
			</Link>

			<div className="hidden lg:flex-row gap-4 py-2 px-4 rounded-full shadow-sm text-white">
				{navLinks?.map((link, idx) => (
					<LinkRow key={idx} {...link} idx={idx} />
				))}
			</div>

			<div
				className="block lg:hidden"
				onClick={() => (!openMenu ? setOpenMenu(true) : setOpenMenu(false))}
			>
				<HiOutlineMenuAlt4 size={20} color="#DAFFDC" />
			</div>

			<Button title="Contact us" className="con-sub-btn py-1.5 px-3.5" />
		</header>
	);
};

export default Header;
