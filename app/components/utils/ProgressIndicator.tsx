import { FORM_STEPS } from "@/utils/constants/formSteps";
import { useFormContext } from "react-hook-form";

const TOTAL_STEPS = Object.keys(FORM_STEPS).length;
export const ProgressIndicator = () => {
  const { watch } = useFormContext();
  const step = watch("step");

  return (
    <div className="flex flex-col gap-2">
      <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full bg-primary transition-all duration-300 ease-in-out"
          style={{ width: `${(step / TOTAL_STEPS) * 100}%` }}
        />
      </div>
      <div className="self-end">
        <p className="text-sm text-foreground">
          {step}/{TOTAL_STEPS}
        </p>
      </div>
    </div>
  );
};
