import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import Hero from "./Hero";
import SocialHanldes from "./SocialMediaHandles";
import Categories from "./Categories";
import FeatureProduct from "./FeatureProducts";





const Minimal = () => {
  const categories = ["All", "Minimal", "New", "Trendy", "Sofa", "Bed"];
  return (
    <div className="w-full ">
      <Nav />
      <Hero />
      <Categories />
      <FeatureProduct/>
      

      <SocialHanldes/>

      <Footer/>
    </div>
  );
};

export default Minimal;
