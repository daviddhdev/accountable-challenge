import { FORM_STEPS } from "@/utils/constants/formSteps";
import { useFormContext } from "react-hook-form";
import { ConditionalFields1 } from "./conditionalFields/ConditionalFields1";
import { ConditionalFields2 } from "./conditionalFields/ConditionalFields2";
import { ConditionalFields3 } from "./conditionalFields/ConditionalFields3";
export const ConditionalFields = () => {
  const { watch } = useFormContext();
  const step = watch("step");

  if (step === FORM_STEPS.CONDITIONAL_INFO_1) return <ConditionalFields1 />;
  if (step === FORM_STEPS.CONDITIONAL_INFO_2) return <ConditionalFields2 />;
  if (step === FORM_STEPS.CONDITIONAL_INFO_3) return <ConditionalFields3 />;
  return null;
};
