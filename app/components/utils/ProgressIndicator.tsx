import { FORM_STEPS } from "@/utils/constants/formSteps";
import { useFormContext } from "react-hook-form";

const TOTAL_STEPS = Object.keys(FORM_STEPS).length;
export const ProgressIndicator = () => {
  const { watch } = useFormContext();
  const step = watch("step");

  return (
    <div className="w-full rounded-full bg-gray-200">
      <div
        className="h-2 rounded-full bg-blue-500 duration-300"
        style={{ width: `${(step / TOTAL_STEPS) * 100}%` }}
      ></div>
    </div>
  );
};
