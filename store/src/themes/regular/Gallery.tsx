import React from "react";

const GalleryCard = ({ img, isUp = false }: { img: string, isUp : boolean }) => {
	return (
		<img
			className={`w-[200px] min-h-[300px] object-cover ${
				// isUp ? "  pt-[10%] " : " pb-[10%]" 
        ""
			}  transition-transform duration-300 odd:translate-y-[10%] even:-translate-y-[10%]  `}
			src={img}
			alt="img"
		/>
	);
};

const Gallery = () => {
	const data = [
		"https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=987",
		"https://images.unsplash.com/photo-1518529762942-d744cc08fef3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1065",
		"https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2124",
		"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=987",
		"https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=987",
		"https://images.unsplash.com/photo-1518529762942-d744cc08fef3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1065",
		"https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2124",
		"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=987",
		"https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=987",
		"https://images.unsplash.com/photo-1518529762942-d744cc08fef3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1065",
		"https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2124",
	];
	return (
		<div className="w-full mt-20">
			<h1 className="text-8xl font-bold">Gallery</h1>
			<h1 className="text-3xl mt-4 md:w-[70%] font-semibold text-foreground/60">
				Every photo captures a story waiting to be felt. Discover moments that speak beyond words.
			</h1>
			
			<div className="mt-[15vh] relative w-full h-[70vh] items-center flex flex-wrap gap-y-20 justify-between">
				{data.map((gal, idx) => (
					<GalleryCard isUp={idx % 2 == 0 } img={gal} key={idx} />
				))}
			</div>
		</div>
	);
};

export default Gallery;
