import type { countries } from "../constants/countries";

export type FormStep = 1 | 2 | 3 | 4 | 5 | 6;

type CountryCode = keyof typeof countries;

type USAFields = {
  country: typeof countries.USA.code;
  socialSecurityNumber: string;
  state: string;
  zipCode: string;
};

type UAEFields = {
  country: typeof countries.UAE.code;
  emiratesId: string;
  visaType: string;
  city: string;
};

type IndiaFields = {
  country: typeof countries.IND.code;
  aadhaarNumber: string;
  state: string;
  pinCode: string;
};

type GermanyFields = {
  country: typeof countries.DEU.code;
  taxId: string;
  bundesland: string;
  postal: string;
};

type CanadaFields = {
  country: typeof countries.CAN.code;
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
