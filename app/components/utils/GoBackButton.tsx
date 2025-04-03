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
    <button type="button" onClick={goBack}>
      Go Back
    </button>
  );
};
