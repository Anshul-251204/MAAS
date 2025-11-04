import React from "react";
import Nav from "./Nav";
import { ImageSlider, Slide } from "./ImageSlider";
import Products from "./Products";
import Category from "./Category";
import Gallery from "./Gallery";

const Regular = () => {
	const slider: Slide[] = [
		{
			id: 1,
			image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070",
		},
		{
			id: 2,
			image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=987",
		},
		{
			id: 3,
			image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2073",
		},
	];
	return (
		<div className="w-full">
			<Nav />
			<br />
			<br />
			<br />
			<section className="px-16">
				<ImageSlider slides={slider} autoPlayInterval={3000} />
				<Products />
				<Category />
        <Gallery/>
			</section>
		</div>
	);
};

export default Regular;
