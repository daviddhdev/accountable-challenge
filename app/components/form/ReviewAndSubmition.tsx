import { FORM_STEPS } from "@/utils/constants/formSteps";
import type { MultiForm } from "@/utils/types/formTypes";
import Image from "next/image";
import { useFormContext } from "react-hook-form";

const COUNTRY_FIELDS = {
  USA: ["socialSecurityNumber", "state", "zipCode"],
  UAE: ["emiratesId", "visaType", "city"],
  IND: ["aadhaarNumber", "state", "pinCode"],
  DEU: ["taxId", "bundesland", "postalCode"],
  CAN: ["sin", "province", "postalCode"],
} as const;

export const ReviewAndSubmition = () => {
  const { watch, getValues } = useFormContext<MultiForm>();
  const step = watch("step");
  const country = getValues("country");
  const values = getValues();
  const image = getValues("image");

  if (step !== FORM_STEPS.REVIEW) return null;

  const fields = COUNTRY_FIELDS[country as keyof typeof COUNTRY_FIELDS] || [];

  return (
    <div>
      <h2>Review</h2>
      <div className="space-y-2">
        <div>Country: {country}</div>
        <div>Image:</div>
        <Image src={image} alt="profile" width={100} height={100} />
        {fields.map((field) => (
          <div key={field}>
            {field}: {(values as unknown as Record<string, string>)[field]}
          </div>
        ))}
      </div>
      <button type="submit">Submit</button>
    </div>
  );
};
