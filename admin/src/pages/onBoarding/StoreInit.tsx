import React from "react";
import { Info } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type StoreInitPropType = {
  handleStoreInit: () => void;
};

const StoreInit: React.FC<StoreInitPropType> = ({ handleStoreInit }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.7,
        translateX: "100%",
        filter: "blur(10px)",
      }}
      animate={{
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        translateX: "0",
      }}
      transition={{
        duration: 0.3,
      }}
      className="border-border absolute z-10 flex w-full flex-col gap-2 rounded-2xl border p-8 md:w-[35%]"
    >
      <div className="mb-4">
        <h1 className="text-xl font-bold">Create you're store effotlessly</h1>
        <h1 className="text-md">
          Enter your details below to create to your store
        </h1>
      </div>

      <div className="grid gap-3">
        <Label htmlFor="storename">Store Name</Label>
        <Input
          id="storename"
          name="name"
          type="text"
          placeholder="john doh"
          required
        />
      </div>
      <div className="grid gap-3">
        <Label htmlFor="dis">Store Description</Label>
        <Input
          id="dis"
          type="text"
          name="description"
          placeholder="m@example.com"
          required
        />
      </div>
      <div className="grid gap-3">
        <Label htmlFor="domain">Domain</Label>
        <div className="relative">
          <Input id="domain" type="domain" placeholder="anshul" required />

          <span className="absolute top-[50%] right-2 -translate-y-[50%]">
            <Tooltip>
              <TooltipTrigger>
                <Info size={"1rem"} className="text-foreground/50" />
              </TooltipTrigger>
              <TooltipContent>
                <p>
                  Domain is used for you're store url
                  <br />
                  example : your enter anshul so you're <br />
                  store url is anshul.marketplace.com
                </p>
              </TooltipContent>
            </Tooltip>
          </span>
        </div>
        <h1>anshul.marketplace.com</h1>
      </div>

      <Button onClick={handleStoreInit} className="mt-2">
        Create Store 🚀
      </Button>
    </motion.div>
  );
};

export default StoreInit;
