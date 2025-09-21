import React from "react";
import Link from "next/link";

const ProductCard = () => {


  return (
    <Link href={"/product/random-product"} className="w-full h-[230px] sm:h-[250px] rounded-xl border border-[var(--color-border)] overflow-hidden md:h-[300px] lg:h-[380px] ">
      <img
        className="w-full object-cover h-[80%] sm:h-[75%] md:h-[70%]  "
        src="https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=1004&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />

      <div className="flex flex-col gap-2 md:gap-1 lg:gap-2 p-2">
        <h1 className=" text-sm font-semibold font-roboto">$ 1200</h1>
        <p className="hidden min-sm:block text-xs font-medium font-roboto">Prefium</p>
        <p className="hidden md:block text-xs font-medium font-roboto">{"Lorem ipsum dolor sit amet consectetur adipisicing to est voluptates?".substring(0,70)}...</p>
      </div>

    </Link>
  );
};

export default ProductCard;
