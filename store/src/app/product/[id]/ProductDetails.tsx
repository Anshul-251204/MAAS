"use client";
import { useState } from "react";

import { CircleArrowLeft, CircleArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { div } from "motion/react-client";
import StarRating from "@/components/ui/StarRating";

type ProductDetailsProp = {
  theme: "BENTO" | "MINIMAL";
};

const ProductDetails: React.FC<ProductDetailsProp> = ({ theme }) => {
  const img = [
    {
      img: "https://images.unsplash.com/photo-1555689502-c4b22d76c56f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGFudHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      img: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGFudHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      img: "https://images.unsplash.com/photo-1602573991155-21f0143bb45c?q=80&w=1014&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      img: "https://images.unsplash.com/photo-1555689502-c4b22d76c56f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGFudHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      img: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGFudHxlbnwwfHwwfHx8MA%3D%3D",
    },
  ];

  const [currIdx, setCurrIdx] = useState<number>(0);

  return (
    <div className="w-full h-[89.8vh] flex">
      <div className={`w-[45%] flex flex-col gap-4 p-4 `}>
        {/* single image  */}
        <div className={`w-full  h-[80%] flex gap-2  `}>
          <div className="h-full flex items-center  w-6">
            <CircleArrowLeft
              onClick={() => {
                if (currIdx) {
                  setCurrIdx((i) => i - 1);
                }
              }}
            />
          </div>
          <div className={`w-full h-full  `}>
            <img
              className={`w-full h-full object-contain  rounded-2xl `}
              src={img[currIdx].img}
              alt=""
            />
          </div>
          <div className="h-full flex items-center  w-6">
            <CircleArrowRight
              onClick={() => {
                if (currIdx < img.length - 1) {
                  setCurrIdx((i) => i + 1);
                } else {
                  setCurrIdx(0);
                }
              }}
            />
          </div>
        </div>

        {/* all images */}
        <div className="flex justify-between px-5">
          {img.map((pro, idx) => (
            <div
              onClick={() => setCurrIdx(idx)}
              key={idx}
              className={`w-20 h-20 border cursor-pointer border-[var(--color-border)] overflow-hidden ${
                theme == "BENTO" ? "rounded-2xl" : "rounded-md"
              } bg-accent `}
            >
              <img
                src={pro.img}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="w-[55%] font-roboto flex flex-col p-4 gap-4">
        <h1 className="font-semibold text-2xl">Jeans Pant</h1>
        <p className="font-medium text-lg">Rs 1440</p>
        <p className="text-md text-[var(--color-foreground)]/70">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo sequi
          aliquam voluptatem voluptates commodi optio sapiente odit laborum,
          doloremque aut maiores enim dolorum earum quibusdam! Impedit
          recusandae est cupiditate accusantium!
        </p>
        <div className="w-full flex gap-4">
          <Button>Add to cart</Button>
          <Button>Buy now</Button>
        </div>

        <div>
          <h1 className="font-semibold text-2xl py-4">Colors</h1>
          <div className="color flex gap-8">
            {[
              "bg-red-500",
              "bg-green-500",
              "bg-pink-500",
              "bg-blue-500",
              "bg-yellow-500",
              "bg-white",
              "bg-black",
            ].map((c, idx) => (
              <div key={idx}>
                <div
                  className={`active:scale-[1.2] cursor-pointer ${c} w-8 h-8 border border-[var(--color-border)] rounded-full `}
                ></div>
                <p className="py-2 text-center text-md font-medium font-roboto">
                  {c.split("-")[1].toUpperCase()}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h1 className="font-semibold text-2xl py-4">Size</h1>
          <div className="color flex gap-8">
            {["xxs", "xs", "s", "m", "l", "xl", "xxl"].map((c, idx) => (
              <div
                key={idx}
                className={`active:scale-[1.2] cursor-pointer ${c} w-14 h-14 flex justify-center items-center border border-[var(--color-border)] rounded-full `}
              >
                <p className="py-2 text-center text-md font-medium font-roboto">
                  {c.toUpperCase()}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h1 className="font-semibold text-2xl py-4">Rating</h1>
          <StarRating rating={3.5} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
