"use client";

import { getNextStep } from "@/utils/functions/handleSteps";
import type { MultiForm } from "@/utils/types/formTypes";
import { FormProvider, useForm, type SubmitHandler } from "react-hook-form";
import { GoBackButton } from "../utils/GoBackButton";

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
  });
  const { handleSubmit, setValue, getValues } = methods;
  const onSubmit: SubmitHandler<MultiForm> = (data) => console.log(data);
  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <GoBackButton />
        <button
          onClick={() => setValue("step", getNextStep(getValues("step")))}
        >
          Next
        </button>
      </form>
    </FormProvider>
  );
};
