import { FORM_STEPS } from "@/utils/constants/formSteps";
import { useFormContext } from "react-hook-form";

export const CountrySelection = () => {
  const { register, watch } = useFormContext();
  const step = watch("step");
  if (step !== FORM_STEPS.COUNTRY_INFO) return null;
  return (
    <div>
      <label htmlFor="country">Country *</label>
      <select {...register("country", { required: true })} required>
        <option value="USA">United States of America</option>
        <option value="UAE">United Arab Emirates</option>
        <option value="IND">India</option>
        <option value="DEU">Germany</option>
        <option value="CAN">Canada</option>
      </select>
    </div>
  );
};
