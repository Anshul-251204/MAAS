import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "motion/react";

type SignUpPropType = {
  handleSignUp: () => void;
};
const SignUp: React.FC<SignUpPropType> = ({ handleSignUp }) => {
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
        <h1 className="text-xl font-bold">Create you're vendor account now</h1>
        <h1 className="text-md">
          Enter your details below to create to your account
        </h1>
      </div>

      <div className="grid gap-3">
        <Label htmlFor="name">Name</Label>
        <Input id="name" type="text" placeholder="john doh" required />
      </div>
      <div className="grid gap-3">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="m@example.com" required />
      </div>
      <div className="grid gap-3">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          placeholder="sercue@234"
          required
        />
      </div>
      <div className="grid gap-3">
        <Label htmlFor="cpassword">Confirm Password</Label>
        <Input
          id="cpassword"
          type="password"
          placeholder="sercue@234"
          required
        />
      </div>
      <div className="grid gap-3">
        <Label htmlFor="phone">Phone No</Label>
        <Input id="phone" type="number" placeholder="6264056018" required />
      </div>

      <Button onClick={handleSignUp} className="mt-2">
        Sign Up 🚀
      </Button>
      <h1 className="text-center font-semibold">
        Already have an account ?{" "}
        <span className="text-primary font-semibold">Sign in </span>{" "}
      </h1>
    </motion.div>
  );
};

export default SignUp;
