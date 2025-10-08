export const getOnboardingStep = <T>(): T => {
  return (sessionStorage.getItem("onboarding-step") as T) || ("signup" as T);
};
