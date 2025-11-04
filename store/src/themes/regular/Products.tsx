import React from "react";

const ProductCard = () => {
	return (
		<div className="w-[24%] flex flex-col gap-2">
			<div className="aspect-square object-cover overflow-hidden ">
				<img
					className="aspect-square object-cover hover:scale-[1.2] transition-all duration-400"
					src={
						"https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2073"
					}
				/>
			</div>
			<div>
				<div className="flex justify-between">
					<h1 className="text-md font-semibold">Dress</h1>
					<p className="text-md font-semibold">$199</p>
				</div>
				<p className="text-xs text-foreground/60">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. tinctioaccusantium id!
				</p>
			</div>
		</div>
	);
};

const Products = () => {
	return (
		<div className="w-full mt-24">
			<h1 className="text-8xl font-bold">New</h1>
			<h1 className="text-4xl font-semibold text-foreground/60">Product of This Months</h1>

			<br />
			<br />

			<div className="w-full flex flex-wrap gap-4">
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
			</div>
		</div>
	);
};

export default Products;
