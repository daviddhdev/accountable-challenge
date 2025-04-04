"use client";

import { FORM_STEPS } from "@/utils/constants/formSteps";
import { getRequiredFieldsForStep } from "@/utils/functions/getRequiredFieldsForStep";
import { getNextStep } from "@/utils/functions/handleSteps";
import type { MultiForm } from "@/utils/types/formTypes";
import { FormProvider, useForm, type SubmitHandler } from "react-hook-form";
import useFormPersist from "react-hook-form-persist";
import { GoBackButton } from "../utils/GoBackButton";
import { ConditionalFields } from "./ConditionalFields";
import { CountrySelection } from "./CountrySelection";
import { ReviewAndSubmition } from "./ReviewAndSubmition";
import { UploadImage } from "./UploadImage";

//This will change later so we can read the values from the local storage
const DEFAULTS: MultiForm = {
  step: 1,
  country: "USA",
  image: "",
  socialSecurityNumber: "",
  state: "",
  zipCode: "",
};

export const FormWrapper = () => {
  const methods = useForm<MultiForm>({
    defaultValues: DEFAULTS,
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
    console.log(data);
    console.log("form submitted");
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <GoBackButton />
        <CountrySelection />
        <ConditionalFields />
        <UploadImage />
        <ReviewAndSubmition />
        {currentStep !== FORM_STEPS.REVIEW && (
          <div>
            {hasErrors && (
              <p className="text-red-500 mb-2">
                Please fill in all required fields before proceeding
              </p>
            )}
            <button type="button" onClick={handleNextStep} disabled={hasErrors}>
              Next
            </button>
          </div>
        )}
      </form>
    </FormProvider>
  );
};
