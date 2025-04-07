import type { MultiForm } from "@/utils/types/formTypes";
import { useFormContext } from "react-hook-form";
import { InputField } from "../../utils/InputField";

export const ConditionalFields2 = () => {
  const { watch } = useFormContext<MultiForm>();
  const country = watch("country");
  if (country === "USA")
    return (
      <div>
        <InputField
          name="state"
          label="State"
          required
          validation={{
            maxLength: {
              value: 2,
              message: "State must be 2 characters",
            },
          }}
          placeholder="XX"
        />
      </div>
    );
  if (country === "UAE")
    return (
      <div>
        <InputField
          name="visaType"
          label="Visa Type"
          required
          validation={{
            maxLength: {
              value: 2,
              message: "Visa Type must be 2 characters",
            },
          }}
          placeholder="XX"
        />
      </div>
    );
  if (country === "IND")
    return (
      <div>
        <InputField
          name="state"
          label="State"
          required
          validation={{
            maxLength: {
              value: 2,
              message: "State must be 2 characters",
            },
          }}
          placeholder="XX"
        />
      </div>
    );
  if (country === "DEU")
    return (
      <div>
        <InputField
          name="bundesland"
          label="Bundesland"
          required
          validation={{
            maxLength: {
              value: 2,
              message: "Bundesland must be 2 characters",
            },
          }}
          placeholder="XX"
        />
      </div>
    );
  if (country === "CAN")
    return (
      <div>
        <InputField
          name="province"
          label="Province"
          required
          validation={{
            maxLength: {
              value: 2,
              message: "Province must be 2 characters",
            },
          }}
          placeholder="XX"
        />
      </div>
    );
  return <p>Invalid country</p>;
};
