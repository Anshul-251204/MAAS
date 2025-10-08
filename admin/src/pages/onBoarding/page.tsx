import React, { useState } from "react";
import { AnimatePresence } from "motion/react";
import SignUp from "./SignUp";
import StoreInit from "./StoreInit";
import { useNavigate } from "react-router-dom";
import { userService } from "@/api/userServices";
import { useMutation } from "@/hooks/useMutation";
import { toast } from "sonner";
import { storeService } from "@/api/storeServices";
import { getOnboardingStep } from "@/helper/general";

type CurrentStepOfOnBoardingType = "signup" | "store-init";

const OnBoarding: React.FC = () => {
  const [currentStepOfOnBoarding, setCurrentStepOfOnBoarding] =
    useState<CurrentStepOfOnBoardingType>(
      getOnboardingStep<CurrentStepOfOnBoardingType>(),
    );

  const navigate = useNavigate();

  const { mutate: createUser, loading } = useMutation<ApiResponseType>(
    userService.signUp,
    {
      onSuccess: (data) => {
        console.log(data);
        toast.success(data.message, {
          position: "top-center",
        });
        localStorage.setItem(
          "x-secure-token",
          data.data?.accessToken as string,
        );
        sessionStorage.setItem("onboarding-step", "store-init");
        setCurrentStepOfOnBoarding("store-init");
      },
      onError: (err) => {
        if (err.response.data.message) {
          toast.error(err.response.data.message, {
            position: "top-center",
          });
        }
      },
    },
  );

  const { mutate: createStore } = useMutation<ApiResponseType>(
    storeService.storeInit,
    {
      onSuccess: (data) => {
        toast.success(data.message, {
          position: "top-center",
        });
        navigate("/dashboard");
      },
      onError: (err) => {
        if (err.response.data.message) {
          toast.error(err.response.data.message, {
            position: "top-center",
          });
        }
      },
    },
  );

  console.log(createStore);

  const handleSignUp = async (data: any) => {
    await createUser(data);
  };

  const handleStoreInit = async (data: any) => {
    createStore(data);
  };

  return (
    <div className="bg-background text-foreground flex h-screen w-full items-center justify-center">
      <AnimatePresence>
        {currentStepOfOnBoarding === "signup" && (
          <SignUp handleSignUp={handleSignUp} loading={loading} />
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
