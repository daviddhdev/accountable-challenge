import { FORM_STEPS } from "../constants/formSteps";
import type {
  CanadaFields,
  GermanyFields,
  IndiaFields,
  MultiForm,
  UAEFields,
  USAFields,
} from "../types/formTypes";

type AllFormFields =
  | keyof MultiForm
  | keyof USAFields
  | keyof UAEFields
  | keyof IndiaFields
  | keyof GermanyFields
  | keyof CanadaFields;

export const getRequiredFieldsForStep = (
  step: number,
  country: string
): Array<AllFormFields> => {
  switch (step) {
    case FORM_STEPS.CONDITIONAL_INFO_1:
      switch (country) {
        case "USA":
          return ["socialSecurityNumber"];
        case "UAE":
          return ["emiratesId"];
        case "IND":
          return ["aadhaarNumber"];
        case "DEU":
          return ["taxId"];
        case "CAN":
          return ["sin"];
        default:
          return [];
      }
    case FORM_STEPS.CONDITIONAL_INFO_2:
      switch (country) {
        case "USA":
          return ["state"];
        case "UAE":
          return ["visaType"];
        case "IND":
          return ["state"];
        case "DEU":
          return ["bundesland"];
        case "CAN":
          return ["province"];
        default:
          return [];
      }
    case FORM_STEPS.CONDITIONAL_INFO_3:
      switch (country) {
        case "USA":
          return ["zipCode"];
        case "UAE":
          return ["city"];
        case "IND":
          return ["pinCode"];
        case "DEU":
          return ["postalCode"];
        case "CAN":
          return ["postalCode"];
        default:
          return [];
      }
    case FORM_STEPS.IMAGE_UPLOAD:
      return ["image"];
    default:
      return [];
  }
};
