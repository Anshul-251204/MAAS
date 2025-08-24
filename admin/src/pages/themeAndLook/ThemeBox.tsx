import React from "react";
import { motion } from "motion/react";
import { PlusIcon } from "lucide-react";

export const ThemeBox: React.FC = () => {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
      className="flex h-24 min-w-[200px] items-center justify-evenly rounded-lg border"
    >
      <div className="h-12 w-12 rounded-full border-2 bg-white"></div>
      <div className="h-12 w-12 rounded-full border-2 bg-red-500"></div>
      <div className="h-12 w-12 rounded-full border-2 bg-black"></div>
    </motion.div>
  );
};

export const CustomTheme: React.FC = () => {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
      className="flex h-16 hover:bg-primary group transition-all duration-100 w-16 items-center justify-evenly rounded-full border"
    >
      <PlusIcon  className="group-hover:text-background"/>
    </motion.div>
  );
};
