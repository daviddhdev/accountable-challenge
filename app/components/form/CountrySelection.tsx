import { FORM_DEFAULT_VALUES } from "@/utils/constants/formDefaultValues";
import { FORM_STEPS } from "@/utils/constants/formSteps";
import { useFormContext } from "react-hook-form";

export const CountrySelection = () => {
  const { register, watch, reset } = useFormContext();
  const step = watch("step");
  if (step !== FORM_STEPS.COUNTRY_INFO) return null;
  return (
    <div>
      <label htmlFor="country">Country *</label>
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
