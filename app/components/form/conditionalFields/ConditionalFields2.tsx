import type { MultiForm } from "@/utils/types/formTypes";
import { useFormContext } from "react-hook-form";

export const ConditionalFields2 = () => {
  const { register, watch } = useFormContext<MultiForm>();
  const country = watch("country");
  if (country === "USA")
    return (
      <div>
        <label htmlFor="state">State</label>
        <input
          type="text"
          id="state"
          {...register("state", { required: "State is required" })}
        />
      </div>
    );
  if (country === "UAE")
    return (
      <div>
        <label htmlFor="visaType">Visa Type</label>
        <input
          type="text"
          id="visaType"
          {...register("visaType", { required: "Visa Type is required" })}
        />
      </div>
    );
  if (country === "IND")
    return (
      <div>
        <label htmlFor="state">State</label>
        <input
          type="text"
          id="state"
          {...register("state", { required: "State is required" })}
        />
      </div>
    );
  if (country === "DEU")
    return (
      <div>
        <label htmlFor="bundesland">Bundesland</label>
        <input
          type="text"
          id="bundesland"
          {...register("bundesland", { required: "Bundesland is required" })}
        />
      </div>
    );
  if (country === "CAN")
    return (
      <div>
        <label htmlFor="province">Province</label>
        <input
          type="text"
          id="province"
          {...register("province", { required: "Province is required" })}
        />
      </div>
    );
  return <p>Invalid country</p>;
};
