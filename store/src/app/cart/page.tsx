import { Button } from "@/components/ui/Button";
import HeaderAccrodingToTheme from "@/components/ui/Header";
import { MoveRight, ShoppingCart, X } from "lucide-react";

import React from "react";

const CartItem = () => {
  return (
    <div className="w-full flex justify-between border border-[var(--color-border)] rounded-md p-2 sm:p-4 sm:rounded-2xl ">
      <div className="flex  gap-4">
        <img
          className="w-[80px] h-[90px] sm:w-[100px] sm:h-[120px] rounded-md sm:rounded-xl object-cover "
          src="https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=1004&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <div className="pt-2 flex flex-col sm:gap-4">
          <h1 className="text-xl font-semibold font-roboto">Perfume</h1>
          <h1 className="text-sm font-medium font-roboto">Quantity : 3</h1>
          <h1 className="text-md font-semibold font-roboto">₹ 430</h1>
        </div>
      </div>

      <div className="flex flex-col items-end gap-1 sm:gap-4">
        <button>
          <X size={"1.2rem"} />
        </button>
      </div>
    </div>
  );
};

const page = () => {
  return (
    <div className="w-full ">
      <HeaderAccrodingToTheme />
      <div className="w-full sm:p-8 p-4 ">
        <h1 className="text-2xl font-semibold font-roboto flex gap-4 items-center">
          Shopping Cart <ShoppingCart />
        </h1>
        <br />
        <br />

        <div className="w-full flex flex-col gap-4 lg:gap-2 md:flex-row">
          <div className="flex w-full md:w-[70%] flex-col gap-4">
            <CartItem />
            <CartItem />
            <CartItem />
          </div>

          <div className="w-full md:w-[30%] md:px-8 ">
            <h1 className="text-xl font-medium mb-4">Order Summary</h1>

            <div>
              <div className="grid grid-cols-2 gap-2  text-md font-[500] ">
                <div>
                  <h1>Sub total</h1>
                </div>
                <div>
                  <h1 className="text-right">₹430</h1>
                </div>
                <div>
                  <h1>Quantity</h1>
                </div>
                <div>
                  <h1 className="text-right">1</h1>
                </div>
                <div>
                  <h1>Platform fee :</h1>
                </div>
                <div>
                  <h1 className="text-right">₹5</h1>
                </div>
              </div>

              <div className="border-t mt-4 border-[var(--color-border)] flex justify-between font-semibold pt-4">
                
                <h1>Total : </h1>
                <h1>435</h1>
              </div>

              <div className="mt-8 font-semibold flex gap-2 text-sm">
                <h1>Or continue to shopping </h1><MoveRight />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
