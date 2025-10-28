import { Button } from "@/components/ui/button";
import { useStoreStore } from "@/store/Store";
import { Edit, Trash } from "lucide-react";
import React from "react";

type CategoryCardProp = {
  imgSrc: string;
  name: string;
};

const CategoryCard: React.FC<CategoryCardProp> = ({ imgSrc, name }) => {
  return (
    <div className="grid w-full gap-4 rounded-lg border p-2 pb-4 sm:w-[48%] md:w-[30%] lg:w-[23%]">
      <img
        className="h-[250px] w-full rounded-md object-cover object-center"
        src={imgSrc}
      />
      <div className="flex items-center justify-between">
        <h1 className="text-md font-semibold">{name}</h1>
        <div className="flex gap-2">
          <Button variant={"outline"}>
            <Edit />
          </Button>
          <Button variant={"destructive"}>
            <Trash />
          </Button>
        </div>
      </div>
    </div>
  );
};

const Category: React.FC = () => {
  const tempCategoryData = [
    {
      img: "https://images.unsplash.com/photo-1558171813-4c088753af8f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=987",
      name: "Shirt",
    },
    {
      name: "Tshirt",
      img: "https://plus.unsplash.com/premium_photo-1673356302067-aac3b545a362?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=987",
    },
    {
      img: "https://images.unsplash.com/photo-1555689502-c4b22d76c56f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=987",
      name: "Pant",
    },
    {
      img: "https://images.unsplash.com/photo-1558171813-4c088753af8f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=987",
      name: "Shirt",
    },
    {
      name: "Tshirt",
      img: "https://plus.unsplash.com/premium_photo-1673356302067-aac3b545a362?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=987",
    },
    {
      img: "https://images.unsplash.com/photo-1555689502-c4b22d76c56f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=987",
      name: "Pant",
    },
    {
      img: "https://images.unsplash.com/photo-1558171813-4c088753af8f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=987",
      name: "Shirt",
    },
    {
      name: "Tshirt",
      img: "https://plus.unsplash.com/premium_photo-1673356302067-aac3b545a362?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=987",
    },
    {
      img: "https://images.unsplash.com/photo-1555689502-c4b22d76c56f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=987",
      name: "Pant",
    },
  ];
  const { store } = useStoreStore();
  return (
    <div className="w-full">
      <h1 className="text-2xl font-semibold">Categories</h1>
      <br />
      <hr />
      <br />

      <div className="flex w-full flex-wrap gap-4">
        {store?.categories?.map((cat) => (
          <CategoryCard key={cat.name} name={cat.name} imgSrc={cat.media.url} />
        ))}
      </div>
    </div>
  );
};

export default Category;
