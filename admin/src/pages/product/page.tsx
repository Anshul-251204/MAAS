import { useState } from "react";
import AddProduct from "./AddProduct";
import { Button } from "@/components/ui/button";
import { Edit, Plus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const LatestProduct = () => {
  const [isHover, setIsHover] = useState<boolean>(false);
  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className="relative w-[31%] overflow-hidden rounded-md border"
    >
      <div className="flex gap-2">
        <img
          className="h-[220px] w-full object-cover"
          src="https://images.unsplash.com/photo-1553691475-f38e4026275b?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>

      <div className="flex flex-col gap-2 p-4">
        <div className="flex justify-between">
          <h2 className="text-md font-bold">Rs. 1440</h2>
          <div className="w-fit rounded-2xl bg-green-200 p-1 px-4 text-xs font-bold text-green-600">
            Stock : 214
          </div>
        </div>
        <h2 className="text-md font-bold"> Brush </h2>
        <p className="text-sm">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. amet
          consectetur adipisicing elit. Atque, voluptate cupiditate quia dolor
          magnam expedita mollitia...
        </p>

        <div className="flex flex-1 flex-col gap-2 rounded-md">
          <div className="flex items-center justify-end gap-2">
            <Button>
              <Edit />
            </Button>

            <Button variant={"outline"}>
              <Plus />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Product: React.FC = () => {
  return (
    <div className="h-full w-full">
      <div className="mb-4 flex items-end justify-between py-4">
        <div className="grid gap-3">
          <Label className="text-lg">Search</Label>
          <div className="flex gap-2">
            <Input className="w-[400px]" />
            <Button>Search</Button>
          </div>
        </div>
        <AddProduct />
      </div>
      <div className="flex flex-wrap gap-6">
        <LatestProduct />
        <LatestProduct />
        <LatestProduct />
        <LatestProduct />
        <LatestProduct />
        <LatestProduct />
        <LatestProduct />
        <LatestProduct />
        <LatestProduct />
        <LatestProduct />
        <LatestProduct />
        <LatestProduct />
        <LatestProduct />
        <LatestProduct />
        <LatestProduct />

        {/* <LatestProduct />
        <LatestProduct /> */}
      </div>
    </div>
  );
};

export default Product;
