import { FORM_STEPS } from "@/utils/constants/formSteps";
import { useFormContext } from "react-hook-form";

export const ReviewAndSubmition = () => {
  const { watch } = useFormContext();
  const step = watch("step");
  if (step !== FORM_STEPS.REVIEW) return null;
  return (
    <div>
      <h2>Review</h2>
      <button type="submit">Submit</button>
    </div>
  );
};
