import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import FeatureProduct from "./FeatureProducts";
import SocialHanldes from "./SocialMediaHandles";
import Footer from "./Footer";
import Categories from "./Categories";

const Bento = () => {
  return (
    <div>
      <div className="w-full bg-[var(--color-background)]  text-[var(--color-foreground)]  h-screen">
        <Header />
        <Hero />
        <Categories/>
        <FeatureProduct />
        <SocialHanldes />
        <Footer />
      </div>
    </div>
  );
};

export default Bento;
