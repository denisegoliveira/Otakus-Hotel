import React from "react";
import Banner from "../banner/Banner";
import Carousel from "../carousel/Carousel";
import BannerQuarto from "../banner-quartos/bannerQuartos/BannerQuartos.jsx";
import Cards from "../cards/cardsEvents/Card";


export default function Home() {
	return (
		<>
			<Carousel />
			<Banner />
			<BannerQuarto />
			<Cards />
		</>
	);
}
