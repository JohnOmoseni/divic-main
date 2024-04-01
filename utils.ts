export const updateSearchParams = (type: string, value: string) => {
	// Get the current URL search params
	const searchParams = new URLSearchParams(window.location.search);

	// Set the specified search parameter to the given value
	searchParams.set(type, value);

	// Set the specified search parameter to the given value
	const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

	return newPathname;
};

export const deleteSearchParams = (type: string) => {
	// Set the specified search parameter to the given value
	const newSearchParams = new URLSearchParams(window.location.search);

	// Delete the specified search parameter
	newSearchParams.delete(type.toLocaleLowerCase());

	// Construct the updated URL pathname with the deleted search parameter
	const newPathname = `${
		window.location.pathname
	}?${newSearchParams.toString()}`;

	return newPathname;
};

export const container = {
	hidden: { opacity: 0, x: "100vw" },
	animate: {
		opacity: 1,
		x: 0,
		transition: {
			delay: 1.6,
			duration: 0.8,
			type: "spring",
			mass: 0.3,
			ease: "easeIn",
			when: "beforeChildren",
			delayChildren: 0.2,
			staggerChildren: 0.4,
		},
	},
	exit: {
		x: "100vw",
		opacity: 0,
		transition: {
			duration: 1,
			ease: "easeOut",
		},
	},
};

export const variant = {
	hidden: { opacity: 0, y: 20 },
	animate: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.8,
			type: "spring",
			delay: 1.8,
		},
	},
};

export const listAnimate = {
	hidden: { opacity: 0, y: 60 },
	animate: (custom: number) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: custom * 0.1,
			duration: 0.8,
			type: "spring",
		},
	}),
};

export const navAnimate = {
	hidden: { y: -50, opacity: 0 },
	animate: (custom: number) => ({
		y: 0,
		opacity: 1,
		transition: {
			delay: custom * 0.3,
			duration: 0.8,
			type: "spring",
		},
	}),
};
