import React from "react";
import ProductCard from "../ProductCard";
import HeaderAccrodingToTheme from "@/components/ui/Header";

const page = async ({ params }: { params: { id: string } }) => {
  const searchParams = await params;
  return (
    <div className="w-full   ">
      <HeaderAccrodingToTheme />
      <div className="w-full p-2 sm:p-4">
        <h1 className="py-4  text-md font-medium font-roboto ">
          Search result of : {searchParams.id}
        </h1>
        <div className="w-full grid grid-cols-2  md:grid-cols-3 lg:grid-cols-5   gap-4">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default page;
