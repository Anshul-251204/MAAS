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
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const storeInitSchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().min(1, "Description is required"),
  domain: z
    .string()
    .min(1, "Domain is required")
    .max(20, "Domain can not be more then 20 letter"),
});

type StoreInitFormType = z.infer<typeof storeInitSchema>;

type StoreInitPropType = {
  handleStoreInit: (data: any) => void;
};

const StoreInit: React.FC<StoreInitPropType> = ({ handleStoreInit }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<StoreInitFormType>({
    resolver: zodResolver(storeInitSchema),
  });

  const onSubmit = (data: StoreInitFormType) => {
    handleStoreInit(data);
  };
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
          {...register("name")}
          type="text"
          placeholder="john doh"
          required
        />
        {errors.name && (
          <p className="text-xs text-red-500">{errors.name.message}</p>
        )}
      </div>
      <div className="grid gap-3">
        <Label htmlFor="dis">Store Description</Label>
        <Input
          id="dis"
          type="text"
          {...register("description")}
          placeholder="m@example.com"
          required
        />
        {errors.description && (
          <p className="text-xs text-red-500">{errors.description.message}</p>
        )}
      </div>
      <div className="grid gap-3">
        <Label htmlFor="domain">Domain</Label>
        <div className="relative">
          <Input
            id="domain"
            type="domain"
            {...register("domain")}
            placeholder="anshul"
            required
          />

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
        {errors.domain && (
          <p className="text-xs text-red-500">{errors.domain.message}</p>
        )}
        <h1>{watch("domain")}.shopx.com</h1>
      </div>

      <Button onClick={handleSubmit(onSubmit)} className="mt-2">
        Create Store 🚀
      </Button>
    </motion.div>
  );
};

export default StoreInit;
