import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "motion/react";
import { Eye, EyeClosed } from "lucide-react";

const SignUpSchema = z
  .object({
    name: z.string().min(2, "Name is required"),
    email: z.string().email("Enter a valid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    cpassword: z.string().min(6, "Confirm your password"),
    phone: z.string().regex(/^\d{10}$/, "Enter a valid 10-digit phone number"),
  })
  .refine((data) => data.password === data.cpassword, {
    message: "Passwords do not match",
    path: ["cpassword"],
  });

type SignUpFormType = z.infer<typeof SignUpSchema>;

type SignUpPropType = {
  handleSignUp: (data: SignUpFormType) => void;
  loading: boolean;
};

const SignUp: React.FC<SignUpPropType> = ({ handleSignUp, loading }) => {
  const [isPasswordHide, setIsPasswordHide] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormType>({
    resolver: zodResolver(SignUpSchema),
  });

  const onSubmit = (data: SignUpFormType) => {
    handleSignUp(data);
  };
  const changeIsPasswordHide = () => {
    setIsPasswordHide((p) => !p);
  };

  return (
    <motion.div
      exit={{
        opacity: 0,
        scale: 0.9,
        translateX: "-100%",
        filter: "blur(10px)",
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
      className="border-border flex w-full flex-col gap-2 rounded-2xl border p-8 md:w-[35%]"
    >
      <div className="mb-4">
        <h1 className="text-xl font-bold">Create your vendor account now</h1>
        <h1 className="text-md">
          Enter your details below to create your account
        </h1>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
        {/* Name */}
        <div className="grid gap-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" {...register("name")} placeholder="John Doe" />
          {errors.name && (
            <p className="text-xs text-red-500">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            {...register("email")}
            placeholder="m@example.com"
          />
          {errors.email && (
            <p className="text-xs text-red-500">{errors.email.message}</p>
          )}
        </div>

        {/* Password */}
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <div className="relative">
            <Input
              id="password"
              type={isPasswordHide ? "text" : "password"}
              placeholder="secure@234"
              {...register("password")}
            />
            {isPasswordHide ? (
              <Eye
                onClick={changeIsPasswordHide}
                className="absolute top-3 right-2"
                size={"1.2rem"}
              />
            ) : (
              <EyeClosed
                onClick={changeIsPasswordHide}
                className="absolute top-3 right-2"
                size={"1.2rem"}
              />
            )}
          </div>
          {errors.password && (
            <p className="text-xs text-red-500">{errors.password.message}</p>
          )}
        </div>

        {/* Confirm Password */}
        <div className="grid gap-2">
          <Label htmlFor="cpassword">Confirm Password</Label>
          <div className="relative">
            <Input
              id="cpassword"
              type={isPasswordHide ? "text" : "password"}
              placeholder="secure@234"
              {...register("cpassword")}
            />
            {isPasswordHide ? (
              <Eye
                onClick={changeIsPasswordHide}
                className="absolute top-3 right-2"
                size={"1.2rem"}
              />
            ) : (
              <EyeClosed
                onClick={changeIsPasswordHide}
                className="absolute top-3 right-2"
                size={"1.2rem"}
              />
            )}
          </div>
          {errors.cpassword && (
            <p className="text-xs text-red-500">{errors.cpassword.message}</p>
          )}
        </div>

        {/* Phone */}
        <div className="grid gap-2">
          <Label htmlFor="phone">Phone No</Label>
          <Input
            id="phone"
            type="text"
            placeholder="6264056018"
            {...register("phone")}
          />
          {errors.phone && (
            <p className="text-xs text-red-500">{errors.phone.message}</p>
          )}
        </div>

        <Button type="submit" className="mt-4">
          {loading ? (
            <span>
              Loading{" "}
              <span className="border-primary h-4 w-4 animate-spin rounded-full border-t border-l"></span>{" "}
            </span>
          ) : (
            "Sign Up 🚀"
          )}
        </Button>
      </form>

      <h1 className="text-center font-semibold">
        Already have an account?{" "}
        <span className="text-primary cursor-pointer font-semibold">
          Sign in
        </span>
      </h1>
    </motion.div>
  );
};

export default SignUp;
