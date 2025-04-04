import { FORM_STEPS } from "@/utils/constants/formSteps";
import { useFormContext } from "react-hook-form";

const TOTAL_STEPS = Object.keys(FORM_STEPS).length;
export const ProgressIndicator = () => {
  const { watch } = useFormContext();
  const step = watch("step");

  return (
    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
      <div
        className="h-full bg-primary transition-all duration-300 ease-in-out"
        style={{ width: `${(step / TOTAL_STEPS) * 100}%` }}
      />
    </div>
  );
};
