import type { MultiForm } from "@/utils/types/formTypes";
import { useFormContext } from "react-hook-form";
import { InputField } from "../../utils/InputField";

export const ConditionalFields1 = () => {
  const { watch } = useFormContext<MultiForm>();
  const country = watch("country");

  if (country === "USA")
    return (
      <div>
        <InputField
          name="socialSecurityNumber"
          label="Social Security Number"
          required
          validation={{
            pattern: {
              value:
                /^(\d{3}[-]?\d{2}[-]?\d{4}|[A-Z]{3}[-]?[A-Z]{2}[-]?[A-Z]{4})$/,
              message: "Please enter a valid SSN (XXX-XX-XXXX)",
            },
          }}
          placeholder="XXX-XX-XXXX"
        />
      </div>
    );

  if (country === "UAE")
    return (
      <div>
        <InputField
          name="emiratesId"
          label="Emirates ID"
          required
          validation={{
            pattern: {
              value: /^784-[A-Z]{4}-[A-Z]{7}-[A-Z]{1}$/,
              message: "Please enter a valid Emirates ID (784-XXXX-XXXXXXX-X)",
            },
          }}
          placeholder="784-XXXX-XXXXXXX-X"
        />
      </div>
    );

  if (country === "IND")
    return (
      <div>
        <InputField
          name="aadhaarNumber"
          label="Aadhaar Number"
          required
          validation={{
            pattern: {
              value: /^\d{12}$/,
              message: "Please enter a valid 12-digit Aadhaar Number",
            },
          }}
          placeholder="123456789012"
        />
      </div>
    );

  if (country === "DEU")
    return (
      <div>
        <InputField
          name="taxId"
          label="Tax ID"
          required
          validation={{
            pattern: {
              value: /^\d{11}$/,
              message: "Please enter a valid 11-digit Tax ID",
            },
          }}
          placeholder="12345678901"
        />
      </div>
    );

  if (country === "CAN")
    return (
      <div>
        <InputField
          name="sin"
          label="SIN"
          required
          validation={{
            pattern: {
              value:
                /^(\d{3}[-]?\d{3}[-]?\d{3}|[A-Z]{3}[-]?[A-Z]{3}[-]?[A-Z]{3})$/,
              message: "Please enter a valid SIN (XXX-XXX-XXX)",
            },
          }}
          placeholder="XXX-XXX-XXX"
        />
      </div>
    );

  return <p>Invalid country</p>;
};
