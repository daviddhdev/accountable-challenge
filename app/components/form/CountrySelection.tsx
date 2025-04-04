import { FORM_DEFAULT_VALUES } from "@/utils/constants/formDefaultValues";
import { FORM_STEPS } from "@/utils/constants/formSteps";
import { useFormContext } from "react-hook-form";

export const CountrySelection = () => {
  const { register, watch, reset } = useFormContext();
  const step = watch("step");
  if (step !== FORM_STEPS.COUNTRY_INFO) return null;
  return (
    <div className="mb-6 mt-2">
      <label
        htmlFor="country"
        className="block text-sm font-medium text-foreground mb-1"
      >
        Country <span className="text-error">*</span>
      </label>
      <select
        {...register("country", {
          required: true,
          onChange: (e) => {
            //Clear the form when the country is changed
            reset({
              ...FORM_DEFAULT_VALUES,
              country: e.target.value,
            });
          },
        })}
        className="w-full px-3 py-2 rounded-md border border-border hover:border-primary/50 focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
        required
      >
        <option value="USA">United States of America</option>
        <option value="UAE">United Arab Emirates</option>
        <option value="IND">India</option>
        <option value="DEU">Germany</option>
        <option value="CAN">Canada</option>
      </select>
    </div>
  );
};
