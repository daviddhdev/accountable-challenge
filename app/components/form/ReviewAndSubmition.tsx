import { COUNTRIES } from "@/utils/constants/countries";
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
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-foreground">
        Review Your Information
      </h2>
      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <div className="relative w-20 h-20 rounded-lg overflow-hidden">
            <Image src={image} alt="profile" fill className="object-cover" />
          </div>
          <div>
            <h3 className="text-lg font-medium text-foreground">
              Profile Image
            </h3>
            <p className="text-sm text-secondary">Your profile picture</p>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-medium text-foreground">
            Country Information
          </h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <p className="text-sm text-secondary">Country</p>
              <p className="font-medium text-foreground">
                {COUNTRIES[country].name}
              </p>
            </div>
            {fields.map((field) => (
              <div key={field}>
                <p className="text-sm text-secondary capitalize">
                  {field.replace(/([A-Z])/g, " $1").trim()}
                </p>
                <p className="font-medium text-foreground">
                  {(values as unknown as Record<string, string>)[field]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="w-full px-4 py-2 text-white bg-primary hover:bg-primary-hover rounded-md transition-colors duration-200"
      >
        Submit Registration
      </button>
    </div>
  );
};
