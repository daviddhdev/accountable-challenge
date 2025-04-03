import type { FORM_STEPS } from "../constants/formSteps";

export type FormStep = (typeof FORM_STEPS)[keyof typeof FORM_STEPS];

export type USAFields = {
  socialSecurityNumber: string;
  state: string;
  zipCode: string;
};

export type UAEFields = {
  emiratesId: string;
  visaType: string;
  city: string;
};

export type IndiaFields = {
  aadhaarNumber: string;
  state: string;
  pinCode: string;
};

export type GermanyFields = {
  taxId: string;
  bundesland: string;
  postalCode: string;
};

export type CanadaFields = {
  sin: string;
  province: string;
  postalCode: string;
};

type CountryFields =
  | (USAFields & { country: "USA" })
  | (UAEFields & { country: "UAE" })
  | (IndiaFields & { country: "IND" })
  | (GermanyFields & { country: "DEU" })
  | (CanadaFields & { country: "CAN" });

export type MultiForm = {
  step: FormStep;
  image: string;
} & CountryFields;
