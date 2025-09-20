import HeaderAccrodingToTheme from "@/components/ui/Header";
import { div } from "motion/react-client";
import React from "react";

type CategoriesProductProps = {
  product: {
    img: string;
    price: string;
    description: string;
    title: string;
  };
};

const CategoriesProduct: React.FC<CategoriesProductProps> = ({ product }) => {
  return (
    <div className="overflow-hidden border cursor-pointer border-[var(--color-border)] flex flex-col gap-2 pb-4 rounded-2xl">
      <img className="w-full object-cover h-[300px] " src={product.img} alt="" />
      <p className="px-4 font-bold">₹ {product.price}</p>
      <h1 className="text-md font-semibold px-4">{product.title}</h1>
      <p className="px-4 text-sm font-medium">{product.description}</p>
    </div>
  );
};

const page = () => {
  const cp = [
    {
      img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "344",
      title: "Headphone",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            voluptates architecto placeat!.`,
    },
    {
      img: "https://images.unsplash.com/photo-1608156639585-b3a032ef9689?q=80&w=1065&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "400",
      title: "Headphone",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              voluptates architecto placeat!.`,
    },
    {
      img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "344",
      title: "Headphone",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              voluptates architecto placeat!.`,
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1679913792906-13ccc5c84d44?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "4000",
      title: "Headphone",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              voluptates architecto placeat!.`,
    },
  ];
  return (
    <>
      <HeaderAccrodingToTheme />
      <div className="w-full p-4 md:p-8">
        <h1 className="text-2xl font-semibold">Category / t-shirt</h1>

        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pt-8">
          {cp.map((i,idx) => (
            <CategoriesProduct key={idx} product={i} />
          ))}
           {cp.map((i,idx) => (
            <CategoriesProduct key={idx} product={i} />
          ))}
        </div>
      </div>
    </>
  );
};

export default page;
