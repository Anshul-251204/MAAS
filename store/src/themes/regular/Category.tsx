import React from "react";

type CategoryCardProps = {
	img: string;
	name: string;
};

const CategoyCard: React.FC<CategoryCardProps> = ({ img, name }) => {
	return (
		<div className="w-[50%] md:w-[30%] relative group text-foreground h-[300px] overflow-hidden">
			<img
				className="absolute top-0 left-0 w-full h-full object-cover transition-all duration-500 ease-in-out 
               group-hover:w-[90%] group-hover:h-[90%]  group-active:w-[90%] group-active:h-[90%] group-hover:rounded-br-4xl 
               group-hover:opacity-90"
				src={img}
				alt={name}
			/>

			<h1
				className="absolute bottom-0 text-foreground font-semibold text-2xl 
               opacity-0 translate-y-5 transition-all duration-500 ease-in-out 
               group-hover:opacity-100 group-hover:translate-y-0"
			>
				{name}
			</h1>
		</div>
	);
};

const Category = () => {
	const categoryData = [
		{
			img: "https://images.unsplash.com/photo-1603252109303-2751441dd157?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=987",
			name: "Shirt",
		},
		{
			img: "https://plus.unsplash.com/premium_photo-1683147790940-1971d636e4df?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=3087",
			name: "Bodycon",
		},
		{
			img: "https://images.unsplash.com/photo-1590159983013-d4ff5fc71c1d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1480",
			name: "Pant",
		},
		{
			img: "https://images.unsplash.com/photo-1603252109303-2751441dd157?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=987",
			name: "Shirt",
		},
	];
	return (
		<div className="w-full mt-20">
			<h1 className="text-8xl font-bold">Our</h1>
			<h1 className="text-4xl font-semibold text-foreground/60">All New Categories</h1>
			<br />
			<br />
			<div className="flex w-full flex-wrap justify-between gap-y-14 ">
				{categoryData.map((cat, idx) => (
					<CategoyCard img={cat.img} name={cat.name} key={idx} />
				))}
			</div>
			<br />
			<br />
			<br />
			<br />
		</div>
	);
};

export default Category;
