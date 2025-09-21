import Link from "next/link";
import React from "react";
type CategoryProps = {
  img: string;
  name: string;
};
const Category: React.FC<CategoryProps> = ({ img, name }) => {
  return (
    <Link href={"/category/random-cat"} className="min-w-[180px] h-[220px] hover:cursor-pointer ">
      <div className="w-full h-[180px]  rounded-full overflow-hidden object-center shadow-xl ">
        <img src={img} alt="" className="w-full h-full object-cover" />
      </div>
      <p className="text-center text-md font-semibold font-roboto p-2 hover:text-[var(--color-primary)]">
        {name}
      </p>
    </Link>
  );
};

const Categories: React.FC = () => {
  const categories = [
   
    {
      img: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hpcnR8ZW58MHx8MHx8fDA%3D",
      name: "Shirt",
    },
    {
      img: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Tshirt",
    },
    {
      img: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Pant",
    },
    {
      img: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hpcnR8ZW58MHx8MHx8fDA%3D",
      name: "Shirt",
    },
    {
      img: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Tshirt",
    },
    {
      img: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Pant",
    },
  ];
  return (
    <div className="p-8">
      <div className="w-full text-center text-4xl font-semibold font-roboto mb-20  ">
        Categories
      </div>

      <div className="w-full overflow-x-auto">
        <div className="flex gap-4 overflow-x-auto ">
          {categories.map((cat, idx) => (
            <Category img={cat.img} name={cat.name} key={cat.name + idx} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
