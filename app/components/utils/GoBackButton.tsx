"use client";
import { FORM_STEPS } from "@/utils/constants/formSteps";
import { getPreviousStep } from "@/utils/functions/handleSteps";
import type { MultiForm } from "@/utils/types/formTypes";
import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";

export const GoBackButton = () => {
  const { setValue, watch } = useFormContext<MultiForm>();
  const [isVisible, setIsVisible] = useState(false);
  const step = watch("step");

  const goBack = () => {
    if (step > FORM_STEPS.COUNTRY_INFO) {
      setValue("step", getPreviousStep(step));
    }
  };

  useEffect(() => {
    setIsVisible(step !== FORM_STEPS.COUNTRY_INFO);
  }, [step]);

  if (!isVisible) return null;
  return (
    <button
      type="button"
      onClick={goBack}
      className="inline-flex items-center py-2 text-sm font-medium text-secondary hover:text-foreground transition-colors duration-200"
    >
      <svg
        className="w-4 h-4 mr-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 19l-7-7m0 0l7-7m-7 7h18"
        />
      </svg>
      Go Back
    </button>
  );
};
