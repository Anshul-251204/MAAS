import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Heart, Search } from "lucide-react";
import React from "react";

type NavProps = {
  logoUrl: string;
  storeName: string;
};

const Nav = () => {
  const store = {
    logoUrl:
      "https://static.vecteezy.com/system/resources/previews/047/656/219/non_2x/abstract-logo-design-for-any-corporate-brand-business-company-vector.jpg",
    storeName: "Shop smart",
    categories: ["New Arrivals", "Men", "Women", "Sales"],
  };
  return (
    <div className="w-full h-[10vh] shadow-lg flex justify-between px-8 items-center">
      <div className="flex gap-4 items-center">
        <img
          className="w-12 h-12 rounded-full"
          src={store.logoUrl}
          alt="logo"
        />
        <h1 className="text-xl font-bold ">{store.storeName.toUpperCase()}</h1>
      
      </div>

      <div className="flex gap-3 items-center ">
        <div className="flex gap-2 items-center">
          <Input className="w-[20vw]" placeholder="Search" />
          <Search/>
        </div>

        <button>
          <Heart />
        </button>
        <Button variant="default">Login</Button>
      </div>
    </div>
  );
};

export default Nav;
