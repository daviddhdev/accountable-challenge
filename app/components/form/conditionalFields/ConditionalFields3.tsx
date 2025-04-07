import type { MultiForm } from "@/utils/types/formTypes";
import { useFormContext } from "react-hook-form";
import { InputField } from "../../utils/InputField";

export const ConditionalFields3 = () => {
  const { watch } = useFormContext<MultiForm>();
  const country = watch("country");
  if (country === "USA")
    return (
      <div>
        <InputField
          name="zipCode"
          label="Zip Code"
          required
          validation={{
            pattern: {
              value: /^\d{5}$/,
              message: "Zip Code must be 5 digits",
            },
          }}
          placeholder="12345"
        />
      </div>
    );
  if (country === "UAE")
    return (
      <div>
        <InputField
          name="city"
          label="City"
          required
          validation={{
            maxLength: {
              value: 20,
              message: "City must be less than 20 characters",
            },
          }}
          placeholder="Madrid"
        />
      </div>
    );
  if (country === "IND")
    return (
      <div>
        <InputField
          name="pinCode"
          label="PIN Code"
          required
          validation={{
            pattern: {
              value: /^\d{6}$/,
              message: "PIN Code must be 6 digits",
            },
          }}
          placeholder="123456"
        />
      </div>
    );
  if (country === "DEU")
    return (
      <div>
        <InputField
          name="postalCode"
          label="Postal Code"
          required
          validation={{
            pattern: {
              value: /^\d{5}$/,
              message: "Postal Code must be 5 digits",
            },
          }}
          placeholder="12345"
        />
      </div>
    );
  if (country === "CAN")
    return (
      <div>
        <InputField
          name="postalCode"
          label="Postal Code"
          required
          validation={{
            pattern: {
              value: /^\d{5}$/,
              message: "Postal Code must be 5 digits",
            },
          }}
          placeholder="12345"
        />
      </div>
    );
  return <p>Invalid country</p>;
};
