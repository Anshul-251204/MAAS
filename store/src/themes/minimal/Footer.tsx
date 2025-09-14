import React from "react";

const Footer = () => {
  const links = ["Privacy policy", "Terms & Conditions", "Contact Us"];
  return (
    <div className="w-full h-[10vh] shadow-inner    flex items-center justify-between  px-8">
      <div className="flex gap-4 font-bold text-md ">
        {links.map((link) => (
          <button
          className=" cursor-pointer " 
          key={link}>{link}</button>
        ))}
      </div>

      <div className="text-xs font-medium">@2025 Shopx All right reserved.</div>
    </div>
  );
};

export default Footer;
