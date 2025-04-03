import type { COUNTRIES } from "../constants/countries";
import type { FORM_STEPS } from "../constants/formSteps";

export type FormStep = (typeof FORM_STEPS)[keyof typeof FORM_STEPS];

type CountryCode = keyof typeof COUNTRIES;

type USAFields = {
  country: typeof COUNTRIES.USA.code;
  socialSecurityNumber: string;
  state: string;
  zipCode: string;
};

type UAEFields = {
  country: typeof COUNTRIES.UAE.code;
  emiratesId: string;
  visaType: string;
  city: string;
};

type IndiaFields = {
  country: typeof COUNTRIES.IND.code;
  aadhaarNumber: string;
  state: string;
  pinCode: string;
};

type GermanyFields = {
  country: typeof COUNTRIES.DEU.code;
  taxId: string;
  bundesland: string;
  postal: string;
};

type CanadaFields = {
  country: typeof COUNTRIES.CAN.code;
  sin: string;
  province: string;
  postalCode: string;
};

type CountryFields =
  | USAFields
  | UAEFields
  | IndiaFields
  | GermanyFields
  | CanadaFields;

export type MultiForm = {
  step: FormStep;
  country: CountryCode;
  image: string;
} & CountryFields;
