import React, { useState } from "react";
import { AnimatePresence } from "motion/react";
import SignUp from "./SignUp";
import StoreInit from "./StoreInit";
import { useNavigate } from "react-router-dom";

type CurrentStepOfOnBoardingType = "signup" | "store-init";

const OnBoarding: React.FC = () => {
  const [currentStepOfOnBoarding, setCurrentStepOfOnBoarding] =
    useState<CurrentStepOfOnBoardingType>("signup");

  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      // api call for sign up

      setCurrentStepOfOnBoarding("store-init");
    } catch (error) {
      // handle errors here
    }
  };

  const handleStoreInit = async () => {
    navigate("/dashboard");
  };

  return (
    <div className="bg-background text-foreground flex h-screen w-full items-center justify-center">
      <AnimatePresence>
        {currentStepOfOnBoarding === "signup" && (
          <SignUp handleSignUp={handleSignUp} />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {currentStepOfOnBoarding === "store-init" && (
          <StoreInit handleStoreInit={handleStoreInit} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default OnBoarding;
