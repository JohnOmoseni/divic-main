import {
	Benefits,
	Customers,
	Fodista,
	// Form,
	// Header,
	Hero,
	OurProducts,
	Services,
	Testimonials,
	WhyUs,
} from "@/components";

export default function Home() {
	return (
		<>
			{/* <Header /> */}
			<Hero />
			<Customers />
			<Services />
			<WhyUs />
			<Testimonials />
			<Fodista />
			<Benefits />
			<OurProducts title={"Main Features"} />
			<Benefits hint={"last-section"} />
			{/* <Form /> */}
		</>
	);
}
