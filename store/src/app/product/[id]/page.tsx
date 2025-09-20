import React from "react";
import HeaderAccrodingToTheme from "../../../components/ui/Header";
import ProductDetails from "./ProductDetails";

const page = () => {
  return (
    <div className="w-full h-screen">
      <HeaderAccrodingToTheme />
      <ProductDetails theme="BENTO" />
    </div>
  );
};

export default page;
