import { FORM_STEPS } from "../constants/formSteps";
import type { FormStep } from "../types/formTypes";

export const getPreviousStep = (currentStep: FormStep): FormStep => {
  const steps = Object.values(FORM_STEPS);
  const currentIndex = steps.indexOf(currentStep);
  return currentIndex > 0 ? steps[currentIndex - 1] : steps[0];
};

export const getNextStep = (currentStep: FormStep): FormStep => {
  const steps = Object.values(FORM_STEPS);
  const currentIndex = steps.indexOf(currentStep);
  return currentIndex < steps.length - 1
    ? steps[currentIndex + 1]
    : steps[steps.length - 1];
};
