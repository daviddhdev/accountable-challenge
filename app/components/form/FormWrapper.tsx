"use client";

import { FORM_DEFAULT_VALUES } from "@/utils/constants/formDefaultValues";
import { FORM_STEPS } from "@/utils/constants/formSteps";
import { getRequiredFieldsForStep } from "@/utils/functions/getRequiredFieldsForStep";
import { getNextStep } from "@/utils/functions/handleSteps";
import type { MultiForm } from "@/utils/types/formTypes";
import { useState } from "react";
import { FormProvider, useForm, type SubmitHandler } from "react-hook-form";
import useFormPersist from "react-hook-form-persist";
import { GoBackButton } from "../utils/GoBackButton";
import { LoadingIndicator } from "../utils/LoadingIndicator";
import { ProgressIndicator } from "../utils/ProgressIndicator";
import { ConditionalFields } from "./ConditionalFields";
import { CountrySelection } from "./CountrySelection";
import { ReviewAndSubmition } from "./ReviewAndSubmition";
import { UploadImage } from "./UploadImage";

export const FormWrapper = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const methods = useForm<MultiForm>({
    defaultValues: FORM_DEFAULT_VALUES as MultiForm,
    mode: "onChange",
  });

  const {
    handleSubmit,
    setValue,
    getValues,
    trigger,
    watch,
    formState: { errors },
  } = methods;

  useFormPersist("form", {
    watch,
    setValue,
  });

  const currentStep = getValues("step");
  const currentCountry = getValues("country");

  const requiredFields = getRequiredFieldsForStep(currentStep, currentCountry);
  const hasErrors = requiredFields.some(
    (field) => errors[field as keyof MultiForm]
  );

  const handleNextStep = async () => {
    const isStepValid = await trigger();
    if (isStepValid) {
      setValue("step", getNextStep(getValues("step")));
    }
  };
  const onSubmit: SubmitHandler<MultiForm> = (data) => {
    console.log("Submitted data", data);
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 3000);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {isSubmitting && <LoadingIndicator />}
        <ProgressIndicator />
        {!isSubmitted && <GoBackButton />}
        <CountrySelection />
        <ConditionalFields />
        <UploadImage />
        <ReviewAndSubmition isSubmitted={isSubmitted} />
        {currentStep !== FORM_STEPS.REVIEW && (
          <div className="flex justify-end">
            <button
              type="button"
              onClick={handleNextStep}
              disabled={hasErrors}
              className="inline-flex items-center py-2 px-4 text-sm font-medium text-secondary hover:text-foreground transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>
        )}
      </form>
    </FormProvider>
  );
};
