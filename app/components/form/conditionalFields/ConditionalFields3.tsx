import type { MultiForm } from "@/utils/types/formTypes";
import { useFormContext } from "react-hook-form";

export const ConditionalFields3 = () => {
  const { register, watch } = useFormContext<MultiForm>();
  const country = watch("country");
  if (country === "USA")
    return (
      <div>
        <label htmlFor="zipCode">Zip Code</label>
        <input
          type="text"
          id="zipCode"
          {...register("zipCode", { required: "Zip Code is required" })}
        />
      </div>
    );
  if (country === "UAE")
    return (
      <div>
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          {...register("city", { required: "City is required" })}
        />
      </div>
    );
  if (country === "IND")
    return (
      <div>
        <label htmlFor="pinCode">PIN Code</label>
        <input
          type="text"
          id="pinCode"
          {...register("pinCode", { required: "PIN Code is required" })}
        />
      </div>
    );
  if (country === "DEU")
    return (
      <div>
        <label htmlFor="postalCode">Postal Code</label>
        <input
          type="text"
          id="postalCode"
          {...register("postalCode", { required: "Postal Code is required" })}
        />
      </div>
    );
  if (country === "CAN")
    return (
      <div>
        <label htmlFor="postalCode">Postal Code</label>
        <input
          type="text"
          id="postalCode"
          {...register("postalCode", { required: "Postal Code is required" })}
        />
      </div>
    );
  return <p>Invalid country</p>;
};
