import type { MultiForm } from "@/utils/types/formTypes";
import { useFormContext } from "react-hook-form";

export const ConditionalFields1 = () => {
  const { register, watch } = useFormContext<MultiForm>();
  const country = watch("country");
  if (country === "USA")
    return (
      <div>
        <label htmlFor="socialSecurityNumber">Social Security Number</label>
        <input
          type="text"
          id="socialSecurityNumber"
          {...register("socialSecurityNumber", {
            required: "Social Security Number is required",
          })}
        />
      </div>
    );
  if (country === "UAE")
    return (
      <div>
        <label htmlFor="emiratesId">Emirates ID</label>
        <input
          type="text"
          id="emiratesId"
          {...register("emiratesId", {
            required: "Emirates ID is required",
          })}
        />
      </div>
    );
  if (country === "IND")
    return (
      <div>
        <label htmlFor="aadhaarNumber">Aadhaar Number</label>
        <input
          type="text"
          id="aadhaarNumber"
          {...register("aadhaarNumber", {
            required: "Aadhaar Number is required",
          })}
        />
      </div>
    );
  if (country === "DEU")
    return (
      <div>
        <label htmlFor="taxId">Tax ID</label>
        <input
          type="text"
          id="taxId"
          {...register("taxId", {
            required: "Tax ID is required",
          })}
        />
      </div>
    );
  if (country === "CAN")
    return (
      <div>
        <label htmlFor="sin">SIN</label>
        <input
          type="text"
          id="sin"
          {...register("sin", { required: "SIN is required" })}
        />
      </div>
    );
  return <p>Invalid country</p>;
};
